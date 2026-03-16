import React, { useState } from 'react';
import SettingsSidebar from "./SettingsSidebar";

const CustomerTypesTable = () => {
  const data = [
    { type: 'Authorized Distributor', desc: 'Licensed or authorized local distributor or reseller of a product produced by an OEM' },
    { type: 'Manufacturer', desc: 'Suppliers that are original or direct manufacturers of the product being offered' },
    { type: 'Producer', desc: 'Non-manufacturing producers of goods, such as farms, mining firms, or extraction businesses' },
    { type: 'Retailer', desc: 'Seller of goods in small quantities direct to end consumer' },
    { type: 'Service Provider', desc: 'Suppliers or vendor that primarily provides a service as opposed to products or goods' },
    { type: 'Wholesaler', desc: 'seller or provider of goods in bulk, direct from the manufacturer' },
  ];

  return (
      <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-[#7A9C83]/20">
        
        {/* Header Section */}
        <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold text-[#43624A] mb-2">Customer Types</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Add labels and qualifiers to your supplier to enable faceted search. 
              Multiple supplier type labels can be applied to a single supplier.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border border-[#7A9C83] rounded px-2 py-1 focus:ring-2 focus:ring-[#43624A] outline-none">
                <option>50</option>
                <option>25</option>
                <option>10</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
              <span>Search:</span>
              <input 
                type="text" 
                className="border border-[#7A9C83] rounded px-3 py-1 w-full sm:w-48 focus:ring-2 focus:ring-[#43624A] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#43624A]">
                <th className="px-6 py-4 text-[#43624A] font-semibold cursor-pointer hover:bg-[#F5F2EA] transition-colors">
                  Customer Type <span className="ml-1 text-xs">▲</span>
                </th>
                <th className="px-6 py-4 text-[#43624A] font-semibold flex items-center justify-between">
                  Description
                  <span className="text-[10px] text-[#7A9C83]">⇅</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-[#F5F2EA]/50 transition-colors">
                  <td className="px-6 py-4 font-medium align-top whitespace-nowrap lg:whitespace-normal">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 text-gray-600 leading-relaxed">
                    {item.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Showing 1 to 6 of 6 entries
          </p>
          
          <div className="flex items-center space-x-1">
            <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-l-md cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-[#43624A] border-x border-[#43624A]">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-[#43624A] bg-[#F5F2EA] rounded-r-md hover:bg-[#7A9C83] hover:text-white transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerTypesTable;