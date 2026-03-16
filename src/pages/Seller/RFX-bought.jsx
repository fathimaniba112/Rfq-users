import React, { useState } from 'react';
import { ChevronDown, Search, MoreVertical, Filter } from 'lucide-react';

const RFXbought = () => {
  const [activeTab, setActiveTab] = useState('RFQ Expired');
  const [selectedAction, setSelectedAction] = useState('');

  // Your custom palette
  const colors = {
    dark: '#2A2A2A',
    deepGreen: '#43624A',
    sageGreen: '#7A9C83',
    offWhite: '#F5F2EA',
    border: '#E5E7EB',
  };

  const tabs = ['All', 'Pending', 'Participating', 'Not Participating', 'RFQ Expired'];

  const tableData = [
    { id: '87391', rfx: 'RFQ', buyer: 'CINQO CONTRACTING W.L.L.', requisition: 'CC-146 Supply & Installation of Electrical works', closingDate: '10-Mar-2026 6:33 PM', lastUpdate: '19-Feb-2026 6:23 PM', status: 'RFQ Expired' },
    { id: '87308', rfx: 'RFQ', buyer: 'CINQO CONTRACTING W.L.L.', requisition: 'CC-146 Supply & Installation of Plumbing works', closingDate: '19-Feb-2026 6:30 PM', lastUpdate: '19-Feb-2026 1:35 PM', status: 'RFQ Expired' },
    { id: '87624', rfx: 'RFQ', buyer: 'CINQO CONTRACTING W.L.L.', requisition: 'CC-147 Supply & Installation of Electrical Works', closingDate: '20-Feb-2026 7:15 PM', lastUpdate: '17-Feb-2026 5:42 PM', status: 'RFQ Expired' },
    { id: '81706', rfx: 'RFQ', buyer: 'IMAR-CINQO JV', requisition: 'Supply and Delivery of Lighting Fixtures', closingDate: '17-Feb-2026 2:16 PM', lastUpdate: '04-Feb-2026 6:41 PM', status: 'RFQ Expired' },
  ];

  return (
    <div className="min-h-screen p-6 font-sans antialiased text-gray-900" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* Header Section with Tabs and Custom Dropdown */}
        <div className="px-6 py-4 border-b border-gray-100 bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1 p-1 bg-gray-50 rounded-xl border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab 
                  ? 'text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
                }`}
                style={{ 
                  backgroundColor: activeTab === tab ? colors.deepGreen : 'transparent' 
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative min-w-[200px]">
            <select 
              className="w-full appearance-none bg-white border border-gray-200 text-gray-600 py-2.5 px-4 pr-10 rounded-xl text-sm focus:ring-2 focus:ring-opacity-20 outline-none transition-all cursor-pointer hover:border-gray-300"
              style={{ focusRingColor: colors.sageGreen }}
              onChange={(e) => setSelectedAction(e.target.value)}
            >
              <option value="">Please Select Action</option>
              <option value="RFQ">RFQ</option>
              <option value="RFP">RFP</option>
             </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Toolbar Section */}
        <div className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
            <span>Show</span>
            <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 pr-8 focus:outline-none focus:border-gray-400">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
            </div>
            <span>entries</span>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by ID, Buyer or Requisition..." 
              className="w-full md:w-80 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-gray-100 outline-none transition-all"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold border-y border-gray-100">
                <th className="px-6 py-4">Id#</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Buyer Entity</th>
                <th className="px-6 py-4">Project Requisition</th>
                <th className="px-6 py-4">Timeline</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-[#F9FAFB] transition-colors group">
                  <td className="px-6 py-5 text-sm font-bold text-gray-800">#{row.id}</td>
                  <td className="px-6 py-5 text-xs font-semibold text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded-md">{row.rfx}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm font-bold" style={{ color: colors.deepGreen }}>{row.buyer}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Verified Vendor</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-gray-600 max-w-[280px] leading-relaxed font-medium">
                        {row.requisition}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                        <div className="text-[11px] text-gray-400">Closing: <span className="text-gray-600 font-medium">{row.closingDate.split(' ')[0]}</span></div>
                        <div className="text-[11px] text-gray-400">Updated: <span className="text-gray-600 font-medium">{row.lastUpdate.split(' ')[0]}</span></div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100">
                          <span className="w-1.5 h-1.5 rounded-full mr-2 bg-red-500 animate-pulse"></span>
                          Expired
                        </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-gray-400 hover:text-gray-600 transition-all">
                        <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Improved Pagination */}
        <div className="px-6 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/30">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Showing <span className="text-gray-700">1-4</span> of <span className="text-gray-700">39</span> entries
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 transition-colors uppercase tracking-widest disabled:opacity-30">Prev</button>
            <div className="flex gap-1">
                {[1, 2, 3].map(num => (
                    <button 
                        key={num}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${num === 1 ? 'text-white shadow-md' : 'text-gray-400 hover:bg-gray-100'}`}
                        style={{ backgroundColor: num === 1 ? colors.sageGreen : 'transparent' }}
                    >
                        {num}
                    </button>
                ))}
            </div>
            <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 transition-colors uppercase tracking-widest">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFXbought;