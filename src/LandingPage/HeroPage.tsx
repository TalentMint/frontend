import React from "react";
import { motion } from "framer-motion"
import ReusableButton from "../Components/Button";

const HomePage: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4">
      <motion.div 
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 2}} className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Turn Your Content Into <span className="text-[#8B00AB]">Currency</span> – <br className="hidden md:block" />
          Mint. Earn. Empower.
        </h1>

        <p className="text-white text-lg md:text-xl mb-8">
          A next-generation Web3 platform designed for creators to transform their digital work—art, music, videos, and more—into unique NFTs. Collectors can mint exclusive content directly from their favorite creators, while creators retain full ownership and earn automatically from every mint. It's a decentralized ecosystem where creativity meets opportunity, and everyone thrives.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <ReusableButton label="Get Started" to=""/>
          <button className="w-full md:w-auto border border-[#8B00AB] text-[#8B00AB] hover:bg-white px-6 py-3 rounded-md text-sm font-semibold">
            Get Started
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;
