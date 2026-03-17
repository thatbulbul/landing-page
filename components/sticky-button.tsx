import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface StickyButtonProps {
  onClick: () => void;
}

export default function StickyButton({ onClick }: StickyButtonProps) {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Button
        onClick={onClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all rounded-full px-4 md:px-6 py-2.5 md:py-3 h-auto text-xs md:text-base"
      >
        <MessageCircle className="h-4 w-4 md:mr-1.5 md:h-4 md:w-4" />
        <span className="hidden md:inline">Get more details</span>
      </Button>
    </div>
  );
}
