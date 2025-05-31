// src/pages/Dashboard.tsx
import React from "react";
import Sidebar from "../UserAccount/Sidebar"
import Topbar from "../UserAccount/Topbar"
import FilterTabs from "../UserAccount/FilterTab"
import NFTCard from "../UserAccount/NftCard"

const dummyData = Array.from({ length: 12 }).map((_, i) => ({
  title: `Blue Monkey #${i + 1}`,
  creator: "Blackdev",
  price: "0.004",
  imageUrl: `/nft${(i % 3) + 1}.jpg`, // place nft1.jpg, nft2.jpg, nft3.jpg in public/
}));

const Dashboard: React.FC = () => (
  <div className="flex bg-gray-900 min-h-screen">
    <Sidebar />

    <div className="flex-1 flex flex-col">
      <Topbar />

      <main className="p-4 space-y-6 flex-1 overflow-auto">
        {/* Trending Section */}
        <section>
          <h2 className="text-xl text-white font-semibold mb-1">Trending</h2>
          <p className="text-gray-400 text-sm mb-3">
            NFTs making waves right now — minting fast and getting all the attention.
          </p>
          <FilterTabs />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {dummyData.slice(0, 4).map((nft, idx) => (
              <NFTCard key={idx} {...nft} />
            ))}
          </div>
        </section>

        {/* Just For You Section */}
        <section>
          <h2 className="text-xl text-white font-semibold mb-1">Just For You</h2>
          <p className="text-gray-400 text-sm mb-3">
            Curated based on your activity and taste. Explore your personalized picks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dummyData.map((nft, idx) => (
              <NFTCard key={idx} {...nft} />
            ))}
          </div>
        </section>
      </main>
    </div>
  </div>
);

export default Dashboard;
