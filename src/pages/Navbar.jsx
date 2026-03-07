import React from 'react';
import { 
  Search, 
  ChevronLeft, 
  SquarePen, 
  Folder, 
  Settings, 
  Eye, 
  Send, 
  User,
  FileText,        // Create Requisition
  FileSignature,   // Create RFX
  FileCheck,       // Create PO
  ShieldCheck,     // Supplier Directory / Report a Bug
  SlidersHorizontal, // Catalog Library / Live Chat
  ToggleRight,     // Account Settings
  LayoutGrid,      // Master Data
  Users,           // User & Teams
  MessageCircle     // Whatsapp
} from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  // Shared utility classes for dropdown consistency
  const dropdownPanelStyle = "invisible absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 z-50";
  const cardStyle = "flex gap-8 rounded-xl border border-gray-100 bg-white p-6 shadow-xl";
  const itemButtonStyle = "flex flex-col items-center gap-2 group/item w-28";
  const iconContainerStyle = "rounded-lg bg-gray-50 p-3 group-hover/item:bg-green-50 transition-colors";
  const primaryGreen = "#43624A";

  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-[#F5F2EA] px-4 font-sans text-gray-700 flex-shrink-0">
      
      {/* 1. Logo Section */}
      <div className="mr-4 flex items-center gap-0.5">
        <img src={logo} alt="Procubid Logo" className="h-10 w-auto" />
        <span className="text-3xl font-extrabold tracking-[0.05em]">
          <span style={{ color: primaryGreen }}>ROCU</span>
          <span className="text-[#7A9C83]">BID</span>
        </span>
      </div>

      {/* 2. Search Section */}
      <div className="flex flex-1 items-center gap-3">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search size={18} strokeWidth={1.5} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#43624A]"
          />
        </div>
        <div className="flex items-center rounded-lg border border-gray-200 bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-700">
          YATEEM AIRCONDITIONING C...
        </div>
      </div>

      {/* 3. Navigation Icons Section */}
      <div className="flex items-center gap-6 px-8 text-gray-500">
        <button className="hover:text-gray-800"><ChevronLeft size={20} strokeWidth={1.5} /></button>

        {/* CREATE MENU (SquarePen) */}
        <div className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4"><SquarePen size={20} strokeWidth={1.5} /></button>
          <div className={dropdownPanelStyle}>
            <div className={cardStyle}>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><FileText size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Create Requisition</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><FileSignature size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Create RFX</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><FileCheck size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Create PO</span>
              </button>
            </div>
          </div>
        </div>

        {/* DIRECTORY MENU (Folder) */}
        <div className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4"><Folder size={20} strokeWidth={1.5} /></button>
          <div className={dropdownPanelStyle}>
            <div className={cardStyle}>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><ShieldCheck size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Supplier Directory</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><SlidersHorizontal size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Catalog Library</span>
              </button>
            </div>
          </div>
        </div>

        {/* SETTINGS MENU */}
        <div className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4"><Settings size={20} strokeWidth={1.5} /></button>
          <div className={dropdownPanelStyle}>
            <div className={cardStyle}>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><ToggleRight size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Account settings</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><LayoutGrid size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Master Data</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><Users size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">User & Teams</span>
              </button>
            </div>
          </div>
        </div>

        {/* NOTIFICATION MENU (Eye) */}
        <div className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4 relative">
            <Eye size={20} strokeWidth={1.5} />
            <span className="absolute top-3.5 right-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
          </button>
          <div className={`${dropdownPanelStyle} w-80`}>
            <div className="flex flex-col rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-sm font-bold text-[#43624A]">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <button className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-50">
                  <p className="text-xs font-bold text-gray-900">Request for RFQ Approval</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">You have received an approval request against RFQ #78835...</p>
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors">
                  <p className="text-xs font-bold text-gray-900">Request for PR Approval</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">You have received an approval request against Purchase Request #31802...</p>
                </button>
              </div>
              <button className="w-full py-2.5 bg-white text-center text-[11px] font-bold text-[#43624A] border-t border-gray-100 hover:bg-gray-50">
                View all (1182)
              </button>
            </div>
          </div>
        </div>

        {/* SUPPORT MENU (Send) */}
        <div className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4">
            <Send size={20} strokeWidth={1.5} className="-rotate-12" />
          </button>
          <div className={dropdownPanelStyle}>
            <div className={cardStyle}>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><ShieldCheck size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Report a Bug</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><SlidersHorizontal size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Live Chat</span>
              </button>
              <button className={itemButtonStyle}>
                <div className={iconContainerStyle}><MessageCircle size={28} color={primaryGreen} strokeWidth={1.5} /></div>
                <span className="text-center text-xs font-semibold text-gray-600">Whatsapp</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Profile Section */}
      <div className="flex items-center border-l border-gray-300 pl-6">
        <div className="mr-3 text-right">
          <div className="text-sm font-bold leading-tight text-gray-900">ROSITA EVORA</div>
          <div className="text-[10px] uppercase text-gray-500">Admin <span className="mx-1">|</span> 1GB of 5GB used</div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43624A] text-white">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;