import { Settings, MessageSquare, Phone, Zap, Calendar, Database } from 'lucide-react';

const solutions = [
  {
    icon: Settings,
    title: 'GoHighLevel Setup',
    description: 'Complete GHL platform configuration tailored to your business needs.'
  },
  {
    icon: MessageSquare,
    title: 'SMS & Email Automation',
    description: 'Automated messaging sequences that nurture leads 24/7.'
  },
  {
    icon: Phone,
    title: 'Missed Call Automation',
    description: 'Instant text reminders for missed calls to never lose leads again.'
  },
  {
    icon: Zap,
    title: 'Pipeline & CRM Setup',
    description: 'Organized lead tracking and management for your entire team.'
  },
  {
    icon: Calendar,
    title: 'Appointment Booking System',
    description: 'Automated scheduling that reduces no-shows and increases conversions.'
  },
  {
    icon: Database,
    title: 'Lead Management',
    description: 'Centralized system to track, nurture, and convert all your leads.'
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-pretty">
            Our GHL Automation Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We provide end-to-end GoHighLevel setup and optimization to maximize your conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="bg-card border border-border rounded-lg p-5 md:p-8 hover:shadow-lg hover:border-accent/50 transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-foreground/60">{solution.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-16 bg-gradient-to-r from-primary/10 to-foreground/5 rounded-lg border border-primary/20 p-6 md:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
            Ready to Increase Your Booked Appointments?
          </h3>
          <p className="text-sm md:text-lg text-foreground/70">
            Get your free GHL Automation Audit today and discover exactly what's holding you back.
          </p>
        </div>
      </div>
    </section>
  );
}
