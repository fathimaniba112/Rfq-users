import React from "react";
import { Search, Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PurchaseOrderExtras from "../pages/PurchaseOrder-create2";
export default function CreatePurchaseOrder() {

const navigate = useNavigate();

return (

<div className="min-h-screen bg-[#F5F2EA] p-6">

{/* Back */}
<button
onClick={() => navigate(-1)}
className="flex items-center gap-2  text-[#43624A] font-medium mb-6"
>
<ArrowLeft size={18} />
BACK
</button>

<div className="bg-white rounded-xl shadow p-8 space-y-10">

{/* Top Fields */}

<div className="grid grid-cols-2 gap-8">

<div>
<label className="text-sm  text-[#43624A]">PO#</label>
<input
type="text"
className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
/>
</div>

<div>
<label className="text-sm  text-[#43624A]">Request Type</label>
<select className="w-full border rounded-lg p-3 mt-1 bg-gray-50">
<option>Please Select</option>
<option>RFQ</option>
<option>RFP</option>
<option>PR</option>
</select>
</div>

</div>

{/* Section Titles */}

<div className="grid grid-cols-2 gap-10">

<h2 className=" text-[#43624A] text-lg font-semibold">
Supplier Information
</h2>

<h2 className="text-[#43624A] text-lg font-semibold">
Requisition Info
</h2>

</div>

{/* Fields */}

<div className="grid grid-cols-4 gap-8">

{/* Supplier */}

<div>
<label className="text-gray-600 text-sm mb-1 block">
Supplier
</label>

<select className="w-full border rounded-lg px-3 py-3 bg-gray-50">
<option>Select Supplier</option>
</select>
</div>

{/* Procurement */}

<div>
<label className="text-gray-600 text-sm mb-1 flex items-center gap-2">
Procurement Classification
<Search size={16} className="text-gray-500"/>
</label>

<input
type="text"
placeholder="No options(s) selected"
className="w-full border rounded-lg px-3 py-3 bg-gray-50"
/>
</div>

{/* Purchase Type */}

<div>
<label className="text-gray-600 text-sm mb-1 block">
Purchase Type
</label>

<select className="w-full border rounded-lg px-3 py-3 bg-gray-50">
<option>Please Select</option>
<option>Airline Ticket</option>
<option>Goods/Products</option>
<option>Services</option>
<option>Sub-contract</option>
</select>
</div>

{/* Cost Center */}

<div>
<label className="text-gray-600 text-sm mb-1 flex items-center gap-2">
Cost Center(s)
<Plus size={16} className="text-gray-500"/>
</label>

<input
type="text"
className="w-full border rounded-lg px-3 py-3 bg-gray-50"
/>
</div>

</div>

{/* Ordered Items */}

<div>

<h2 className=" text-[#43624A] text-lg font-semibold mb-6">
Ordered Items
</h2>

<div className="border rounded-lg py-16 text-center bg-gray-50">

<img
src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
alt="no items"
className="w-20 mx-auto mb-4 opacity-40"
/>

<p className="text-gray-500 text-lg mb-2">
No items added
</p>

<p className="text-gray-400 mb-6">
Select items from your catalog that you would like to request
</p>

<button className="border border-[#43624A] text-[#43624A] px-6 py-2 rounded-lg hover:bg-[#43624A] hover:text-white transition">
+ Add Item
</button>

</div>

</div>

</div> <br/>
{/* EXTRA SECTION */}
<PurchaseOrderExtras />
</div>

);
}