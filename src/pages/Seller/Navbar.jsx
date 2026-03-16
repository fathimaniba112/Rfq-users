import React from "react";
// 1. ADD THIS IMPORT
import { Link } from "react-router-dom"; 
import { 
  ArrowLeft, ExternalLink, Home, Folder, Settings, 
  Eye, Send, User, LogOut, MessageSquare, BookOpen, FileCheck, 
  ShieldCheck, ListTree, SlidersHorizontal, LayoutGrid, 
  Users, Wallet, Bug, MessageCircle, Phone 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/LOGO-2.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="h-16 bg-[#F5F2EA] border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 right-0 left-0 lg:left-20 z-50">
      
      {/* Brand & Entity Selector */}
      <div className="flex items-center gap-4">
<div className="flex items-center gap-0.5">
  <img src={logo} alt="Procubid Logo" className="h-8 w-auto sm:h-10" />
  <span className="text-2xl sm:text-3xl font-extrabold tracking-[0.05em]">
    <span className="text-[#43624A]">PROCU</span>
    <span className="text-[#7A9C83]">BID</span>
  </span>
</div>        <div className="border border-gray-300 rounded-full px-4 py-1.5 bg-white flex items-center gap-2 cursor-pointer shadow-sm hover:border-[#43624A] transition-all">
          <span className="text-[10px] md:text-[11px] font-bold text-gray-600 uppercase tracking-wide truncate max-w-[140px] md:max-w-none">
            Yateem Airconditioning Company W.L.L
          </span>
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>
      </div>

      {/* Navigation Icons Section */}
      <div className="flex items-center gap-3 md:gap-5 text-gray-500">
        <div className="flex items-center gap-2 md:gap-4 pr-3 border-r border-gray-200 h-10">
          
          <ArrowLeft size={20} className="cursor-pointer hover:text-[#43624A] transition-colors" />

          {/* 1. Create Quote Dropdown */}
          <div className="relative h-full flex items-center group">
            <ExternalLink size={20} className="cursor-pointer group-hover:text-[#43624A] transition-colors" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 md:translate-x-0 md:right-0 pt-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
              <DropdownWrapper width="w-[320px]">
                <div className="grid grid-cols-3 gap-1 p-4">
                  <DropdownAction 
                    icon={<MessageSquare size={34} className="text-blue-600" />} 
                    label="Create Quote" 
                    path="/seller/create-quote" 
                  />
<DropdownAction
  icon={<BookOpen size={34} className="text-blue-600" />}
  label="Create Proposal"
  path="/seller/create-proposal"
/>                  <DropdownAction icon={<FileCheck size={34} className="text-blue-600" />} label="Accept Order" path="/seller/orders" />
                </div>
              </DropdownWrapper>
            </div>
          </div>

          <Home size={20} className="cursor-pointer hover:text-[#43624A]" />

          {/* 2. Directory Dropdown */}
          <div className="relative h-full flex items-center group">
            <Folder size={20} className="cursor-pointer group-hover:text-[#43624A]" />
            <div className="absolute top-full right-[-50px] md:right-0 pt-2 hidden group-hover:block">
              <DropdownWrapper width="w-[240px]">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <DropdownAction icon={<ShieldCheck size={34} className="text-blue-600" />} label="Customer Directory" path="/seller/customer-directory" />
                  <DropdownAction icon={<ListTree size={34} className="text-blue-600" />} label="Catalog Library" path="/seller/catalog" />
                </div>
              </DropdownWrapper>
            </div>
          </div>

          {/* 3. Settings Dropdown */}
          <div className="relative h-full flex items-center group">
            <Settings size={20} className="cursor-pointer group-hover:text-[#43624A]" />
            <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
              <DropdownWrapper width="w-[340px]">
                <div className="grid grid-cols-4 gap-1 p-3">
                  <DropdownAction icon={<SlidersHorizontal size={28} className="text-blue-600" />} label="Account settings" path="/seller/company-information" />
                  <DropdownAction icon={<LayoutGrid size={28} className="text-blue-600" />} label="Master Data" path="/seller/catalog" />
                  <DropdownAction icon={<Users size={28} className="text-blue-600" />} label="User & Teams" path="/seller/users-Roles" />
                  <DropdownAction icon={<Wallet size={28} className="text-blue-600" />} label="Wallet" path="/seller/wallet-home" />
                </div>
              </DropdownWrapper>
            </div>
          </div>

          {/* 4. Support Dropdown */}
          <div className="relative h-full flex items-center group">
            <Send size={20} className="cursor-pointer group-hover:text-[#43624A]" />
            <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
              <DropdownWrapper width="w-[280px]">
                <div className="grid grid-cols-3 gap-1 p-4">
                  <DropdownAction icon={<ShieldCheck size={32} className="text-blue-600" />} label="Report a Bug" path="/report-bug" />
                  <DropdownAction icon={<MessageCircle size={32} className="text-blue-600" />} label="Live Chat" path="/chat" />
                  <DropdownAction icon={<Phone size={32} className="text-blue-600" />} label="Whatsapp" path="/whatsapp" />
                </div>
              </DropdownWrapper>
            </div>
          </div>

          {/* 5. Notifications */}
          <div className="relative h-full flex items-center group">
            <Eye size={20} className="cursor-pointer group-hover:text-[#43624A]" />
            <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
              <DropdownWrapper width="w-[380px]">
                <div className="p-4">
                  <h3 className="text-center text-blue-600 font-bold text-lg border-b pb-3 mb-3">Notification</h3>
                  <div className="space-y-4 max-h-60 overflow-y-auto custom-scrollbar">
                    <NotificationItem id="53454" text="Installation of new cameras at SEEF Muharraq mall" />
                    <NotificationItem id="53488" text="Plumbing Material for Al..." />
                  </div>
                  <button className="w-full text-center text-blue-600 font-bold mt-4 pt-3 border-t hover:underline text-sm">
                    View all (2570)
                  </button>
                </div>
              </DropdownWrapper>
            </div>
          </div>
        </div>

        {/* User Profile */}
       {/* 4. Profile Section with HOVER menu */}
<div className="hidden lg:flex group relative items-center border-l border-gray-300 pl-6 h-full cursor-pointer">
  
  {/* Profile Text */}
  <div className="mr-3 text-right">
    <div className="text-sm font-bold leading-tight text-gray-900 uppercase">
      ROSITA EVORA
    </div>
    <div className="text-[10px] uppercase text-gray-500">
      Admin <span className="mx-1">|</span> 1GB of 5GB used
    </div>
  </div>

  {/* Profile Icon */}
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43624A] text-white">
    <User size={20} />
  </div>

  {/* Hover Menu Box */}
  <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[60]">

    {/* My Account */}
    <button
      onClick={() => navigate("/profile-basic")}
      className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
    >
      <User size={18} className="mr-3 text-gray-400" />
      My Account
    </button>

    <div className="border-t border-gray-100"></div>

    {/* Logout */}
    <button
      className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
    >
      <LogOut size={18} className="mr-3 text-red-400" />
      Sign Out
    </button>

  </div>
</div>
</div>
</nav>
  );
};

/* --- Helper Components --- */

const DropdownWrapper = ({ children, width }) => (
  <div className={`${width} bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden`}>
    {children}
  </div>
);

// 2. UPDATE THIS COMPONENT TO USE THE PATH PROP
const DropdownAction = ({ icon, label, path = "#" }) => (
  <Link 
    to={path} 
    className="flex flex-col items-center justify-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group/item no-underline decoration-transparent"
  >
    <div className="group-hover/item:scale-110 transition-transform duration-200">
      {icon}
    </div>
    <span className="text-[11px] font-semibold text-gray-500 text-center leading-tight">
      {label}
    </span>
  </Link>
);

const NotificationItem = ({ id, text }) => (
  <div className="text-left border-b border-gray-50 last:border-0 pb-3">
    <p className="text-[13px] font-bold text-gray-800">Request for Quotation Received</p>
    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
      You have received a request for quotation from PROCURA W.L.L. with RFQ number {id} RFQ - {text}...
    </p>
  </div>
);

export default Navbar;