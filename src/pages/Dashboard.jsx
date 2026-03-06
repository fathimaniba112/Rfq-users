import React from 'react';
import { Info } from 'lucide-react';
import StatCard from '../pages/StatCard';
import PendingAction from '../pages/PendingAction';
import RfqChart from '../pages/RfqChart';
import RFQBreakdown from '../pages/Breakdown';
import TableCard from '../pages/Tablecard';

export default function Dashboard() {
  // Dashboard Data
  const dashboardData = {
    rfqs: [
      {
        id: "29836",
        title: 'Aluminium Filter Sheet  लाइव 40"x64"x1"',
        date: "Feb 26, 2026"
      }
    ],
    pos: [
      {
        id: "19991",
        vendor: "YATEEM AIRCONDITIONING",
        date: "Nov 16, 2025"
      },
      {
        id: "19990",
        vendor: "YATEEM AIRCONDITIONING",
        date: "Novcff 16, 2025"
      }
    ],
    qtns: [
      {
        id: "79065",
        vendor: "REFACS SERVICES W.L.L",
        date: "Mar 1, 2026"
      },
      {
        id: "79062",
        vendor: "TOP SOURCE TRADING",
        date: "Mar 1, 2026"
      }
    ]
  };

  return (
    <main className="p-8 bg-[#F5F2EA] min-h-screen font-sans">
      <div className="max-w-[1600px] mx-auto space-y-6">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Column */}
          <div className="flex-[2] space-y-6">

            {/* RFQ Stats */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-base font-bold text-[#1B4332] flex items-center">
                    RFQ Stats
                    <Info size={14} className="ml-1 text-gray-300" />
                  </h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                    (Last 30 Days)
                  </p>
                </div>
                <select className="bg-white border border-gray-200 rounded-md px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
                  <option>RFQ</option>
                  <option>Order</option>
                </select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard title="RFQ Created" value="13" d7="3" ytd="27" />
                <StatCard title="Est. RFQ Value (BHD)" value="0" d7="0" ytd="0" />
                <StatCard title="Supplier Responsiveness" value="9.4%" d7="7.7%" ytd="8.1%" />
                <StatCard title="Avg. Quotes/RFQ" value="45" d7="8" ytd="78" />
              </div>
            </section>

            {/* Chart */}
            <RfqChart />
          </div>

          {/* Right Column - Pending Actions */}
          <aside className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[#1B4332] font-bold text-base">
                Actions Pending
              </h2>
              <select className="bg-white border border-gray-200 rounded-md px-2 py-1 text-xs font-semibold text-gray-500">
                <option>Please Select</option>
              </select>
            </div>

            <div className="space-y-6">
              <PendingAction
                id="79061"
                org="REFACS SERVICES W.L.L."
                date="01-Mar-2026 14:35 PM"
              />
              <PendingAction
                id="79062"
                org="REFACS SERVICES W.L.L."
                date="01-Mar-2026 12:20 PM"
              />
              <PendingAction
                id="79063"
                org="AL-A'ALI CO."
                date="28-Feb-2026 09:15 AM"
              />
            </div>
          </aside>
        </div>

        {/* RFQ Breakdown */}
        <section className="w-full">
          <RFQBreakdown />
        </section>

        {/* Bottom Table Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Active RFQs */}
          <TableCard title="Active RFQs">
            {dashboardData.rfqs.map((rfq) => (
              <div key={rfq.id} className="border-b pb-3 last:border-0">
                <p className="font-semibold text-[#2A2A2A] text-sm">
                  {rfq.title}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {rfq.date}
                </p>
                <p className="text-[#7A9C83] font-bold text-xs mt-2">
                  RFQ #{rfq.id}
                </p>
              </div>
            ))}
          </TableCard>

          {/* Recent Purchase Orders */}
          <TableCard title="Recent Purchase Orders">
            {dashboardData.pos.map((po) => (
              <div
                key={po.id}
                className="border-b pb-3 last:border-0"
              >
                <p className="font-semibold text-[#2A2A2A] text-xs uppercase">
                  {po.vendor}
                </p>
                <p className="text-gray-400 text-[10px] mt-1">
                  {po.date}
                </p>
                <p className="text-[#7A9C83] font-bold text-xs mt-2">
                  PO #{po.id}
                </p>
              </div>
            ))}
          </TableCard>

          {/* Recent Quotations */}
          <TableCard title="Recent Quotations">
            {dashboardData.qtns.map((qtn) => (
              <div key={qtn.id} className="border-b pb-3 last:border-0">
                <p className="font-semibold text-[#2A2A2A] text-xs uppercase">
                  {qtn.vendor}
                </p>
                <p className="text-gray-400 text-[10px] mt-1">
                  {qtn.date}
                </p>
                <p className="text-[#7A9C83] font-bold text-xs mt-2">
                  QTN #{qtn.id}
                </p>
              </div>
            ))}
          </TableCard>

        </div>
      </div>
    </main>
  );
}