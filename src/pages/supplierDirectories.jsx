import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown, RotateCcw, Eye, Trash2, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
 import SettingsSidebar from "./sidebar-settings";

const SupplierDirectory = () => {
  const navigate = useNavigate();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const suppliers = [
    { id: 1, name: '.HYPEWAVE MEDIA', cr: '134150-3', vat: 'N/A', country: 'Bahrain', quotations: 0, contact: 'hype@media.com', initial: 'H', color: 'bg-purple-200' },
    { id: 2, name: 'ARVENTA TECHNIS W.L.L', cr: '191373-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '+973 33445566', initial: 'A', color: 'bg-blue-500' },
    { id: 3, name: 'BRONZE FIX SPARE PARTS & REPAIR', cr: '22755-4', vat: '000000000000000', country: 'Bahrain', quotations: 0, contact: 'info@bronzefix.com', initial: 'B', color: 'bg-pink-500' },
    { id: 4, name: 'CENTURY TRADING HOUSE CO W.L.L', cr: '58747-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '-', initial: 'C', color: 'bg-teal-500' },
  ];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
      <SettingsSidebar />
    
    <div className="min-h-screen bg-[#F5F2EA] p-8 font-sans text-[#2A2A2A]">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#2A2A2A]">Supplier Directory</h1>
          <p className="text-gray-600 mt-1">Manage your supplier relationships, contacts, and vetting status.</p>
        </div>
        <button 
          onClick={() => navigate('/add-supplier')} 
          className="bg-[#43624A] hover:bg-[#354d3a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm font-medium"
        >
          <Plus size={18} /> Add Supplier
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Tabs & Advanced Filters Toggle */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-8 border-b md:border-none">
              <button className="pb-2 border-b-2 border-[#43624A] text-[#43624A] font-semibold">All Suppliers</button>
              <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors">My Suppliers</button>
              <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors">Deleted Suppliers</button>
            </div>
            
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`border px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                showAdvanced ? 'bg-[#43624A] text-white border-[#43624A]' : 'border-[#7A9C83] text-[#43624A] hover:bg-gray-50'
              }`}
            >
              <Filter size={18} /> Advanced Filters
            </button>
          </div>

          {/* Advanced Filters Section */}
          {showAdvanced && (
            <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col md:flex-row items-end gap-4">
                <div className="flex-1 space-y-2 w-full">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    Procurement Classification <Search size={14} className="text-gray-400" />
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                      <option>No options(s) selected</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={16} />
                  </div>
                </div>

                <div className="flex gap-2 pb-0.5">
                  <button className="p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <Search size={20} />
                  </button>
                  <button className="p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <RotateCcw size={20} />
                  </button>
                </div>

                <div className="flex-1 space-y-2 w-full">
                  <label className="text-sm font-semibold text-gray-700">Vetting Status</label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                      <option>select vetting status</option>
                      <option>Blacklist</option>
                      <option>Watchlist</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={16} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="text-gray-500 text-xs uppercase tracking-wider border-b bg-gray-50/50">
                <th className="px-6 py-4 font-bold w-16">/</th>
                <th className="px-6 py-4 font-bold">Name</th>
                <th className="px-6 py-4 font-bold">Country</th>
                <th className="px-6 py-4 font-bold text-center"># Of Quotations</th>
                <th className="px-6 py-4 font-bold">Contact</th> {/* RESTORED COLUMN */}
                <th className="px-6 py-4 font-bold">Vetting Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {suppliers.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-5">
                    <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm`}>
                      {s.initial}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-sm text-[#2A2A2A]">{s.name}</div>
                    <div className="text-[11px] text-gray-500">CR: {s.cr}</div>
                    <div className="text-[11px] text-gray-500">VAT: {s.vat}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-3 bg-[#BE1E2D] block rounded-[1px]"></span> {s.country}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-xs">
                      {s.quotations}
                    </span>
                  </td>
                  {/* RESTORED CONTACT DATA */}
                  <td className="px-6 py-5">
                    <div className="text-xs text-gray-600 truncate max-w-[150px]">
                      {s.contact}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="relative inline-block w-full max-w-[150px]">
                      <select className="appearance-none w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none bg-white pr-8 focus:border-[#7A9C83]">
                        <option value="">Select Status</option>
                        <option>Blacklist</option>
                        <option>Watchlist</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-2.5 top-2.5 text-gray-400 pointer-events-none" />
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => navigate(`/view-supplier/${s.id}`)} className="p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer/Pagination */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 font-medium">Showing 1 to 10 of 3,185 entries</span>
          <div className="flex items-center">
            <button className="px-4 py-2 border rounded-l-xl bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100">Previous</button>
            {[1, 2, 3, 4, 5].map(page => (
              <button key={page} className={`px-4 py-2 border-y border-r text-xs font-bold ${page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'text-blue-600 hover:bg-gray-50'}`}>
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border border-l-0 rounded-r-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700">Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupplierDirectory;