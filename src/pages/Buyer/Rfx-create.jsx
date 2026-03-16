
import React, { useState } from 'react';
import { 
  Calendar, Info, FileText, ShoppingBag, 
  CheckCircle, ArrowRight, Search, Plus, 
  ChevronDown, ChevronLeft
} from 'lucide-react';

const BuyerRFXcreate = () => {

  const [procurementType, setProcurementType] = useState('spot');
  const [requisitionType, setRequisitionType] = useState('rfq');
  const [bidType, setBidType] = useState('Open');

  const [purpose, setPurpose] = useState('procurement');
  const [evaluationMethod, setEvaluationMethod] = useState('');

  const colors = {
    dark: '#2A2A2A',
    deepGreen: '#43624A',
    mutedGreen: '#7A9C83',
    offWhite: '#F5F2EA',
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">

        <button className="flex items-center gap-1 font-bold text-sm uppercase tracking-wide"
          style={{ color: colors.deepGreen }}>
          <ChevronLeft size={20} /> Back
        </button>

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
                  className="w-5 h-5 rounded-full border-2 z-10"
                  style={{
                    backgroundColor: step.active ? colors.mutedGreen : '#FFF',
                    borderColor: step.active ? colors.mutedGreen : colors.mutedGreen + '44'
                  }}
                />
                <span className="absolute -bottom-6 whitespace-nowrap text-[11px] font-bold">
                  {step.name}
                </span>
              </div>

              {i !== arr.length - 1 && (
                <div className="h-[2px] grow mx-2"
                  style={{ backgroundColor: colors.mutedGreen + '33' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="w-20" />
      </header>

      <main className="max-w-6xl mx-auto mt-12 mb-20 px-4">

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

          {/* TABS */}
          <div className="flex bg-gray-50 p-2 gap-2 border-b border-gray-100">
            <button className="flex-1 py-3 bg-white rounded shadow-sm text-sm font-bold text-gray-600 text-center">
              General Info
            </button>
            <button className="flex-1 py-3 text-sm font-bold text-gray-500 text-center">
              Main Info
            </button>
          </div>

          <div className="p-10 space-y-12">

            {/* SECTION 1 */}
            <section className="grid grid-cols-3 gap-8">

              <div className="col-span-2 space-y-8">

                {/* PURPOSE */}
                <div>
                  <label className="block text-sm font-bold mb-3"
                    style={{ color: colors.deepGreen }}>
                    Purpose
                  </label>

                  <div className="flex gap-10">

                    {['procurement', 'tender'].map((item) => (
                      <label key={item}
                        className="flex items-center gap-2 cursor-pointer">

                        <div
                          onClick={() => setPurpose(item)}
                          className="w-4 h-4 rounded-full border flex items-center justify-center"
                          style={{
                            borderColor:
                              purpose === item
                                ? colors.deepGreen
                                : '#9CA3AF'
                          }}
                        >
                          {purpose === item && (
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: colors.deepGreen }}
                            />
                          )}
                        </div>

                        <span className="text-sm capitalize">
                          {item}
                        </span>

                      </label>
                    ))}

                  </div>
                </div>

              </div>
            </section>

            <hr />

            {/* SECTION 2 */}
            <section className="grid grid-cols-3 gap-8">

              <div className="col-span-1">
                <h2 className="text-lg font-bold flex items-center gap-2"
                  style={{ color: colors.deepGreen }}>
                  <FileText size={20} /> RFX
                </h2>
              </div>

              <div className="col-span-2">

                {/* RFQ RFP */}
                <div className="grid grid-cols-2 gap-4">

                  <div
                    onClick={() => setRequisitionType('rfq')}
                    className="p-5 border-2 rounded-lg cursor-pointer"
                    style={{
                      backgroundColor:
                        requisitionType === 'rfq'
                          ? colors.offWhite
                          : '#FFF',
                      borderColor:
                        requisitionType === 'rfq'
                          ? colors.deepGreen
                          : '#E5E7EB'
                    }}
                  >
                    <strong>Request for Quotation (RFQ)</strong>
                    <p>
                      (Request for Quotation): Focuses on Price. Use this when you know exactly what you want and just need to know how much it will cost.
                    </p>
                  </div>

                  <div
                    onClick={() => setRequisitionType('rfp')}
                    className="p-5 border-2 rounded-lg cursor-pointer"
                    style={{
                      backgroundColor:
                        requisitionType === 'rfp'
                          ? colors.offWhite
                          : '#FFF',
                      borderColor:
                        requisitionType === 'rfp'
                          ? colors.deepGreen
                          : '#E5E7EB'
                    }}
                  >
                    <strong>Request for Proposal (RFP)</strong>
                    <p>
                      (Request for Proposal): Focuses on Value and Strategy. Use this when you have a problem to solve but want the vendor to propose the best solution and methodology.
                    </p>
                  </div>

                </div>

                {/* PROCUREMENT CLASSIFICATION */}
                <div className="mt-8 max-w-md">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      Classification
                    <Search size={14} className="text-gray-400" />
                  </label>

                  <div className="w-full p-3 border border-gray-300 rounded text-sm text-gray-400">
                    No option(s) selected
                  </div>
                </div>

                {/* COST CENTER */}
                <div className="mt-4">
                  <button className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    Cost Center(s)
                    <Plus size={16} />
                  </button>
                </div>

                {/* REQUISITION TEMPLATE */}
                <div className="mt-4 max-w-md">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Requisition Template
                  </label>

                  <div className="relative">
                    <select className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-sm appearance-none">
                      <option>Use Default</option>
                    </select>

                    <ChevronDown size={18} className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>

                {/* REQUISITION SOURCE */}
                <div className="mt-4 max-w-md">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Requisition Source *
                  </label>

                  <div className="relative">
                    <select className="w-full p-3 border border-gray-300 rounded text-sm appearance-none">
                      <option>Please Select</option>
                    </select>

                    <ChevronDown size={18} className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>

                {/* AWARD TYPE */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Award Type
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="award" defaultChecked />
                    <span className="text-sm">Purchase Order</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input type="radio" name="award" />
                    <span className="text-sm">Work Order</span>
                  </label>
                </div>

                {/* BID AWARD / EVALUATION */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Bid Award / Evaluation Criteria
                  </label>

                  <div className="flex flex-wrap gap-6">

                    {[
                      'Negotiation',
                      'Best & Final Offer (BAFO)',
                      'Reverse Auction',
                      'Weighted Scoring Model'
                    ].map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer">

                        <input
                          type="radio"
                          name="evaluation"
                          value={method}
                          onChange={(e) => setEvaluationMethod(e.target.value)}
                        />

                        <span className="text-sm">{method}</span>

                      </label>
                    ))}

                  </div>
                </div>

              </div>
            </section>

            <hr />

            {/* SECTION 3 TIMELINE */}
            <section className="grid grid-cols-3 gap-8">

              <div>
                <h2 className="text-lg font-bold flex items-center gap-2"
                  style={{ color: colors.deepGreen }}>
                  <Calendar size={20} /> RFX Timeline
                </h2>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-6">

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Publish Date
                  </label>

                  <div className="flex justify-between p-3 border rounded">
                    <span>09/03/2026 03:22</span>
                    <Calendar size={16} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Closing Date
                  </label>

                  <div className="flex justify-between p-3 border rounded">
                    <span>11/03/2026 03:22</span>
                    <Calendar size={16} />
                  </div>
                </div>

              </div>

            </section>

          </div>

          {/* FOOTER */}
          <div className="p-6 flex justify-end gap-3 border-t">

            <button className="px-6 py-2 border rounded"
              style={{ color: colors.deepGreen, borderColor: colors.deepGreen }}>
              Cancel
            </button>

            <button className="px-6 py-2 border rounded"
              style={{ color: colors.deepGreen, borderColor: colors.deepGreen }}>
              Draft
            </button>

            <button
              className="px-6 py-2 text-white rounded flex items-center gap-2"
              style={{ backgroundColor: colors.deepGreen }}>
              <ArrowRight size={18} />
              Save & Next
            </button>

          </div>

        </div>

      </main>

    </div>
  );
};

export default BuyerRFXcreate;