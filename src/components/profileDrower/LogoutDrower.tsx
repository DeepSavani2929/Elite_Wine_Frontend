import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCartItems } from "../../redux/cart/cartSlice";
import { createGuestCartId } from "../../utils/cartIdManager";
import { toast } from "react-toastify";
import { showSuccess } from "../../utils/toastHandler";

const LogoutDrawer = ({ isOpen, onClose }) => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName") || "User";
  const dispatch = useDispatch();

  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLogout = () => {
    dispatch(clearCartItems());

    localStorage.removeItem("token");
    localStorage.removeItem("userCartId");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    showSuccess("User logout successfully!");
    createGuestCartId();

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[999999] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`absolute top-0 right-0 h-full w-[340px] bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between font-urbanist px-6 py-4">
          <p className="text-lg font-semibold text-[#0B0B0B]">Hi, {userName}</p>

          <button onClick={onClose} className="text-black text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 text-black font-urbanist font-regular text-sm gap-2.5">
          <p className="border-b pb-2.5 text-base cursor-pointer">
            Account Details
          </p>
          <p className="border-b pb-2.5 text-base cursor-pointer">Addresses</p>
          <p className="border-b pb-2.5 text-base cursor-pointer">
            Reset Your Password
          </p>
          <p className="cursor-pointer text-base" onClick={handleLogout}>
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoutDrawer;
