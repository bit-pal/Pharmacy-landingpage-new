import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedTrustBanner from '@/components/AnimatedTrustBanner';
import AccountWelcomeCard from '@/components/AccountWelcomeCard';
import TreatmentStatusCard from '@/components/TreatmentStatusCard';
import RecentOrdersTable from '@/components/RecentOrdersTable';
import AddressCard from '@/components/AddressCard';
import MyHealthCard from '@/components/MyHealthCard';
import BookConsultationCard from '@/components/BookConsultationCard';

export const metadata: Metadata = {
  title: "My Account - Assured Pharmacy",
  description: "Manage your Assured Pharmacy account, view orders, and access your treatments.",
};

export default function CustomerAccountPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <AnimatedTrustBanner />

      {/* Main content area */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AccountWelcomeCard />

          {/* Treatment Status Section */}
          <div className="mb-8">
            <TreatmentStatusCard
              treatmentName="Weight Loss"
              needsAppointment={true}
            />
          </div>

          {/* Recent Orders Section */}
          <div className="mb-8">
            <RecentOrdersTable />
          </div>

          {/* Address Section */}
          <div className="mb-8">
            <AddressCard />
          </div>

          {/* My Health Section */}
          <div className="mb-8">
            <MyHealthCard />
          </div>

          {/* Book Consultation Section */}
          <div className="mb-8">
            <BookConsultationCard />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 