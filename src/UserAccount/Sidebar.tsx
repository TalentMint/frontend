import { useCurrentAccount, useDisconnectWallet } from "@mysten/dapp-kit";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiClient from "../api/index";

const Sidebar: React.FC = () => {
    const account = useCurrentAccount();
    const navigate = useNavigate();
    const disconnectWallet = useDisconnectWallet();

    useEffect(() => {
        if (!account) {
            navigate("/signup");
            return;
        }

        ApiClient.walletLogin({
            walletAddress: account.address,
        }).then((res) => {
            localStorage.setItem("access", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
        });
    }, [account, navigate]);

    return (
        <aside className="hidden lg:flex flex-col w-60 bg-gray-900 text-gray-300 p-6 space-y-6">
            <h1 className="text-2xl font-bold text-white mb-4">TalentMint</h1>

            <nav className="space-y-3">
                <NavLink
                    to="/dashboard/explore"
                    className="flex items-center gap-3 hover:text-white"
                >
                    <i className="fas fa-home w-5 h-5"></i> Explore
                </NavLink>
                <NavLink
                    to="/dashboard/create"
                    className="flex items-center gap-3 hover:text-white"
                >
                    <i className="fas fa-plus-circle w-5 h-5"></i> Create NFT
                </NavLink>
                <NavLink
                    to="/dashboard/my"
                    className="flex items-center gap-3 hover:text-white"
                >
                    <i className="fas fa-th-large w-5 h-5"></i> My Creations
                </NavLink>
                <NavLink
                    to="/dashboard/bought"
                    className="flex items-center gap-3 hover:text-white"
                >
                    <i className="fas fa-heart w-5 h-5"></i> Bought NFTs
                </NavLink>
            </nav>

            <div>
                <h2 className="text-sm uppercase text-gray-500 mb-2">
                    User account
                </h2>
                <nav className="space-y-3">
                    <NavLink
                        to="/profile"
                        className="flex items-center gap-3 hover:text-white"
                    >
                        <i className="fas fa-user w-5 h-5"></i> Profile
                    </NavLink>
                    <NavLink
                        to="/resources"
                        className="flex items-center gap-3 hover:text-white"
                    >
                        <i className="fas fa-question-circle w-5 h-5"></i>{" "}
                        Resources
                    </NavLink>
                    <NavLink
                        to="/support"
                        className="flex items-center gap-3 hover:text-white"
                    >
                        <i className="fas fa-life-ring w-5 h-5"></i> Support
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className="flex items-center gap-3 hover:text-white"
                    >
                        <i className="fas fa-cog w-5 h-5"></i> Settings
                    </NavLink>
                    <div
                        onClick={() => disconnectWallet}
                        className="flex items-center hover:cursor-pointer gap-3 hover:text-white"
                    >
                        <i className="fas fa-sign-out-alt w-5 h-5"></i> Log Out
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
