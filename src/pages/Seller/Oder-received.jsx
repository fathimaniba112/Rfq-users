import React, { useState } from "react";
import {
  FiFileText,
  FiCheckCircle,
  FiXCircle,
  FiTruck,
  FiClock,
  FiFile,
  FiCreditCard,
  FiCheckSquare,
  FiList,
  FiSearch,
} from "react-icons/fi";

const OrderReceived = () => {
  const colors = {
    dark: "#2A2A2A",
    primary: "#43624A",
    secondary: "#7A9C83",
    bg: "#F5F2EA",
    accent: "#FFFFFF",
  };

  const [activeTab, setActiveTab] = useState("All");

  const statusTabs = [
    { label: "All", icon: <FiList /> },
    { label: "Pending Responses", icon: <FiFileText /> },
    { label: "Accepted", icon: <FiCheckCircle /> },
    { label: "Declined", icon: <FiXCircle /> },
    { label: "Delivery Note Sent", icon: <FiTruck /> },
    { label: "Invoice Pending", icon: <FiClock /> },
    { label: "Invoice Issued", icon: <FiFile /> },
    { label: "Payment Confirmation Pending", icon: <FiCreditCard /> },
    { label: "Transaction Completed", icon: <FiCheckSquare /> },
  ];

  const tableData = [
    {
      id: "15025",
      po: "15116",
      rfx: "36993",
      items: "Purchase request for Variation for rockwool insulation",
      buyer: "CINQO CONTRACTING W.L.L.",
      status: "Accepted",
      received: "18-May-2025 5:07 PM",
      required: "19-May-2025 2:30 PM",
    },
    {
      id: "14619",
      po: "14686",
      rfx: "37851",
      items: "Purchase request for MEP Variations",
      buyer: "CINQO CONTRACTING W.L.L.",
      status: "Accepted",
      received: "03-May-2025 10:22 AM",
      required: "28-Apr-2025 8:30 PM",
    },
    {
      id: "13432",
      po: "13468",
      rfx: "34249",
      items: "Purchase request for grilles diffusers",
      buyer: "CINQO CONTRACTING W.L.L.",
      status: "PO Received",
      received: "23-Mar-2025 7:09 PM",
      required: "19-Mar-2025 8:30 PM",
    },
    {
      id: "13431",
      po: "13469",
      rfx: "32712",
      items: "Purchase request",
      buyer: "CINQO CONTRACTING W.L.L.",
      status: "Accepted",
      received: "23-Mar-2025 7:09 PM",
      required: "15-Mar-2025 8:30 PM",
    },
  ];

  return (
    <div
      className="min-h-screen p-4 lg:p-8"
      style={{ backgroundColor: colors.bg, color: colors.dark }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* STATUS TABS */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white/50 p-2 rounded-xl backdrop-blur-sm border border-gray-200 shadow-sm overflow-x-auto">
          {statusTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-bold whitespace-nowrap uppercase tracking-wider border transition-all duration-200"
              style={{
                backgroundColor:
                  activeTab === tab.label ? colors.primary : "transparent",
                color: activeTab === tab.label ? colors.accent : colors.dark,
                borderColor:
                  activeTab === tab.label
                    ? colors.primary
                    : "rgba(0,0,0,0.05)",
              }}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* SEARCH BAR */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase opacity-50">
                Show entries
              </label>
              <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
          </div>

          <div className="relative w-full md:w-96 group">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Order, Buyer or Items..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7A9C83]"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  {[
                    "Order #",
                    "PO #",
                    "RFX #",
                    "Items",
                    "Buyer",
                    "Status",
                    "Received",
                    "Required",
                  ].map((header) => (
                    <th
                      key={header}
                      className="p-5 text-[11px] font-black uppercase tracking-widest text-gray-400"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-[#F5F2EA]/30 transition-all"
                  >
                    <td className="p-5 text-sm font-bold text-[#43624A]">
                      {row.id}
                    </td>

                    <td className="p-5 text-sm">{row.po}</td>

                    <td className="p-5 text-sm text-gray-400">{row.rfx}</td>

                    <td className="p-5 text-sm max-w-[300px]">{row.items}</td>

                    <td className="p-5 text-sm font-medium text-gray-700">
                      {row.buyer}
                    </td>

                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            row.status === "Accepted"
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                        ></div>

                        <span
                          className={`text-xs font-bold py-1 px-3 rounded-md ${
                            row.status === "Accepted"
                              ? "bg-green-50 text-green-700 border border-green-100"
                              : "bg-blue-50 text-blue-700 border border-blue-100"
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    </td>

                    <td className="p-5 text-xs font-bold text-gray-400">
                      {row.received}
                    </td>

                    <td className="p-5 text-xs font-bold text-gray-400">
                      {row.required}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">
              Showing <b>1 to 4</b> of <b>13</b> entries
            </span>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-bold text-gray-400">
                Previous
              </button>

              <button
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.accent,
                }}
              >
                1
              </button>

              <button className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black border">
                2
              </button>

              <button className="px-4 py-2 text-sm font-bold text-gray-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReceived;