import React from 'react';
import { RotateCcw, Edit } from 'lucide-react';

const BuyerPendingAction = ({ id, org, date }) => (
  <div className="flex gap-3 items-start border-b border-gray-100 pb-4 last:border-0">
    <RotateCcw size={18} className="text-gray-400 mt-1" />
    <div className="flex-1">
      <p className="text-[13px] leading-relaxed text-gray-600">
        A <span className="font-bold text-gray-800">Quotation # {id}</span> created by organisation: 
        <span className="text-[#2D6A4F] font-bold ml-1">{org}</span>, is in Pending Response state.
      </p>
      <p className="text-[10px] text-gray-400 mt-1 font-medium">{date}</p>
    </div>
    <button className="p-1.5 bg-orange-50 text-orange-500 rounded-md hover:bg-orange-100 transition-colors">
      <Edit size={14} />
    </button>
  </div>
);

export default BuyerPendingAction;