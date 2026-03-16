import React from 'react';
import { ChevronsUpDown, ChevronDown } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const ReceivedQuestions = () => {
  const columns = ["Id#", "Sent By", "Title", "Received On", "Version", "Status"];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-[#7A9C83]/20 p-6">
        
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span>Show</span>
            <select className="border border-[#7A9C83] rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#43624A] bg-transparent">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
            <span>Search:</span>
            <input 
              type="text" 
              className="border border-[#7A9C83] rounded px-3 py-1 flex-1 sm:w-64 outline-none focus:ring-1 focus:ring-[#43624A]" 
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#2A2A2A]/20">
                {columns.map((col, idx) => (
                  <th key={idx} className="px-4 py-3 text-gray-500 font-medium group cursor-pointer hover:text-[#43624A]">
                    <div className="flex items-center justify-between">
                      {col}
                      {col === "Received On" ? (
                        <ChevronDown size={14} className="text-[#43624A]" />
                      ) : (
                        <ChevronsUpDown size={14} className="text-gray-300 group-hover:text-[#7A9C83]" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2A2A2A]/20">
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500 italic">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-[#2A2A2A]">
            Showing 0 to 0 of 0 entries
          </p>
          
          <div className="flex items-center gap-2">
            <button className="px-5 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">
              Previous
            </button>
            <button className="px-5 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default ReceivedQuestions;