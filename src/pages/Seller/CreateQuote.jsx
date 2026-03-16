import React from 'react';

const CreateQuote = () => {
  // Mock data based on your screenshots
  const data = [
    { rfq: '87308', buyer: 'CINQO CONTRACTING W.L.L.', requisition: 'CC-146 Supply & Installation of Plumbing works', closingDate: '19-Feb-2026 6:30 PM', requiredBy: '22-Feb-2026 11:30 AM', lastUpdate: '19-Feb-2026 1:35 PM', status: 'RFQ Expired' },
    { rfq: '87391', buyer: 'CINQO CONTRACTING W.L.L.', requisition: 'CC-146 Supply & Installation of Electrical works', closingDate: '10-Mar-2026 6:33 PM', requiredBy: '10-Mar-2026 10:04 PM', lastUpdate: '19-Feb-2026 6:23 PM', status: 'RFQ Expired' },
    { rfq: '87624', buyer: 'CINQO CONTRACTING W.L.L.', requisition: 'CC-147 Supply & Installation of Electrical Works', closingDate: '20-Feb-2026 7:15 PM', requiredBy: '20-Feb-2026 9:06 PM', lastUpdate: '17-Feb-2026 5:42 PM', status: 'RFQ Expired' },
    { rfq: '33037', buyer: 'ZAYANI MOTORS CO W.L.L', requisition: 'REQUIREMENT OF 20 TON PACKAGE AC INCLUDING INSTALALTION', closingDate: '08-Aug-2024 2:50 PM', requiredBy: '09-Aug-2024 2:49 PM', lastUpdate: '07-Aug-2024 10:13 AM', status: 'RFQ Expired' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        
        {/* Header Tabs/Filters */}
        <div className="flex flex-wrap gap-2 p-4 border-b border-gray-100 bg-white">
          <button className="px-4 py-2 bg-[#43624A] text-white rounded-md text-sm font-medium flex items-center gap-2">
            <span>☰</span> All
          </button>
          <button className="px-4 py-2 text-[#43624A] border border-[#7A9C83] rounded-md text-sm font-medium hover:bg-[#F5F2EA] transition-colors">
            Pending
          </button>
          <button className="px-4 py-2 text-[#43624A] border border-[#7A9C83] rounded-md text-sm font-medium hover:bg-[#F5F2EA] transition-colors">
            Participating
          </button>
          <button className="px-4 py-2 text-[#43624A] border border-[#7A9C83] rounded-md text-sm font-medium hover:bg-[#F5F2EA] transition-colors">
            Not Participating
          </button>
          <button className="px-4 py-2 text-[#43624A] border border-[#7A9C83] rounded-md text-sm font-medium hover:bg-[#F5F2EA] transition-colors">
            RFQ Expired
          </button>
        </div>

        {/* Search and Entries Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
          <div className="flex items-center gap-2 text-sm">
            Show 
            <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#43624A]">
              <option>50</option>
              <option>100</option>
            </select> 
            entries
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-sm">Search:</span>
            <input type="text" className="border border-gray-300 rounded px-3 py-1 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-[#43624A]" />
          </div>
        </div>

        {/* Table Container - Responsive Horizontal Scroll */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-y border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-600">
                <th className="px-4 py-3 font-semibold">RFQ#</th>
                <th className="px-4 py-3 font-semibold">Buyer</th>
                <th className="px-4 py-3 font-semibold">Requisition</th>
                <th className="px-4 py-3 font-semibold text-nowrap">Closing Date</th>
                <th className="px-4 py-3 font-semibold text-nowrap">Required By</th>
                <th className="px-4 py-3 font-semibold text-nowrap">Last Update</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F5F2EA]/50 transition-colors">
                  <td className="px-4 py-4 text-[#43624A] font-medium">{item.rfq}</td>
                  <td className="px-4 py-4 max-w-[200px]">{item.buyer}</td>
                  <td className="px-4 py-4 max-w-[300px] leading-snug">{item.requisition}</td>
                  <td className="px-4 py-4 text-gray-500">{item.closingDate}</td>
                  <td className="px-4 py-4 text-gray-500">{item.requiredBy}</td>
                  <td className="px-4 py-4 text-gray-500">{item.lastUpdate}</td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Showing 1 to {data.length} of {data.length} entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-50 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 rounded bg-[#43624A] text-white text-sm">1</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuote;