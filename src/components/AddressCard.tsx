'use client';

import { useRouter } from 'next/navigation';

interface Address {
  name: string;
  line1: string;
  line2: string;
  country: string;
  phone: string;
}

interface AddressCardProps {
  shippingAddress?: Address;
  billingAddress?: Address;
}

const defaultShippingAddress: Address = {
  name: "Akio Ito",
  line1: "3-12-1 Shinjuku, Shinjuku-ku Tokyo",
  line2: "Tokyo, 東京都, 160-0022",
  country: "United Kingdom",
  phone: "T: 08077904123"
};

const defaultBillingAddress: Address = {
  name: "Akio Ito",
  line1: "3-12-1 Shinjuku, Shinjuku-ku Tokyo",
  line2: "Tokyo, 東京都, 160-0022",
  country: "United Kingdom",
  phone: "T: 08077904123"
};

export default function AddressCard({ 
  shippingAddress = defaultShippingAddress, 
  billingAddress = defaultBillingAddress 
}: AddressCardProps) {
  const router = useRouter();

  const handleEditShipping = () => {
    router.push('/customer/account/shipping-address');
  };

  const handleEditBilling = () => {
    router.push('/customer/account/billing-address');
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Shipping Address */}
        <div className="p-6 border-r border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Shipping Address</h3>
            <button 
              onClick={handleEditShipping}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="text-sm text-gray-800 space-y-1">
              <div className="font-bold">{shippingAddress.name}</div>
              <div>{shippingAddress.line1}</div>
              <div>{shippingAddress.line2}</div>
              <div>{shippingAddress.country}</div>
              <div>{shippingAddress.phone}</div>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Billing Address</h3>
            <button 
              onClick={handleEditBilling}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="text-sm text-gray-800 space-y-1">
              <div className="font-bold">{billingAddress.name}</div>
              <div>{billingAddress.line1}</div>
              <div>{billingAddress.line2}</div>
              <div>{billingAddress.country}</div>
              <div>{billingAddress.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 