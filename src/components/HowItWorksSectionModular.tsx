import React from 'react';
import CallToActionSection from './CallToActionSection';
import ProcessTimelineSection from './ProcessTimelineSection';
import BeforePurchaseDetailsSection from './BeforePurchaseDetailsSection';
import AfterPurchaseDetailsSection from './AfterPurchaseDetailsSection';
import WeeklyInjectionSection from './WeeklyInjectionSection';

// Additional components that could be created:
// - OnceApprovedDetailsSection
// - WeightLossInjectablesSection (FAQ)
// - TinyNeedleSection
// - SafetyGuaranteeSection
// - TrustpilotReviewsSection
// - DetailedMedicineInfoSection

export default function HowItWorksSectionModular() {
  return (
    <div className="space-y-16">
      
      {/* Main Process Timeline and First Step */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ProcessTimelineSection />
        <BeforePurchaseDetailsSection />
      </div>

      {/* Step 2 Details */}
      <div className="grid md:grid-cols-2 gap-12">
        <AfterPurchaseDetailsSection />
        {/* OnceApprovedDetailsSection would go here */}
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium">OnceApprovedDetailsSection</div>
            <div className="text-sm">Component placeholder</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToActionSection variant="default" />

      {/* Weekly Injection Details */}
      <WeeklyInjectionSection />

      {/* Additional sections would be added here as separate components */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium">WeightLossInjectablesSection</div>
            <div className="text-sm">FAQ Component</div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium">TinyNeedleSection</div>
            <div className="text-sm">Component placeholder</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-lg font-medium">SafetyGuaranteeSection</div>
          <div className="text-sm">5-Point Safety Guarantee</div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-lg font-medium">TrustpilotReviewsSection</div>
          <div className="text-sm">Reviews Component</div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-lg font-medium">DetailedMedicineInfoSection</div>
          <div className="text-sm">Medicine tabs and info</div>
        </div>
      </div>

      {/* Final Call to Action */}
      <CallToActionSection variant="gray" />

    </div>
  );
} 