import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import ServicesSection from '@/components/ServicesSection';
import StatsBanner from '@/components/StatsBanner';
import SavingsSection from '@/components/SavingsSection';
import VettingProcessSection from '@/components/VettingProcessSection';
import FastStaffingSection from '@/components/FastStaffingSection';
import ReviewsSection from '@/components/ReviewsSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import QuoteSection from '@/components/QuoteSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsBanner />
      <SavingsSection />
      <VettingProcessSection />
      <FastStaffingSection />
      <TrustedBySection />
      <ReviewsSection />
      <GuaranteesSection />
      <QuoteSection />
    </main>
  );
}
