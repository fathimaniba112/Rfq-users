import React, { useState } from 'react';
import SettingsSidebar from "./sidebar-settings";

const QuestionnaireResponse= () => {
  // Color Palette from your image
  const colors = {
    dark: '#2A2A2A',
    deepGreen: '#43624A',
    sage: '#7A9C83',
    offWhite: '#F5F2EA',
    accentBlue: '#4475E1' // From the title image
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
                  {/* Sidebar - Your existing component */}
                  <SettingsSidebar />
<div className="flex-1 overflow-y-auto p-6 md:p-8" style={{ backgroundColor: colors.offWhite }}>      <div className="max-w-6xl mx-auto">
        
        {/* Heading Section */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: colors.accentBlue }}>
          Questionnaire Responses
        </h1>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Controls Header */}
          <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Show</span>
              <select className="border rounded px-2 py-1 focus:outline-none focus:ring-2" style={{ borderColor: colors.sage }}>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Search:</label>
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: colors.sage }}
              />
            </div>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100" style={{ color: colors.dark }}>
                  <th className="px-4 py-3 font-semibold text-sm cursor-pointer hover:bg-gray-50">Id# ↕</th>
                  <th className="px-4 py-3 font-semibold text-sm cursor-pointer hover:bg-gray-50">Sent By ↕</th>
                  <th className="px-4 py-3 font-semibold text-sm cursor-pointer hover:bg-gray-50">Title ↕</th>
                  <th className="px-4 py-3 font-semibold text-sm cursor-pointer hover:bg-gray-50">Received On <span className="text-blue-500">▼</span></th>
                  <th className="px-4 py-3 font-semibold text-sm cursor-pointer hover:bg-gray-50">Version ↕</th>
                  <th className="px-4 py-3 font-semibold text-sm cursor-pointer hover:bg-gray-50">Status ↕</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td colSpan="6" className="px-4 py-10 text-center text-gray-500 font-medium">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Pagination */}
          <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Showing 0 to 0 of 0 entries
            </p>
            <div className="flex gap-1">
              <button 
                disabled 
                className="px-4 py-2 text-sm font-medium rounded-l-md bg-opacity-50 text-white cursor-not-allowed"
                style={{ backgroundColor: '#94a3b8' }}
              >
                Previous
              </button>
              <button 
                disabled 
                className="px-4 py-2 text-sm font-medium rounded-r-md bg-opacity-50 text-white cursor-not-allowed"
                style={{ backgroundColor: '#94a3b8' }}
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default QuestionnaireResponse;