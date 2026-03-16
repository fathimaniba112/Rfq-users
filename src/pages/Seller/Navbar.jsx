import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, ExternalLink, Home, Folder, Settings, 
  Eye, Send, User, LogOut, MessageSquare, BookOpen, FileCheck, 
  ShieldCheck, ListTree, SlidersHorizontal, LayoutGrid, 
  Users, Wallet, Bug, MessageCircle, Phone, UserCog2, Menu, X
} from "lucide-react";
import logo from "../../assets/LOGO-2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isBuyer = location.pathname.startsWith("/buyer");

  const toggleMode = () => {
    if (isBuyer) {
      navigate("/seller/dashboard");
    } else {
      navigate("/buyer/dashboard");
    }
  };

  return (
    <>
      <nav className="h-16 bg-[#F5F2EA] border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 right-0 left-0 lg:left-20 z-50">
        
        {/* Left Section: Brand & Entity */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-0.5">
            <img src={logo} alt="Procubid Logo" className="h-7 w-auto sm:h-9 md:h-10" />
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.05em] hidden xs:block">
              <span className="text-[#43624A]">PROCU</span>
              <span className="text-[#7A9C83]">BID</span>
            </span>
          </div>

          <div className="hidden sm:flex border border-gray-300 rounded-full px-4 py-1.5 bg-white items-center gap-2 cursor-pointer shadow-sm hover:border-[#43624A] transition-all">
            <span className="text-[10px] md:text-[11px] font-bold text-gray-600 uppercase tracking-wide truncate max-w-[140px] md:max-w-none">
              Yateem Airconditioning Company W.L.L
            </span>
            <span className="text-gray-400 text-[10px]">▼</span>
          </div>
        </div>

        {/* Right Section: Icons & Hamburger */}
        <div className="flex items-center gap-3 md:gap-5 text-gray-500">
          
          {/* Desktop-only Icon Group (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 md:gap-4 pr-3 border-r border-gray-200 h-10">
            
            <button
              onClick={toggleMode}
              title={isBuyer ? "Switch to Seller Console" : "Switch to Buyer Console"}
              className="hover:text-gray-800"
            >
              <UserCog2 size={20} strokeWidth={1.5} />
            </button>

            {/* 1. Create Quote Dropdown */}
            <div className="relative h-full flex items-center group">
              <ExternalLink size={20} className="cursor-pointer group-hover:text-[#43624A] transition-colors" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                <DropdownWrapper width="w-[320px]">
                  <div className="grid grid-cols-3 gap-1 p-4">
                    <DropdownAction icon={<MessageSquare size={34} className="text-grey-600" />} label="Create Quote" path="/seller/create-quote" />
                    <DropdownAction icon={<BookOpen size={34} className="text-grey-600" />} label="Create Proposal" path="/seller/create-proposal" />
                    <DropdownAction icon={<FileCheck size={34} className="text-grey-600" />} label="Accept Order" path="/seller/orders" />
                  </div>
                </DropdownWrapper>
              </div>
            </div>

            <Home size={20} className="cursor-pointer hover:text-[#43624A]" onClick={() => navigate("/")} />

            {/* 2. Directory Dropdown */}
            <div className="relative h-full flex items-center group">
              <Folder size={20} className="cursor-pointer group-hover:text-[#43624A]" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
                <DropdownWrapper width="w-[240px]">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <DropdownAction icon={<ShieldCheck size={34} className="text-grey-600" />} label="Customer Directory" path="/seller/customer-directory" />
                    <DropdownAction icon={<ListTree size={34} className="text-grey-600" />} label="Catalog Library" path="/seller/catalog" />
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
                    <DropdownAction icon={<SlidersHorizontal size={28} className="text-grey-600" />} label="Account settings" path="/seller/company-information" />
                    <DropdownAction icon={<LayoutGrid size={28} className="text-grey-600" />} label="Master Data" path="/seller/catalog" />
                    <DropdownAction icon={<Users size={28} className="text-grey-600" />} label="User & Teams" path="/seller/users-Roles" />
                    <DropdownAction icon={<Wallet size={28} className="text-grey-600" />} label="Wallet" path="/seller/wallet-home" />
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
                    <DropdownAction icon={<ShieldCheck size={32} className="text-grey-600" />} label="Report a Bug" path="/report-bug" />
                    <DropdownAction icon={<MessageCircle size={32} className="text-grey-600" />} label="Live Chat" path="/chat" />
                    <DropdownAction icon={<Phone size={32} className="text-grey-600" />} label="Whatsapp" path="/whatsapp" />
                  </div>
                </DropdownWrapper>
              </div>
            </div>

            {/* 5. Notifications Dropdown */}
            <div className="relative h-full flex items-center group">
              <Eye size={20} className="cursor-pointer group-hover:text-[#43624A]" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
                <DropdownWrapper width="w-[380px]">
                  <div className="p-4">
                    <h3 className="text-center text-grey-600 font-bold text-lg border-b pb-3 mb-3">Notification</h3>
                    <div className="space-y-4 max-h-60 overflow-y-auto custom-scrollbar">
                      <NotificationItem id="53454" text="Installation of new cameras at SEEF Muharraq mall" />
                      <NotificationItem id="53488" text="Plumbing Material for Al..." />
                    </div>
                    <button className="w-full text-center text-grey-600 font-bold mt-4 pt-3 border-t hover:underline text-sm">
                      View all (2570)
                    </button>
                  </div>
                </DropdownWrapper>
              </div>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="group relative flex items-center md:pl-6 h-full cursor-pointer">
            <div className="hidden lg:block mr-3 text-right">
              <div className="text-sm font-bold leading-tight text-gray-900 uppercase">ROSITA EVORA</div>
              <div className="text-[10px] uppercase text-gray-500">Admin <span className="mx-1">|</span> 1GB of 5GB used</div>
            </div>

            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#43624A] text-white">
              <User size={20} />
            </div>

            {/* Profile Hover Menu (Desktop Only) */}
            <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[60]">
              <button
                onClick={() => navigate("/profile-basic")}
                className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <User size={18} className="mr-3 text-gray-400" /> My Account
              </button>
              <div className="border-t border-gray-100"></div>
              <button className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors">
                <LogOut size={18} className="mr-3 text-red-400" /> Sign Out
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle (Positioned on the far right) */}
          <button 
            className="lg:hidden p-1 text-gray-600 hover:bg-gray-100 rounded ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar Overlay (Sliding from Right) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Sidebar Content (Right aligned) */}
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <div className="font-extrabold text-[#43624A] text-xl">MENU</div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1"><X size={24} /></button>
            </div>
            
            <nav className="flex flex-col gap-5 overflow-y-auto">
              {/* User Profile in Mobile Menu */}
              <div className="bg-gray-50 p-4 rounded-xl mb-2">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Signed in as</p>
                <p className="font-bold text-gray-800">ROSITA EVORA</p>
                <p className="text-[10px] text-gray-500 uppercase">Admin | 1GB of 5GB used</p>
              </div>

              <MobileNavLink icon={<Home size={22}/>} label="Home" onClick={() => {navigate("/"); setIsMobileMenuOpen(false)}} />
              <MobileNavLink 
                icon={<UserCog2 size={22}/>} 
                label={isBuyer ? "Switch to Seller" : "Switch to Buyer"} 
                onClick={() => {toggleMode(); setIsMobileMenuOpen(false)}} 
              />
              
              <div className="h-px bg-gray-100 my-2" />
              
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Main Actions</p>
              <MobileNavLink icon={<MessageSquare size={22}/>} label="Create Quote" onClick={() => {navigate("/seller/create-quote"); setIsMobileMenuOpen(false)}} />
              <MobileNavLink icon={<BookOpen size={22}/>} label="Create Proposal" onClick={() => {navigate("/seller/create-proposal"); setIsMobileMenuOpen(false)}} />
              <MobileNavLink icon={<ShieldCheck size={22}/>} label="Customer Directory" onClick={() => {navigate("/seller/customer-directory"); setIsMobileMenuOpen(false)}} />
              
              <div className="h-px bg-gray-100 my-2" />
              
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Settings & Support</p>
              <MobileNavLink icon={<Settings size={22}/>} label="Account Settings" onClick={() => {navigate("/seller/company-information"); setIsMobileMenuOpen(false)}} />
              <MobileNavLink icon={<Phone size={22}/>} label="Live Support" onClick={() => {navigate("/chat"); setIsMobileMenuOpen(false)}} />
              <MobileNavLink icon={<Eye size={22}/>} label="Notifications" onClick={() => setIsMobileMenuOpen(false)} />

              <div className="mt-auto border-t pt-5">
                <MobileNavLink icon={<LogOut size={22}/>} label="Sign Out" className="text-red-500" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

/* --- Helper Components --- */

const DropdownWrapper = ({ children, width }) => (
  <div className={`${width} bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden`}>
    {children}
  </div>
);

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

const MobileNavLink = ({ icon, label, onClick, className = "" }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-4 text-gray-600 hover:text-[#43624A] font-semibold text-base transition-colors ${className}`}
  >
    <span className="text-gray-400">{icon}</span> {label}
  </button>
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