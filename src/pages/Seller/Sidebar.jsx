import { FileText, ClipboardCheck, ShoppingCart, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
const menuItems = [
  { icon: <FileText size={20} />, label: "RFX Bought", path: "/seller/rfx-bought" },
  { icon: <ClipboardCheck size={20} />, label: "Quotations", path: "/seller/quotations" },
  { icon: <ShoppingCart size={20} />, label: "Orders", path: "/seller/orders" },
  { icon: <MessageSquare size={20} />, label: "Messages", path: "/seller/messages" },
];

  return (
    <aside className="w-20 h-screen bg-[#2A2A2A] flex flex-col items-center py-6 fixed left-0 top-0 z-20">
      <div className="mb-10">
        <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-bold text-xs">P</div>
      </div>
      <nav className="flex flex-col gap-y-10">
        {menuItems.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center cursor-pointer group px-1 no-underline
              ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
            `}
          >
            {({ isActive }) => (
              <>
                <div className={`transition-colors ${isActive ? 'text-[#7A9C83]' : 'text-gray-400 group-hover:text-[#7A9C83]'}`}>
                  {item.icon}
                </div>
                <span className={`text-[9px] text-center mt-2 leading-tight uppercase font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;