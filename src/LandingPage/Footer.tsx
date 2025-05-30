import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#65007D] text-white py-12 px-4 rounded-[15px] m-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + Description */}
        <div className="ml-5">
          <h2 className="text-2xl font-bold mb-2">TalentMint</h2>
          <p className="text-gray-400 text-sm">
            Empowering creators through Web3. Mint, share, and thrive in a decentralized creative economy.
          </p>
          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-100 hover:text-white">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-100 hover:text-white">
              <i className="fab fa-discord" />
            </a>
            <a href="#" className="text-gray-100 hover:text-white">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-gray-100 hover:text-white">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
            <li><a href="/explore" className="hover:text-white">Explore NFTs</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <i className="fas fa-phone" />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope" />
              <span>contact@talentmint.io</span>
            </li>
          </ul>
          <button className="mt-4 bg-white hover:bg-white-200 text-white px-5 py-2 rounded-md text-sm font-medium">
            Sign In
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
