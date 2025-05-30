import { motion } from "framer-motion"
import React from "react";

const steps = [
  {
    id: 1,
    title: "Upload your Content",
    description: "Upload your content on the platform",
  },
  {
    id: 2,
    title: "Mint as NFT",
    description: "Mint as NFT with customizable royalties",
  },
  {
    id: 3,
    title: "Share & Earn",
    description: "Share & earn as people mint your work",
  },
  {
    id: 4,
    title: "Get Paid",
    description: "Get paid instantly via crypto",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative bg-gradient-to-r text-white py-20 px-4">
      <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2}} className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">How TalentMint Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="text-center space-y-2 relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-fuchsia-700 text-white flex items-center justify-center font-bold text-sm md:text-base mx-auto mb-2">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Dotted Path (for decoration only) */}
        <svg
          className="absolute top-[8rem] left-0 w-full z-0"
          height="150"
          viewBox="0 0 1000 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 80 100 Q 250 20, 400 100 Q 550 180, 720 100 Q 860 30, 960 100"
            stroke="#aaa"
            strokeDasharray="6 10"
            strokeWidth="2"
            fill="none"
          />
        </svg>
 
        <button className="mt-16 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold px-8 py-3 rounded-md text-sm md:text-base">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
