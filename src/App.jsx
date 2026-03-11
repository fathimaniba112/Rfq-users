import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./pages/sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Navbar";
import ViewSupplierResponses from "./pages/ViewSupplierResponses";
import SpendDashboard from "./pages/Analytics-page";
import BuyerBanner from "./pages/Buyerbanner";
import ReportsDashboard from "./pages/report-page";
import ChatInterface from "./pages/message-page";
import PurchaseRequestForm from "./pages/requisition-create";
import PRTable from "./pages/requisition-view";
import CreatePurchaseOrder from "./pages/PurchaseOrder-create";
import PurchaseOrderVIEW from "./pages/PurchaseOder-View";
import RFXcreate from "./pages/Rfx-create";
import RFQView from "./pages/RFX-view";
import SupplierDirectories from "./pages/supplierDirectories";
import AddSupplierForm from "./pages/AddSupplier";
import CatalogPage from "./pages/catlogLibrary";
import AddItemForm from "./pages/addCatalog";
import BulkUploadPage from "./pages/Bulk-catalog";
import InactiveCatalogPage from "./pages/inactive-catalog";
import CompanyProfile from "./pages/company-information";
import UserRolesPage from "./pages/User-team";
import AddUserRole from "./pages/add-user";
import RegionalSettings from "./pages/Regional-settings";
import PointOfContact from "./pages/point-of-contact";
import Others from "./pages/others";
import AddCompanyForm from "./pages/add-company";
import UserManagement from "./pages/Users";
import CostCenterApp from "./pages/CostCenters";
import SupplierTypesTable from "./pages/supplierTypes";
import CostCenterDashboard from "./pages/switch-costcenter";
import EmailSubscription from "./pages/email";
import SupplierDashboard from "./pages/supplier-questionnire";
import ProfileBasic from "./pages/basic-profile";
import BidSettingsPage from "./pages/BidSettings";
import PurchaseOrderDefault from "./pages/PurchaseOderDefault";
import POApprovalWorkflow from "./pages/PurchaseoDERaPPROVAL";
import AddCostCenter from "./pages/Add-costCenter";
import BulkUploadCostPage from "./pages/Bulk-cost";
import QuestionnaireResponse from "./pages/Questionnier";
import CreateNewQuestionnire from "./pages/Create-Questionnier";
 function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-[#f8f9fa] font-sans text-gray-900">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 ml-[85px] h-screen">

          {/* Header */}
          <Header />

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto">

            <BuyerBanner />

            <Routes>

              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/supplier-responses" element={<ViewSupplierResponses />} />
              <Route path="/Analytics-page" element={<SpendDashboard />} />
              <Route path="/report-page" element={<ReportsDashboard />} />
              <Route path="/message-page" element={<ChatInterface />} />

              <Route path="/create-requisition" element={<PurchaseRequestForm />} />
              <Route path="/view-requisition" element={<PRTable />} />

              <Route path="/create-purchaseOrder" element={<CreatePurchaseOrder />} />
              <Route path="/view-purchaseOrder" element={<PurchaseOrderVIEW />} />

              <Route path="/create-rfx" element={<RFXcreate />} />
              <Route path="/view-rfx" element={<RFQView />} />

              <Route path="/supplierDirectories" element={<SupplierDirectories />} />
              <Route path="/add-supplier" element={<AddSupplierForm />} />

              <Route path="/catlog-Library" element={<CatalogPage />} />
              <Route path="/add-catalog" element={<AddItemForm />} />
              <Route path="/bulk-catalog" element={<BulkUploadPage />} />
              <Route path="/inactive-catalog" element={<InactiveCatalogPage />} />

              <Route path="/company-information" element={<CompanyProfile />} />
              <Route path="/user-teams" element={<UserRolesPage />} />
              <Route path="/add-user" element={<AddUserRole />} />

              <Route path="/regional-settings" element={<RegionalSettings />} />
              <Route path="/points-contact" element={<PointOfContact />} />
              <Route path="/others" element={<Others />} />
              <Route path="/add-company" element={<AddCompanyForm />} />
              <Route path="/users" element={<UserManagement />} />

              <Route path="/cost-centers" element={<CostCenterApp />} />
              <Route path="/supplier-types" element={<SupplierTypesTable />} />
              <Route path="/switch-costcenter" element={<CostCenterDashboard />} />
              <Route path="/email-subscription" element={<EmailSubscription />} />
              <Route path="/supplier-questionnaire" element={<SupplierDashboard />} />

              <Route path="/profile-basic" element={<ProfileBasic />} />

              <Route path="/bid-settings" element={<BidSettingsPage />} />
              <Route path="/purchase-order-default" element={<PurchaseOrderDefault />} />
              <Route path="/purchase-order-workflow" element={<POApprovalWorkflow />} />
              <Route path="/add-costcenter" element={<AddCostCenter />} />
              <Route path="/bulk-costcenter" element={<BulkUploadCostPage />} />

              <Route path="/questionnaire-response" element={<QuestionnaireResponse />} />
              <Route path="/create-questionnaire" element={<CreateNewQuestionnire />} />

            </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;