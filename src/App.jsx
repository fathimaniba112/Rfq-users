import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./pages/sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Navbar";
import ViewSupplierResponses from "./pages/ViewSupplierResponses";
import SpendDashboard from "./pages/Analytics-page";
import BuyerBanner from "./pages/Buyerbanner";
function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-[#f8f9fa] font-sans text-gray-900">
        
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 ml-[85px] h-screen">
          {/* Header - Fixed at top, no scroll */}
          <Header />
          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto">
<BuyerBanner/>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/supplier-responses"
                element={<ViewSupplierResponses />}
              />
               <Route path="/Analytics-page" element={<SpendDashboard />} />
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;