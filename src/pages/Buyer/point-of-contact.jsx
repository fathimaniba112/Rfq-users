import React from "react";
 import BuyerSettingsSidebar from "./sidebar-settings";

export default function BuyerPointOfContact() {
  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      {/* Sidebar - Your existing component */}
      <BuyerSettingsSidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-10">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-[#2A2A2A] mb-6">Points of Contact</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description Text */}
            <p className="text-[#2A2A2A] text-sm leading-relaxed opacity-80">
              Points of Contact are people that have access to your account's configurations. 
              Different contacts will be able to manage and can receive updates related to usage, 
              billing and renewals.
              <br /><br />
              For enabling or disabling app-specific permissions, you can manage users and 
              roles on the <span className="text-[#43624A] font-bold cursor-pointer underline">Users & Teams</span> page.
            </p>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#2A2A2A] mb-2">Primary contact</label>
                <select className="w-full p-3 border border-gray-200 rounded-md text-[#2A2A2A] bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none">
                  <option>Please Select</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2A2A2A] mb-2">Billing contact</label>
                <select className="w-full p-3 border border-gray-200 rounded-md text-[#2A2A2A] bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none">
                  <option>Please Select</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-2 border border-gray-300 rounded-md text-[#2A2A2A] hover:bg-gray-50 transition">Cancel</button>
                <button className="px-6 py-2 bg-[#43624A] text-white rounded-md hover:bg-[#3D523E] transition shadow-md">Save</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}