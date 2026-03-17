import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import AnimatedHeading from '@/components/animated-heading';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative pt-8 pb-16 md:pt-22 md:pb-28 bg-gradient-to-b from-background via-background to-muted overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Urgency badge */}
          <div className="inline-block mb-6 animate-pulse">
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold">
              🔥 LIMITED TIME: 5 Spots Left This Week
            </span>
          </div>

          {/* Main headline */}
          <AnimatedHeading />

          {/* Subheadline */}
          <p className="text-xl md:text-xl text-foreground/80 mb-2 font-semibold text-pretty">
            Get a FREE Automation Audit & See Exactly How to Increase Booked Appointments by 25-30%
          </p>

          <p className="text-base md:text-lg text-foreground/60 mb-10 max-w-3xl mx-auto text-pretty">
          Discover what's missing in your automation setup in just 15 minutes.
          </p>

          {/* Primary CTA with urgency */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-black px-8 py-7 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Claim Your Free Audit 
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-base font-bold px-8 py-7 h-auto rounded-lg border-2"
            >
              Watch 2-Min Demo
            </Button>
          </div>

          {/* Key benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, text: '+25-30% More Booked Appointments', color: 'text-accent' },
              { icon: Clock, text: 'Results in 30 Days or Your Money Back', color: 'text-accent' },
              { icon: CheckCircle, text: '100% Free Audit (No Credit Card)', color: 'text-accent' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-border flex items-center gap-3">
                <item.icon className={`${item.color} h-6 w-6 flex-shrink-0`} />
                <p className="text-sm font-semibold text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

         
          
        </div>
      </div>
    </section>
  );
}
