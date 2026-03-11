import React from 'react';
import { Plus, Upload, Search, Eye, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SettingsSidebar from "./sidebar-settings";

const CostCenterDashboard = () => {

  const navigate = useNavigate();

  // Switch handler
  const handleSwitch = () => {
    navigate("/cost-centers");
  };

  // Table data
  const data = [
    { code: 'DEFAULT-0001', nature: 'General', name: 'Human Resources', parent: '-', type: 'Both' },
    { code: 'DEFAULT-0002', nature: 'General', name: 'Marketing', parent: '-', type: 'Both' },
    { code: 'DEFAULT-0003', nature: 'General', name: 'IT', parent: '-', type: 'Both' },
    { code: 'DEFAULT-0004', nature: 'General', name: 'Maintenance', parent: '-', type: 'Both' },
    { code: 'YAT-CC-04239', nature: 'Project', name: 'general', parent: '-', type: 'Both' },
    { code: 'YAT-CC-MB01', nature: 'Project', name: 'MARINA BAY PROJECT', parent: '-', type: 'Both' },
  ];

  return (

    <div className="flex min-h-screen bg-[#F5F2EA]">

      <SettingsSidebar />

      <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A] w-full">

        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-gray-100">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div>

                <h1 className="text-2xl font-semibold text-[#2A2A2A]">
                  Cost Centers
                </h1>

                <p className="text-sm text-gray-500 mt-2 max-w-xl">
                  Define the cost centers and classifications structure for the goods and services you procure.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <button className="text-sm font-medium text-[#43624A] hover:underline px-2">
                  Show Deleted/Inactive Items
                </button>

                <button className="flex items-center gap-2 bg-white border border-[#43624A] text-[#43624A] px-4 py-2 rounded-md hover:bg-[#F5F2EA] transition-colors">
                  <Plus size={18} /> Add a Cost Center
                </button>

                <button className="flex items-center gap-2 bg-white border border-[#43624A] text-[#43624A] px-4 py-2 rounded-md hover:bg-[#F5F2EA] transition-colors">
                  <Upload size={18} /> Bulk Upload
                </button>

              </div>

            </div>

          </div>


          {/* Toolbar */}
          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

            <div className="flex items-center gap-4">

              <div className="flex items-center gap-2">

                <span className="text-sm">Show</span>

                <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9C83]">
                  <option>50</option>
                  <option>100</option>
                </select>

                <span className="text-sm">entries</span>

              </div>


              {/* Switch */}
              <div className="flex items-center gap-2 ml-4">

                <span className="text-sm font-medium">
                  Switch View
                </span>

                <div
                  onClick={handleSwitch}
                  className="w-10 h-5 bg-[#43624A] rounded-full relative cursor-pointer"
                >
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>

              </div>

            </div>


            {/* Search */}
            <div className="relative">

              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Search size={16} />
              </span>

              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-[#7A9C83]"
              />

            </div>

          </div>


          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full text-left border-collapse">

              <thead>

                <tr className="border-y border-gray-200 bg-gray-50 text-gray-600 text-sm uppercase">

                  <th className="px-6 py-3 font-semibold">
                    Code <ChevronDown size={14} className="inline ml-1"/>
                  </th>

                  <th className="px-6 py-3 font-semibold">Nature</th>

                  <th className="px-6 py-3 font-semibold">Name</th>

                  <th className="px-6 py-3 font-semibold">Parent</th>

                  <th className="px-6 py-3 font-semibold">Type</th>

                  <th className="px-6 py-3 font-semibold text-center">
                    Action
                  </th>

                </tr>

              </thead>


              <tbody className="divide-y divide-gray-100">

                {data.map((item, index) => (

                  <tr key={index} className="hover:bg-[#F5F2EA]/50 transition-colors text-sm">

                    <td className="px-6 py-4 text-[#43624A] font-medium">
                      {item.code}
                    </td>

                    <td className="px-6 py-4">
                      {item.nature}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {item.name}
                    </td>

                    <td className="px-6 py-4 text-gray-400">
                      {item.parent}
                    </td>

                    <td className="px-6 py-4">
                      {item.type}
                    </td>

                    <td className="px-6 py-4 text-center">

                      <button className="text-gray-400 hover:text-[#43624A]">
                        <Eye size={18} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Pagination */}
          <div className="p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-500">
              Showing 1 to 6 of 31 entries
            </p>

            <div className="flex items-center gap-1">

              <button className="px-3 py-1 border rounded text-sm disabled:opacity-50" disabled>
                Previous
              </button>

              <button className="px-3 py-1 bg-[#7A9C83] text-white rounded text-sm">
                1
              </button>

              <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
                Next
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default CostCenterDashboard;