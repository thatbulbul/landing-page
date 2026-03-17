'use client';
import { AlertCircle, PhoneOff, Mail, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const problems = [
  { icon: AlertCircle, title: 'Losing Leads Due to No Follow-up', description: 'Without automation, leads fall through the cracks and go to your competitors.' },
  { icon: Mail, title: 'No SMS/Email Automation', description: 'Manual follow-ups are time-consuming and inconsistent, leading to missed opportunities.' },
  { icon: Clock, title: 'Slow Response Time', description: "Delayed responses kill conversions. Leads expect instant replies in today's market." },
  { icon: PhoneOff, title: 'No Missed Call Text Back', description: 'Missing calls means losing potential clients. You need automated follow-ups immediately.' },
];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
}

function SlideInBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        // cards take idx*120ms, last card = 3*120 = 360ms + 700ms animation = ~1100ms
        setTimeout(() => setVisible(true), 1100);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mt-12 p-6 md:p-8 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
      }`}
    >
      <p className="text-lg font-bold text-yellow-900 text-pretty">
        💡 <span className="ml-2">The good news? These problems are completely fixable with proper GHL automation. That's why we created the Free Automation Audit.</span>
      </p>
    </div>
  );
}

export default function Problems() {
  return (
    <section id="problems" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-4">
            COMMON PROBLEMS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-pretty">
            Are You Losing Opportunities Like This?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-semibold">
            87% of agencies leave money on the table with poor GoHighLevel automation setup
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <AnimatedCard key={problem.title} delay={idx * 120}>
                <div className="bg-white border-2 border-border rounded-xl p-6 md:p-8 hover:shadow-xl transition-all hover:border-primary/50 relative">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 rounded-full text-white font-black flex items-center justify-center text-xs">
                    ✕
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2">{problem.title}</h3>
                      <p className="text-foreground/70 font-semibold">{problem.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        <SlideInBanner />
      </div>
    </section>
  );
}
