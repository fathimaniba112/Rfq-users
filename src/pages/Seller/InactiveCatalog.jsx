import React from 'react';
import { Search, Plus, Upload, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";
import { useNavigate } from "react-router-dom";
const  InactiveCatalogPage = () => {
  // Color palette constants
  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A',
    secondary: '#7A9C83',
    bg: '#F5F2EA',
  };
  const navigate = useNavigate();

  return (
      <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left: Branding & Description */}
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-3" style={{ color: colors.dark }}>Catalog</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Predefine your frequently or commonly purchased items in your catalog to ensure 
                data consistency and hygiene, <br></br>completeness of information in your requisitions, 
                and minimize off-catalog or maverick spend.
              </p>
            </div>

            {/* Right: Actions */}
         <div className="flex items-center gap-3">
  <button
    onClick={() => navigate("/inactive-catalog")}
    className="text-sm font-medium transition-colors hover:opacity-80"
    style={{ color: colors.primary }}
  >
    Show Active Items
  </button>

  <button
    onClick={() => navigate("/add-catalog")}
    className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-all hover:bg-gray-50"
    style={{ borderColor: colors.primary, color: colors.primary }}
  >
    <Plus size={16} />
    Add a New Item
  </button>

  <button
    onClick={() => navigate("/bulk-catalog")}
    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-sm"
    style={{ backgroundColor: colors.primary }}
  >
    <Upload size={16} />
    Bulk Upload
  </button>
</div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Show</span>
            <select className="border rounded px-2 py-1 focus:outline-none focus:ring-2" style={{ focusRingColor: colors.secondary }}>
              <option>50</option>
              <option>100</option>
            </select>
            <span>entries</span>
          </div>

          <div className="relative w-full md:w-64">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={16} />
            </span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
              style={{ focusRingColor: colors.secondary }}
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-y border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 cursor-pointer hover:text-gray-700">Item code ▲</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Item name</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Type</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">UoM</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium" style={{ color: colors.dark }}>26963_Copy</td>
                <td className="px-6 py-4 text-sm text-gray-600">EPOXY PAINT (GREY COLOUR)</td>
                <td className="px-6 py-4 text-sm text-gray-600">Goods/Products</td>
                <td className="px-6 py-4 text-sm text-gray-600">—</td>
                <td className="px-6 py-4 text-right">
                  <button className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70" style={{ color: colors.secondary }}>
                    <RotateCcw size={14} />
                    Restore
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">Showing 1 to 1 of 1 entries</p>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md border text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-md text-sm font-bold text-white shadow-sm" style={{ backgroundColor: colors.secondary }}>
              1
            </button>
            <button className="p-2 rounded-md border text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default InactiveCatalogPage;