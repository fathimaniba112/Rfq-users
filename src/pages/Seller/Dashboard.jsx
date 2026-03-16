import React from 'react';
import { ShoppingCart, FileText, Package, ClipboardCheck, MessageSquare, ExternalLink } from 'lucide-react';

const Dashboard = () => {
  // Mock Data
  const stats = [
    { label: 'RFXs Bought', month: 0, week: 0, ytd: 7, icon: <FileText size={20} /> },
    { label: 'Quotations Submitted', month: 0, week: 0, ytd: 6, icon: <MessageSquare size={20} /> },
    { label: 'Orders Received', month: 0, week: 0, ytd: 0, icon: <Package size={20} /> },
  ];

  const quotations = [
    { item: 'ELV Works', buyer: 'CINQO CONTRACTING W.L.L.', price: 'BHD 0.000', competing: 0, date: '20-Mar-2025 12:14 PM' },
    { item: 'Electrical Works - Supply, Install etc', buyer: 'CINQO CONTRACTING W.L.L.', price: 'BHD 0.000', competing: 5, date: '08-Oct-2023 3:55 PM' },
    { item: 'Drainage, Plumbing & Mechanical works', buyer: 'CINQO CONTRACTING W.L.L.', price: 'BHD 0.000', competing: 4, date: '08-Oct-2023 3:54 PM' },
    { item: 'HVAC Works', buyer: 'CINQO CONTRACTING W.L.L.', price: 'BHD 0.000', competing: 0, date: '20-Aug-2023 1:09 PM' },
  ];

  const orders = [
    { buyer: 'CINQO CONTRACTING W.L.L.', value: 'BHD 290.750', type: 'Goods/Products', date: '18-May-2025 5:07 PM' },
    { buyer: 'CINQO CONTRACTING W.L.L.', value: 'BHD 24,001.890', type: 'Services', date: '03-May-2025 10:22 AM' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Stats Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-6 text-[#43624A]">Current Stats <span className="text-sm font-normal text-gray-400 ml-1">(Last 30 days)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#7A9C83] font-bold text-sm tracking-tight uppercase">
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                  <div className="text-5xl font-black py-2 text-[#2A2A2A]">{stat.month}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase space-y-0.5">
                    <p>{stat.week} (Last 7 Days)</p>
                    <p>{stat.ytd} RFXs (Year to Date)</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active RFX Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-2 text-[#43624A]">Active RFXs</h2>
            <p className="text-sm text-gray-400 font-medium">You don't have any active RFX.</p>
          </section>

          {/* Recent Quotations Table */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
              <h2 className="text-xl font-bold text-[#43624A]">Recent Quotations Submitted</h2>
              <button className="text-xs font-bold uppercase text-[#7A9C83] flex items-center gap-1 hover:opacity-70 transition-opacity">
                <ExternalLink size={14} /> View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Item Quoted</th>
                    <th className="px-6 py-4">Quoted Price</th>
                    <th className="px-6 py-4">Competing</th>
                    <th className="px-6 py-4">Date Submitted</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {quotations.map((q, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-[#2A2A2A]">{q.item}</p>
                        <p className="text-[11px] text-gray-400 font-medium">{q.buyer}</p>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{q.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{q.competing}</td>
                      <td className="px-6 py-4 text-[11px] text-gray-500 font-medium">{q.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[11px] font-bold uppercase text-[#43624A] bg-[#7A9C83]/10 px-3 py-1.5 rounded-md hover:bg-[#7A9C83]/20 transition-all">View Quotation</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Orders Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
              <h2 className="text-xl font-bold text-[#43624A]">Recent Orders Received</h2>
              <button className="text-xs font-bold uppercase text-[#7A9C83] flex items-center gap-1 hover:opacity-70 transition-opacity">
                 View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Buyer</th>
                    <th className="px-6 py-4">Value</th>
                    <th className="px-6 py-4">Products</th>
                    <th className="px-6 py-4">Received</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7A9C83]/20 flex items-center justify-center text-[#43624A]">
                            <ShoppingCart size={14} />
                          </div>
                          <span className="text-sm font-bold">{order.buyer}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-sm text-[#43624A]">{order.value}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.type}</td>
                      <td className="px-6 py-4 text-[11px] text-gray-500 font-medium">{order.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[11px] font-bold uppercase text-[#43624A] hover:underline">View Order</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center sticky top-8">
             <div className="w-16 h-16 mx-auto mb-4 bg-[#e9ece6] rounded-full flex items-center justify-center text-[#43624A] font-bold text-xl border-2 border-white shadow-sm">
                YA
             </div>
             <h3 className="font-bold text-xs leading-tight uppercase text-[#2A2A2A] mb-1">
               Yateem Airconditioning Company W.L.L
             </h3>
             <p className="text-xs text-gray-500 font-medium">Rosita Evora</p>
             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Admin - Seller</p>
             
             <div className="mt-10 space-y-2 text-left">
                <div className="flex justify-between text-[11px] font-bold text-[#43624A] uppercase tracking-tighter">
                  <span>User Profile Completeness:</span>
                  <span>67%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#43624A] h-full w-[67%] transition-all duration-700 ease-out"></div>
                </div>
                <p className="text-[11px] text-gray-400 mt-4 text-center font-medium">Complete your User Profile.</p>
                <button className="w-full mt-4 bg-[#43624A] text-white py-3 rounded-lg text-sm font-bold hover:bg-[#2A2A2A] transition-all transform hover:-translate-y-0.5 shadow-md">
                  User Profile
                </button>
             </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#25D366] p-4 rounded-full text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
              <MessageSquare fill="white" size={24} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;