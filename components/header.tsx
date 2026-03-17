import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeaderProps {
  onCTAClick: () => void;
}

export default function Header({ onCTAClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-background to-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center gap-3">
            <Image src="/icon-hexerve.png" alt="Hexerve Logo" width={90} height={32} className="rounded-lg" />
          </div>
          <Button
            onClick={onCTAClick}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black shadow-lg hover:shadow-xl text-xs md:text-sm px-3 md:px-4"
          >
            Get Free Audit →
          </Button>
        </div>
      </div>
    </header>
  );
}
