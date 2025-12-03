import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F8] px-4">
      <h1 className="font-belfast text-3xl sm:text-4xl font-semibold text-[#D32F2F] mb-3">
        Payment Failed!
      </h1>
      <p className="text-[#404040] font-[Poppins] text-center max-w-md">
        Oops! Something went wrong while processing your payment.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/checkout")}
          className="bg-[#D32F2F] text-white px-6 py-2 rounded-full font-[Poppins]"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate("/")}
          className="border cursor-pointer border-[#D32F2F] text-[#D32F2F] px-6 py-2 rounded-full font-[Poppins]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
