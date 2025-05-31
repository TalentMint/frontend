// src/components/NFTCard.tsx
import React from "react";

interface NFTCardProps {
  title: string;
  creator: string;
  price: string;
  imageUrl: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ title, creator, price, imageUrl }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <button className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 12l1.41 1.41L11 7.83v12.34h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
        </svg>
      </button>
    </div>
    <div className="p-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-gray-400">by {creator}</p>
      <p className="mt-1 text-sm text-purple-400 font-medium">{price} ETH</p>
    </div>
  </div>
);

export default NFTCard;
