import React, { useState, useMemo } from "react";
import { Trash2, Plus, Paperclip } from "lucide-react";

export default function BuyerPurchaseOrderExtras() {
  // State for dynamic rows
  const [charges, setCharges] = useState([
    { name: "Delivery Charges", value: "", tax: "" }
  ]);

  // Add a new empty row
  const addRow = () => {
    setCharges([...charges, { name: "", value: "", tax: "" }]);
  };

  // Remove a specific row
  const removeRow = (index) => {
    const updated = charges.filter((_, i) => i !== index);
    setCharges(updated.length ? updated : [{ name: "", value: "", tax: "" }]);
  };

  // Update specific field in a row
  const updateCharge = (index, field, value) => {
    const updated = [...charges];
    updated[index][field] = value;
    setCharges(updated);
  };

  // Calculate Subtotal, Tax, and Grand Total
  const totals = useMemo(() => {
    let subTotal = 0;
    let taxTotal = 0;

    charges.forEach((c) => {
      const value = parseFloat(c.value) || 0;
      const tax = parseFloat(c.tax) || 0;

      subTotal += value;
      taxTotal += tax;
    });

    return {
      subTotal,
      taxTotal,
      grandTotal: subTotal + taxTotal
    };
  }, [charges]);

  return (
    <div className="bg-white rounded-xl shadow p-8 space-y-10">
      
      {/* SECTION: OTHER CHARGES TABLE */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          {/* Header using #43624A */}
          <h2 className="text-[#43624A] text-lg font-bold flex items-center gap-2">
            1. <Plus size={20} /> Add other charges (if any) e.g. Delivery Charges or Custom etc.
          </h2>
          <button 
            onClick={addRow}
            className="text-sm font-semibold text-[#43624A] hover:opacity-80 transition"
          >
            + Add Another Charge
          </button>
        </div>

        <div className="border rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b text-gray-600">
              <tr>
                <th className="text-left py-4 px-4 font-medium">Charge Name</th>
                <th className="text-left py-4 px-4 font-medium w-40">Value (BHD)</th>
                <th className="text-left py-4 px-4 font-medium w-40">Tax (BHD)</th>
                <th className="text-left py-4 px-4 font-medium w-44">Total w/ Tax</th>
                <th className="w-12"></th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {charges.map((charge, index) => {
                const value = parseFloat(charge.value) || 0;
                const tax = parseFloat(charge.tax) || 0;
                const rowTotal = value + tax;

                return (
                  <tr key={index} className="group hover:bg-gray-50 transition-colors">
                    <td className="p-3">
                      <input
                        type="text"
                        placeholder="e.g. Customs or Packaging"
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200"
                        value={charge.name}
                        onChange={(e) => updateCharge(index, "name", e.target.value)}
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        placeholder="0.000"
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200"
                        value={charge.value}
                        onChange={(e) => updateCharge(index, "value", e.target.value)}
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        placeholder="0.000"
                        className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200"
                        value={charge.tax}
                        onChange={(e) => updateCharge(index, "tax", e.target.value)}
                      />
                    </td>
                    <td className="p-3 font-semibold text-gray-700">
                      BHD {rowTotal.toFixed(3)}
                    </td>
                    <td className="p-3">
                      <button 
                        onClick={() => removeRow(index)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                        title="Remove row"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION: SUMMARY & TOTALS */}
      <div className="flex flex-col md:flex-row justify-end gap-8">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 w-full md:w-[400px] space-y-4 shadow-inner">
          <div className="flex justify-between text-[#43624A]">
            <span>Sub Total:</span>
            <span className="font-medium text-gray-900">BHD {totals.subTotal.toFixed(3)}</span>
          </div>

          <div className="flex justify-between text-[#43624A] border-b border-gray-200 pb-4">
            <span>Total Tax:</span>
            <span className="font-medium text-gray-900">BHD {totals.taxTotal.toFixed(3)}</span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-gray-800">Grand Total:</span>
            <span className="text-xl font-bold text-[#43624A]">BHD {totals.grandTotal.toFixed(3)}</span>
          </div>

          <div className="pt-4 mt-2 border-t border-gray-200">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Grand Total In Words</p>
            <p className="text-sm text-gray-500 italic font-medium leading-tight">
              Zero Bahraini Dinars Only
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: TERMS & NOTES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {/* Terms */}
        <div className="space-y-4">
          <h2 className="text-[#43624A] font-bold tracking-tight">Terms & Conditions</h2>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Payment Terms</label>
            <select className="w-full border rounded-xl p-3 bg-gray-50 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200 appearance-none">
              <option>Please Select</option>
              <option>30 Days</option>
              <option>60 Days</option>
              <option>Advance</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Delivery Terms</label>
            <select className="w-full border rounded-xl p-3 bg-gray-50 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200 appearance-none">
              <option>Please Select</option>
              <option>Immediate</option>
              <option>15 Days</option>
              <option>30 Days</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Delivery Location</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full border rounded-xl p-3 bg-gray-50 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-[#43624A] font-bold tracking-tight">Description</h2>
          <textarea
            rows="8"
            placeholder="Add detailed description of items or service..."
            className="w-full border rounded-xl p-4 bg-gray-50 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200 resize-none"
          />
        </div>

        {/* Notes */}
        <div className="space-y-4">
          <h2 className="text-[#43624A] font-bold tracking-tight">Notes & Instructions</h2>
          <textarea
            rows="8"
            placeholder="Internal notes or specific vendor instructions..."
            className="w-full border rounded-xl p-4 bg-gray-50 focus:ring-2 focus:ring-[#43624A]/10 outline-none border-gray-200 resize-none"
          />
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[#43624A] border border-[#43624A] font-medium hover:bg-green-50 transition">
          <Paperclip size={18} /> Attach Files
        </button>

        <div className="flex gap-3">
          <button className="px-8 py-2.5 border rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition">
            Cancel
          </button>
          <button className="px-8 py-2.5 border border-[#43624A] text-[#43624A] rounded-xl font-medium hover:bg-green-50 transition">
            Save
          </button>
          <button className="px-8 py-2.5 bg-[#43624A] text-white rounded-xl font-semibold shadow-lg shadow-gray-200 hover:opacity-90 transition">
            Save & Continue
          </button>
        </div>
      </div>

    </div>
  );
}