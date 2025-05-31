import React, { useEffect } from "react";
// import ReusableButton from "../Components/Button";
import { Link } from "react-router-dom";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { useNavigate } from "react-router";
import Footer from "../LandingPage/Footer";

const SignupPage: React.FC = () => {
  const account = useCurrentAccount();
  const navigate = useNavigate();
  // const connectWallet = useConnectWallet();

  useEffect(() => {
    if (account) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  }, [account, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-10 px-4">
      <div className="max-w-md w-full bg-gray-300 rounded-lg shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Sign Up
        </h1>

        {/* <ReusableButton onClick={connectWallet} label="Connect Wallet" className="w-full rounded-[20px]" to=""/> */}

        <ConnectButton className="w-full rounded-[20px] shadow-none text-[#65007D]" />

        <div className="flex items-center">
          <hr className="flex-grow border-gray-700" />
          <span className="px-3 text-black">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center border border-gray-900 hover:bg-gray-500 text-black  font-medium px-4 py-3 rounded-md transition"
          >
            <i className="fab fa-google mr-2"></i>
            Continue with Google
          </button>
          <button
            className="w-full flex items-center justify-center border  border-gray-900 hover:bg-gray-500 text-black   font-medium px-4 py-3 rounded-md transition"
          >
            <i className="fas fa-envelope mr-2"></i>
            Sign up with Gmail
          </button>
        </div>

        <p className="text-xs text-center text-gray-900">
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
      <Footer />
    </div>
  );
};

export default SignupPage;
