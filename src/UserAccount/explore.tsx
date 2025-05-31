import FilterTabs from "./FilterTab"
import NFTCard from "./NftCard"
const dummyData = Array.from({ length: 12 }).map((_, i) => ({
  title: `Blue Monkey #${i + 1}`,
  creator: "Blackdev",
  price: "0.004",
  imageUrl: `/nft${(i % 3) + 1}.jpg`, // place nft1.jpg, nft2.jpg, nft3.jpg in public/
}));

const Explore: React.FC = () => {
  return (
        <main className="p-4 space-y-6 flex-1 overflow-y-scroll no-scrollbar">
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
  )
}

export default Explore