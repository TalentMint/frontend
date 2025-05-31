// src/pages/Dashboard.tsx
import React from "react";
import Sidebar from "../UserAccount/Sidebar"
import Topbar from "../UserAccount/Topbar"
import FilterTabs from "../UserAccount/FilterTab"
import NFTCard from "../UserAccount/NftCard"
import { Outlet } from "react-router";




const Dashboard: React.FC = () => (
          <div className="flex bg-gray-900 h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <Outlet />
      </div>
    </div>

);

export default Dashboard;



