import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  MessageCircle,    // Whatsapp
  Menu,
  X
} from 'lucide-react';
import logo from '../assets/LOGO-2.png';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown on click (for mobile/tablet)
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Shared utility classes for dropdown consistency
  const dropdownPanelStyle = "invisible absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 z-50";
  const dropdownPanelStyleMobile = "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-56";
  const cardStyle = "flex gap-4 sm:gap-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 shadow-xl";
  const itemButtonStyle = "flex flex-col items-center gap-2 group/item w-20 sm:w-28";
  const iconContainerStyle = "rounded-lg bg-gray-50 p-2 sm:p-3 group-hover/item:bg-green-50 transition-colors";
  const primaryGreen = "#43624A";

  // Navigation items data
  const navItems = [
    {
      name: 'create',
      icon: SquarePen,
      label: 'Create',
      items: [
        { icon: FileText, label: 'Create Requisition', path: '/requisition-create' },
        { icon: FileSignature, label: 'Create RFX', path: '/requisition-create' },
        { icon: FileCheck, label: 'Create PO', path: '/requisition-create' },
      ]
    },
    {
      name: 'directory',
      icon: Folder,
      label: 'Directory',
      items: [
        { icon: ShieldCheck, label: 'Supplier Directory' },
        { icon: SlidersHorizontal, label: 'Catalog Library' },
      ]
    },
    {
      name: 'settings',
      icon: Settings,
      label: 'Settings',
      items: [
        { icon: ToggleRight, label: 'Account settings' },
        { icon: LayoutGrid, label: 'Master Data' },
        { icon: Users, label: 'User & Teams' },
      ]
    },
    {
      name: 'notification',
      icon: Eye,
      label: 'Notifications',
      hasNotification: true,
      isNotification: true
    },
    {
      name: 'support',
      icon: Send,
      label: 'Support',
      items: [
        { icon: ShieldCheck, label: 'Report a Bug' },
        { icon: SlidersHorizontal, label: 'Live Chat' },
        { icon: MessageCircle, label: 'Whatsapp' },
      ]
    },
  ];

  // Render dropdown content
  const renderDropdownContent = (item) => {
    if (item.isNotification) {
      return (
        <div className="w-80 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden">
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
      );
    }

    return (
      <div className={cardStyle}>
        {item.items.map((subItem, idx) => (
          <button 
            key={idx} 
            className={itemButtonStyle}
            onClick={() => subItem.path && handleNavigation(subItem.path)}
          >
            <div className={iconContainerStyle}>
              <subItem.icon size={24} color={primaryGreen} strokeWidth={1.5} className="sm:size-7" />
            </div>
            <span className="text-center text-xs font-semibold text-gray-600">{subItem.label}</span>
          </button>
        ))}
      </div>
    );
  };

  // Render desktop navigation icons
  const renderDesktopNav = () => (
    <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-gray-500">
      <button className="hover:text-gray-800"><ChevronLeft size={20} strokeWidth={1.5} /></button>

      {navItems.map((item) => (
        <div key={item.name} className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4">
            <item.icon size={20} strokeWidth={1.5} />
            {item.hasNotification && (
              <span className="absolute top-3.5 right-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
            )}
          </button>
          <div className={dropdownPanelStyle}>
            {renderDropdownContent(item)}
          </div>
        </div>
      ))}
    </div>
  );

  // Render mobile/tablet navigation
  const renderMobileNav = () => (
    <div className="flex flex-col gap-4 p-4">
      {/* Search in mobile */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search size={18} strokeWidth={1.5} />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#43624A]"
        />
      </div>

      {/* Company badge in mobile */}
      <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-[#F3F4F6] px-3 py-2 text-xs font-medium uppercase tracking-wide text-gray-700">
        YATEEM AIRCONDITIONING C...
      </div>

      {/* Navigation items */}
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <div key={item.name} className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} strokeWidth={1.5} />
                <span className="font-medium">{item.label}</span>
              </div>
              {!item.isNotification && (
                <span className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}>▼</span>
              )}
            </button>
            
            {/* Mobile dropdown */}
            {openDropdown === item.name && (
              <div className={dropdownPanelStyleMobile}>
                {renderDropdownContent(item)}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Profile in mobile */}
      <div className="flex items-center border-t border-gray-200 pt-4 mt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43624A] text-white">
          <User size={20} />
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold leading-tight text-gray-900">ROSITA EVORA</div>
          <div className="text-[10px] uppercase text-gray-500">Admin | 1GB of 5GB used</div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-[#F5F2EA] px-4 font-sans text-gray-700 flex-shrink-0 relative z-50">
      
      {/* 1. Logo Section - Always visible */}
      <div className="flex items-center gap-0.5">
        <img src={logo} alt="Procubid Logo" className="h-8 w-auto sm:h-10" />
        <span className="text-2xl sm:text-3xl font-extrabold tracking-[0.05em]">
          <span style={{ color: primaryGreen }}>PROCU</span>
          <span className="text-[#7A9C83]">BID</span>
        </span>
      </div>

      {/* 2. Search Section - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:flex flex-1 items-center gap-3 ml-4">
        <div className="relative w-48 lg:w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search size={18} strokeWidth={1.5} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-300 bg-white py-1.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#43624A]"
          />
        </div>
        <div className="hidden lg:flex items-center rounded-lg border border-gray-200 bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-700">
          YATEEM AIRCONDITIONING C...
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* 3. Desktop Navigation Icons Section */}
      {renderDesktopNav()}

      {/* Mobile menu button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 4. Profile Section - Hidden on mobile */}
      <div className="hidden lg:flex items-center border-l border-gray-300 pl-6">
        <div className="mr-3 text-right">
          <div className="text-sm font-bold leading-tight text-gray-900">ROSITA EVORA</div>
          <div className="text-[10px] uppercase text-gray-500">Admin <span className="mx-1">|</span> 1GB of 5GB used</div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43624A] text-white">
          <User size={20} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {renderMobileNav()}
      </div>

    </header>
  );
};

export default Header;

