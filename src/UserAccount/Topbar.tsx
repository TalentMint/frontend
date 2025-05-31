// src/components/Topbar.tsx
import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const Topbar: React.FC = () => (
  <header className="flex items-center justify-between bg-gray-800 text-gray-200 p-4 lg:pl-72">
    <input
      type="text"
      placeholder="Search"
      className="bg-gray-700 placeholder-gray-400 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button className="p-2 hover:text-white">
      <BellIcon className="w-6 h-6"/>
    </button>
  </header>
);

export default Topbar;
