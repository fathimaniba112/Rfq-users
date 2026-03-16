import React from 'react';
import { RefreshCw, Upload, ChevronDown } from 'lucide-react';
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerAddCostCenter = () => {
  // Color Palette mapping
  const colors = {
    dark: '#2A2A2A',
    forest: '#43624A',
    sage: '#7A9C83',
    cream: '#F5F2EA',
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
          <BuyerSettingsSidebar />
    <div className="min-h-screen p-4 md:p-8 flex justify-center items-start font-sans" style={{ backgroundColor: colors.cream }}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl overflow-hidden border border-gray-100">
        <div className="p-6 md:p-10">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Info Text */}
            <div className="lg:w-1/3 space-y-6">
              <h1 className="text-2xl font-bold" style={{ color: colors.dark }}>Add a Cost Center</h1>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <p>Define the cost centers and classifications structure for the goods and services you procure.</p>
                <p>The products and services you include in your catalog of pre-approved, routine procurement items can be mapped to these cost centers for easier clustering, reporting, and search.</p>
                <p>You can also map your suppliers against these cost centers to make it easier to find the right supplier to requisition.</p>
              </div>
            </div>

            {/* Right Column: Form Fields */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Cost Center Code */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Cost Center Code</label>
                  <div className="relative flex">
                    <input 
                      type="text" 
                      defaultValue="YAT-CC-17040"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-l-lg focus:ring-2 outline-none transition-all"
                      style={{ focusRingColor: colors.sage }}
                    />
                    <button className="px-4 bg-gray-100 border border-l-0 border-gray-200 rounded-r-lg hover:bg-gray-200 transition-colors">
                      <RefreshCw size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Nature */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Nature <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 outline-none transition-all pr-10">
                      <option>Please Select</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Cost Center Name */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Cost Center Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 outline-none transition-all"
                  />
                </div>

                {/* Parent Cost Center */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Parent Cost Center Name</label>
                  <div className="relative">
                    <select className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 outline-none transition-all pr-10">
                      <option>Please select</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Cost Center Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Cost Center Type</label>
                  <div className="relative">
                    <select className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 outline-none transition-all pr-10">
                      <option>Please Select</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Budget</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 outline-none transition-all"
                  />
                </div>

                {/* Image Upload Area */}
                <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-700">Cost Center Image</label>
                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors bg-gray-50 group">
                      <div className="p-3 rounded-full mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: colors.cream }}>
                        <Upload size={24} style={{ color: colors.forest }} />
                      </div>
                      <span className="text-sm font-medium text-gray-500">Upload Image</span>
                   </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex justify-end gap-4">
                <button className="px-8 py-2.5 rounded-lg font-semibold border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button 
                  className="px-10 py-2.5 rounded-lg font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: colors.forest }}
                >
                  Save
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

export default BuyerAddCostCenter;