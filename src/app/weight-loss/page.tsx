'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCard from '@/components/ConsultationCard';
import ResultsSection from '@/components/ResultsSection';
import QualificationSection from '@/components/QualificationSection';
import BMICalculator from '@/components/BMICalculator';
import MedicationsSection from '@/components/MedicationsSection';
import ProcessTimelineSection from '@/components/ProcessTimelineSection';
import BeforePurchaseDetailsSection from '@/components/BeforePurchaseDetailsSection';
import AfterPurchaseDetailsSection from '@/components/AfterPurchaseDetailsSection';
import OnceApprovedDetailsSection from '@/components/OnceApprovedDetailsSection';
import CallToActionSection from '@/components/CallToActionSection';
import TinyNeedleSection from '@/components/TinyNeedleSection';
import SafetyGuaranteeSection from '@/components/SafetyGuaranteeSection';
import TrustpilotReviewsSection from '@/components/TrustpilotReviewsSection';
import WeeklyInjectionSection from '@/components/WeeklyInjectionSection';
import InformationAboutOrderingSection from '@/components/InformationAboutOrderingSection';
import MedicineBrandsSection from '@/components/MedicineBrandsSection';
import WeightLossInjectablesAccordion from '@/components/WeightLossInjectablesAccordion';
import DetailedMedicineInformation from '@/components/DetailedMedicineInformation';
import Image from 'next/image';

export default function WeightLossPage() {
  const [activeMedicine, setActiveMedicine] = useState<'mounjaro' | 'wegovy'>('mounjaro');
  const weightLossFeatures = [
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/weight_management/clock.webp"
            alt="Order Online"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ),
      title: "Order",
      subtitle: "Online"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/weight_management/lock.webp"
            alt="Reviewed by Experts"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ),
      title: "Reviewed",
      subtitle: "By Experts"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/weight_management/cart.webp"
            alt="Direct Shipping"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ),
      title: "Direct",
      subtitle: "Shipping"
    }
  ];

  const resultsFeatures = [
    {
      icon: "star" as const,
      title: "Proven Results",
      description: "Up to 25% weight loss in 12 months"
    },
    {
      icon: "shield" as const,
      title: "Safe & Supervised",
      description: "Medically approved programmes"
    },
    {
      icon: "heart" as const,
      title: "Holistic Support",
      description: "Diet, exercise, and coaching"
    },
    {
      icon: "user" as const,
      title: "Personalised Plans",
      description: "Tailored to your lifestyle"
    }
  ];

  const weightLossMedications = [
    {
      name: "Wegovy",
      image: "/weight_management/wegovy.png",
      badge: "Low availability",
      buttonText: "View Prices →",
      buttonLink: "/products/wegovy",
      rating: {
        text: "Excellent",
        platform: "Trustpilot",
        stars: 5
      },
      features: [
        "GLP-1 agonist suppresses appetite.",
        "85% of people lose weight.",
        "Approved for weight loss in UK"
      ],
      details: [
        { label: "Lose up to", value: "15% weight" },
        { label: "When to use", value: "Once a week" },
        { label: "Price from", value: "£60 per week" }
      ]
    },
    {
      name: "Mounjaro",
      image: "/weight_management/mounjaro.png",
      isRecommended: true,
      buttonText: "View Prices →",
      buttonLink: "/products/mounjaro",
      rating: {
        text: "Excellent",
        platform: "Trustpilot",
        stars: 5
      },
      features: [
        "Double-action appetite suppressor.",
        "95% of people lose weight.",
        "Approved for weight loss in UK"
      ],
      details: [
        { label: "Lose up to", value: "25% weight" },
        { label: "When to use", value: "Once a week" },
        { label: "Price from", value: "£37.50 per week" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content area */}
      <div className="py-4 md:py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          <ConsultationCard
            title="Start Your Weight Loss<br />Consultation"
            description="Achieving a healthy weight can be a challenge but can bring with it great benefits to your health. You can start the online consultation below to see if you are eligible for our weight loss plan."
            features={weightLossFeatures}
            buttonText="Start Weight Loss Consultation"
            buttonLink="/consultation/weight-loss?start=true"
            doctorImage="/weight_management/shirin-jazayeri-t.webp"
          />
          <ResultsSection
            title="Lose up to 25%<br />Weight with MediTrue*"
            features={resultsFeatures}
            disclaimer="* Clinical trials showed up to 25% of bodyweight was lost with Mounjaro <span className='text-blue-600'>alongside healthy diet and exercise.</span>"
          />
          <QualificationSection />
          <BMICalculator />
          <MedicationsSection
            title="Leading Weight Loss<br />Medications"
            medications={weightLossMedications}
          />
          {/* How It Works - Individual Components */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ProcessTimelineSection />
            <BeforePurchaseDetailsSection />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <AfterPurchaseDetailsSection />
            <OnceApprovedDetailsSection />
          </div>
          <WeightLossInjectablesAccordion />
          <TinyNeedleSection />
          <SafetyGuaranteeSection />
          {/* <TrustpilotReviewsSection /> */}
        </div>
      </div>

      {/* Detailed Medicine Information - Full Width Section */}
      <DetailedMedicineInformation
        activeMedicine={activeMedicine}
        setActiveMedicine={setActiveMedicine}
      />

      <div className="py-4 md:py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          <CallToActionSection variant="gray" />
          <WeeklyInjectionSection activeMedicine={activeMedicine} />
          <InformationAboutOrderingSection />
          <MedicineBrandsSection />
          <CallToActionSection variant="gray" />
        </div>
      </div>
      <Footer />
    </main>
  );
} 