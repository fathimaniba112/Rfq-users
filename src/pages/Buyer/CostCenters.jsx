import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Plus, Upload, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerCostCenterApp = () => {

  const [isTreeView, setIsTreeView] = useState(true);
  const navigate = useNavigate();

  // Sample data
  const costCenters = [
    { id: 'YAT-CC-09705', name: '2713 Ishaq Villa' },
    { 
      id: 'YAT-CC-10739', 
      name: '2715 UMM AL NASM CHALET', 
      children: [{ id: 'YAT-CC-10773', name: 'C24 2765' }] 
    },
    { id: 'YAT-CC-10474', name: '2719 FERAS SHEHAB VILLA' },
    { id: 'YAT-CC-09729', name: 'ALBUSTAN PALACE' },
    { id: 'YAT-CC-12267', name: 'amana health centre' },
    { id: 'YAT-CC-09704', name: 'C2715 Janabiya' },
    { id: 'YAT-CC-09630', name: 'City Center Tower' },
  ];

  // 🔹 Handle Switch
  const handleSwitch = () => {
    setIsTreeView(!isTreeView);

    // Redirect to dashboard page
    navigate("/switch-costcenter");
  };

  const ActionButtons = () => (
    <div className="flex items-center gap-2 mr-3 text-[#2A2A2A]">
      <Eye size={16} className="cursor-pointer hover:text-[#43624A]" />
      <Edit2 size={16} className="cursor-pointer hover:text-[#43624A]" />
      <Trash2 size={16} className="cursor-pointer hover:text-red-600" />
    </div>
  );

  return (

    <div className="flex min-h-screen bg-[#F5F2EA]">

      {/* Sidebar */}
      <BuyerSettingsSidebar />

      <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans w-full">

        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 border border-gray-100">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">

            <h1 className="text-2xl font-bold text-[#2A2A2A]">
              Cost Centers
            </h1>

            <div className="flex flex-wrap gap-3">

              <button className="text-[#43624A] font-medium text-sm hover:underline">
                Show Deleted/Inactive Items
              </button>

             <button
  onClick={() => navigate("/buyer/add-costcenter")}
  className="flex items-center gap-2 bg-white border-2 border-[#43624A] text-[#43624A] px-4 py-2 rounded-md hover:bg-[#43624A] hover:text-white transition-colors text-sm font-semibold"
>
  <Plus size={18} />
  Add a Cost Center
</button>
              <button
                onClick={() => navigate("/buyer/bulk-costcenter")}
                className="flex items-center gap-2 bg-white border-2 border-[#43624A] text-[#43624A] px-4 py-2 rounded-md hover:bg-[#43624A] hover:text-white transition-colors text-sm font-semibold"
              >
                <Upload size={18} />
                Bulk Upload
              </button>

            </div>
          </div>


          {/* Info and Toggle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">

            {/* Left Text */}
            <div className="lg:col-span-4 text-sm text-gray-600 space-y-4">

              <p>
                Define the cost centers and classifications structure for the goods and services you procure.
              </p>

              <p>
                The products and services you include in your catalog can be mapped to these cost centers for easier clustering and reporting.
              </p>

            </div>


            {/* Right Section */}
            <div className="lg:col-span-8">

              {/* Switch */}
              <div className="flex items-center gap-3 mb-6">

                <label className="relative inline-flex items-center cursor-pointer">

                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isTreeView}
                    onChange={handleSwitch}
                  />

                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full
                  peer peer-checked:after:translate-x-full peer-checked:after:border-white
                  after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                  after:bg-white after:border-gray-300 after:border after:rounded-full
                  after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7A9C83]">
                  </div>

                </label>

                <span className="text-sm font-medium text-[#2A2A2A]">
                  Switch View
                </span>

              </div>


              {/* Tree List */}
              <div className="space-y-3">

                {costCenters.map((item) => (

                  <div key={item.id} className="group">

                    <div className="flex items-center text-sm py-1">

                      <div className="w-6 flex justify-center text-[#7A9C83]">

                        {item.children ? (
                          <ChevronDown size={18} />
                        ) : null}

                      </div>

                      <ActionButtons />

                      <span className="text-[#2A2A2A]">
                        {item.name} -
                      </span>

                      <span className="text-gray-500 ml-1">
                        {item.id}
                      </span>

                    </div>


                    {/* Children */}
                    {item.children && (

                      <div className="ml-14 mt-2 border-l-2 border-gray-100">

                        {item.children.map(child => (

                          <div key={child.id} className="flex items-center text-sm py-1 ml-4">

                            <ActionButtons />

                            <span className="text-[#2A2A2A]">
                              {child.name} -
                            </span>

                            <span className="text-gray-500 ml-1">
                              {child.id}
                            </span>

                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default BuyerCostCenterApp;