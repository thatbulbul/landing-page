'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import LeadForm from '@/components/lead-form';

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FormModal({ open, onClose }: FormModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-border transition-colors"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>
        <div className="p-6">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">FREE AUDIT</span>
            <h2 className="text-2xl font-black text-foreground">Book Your Free GHL Audit</h2>
            <p className="text-foreground/60 mt-1 text-sm">Zero obligation. Real results.</p>
            <div className="mt-3 h-1 w-12 bg-primary rounded-full" />
          </div>
          <LeadForm onSuccess={onClose} hideHeader compact />
        </div>
      </div>
    </div>
  );
}
