'use client';

import { useRouter } from 'next/navigation';

interface TreatmentStatusCardProps {
  treatmentName: string;
  needsAppointment?: boolean;
  status?: 'waiting' | 'approved' | 'active';
  statusMessage?: string;
}

export default function TreatmentStatusCard({ 
  treatmentName, 
  needsAppointment = false,
  status = 'waiting',
  statusMessage = "Your order is pending approval from one of our prescribers. We'll process it as soon as it's approved."
}: TreatmentStatusCardProps) {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push('/book-consultation');
  };
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-teal-600 mb-4">{treatmentName}</h3>
      
      {needsAppointment ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 mb-4">Please book an appointment if you have not completed it yet.</p>
          <button 
            onClick={handleBookAppointment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-md transition-colors duration-200 mb-6"
          >
            Book appointment
          </button>
          
        </div>
      ) : (
        <div className="bg-white/70 rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="text-center">
                <div className="text-xs text-gray-300 mb-2">Order placed</div>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
              <div className="w-12 h-0.5 bg-teal-500 mx-2"></div>
              <div className="text-center">
                <div className="text-xs text-gray-300 mb-2">Processing</div>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
              <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
              <div className="text-center">
                <div className="text-xs text-gray-300 mb-2">Approved</div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
              <div className="text-center">
                <div className="text-xs text-gray-300 mb-2">Dispatched</div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Waiting for approval</h4>
            <p className="text-sm text-gray-600">{statusMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
} 