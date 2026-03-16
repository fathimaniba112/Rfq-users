import { FileText, ClipboardCheck, ShoppingCart } from "lucide-react";

const Dashboard = () => {
  return (
    <main className="p-8 bg-brand-bg min-h-screen">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
        
        {/* Main Section */}
        <div className="col-span-9 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-brand-text mb-1">Current Stats</h2>
            <p className="text-xs text-gray-400 mb-8">(Last 30 days)</p>
            
            <div className="grid grid-cols-3 gap-8">
              <StatCard title="RFXs Bought" count="0" ytd="7" icon={<FileText className="text-gray-400" size={24}/>} />
              <StatCard title="Quotations Submitted" count="0" ytd="6" icon={<ClipboardCheck className="text-gray-400" size={24}/>} />
              <StatCard title="Orders Received" count="0" ytd="0" icon={<ShoppingCart className="text-gray-400" size={24}/>} />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-brand-text">Active RFXs</h2>
            <p className="text-sm text-gray-500 mt-4 font-medium">You don't have any active RFX.</p>
          </div>
        </div>

        {/* Profile Sidebar */}
        <div className="col-span-3">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#e9ece6] rounded-full mx-auto flex items-center justify-center text-brand-text font-bold text-xl mb-4">
              YA
            </div>
            <h3 className="text-[12px] font-bold text-brand-text uppercase leading-tight mb-2 px-2">
              Yateem Airconditioning Company W.L.L
            </h3>
            <p className="text-xs text-gray-500 font-medium">Rosita Evora</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-6">Admin - Seller</p>
            
            <div className="mb-6">
              <div className="flex justify-center text-[11px] font-bold text-brand-green mb-2">
                User Profile Completeness: 67%
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div className="bg-brand-green h-full w-[67%] rounded-full"></div>
              </div>
              <p className="text-[11px] text-gray-400 mt-3 font-medium">Complete your User Profile.</p>
            </div>

            <button className="w-full bg-brand-green text-white py-2.5 rounded-lg text-sm font-bold hover:bg-brand-hover transition-all cursor-pointer">
              User Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

const StatCard = ({ title, count, ytd, icon }) => (
  <div>
    <p className="text-[13px] font-bold text-brand-text mb-4">{title}</p>
    <div className="flex items-center gap-4">
      {icon}
      <span className="text-4xl font-black text-gray-800">{count}</span>
    </div>
    <div className="mt-4 space-y-0.5">
      <p className="text-[10px] text-gray-400 font-bold uppercase">0 (Last 7 Days)</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase">{ytd} RFXs (Year to Date)</p>
    </div>
  </div>
);

export default Dashboard;