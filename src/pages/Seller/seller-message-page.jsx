import React from 'react';
import { Search, MessageSquare } from 'lucide-react';

const SellerChatInterface = () => {
  // Color Palette Mapping:
  // #2A2A2A - Charcoal (Primary Text / Icons)
  // #43624A - Forest Green (Sidebar Headers / Selection)
  // #7A9C83 - Sage Green (Subtle accents / Buttons)
  // #F5F2EA - Cream/Off-white (Main Background)

  const chatItems = [
    { id: '84088', title: 'HIGEEN SANITIZER + ...', company: 'ANNAI ELECTRO MECHANICAL', date: '11-Nov-2025', time: '12:44 AM' },
    { id: '30220', title: 'SAFETY SHOES', company: 'YOUSIF ALI & SONS W.L.L', date: '28-Oct-2025', time: '11:28 AM' },
    { id: '86873', title: '1- 2 CAR MAZDA 3 - M...', company: 'PATRICK YORK IRELAND INSURANCE', date: '28-Oct-2025', time: '11:27 AM' },
  ];

  return (
    <div className="flex h-screen bg-[#F5F2EA] font-sans text-[#2A2A2A]">
      
      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Company Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
               <span className="text-[10px] font-bold text-[#43624A]">LOGO</span>
            </div>
            <h2 className="text-xs font-bold uppercase tracking-tight text-[#43624A]">
              Yateem Airconditioning
            </h2>
          </div>
          <p className="text-[10px] font-semibold text-gray-400">COMPANY W.L.L</p>
        </div>

        {/* Search Bar */}
        <div className="p-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search chat" 
              className="w-full pl-3 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#7A9C83]"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chatItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`p-4 border-b border-gray-50 cursor-pointer transition-colors hover:bg-[#F5F2EA] ${index === 0 ? 'bg-[#F5F2EA]/50' : ''}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase">RFX# {item.id}</span>
                <span className="text-[9px] text-gray-400">{item.date} {item.time}</span>
              </div>
              <h3 className="text-xs font-bold text-[#2A2A2A] mb-1 leading-tight">{item.title}</h3>
              <p className="text-[10px] text-gray-500 truncate leading-tight uppercase font-medium">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#43624A] text-white mb-6 shadow-xl">
             <MessageSquare size={56} fill="white" />
          </div>
          <h2 className="text-xl font-medium text-gray-600">Your messages will appear here.</h2>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="absolute bottom-8 right-8 cursor-pointer transform hover:scale-105 transition-transform">
          <div className="bg-[#25D366] p-3 rounded-full shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SellerChatInterface;