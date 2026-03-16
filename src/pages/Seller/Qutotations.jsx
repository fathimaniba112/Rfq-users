import React, { useState } from 'react';
import { 
  FiFileText, FiRefreshCw, FiSend, FiInbox, FiShield, 
  FiCheckCircle, FiXCircle, FiCalendar, FiAlertCircle, FiSearch 
} from 'react-icons/fi';
const Quotations = () => {
  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A',
    secondary: '#7A9C83',
    bg: '#F5F2EA',
    accent: '#FFFFFF'
  };

  const [activeTab, setActiveTab] = useState('All');

  // Full status list from your image
  const statusTabs = [
    { label: 'All', icon: <FiFileText /> },
    { label: 'Draft', icon: <FiFileText /> },
    { label: 'In Review', icon: <FiRefreshCw /> },
    { label: 'Quotation Submitted', icon: <FiSend /> },
    { label: 'Counter Offer Received', icon: <FiInbox /> },
{ label: 'Counter Offer Accepted', icon: <FiShield /> },
    { label: 'Bid Accepted', icon: <FiCheckCircle /> },
    { label: 'Bid Declined', icon: <FiXCircle /> },
    { label: 'No Longer Valid', icon: <FiCalendar /> },
    { label: 'Request Requote Received', icon: <FiAlertCircle /> },
  ];

  const tableData = [
    { id: '76296', rfx: '87308', type: 'RFQ', buyer: 'CINQO CONTRACTING W.L.L.', title: 'CC-146 Supply & Installation of Plumbing works', status: 'Bid Declined', date: '19-Feb-2026 1:35 PM' },
    { id: '76295', rfx: '87391', type: 'RFQ', buyer: 'CINQO CONTRACTING W.L.L.', title: 'CC-146 Supply & Installation of Electrical works', status: 'Quotation Submitted', date: '19-Feb-2026 6:23 PM' },
    { id: '76283', rfx: '87624', type: 'RFQ', buyer: 'CINQO CONTRACTING W.L.L.', title: 'CC-147 Supply & Installation of Electrical Works', status: 'Quotation Submitted', date: '17-Feb-2026 5:42 PM' },
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8" style={{ backgroundColor: colors.bg, color: colors.dark }}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* 1. TOP NAVIGATION FILTERS (The Blue bar in your image, reimagined) */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white/50 p-2 rounded-xl backdrop-blur-sm border border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
          {statusTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider border transition-all duration-200"
              style={{
                backgroundColor: activeTab === tab.label ? colors.primary : 'transparent',
                color: activeTab === tab.label ? colors.accent : colors.dark,
                borderColor: activeTab === tab.label ? colors.primary : 'rgba(0,0,0,0.05)',
              }}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2. SEARCH & CONTROL BAR */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase opacity-50">Show entries</label>
                <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9C83]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
             </div>
             <div className="flex flex-col gap-1 flex-1 md:w-80">
                <label className="text-[10px] font-bold uppercase opacity-50">Filter by category</label>
                <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9C83]">
                  <option>Please Select</option>
                  <option>RFQ</option>
                  <option>RFP</option>
                 </select>
              
             </div>
          </div>

          <div className="relative w-full md:w-96 group">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#43624A]" />
            <input 
              type="text"
              placeholder="Search RFX, Buyer, or Title..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7A9C83] transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 3. TABLE CONTAINER */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  {['#', 'RFX #', 'Type', 'Buyer', 'Title', 'Status', 'Date'].map((header) => (
                    <th key={header} className="p-5 text-[11px] font-black uppercase tracking-widest text-gray-400">
                      <div className="flex items-center gap-1 cursor-pointer hover:text-[#43624A]">
                        {header} <span className="text-[8px]">▼</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-[#F5F2EA]/30 transition-all duration-150">
                    <td className="p-5 text-sm font-medium text-gray-400">{row.id}</td>
                    <td className="p-5 text-sm font-bold text-[#43624A]">{row.rfx}</td>
                    <td className="p-5 text-sm font-semibold">{row.type}</td>
                    <td className="p-5 text-sm font-medium text-gray-700 max-w-[200px] leading-tight">{row.buyer}</td>
                    <td className="p-5 text-sm text-gray-600 font-medium max-w-[300px] italic leading-snug">{row.title}</td>
                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${row.status === 'Bid Declined' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                        <span className={`text-xs font-bold py-1 px-3 rounded-md shadow-sm ${
                          row.status === 'Bid Declined' 
                          ? 'bg-red-50 text-red-700 border border-red-100' 
                          : 'bg-green-50 text-green-700 border border-green-100'
                        }`}>
                          {row.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-xs font-bold text-gray-400 whitespace-nowrap">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4. FOOTER */}
          <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm font-medium text-gray-500">
              Showing <span className="text-gray-900 font-bold">1 to 10</span> of <span className="text-gray-900 font-bold">32</span> entries
            </span>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-[#43624A] transition-colors">Previous</button>
              {[1, 2, 3, 4].map((n) => (
                <button 
                  key={n}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black transition-all ${
                    n === 1 ? 'shadow-lg' : 'hover:bg-white border border-transparent hover:border-gray-200'
                  }`}
                  style={{
                    backgroundColor: n === 1 ? colors.primary : 'transparent',
                    color: n === 1 ? colors.accent : colors.dark,
                  }}
                >
                  {n}
                </button>
              ))}
              <button className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-[#43624A] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotations;