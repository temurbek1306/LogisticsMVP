import HeroDriverSection from './components/HeroDriverSection';
import QuickAccessSection from './components/QuickAccessSection';
import JobTypesSection from './components/JobTypesSection';
import ExclusiveOpportunitiesSection from './components/ExclusiveOpportunitiesSection';
import RecruiterBenefitsSection from './components/RecruiterBenefitsSection';
import FlexibleHometimeSection from './components/FlexibleHometimeSection';
import VettingSection from './components/VettingSection';
import TransparencySection from './components/TransparencySection';
import DriverReviewsSection from './components/DriverReviewsSection';
import AmenitiesAndSafetySection from './components/AmenitiesAndSafetySection';
import DriverApplicationForm from './components/DriverApplicationForm';
import './WorkWithUs.css';

export const metadata = {
  title: 'Work With Us | Future Solution Logistics',
  description: 'Supercharge your driving career with competitive pay, guaranteed mileage, and 24-hour pre-approval processing.',
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
      <TransparencySection />
      <DriverReviewsSection />
      <AmenitiesAndSafetySection />
      <DriverApplicationForm />
    </main>
  );
}
