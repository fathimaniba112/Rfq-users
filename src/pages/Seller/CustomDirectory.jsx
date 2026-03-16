import React from 'react';
import { Eye, Trash2, ChevronUp, ChevronsUpDown } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const CustomerDirectory = () => {
  const customers = [
    { name: 'BAHRAIN DEVELOPMENT BANK B S C (C)', type: 'Authorized Distributor', status: 'Active', rating: 0, projects: 0 },
    { name: 'CINQO CONTRACTING W.L.L.', type: 'Authorized Distributor', status: 'Active', rating: 0, projects: 0 },
    { name: 'EURO MOTORS CO. W.L.L', type: 'Authorized Distributor', status: 'Active', rating: 0, projects: 0 },
    { name: 'IMAR-CINQO JV', type: 'Authorized Distributor', status: 'Active', rating: 0, projects: 0 },
    { name: 'TYROL CONTRACTING W.L.L', type: 'Authorized Distributor', status: 'Active', rating: 0, projects: 0 },
    { name: 'ZAYANI MOTORS CO W.L.L', type: 'Authorized Distributor', status: 'Active', rating: 0, projects: 0 },
  ];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-[#7A9C83]/20 overflow-hidden">
        
        {/* Top Header */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 gap-4">
          <h1 className="text-xl font-semibold text-[#2A2A2A]">Customer Directory</h1>
          <button className="text-[#43624A] hover:underline text-sm font-medium">
            Show Deleted Items
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Info */}
          <div className="w-full lg:w-72 p-6 bg-white border-r border-gray-50">
            <p className="text-sm leading-relaxed text-gray-500">
              Your customer directory is a complete list of companies that you have interacted with in the past by purchasing an RFQ. 
              Manage your customer directory, including contact details and Key Account Managers.
            </p>
          </div>

          {/* Table Content */}
          <div className="flex-1 p-6 overflow-hidden">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>Show</span>
                <select className="border border-[#7A9C83] rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#43624A]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>entries</span>
              </div>
              <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
                <span>Search:</span>
                <input 
                  type="text" 
                  className="border border-[#7A9C83] rounded px-3 py-1 flex-1 sm:w-64 outline-none focus:ring-1 focus:ring-[#43624A]" 
                />
              </div>
            </div>

            {/* Table Wrapper for Horizontal Scroll */}
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-sm text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-[#43624A]">
                    <th className="px-4 py-3 text-[#43624A] font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-1 cursor-pointer">
                        Name <ChevronUp size={14} />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-gray-500 font-semibold">
                      <div className="flex items-center gap-1 cursor-pointer">
                        Type <ChevronsUpDown size={14} className="text-gray-300" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-center">
                      <div className="flex items-center justify-center gap-1 cursor-pointer">
                        Status <ChevronsUpDown size={14} className="text-gray-300" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-center">
                      <div className="flex items-center justify-center gap-1 cursor-pointer">
                        Rating <ChevronsUpDown size={14} className="text-gray-300" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-center">
                      <div className="flex items-center justify-center gap-1 cursor-pointer">
                        Active projects <ChevronsUpDown size={14} className="text-gray-300" />
                      </div>
                    </th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {customers.map((customer, idx) => (
                    <tr key={idx} className="hover:bg-[#F5F2EA]/30 transition-colors group">
                      <td className="px-4 py-4 font-medium text-[#2A2A2A]">{customer.name}</td>
                      <td className="px-4 py-4 text-gray-600">{customer.type}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex items-center gap-1.5 text-blue-600 font-medium">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">{customer.rating}</td>
                      <td className="px-4 py-4 text-center text-gray-600">{customer.projects}</td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-3 text-gray-400 group-hover:text-gray-600">
                          <Eye size={18} className="cursor-pointer hover:text-[#43624A]" />
                          <span className="text-gray-300">|</span>
                          <Trash2 size={18} className="cursor-pointer hover:text-red-500" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer / Pagination */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 italic">
                Showing 1 to 6 of 6 entries (filtered from 12,077 total entries)
              </p>
              
              <div className="flex items-center gap-1">
                <button className="px-4 py-1.5 text-sm font-medium text-gray-400 bg-gray-50 rounded-md cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-[#43624A] rounded-md">
                  1
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-[#43624A] hover:bg-[#7A9C83] hover:text-white transition-colors rounded-md">
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerDirectory;