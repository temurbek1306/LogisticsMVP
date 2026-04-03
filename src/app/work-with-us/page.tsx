import { Metadata } from 'next';
import HeroDriverSection from './components/HeroDriverSection';
import QuickAccessSection from './components/QuickAccessSection';
import JobTypesSection from './components/JobTypesSection';
import ExclusiveOpportunitiesSection from './components/ExclusiveOpportunitiesSection';
import RecruiterBenefitsSection from './components/RecruiterBenefitsSection';
import FlexibleHometimeSection from './components/FlexibleHometimeSection';
import VettingSection from './components/VettingSection';
import DriverReviewsSection from './components/DriverReviewsSection';
import AmenitiesAndSafetySection from './components/AmenitiesAndSafetySection';
import DriverEarningsCalculator from './components/DriverEarningsCalculator';
import DriverApplicationForm from './components/DriverApplicationForm';
import './WorkWithUs.css';

export const metadata: Metadata = {
  title: 'Work With Us Careers & CDL-A Drivers',
  description: 'Supercharge your driving career with competitive pay, guaranteed mileage, and 24-hour pre-approval processing with Future Solution Logistics.',
};

export default function WorkWithUsPage() {
  return (
    <main className="main-wrapper" style={{ overflowX: 'hidden' }}>
      <HeroDriverSection />
      <QuickAccessSection />
      <JobTypesSection />
      <ExclusiveOpportunitiesSection />
      <RecruiterBenefitsSection />
      <FlexibleHometimeSection />
      <VettingSection />
      <DriverEarningsCalculator />
      <DriverReviewsSection />
      <AmenitiesAndSafetySection />
      <DriverApplicationForm />
    </main>
  );
}
