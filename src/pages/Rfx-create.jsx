import React, { useState } from 'react';
import { 
  Calendar, Info, FileText, ShoppingBag, 
  CheckCircle, ArrowRight, Search, Plus, 
  ChevronDown, ChevronLeft
} from 'lucide-react';

const RFXcreate = () => {
  const [procurementType, setProcurementType] = useState('spot');
  const [requisitionType, setRequisitionType] = useState('rfq');
  const [bidType, setBidType] = useState('Open');

  // Custom Color Palette from image_15059c.png
  const colors = {
    dark: '#2A2A2A',
    deepGreen: '#43624A',
    mutedGreen: '#7A9C83',
    offWhite: '#F5F2EA',
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* 1. TOP HEADER NAVIGATION (image_1ee479.png) */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <button 
          className="flex items-center gap-1 font-bold text-sm uppercase tracking-wide"
          style={{ color: colors.deepGreen }}
        >
          <ChevronLeft size={20} /> Back
        </button>

        {/* STEP PROGRESS BAR */}
        <div className="flex items-center grow justify-center max-w-3xl">
          {[
            { name: 'RFQ Information', active: true },
            { name: 'RFQ Details', active: false },
            { name: 'Review & Submit', active: false },
            { name: 'Add/Invite Suppliers', active: false }
          ].map((step, i, arr) => (
            <React.Fragment key={step.name}>
              <div className="flex flex-col items-center relative">
                <div 
                  className="w-5 h-5 rounded-full border-2 z-10 transition-colors"
                  style={{ 
                    backgroundColor: step.active ? colors.mutedGreen : '#FFF',
                    borderColor: step.active ? colors.mutedGreen : colors.mutedGreen + '44' 
                  }} 
                />
                <span className={`absolute -bottom-6 whitespace-nowrap text-[11px] font-bold ${step.active ? 'text-gray-700' : 'text-gray-400'}`}>
                  {step.name}
                </span>
              </div>
              {i !== arr.length - 1 && (
                <div className="h-[2px] grow mx-2" style={{ backgroundColor: colors.mutedGreen + '33' }} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="w-20" /> 
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto mt-12 mb-20 px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          {/* 2. SUB-HEADER TABS (image_1ee479.png) */}
          <div className="flex bg-gray-50 p-2 gap-2 border-b border-gray-100">
            <button className="flex-1 py-3 bg-white rounded shadow-sm text-sm font-bold text-gray-600 text-center">
              General Info
            </button>
            <button className="flex-1 py-3 text-sm font-bold text-gray-500 text-center hover:bg-gray-100 transition-colors">
              Main Info
            </button>
          </div>

          <div className="p-10 space-y-12">
            {/* Section 1: Requisition Category */}
            <section className="grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: colors.deepGreen }}>
                  <ShoppingBag size={20} /> Requisition Category
                </h2>
                <p className="text-gray-500 text-sm mt-2">Select the type of procurement you are conducting as part of this requisition.</p>
              </div>
              
              <div className="col-span-2">
                <label className="block text-sm font-bold mb-4" style={{ color: colors.deepGreen }}>Procurement Type</label>
                <div 
                  className="p-6 border-2 rounded-lg cursor-pointer transition-all"
                  style={{ borderColor: procurementType === 'spot' ? colors.deepGreen : '#E5E7EB' }}
                  onClick={() => setProcurementType('spot')}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-5 h-5 rounded-full border-4 mt-1"
                      style={{ borderColor: procurementType === 'spot' ? colors.deepGreen : '#D1D5DB' }}
                    />
                    <div>
                      <h3 className="font-bold flex items-center gap-2" style={{ color: colors.dark }}>
                        Spot Procurement/Once Off <Info size={14} className="text-gray-400" />
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm text-gray-600">
                        <li className="flex items-center gap-3"><FileText size={16} style={{ color: colors.mutedGreen }} /> Covers indirect spend; ad-hoc or urgent purchases.</li>
                        <li className="flex items-center gap-3"><CheckCircle size={16} style={{ color: colors.mutedGreen }} /> Comprises general items and operating supplies.</li>
                        <li className="flex items-center gap-3"><CheckCircle size={16} style={{ color: colors.mutedGreen }} /> Awarded through purchase order.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 2: Requisition Format */}
            <section className="grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: colors.deepGreen }}>
                  <FileText size={20} /> Requisition Format
                </h2>
                <p className="text-gray-500 text-sm mt-2">Select the type, format, source, and structure of your requisition.</p>
              </div>

              <div className="col-span-2 space-y-8">
                <div>
                  <label className="block text-sm font-bold mb-4" style={{ color: colors.deepGreen }}>Requisition Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    {/* RFQ Card */}
                    <div 
                      onClick={() => setRequisitionType('rfq')}
                      className="p-5 border-2 rounded-lg cursor-pointer transition-all"
                      style={{ 
                        backgroundColor: requisitionType === 'rfq' ? colors.offWhite : '#FFF',
                        borderColor: requisitionType === 'rfq' ? colors.deepGreen : '#E5E7EB'
                      }}
                    >
                      <div className="flex gap-3">
                        <div 
                          className="w-4 h-4 rounded-full border-2 mt-1"
                          style={{ borderColor: requisitionType === 'rfq' ? colors.deepGreen : '#D1D5DB' }}
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">Request for Quotation</h4>
                          <ul className="text-xs text-gray-500 mt-2 list-disc pl-4 space-y-2 leading-relaxed">
                            <li>Used to request price quotations and commercial terms for clearly defined products.</li>
                            <li>Multiple items can be requisitioned simultaneously.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* RFP Card */}
                    <div 
                      onClick={() => setRequisitionType('rfp')}
                      className="p-5 border-2 rounded-lg cursor-pointer transition-all"
                      style={{ 
                        backgroundColor: requisitionType === 'rfp' ? colors.offWhite : '#FFF',
                        borderColor: requisitionType === 'rfp' ? colors.deepGreen : '#E5E7EB'
                      }}
                    >
                      <div className="flex gap-3">
                        <div 
                          className="w-4 h-4 rounded-full border-2 mt-1"
                          style={{ borderColor: requisitionType === 'rfp' ? colors.deepGreen : '#D1D5DB' }}
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">Request for Proposal</h4>
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                            Used to request a commercial and technical proposal for services where offers may not be easily comparable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ADDITIONAL FIELDS */}
                <div className="space-y-6 pt-2">
                  <div className="max-w-md">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      Procurement Classification <Search size={16} className="text-gray-400" />
                    </label>
                    <div className="w-full p-3 bg-white border border-gray-300 rounded text-gray-400 text-sm">No options(s) selected</div>
                  </div>

                  <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:opacity-80">
                    Cost Center(s) <Plus size={18} className="text-gray-500" />
                  </button>

                  <div className="max-w-md">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Requisition Template</label>
                    <div className="relative">
                      <select className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-sm appearance-none">
                        <option>Use Default</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-3 top-3 text-gray-400" />
                    </div>
                  </div>

                  <div className="max-w-md">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Requisition source<span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select className="w-full p-3 bg-white border border-gray-300 rounded text-sm appearance-none">
                        <option>Please Select</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-3 top-3 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Award Type</label>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border-4" style={{ borderColor: colors.deepGreen }} />
                      <span className="text-sm text-gray-700">Purchase Order</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Bid Type</label>
                    <div className="flex items-center gap-8">
                      {['Open', 'Close With OTP', 'Close Without OTP'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <div 
                            onClick={() => setBidType(type)}
                            className="w-4 h-4 rounded-full border flex items-center justify-center"
                            style={{ borderColor: bidType === type ? colors.deepGreen : '#9CA3AF' }}
                          >
                            {bidType === type && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.deepGreen }} />}
                          </div>
                          <span className="text-sm text-gray-600">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 3: Timeline */}
            <section className="grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: colors.deepGreen }}>
                  <Calendar size={20} /> Requisition Timeline
                </h2>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Set the duration of your requisition event. As default, the requisition is immediately open for bidding on submission.
                </p>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { label: 'Bidding Opens', value: '09/03/2026 03:22' },
                  { label: 'Bidding Closes', value: '11/03/2026 03:22' },
                  { label: 'Required by Date', value: 'dd/mm/yyyy --:--' },
                  { label: 'Submit By', value: 'dd/mm/yyyy --:--' }
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">{field.label} <Info size={12} className="inline ml-1"/></label>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded bg-white">
                      <span className="text-sm text-gray-400 font-mono">{field.value}</span>
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="p-6 bg-white border-t border-gray-100 flex justify-end gap-3">
            <button 
              className="px-6 py-2 border rounded font-bold text-sm hover:opacity-80 transition-opacity"
              style={{ color: colors.deepGreen, borderColor: colors.deepGreen }}
            >
              Cancel
            </button>
            <button 
              className="px-6 py-2 border rounded font-bold text-sm hover:opacity-80 transition-opacity"
              style={{ color: colors.deepGreen, borderColor: colors.deepGreen }}
            >
              Save
            </button>
            <button 
              className="px-6 py-2 text-white rounded font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.deepGreen }}
            >
              <ArrowRight size={18} /> Save and Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RFXcreate;