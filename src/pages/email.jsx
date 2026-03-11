import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronUp, X, Maximize2 } from 'lucide-react';
import SettingsSidebar from "./sidebar-settings";

// --- Modal Component ---
const CostCenterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const projects = [
    "2713 Ishaq Villa",
    "2715 UMM AL NASM CHALET",
    "2719 FERAS SHEHAB VILLA",
    "ALBUSTAN PALACE",
    "amana health centre"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 pb-6">
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full border border-gray-200 rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-[#43624A]/20"
            />
            <Maximize2 size={16} className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>

          <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="mb-4">
              <h3 className="text-gray-500 font-semibold text-sm mb-2 uppercase tracking-wider">General</h3>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#43624A]" />
                <span className="text-[#2A2A2A] group-hover:text-[#43624A]">Human Resources</span>
              </label>
            </div>

            <div>
              <h3 className="text-gray-500 font-semibold text-sm mb-2 uppercase tracking-wider">Project</h3>
              <div className="space-y-3 pl-2">
                {projects.map((project, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    {idx === 1 && <ChevronDown size={14} className="text-gray-400 -ml-5" />}
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#43624A]" />
                    <span className="text-[#2A2A2A] group-hover:text-[#43624A]">{project}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-4 border-t border-gray-100 bg-gray-50/50">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-[#43624A] text-[#43624A] rounded hover:bg-[#F5F2EA] transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-8 py-2 bg-[#43624A] text-white rounded hover:bg-[#2A2A2A] transition-colors shadow-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const EmailSubscription = () => {
  const [entries, setEntries] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const subscriptionData = [
    "Purchase Requisition for Acceptance",
    "Purchase Requisition for Amendment",
    "Purchase Requisition is Accepted",
    "RFX requires Approval to be published to marketplace",
    "Quotation is Submitted by Supplier",
    "Quotation > Counter offer response is submitted by Supplier",
    "Quotation > Counter offer is Accepted by Supplier",
    "Quotation Accepted and requires Purchase Order to be created",
    "Purchase Order requires Approval",
    "Purchase Order is Declined by Supplier",
    "Purchase Order is Accepted by Supplier",
    "Delivery Note is Issued by Supplier",
    "Invoice is Submitted by Supplier",
    "Payment is received by Supplier",
    "New Message Received"
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      <SettingsSidebar />
      
      <div className="flex-1 p-4 md:p-8 font-sans text-[#2A2A2A]">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden p-6 border border-gray-100">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#2A2A2A]">Email Subscription</h1>
              <p className="text-sm text-gray-500 mt-1">Select cost centers to subscribe to email</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select 
                  value={entries}
                  onChange={(e) => setEntries(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-[#43624A] outline-none"
                >
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span>entries</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span>Search:</span>
                <input 
                  type="text" 
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-[#43624A] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="p-3 w-12 text-center">
                    <input type="checkbox" className="w-4 h-4 accent-[#43624A]" defaultChecked />
                  </th>
                  <th className="p-3 font-semibold flex items-center gap-1 cursor-pointer hover:text-[#7A9C83]">
                    Email <ChevronDown size={16} />
                  </th>
                  <th className="p-3 font-semibold text-right">
                    <div className="flex items-center justify-end gap-4">
                      <input type="checkbox" className="w-4 h-4 accent-[#43624A]" />
                      <span className="flex items-center gap-1 cursor-pointer hover:text-[#7A9C83]">
                        Cost Center <ChevronUp size={16} className="text-gray-300" />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscriptionData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-[#F5F2EA]/40 transition-colors">
                    <td className="p-3 text-center">
                      <input type="checkbox" className="w-4 h-4 accent-[#43624A]" defaultChecked />
                    </td>
                    <td className="p-3 text-sm md:text-base text-gray-700">{item}</td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-3 text-gray-600">
                        <span className="text-sm font-medium">32/27</span>
                        {/* THE ICON CLICK TO OPEN MODAL */}
                        <button 
                          onClick={() => setIsModalOpen(true)}
                          className="p-1 hover:bg-[#7A9C83] hover:text-white rounded-full transition-all active:scale-90"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Section */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-600">Showing 1 to 15 of 15 entries</p>
            <div className="flex items-center gap-1">
              {['First', 'Previous', '1', 'Next', 'Last'].map((btn) => (
                <button 
                  key={btn}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    btn === '1' ? 'bg-[#43624A] text-white' : 'bg-gray-100 hover:bg-[#7A9C83] hover:text-white'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-[#43624A] hover:bg-[#2A2A2A] text-white px-8 py-2 rounded shadow-md transition-all active:scale-95">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Modal Integration */}
      <CostCenterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default EmailSubscription;