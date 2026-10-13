'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building2, MapPin, ShieldCheck, Mail, Phone, ExternalLink, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { CATEGORIES_STRUCTURED } from '@/lib/categories';
import { PROVINCES, getTotalAdsCount, getCategoryAdsCounts, fetchDirectoryStats, safeLocalStorage } from '@/lib/data';

interface FooterProps {
  onShowLegal?: () => void;
}

export function Footer({ onShowLegal }: FooterProps) {
  const [totalAds, setTotalAds] = useState<number>(142500);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const cachedTotal = getTotalAdsCount();
    if (cachedTotal) setTotalAds(cachedTotal);
    const cachedCounts = getCategoryAdsCounts();
    if (cachedCounts) setCategoryCounts(cachedCounts);

    fetchDirectoryStats(false).then(res => {
      if (res.totalAds) {
        setTotalAds(res.totalAds);
        safeLocalStorage.setItem('searchbiz_total_ads_count', String(res.totalAds));
      }
      if (res.categoryCounts && Object.keys(res.categoryCounts).length > 0) {
        setCategoryCounts(res.categoryCounts);
      }
    }).catch(() => {});

    const handleAdsUpdated = () => {
      const updatedTotal = getTotalAdsCount();
      if (updatedTotal) setTotalAds(updatedTotal);
      const updatedCounts = getCategoryAdsCounts();
      if (updatedCounts) setCategoryCounts(updatedCounts);
    };

    window.addEventListener('searchbiz_ads_updated', handleAdsUpdated);
    return () => {
      window.removeEventListener('searchbiz_ads_updated', handleAdsUpdated);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim() || !emailSub.includes('@')) return;
    setSubscribed(true);
    setEmailSub('');
  };

  return (
    <footer className="bg-[#04241b] text-emerald-100 border-t border-emerald-900/50 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Stats Banner */}
        <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Live South African Business Registry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                {totalAds.toLocaleString()} Verified Businesses & Listings
              </h3>
              <p className="text-sm text-emerald-300/80 mt-0.5">
                Connecting buyers and service providers across all 9 provinces and 20 major industry sectors.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/directory"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2 text-sm"
            >
              Browse Directory <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/create-ad"
              className="bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 font-medium px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-sm"
            >
              List Your Business
            </Link>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                SB
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                Search<span className="text-emerald-400">Biz</span>.co.za
              </span>
            </div>
            <p className="text-sm text-emerald-200/80 leading-relaxed pr-4">
              South Africa&apos;s premier digital business directory and multi-slot CSV importer platform. Empowering local enterprises, trade professionals, and consumers with verified contact details, precise geolocation maps, and instant industry search.
            </p>
            <div className="pt-2 space-y-2 text-sm text-emerald-300/90">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Johannesburg, Cape Town, Durban & Nationwide, South Africa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified CIPC Registered & Trusted Business Profiles</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-base uppercase tracking-wider border-b border-emerald-900 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/directory" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Business Directory
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> 20 Industry Sectors
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Provinces & Suburbs
                </Link>
              </li>
              <li>
                <Link href="/premium-partners" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Premium Partners
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Business News & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Industry Sectors */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-base uppercase tracking-wider border-b border-emerald-900 pb-2">
              Top Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES_STRUCTURED.slice(0, 5).map(cat => (
                <li key={cat.code}>
                  <Link href={`/categories?selected=${encodeURIComponent(cat.cleanName)}`} className="text-emerald-200/80 hover:text-white transition-colors truncate block">
                    {cat.cleanName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/categories" className="text-emerald-400 hover:text-emerald-300 font-medium text-xs uppercase tracking-wider pt-1 block">
                  View All 20 Sectors &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Admin */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-base uppercase tracking-wider border-b border-emerald-900 pb-2">
              Stay Connected
            </h4>
            <p className="text-xs text-emerald-300/80">
              Get weekly South African business updates, tender notices, and directory highlights.
            </p>
            {subscribed ? (
              <div className="bg-emerald-900/60 border border-emerald-700/50 p-3 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to SearchBiz updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={emailSub}
                  onChange={e => setEmailSub(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-emerald-950/80 border border-emerald-800/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-emerald-500/60 focus:outline-none focus:border-emerald-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Subscribe Now
                </button>
              </form>
            )}
            <div className="pt-2">
              <Link href="/admin" className="text-xs text-emerald-400/80 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                <span>🔐 Admin Portal & CSV Importer</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-emerald-900/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <p>
            &copy; {new Date().getFullYear()} SearchBiz.co.za. All rights reserved. Built for South African enterprises.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onShowLegal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy & Terms
            </button>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Support & Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
