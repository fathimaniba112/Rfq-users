import React from 'react';
import { ChevronsUpDown, ChevronDown } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const WalletTransactions = () => {
  const data = [
    {
      rfx: '33037',
      issuedBy: 'ZAYANI MOTORS CO W.L.L',
      title: 'Amount Refunded',
      purchasedOn: '29-Aug-2024 11:47 AM',
      status: 'Successful',
      value: '10.000',
      remark: 'Refunded',
      lastUpdate: '29-Aug-2024 11:47 AM'
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-[#7A9C83]/20 overflow-hidden">
        
        {/* Table Controls */}
        <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>Show</span>
            <select className="border border-[#7A9C83] rounded-md px-2 py-1 bg-white outline-none focus:ring-2 focus:ring-[#43624A]/20">
              <option>50</option>
              <option>25</option>
              <option>10</option>
            </select>
            <span>entries</span>
          </div>

          <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
            <span className="font-medium">Search:</span>
            <input 
              type="text" 
              className="border border-[#7A9C83] rounded-md px-3 py-1.5 flex-1 sm:w-64 outline-none focus:ring-2 focus:ring-[#43624A]/20 transition-all"
            />
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-sm text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b-2 border-[#43624A]">
                {[
                  { label: 'RFX#', sortable: true },
                  { label: 'Issued By', sortable: true },
                  { label: 'Title', sortable: true },
                  { label: 'Purchased On', sortable: true },
                  { label: 'Status', sortable: true },
                  { label: 'Value', sortable: true },
                  { label: 'Remark', sortable: false, active: true },
                  { label: 'Last Update', sortable: true }
                ].map((col, idx) => (
                  <th key={idx} className="px-4 py-4 text-[#43624A] font-semibold cursor-pointer group">
                    <div className="flex items-center justify-between gap-2">
                      {col.label}
                      {col.active ? (
                        <ChevronDown size={14} className="text-[#43624A]" />
                      ) : col.sortable ? (
                        <ChevronsUpDown size={14} className="text-gray-300 group-hover:text-[#7A9C83] transition-colors" />
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F5F2EA]/40 transition-colors">
                  <td className="px-4 py-5 text-gray-500">{row.rfx}</td>
                  <td className="px-4 py-5 font-medium">{row.issuedBy}</td>
                  <td className="px-4 py-5">{row.title}</td>
                  <td className="px-4 py-5 text-gray-600 leading-tight">{row.purchasedOn}</td>
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                      <span className="text-blue-600 font-semibold">{row.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 font-bold">{row.value}</td>
                  <td className="px-4 py-5 text-gray-600">{row.remark}</td>
                  <td className="px-4 py-5 text-gray-600 leading-tight">{row.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Navigation */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-50">
          <p className="text-sm font-medium text-[#2A2A2A]">
            Showing 1 to 1 of 1 entries
          </p>
          
          <div className="flex items-center gap-1">
            <button className="px-4 py-2 text-sm font-semibold text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-bold text-white bg-[#43624A] rounded-lg shadow-sm">
              1
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-[#43624A] bg-[#F5F2EA] rounded-lg hover:bg-[#7A9C83] hover:text-white transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WalletTransactions;