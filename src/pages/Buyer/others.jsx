import React, { useState } from "react";
 import BuyerSettingsSidebar from "./sidebar-settings";

export default function BuyerOthers() {
  const [selectedArchive, setSelectedArchive] = useState("Monthly");

  return (
    <div className="flex min-h-screen bg-[#F5F2EA] font-sans text-[#2A2A2A]">

      {/* IMPORTED SIDEBAR */}
      <BuyerSettingsSidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-10">
        <div className="max-w-5xl bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">

          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-[#2A2A2A] whitespace-nowrap">
                Archive Settings
              </h2>

              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {["Daily", "Weekly", "Monthly", "Annually", "Other"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="archive"
                      className="hidden"
                      checked={selectedArchive === option}
                      onChange={() => setSelectedArchive(option)}
                    />

                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                      ${selectedArchive === option
                        ? "border-[#43624A]"
                        : "border-gray-300 group-hover:border-[#7A9C83]"}`}
                    >
                      {selectedArchive === option && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#43624A]" />
                      )}
                    </div>

                    <span className={`text-sm ${selectedArchive === option ? "font-semibold" : "text-gray-600"}`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-5 py-2 text-sm font-medium text-[#43624A] border border-[#43624A] rounded-md hover:bg-[#F5F2EA] transition">
                Cancel
              </button>

              <button className="px-6 py-2 text-sm font-medium text-white bg-[#43624A] rounded-md hover:bg-[#3D523E] transition shadow-md">
                Save
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}