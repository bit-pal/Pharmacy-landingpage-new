import Link from 'next/link';

interface CallToActionSectionProps {
  text?: string;
  buttonText?: string;
  href?: string;
  variant?: 'default' | 'gray' | 'compact';
  className?: string;
}

export default function CallToActionSection({ 
  text = "Take the first step towards a healthier you today!",
  buttonText = "Start Consultation",
  href = "/consultation/weight-loss?start=true",
  variant = 'default',
  className = ""
}: CallToActionSectionProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'gray':
        return "bg-gray-200 rounded-xl p-4";
      case 'compact':
        return "bg-white rounded-xl p-2 border border-gray-200";
      default:
        return "bg-white rounded-xl p-3 border border-gray-200";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'gray':
        return "text-lg font-medium text-gray-900";
      case 'compact':
        return "text-base font-bold text-black";
      default:
        return "text-lg font-bold text-black";
    }
  };

  return (
    <div className={`${getVariantStyles()} ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className={getTextStyles()}>
          {text}
        </p>
        <Link 
          href={href}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
} 