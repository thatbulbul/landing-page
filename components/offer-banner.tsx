'use client';

import { useState, useEffect } from 'react';

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      targetDate.setHours(23, 59, 59, 999);

      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft('Offer Expired');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-secondary to-foreground py-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">LIMITED OFFER</span>
              <span className="text-white font-black animate-bounce">👉</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-1 text-pretty">
              Get Your Free GoHighLevel Automation Audit
            </h2>
            <p className="text-white/90 text-sm md:text-lg font-semibold">
              Only 5 free spots available this week. Normally valued at $497.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 text-center w-full md:w-auto">
            <p className="text-white/80 text-xs font-semibold mb-1">Offer Expires In:</p>
            <div className="text-3xl md:text-4xl font-black text-white font-mono">
              {timeLeft || 'Loading...'}
            </div>
            <p className="text-white/70 text-xs mt-2">Don't miss out on this limited offer</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">30-Day Money Back Guarantee</div>
          <span className="text-white/50 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            </svg>
            100% Refund if Not Satisfied
          </div>
        </div>
      </div>
    </section>
  );
}
