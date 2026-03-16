import React, { useState } from "react";
import { Search, UserPlus, ChevronLeft, ChevronRight } from "lucide-react";
import SettingsSidebar from "./SettingsSidebar";

const UserManagement = () => {

  const [userData, setUserData] = useState([
    { id: 1, name: "Shankar Durga Prasad Kadali", email: "shankar@yateemac.net", phone: "36929793", role: "STORE STOCK", buyer: true, seller: false },
    { id: 2, name: "SAYED ALI", email: "sayedali@yateemac.net", phone: "39429988", role: "Purchaser", buyer: true, seller: false },
    { id: 3, name: "savio peters", email: "savio@yateemac.net", phone: "", role: "Purchaser", buyer: true, seller: false },
    { id: 4, name: "rosita evora", email: "rosita.evora@yateemac.net", phone: "35542585", role: "ADMIN", buyer: true, seller: true },
    { id: 5, name: "renjith sindhu", email: "renjith.sindhu@yateemac.net", phone: "", role: "Purchaser", buyer: true, seller: true },
  ]);

  const invites = [
    { email: "surendra@yateemac.net", name: "surendra", role: "Purchaser", invitedBy: "ramani rengaraman", date: "06-Aug-2024 11:22 AM" },
    { email: "shine@yateemac.net", name: "shine", role: "Purchaser", invitedBy: "ramani rengaraman", date: "06-Aug-2024 11:33 AM" },
    { email: "manzoor.ahamad@yateemac.net", name: "manzoor", role: "Purchaser", invitedBy: "ramani rengaraman", date: "06-Aug-2024 2:19 PM" },
  ];

  const handleCheckboxChange = (id, field) => {
    setUserData(prev =>
      prev.map(user =>
        user.id === id ? { ...user, [field]: !user[field] } : user
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">

      <SettingsSidebar />

      <div className="flex-1 p-6 lg:p-10 bg-[#F5F2EA]">

        <div className="max-w-7xl mx-auto space-y-10">

          {/* USERS SECTION */}

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Users
            </h2>

            <p className="text-gray-500 text-sm mt-1 mb-6">
              Manage users in your organization and assign them permissions based on their roles.
            </p>

            {/* USERS TABLE */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

              {/* TABLE HEADER */}

              <div className="p-4 flex flex-col md:flex-row justify-between gap-4 border-b">

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  Show
                  <select className="border rounded px-2 py-1">
                    <option>10</option>
                    <option>25</option>
                  </select>
                  entries
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-9 pr-3 py-2 border rounded-md w-full md:w-64 focus:ring-1 focus:ring-[#43624A]"
                  />
                  <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                </div>

              </div>

              {/* TABLE */}

              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead className="bg-gray-50 text-gray-500 uppercase text-xs">

                    <tr>
                      <th className="px-6 py-4 text-left">Name</th>
                      <th className="px-6 py-4 text-left">Email</th>
                      <th className="px-6 py-4 text-left">Phone</th>
                      <th className="px-6 py-4 text-left">Role</th>
                      <th className="px-6 py-4 text-center">Buyer</th>
                      <th className="px-6 py-4 text-center">Seller</th>
                    </tr>

                  </thead>

                  <tbody className="divide-y">

                    {userData.map(user => (

                      <tr key={user.id} className="hover:bg-gray-50">

                        <td className="px-6 py-4 font-medium">{user.name}</td>

                        <td className="px-6 py-4 text-gray-600">
                          {user.email}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {user.phone || "-"}
                        </td>

                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs bg-gray-100 rounded font-semibold">
                            {user.role}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-center">
                          <input
                            type="checkbox"
                            checked={user.buyer}
                            onChange={() =>
                              handleCheckboxChange(user.id, "buyer")
                            }
                            className="accent-[#43624A] h-4 w-4"
                          />
                        </td>

                        <td className="px-6 py-4 text-center">
                          <input
                            type="checkbox"
                            checked={user.seller}
                            onChange={() =>
                              handleCheckboxChange(user.id, "seller")
                            }
                            className="accent-[#43624A] h-4 w-4"
                          />
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              {/* PAGINATION */}

              <div className="p-4 flex justify-between items-center border-t text-sm">

                <p className="text-gray-500">
                  Showing 1 to {userData.length} of 20 entries
                </p>

                <div className="flex gap-1">

                  <button className="p-2 rounded hover:bg-gray-100">
                    <ChevronLeft size={16} />
                  </button>

                  <button className="px-3 py-1 bg-[#7A9C83] text-white rounded text-xs font-semibold">
                    1
                  </button>

                  <button className="px-3 py-1 hover:bg-gray-100 rounded text-xs">
                    2
                  </button>

                  <button className="p-2 rounded hover:bg-gray-100">
                    <ChevronRight size={16} />
                  </button>

                </div>

              </div>

            </div>

            {/* INVITE BUTTON */}

            <div className="flex justify-end mt-5">

              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">

                <UserPlus size={16} />

                Invite Team Member

              </button>

            </div>

          </div>

          {/* INVITES SECTION */}

          <div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Invites
            </h2>

            <p className="text-gray-500 text-sm mt-1 mb-6">
              Invite new team members and assign them roles.
            </p>

            {/* INVITES TABLE */}

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead className="bg-gray-50 text-gray-500 uppercase text-xs">

                    <tr>
                      <th className="px-6 py-4 text-left">Email</th>
                      <th className="px-6 py-4 text-left">Name</th>
                      <th className="px-6 py-4 text-left">Role</th>
                      <th className="px-6 py-4 text-left">Invited By</th>
                      <th className="px-6 py-4 text-left">Invited On</th>
                    </tr>

                  </thead>

                  <tbody className="divide-y">

                    {invites.map((invite, idx) => (

                      <tr key={idx} className="hover:bg-gray-50">

                        <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">
                          {invite.email}
                        </td>

                        <td className="px-6 py-4">{invite.name}</td>

                        <td className="px-6 py-4">{invite.role}</td>

                        <td className="px-6 py-4 text-gray-500">
                          {invite.invitedBy}
                        </td>

                        <td className="px-6 py-4 text-gray-400">
                          {invite.date}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserManagement;