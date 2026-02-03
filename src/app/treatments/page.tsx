import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentCard from '@/components/TreatmentCard';

export const metadata: Metadata = {
  title: "Treatments - Meditrue",
  description: "Choose your treatment. The most effective treatments in the UK for ED, Weight Loss, Hair Loss, and Premature Ejaculation.",
};

const treatments = [
  {
    id: 'erectile-dysfunction',
    title: 'Erectile Dysfunction',
    description: "Don't be among the 50% of men experiencing erectile dysfunction. Discover the path to stronger, longer-lasting erections and more satisfying sex.",
    image: '/Homepage/treatment-ed.webp',
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'Reach your ideal weight and lose up to 25% with our dual-action weight loss treatment, clinically proven and approved by the MHRA.',
    image: '/Homepage/treatment-weight-loss.webp',
  },
  {
    id: 'hair-loss',
    title: 'Hair loss',
    description: 'Take control and reverse hair loss with our treatments. Clinical studies show that 90% of men experience either halted hair loss or show regrowth.',
    image: '/Homepage/treatment-hair-loss.webp',
  },
  {
    id: 'premature-ejaculation',
    title: 'Premature Ejaculation',
    description: 'Boost your endurance and satisfaction with our clinically proven treatments and effective solutions for longer-lasting sex.',
    image: '/Homepage/treatment-pe.webp',
  },
];

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Main content area */}
      <div className="py-8 md:py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
              What do you want to treat today?
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              The most effective treatments in the UK
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="space-y-6 md:space-y-8">
            {treatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 