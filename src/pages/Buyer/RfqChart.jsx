import React, { useState, useEffect, useRef } from 'react';
import { Info, ChevronDown, X, ChevronUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const monthlyData = [
  { name: 'JAN', rfqs: 14 }, { name: 'FEB', rfqs: 13 },
  { name: 'MAR', rfqs: 0 }, { name: 'APR', rfqs: 0 },
  { name: 'MAY', rfqs: 0 }, { name: 'JUN', rfqs: 0 },
  { name: 'JUL', rfqs: 0 }, { name: 'AUG', rfqs: 0 },
  { name: 'SEP', rfqs: 0 }, { name: 'OCT', rfqs: 0 },
  { name: 'NOV', rfqs: 0 }, { name: 'DEC', rfqs: 0 },
];

const weeklyData = [
  { name: 'WK 1', rfqs: 4 }, { name: 'WK 2', rfqs: 8 },
  { name: 'WK 3', rfqs: 2 }, { name: 'WK 4', rfqs: 5 },
];

const BuyerRfqChart = () => {
  const [view, setView] = useState('Monthly');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const data = view === 'Monthly' ? monthlyData : weeklyData;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
      <div className="flex justify-between items-start mb-10">
        <h2 className="text-xl font-bold text-[#43624A] flex items-center gap-2">
          RFQs Over Time <Info size={18} className="text-[#43624A] opacity-70" />
        </h2>

        {/* Custom Select UI */}
        <div className="relative w-40 z-20" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full border ${isOpen ? 'border-gray-300' : 'border-gray-200'} rounded-t-md p-2 flex justify-between items-center text-gray-500 text-sm bg-white transition-all`}
          >
            <span className="font-medium text-gray-400">{view}</span>
            <div className="flex items-center gap-1">
              <X size={14} className="hover:text-red-400 cursor-pointer text-gray-300" onClick={(e) => {e.stopPropagation(); setView('Monthly');}} />
              {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full border-x border-b border-gray-200 shadow-xl rounded-b-md bg-white overflow-hidden">
              <div 
                className={`p-2 text-sm cursor-pointer transition-colors ${view === 'Monthly' ? 'font-bold bg-gray-50 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => { setView('Monthly'); setIsOpen(false); }}
              >
                Monthly
              </div>
              <div 
                className={`p-2 text-sm cursor-pointer transition-colors ${view === 'Weekly' ? 'font-bold bg-gray-50 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => { setView('Weekly'); setIsOpen(false); }}
              >
                Weekly
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
            <CartesianGrid vertical={false} stroke="#f6f6f3" />
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#E5E7EB' }}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 600 }}
              interval={0}
              // Removed the angle to keep them straight and short
              height={40} 
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 16]}
              ticks={[0, 4, 8, 12, 16]}
            />
            <Tooltip 
              cursor={{fill: '#f8fafc'}} 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar 
              dataKey="rfqs" 
              fill="#7A9C83" 
              radius={[4, 4, 0, 0]} 
              barSize={view === 'Monthly' ? 30 : 50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerRfqChart;