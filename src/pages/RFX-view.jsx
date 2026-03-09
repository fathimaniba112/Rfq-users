import React from 'react';
import { Search, ListFilter, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const RFQView = () => {
  const tabs = [
    { name: 'ALL', active: true },
    { name: 'DRAFT' },
    { name: 'IN REVIEW' },
    { name: 'PURCHASE ORDER ISSUED' },
    { name: 'ACCEPTED' },
    { name: 'REJECTED' },
    { name: 'DELIVERY PENDING' },
    { name: 'SHIPMENT RECEIVED' },
    { name: 'INVOICE RECEIVED' },
  ];

  const tableData = [
    { po: '19991', rfq: '86581', title: 'Hi paint', supplier: 'MOHAMMAD KHALID ABDULSAT...', status: 'Closed: Accepted by supplier', date: '16-Nov-2025', statusColor: 'bg-blue-600' },
    { po: '19990', rfq: '86720', title: 'GEE 30:36 AF Lag Seal Insulation...', supplier: 'GREEN LAND BUILDING MATERIA...', status: 'Purchase Order Issued', date: '16-Nov-2025', statusColor: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-8 font-sans text-[#2A2A2A]">
      {/* Tab Navigation */}
      <div className="flex bg-white rounded-t-lg border border-gray-200 overflow-hidden shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex-1 py-4 text-[11px] font-bold tracking-wider transition-colors border-r last:border-r-0 border-gray-200 ${
              tab.active ? 'bg-[#7A9C83] text-white' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            {tab.name}
          </button>
        ))}
        <button className="flex items-center gap-2 px-6 py-4 text-[#43624A] font-bold text-sm border-l border-gray-200">
          <ListFilter size={18} />
          Advanced Filters
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-white border-x border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <span>Show</span>
          <select className="border border-gray-300 rounded px-2 py-1 outline-none">
            <option>10</option>
          </select>
          <span>entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Search:</span>
          <input type="text" className="border border-gray-300 rounded px-3 py-1 w-64 outline-none focus:ring-1 focus:ring-[#7A9C83]" />
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-white border border-gray-200 shadow-md rounded-b-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-[12px] font-bold text-gray-400 uppercase">
              <th className="px-6 py-4">PO#</th>
              <th className="px-6 py-4">RFQ#</th>
              <th className="px-6 py-4">RFQ Title</th>
              <th className="px-6 py-4">Supplier</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created On</th>
              <th className="px-6 py-4">Value</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {tableData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-500">{row.po}</td>
                <td className="px-6 py-4 text-gray-500">{row.rfq}</td>
                <td className="px-6 py-4 font-bold">{row.title}</td>
                <td className="px-6 py-4 text-gray-500">{row.supplier}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${row.statusColor}`}></span>
                    <span className={row.status.includes('Closed') ? 'text-blue-600 font-medium' : 'text-gray-600'}>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{row.date}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 font-bold hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 10 of 234 entries</span>
          <div className="flex gap-1">
            <button className="p-2 border rounded hover:bg-gray-100"><ChevronLeft size={16}/></button>
            <button className="px-3 py-1 bg-[#7A9C83] text-white rounded">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100 text-xs">...</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">24</button>
            <button className="p-2 border rounded hover:bg-gray-100"><ChevronRight size={16}/></button>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default RFQView;

RFQView