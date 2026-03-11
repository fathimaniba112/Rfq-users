import React from 'react';
import { Search, Plus, ChevronUp, ChevronDown } from 'lucide-react';
import SettingsSidebar from "./sidebar-settings";
import { useNavigate } from "react-router-dom";
const SupplierDashboard = () => {
  const navigate = useNavigate();
  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
              {/* Sidebar - Your existing component */}
              <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-2xl font-bold border-b-2 border-[#43624A] pb-1">
            Supplier Questionnaire
          </h1>
          <button
  onClick={() => navigate("/create-questionnaire")}
  className="flex items-center gap-2 bg-white border-2 border-[#43624A] text-[#43624A] hover:bg-[#43624A] hover:text-white transition-colors px-4 py-2 rounded-md font-semibold"
>
  <Plus size={18} />
  Create a New Questionnaire
</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-3 text-sm leading-relaxed text-gray-600">
            <p className="mb-4">
              The <span className="font-semibold text-[#2A2A2A]">Supplier Questionnaire</span> allows buyers to create and send customized questionnaires to suppliers.
            </p>
            <p>
              These questionnaires help gather essential information, assess compliance, and evaluate supplier capabilities. Buyers can use them to streamline supplier onboarding, manage risk, and ensure suppliers meet business requirements efficiently.
            </p>
          </div>

          {/* Right Column: Table Section */}
          <div className="lg:col-span-9">
            
            {/* Table Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#7A9C83]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>entries</span>
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span>Search:</span>
                <input 
                  type="text" 
                  className="border border-gray-300 rounded px-3 py-1 flex-grow sm:w-64 focus:outline-none focus:ring-1 focus:ring-[#7A9C83]"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border-t border-b border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-gray-700">
                    <th className="py-3 px-4 flex items-center gap-1 cursor-pointer hover:bg-gray-50">
                      Id# <ChevronUp size={14} className="text-[#43624A]" />
                    </th>
                    <th className="py-3 px-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-1">
                        Title <div className="flex flex-col"><ChevronUp size={10}/><ChevronDown size={10}/></div>
                      </div>
                    </th>
                    <th className="py-3 px-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-1">
                        Created By <div className="flex flex-col"><ChevronUp size={10}/><ChevronDown size={10}/></div>
                      </div>
                    </th>
                    <th className="py-3 px-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-1">
                        Created On <div className="flex flex-col"><ChevronUp size={10}/><ChevronDown size={10}/></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4" className="py-10 text-center text-gray-500 italic">
                      No data available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
              <p className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</p>
              <div className="flex">
                <button className="px-4 py-2 bg-[#7A9C83] text-white rounded-l-md opacity-50 cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#7A9C83] text-white rounded-r-md opacity-50 cursor-not-allowed border-l border-[#43624A]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupplierDashboard;