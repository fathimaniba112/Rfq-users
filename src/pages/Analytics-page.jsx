import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { ShoppingBag, Users, FileText, Coffee, ChevronDown } from 'lucide-react';

// Mock Data based on your images
const lineData = [
  { month: '2024-08', amount: 0 },
  { month: '2024-09', amount: 87743 },
  { month: '2024-10', amount: 35000 },
  { month: '2024-11', amount: 22000 },
  { month: '2025-02', amount: 18000 },
  { month: '2025-11', amount: 16000 },
];

const dashboardTheme = {
  dark: '#2A2A2A',
  forest: '#43624A',
  sage: '#7A9C83',
  cream: '#F5F2EA'
};

const StatCard = ({ title, value, Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-start">
    <div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold mt-1 text-[#2A2A2A]">{value}</h3>
    </div>
    <div className="p-2 rounded-lg bg-[#F5F2EA]">
      <Icon size={24} className="text-[#43624A]" />
    </div>
  </div>
);

const SpendDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EA] p-8 font-sans text-[#2A2A2A]">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#43624A] mb-6">Spend Management</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          {['Date Range', 'Cost Centers', 'Supplier'].map((label) => (
            <div key={label} className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">{label}</label>
              <div className="flex items-center justify-between border rounded px-3 py-2 text-gray-400 bg-white cursor-pointer hover:border-[#7A9C83] transition-colors">
                <span>Please Select</span>
                <ChevronDown size={16} />
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Spend" value="225,649.917" Icon={ShoppingBag} />
        <StatCard title="Suppliers Count" value="37" Icon={Users} />
        <StatCard title="Issued Purchase Orders" value="231" Icon={FileText} />
        <StatCard title="Items Bought" value="323,678" Icon={Coffee} />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold uppercase mb-6">Amount of Purchase Order</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7A9C83" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7A9C83" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="month" fontSize={10} tickMargin={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="amount" stroke="#43624A" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Budget Analysis Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="text-sm font-bold uppercase mb-6">Budget Analysis</h3>
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-4 font-semibold">Cost Center/Project</th>
                <th className="py-3 px-4 font-semibold">Budget (BHD)</th>
                <th className="py-3 px-4 font-semibold">PO Value (BHD)</th>
                <th className="py-3 px-4 font-semibold text-red-600">Over/Under</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { name: 'General', budget: 'NA', po: '86,836.16', diff: '-86,836.15' },
                { name: 'City Center Tower', budget: 'NA', po: '66,493.96', diff: '-66,493.95' },
                { name: 'ALBUSTAN PALACE', budget: 'NA', po: '13,894.38', diff: '-13,894.38' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">{row.name}</td>
                  <td className="py-3 px-4 text-gray-400">{row.budget}</td>
                  <td className="py-3 px-4">{row.po}</td>
                  <td className="py-3 px-4 bg-red-50 text-red-600 font-medium">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpendDashboard;