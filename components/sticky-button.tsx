import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface StickyButtonProps {
  onClick: () => void;
}

export default function StickyButton({ onClick }: StickyButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Button 
        onClick={onClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all rounded-full px-6 py-3 h-auto text-sm md:text-base"
      >
        Get Free Audit
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
