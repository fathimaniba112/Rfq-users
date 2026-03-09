import React, { useState } from "react";

export default function PRTable() {

const [showFilters, setShowFilters] = useState(false);

const data = [
  {
    pr: "29496",
    title: "Microwave Oven",
    createdBy: "santosh chaubey",
    cost: "general",
    date: "29-Dec-2025 03:57 PM",
    status: "PR Rejected",
    rfx: "RFQ Cancelled",
  },
  {
    pr: "27284",
    title: "PVC, HP Pipes and Fittings",
    createdBy: "Rakhil kannoth",
    cost: "2713 Ishaq Villa",
    date: "02-Nov-2025 05:33 PM",
    status: "PR Rejected",
    rfx: "",
  },
  {
    pr: "24971",
    title: "Flexible Duct Connector Box",
    createdBy: "santosh chaubey",
    cost: "general",
    date: "07-Sep-2025 05:03 PM",
    status: "PR Rejected",
    rfx: "Quotation Received",
  },
];

return (

<div className="bg-[#F5F2EA] min-h-screen p-8">

{/* Filter Buttons */}

<div className="flex gap-2 mb-6 flex-wrap">

<button className="px-4 py-2 bg-[#7A9C83] text-white rounded-md">All</button>

<button className="px-4 py-2 border border-[#7A9C83] text-[#43624A] rounded-md">Draft</button>

<button className="px-4 py-2 border border-[#7A9C83] text-[#43624A] rounded-md">In Review</button>

<button className="px-4 py-2 border border-[#7A9C83] text-[#43624A] rounded-md">PR Accepted</button>

<button className="px-4 py-2 border border-[#7A9C83] text-[#43624A] rounded-md">Converted to RFX</button>

<button className="px-4 py-2 border border-[#7A9C83] text-[#43624A] rounded-md">PR Rejected</button>

<div className="ml-auto">

<button
onClick={() => setShowFilters(!showFilters)}
className="border px-4 py-2 border-[#43624A] text-[#43624A] rounded-md"
>
Advanced Filters
</button>

</div>

</div>

{/* ADVANCED FILTERS */}

{showFilters && (

<div className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-4 gap-6">

<div>
<label className="block text-sm text-gray-600 mb-1">Date Range</label>
<select className="w-full border rounded p-2">
<option>Select Date</option>
<option>Today</option>
<option>Yesterday</option>
<option>Last 30 days</option>
<option>last 90 days</option>
<option>last 180 days</option>
<option>last Calender year</option>
<option>Custom Range</option>
</select>
</div>

<div>
<label className="block text-sm text-gray-600 mb-1">User</label>
<select className="w-full border rounded p-2">
<option>Please Select</option>
</select>
</div>

<div>
<label className="block text-sm text-gray-600 mb-1">Cost Centers</label>
<select className="w-full border rounded p-2">
<option>Please Select</option>
</select>
</div>

<div>
<label className="block text-sm text-gray-600 mb-1">
👁 Show / Hide Columns
</label>
<select className="w-full border rounded p-2">
    <option>Please Select</option>
<option>PR# </option>
<option> Title</option>
<option>Created By </option>
<option>Created On </option>
<option> Status</option>
</select>
</div>

</div>

)}

{/* Table */}

<div className="bg-white rounded-lg shadow">

<div className="p-4 flex justify-between">

<div>
Show
<select className="mx-2 border p-1 rounded">
    <option>5</option>
<option>10</option>
<option>25</option>
<option>50</option>
</select>
entries
</div>

<input
className="border p-2 rounded"
placeholder="Search..."
/>

</div>

<table className="w-full text-sm">

<thead className="border-b text-[#2A2A2A]">

<tr className="text-left">

<th className="p-4">PR#</th>
<th className="p-4">Title</th>
<th className="p-4">Created By</th>
<th className="p-4">Cost Center</th>
<th className="p-4">Created On</th>
<th className="p-4">Status</th>
<th className="p-4">RFX Status</th>

</tr>

</thead>

<tbody>

{data.map((row, index) => (

<tr key={index} className="border-b hover:bg-[#F5F2EA]">

<td className="p-4">{row.pr}</td>

<td className="p-4 font-medium text-[#43624A]">
{row.title}
</td>

<td className="p-4">{row.createdBy}</td>

<td className="p-4">{row.cost}</td>

<td className="p-4">{row.date}</td>

<td className="p-4">
<span className="flex items-center gap-2 text-gray-600">
<span className="w-3 h-3 bg-gray-500 rounded-full"></span>
{row.status}
</span>
</td>

<td className="p-4">

{row.rfx === "RFQ Cancelled" && (
<span className="text-red-500 flex items-center gap-2">
<span className="w-3 h-3 bg-red-500 rounded-full"></span>
RFQ Cancelled
</span>
)}

{row.rfx === "Quotation Received" && (
<span className="text-blue-600 flex items-center gap-2">
<span className="w-3 h-3 bg-blue-600 rounded-full"></span>
Quotation Received
</span>
)}

</td>

</tr>

))}

</tbody>

</table>

{/* Pagination */}

<div className="flex justify-between items-center p-4">

<p className="text-sm text-gray-600">
Showing 1 to 10 of 741 entries
</p>

<div className="flex gap-2">

<button className="px-3 py-1 bg-[#7A9C83] text-white rounded">1</button>

<button className="px-3 py-1 border rounded">2</button>

<button className="px-3 py-1 border rounded">3</button>

<button className="px-3 py-1 border rounded">4</button>

<button className="px-3 py-1 border rounded">5</button>

<button className="px-3 py-1 border rounded">Next</button>

</div>

</div>

</div>

</div>

);
}