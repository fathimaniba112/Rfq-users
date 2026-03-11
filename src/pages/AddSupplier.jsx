import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import SettingsSidebar from "./sidebar-settings";

const AddSupplierForm = () => {
  const [formData, setFormData] = useState({
    supplierCode: 'YAT-SUPP-03726',
    supplierName: '',
    supplierType: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNo: ''
  });

  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A',
    secondary: '#7A9C83',
    background: '#F5F2EA'
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center" style={{ backgroundColor: colors.background }}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl overflow-hidden border border-gray-100">
        <div className="p-6 md:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>Add a Supplier</h2>
              <p className="text-sm leading-relaxed text-gray-500">
                Maintain a complete supplier record, from suppliers and sales agent contact information to supplier registration documents.
              </p>
              
              <div className="mt-12 hidden lg:block">
                <h3 className="text-lg font-semibold" style={{ color: colors.dark }}>Primary Contact</h3>
              </div>
            </div>

            {/* Right Column: Form Fields */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Supplier Code */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Supplier Code</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      value={formData.supplierCode}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 focus:outline-none"
                    />
                    <button className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white hover:bg-gray-50 transition-colors">
                      <RefreshCw size={18} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Supplier Name */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Supplier Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    style={{ '--tw-ring-color': colors.secondary }}
                  />
                </div>

                {/* Type of Supplier */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Type of Supplier</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none">
                    <option>Please Select</option>
                    <optio>Authorized Distributor</optio>
                    <option>Manufacturer</option>
                    <option>Producer</option>
                    <option>Retailer</option>
                    <option>Service Provider</option>
                     
                    <option>Wholesale</option>
                   
                  </select>
                </div>

                {/* Mobile visible header */}
                <div className="lg:hidden mt-4">
                   <h3 className="text-lg font-semibold" style={{ color: colors.dark }}>Primary Contact</h3>
                </div>

                {/* Contact Fields */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">First name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Last name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Contact No</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-wrap justify-end gap-3">
                <button 
                  className="px-8 py-2 rounded-md border text-sm font-semibold transition-all hover:bg-gray-50"
                  style={{ borderColor: '#3B82F6', color: '#3B82F6' }}
                >
                  Cancel
                </button>
                <button 
                  className="px-8 py-2 rounded-md text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#1D4ED8' }}
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

export default AddSupplierForm;