import React from "react";
import { useNavigate } from "react-router-dom";

interface ReusableButtonProps {
  label: string;
  to: string;
  className?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ label, to, className }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`bg-[#65007D] hover:border-[#8B00AB] text-white font-semibold px-6 py-3 rounded-md ${className}`}
    >
      {label}
    </button>
  );
};

export default ReusableButton;
