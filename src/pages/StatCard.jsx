import React from 'react';
import { Info } from 'lucide-react';

const StatCard = ({ title, value, d7, ytd }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center gap-1 text-[11px] text-[#2D6A4F] font-bold mb-2 uppercase tracking-wider">
      {title} <Info size={12} className="text-gray-300" />
    </div>
    <div className="text-4xl font-extrabold text-gray-800 mb-2">{value}</div>
    <div className="text-[10px] text-gray-400 font-medium">
      <div>{d7} (7 Days)</div>
      <div>{ytd} (YTD)</div>
    </div>
  </div>
);

export default StatCard;