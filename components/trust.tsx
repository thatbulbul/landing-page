'use client';

import { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Marketing Agency Owner', content: 'The GHL automation audit was eye-opening. We increased our booked appointments by 28% in just 2 months.', stars: 5 },
  { name: 'James Rodriguez', role: 'Real Estate Team Lead', content: 'Finally have a system that works. SMS reminders alone have reduced our no-shows by 40%. Highly recommend!', stars: 5 },
  { name: 'Amanda Chen', role: 'Coaching Business Owner', content: "The missed call automation is a game-changer. We're capturing leads we were losing before. Best decision ever.", stars: 5 },
  { name: 'David Park', role: 'Local Service Business', content: 'Response time went from hours to seconds. Our lead conversion rate jumped 35% in the first month alone.', stars: 5 },
  { name: 'Lisa Thompson', role: 'Digital Marketing Agency', content: 'The automation setup saved us 20+ hours a week. Our clients are seeing real results and we keep growing.', stars: 5 },
];

const stats = [
  { metric: '25-30%', description: 'Average Increase in Bookings' },
  { metric: '< 60 seconds', description: 'Response Time with Automation' },
  { metric: '40%+', description: 'Reduction in No-Shows' },
  { metric: '24/7', description: 'Automated Lead Follow-up' },
];

const doubled = [...testimonials, ...testimonials];

export default function Trust() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="trust" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.metric} className="relative bg-white border border-border rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl" />
              <div className="text-2xl md:text-3xl font-black text-foreground mb-2 leading-none">{stat.metric}</div>
              <p className="text-sm md:text-base text-foreground/60 font-semibold leading-snug">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4 text-pretty">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto mb-14">
            Real results from marketing agencies, real estate teams, coaches, and local service businesses.
          </p>

          {/* Carousel */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex gap-6 w-max"
              style={{
                animation: 'scroll-left 28s linear infinite',
                animationPlayState: paused ? 'paused' : 'running',
              }}
            >
              {doubled.map((t, i) => (
                <div key={i} className="w-80 flex-shrink-0 bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-5">{t.content}</p>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-foreground/60">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <p className="text-sm text-foreground/50 font-medium mb-8 uppercase tracking-wide">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {['GoHighLevel Certified', 'USA Based', 'Proven Results', '100% Satisfaction'].map((badge) => (
              <div key={badge} className="inline-flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
