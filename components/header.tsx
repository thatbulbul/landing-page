import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeaderProps {
  onCTAClick: () => void;
}

export default function Header({ onCTAClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-background to-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <Image src="/icon-hexerve.png" alt="Hexerve Logo" width={120} height={40} className="rounded-lg" />
            
          </div>
          
          {/* <nav className="hidden md:flex items-center gap-8">
            <a href="#problems" className="text-foreground/70 hover:text-foreground font-bold text-sm transition">
              Why Us
            </a>
            <a href="#solutions" className="text-foreground/70 hover:text-foreground font-bold text-sm transition">
              Features
            </a>
            <a href="#trust" className="text-foreground/70 hover:text-foreground font-bold text-sm transition">
              Results
            </a>
          </nav> */}

          <Button 
            onClick={onCTAClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black shadow-lg hover:shadow-xl"
          >
            Get Free Audit Now →
          </Button>
        </div>
      </div>
    </header>
  );
}
