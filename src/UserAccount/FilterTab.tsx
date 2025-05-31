// src/components/FilterTabs.tsx
import React from "react";

const tabs = ["All", "Art", "Photography", "Music", "Gaming"];

const FilterTabs: React.FC = () => (
  <div className="flex flex-wrap gap-2 px-4 py-3 bg-gray-800">
    {tabs.map((tab) => (
      <button
        key={tab}
        className="text-white px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600"
      >
        {tab}
      </button>
    ))}
  </div>
);

export default FilterTabs;
