import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

// Color Palette from provided source
const dashboardColors = {
  dark: '#2A2A2A',
  primary: '#43624A',
  secondary: '#7A9C83',
  bg: '#F5F2EA', // Background color
  accentBlue: '#36C5F0', // Blue for Transaction bars
  accentGreen: '#4ade80', // Green for Supplier bars
  poBlue: '#3b82f6', // PO Trend Blue
};

// Data extracted from source images
const trendData = [
  { name: 'Jul \'24', requisitions: 5, rfx: 2, po: 5 },
  { name: 'Aug \'24', requisitions: 108, rfx: 97, po: 42 },
  { name: 'Sep \'24', requisitions: 86, rfx: 80, po: 40 },
  { name: 'Oct \'24', requisitions: 43, rfx: 40, po: 18 },
  { name: 'Nov \'24', requisitions: 60, rfx: 58, po: 12 },
  { name: 'Dec \'24', requisitions: 32, rfx: 30, po: 25 },
  { name: 'Jan \'25', requisitions: 40, rfx: 38, po: 26 },
  { name: 'Feb \'25', requisitions: 25, rfx: 22, po: 20 },
];

const transactionGroups = [
  { label: 'BHD 0-1k', value: '53,323.257', percentage: 65 },
  { label: 'BHD 1-2k', value: '45,460.92', percentage: 55 },
  { label: 'BHD 2-5k', value: '39,115.273', percentage: 45 },
  { label: 'BHD 5-10k', value: '22,282.166', percentage: 25 },
  { label: 'BHD More than 10k', value: '91,663.498', percentage: 85 },
];

const supplierData = [
  { group: 'Single', count: 23, percentage: 45 },
  { group: '2 - 5', count: 13, percentage: 25 },
  { group: '6 - 10', count: 3, percentage: 8 },
  { group: '11 - 20', count: 9, percentage: 18 },
  { group: 'More than 20', count: 5, percentage: 12 },
];

const ProcurementDashboard = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: dashboardColors.bg, color: dashboardColors.dark }}>
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold uppercase tracking-tight">Requisition RFX & PO Trend</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. TREND CHART SECTION */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={dashboardColors.secondary} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={dashboardColors.secondary} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis fontSize={11} tickLine={false} axisLine={false} domain={[0, 108]} />
                <Tooltip />
                <Area type="monotone" dataKey="requisitions" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorReq)" />
                <Area type="monotone" dataKey="rfx" stroke="#10b981" strokeWidth={2} fill="transparent" />
                <Bar dataKey="po" fill={dashboardColors.poBlue} radius={[4, 4, 0, 0]} barSize={15} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2. TRANSACTION VALUE GROUP */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-sm font-bold mb-6 uppercase text-gray-700 tracking-wide">Transaction Value Group</h2>
          <div className="space-y-5">
            <div className="grid grid-cols-3 text-[10px] font-bold text-gray-400 uppercase border-b pb-2">
              <span>Group</span>
              <span className="text-center">% Transactions</span>
              <span className="text-right">Total</span>
            </div>
            {transactionGroups.map((group, index) => (
              <div key={index} className="grid grid-cols-3 items-center gap-4">
                <span className="text-xs font-semibold text-gray-600">{group.label}</span>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full" 
                    style={{ width: `${group.percentage}%`, backgroundColor: dashboardColors.accentBlue }}
                  ></div>
                </div>
                <span className="text-xs font-bold text-gray-500 text-right">{group.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SUPPLIER CONCENTRATION ANALYSIS */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
          <h2 className="text-sm font-bold mb-6 uppercase text-gray-700 tracking-wide">Supplier Concentration Analysis</h2>
          <div className="space-y-5">
            <div className="grid grid-cols-3 text-[10px] font-bold text-gray-400 uppercase border-b pb-2">
              <span>Transaction Group</span>
              <span className="text-center">% Suppliers</span>
              <span className="text-right">Count</span>
            </div>
            {supplierData.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 items-center gap-4">
                <span className="text-xs font-semibold text-gray-600">{item.group}</span>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%`, backgroundColor: dashboardColors.accentGreen }}
                  ></div>
                </div>
                <span className="text-xs font-bold text-gray-500 text-right">{item.count}</span>
              </div>
            ))}
          </div>
          {/* Floating WhatsApp Button Mockup */}
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.604h.005c6.637 0 12.032-5.395 12.035-12.034a11.83 11.83 0 00-3.483-8.483z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 4. FREQUENT SUPPLIERS */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h2 className="text-sm font-bold mb-6 uppercase text-gray-700 tracking-wide">Frequent Suppliers</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={[
                { name: 'D.K. KARANI & BROS', val: 43 },
                { name: 'FUTURE HOME TRAD...', val: 21 },
                { name: 'PEARL INDIA TRADI...', val: 17 },
                { name: 'SAAJ INTERNATIO...', val: 15 },
                { name: 'KAVALANI & SONS...', val: 13 },
                { name: 'A.A KOTHAMBAWAL...', val: 13 },
              ]}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={150} fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="val" fill={dashboardColors.poBlue} radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcurementDashboard;