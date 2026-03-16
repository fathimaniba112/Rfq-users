import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { Info, ChevronDown, X } from 'lucide-react';

const data = [
  { name: 'Draft', count: 0 },
  { name: 'In Review', count: 0 },
  { name: 'RFQ Issued', count: 0 },
  { name: 'Quotation Received', count: 11 },
  { name: 'Vendor Finalized', count: 0 },
  { name: 'Purchase Order Issued', count: 0 },
  { name: 'RFQ Cancelled', count: 1 },
];

const BuyerRFQBreakdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Last 30 Days");

  const options = ["Last 30 Days", "Year to Date"];

  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A',
    secondary: '#7A9C83',
    background: '#F5F2EA'
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold" style={{ color: colors.dark }}>
              Breakdown of RFQs
            </h2>
            <Info size={18} className="text-blue-500 cursor-pointer" />
          </div>

          {/* Dropdown */}
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 cursor-pointer bg-white"
            >
              <span>{selected}</span>
              <X
                size={14}
                className="ml-2 text-gray-400"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected("");
                }}
              />
              <div className="w-[1px] h-4 bg-gray-200 mx-1" />
              <ChevronDown size={16} />
            </div>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chart */}
        <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid vertical={false} strokeDasharray="0" stroke="#F0F0F0" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                dy={15}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                domain={[0, 12]}
                ticks={[0, 3, 6, 9, 12]}
              />
              <Bar dataKey="count" radius={[2, 2, 0, 0]} barSize={40}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.count > 0 ? colors.secondary : 'transparent'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default BuyerRFQBreakdown;