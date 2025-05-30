import React from "react";
import { motion } from "framer-motion"

const ExplorePage: React.FC = () => {
  const nftItems = [
    {
      title: "Neon Dream",
      image: "/nft1.jpg",
    },
    {
      title: "Ethereal Melody",
      image: "/nft2.jpg",
    },
    {
      title: "Digital Dawn",
      image: "/nft3.jpg",
    },
  ];

  return (
    <motion.div 
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 2}} className="min-h-screen px-4 py-20 bg-[#000103] text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Exclusive NFTs
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Discover art, music, and media from rising creators in the Web3 space. Mint your favorites,
          support creators, and own a piece of the future.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {nftItems.map((item, index) => (
          <div
            key={index}
            className="bg-transparen overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExplorePage;
