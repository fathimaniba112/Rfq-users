import React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsSidebar from "./sidebar-settings";

const CatalogPage = () => {
    const navigate = useNavigate();
  // Data array based on your images
  const items = [
    { code: 'YAT-ITEM-04867', name: 'blue coloryoyo reel', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-ITEM-04868', name: 'blue color lanyard', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-ITEM-04869', name: 'hard card holder', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-ITEM-23159', name: 'Electric Water Heater 80L -H', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-ITEM-23160', name: 'electric water heater 100L H', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-ITEM-23209', name: 'A4 Paper', type: 'Goods/Products', uom: 'Carton' },
    { code: 'YAT-ITEM-23211', name: 'Delfix 8 - 10', type: 'Goods/Products', uom: 'Drums' },
    { code: 'YAT-ITEM-23214', name: 'PRESSURE WASHER INGCO 1800W/150BAR', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-EL-23261', name: '63A 5 PIN SWITCHED SOCKET IP67, GW67264', type: 'Goods/Products', uom: 'Number' },
    { code: 'YAT-ITEM-23262', name: '63A 5 PIN PLUG IP67, GW61053', type: 'Goods/Products', uom: 'Number' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-2xl font-bold border-b-2 border-[#43624A] pb-1">Catalog</h1>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('/inactive-catalog')} className="text-[#43624A] font-medium hover:underline text-sm">Show Inactive Items</button>
           <button onClick={() => navigate('/add-catalog')} className="bg-[#43624A] text-white px-4 py-2 rounded"
    >+ Add a New Item</button>
            <button onClick={() => navigate('/bulk-catalog')} className="border border-[#43624A] text-[#43624A] hover:bg-[#F5F2EA] px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm">
              <span>📥</span> Bulk Upload
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Description */}
          <div className="lg:col-span-1">
            <p className="text-sm leading-relaxed text-gray-600 italic">
              Predefine your frequently or commonly purchased items in your catalog to ensure data consistency and hygiene, completeness of information in your requisitions, and minimize off-catalog or maverick spend.
            </p>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>Show</span>
                <select className="border border-gray-300 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#7A9C83]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>entries</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm">Search:</span>
                <input 
                  type="text" 
                  className="border border-gray-300 rounded px-3 py-1 w-full sm:w-64 outline-none focus:ring-1 focus:ring-[#7A9C83]"
                />
              </div>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto border-t border-gray-200">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
                    <th className="py-4 px-2 font-semibold">Item code <span className="text-[10px]">▲</span></th>
                    <th className="py-4 px-2 font-semibold">Item name</th>
                    <th className="py-4 px-2 font-semibold">Type</th>
                    <th className="py-4 px-2 font-semibold">UoM</th>
                    <th className="py-4 px-2 font-semibold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((item, index) => (
                    <tr key={index} className="hover:bg-[#F5F2EA]/50 transition-colors">
                      <td className="py-3 px-2 font-medium">{item.code}</td>
                      <td className="py-3 px-2 text-gray-600 uppercase">{item.name}</td>
                      <td className="py-3 px-2 text-gray-600">{item.type}</td>
                      <td className="py-3 px-2 text-gray-600">{item.uom}</td>
                      <td className="py-3 px-2 text-center cursor-pointer hover:text-[#7A9C83]">
                        👁️
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <span className="text-sm text-gray-500">Showing 1 to 10 of 2,689 entries</span>
              <div className="flex items-center -space-x-px">
                <button className="px-3 py-2 rounded-l border border-gray-300 text-gray-400 hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 border border-gray-300 bg-[#7A9C83] text-white">1</button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 rounded-r border border-gray-300 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CatalogPage;