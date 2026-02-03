import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import HomeHowItWorksSection from '@/components/HomeHowItWorksSection';
import DiscreetServiceSection from '@/components/DiscreetServiceSection';
import ReviewsSection from '@/components/ReviewsSection';
import MedicineBrandsSection from '@/components/MedicineBrandsSection';
import InformationAboutOrderingSection from '@/components/InformationAboutOrderingSection';
import FreeTrackedDeliverySection from '@/components/FreeTrackedDeliverySection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import StartConsultationButton from '@/components/StartConsultationButton';
import AccountWelcomeCard from '@/components/AccountWelcomeCard';
import AddressCard from '@/components/AddressCard';
import MyHealthCard from '@/components/MyHealthCard';

export default function Home() {
  // This would be replaced with actual auth state management
  const isLoggedIn = false; // Change to true to test the welcome card

  return (
    <main className="min-h-screen">
      <Header />

      {/* Welcome Card - Only show when user is logged in */}
      {isLoggedIn && (
        <div className="bg-white py-8">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <AccountWelcomeCard
              description="Welcome back! From your account dashboard you can view your recent orders, manage your shipping and billing addresses"
            />

            {/* Address Card - Only show when user is logged in */}
            <div className="mt-8">
              <AddressCard />
            </div>

            {/* My Health Card - Only show when user is logged in */}
            <div className="mt-8">
              <MyHealthCard />
            </div>
          </div>
        </div>
      )}

      <HeroSection />
      <TreatmentsSection />
      <HomeHowItWorksSection />
      <DiscreetServiceSection />
      {/* <ReviewsSection /> */}
      <MedicineBrandsSection />
      <InformationAboutOrderingSection />
      <FreeTrackedDeliverySection />
      <Footer />

      {/* Mobile Start Consultation Button - Always visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white rounded-t-2xl px-4 pt-4 pb-4 shadow-lg">
          <StartConsultationButton className="w-full text-center py-3 text-base font-semibold">
            Start Consultation ≫
          </StartConsultationButton>
        </div>
      </div>

      <ChatWidget />
    </main>
  );
}
