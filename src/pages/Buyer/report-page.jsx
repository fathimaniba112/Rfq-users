import React from 'react';

const BuyerReportsDashboard = () => {
  // Color Palette mapping based on your image:
  // #2A2A2A - Dark Charcoal (Text/Accents)
  // #43624A - Deep Forest Green (Primary/Headers)
  // #7A9C83 - Sage Green (Secondary/Buttons)
  // #F5F2EA - Off-White (Background)

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-[#2A2A2A]">Reports</h1>
        </div>

        {/* Controls Section */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select className="border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-[#7A9C83] outline-none">
              <option>5</option>
              <option>10</option>
                <option>25</option>
                  <option>50</option>
                    <option>100</option>
            </select>
            <span>entries</span>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="search">Search:</label>
            <input 
              id="search"
              type="text" 
              className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-[#43624A] outline-none"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#43624A] text-white">
                <th className="p-4 font-semibold uppercase text-sm tracking-wider">#</th>
                <th className="p-4 font-semibold uppercase text-sm tracking-wider cursor-pointer hover:bg-[#36503c]">
                  Key <span className="text-xs ml-1">▲</span>
                </th>
                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Name</th>
                <th className="p-4 font-semibold uppercase text-sm tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td colSpan="4" className="p-12 text-center text-gray-500 italic">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination Section */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</p>
          <div className="flex gap-1">
            <button className="px-4 py-2 bg-[#7A9C83] text-white rounded-l-md opacity-50 cursor-not-allowed font-medium">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#7A9C83] text-white rounded-r-md opacity-50 cursor-not-allowed font-medium border-l border-[#43624A]/20">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button (as seen in your screenshot) */}
      <div className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </div>
  );
};

export default BuyerReportsDashboard;