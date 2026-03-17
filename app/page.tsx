'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import OfferBanner from '@/components/offer-banner';
import Problems from '@/components/problems';
import Solutions from '@/components/solutions';
import LeadForm from '@/components/lead-form';
import Trust from '@/components/trust';
import Footer from '@/components/footer';
import StickyButton from '@/components/sticky-button';
import FormModal from '@/components/form-modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setShowModal(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onCTAClick={openModal} />
      <Hero onCTAClick={openModal} />
      <OfferBanner />
      <Problems />
      <Solutions />
      
      <section ref={formRef} className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted">
        <LeadForm />
      </section>

      <Trust />
      <Footer onCTAClick={openModal} />
      
      {isScrolled && <StickyButton onClick={openModal} />}
      <FormModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
