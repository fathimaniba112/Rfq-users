import React from "react";
import SellerHomeNavbar from "./SellerHomeNavbar";
import { Search, RotateCcw } from "lucide-react";
 const SellerHome = () => {

  const opportunities = [
    {
      id: "53659",
      details: "NASS CORPORATION - SUPPLY OF ELECTRICAL INSTRUMENTS - CLAMP METER",
      company: "NASS ELECTRICAL CONTRACTING CO. (W.L.L)",
      status: "Open",
      published: "16-Mar-2026",
      closing: "18-Mar-2026",
    },
    {
      id: "53642",
      details: "NASS CORPORATION - SUPPLY OF WATERPROOF TUBE LIGHT FITTING",
      company: "NASS INDUSTRIAL SERVICES",
      status: "Open",
      published: "16-Mar-2026",
      closing: "18-Mar-2026",
    },
    {
      id: "53671",
      details: "NASS CORPORATION - SUPPLY OF GI ACCESSORIES",
      company: "NASS ELECTRICAL CONTRACTING CO. (W.L.L)",
      status: "Open",
      published: "16-Mar-2026",
      closing: "18-Mar-2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EA] flex flex-col">

      {/* NAVBAR */}
      <SellerHomeNavbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-20 p-4 md:p-8 max-w-[1600px] mx-auto w-full">

        {/* Statistics Cards */}
        <div className="flex gap-4 mb-6">
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col w-32">
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              # of RFX
            </span>
            <span className="text-xl font-bold text-[#43624A] bg-[#7A9C83]/10 w-fit px-3 py-1 rounded mt-2">
              0
            </span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col w-48">
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              Total Credits
            </span>

            <div className="flex items-center gap-2 mt-2">
              <div className="h-9 w-20 bg-gray-50 rounded border border-gray-100 flex items-center justify-center font-bold text-[#2A2A2A]">
                0
              </div>

              <button className="bg-[#43624A] text-white text-xs px-4 py-2 rounded font-bold hover:bg-[#2A2A2A] transition-colors">
                Purchase
              </button>
            </div>
          </div>

        </div>

        {/* FILTER SECTION */}

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
              Status
            </label>

            <select className="w-full bg-[#F5F2EA] border-none rounded-md p-2 text-sm focus:ring-2 ring-[#7A9C83]">
              <option>Open</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
              Procurement Classification
            </label>

            <input
              className="w-full bg-[#F5F2EA] border-none rounded-md p-2 text-sm"
              placeholder="No option(s) selected"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
              From
            </label>

            <input
              type="date"
              className="w-full bg-[#F5F2EA] border-none rounded-md p-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
              To
            </label>

            <input
              type="date"
              className="w-full bg-[#F5F2EA] border-none rounded-md p-2 text-sm"
            />
          </div>

          <div className="flex items-end gap-2">

            <button className="bg-[#43624A] text-white p-2.5 rounded-md shadow-lg shadow-[#43624A]/20 hover:bg-[#2A2A2A] transition-colors">
              <Search size={18} />
            </button>

            <button className="bg-white border border-[#43624A] text-[#43624A] p-2.5 rounded-md hover:bg-[#F5F2EA]">
              <RotateCcw size={18} />
            </button>

          </div>

        </div>

        {/* TABLE SECTION */}

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="p-5 border-b flex justify-between items-center">

            <h2 className="text-xl font-bold flex items-center gap-2 text-[#2A2A2A]">
              Available Opportunities
            </h2>

            <div className="relative">
              <input
                className="bg-[#F5F2EA] border-none rounded-md pl-10 pr-4 py-2 text-sm w-72 focus:ring-2 ring-[#7A9C83]"
                placeholder="Enter Keyword(s)"
              />

              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-[#F5F2EA]/50 text-[11px] uppercase font-bold text-gray-500 border-b">
                <tr>
                  <th className="p-4">RFX #</th>
                  <th className="p-4">Opportunity Details</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Published On</th>
                  <th className="p-4">Closing Date</th>
                  <th className="p-4 text-center">🛒</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                {opportunities.map((item, idx) => (

                  <tr
                    key={idx}
                    className="hover:bg-[#F5F2EA]/30 transition-colors group"
                  >

                    <td className="p-4 text-gray-400 font-medium">
                      {item.id}
                    </td>

                    <td className="p-4">
                      <p className="font-bold text-[#2A2A2A] text-sm group-hover:text-[#43624A] transition-colors uppercase">
                        {item.details}
                      </p>

                      <p className="text-[11px] text-gray-400 mt-0.5">
                        by {item.company}
                      </p>
                    </td>

                    <td className="p-4">
                      <span className="text-[#43624A] font-bold text-sm bg-[#7A9C83]/10 px-2 py-0.5 rounded">
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4 text-[11px] text-gray-600 font-medium">
                      {item.published}
                    </td>

                    <td className="p-4 text-[11px] text-gray-600 font-medium">
                      {item.closing}
                    </td>

                    <td className="p-4 text-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#43624A] focus:ring-[#43624A]"
                      />
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>
 
    </div>
  );
};

export default SellerHome;