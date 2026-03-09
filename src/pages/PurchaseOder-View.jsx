import React, { useState } from 'react'; // Added useState
import { Search, Filter, MessageCircle, ChevronLeft, ChevronRight, Eye } from 'lucide-react'; // Added Eye

const PurchaseOrderVIEW = () => {
  // 1. Initialize the state
  const [showFilters, setShowFilters] = useState(false);

  const stats = [
    { label: 'All', icon: 'list', active: true },
    { label: 'Draft', icon: 'file-text' },
    { label: 'In Review', icon: 'refresh-cw' },
    { label: 'Purchase Order Issued', icon: 'user' },
    { label: 'Accepted', icon: 'check-square' },
    { label: 'Rejected', icon: 'x-square' },
    { label: 'Delivery Pending', icon: 'truck' },
    { label: 'Shipment Received', icon: 'package' },
    { label: 'Invoice Received', icon: 'file-invoice' },
  ];

  const tableData = [
    { po: '19991', rfq: '86581', title: 'Hi paint', supplier: 'MOHAMMAD KHALID ABDULSATTAR...', status: 'Closed: Accepted by supplier', statusColor: 'bg-blue-600', date: '16-Nov-2025', value: 'View' },
    { po: '19990', rfq: '86720', title: 'GEE 30:36 AF Lag Seal Insulation...', supplier: 'GREEN LAND BUILDING MATERIALS...', status: 'Purchase Order Issued', statusColor: 'bg-gray-500', date: '16-Nov-2025', value: 'View' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-6 font-sans text-[#2A2A2A]">
      {/* Status Tabs */}
      <div className="flex flex-wrap gap-0 mb-8 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        {stats.map((tab, index) => (
          <div 
            key={index}
            className={`flex-1 flex flex-col items-center justify-center p-3 border-r border-gray-100 cursor-pointer transition-colors
            ${tab.active ? 'bg-[#7A9C83] text-white' : 'hover:bg-gray-50 text-gray-600'}`}
          >
            <div className="text-xs font-semibold text-center leading-tight uppercase tracking-wider">
              {tab.label}
            </div>
          </div>
        ))}
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`px-6 flex items-center gap-2 font-bold border-l border-gray-200 transition-colors ${
            showFilters ? 'bg-[#43624A] text-white' : 'text-[#43624A] hover:bg-gray-50'
          }`}
        >
          <Filter size={18} /> Advanced Filters
        </button>
      </div>

      {/* Advanced Filters Section */}
      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">Date Range</label>
              <select className="border border-gray-200 rounded-md p-2 bg-white text-gray-400 focus:outline-[#7A9C83]">
                <option value="">&nbsp;</option>
                
<option>Today</option>
<option>Yesterday</option>
<option>Last 30 days</option>
<option>last 90 days</option>
<option>last 180 days</option>
<option>last Calender year</option>
<option>Custom Range</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">User</label>
              <select className="border border-gray-200 rounded-md p-2 bg-white text-gray-400 focus:outline-[#7A9C83]">
                <option>Please Select</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">Cost Center</label>
              <select className="border border-gray-200 rounded-md p-2 bg-white text-gray-400 focus:outline-[#7A9C83]">
                <option>Please Select</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">Supplier</label>
              <select className="border border-gray-200 rounded-md p-2 bg-white text-gray-400 focus:outline-[#7A9C83]">
                <option>Please Select</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                <Eye size={16} /> Show/hide Columns
              </label>
              <select className="border border-gray-200 rounded-md p-2 bg-white text-[#2A2A2A] font-medium focus:outline-[#7A9C83]">
                <option>Please Select</option>
                <option>PO#</option>
                <option>Items</option>
                 <option>Supplier</option>
                    <option>Created by</option>
                <option>Status</option>
                <option>Created on</option>
               </select>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded px-2 py-1 bg-white">
            <option>10</option>
          </select>
          <span>entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Search:</span>
          <input type="text" className="border rounded px-3 py-1 bg-white focus:outline-[#7A9C83]" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-t-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-100 text-gray-500 text-sm uppercase">
              <th className="p-4 font-semibold">PO#</th>
              <th className="p-4 font-semibold">RFQ#</th>
              <th className="p-4 font-semibold">RFQ Title</th>
              <th className="p-4 font-semibold">Supplier</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Created On</th>
              <th className="p-4 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-600">{row.po}</td>
                <td className="p-4 text-gray-600">{row.rfq}</td>
                <td className="p-4 font-medium">{row.title}</td>
                <td className="p-4 text-gray-600 max-w-[200px] truncate">{row.supplier}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${row.statusColor}`}></span>
                    <span className={row.statusColor.includes('blue') ? 'text-blue-600 font-semibold' : 'text-gray-600'}>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-gray-500">{row.date}</td>
                <td className="p-4 text-blue-600 cursor-pointer font-bold hover:underline">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="bg-white p-4 rounded-b-lg border-t flex justify-between items-center text-sm text-gray-600">
        <div>Showing 1 to 10 of 234 entries</div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded bg-gray-100"><ChevronLeft size={16}/></button>
          <button className="px-3 py-1 rounded bg-[#7A9C83] text-white">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
          <span>...</span>
          <button className="px-3 py-1 rounded hover:bg-gray-100">24</button>
          <button className="p-2 rounded bg-gray-100"><ChevronRight size={16}/></button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default PurchaseOrderVIEW;