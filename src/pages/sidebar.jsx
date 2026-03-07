import React, { useState } from 'react';
import { 
  LayoutGrid, 
  FileText, 
  Users, 
  ShoppingCart, 
  BarChart2, 
  FileBarChart, 
  MessageSquare,
  FilePlus,
  Eye,
  Home
} from 'lucide-react';
import { Gavel, CheckSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, active, badge, onClick }) => (
  <div 
    onClick={onClick}
    className={`relative flex flex-col items-center justify-center py-3 cursor-pointer transition-colors w-full flex-shrink-0
      ${active ? 'bg-[#333333] text-white border-r-[3px] border-red-500' : 'text-gray-400 hover:text-white'}`}
  >
    <Icon size={20} strokeWidth={1.5} />
    <span className="text-[10px] mt-1 font-medium text-center px-1 leading-tight whitespace-nowrap">
      {label}
    </span>

    {badge && (
      <div className="absolute top-5 right-6 w-2 h-2 bg-red-500 rounded-full border border-[#1e1e1e]" />
    )}
  </div>
);

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null); 
 
  const navigate = useNavigate();    
const menuItems = [
  { icon: Home, label: 'Home', onClick: () => navigate("/dashboard") },
  { icon: LayoutGrid, label: 'Purchase Request' },
  { icon: FileText, label: 'RFQ/RFP', active: true },
 
  { icon: Users, label: 'Status' },
  { icon: Gavel, label: 'Reverse Auction' },
  { icon: CheckSquare, label: 'Internal Approval' },
  { icon: ShoppingCart, label: 'Purchase Orders' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: FileBarChart, label: 'Reports' },
  { icon: MessageSquare, label: 'Messages', badge: true },
];

  const dropdownItems = [
    { label: 'Create', icon: FilePlus },
    { label: 'View', icon: Eye }
  ];

  return (
    
    <aside className="fixed left-0 top-0 w-[85px] h-screen bg-[#1e1e1e] flex flex-col overflow-hidden">
      <nav className="flex flex-col items-center w-full h-full overflow-hidden">

        {menuItems.map((item, idx) => {
          const hasDropdown = item.label === "Purchase Request" || item.label === "RFQ/RFP" || item.label === "Purchase Orders";
          const isOpen = openMenu === item.label;

          return (
            <div key={idx} className="relative w-full flex-shrink-0">
              
 <SidebarItem
  {...item}
  onClick={() => {
    if (item.label === "Supplier Responses") {
      navigate("/supplier-responses");
    } 
     else if (item.label === "Home") {
      navigate("/dashboard");    
    }
     else if (item.label === "Analytics") {
      navigate("/Analytics-page");    
    }
    else if (item.label === "Messages") {
      navigate("/message-page");    
    }
    else if (item.label === "Reports") {
      navigate("/report-page");
    }
    else if (item.label === "Status") {
      navigate("/supplier-responses");
    }
    else if (hasDropdown) {
      setOpenMenu(isOpen ? null : item.label);
    }
  }}
/>

              {/* Dropdown */}
              {hasDropdown && isOpen && (
                <div className="absolute left-[85px] top-0 w-40 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-200">
                  
                  {dropdownItems.map((dropItem, i) => {
                    const DropIcon = dropItem.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      >
                        <DropIcon size={16} />
                        <span className="text-sm">{dropItem.label}</span>
                      </div>
                    );
                  })}

                </div>
              )}
            </div>
          );
        })}

      </nav>
    </aside>
  );
}

