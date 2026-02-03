import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCard from '@/components/ConsultationCard';
import ResultsSection from '@/components/ResultsSection';
import CTABanner from '@/components/CTABanner';
import MedicationsSection from '@/components/MedicationsSection';
import MedicineInfoSection from '@/components/MedicineInfoSection';
import InfoSection from '@/components/InfoSection';
import SafetyGuaranteeSection from "@/components/SafetyGuaranteeSection";
import FreeTrackedDeliverySection from "@/components/FreeTrackedDeliverySection";
import TrustpilotReviewsSection from "@/components/TrustpilotReviewsSection";
import HomeHowItWorksSection from "@/components/HomeHowItWorksSection";
import DiscreetServiceSection from "@/components/DiscreetServiceSection";
import InformationAboutOrderingSection from "@/components/InformationAboutOrderingSection";
import MedicineBrandsSection from "@/components/MedicineBrandsSection";

export const metadata: Metadata = {
  title: "Hair Loss - Assured Pharmacy",
  description: "Start your hair loss consultation. Regain your confidence with effective hair loss treatments. Professional consultation and proven results.",
};

export default function HairLossPage() {
  const hairLossFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quick Results",
      subtitle: "Visible in 3-6 months"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Clinically Proven",
      subtitle: "FDA Approved"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast",
      subtitle: "Delivery"
    }
  ];

  const hairLossResultsFeatures = [
    {
      icon: "star" as const,
      title: "Proven Results",
      description: "90% success rate for hair loss"
    },
    {
      icon: "shield" as const,
      title: "Safe & Supervised",
      description: "Medically approved programmes"
    },
    {
      icon: "medical" as const,
      title: "Comprehensive Support",
      description: "Medicine and lifestyle advice"
    },
    {
      icon: "user" as const,
      title: "Discreet Service",
      description: "Confidential consultations and delivery"
    }
  ];

  const hairLossMedications = [
    {
      name: "Finasteride",
      image: "/hair_loss/finasteride.png",
      badge: "Lowest Price",
      buttonText: "View Prices →",
      buttonLink: "/medications/finasteride",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Lowest Cost",
        "Generic Form",
        "Proven Effective"
      ],
      details: [
        { label: "Results in", value: "3 - 6 months" },
        { label: "Taken", value: "Daily Dose" },
        { label: "Price per pill", value: "From 51p" }
      ]
    },
    {
      name: "Propecia",
      image: "/hair_loss/propecia.png",
      badge: "Highest Price",
      buttonText: "View Prices →",
      buttonLink: "/medications/propecia",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Higher cost",
        "Original Form",
        "Proven Effective"
      ],
      details: [
        { label: "Results in", value: "3 - 6 months" },
        { label: "Taken", value: "Daily Dose" },
        { label: "Price per pill", value: "From £1.40" }
      ]
    }
  ];

  const otherHairLossTreatments = [
    {
      name: "Minoxidil Foam",
      image: "/hair_loss/minoxidil-foam.png",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Easy Spread",
        "No Drip",
        "Even Absorption"
      ],
      details: [
        { label: "Results in", value: "3 - 6 months" },
        { label: "Taken", value: "Daily Dose" },
        { label: "Price Per Month", value: "From £35" }
      ]
    },
    {
      name: "Minoxidil Spray",
      image: "/hair_loss/minoxidil-spray.png",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Higher cost",
        "Original Form",
        "Proven Effective"
      ],
      details: [
        { label: "Results in", value: "3 - 6 months" },
        { label: "Taken", value: "Daily Dose" },
        { label: "Price Per Month", value: "From £35" }
      ]
    }
  ];

  const hairLossInfoData = [
    {
      question: "What is male pattern hair loss?",
      answer: "Male pattern hair loss (androgenetic alopecia) is the most common cause of hair loss in men, affecting up to 80% of men by age 80. It's caused by a combination of genetics and hormones, particularly sensitivity to dihydrotestosterone (DHT)."
    },
    {
      question: "How does the treatment work?",
      answer: "Hair loss treatments work by either blocking DHT production (finasteride) or improving blood flow to hair follicles (minoxidil). These mechanisms help prevent further hair loss and can promote regrowth in many cases."
    },
    {
      question: "Is the branded version better than the generic version?",
      answer: "Generic finasteride contains the same active ingredient as Propecia and is equally effective. The main difference is cost - generic versions are significantly cheaper while providing the same therapeutic benefits."
    },
    {
      question: "Side effects",
      answer: "Most men tolerate hair loss treatments well. Potential side effects of finasteride may include decreased libido or erectile dysfunction in a small percentage of users. Minoxidil may cause scalp irritation or unwanted hair growth in other areas."
    }
  ];

  const hairLossMedicineInfoData = {
    tabs: [
      { key: 'finasteride', label: 'Finasteride' },
      { key: 'minoxidil', label: 'Minoxidil' }
    ],
    tabContents: {
      finasteride: {
        dosageTitle: "How to Take Finasteride",
        dosageSteps: [
          { period: "Finasteride", dose: "" }
        ],
        showImage: true,
        imageAlt: "Man taking finasteride tablet",
        instructions: [
          "Takes effect in: 3 to 6 months",
          "Effectiveness: Works for 9 out of 10 men",
          "One tablet a day"
        ],
        faqTitle: "Finasteride FAQs",
        faqs: [
          {
            question: "What does Finasteride do?",
            answer: "Finasteride works by blocking the enzyme 5-alpha-reductase, which converts testosterone into dihydrotestosterone (DHT). DHT is the hormone responsible for shrinking hair follicles in men with male pattern baldness. By reducing DHT levels by up to 70%, finasteride helps prevent further hair loss and can promote hair regrowth. It's clinically proven to be effective in treating male pattern hair loss."
          },
          {
            question: "How long for Finasteride to work?",
            answer: "Most men start to see results from finasteride within 3 to 6 months of daily use. However, it can take up to 12 months to see the full benefits. It's important to continue taking finasteride as directed, as results are gradual. Some men may notice that hair loss has slowed down before they see visible regrowth. Maximum results typically occur after 1-2 years of consistent use."
          },
          {
            question: "Does Finasteride regrow hair?",
            answer: "Yes, finasteride can promote hair regrowth in many men. Clinical studies show that about 65% of men experience hair regrowth after taking finasteride for 2 years. However, results vary from person to person. Some men see significant regrowth, while others primarily experience a slowing or stopping of hair loss. Finasteride is most effective at preventing further hair loss and works best when started early in the hair loss process."
          },
          {
            question: "Does Finasteride slow hair loss?",
            answer: "Yes, finasteride is highly effective at slowing and stopping hair loss. Clinical studies show that finasteride can halt male pattern baldness in 83% of men. By reducing DHT levels, it helps prevent further miniaturization of hair follicles. Most men who take finasteride will maintain their existing hair and prevent further loss. It's important to continue taking the medication to maintain these benefits, as stopping finasteride will result in hair loss resuming."
          },
          {
            question: "Does Finasteride work on your hairline?",
            answer: "Yes, finasteride can be effective on the hairline, but results vary. It tends to work best on the crown (top of the head) and mid-scalp areas. Some men do experience hairline regrowth or stabilization, particularly if treatment is started early. However, the hairline can be more resistant to treatment compared to other areas. Finasteride is most effective when started before significant hairline recession has occurred. Consistent use over 12-24 months provides the best chance of seeing hairline improvements."
          }
        ]
      },
      minoxidil: {
        dosageTitle: "How to Take Minoxidil",
        dosageSteps: [
          { period: "Minoxidil", dose: "" }
        ],
        showImage: true,
        imageAlt: "Applying minoxidil treatment",
        instructions: [
          "Apply twice daily to affected areas",
          "Takes effect in: 2 to 4 months",
          "Effectiveness: Works for 7 out of 10 men"
        ],
        faqTitle: "Minoxidil FAQs",
        faqs: [
          {
            question: "What does Minoxidil do?",
            answer: "Minoxidil is a topical treatment that stimulates hair growth by widening blood vessels and opening potassium channels. This improves blood flow to hair follicles, delivering more oxygen and nutrients to support hair growth. It also prolongs the growth phase (anagen phase) of the hair cycle and can revive hair follicles that have shrunk due to DHT. Minoxidil is FDA-approved for treating hair loss and has been clinically proven to promote hair regrowth in 70% of men."
          },
          {
            question: "How long for Minoxidil to work?",
            answer: "You can expect to see initial results from minoxidil within 2 to 4 months of consistent twice-daily use. However, it typically takes 6-12 months to see significant hair regrowth. During the first few weeks, you may experience increased shedding - this is normal and temporary as weak hairs are replaced by stronger ones. For best results, continue using minoxidil for at least 4 months before evaluating its effectiveness. Patience and consistent application are key to success."
          },
          {
            question: "Does Minoxidil regrow hair?",
            answer: "Yes, minoxidil can promote hair regrowth. Clinical studies show that approximately 70% of men experience hair regrowth with consistent use of minoxidil. Results vary depending on the extent of hair loss, age, and how long you've been losing hair. Minoxidil works best when started early in the hair loss process and is most effective on the crown area. While some men experience significant regrowth, others may see moderate improvement or mainly a slowing of hair loss. When combined with finasteride, success rates can increase to 94%."
          },
          {
            question: "Does Minoxidil slow hair loss?",
            answer: "Yes, minoxidil is effective at slowing down hair loss. Even if significant regrowth doesn't occur, minoxidil helps maintain existing hair and slows the progression of hair loss. It works by prolonging the growth phase of hair follicles and improving blood circulation to the scalp. Regular use can help prevent further thinning and keep hair follicles healthier. For many users, preventing additional hair loss is just as valuable as promoting regrowth. Continued use is necessary to maintain these benefits."
          },
          {
            question: "How to apply Minoxidil?",
            answer: "Apply minoxidil twice daily - once in the morning and once in the evening - to clean, dry scalp. For foam: Dispense half a capful onto your fingers and gently massage into thinning areas. For spray: Apply 6-8 sprays directly to affected areas. Make sure your scalp is completely dry before application. Avoid washing your hair for at least 4 hours after applying. Wash your hands thoroughly after use. Don't use more than the recommended dose, as this won't improve results. Consistency is crucial - missing applications reduces effectiveness."
          }
        ]
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content area */}
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ConsultationCard
            title="Start Your Hair Loss<br />Consultation"
            description="Hair loss affects millions of people worldwide. Our proven treatments can help restore your confidence and hair growth. Complete our online consultation to see if you are eligible for our hair loss treatment plan."
            features={hairLossFeatures}
            buttonText="Start Hair Loss Consultation"
            buttonLink="/consultation/hair-loss"
            doctorImage="/hair_loss/shirin-jazayeri-t.webp"
          />
          <ResultsSection
            title="Stop Hair Loss With<br />Assured Pharmacy"
            features={hairLossResultsFeatures}
            showImage={true}
            imageAlt="Man checking hair in mirror"
            showCTA={false}
          />
          <CTABanner
            message="Regain Confidence And Regrow Your Hair!"
            buttonText="Start Consultation"
            buttonLink="/consultation/hair-loss"
          />
          <MedicationsSection
            title="Leading Hair Loss Treatments"
            medications={hairLossMedications}
          />
          <InfoSection
            title="About Hair Loss"
            items={hairLossInfoData}
            imageTitle="Hair Loss Information"
            imageDescription="Man checking hair in mirror"
            imageBackgroundColor="bg-gray-100"
          />
          <MedicationsSection
            title="Other Hair Loss Treatments"
            medications={otherHairLossTreatments}
          />
          <CTABanner
            message="Regain Confidence And Regrow Your Hair!"
            buttonText="Start Consultation"
            buttonLink="/consultation/hair-loss"
          />
          <MedicineInfoSection
            title="Medical Information"
            description="Combat and reverse hair loss with advanced treatment plans designed for hair regrowth. Scientifically proven and clinically tested. When used together, finasteride and minoxidil effectively improve hair loss in 94% of men. These treatments are also powerful individually. Finasteride can halt male pattern baldness in 83% of men, while minoxidil has been shown to enhance hair regrowth in 70% of men."
            tabs={hairLossMedicineInfoData.tabs}
            tabContents={hairLossMedicineInfoData.tabContents}
          />
          <CTABanner
            message="Regain Confidence And Regrow Your Hair!"
            buttonText="Start Consultation"
            buttonLink="/consultation/hair-loss"
          />
          <SafetyGuaranteeSection />
          <FreeTrackedDeliverySection />
          {/* <TrustpilotReviewsSection /> */}
          <CTABanner
            message="Regain Confidence And Regrow Your Hair!"
            buttonText="Start Consultation"
            buttonLink="/consultation/hair-loss"
          />
          <HomeHowItWorksSection />
          <DiscreetServiceSection />
          <InformationAboutOrderingSection />
          <MedicineBrandsSection />
          <CTABanner
            message="Regain Confidence And Regrow Your Hair!"
            buttonText="Start Consultation"
            buttonLink="/consultation/hair-loss"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
} 