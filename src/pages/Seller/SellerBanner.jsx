import React from 'react';
import { Store } from 'lucide-react';

const SellerBanner = () => {
  return (
    <div className="w-full px-4 py-8 bg-[#F5F2EA] group flex-shrink-0">
      <button 
        className="w-full flex flex-col items-center justify-center gap-1 bg-[#43624A] hover:bg-[#7A9C83] text-white py-3 px-6 transition-colors duration-200"
        aria-label="Access Seller Console"
      >
        <div className="flex items-center gap-2">
          {/* Using Store icon to represent the Seller side */}
          <Store size={20} className="stroke-[1.5px]" />
          <span className="text-lg font-medium tracking-wide">
            Seller Console
          </span>
        </div>

        {/* Hover Text */}
        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Do you want to switch to Buyer Console?
        </span>
      </button>
    </div>
  );
};

export default SellerBanner;