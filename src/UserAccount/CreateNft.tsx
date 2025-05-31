import React from "react";

const CreateNFT: React.FC = () => {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Your Own NFT</h2>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Value"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md"
          />

          <input
            type="file"
            placeholder="Image URL"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md"
          /> 
          
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md resize-none"
            rows={3}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
          >
            Upload
          </button>

          <p className="text-xs text-center text-gray-400 mt-4">
            By Signing in, you agree to TalentMint’s{" "}
            <a href="/terms" className="underline">Terms of Service</a> and{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
