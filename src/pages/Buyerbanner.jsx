import React from 'react';
import { ShoppingCart } from 'lucide-react';

const BuyerBanner = () => {
  return (
    <div className="w-full px-4 py-8 bg-[#F5F2EA] group flex-shrink-0">
      <button
        className="w-full flex flex-col items-center justify-center gap-1 bg-[#668b88]  hover:bg-[#76A09D] text-white py-3 px-6 transition-colors duration-200"
        aria-label="Access Buyer Console"
      >
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} className="stroke-[1.5px]" />
          <span className="text-lg font-medium tracking-wide">
            Buyer Console
          </span>
        </div>

        {/* Hover Text */}
        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Do you want to switch to Seller Console?
        </span>
      </button>
    </div>
  );
};

export default BuyerBanner;