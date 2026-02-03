import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCard from '@/components/ConsultationCard';
import ResultsSection from '@/components/ResultsSection';
import CTABanner from '@/components/CTABanner';
import MedicationsSection from '@/components/MedicationsSection';
import InfoSection from '@/components/InfoSection';
import MedicineInfoSection from '@/components/MedicineInfoSection';
import SafetyGuaranteeSection from "@/components/SafetyGuaranteeSection";
import FreeTrackedDeliverySection from "@/components/FreeTrackedDeliverySection";
import TrustpilotReviewsSection from "@/components/TrustpilotReviewsSection";
import HomeHowItWorksSection from "@/components/HomeHowItWorksSection";
import DiscreetServiceSection from "@/components/DiscreetServiceSection";
import InformationAboutOrderingSection from "@/components/InformationAboutOrderingSection";
import MedicineBrandsSection from "@/components/MedicineBrandsSection";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Erectile Dysfunction - Assured Pharmacy",
  description: "Start your erectile dysfunction consultation. Most men encounter ED at some stage. UK-licensed treatments can help up to 90% of men effectively manage this condition.",
};

export default function ErectileDysfunctionPage() {
  const edFeatures = [
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/ed_treatment/clock.webp"
            alt="Takes Only A Few Minutes"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      title: "Takes Only",
      subtitle: "A Few Minutes"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/ed_treatment/lock.webp"
            alt="Secure And Discreet Service"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      title: "Secure And",
      subtitle: "Discreet Service"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/ed_treatment/cart.webp"
            alt="Fast Delivery"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      title: "Fast",
      subtitle: "Delivery"
    }
  ];

  const additionalContent = (
    <p>
      Complete our online consultation to see if your are eligible and so we
      can show you the available erectile dysfunction treatments and prices.
    </p>
  );

  const edResultsFeatures = [
    {
      icon: "star" as const,
      title: "Proven Results",
      description: "Up to 85% success rate for ED"
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

  const edMedications = [
    {
      name: "Sildenafil",
      image: "/ed_treatment/sildenafil-t.png",
      badge: "Lowest Price",
      buttonText: "View Prices →",
      buttonLink: "/medications/sildenafil",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Promotes Strong Erections",
        "Lowest Cost",
        "Effected by Food"
      ],
      details: [
        { label: "Duration", value: "Approx. 4 hours" },
        { label: "Works within", value: "30-60 minutes" },
        { label: "Price from", value: "£2.00 per tablet" }
      ]
    },
    {
      name: "Tadalafil",
      image: "/ed_treatment/tadalafil-t.png",
      badge: "Longest Acting",
      buttonText: "View Prices →",
      buttonLink: "/medications/tadalafil",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Spontaneous Sex",
        "Longest Acting",
        "Not Effected by Food"
      ],
      details: [
        { label: "Duration", value: "Up to 36 hours" },
        { label: "Works within", value: "30-120 minutes" },
        { label: "Price from", value: "£2.25 per tablet" }
      ]
    }
  ];

  const edInfoItems = [
    {
      question: "What is erectile dysfunction?",
      answer: "Erectile dysfunction (ED) is the inability to get or maintain an erection firm enough for sexual intercourse. It's a common condition that affects millions of men worldwide. While it's more common in older men, it can affect men of all ages. ED can be a sign of physical or psychological conditions and can affect your quality of life and relationships. The good news is that ED is treatable, and there are many effective treatment options available."
    },
    {
      question: "Causes of ED",
      answer: "ED can be caused by both physical and psychological factors. Physical causes include heart disease, diabetes, high blood pressure, obesity, low testosterone, sleep disorders, and certain medications. Psychological causes include stress, anxiety, depression, and relationship problems. Often, ED is caused by a combination of physical and psychological factors. Lifestyle factors such as smoking, excessive alcohol consumption, and drug use can also contribute to ED."
    },
    {
      question: "Treatments available",
      answer: "There are several effective treatments for ED. The most common are PDE5 inhibitors (oral medications) such as Sildenafil (Viagra), Tadalafil (Cialis), and others. These medications help increase blood flow to the penis. Other treatments include vacuum pumps, penile injections, testosterone therapy, and in some cases, surgery. Your healthcare provider can help determine the best treatment option for you based on your specific situation and medical history."
    },
    {
      question: "Can lifestyle changes improve ED?",
      answer: "Yes! Lifestyle changes can significantly improve ED symptoms. Regular exercise improves blood flow and cardiovascular health. Maintaining a healthy weight reduces the risk of diabetes and vascular diseases. Quitting smoking and limiting alcohol consumption can improve erectile function. Managing stress through relaxation techniques, adequate sleep, and open communication with your partner can also help. A healthy diet rich in fruits, vegetables, whole grains, and fish supports overall vascular health. These lifestyle changes work best when combined with medical treatment if needed."
    }
  ];

  const otherEDTreatments = [
    {
      name: "Tadalafil (daily)",
      image: "/ed_treatment/tadalafil_daily-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/tadalafil-daily",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Lowest Cost",
        "Fastest Acting",
        "Effected by Food"
      ],
      details: [
        { label: "Works within", value: "30 mins" },
        { label: "Taken Daily", value: "To always be active" },
        { label: "Price per pill", value: "From £1.25" }
      ]
    },
    {
      name: "Spedra",
      image: "/ed_treatment/spedra-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/spedra",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Very Fast Acting",
        "Easy To Take (chewable)",
        "Moderately Expensive"
      ],
      details: [
        { label: "Works within", value: "15 - 30 mins" },
        { label: "Lasts up to", value: "4 hours" },
        { label: "Price per pill", value: "From £3.25" }
      ]
    },
    {
      name: "Viagra",
      image: "/ed_treatment/viagra-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/viagra",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "The Original Blue Pill",
        "Very Expensive",
        "Well Known Brand"
      ],
      details: [
        { label: "Works within", value: "30 - 60 mins" },
        { label: "Lasts up to", value: "4 hours" },
        { label: "Price per pill", value: "From £8.12" }
      ]
    },
    {
      name: "Viagra Connect",
      image: "/ed_treatment/viagra_connect-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/viagra-connect",
      // rating: {
      //   text: "Excellent",
      //   platform: "TrustPilot",
      //   stars: 5
      // },
      features: [
        "Higher cost",
        "Longest Acting",
        "Not Effected by Food"
      ],
      details: [
        { label: "Works within", value: "30 - 60 mins" },
        { label: "Lasts up to", value: "4 hours" },
        { label: "Price per pill", value: "From £10" }
      ]
    }
  ];

  const edMedicineInfoData = {
    tabs: [
      { key: 'sildenafil', label: 'Sildenafil' },
      { key: 'tadalafil', label: 'Tadalafil' }
    ],
    tabContents: {
      sildenafil: {
        dosageTitle: "How to Take Sildenafil",
        dosageSteps: [
          { period: "Sildenafil (Viagra)", dose: "" }
        ],
        showImage: true,
        imageAlt: "Taking sildenafil tablet",
        instructions: [
          "Take one tablet 30 minutes to 1 hour before sex",
          "Effective for 4-6 hours",
          "Taking with food may slow its effect"
        ],
        faqTitle: "Sildenafil FAQs",
        faqs: [
          {
            question: "How does sildenafil work?",
            answer: "Sildenafil works by relaxing the blood vessels in your penis, which allows more blood to flow into it when you're sexually stimulated. It belongs to a class of medications called PDE5 inhibitors, which block an enzyme that regulates blood flow. This helps you achieve and maintain an erection suitable for sexual activity. It's important to note that sildenafil only works when you're sexually aroused - it won't cause an erection on its own."
          },
          {
            question: "What can I expect to happen when I take sildenafil?",
            answer: "After taking sildenafil, you should wait 30-60 minutes before sexual activity. When you become sexually aroused, you'll find it easier to get and maintain an erection. The medication doesn't increase sexual desire - you still need to be sexually stimulated for it to work. You might experience mild side effects like headache, flushing, or indigestion, but these are usually temporary and mild."
          },
          {
            question: "How long does sildenafil last?",
            answer: "Sildenafil typically remains effective for 4-6 hours after taking it. This doesn't mean you'll have an erection for the entire time - it means you'll be able to achieve an erection more easily during this period when sexually stimulated. The effects gradually wear off as your body processes the medication. The peak effect is usually 1-2 hours after taking it."
          },
          {
            question: "Is sildenafil safe to use long term?",
            answer: "Yes, sildenafil is generally safe for long-term use when taken as prescribed by a healthcare professional. Studies have shown that men can use it regularly without significant health risks. However, it's important to have regular check-ups with your doctor to ensure it remains appropriate for you, especially if you have any underlying health conditions or take other medications."
          },
          {
            question: "Can I take sildenafil more than once a day?",
            answer: "No, you should not take sildenafil more than once in a 24-hour period. Taking it more frequently can increase the risk of side effects and doesn't improve effectiveness. If you find that one dose isn't working well enough, speak to your doctor about adjusting your dosage rather than taking multiple doses. Your doctor can help find the right dose for your needs."
          }
        ]
      },
      tadalafil: {
        dosageTitle: "How to Take Tadalafil",
        dosageSteps: [
          { period: "Tadalafil (Cialis)", dose: "" }
        ],
        showImage: true,
        imageAlt: "Taking tadalafil tablet",
        instructions: [
          "Take one tablet 30 minutes to 2 hours before sex",
          "Effective for up to 36 hours",
          "Can be taken with or without food"
        ],
        faqTitle: "Tadalafil FAQs",
        faqs: [
          {
            question: "How does tadalafil work?",
            answer: "Tadalafil works by relaxing the blood vessels in your penis, allowing increased blood flow when you're sexually aroused. Like sildenafil, it's a PDE5 inhibitor that blocks the enzyme responsible for reducing blood flow. What makes tadalafil unique is its longer duration of action - it can remain effective for up to 36 hours, earning it the nickname 'the weekend pill'. This longer window allows for more spontaneity in your intimate moments."
          },
          {
            question: "What can I expect to happen when I take tadalafil?",
            answer: "Tadalafil typically starts working within 30 minutes to 2 hours after taking it. You'll be able to achieve and maintain an erection more easily when sexually stimulated during the 36-hour window. You don't need to time intimacy as precisely as with shorter-acting medications. Remember, you still need sexual stimulation for it to work - it won't cause spontaneous erections. Some men experience mild side effects like headache, back pain, or indigestion."
          },
          {
            question: "How long does tadalafil last?",
            answer: "Tadalafil can remain effective for up to 36 hours, which is significantly longer than other ED medications. This doesn't mean you'll have a constant erection - it means you'll be able to respond naturally to sexual stimulation during this extended period. The medication gradually leaves your system over this time. This extended duration makes it popular among men who want more flexibility and spontaneity."
          },
          {
            question: "Is tadalafil safe to use long term?",
            answer: "Yes, tadalafil is safe for long-term use when prescribed by a healthcare professional and taken as directed. Clinical studies have demonstrated its safety profile over extended periods. Regular medical check-ups are recommended to monitor your overall health and ensure the medication continues to be appropriate for you. If you have any concerns about long-term use, discuss them with your doctor."
          },
          {
            question: "Can I take tadalafil more than once a day?",
            answer: "No, you should only take tadalafil once within a 24-hour period. Because it stays active in your body for up to 36 hours, taking it more frequently is unnecessary and can increase the risk of side effects. If you feel the medication isn't working effectively, consult your doctor about adjusting the dose rather than taking multiple doses. Never exceed the recommended dosage."
          }
        ]
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content area */}
      <div className="py-4 md:py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          <ConsultationCard
            title="Start Your Erectile<br />Dysfunction Consultation"
            description="Most men encounter ED at some stage. UK-licensed treatments can help up to 90% of men effectively manage this condition. Benefit from our low price guarantee, free tracked delivery, and discreet packaging."
            features={edFeatures}
            buttonText="Start ED Consultation"
            buttonLink="/consultation/erectile-dysfunction"
            additionalContent={additionalContent}
            doctorImage="/ed_treatment/shirin-jazayeri-t.webp"
          />
          <ResultsSection
            title="Stop Erectile Dysfunction<br />With Assured Pharmacy"
            features={edResultsFeatures}
            showImage={true}
            imageAlt="Couple enjoying intimate moment"
            showCTA={false}
          />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <MedicationsSection
            title="Leading ED Treatments"
            medications={edMedications}
          />
          <InfoSection
            title="About ED"
            imageTitle="ED Information"
            imageDescription="Doctor consultation and treatment options"
            imageBackgroundColor="bg-blue-100"
            items={edInfoItems}
          />
          <MedicationsSection
            title="Other ED Treatments"
            medications={otherEDTreatments}
          />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <MedicineInfoSection
            title="Medical Information"
            description="Sildenafil (generic Viagra) and Tadalafil (generic Cialis) are popular and effective treatments for erectile dysfunction (ED). Available as generics, they are affordable, low-cost options. These medications work by increasing blood flow to the penis, helping you achieve and maintain an erection"
            tabs={edMedicineInfoData.tabs}
            tabContents={edMedicineInfoData.tabContents}
          />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <SafetyGuaranteeSection />
          <FreeTrackedDeliverySection />
          {/* <TrustpilotReviewsSection /> */}
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <HomeHowItWorksSection />
          <DiscreetServiceSection />
          <InformationAboutOrderingSection />
          <MedicineBrandsSection />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />

        </div>
      </div>
      <Footer />
    </main>
  );
} 