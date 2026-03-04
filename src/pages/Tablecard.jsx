import React from 'react';

const TableCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#43624A] p-5 w-full md:w-96 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#43624A] font-bold text-lg">{title}</h3>
        <button className="text-[#43624A] border border-[#7A9C83] px-3 py-1 rounded text-sm hover:bg-[#F5F2EA] transition">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default TableCard;