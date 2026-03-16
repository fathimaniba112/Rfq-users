import React, { useState } from "react";
import { 
  FiSearch, 
  FiFilter, 
  FiClock, 
  FiCheckCircle, 
  FiXCircle, 
  FiActivity,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

const CreateProposal = () => {
  // Color Palette from provided image
  const colors = {
    dark: "#2A2A2A",      // Dark Grey/Black
    primary: "#43624A",   // Deep Green
    secondary: "#7A9C83", // Muted Sage Green
    bg: "#F5F2EA",        // Off-white/Cream
    white: "#FFFFFF",
  };

  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { label: "All", icon: <FiActivity /> },
    { label: "Pending", icon: <FiClock /> },
    { label: "Participating", icon: <FiCheckCircle /> },
    { label: "Not Participating", icon: <FiXCircle /> },
    { label: "RFQ Expired", icon: <FiFilter /> },
  ];

  const tableData = [
    {
      rfq: "31035",
      buyer: "CINQO CONTRACTING W.L.L.",
      requisition: "CC134 - Supply and Installation of ELV works",
      closingDate: "22-Mar-2025 3:30 PM",
      requiredBy: "22-Mar-2025 3:30 PM",
      lastUpdate: "20-Mar-2025 12:26 PM",
      status: "RFQ Expired",
    },
    {
      rfq: "8441",
      buyer: "CINQO CONTRACTING W.L.L.",
      requisition: "CC135 - Supply and Installation of HVAC work",
      closingDate: "10-Sep-2024 6:30 PM",
      requiredBy: "10-Sep-2024 6:30 PM",
      lastUpdate: "02-Jul-2024 11:27 AM",
      status: "RFQ Expired",
    },
    {
      rfq: "12493",
      buyer: "ZAYANI MOTORS CO W.L.L",
      requisition: "PACKAGE AC 20 or 22.5 TON. FOR CAR SHOWROOM",
      closingDate: "23-Aug-2023 11:30 AM",
      requiredBy: "20-Aug-2023 7:43 PM",
      lastUpdate: "16-Aug-2023 11:54 AM",
      status: "RFQ Expired",
    },
    {
      rfq: "12406",
      buyer: "TYROL CONTRACTING W.L.L.",
      requisition: "Supply and Installation - HVAC works for 2 storey villa at Jasra",
      closingDate: "23-Aug-2023 2:24 PM",
      requiredBy: "16-Aug-2023 12:30 PM",
      lastUpdate: "17-Aug-2023 3:38 PM",
      status: "RFQ Expired",
    },
  ];

  return (
   <div className="p-4 md:p-6 font-sans" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto">
        
        {/* TABS SECTION */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm border
                ${activeTab === tab.label 
                  ? 'scale-105' 
                  : 'hover:bg-white/50'}`}
              style={{
                backgroundColor: activeTab === tab.label ? colors.primary : colors.white,
                color: activeTab === tab.label ? colors.white : colors.dark,
                borderColor: activeTab === tab.label ? colors.primary : "#E5E7EB",
              }}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* TOP BAR: Search & Entries */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm w-full md:w-auto">
            <span className="text-xs font-bold text-gray-400 uppercase">Show</span>
            <select className="bg-transparent text-sm font-bold focus:outline-none cursor-pointer">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="text-xs font-bold text-gray-400 uppercase">Entries</span>
          </div>

          <div className="relative w-full md:w-80 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#7A9C83] transition-colors" />
            <input
              type="text"
              placeholder="Search RFQ, Buyer..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 shadow-sm transition-all"
              style={{ focusRingColor: colors.secondary }}
            />
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  {["RFP#", "Buyer", "Requisition", "Closing Date", "Required By", "Last Update", "Status"].map((header) => (
                    <th key={header} className="p-4 text-[11px] font-black uppercase tracking-widest text-gray-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F5F2EA]/40 transition-colors group">
                    <td className="p-4 text-sm font-bold" style={{ color: colors.primary }}>{row.rfq}</td>
                    <td className="p-4 text-sm font-medium text-gray-700 max-w-[180px]">{row.buyer}</td>
                    <td className="p-4 text-sm text-gray-600 max-w-[250px] leading-relaxed">{row.requisition}</td>
                    <td className="p-4 text-[13px] text-gray-500 font-medium">{row.closingDate}</td>
                    <td className="p-4 text-[13px] text-gray-500 font-medium">{row.requiredBy}</td>
                    <td className="p-4 text-[13px] text-gray-400">{row.lastUpdate}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        <span className="text-[11px] font-black uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {row.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER / PAGINATION */}
          <div className="p-5 flex flex-col sm:row sm:flex-row justify-between items-center gap-4 bg-gray-50/30 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-500">
              Showing <span className="text-gray-800">1 to {tableData.length}</span> of <span className="text-gray-800">17</span> entries
            </p>
            
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><FiChevronLeft size={20}/></button>
              <button 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shadow-md"
                style={{ backgroundColor: colors.primary, color: colors.white }}
              >
                1
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border border-gray-200 bg-white hover:bg-gray-50">
                2
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><FiChevronRight size={20}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProposal;