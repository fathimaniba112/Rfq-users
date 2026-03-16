import { LayoutDashboard, FileText, ClipboardCheck, ShoppingCart, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: "Dashboard", path: "/seller/dashboard" }, // New Dashboard Icon
    { icon: <FileText size={22} />, label: "RFX Bought", path: "/seller/rfx-bought" },
    { icon: <ClipboardCheck size={22} />, label: "Quotations", path: "/seller/quotations" },
    { icon: <ShoppingCart size={22} />, label: "Orders", path: "/seller/orders" },
    { icon: <MessageSquare size={22} />, label: "Messages", path: "/seller/messages" },
  ];

  return (
    <aside className="w-20 h-screen bg-[#1A1A1A] flex flex-col items-center py-8 fixed left-0 top-0 z-20 border-r border-white/5">
      {/* Logo Section */}
      <div className="mb-12">
         
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-y-8 w-full">
        {menuItems.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center cursor-pointer group no-underline transition-all duration-200
              ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}
            `}
          >
            {({ isActive }) => (
              <>
                <div className={`transition-transform duration-200 group-hover:scale-110 ${
                  isActive 
                    ? 'text-[#00FF94] drop-shadow-[0_0_8px_rgba(0,255,148,0.4)]' 
                    : 'text-white'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] text-center mt-2 px-1 leading-tight uppercase tracking-wider font-bold transition-colors ${
                  isActive ? 'text-[#00FF94]' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
                
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute left-0 w-1 h-8 bg-[#00FF94] rounded-r-full shadow-[2px_0_10px_rgba(0,255,148,0.5)]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;