import React, { useState } from 'react';
import { ChevronDown, CreditCard, Landmark, Wallet } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const WalletHome = () => {
  const [paymentMethod, setPaymentMethod] = useState('debit');

  const packs = [
    { name: "Starter Pack", credits: 10, usd: 10, bhd: "3.700", total: "4.070", ribbon: "bg-gray-400" },
    { name: "Starter Plus", credits: 30, usd: 24, bhd: "9.000", total: "9.900", ribbon: "bg-gray-500" },
    { name: "Most Popular", credits: 110, usd: 50, bhd: "18.800", total: "20.680", bonus: "GET 1 FREE", ribbon: "bg-blue-600" },
    { name: "Best Value", credits: 270, usd: 119, bhd: "45.000", total: "49.500", bonus: "GET 2 FREE", ribbon: "bg-purple-600" },
    { name: "Power Pack", credits: 530, usd: 225, bhd: "84.900", total: "93.390", bonus: "GET 3 FREE", ribbon: "bg-indigo-700" },
    { name: "Enterprise", credits: 640, usd: 265, bhd: "100.000", total: "110.000", bonus: "GET 4 FREE", ribbon: "bg-slate-800" },
  ];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
    
          <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Section: Balance & Transfer */}
        <div className="bg-white rounded-xl shadow-sm border border-[#7A9C83]/20 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Transfer Form */}
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="font-medium text-gray-500">Current Balance:</span>
                <span className="font-bold text-[#43624A] text-lg">N/A</span>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <label className="w-full sm:w-32 text-sm font-semibold">Transfer To:</label>
                  <div className="relative flex-1">
                    <select className="w-full border border-[#7A9C83] rounded-md px-4 py-2 appearance-none outline-none focus:ring-2 focus:ring-[#43624A]/20">
                      <option>Select User to transfer to</option>
                      <option>Abijith Anil</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <label className="w-full sm:w-32 text-sm font-semibold">Credits Transfer Amount:</label>
                  <input 
                    type="number" 
                    className="flex-1 border border-[#7A9C83] rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#43624A]/20"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: History Highlights */}
            <div className="bg-[#F5F2EA]/30 rounded-lg p-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Last Addon Amount:</span>
                <span className="font-medium text-gray-700">N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Added On:</span>
                <span className="font-medium text-gray-700">N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Purchase:</span>
                <span className="font-medium text-gray-700">Transferred to Abijith Anil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Purchased On:</span>
                <span className="font-medium text-gray-700">04-Feb-2026 6:39 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Credit Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden relative group hover:shadow-xl transition-shadow">
              {/* Ribbon */}
              <div className={`absolute top-4 -left-12 -rotate-45 w-40 text-center text-[10px] font-bold text-white py-1 shadow-sm ${pack.ribbon}`}>
                {pack.name.toUpperCase()}
              </div>
              
              <div className="p-8 pt-12 flex items-center justify-between">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-1">{pack.credits}</div>
                  <div className="text-sm font-bold text-blue-600 tracking-widest">CREDITS</div>
                </div>
                
                <div className="text-right text-xs text-gray-500 space-y-1">
                  <p>Buy {pack.credits} RFX for {pack.usd} USD</p>
                  <p>/ {pack.bhd} BHD + VAT =</p>
                  <p className="font-bold text-gray-700">({pack.total} BHD)</p>
                  {pack.bonus && <p className="text-blue-600 font-bold mt-2">& {pack.bonus}</p>}
                </div>
              </div>

              <div className="p-4 bg-gray-50 flex justify-center">
                <button className="w-2/3 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white font-bold rounded shadow-md transition-colors uppercase text-sm tracking-wider">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Payment & Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-[#7A9C83]/20 p-8">
          <h3 className="text-lg font-bold text-blue-700 mb-6">Payment Methods</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              {[
                { id: 'credit', label: 'Credit Card', icon: <CreditCard size={18}/> },
                { id: 'debit', label: 'Debit Card', icon: <Wallet size={18}/> },
                { id: 'bank', label: 'Bank Transfer', icon: <Landmark size={18}/> }
              ].map((method) => (
                <label key={method.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="payment" 
                      className="peer appearance-none w-5 h-5 border-2 border-[#7A9C83] rounded-full checked:border-blue-600 transition-all"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                    />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform"></div>
                  </div>
                  <span className={`text-sm font-medium transition-colors ${paymentMethod === method.id ? 'text-blue-600' : 'text-gray-600'}`}>
                    {method.label}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-bold rounded-md hover:bg-blue-50 transition-colors">
                Transfer Credits
              </button>
              <button className="px-10 py-2.5 bg-[#43624A] text-white font-bold rounded-md shadow-lg hover:opacity-90 transition-opacity">
                Add Credits
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default WalletHome ; 