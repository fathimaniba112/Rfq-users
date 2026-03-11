import React, { useState } from 'react';
import { 
  Eye, Copy, Trash2, Search, Plus, 
  ChevronDown, ChevronRight, FileText,
  ArrowLeft
} from 'lucide-react';

const AddUserRole = () => {
  // --- VIEW STATE ---
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'add'
  
  // --- ADD ROLE STATE ---
  const [openSections, setOpenSections] = useState({});
  const [roleName, setRoleName] = useState('');
  const [roleDescription, setRoleDescription] = useState('');

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // --- DATA ---
  const roles = [
    { id: 1, name: 'ADMIN', description: '', system: true },
    { id: 2, name: 'Purchaser', description: '', system: false },
    { id: 3, name: 'STORE STOCK', description: '', system: false },
    { id: 4, name: 'Purchase H', description: '', system: false },
  ];

  const permissionsData = [
    { id: 'pr', name: 'Purchase Request', count: '0 / 3', subs: ['Manage', 'View', 'Approve'] },
    { id: 'rfx', name: 'RFX', count: '0 / 3', subs: ['Manage', 'View', 'Approve'] },
    { id: 'sr', name: 'Supplier Responses', count: '0 / 4', subs: ['Manage', 'View', 'Approve', 'Reveal'] },
    { id: 'po', name: 'Purchase Order', count: '0 / 3', subs: ['Manage', 'View', 'Approve'] },
    { id: 'dn', name: 'Delivery Note', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'bills', name: 'Bills', count: '0 / 2', subs: ['Manage', 'View'] }, //
    { id: 'analytics', name: 'Analytics', count: '0 / 2', subs: ['Manage', 'View'] }, //
    { id: 'offline', name: 'Offline transactions', count: '0 / 3', subs: ['Manage', 'View', 'Approve'] }, //
    { id: 'settings', name: 'Account Settings', count: '0 / 2', subs: ['Manage', 'View'] }, //
    { id: 'users', name: 'Users & Teams', count: '0 / 3', subs: ['Invite', 'View', 'Manage Cost Centres'] },
    { id: 'userroles', name: 'User Roles', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'cost', name: 'Cost centers', count: '0 / 3', subs: ['Manage', 'View', 'Close'] },
    { id: 'cat', name: 'Catalog', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'supty', name: 'Supplier types', count: '0 / 1', subs: ['View'] },
     { id: 'supdi', name: 'Supplier Directory', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'ms', name: 'Messages', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'supque', name: 'Supplier Questionnaire', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'quest', name: 'Questionnaire Responses', count: '0 / 3', subs: ['Manage', 'View', 'Close'] },
    { id: 'def', name: 'Default', count: '0 / 2', subs: ['Manage', 'View'] },

  ];

  const fieldPermissions = [
    { id: 'f1', name: 'budget', page: 'Cost centers', count: '0 / 2', subs: ['Manage', 'View'] },
    { id: 'f2', name: 'Bid Type - Page:Request for Quotation', page: 'Request for Quotation', count: '0 / 1', subs: ['Manage'] },
    { id: 'f3', name: 'TCV_Permission - Page:Users & Teams', page: 'Request for Quotation', count: '0 / 2', subs: ['Manage', 'View']},
  ];

  // --- COMPONENTS ---
  const PermissionRow = ({ item, isField = false }) => {
    const isOpen = openSections[item.id];
    return (
      <div className="mb-4 border border-gray-200 rounded shadow-sm overflow-hidden bg-white">
        <div 
          className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => toggleSection(item.id)}
        >
          <div className="flex items-center space-x-4">
            <div className="text-gray-500">
              {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </div>
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded accent-[#43624A] border-gray-300" 
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="flex items-center space-x-2">
              <FileText size={18} className="text-gray-400" />
              <span className="text-[15px] font-medium text-slate-700">
                {item.name} {isField && <span className="text-gray-400 font-normal">- Page:{item.page}</span>}
              </span>
            </div>
          </div>
          <span className="text-sm font-mono text-slate-500 mr-2">{item.count}</span>
        </div>
        {isOpen && (
          <div className="bg-white border-t border-gray-100">
            {item.subs.map((sub, idx) => (
              <div key={idx} className={`flex items-center space-x-4 p-3 pl-16 hover:bg-gray-50 transition-colors ${idx !== item.subs.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <input type="checkbox" className="w-4 h-4 rounded accent-[#43624A] border-gray-300" />
                <span className="text-sm text-slate-600 font-medium">{sub}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        
        {/* VIEW 1: USER ROLES TABLE */}
        {currentView === 'list' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-md">
                <h1 className="text-2xl font-bold mb-2">User Roles</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  User roles and their corresponding privileges define the usage permissions and functionality available to a user. 
                </p>
              </div>
              <button 
                onClick={() => setCurrentView('add')}
                className="flex items-center justify-center gap-2 bg-[#43624A] hover:bg-[#2A2A2A] text-white px-6 py-2.5 rounded-lg transition-colors font-medium whitespace-nowrap"
              >
                <Plus size={18} /> Add a User Role
              </button>
            </div>

            <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>Show</span>
                <select className="border border-gray-200 rounded px-2 py-1 focus:ring-2 focus:ring-[#7A9C83] outline-none">
                  <option>50</option>
                  <option>100</option>
                </select>
                <span>entries</span>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7A9C83] text-sm outline-none" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F5F2EA]/50 border-y border-gray-100">
                    <th className="px-6 py-4 font-semibold text-sm">User Roles <span className="text-[10px] ml-1">▲</span></th>
                    <th className="px-6 py-4 font-semibold text-sm">Roles Description</th>
                    <th className="px-6 py-4 font-semibold text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {roles.map((role) => (
                    <tr key={role.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">{role.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 italic">{role.description || "No description provided"}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end items-center gap-3 text-gray-400">
                          <button className="hover:text-[#43624A]"><Eye size={18} /></button>
                          {!role.system && (
                            <>
                              <span className="text-gray-200">|</span>
                              <button className="hover:text-[#7A9C83]"><Copy size={17} /></button>
                              <span className="text-gray-200">|</span>
                              <button className="hover:text-red-500"><Trash2 size={17} /></button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">Showing 1 to 4 of 4 entries</p>
              <div className="flex items-center gap-1">
                <button className="px-4 py-2 text-sm text-gray-400 cursor-not-allowed">Previous</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-[#7A9C83] text-white text-sm">1</button>
                <button className="px-4 py-2 text-sm text-[#43624A] hover:bg-[#F5F2EA] rounded transition-colors">Next</button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: ADD USER ROLE FORM */}
        {currentView === 'add' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Sidebar Info */}
              <div className="lg:w-1/3 bg-gray-50 p-8 border-r border-gray-100">
                <button 
                  onClick={() => setCurrentView('list')}
                  className="flex items-center gap-2 text-[#43624A] font-medium mb-6 hover:underline"
                >
                  <ArrowLeft size={18} /> Back to Roles
                </button>
                <h1 className="text-2xl font-bold mb-4">Add User Role</h1>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  Tailor the permissions and privileges associated with a user role. Changes apply to all assigned users.
                </p>
                <div className="space-y-4 text-[12px] text-gray-500">
                  <p><b className="text-[#43624A]">Manage:</b> Rights to create, update, delete and view.</p>
                  <p><b className="text-[#43624A]">View:</b> Rights to view only.</p>
                  <p><b className="text-[#43624A]">Approve:</b> Rights to approve the selected case.</p>
                  <p><b className="text-[#43624A]">Reveal:</b> Ability to reveal Closed Bid quotations.</p>
                </div>
              </div>

              {/* Right Sidebar Form */}
              <div className="lg:w-2/3 p-8">
                <div className="grid gap-6 mb-10">
                  <div>
                    <label className="block text-sm font-semibold mb-2">User Role</label>
                    <input 
                      type="text" 
                      className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7A9C83] outline-none"
                      placeholder="e.g. Finance Manager"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Role Description</label>
                    <textarea 
                      rows="3" 
                      className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7A9C83] outline-none"
                      placeholder="Briefly describe this role's purpose"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-blue-600 font-bold text-lg mb-4">Permissions</h2>
                  <div className="flex items-center space-x-3 mb-6 ml-4">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#43624A]" />
                    <span className="text-slate-600 font-medium">Select All Permissions</span>
                  </div>
                  {permissionsData.map(item => <PermissionRow key={item.id} item={item} />)}
                </div>

                <div>
                  <h2 className="text-blue-600 font-bold text-lg mb-4">Fields Permissions on Pages</h2>
                  <div className="flex items-center space-x-3 mb-6 ml-4">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#43624A]" />
                    <span className="text-slate-600 font-medium">Select All Permissions</span>
                  </div>
                  {fieldPermissions.map(item => <PermissionRow key={item.id} item={item} isField={true} />)}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end gap-4">
                  <button 
                    onClick={() => setCurrentView('list')}
                    className="px-6 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button className="px-10 py-2 bg-[#43624A] text-white rounded-lg hover:bg-[#2A2A2A] font-medium shadow-sm transition-all">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default AddUserRole;