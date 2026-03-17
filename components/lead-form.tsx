'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

const inputCls = 'bg-background border-0 border-b border-border rounded-none h-9 text-sm focus-visible:ring-0 focus-visible:border-primary px-0';
const selectCls = 'w-full px-0 py-2 text-sm border-0 border-b border-border bg-background text-foreground focus:ring-0 focus:border-primary outline-none transition';

function TypewriterInput({ id, name, type = 'text', placeholder, required, value, onChange, className }: {
  id: string; name: string; type?: string; placeholder: string;
  required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTyping = () => {
    if (value) return;
    setTyping(true);
    let i = 0;
    setDisplayed('');
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayed(placeholder.slice(0, i));
      if (i >= placeholder.length) { clearInterval(intervalRef.current!); setTyping(false); }
    }, 45);
  };

  const stopTyping = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayed('');
    setTyping(false);
  };

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return (
    <Input
      id={id} name={name} type={type}
      placeholder={typing || displayed ? displayed : placeholder}
      required={required} value={value} onChange={onChange}
      className={className}
      onFocus={startTyping}
      onBlur={stopTyping}
    />
  );
}

export default function LeadForm({ onSuccess, compact }: { onSuccess?: () => void; compact?: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', usingGHL: 'no', monthlyLeads: '', problem: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsLoading(false);
    onSuccess?.();
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', usingGHL: 'no', monthlyLeads: '', problem: '' });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-10 px-4">
        <div className="w-14 h-14 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center animate-bounce">
          <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-foreground mb-2">🎉 Audit Scheduled!</h3>
        <p className="text-foreground/60 text-sm">Your spot is reserved. Our experts will reach out within 24 hours.</p>
      </div>
    );
  }

  /* ── COMPACT (modal) ── */
  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-foreground font-semibold text-sm">Full Name *</Label>
            <TypewriterInput id="name" name="name" placeholder="John Smith" required value={formData.name} onChange={handleChange} className={inputCls} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email" className="text-foreground font-semibold text-sm">Email *</Label>
            <TypewriterInput id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} className={inputCls} />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-foreground font-semibold text-sm">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required value={formData.phone} onChange={handleChange} className={inputCls} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="usingGHL" className="text-foreground font-semibold text-sm">Currently using GoHighLevel?</Label>
          <select id="usingGHL" name="usingGHL" value={formData.usingGHL} onChange={handleChange} className={selectCls}>
            <option value="no">No, but planning to</option>
            <option value="yes">Yes, actively using</option>
            <option value="exploring">Still exploring options</option>
          </select>
        </div>
        <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black py-5 text-base rounded-lg h-auto shadow-lg transition-all mt-1">
          {isLoading ? <><Spinner className="mr-2 h-4 w-4" />Scheduling...</> : '✓ Schedule My Free Audit'}
        </Button>
        <p className="text-xs text-foreground/50 text-center">No credit card required • 100% free</p>
      </form>
    );
  }

  /* ── FULL (contact section) ── */
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-card border-2 border-primary/30 rounded-2xl shadow-lg p-5 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

          {/* Left: heading */}
          <div className="md:w-2/5 flex-shrink-0">
            <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3">
              Claim Your Free Audit
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight text-pretty">
              Tell Us About Your GHL Setup
            </h2>
            <p className="text-foreground/60 text-sm mb-4">
              Answer these quick questions and we'll schedule your personalized audit with zero obligation.
            </p>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-foreground font-semibold text-sm">Full Name *</Label>
                  <TypewriterInput id="name" name="name" placeholder="John Smith" required value={formData.name} onChange={handleChange} className={inputCls} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-foreground font-semibold text-sm">Email *</Label>
                  <TypewriterInput id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-foreground font-semibold text-sm">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required value={formData.phone} onChange={handleChange} className={inputCls} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="monthlyLeads" className="text-foreground font-semibold text-sm">Monthly Leads</Label>
                  <Input id="monthlyLeads" name="monthlyLeads" type="text" placeholder="e.g., 50-100" value={formData.monthlyLeads} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="usingGHL" className="text-foreground font-semibold text-sm">Currently using GoHighLevel?</Label>
                <select id="usingGHL" name="usingGHL" value={formData.usingGHL} onChange={handleChange} className={selectCls}>
                  <option value="no">No, but planning to</option>
                  <option value="yes">Yes, actively using</option>
                  <option value="exploring">Still exploring options</option>
                </select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="problem" className="text-foreground font-semibold text-sm">Biggest Challenge Right Now?</Label>
                <textarea id="problem" name="problem" placeholder="Tell us about your biggest automation challenge..." value={formData.problem} onChange={handleChange} rows={2} className="w-full px-0 py-2 text-sm border-0 border-b border-border bg-background text-foreground placeholder-foreground/40 focus:ring-0 focus:border-primary outline-none transition resize-none" />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black py-4 md:py-5 text-sm md:text-base rounded-lg h-auto shadow-lg transition-all mt-1">
                {isLoading ? <><Spinner className="mr-2 h-4 w-4" />Scheduling...</> : '✓ Schedule My Free Audit'}
              </Button>
              <p className="text-xs text-foreground/50 text-center">No credit card required • 100% free</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
