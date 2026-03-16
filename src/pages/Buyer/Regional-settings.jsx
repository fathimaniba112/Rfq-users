import React, { useState } from 'react';
import { X, ChevronDown, Trash2, Plus } from 'lucide-react';
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerRegionSettings = () => {
  const [taxRows, setTaxRows] = useState([{ id: 1, name: 'VAT', value: '10' }]);

  const addTaxRow = () => {
    setTaxRows([...taxRows, { id: Date.now(), name: '', value: '' }]);
  };

  const removeTaxRow = (id) => {
    setTaxRows(taxRows.filter(row => row.id !== id));
  };

  return (
       <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />
    
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16">
          
          {/* Left Column: Description */}
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-4">Region Settings</h2>
            <p className="text-[#6B715E] leading-relaxed text-sm md:text-base">
              Set the time zone, transaction currencies, and applicable taxes for your region. 
              Your procurement documents will all utilize these default settings.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="md:w-2/3 space-y-6">
            
            {/* Time Zone */}
            <div>
              <label className="block text-sm font-medium text-[#7A9C83] mb-2">Time Zone</label>
              <div className="relative">
                <div className="w-full border border-gray-200 rounded-lg p-3 flex items-center justify-between bg-white text-[#2A2A2A]">
                  <span>Bahrain (GMT+03:00)</span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <X size={16} className="cursor-pointer hover:text-red-400" />
                    <div className="w-[1px] h-4 bg-gray-200"></div>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Currency */}
            <div>
              <label className="block text-sm font-medium text-[#7A9C83] mb-2">Primary Currency</label>
              <div className="relative">
                <select className="w-full appearance-none border border-gray-200 rounded-lg p-3 bg-[#F5F2EA]/30 text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#7A9C83]/20">
                  <option>Bahraini Dinar (BHD)</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Applicable Tax */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#7A9C83]">Applicable Tax on Purchases</label>
              
              {taxRows.map((row) => (
                <div key={row.id} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <input 
                    type="text" 
                    defaultValue={row.name}
                    placeholder="Tax Name"
                    className="flex-grow w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#7A9C83]"
                  />
                  <div className="flex w-full sm:w-32 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#7A9C83]">
                    <input 
                      type="number" 
                      defaultValue={row.value}
                      className="w-full p-3 focus:outline-none"
                    />
                    <span className="bg-[#F5F2EA] px-4 flex items-center text-[#2A2A2A] border-l border-gray-200">
                      %
                    </span>
                  </div>
                  {taxRows.length > 1 && (
                    <button 
                      onClick={() => removeTaxRow(row.id)}
                      className="text-gray-400 hover:text-red-500 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}

              <div className="flex flex-col items-end gap-2 mt-2">
                <button 
                  onClick={addTaxRow}
                  className="flex items-center gap-1 text-sm font-medium text-[#43624A] hover:underline"
                >
                  <Plus size={16} /> Add More Tax
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
              <button className="px-8 py-2.5 rounded-lg border border-[#43624A] text-[#43624A] font-medium hover:bg-[#F5F2EA] transition-colors">
                Cancel
              </button>
              <button className="px-8 py-2.5 rounded-lg bg-[#43624A] text-white font-medium hover:bg-[#2A2A2A] transition-transform active:scale-95 shadow-md">
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BuyerRegionSettings;