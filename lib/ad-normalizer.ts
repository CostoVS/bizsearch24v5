export function normalizeProvinceSlug(province?: string): string {
  if (!province) return 'kwazulu-natal';
  const p = province.toLowerCase().trim();
  if (p.includes('gauteng') || p === 'gp') return 'gauteng';
  if (p.includes('western') || p === 'wc') return 'western-cape';
  if (p.includes('eastern') || p === 'ec') return 'eastern-cape';
  if (p.includes('free') || p === 'fs') return 'free-state';
  if (p.includes('limpopo') || p === 'lp') return 'limpopo';
  if (p.includes('mpumalanga') || p === 'mp') return 'mpumalanga';
  if (p.includes('north west') || p === 'nw') return 'north-west';
  if (p.includes('northern') || p === 'nc') return 'northern-cape';
  return 'kwazulu-natal';
}

export function resolveAdGeographyAndCategory(ad: any): {
  province: string;
  town: string;
  suburb: string;
  postalCode: string;
  category: string;
  categoryCode: string;
} {
  return {
    province: normalizeProvinceSlug(ad.province || ad.location || 'KwaZulu-Natal'),
    town: ad.town || ad.city || 'Johannesburg',
    suburb: ad.suburb || 'Central',
    postalCode: ad.postalCode || '2001',
    category: ad.category || '1.1 Auto Body & Repair Shops',
    categoryCode: ad.categoryCode || '1'
  };
}
