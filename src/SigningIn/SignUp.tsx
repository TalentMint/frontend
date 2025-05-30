import React from "react";
// import ReusableButton from "../Components/Button";
import { Link } from "react-router-dom";
import { ConnectButton } from "@mysten/dapp-kit";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Sign Up
        </h1>

        {/* <ReusableButton label="Connect Wallet" className="w-full rounded-[20px]" to=""/> */}

        <ConnectButton className="w-full rounded-[20px] shadow-none text-[#65007D]" />

        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-md transition"
          >
            <i className="fab fa-google mr-2"></i>
            Continue with Google
          </button>
          <button
            className="w-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-md transition"
          >
            <i className="fas fa-envelope mr-2"></i>
            Sign up with Gmail
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-500">
          By signing in, you agree to TalentMint’s{" "}
          <Link to="/terms" className="underline hover:text-gray-700">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-gray-700">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
