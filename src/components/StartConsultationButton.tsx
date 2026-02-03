import Link from 'next/link';

interface StartConsultationButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function StartConsultationButton({ 
  href = "/treatments", 
  className = "",
  children = "Start Consultation"
}: StartConsultationButtonProps) {
  return (
    <Link 
      href={href}
      className={`box-border inline-flex min-h-11 w-full items-center justify-center rounded-md bg-green-500 px-5 py-2 text-center text-base font-medium text-white shadow-sm visited:text-white hover:text-white hover:no-underline sm:inline-flex sm:w-auto hover:bg-green-600 transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
} 