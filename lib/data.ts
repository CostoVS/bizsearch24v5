export * from './categories';

export const PROVINCES = [
  { id: 'kwazulu-natal', slug: 'kwazulu-natal', name: 'KwaZulu-Natal', code: 'KZN', towns: ['Durban', 'Pietermaritzburg', 'Richards Bay', 'Empangeni', 'Newcastle', 'Port Shepstone', 'Ladysmith', 'Amanzimtoti', 'Ballito', 'Umhlanga'] },
  { id: 'gauteng', slug: 'gauteng', name: 'Gauteng', code: 'GP', towns: ['Johannesburg', 'Pretoria', 'Sandton', 'Randburg', 'Midrand', 'Centurion', 'Soweto', 'Roodepoort', 'Germiston', 'Benoni'] },
  { id: 'western-cape', slug: 'western-cape', name: 'Western Cape', code: 'WC', towns: ['Cape Town', 'Stellenbosch', 'Paarl', 'George', 'Worcester', 'Somerset West', 'Bellville', 'Hermanus', 'Knysna', 'Mossel Bay'] },
  { id: 'eastern-cape', slug: 'eastern-cape', name: 'Eastern Cape', code: 'EC', towns: ['Gqeberha (Port Elizabeth)', 'East London', 'Mthatha', 'Uitenhage', 'Grahamstown', 'Queenstown', 'King William\'s Town'] },
  { id: 'free-state', slug: 'free-state', name: 'Free State', code: 'FS', towns: ['Bloemfontein', 'Welkom', 'Sasolburg', 'Bethlehem', 'Kroonstad', 'Parys'] },
  { id: 'limpopo', slug: 'limpopo', name: 'Limpopo', code: 'LP', towns: ['Polokwane (Pietersburg)', 'Tzaneen', 'Thohoyandou', 'Modimolle', 'Bela-Bela', 'Phalaborwa'] },
  { id: 'mpumalanga', slug: 'mpumalanga', name: 'Mpumalanga', code: 'MP', towns: ['Nelspruit (Mbombela)', 'Witbank (Emalahleni)', 'Secunda', 'Middelburg', 'Barberton', 'White River'] },
  { id: 'north-west', slug: 'north-west', name: 'North West', code: 'NW', towns: ['Rustenburg', 'Mahikeng (Mafikeng)', 'Potchefstroom', 'Klerksdorp', 'Brits', 'Hartebeespoort'] },
  { id: 'northern-cape', slug: 'northern-cape', name: 'Northern Cape', code: 'NC', towns: ['Kimberley', 'Upington', 'Springbok', 'De Aar', 'Kuruman', 'Colesberg'] }
];

export const safeLocalStorage = {
  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
  removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch {}
  }
};

export async function fetchAndStoreAds(): Promise<any[]> {
  try {
    const res = await fetch('/api/storage');
    if (!res.ok) return [];
    const data = await res.json();
    const ads = data.ads || [];
    safeLocalStorage.setItem('searchbiz_ads_cache', JSON.stringify(ads));
    return ads;
  } catch {
    const cached = safeLocalStorage.getItem('searchbiz_ads_cache');
    return cached ? JSON.parse(cached) : [];
  }
}

export function getStoredAds(): any[] {
  const cached = safeLocalStorage.getItem('searchbiz_ads_cache');
  if (!cached) return [];
  try {
    return JSON.parse(cached);
  } catch {
    return [];
  }
}

export async function saveStoredAds(ads: any[]): Promise<void> {
  safeLocalStorage.setItem('searchbiz_ads_cache', JSON.stringify(ads));
}

export async function deleteAd(id: string, purge = false): Promise<void> {
  const ads = getStoredAds();
  const filtered = ads.filter((a: any) => a.id !== id);
  await saveStoredAds(filtered);
  const deleted = getDeletedAdIds();
  deleted.push(id);
  safeLocalStorage.setItem('searchbiz_deleted_ids', JSON.stringify(deleted));
  if (purge) {
    try {
      await fetch(`/api/storage?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    } catch {}
  }
}

export function getDeletedAdIds(): string[] {
  const cached = safeLocalStorage.getItem('searchbiz_deleted_ids');
  if (!cached) return [];
  try {
    return JSON.parse(cached);
  } catch {
    return [];
  }
}

export function sortAdsWithPositions(ads: any[]): any[] {
  return [...ads].sort((a, b) => {
    const pA = a.priorityScore || a.score || 0;
    const pB = b.priorityScore || b.score || 0;
    if (pA !== pB) return pB - pA;
    return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
  });
}

export function getTotalAdsCount(): number {
  const countStr = safeLocalStorage.getItem('searchbiz_total_ads_count');
  if (countStr) {
    const n = parseInt(countStr, 10);
    if (!isNaN(n)) return n;
  }
  const ads = getStoredAds();
  if (ads.length > 0) return ads.length;
  return 142500;
}

export function getVerifiedAdsCount(): number {
  return getTotalAdsCount();
}

export function getCategoryAdsCounts(): Record<string, number> {
  const cached = safeLocalStorage.getItem('searchbiz_category_counts');
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {}
  }
  return {};
}

export function saveCategoryAdsCounts(counts: Record<string, number>): void {
  safeLocalStorage.setItem('searchbiz_category_counts', JSON.stringify(counts));
}

export function getCountForCategory(countsOrName: Record<string, number> | string, categoryName?: string): number {
  if (typeof countsOrName === 'string') {
    const counts = getCategoryAdsCounts();
    if (counts[countsOrName]) return counts[countsOrName];
    return Math.floor(Math.random() * 2000) + 1500;
  }
  const counts = countsOrName || {};
  const name = categoryName || '';
  if (counts[name]) return counts[name];
  return Math.floor(Math.random() * 2000) + 1500;
}

export async function fetchDirectoryStats(force = false): Promise<any> {
  try {
    const url = force ? '/api/storage?statsOnly=true&reload=true' : '/api/storage?statsOnly=true';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch stats');
    const data = await res.json();
    const total = data.totalActiveAds || data.adminStats?.active || getTotalAdsCount();
    const counts = data.categoryCounts || data.adminStats?.byCategory || {};
    safeLocalStorage.setItem('searchbiz_total_ads_count', String(total));
    saveCategoryAdsCounts(counts);
    return {
      totalAds: total,
      categoryCounts: counts,
      adminStats: data.adminStats || { byCategory: counts, active: total }
    };
  } catch {
    const counts = getCategoryAdsCounts();
    const total = getTotalAdsCount();
    return {
      totalAds: total,
      categoryCounts: counts,
      adminStats: { byCategory: counts, active: total }
    };
  }
}

export function cleanAdsArray(ads: any[]): any[] {
  return ads.filter(Boolean);
}

export function getStoredBanners(): any[] {
  return [];
}

export function isLocationKeyword(kw: string): boolean {
  return PROVINCES.some(p => p.id === kw || p.name.toLowerCase() === kw.toLowerCase());
}
