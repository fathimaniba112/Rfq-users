import React from 'react';
import { 
  Search, 
  ChevronLeft, 
  Home, 
  SquarePen, 
  Folder, 
  Settings, 
  Eye, 
  Send, 
  User 
} from 'lucide-react';
import logo from '../assets/logo.png';   // import the image

const Header = () => {
  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-[#F9F7F2] px-4 font-sans text-gray-700 flex-shrink-0">
      
      {/* 1. Logo Section */}
      <div className="mr-4 flex items-center gap-2">
        <img 
          src={logo}
          alt="Procubid Logo" 
          className="h-10 w-auto" 
        />
<span className="text-3xl font-extrabold tracking-[0.2em]">
  <span className="text-[#1B4332]">ROCU</span>
  <span className="text-[#7FA68A]">BID</span>
</span>
      </div>

      {/* 2. Search & Filter Section */}
      <div className="flex flex-1 items-center gap-3">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search size={18} strokeWidth={1.5} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
          />
        </div>

        <div className="flex items-center rounded-lg border border-gray-200 bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-700">
          YATEEM AIRCONDITIONING C...
        </div>
      </div>

      {/* 3. Navigation Icons Section */}
      <div className="flex items-center gap-6 px-8 text-gray-500">
        <button className="hover:text-gray-800"><ChevronLeft size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-gray-800"><Home size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-gray-800"><SquarePen size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-gray-800"><Folder size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-gray-800"><Settings size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-gray-800"><Eye size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-gray-800"><Send size={20} strokeWidth={1.5} className="-rotate-12" /></button>
      </div>

      {/* 4. Profile Section */}
      <div className="flex items-center border-l border-gray-300 pl-6">
        <div className="mr-3 text-right">
          <div className="text-sm font-bold leading-tight text-gray-900">ROSITA EVORA</div>
          <div className="text-[10px] uppercase text-gray-500">
            Admin <span className="mx-1">|</span> 1GB of 5GB used
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3D5A44] text-white">
          <User size={20} />
        </div>
      </div>
      
    </header>
  );
};

export default Header;