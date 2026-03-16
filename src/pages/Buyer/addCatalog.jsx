import React, { useState } from 'react';
import { RefreshCw, Upload, Search, FileText, X } from 'lucide-react';
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerAddItemForm = () => {
  const [formData, setFormData] = useState({
    itemCode: 'YAT-ITEM-15558',
    itemName: '',
    itemType: '',
    uom: 'Piece',
    classification: '',
    description: '',
    targetPrice: '',
    specification: ''
  });

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <BuyerSettingsSidebar />
    
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Sidebar - Info */}
          <div className="w-full md:w-1/3 bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-100">
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-4">Add an Item</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Predefine your frequently or commonly purchased items in your catalog to ensure data consistency and hygiene, completeness of information in your requisition, and minimize off-catalog or maverick spend.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="w-full md:w-2/3 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Item Code */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Item Code</label>
                <div className="flex">
                  <input 
                    type="text" 
                    value={formData.itemCode}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-l-md text-gray-600 text-sm focus:outline-none"
                  />
                  <button className="px-3 py-2 border border-l-0 border-gray-200 rounded-r-md bg-white hover:bg-gray-50 transition-colors">
                    <RefreshCw size={16} className="text-[#43624A]" />
                  </button>
                </div>
              </div>

              {/* Item Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Item Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter item name"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-[#7A9C83] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Item Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Item Type</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none">
                  <option>Please Select</option>
                  <option>Raw Material</option>
                  <option>Service</option>
                </select>
              </div>

              {/* Unit of Measure */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Unit of Measure</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none">
                  <option>Piece</option>
                  <option>Kilogram</option>
                  <option>Litre</option>
                </select>
              </div>

              {/* Product Image Upload (Span 1 on Desktop) */}
              <div className="md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col items-center justify-center">
                 <label className="text-sm font-medium text-gray-700 w-full mb-2">Product Image</label>
                 <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer group">
                    <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                      <Upload size={24} className="text-[#43624A]" />
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-500">Upload Image</span>
                 </div>
              </div>

              {/* Classification */}
              <div className="md:col-span-1 space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  Classification <Search size={14} className="text-gray-400" />
                </label>
                <div className="px-3 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-400">
                  No options(s) selected
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-[#7A9C83] outline-none"
                />
              </div>

              {/* Target Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Target Price</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm font-bold">
                    BHD
                  </span>
                  <input 
                    type="number" 
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-r-md text-sm focus:ring-2 focus:ring-[#7A9C83] outline-none"
                  />
                </div>
              </div>

              {/* Specification */}
              <div className="md:col-span-2 space-y-2 pt-4 border-t border-gray-100">
                <label className="text-sm font-medium text-gray-700">Specification</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-[#7A9C83] outline-none mb-4"
                />
                
                <div className="flex flex-col items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">OR</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#7A9C83] text-[#43624A] rounded-md text-sm font-medium hover:bg-[#F5F2EA] transition-colors">
                    <FileText size={16} />
                    Upload File
                  </button>
                  <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-400 text-center">
                    No documents attached
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 mt-10 pt-6 border-t border-gray-100">
              <button className="px-6 py-2 border border-[#43624A] text-[#43624A] rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button className="px-8 py-2 bg-[#43624A] text-white rounded-md text-sm font-medium hover:bg-[#2A2A2A] transition-all shadow-md shadow-green-900/10">
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

export default BuyerAddItemForm;