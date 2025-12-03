import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8FFF9] px-4">
      <h1 className="font-belfast text-3xl sm:text-4xl font-semibold text-[#018D43] mb-3">
        Payment Successful!
      </h1>
      <p className="text-[#404040] font-[Poppins] text-center max-w-md">
        Thank you for your purchase. Your order has been successfully processed.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-[#018D43] cursor-pointer text-white px-6 py-2 rounded-full font-[Poppins]"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="border cursor-pointer border-[#018D43] text-[#018D43] px-6 py-2 rounded-full font-[Poppins]"
        >
          View My Orders
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
