import React, { useRef } from 'react';
import { Upload, Info, CheckCircle2 } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const BulkUploadPage = () => {

  const fileInputRef = useRef(null);

  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A',
    secondary: '#7A9C83',
    light: '#F5F2EA'
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">

      <SettingsSidebar />

      <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-8 font-sans" style={{ color: colors.dark }}>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="flex flex-col md:flex-row">

            {/* Left Sidebar */}
            <div className="w-full md:w-1/3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/30">

              <h1 className="text-2xl font-bold mb-6" style={{ color: colors.dark }}>
                Upload Catalog Products
              </h1>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                You can upload your catalog using this bulk upload feature. It allows you to
                add new catalog products or update existing ones with a single file upload.
                Use the template file as a reference for how the data is to be structured.
              </p>

            </div>

            {/* Right Section */}
            <div className="w-full md:w-2/3 p-6 md:p-10">

              <div className="space-y-8">

                {/* Step 1 */}
                <section>

                  <div className="flex items-center gap-3 mb-6 bg-[#F5F2EA] p-3 rounded-lg border border-[#7A9C83]/20">

                    <CheckCircle2 size={20} style={{ color: colors.primary }} />

                    <span className="font-semibold">
                      1. Upload a file
                    </span>

                  </div>

                  {/* Download Template */}

                  <a
                    href="/template.xlsx"
                    download
                    className="flex items-center gap-2 text-sm font-medium mb-4 hover:opacity-80"
                    style={{ color: '#3B82F6' }}
                  >
                    Download template file
                    <Info size={16} />
                  </a>

                  {/* Upload Box */}

                  <div
                    onClick={handleUploadClick}
                    className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer group"
                  >

                    <div className="bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">

                      <Upload size={32} style={{ color: colors.secondary }} />

                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                      Upload File
                    </p>

                  </div>

                  {/* Hidden Input */}

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                  />

                  {/* Upload Button */}

                  <div className="flex justify-end mt-6">

                    <button
                      className="px-8 py-2 rounded-lg border-2 font-semibold hover:brightness-95"
                      style={{
                        borderColor: colors.secondary,
                        color: colors.primary
                      }}
                    >
                      Upload
                    </button>

                  </div>

                </section>

                {/* Step 2 */}

                <section className="opacity-60">

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">

                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-400">
                      2
                    </div>

                    <span className="font-semibold text-gray-500">
                      2. Review the data
                    </span>

                  </div>

                </section>

                {/* Step 3 */}

                <section className="opacity-60">

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">

                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-400">
                      3
                    </div>

                    <span className="font-semibold text-gray-500">
                      3. Start processing
                    </span>

                  </div>

                </section>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BulkUploadPage;