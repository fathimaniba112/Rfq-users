import React, { useState } from 'react';
import { Upload, Info, CheckCircle2 } from 'lucide-react';
import SettingsSidebar from "./sidebar-settings";

const BulkUploadCostPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const steps = [
    { id: 1, title: 'Upload a file', active: true },
    { id: 2, title: 'Review the data', active: false },
    { id: 3, title: 'Start processing', active: false },
  ];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
    
          {/* Sidebar */}
          <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Sidebar: Instructions */}
        <div className="w-full md:w-1/3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
          <h2 className="text-xl font-bold mb-4">Upload Cost Centers</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            You can upload your catalog using this bulk upload feature. It allows you to 
            add new catalog products or update existing ones with a single file upload. 
            Use the template file as a reference for how the data is to be structured.
          </p>
          
          <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Instructions:</h3>
          <ol className="space-y-4 text-sm text-gray-600">
            <li className="flex gap-2">
              <span>1.</span>
              <span>When adding a Cost Center to the bulk upload template, make sure you select <strong>Nature</strong> and <strong>Type</strong>.</span>
            </li>
            <li className="flex gap-2">
              <span>2.</span>
              <span>If a Cost Center has a parent Cost Center, correctly type the Code of the parent Cost Center in the <strong>Parent Code</strong> column.</span>
            </li>
            <li className="flex gap-2">
              <span>3.</span>
              <span>Please note that a Project Cost Center cannot be a parent of a General Cost Center.</span>
            </li>
          </ol>
        </div>

        {/* Right Content: Upload Area */}
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col">
          
          {/* Stepper */}
          <div className="space-y-2 mb-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-6 h-6 rounded-full border ${step.active ? 'bg-white border-[#43624A] text-[#43624A]' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
                  <CheckCircle2 size={16} />
                </div>
                <span className={`text-sm font-medium ${step.active ? 'text-[#2A2A2A]' : 'text-gray-400'}`}>
                  {step.id}. {step.title}
                </span>
                {step.id === 1 && <div className="flex-1 h-[1px] bg-gray-100 ml-2 hidden md:block"></div>}
              </div>
            ))}
          </div>

          {/* Upload Box */}
          <div className="flex-1 flex flex-col">
            <button className="flex items-center gap-2 text-[#43624A] text-sm font-medium mb-4 hover:underline">
              Download template file <Info size={16} />
            </button>

            <div className="relative border-2 border-dashed border-[#7A9C83] rounded-xl flex flex-col items-center justify-center py-20 px-4 transition-colors hover:bg-gray-50 group cursor-pointer">
              <input 
                type="file" 
                className="absolute inset-0 opacity-0 cursor-pointer" 
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Upload className="text-[#7A9C83]" size={32} />
              </div>
              <p className="text-lg font-medium text-gray-700">
                {selectedFile ? selectedFile.name : 'Upload File'}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="px-8 py-2 border border-[#43624A] text-[#43624A] rounded-md font-medium hover:bg-[#43624A] hover:text-white transition-all active:scale-95">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BulkUploadCostPage;