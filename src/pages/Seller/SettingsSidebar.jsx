import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Settings, 
  Users, 
  Database, 
  Wallet, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X 
} from 'lucide-react';

const SettingsSidebar = () => {
  // 1. State for Mobile responsiveness and Dropdown management
  const [isOpen, setIsOpen] = useState(true);
  const [openSection, setOpenSection] = useState('');

  // 2. Consistent Color Palette
  const colors = {
    dark: '#2A2A2A',
    sage: '#7A9C83',
    cream: '#F5F2EA',
    activeBlue: '#2563eb',
    activeBg: '#f8faff'
  };

  // 3. Centralized Navigation Configuration
  const menuConfig = [
    {
      name: 'Account Settings',
      icon: <Settings size={20} />,
      subItems: [
        { name: 'Company Information', path: '/seller/company-information' },
        { name: 'Profile Information', path: '/seller/profile-basic' },
        { name: 'Region Settings', path: '/seller/region-settings' },
        { name: 'Points of Contact', path: '/seller/point-of-contact' },
        { name: 'Others', path: '/seller/others' }
      ]
    },
    {
      name: 'Users & Teams',
      icon: <Users size={20} />,
      subItems: [
        { name: 'User Roles', path: '/seller/users-Roles' },
        { name: 'Add User Roles', path: '/seller/users/add-roles' },
        { name: 'Users', path: '/seller/users/list' }
      ]
    },
    {
      name: 'Master Data Management',
      icon: <Database size={20} />,
      subItems: [
        { name: 'Catalog', path: '/seller/catalog' },
        { name: 'Customer Types', path: '/seller/customer-types' },
        { name: 'Customer Directory', path: '/seller/customer-directory' },
        { name: 'Email Subscription', path: '/seller/email-subscriptions' },
        { name: 'Received Questionnaires', path: '/seller/received-questions' }
      ]
    },
    {
      name: 'Wallet',
      icon: <Wallet size={20} />,
      subItems: [
        { name: 'Home', path: '/seller/wallet-home' },
        { name: 'Transactions', path: '/seller/wallet-transactions' }
      ]
    }
  ];

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <aside 
        className={`w-80 h-screen bg-[#3D523E] p-6 text-white font-sans overflow-y-auto custom-scrollbar'

        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex flex-col h-full py-6">
          {/* Sidebar Header */}
          <div className="px-6 mb-8">
            <h2 className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.sage }}>
              Settings
            </h2>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto">
            {menuConfig.map((category) => {
              const isExpanded = openSection === category.name;
              
              return (
                <div key={category.name} className="relative">
                  {/* Parent Category Header */}
                  <div 
                    onClick={() => toggleSection(category.name)}
                    className="flex items-center justify-between px-6 py-4 cursor-pointer transition-all hover:bg-gray-50 group"
                    style={{ 
                      color: isExpanded ? colors.activeBlue : colors.white,
                      backgroundColor: isExpanded ? colors.activeBg : 'transparent'
                    }}
                  >
                    {/* Blue active vertical bar (Left) */}
                    {isExpanded && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                    )}
                    
                    <div className="flex items-center gap-4">
                      <span className={isExpanded ? "text-blue-600" : "opacity-70 group-hover:opacity-100"}>
                        {category.icon}
                      </span>
                      <span className="font-bold">{category.name}</span>
                    </div>
                    
                    <div className="transition-transform duration-200">
                      {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} className="opacity-40" />}
                    </div>
                  </div>

                  {/* Dropdown/Sub-menu Items */}
                  {isExpanded && (
                    <div className="bg-white border-b border-gray-50">
                      {category.subItems.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) => 
                            `block pl-16 py-3 pr-4 text-sm transition-all duration-200 ${
                              isActive 
                              ? 'text-blue-600 font-bold border-l-4 border-blue-600 bg-blue-50/50' 
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SettingsSidebar;