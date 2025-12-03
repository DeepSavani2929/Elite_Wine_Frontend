import { CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { clearGuestCartId, storeUserCartId } from "../../utils/cartIdManager";
import axios from "axios";

const ProfileDrawer = ({ isOpen, onClose }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

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


  useEffect(() => {
  if (!isOpen) {

    setLogin({
      email: "",
      password: ""
    });
    
    setLoginErrors({
      email: "",
      password: ""
    });
  }
}, [isOpen]);


  
  const isValidEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

  const validateLogin = () => {
    const errs: any = {};

    if (!login.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(login.email)) errs.email = "Invalid email address";

    if (!login.password.trim()) errs.password = "Password is required";

    setLoginErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const guestCartId = localStorage.getItem("guestCartId");

      const payload = {
        email: login.email,
        password: login.password,
        guestCartId: guestCartId || null,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        payload
      );

      if (res.data.success) {
        toast.success(res.data.message);

        storeUserCartId(res.data.cartId);

        clearGuestCartId();

        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("userName", res.data.data.firstName);
        onClose();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className={`fixed inset-0 z-[999999] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}>
 
      <div
         className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`
          fixed top-0 right-0 h-full 
          w-[335px] md:w-[380px] max-w-full bg-white z-[9999]
          shadow-xl overflow-y-auto
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between font-urbanist px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-[#0B0B0B]">Login</h2>

          <button onClick={onClose} className="text-black">
            <CircleX className="text-white cursor-pointer" fill="black" />
          </button>
        </div>

        <div className="px-6 pb-10 font-urbanist text-[#0B0B0B]">
          <label className="block text-base font-semibold text-[#0B0B0B] mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="Email Address"
            value={login.email}
            onChange={(e) => {
              setLogin((s) => ({ ...s, email: e.target.value }));
              setLoginErrors((p) => ({ ...p, email: "" }));
            }}
            className="
              w-full border border-[#CCCCCC] font-semibold rounded-full px-4 py-3 
              font-urbanist text-sm placeholder-[#565656]
            "
          />

          {loginErrors.email && (
            <p className="text-red-600 font-urbanist text-sm mt-1">{loginErrors.email}</p>
          )}

          <label className="block text-base font-semibold mb-2 mt-5">
            Password <span className="text-red-500">*</span>
          </label>

          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => {
              setLogin((s) => ({ ...s, password: e.target.value }));
              setLoginErrors((p) => ({ ...p, password: "" }));
            }}
            className="
              w-full border font-semibold border-[#CCCCCC] rounded-full px-4 py-3 
              font-urbanist text-sm placeholder-[#565656]
            "
          />

          {loginErrors.password && (
            <p className="text-red-600 font-urbanist text-sm mt-1">{loginErrors.password}</p>
          )}

          <NavLink to="/login">
            <button
              className="
              w-full bg-[#EED291] border border-[#EED291] text-base text-[#0B0B0B] rounded-full py-3 
              font-semibold mt-6 cursor-pointer uppercase hover:bg-transparent transition-all duration-600
            "
              onClick={(e) => {
                handleLoginSubmit(e);
              }}
            >
              Log In
            </button>
          </NavLink>

          <div className="text-center mt-4">
            <NavLink
              to="/reset-password"
              onClick = {onClose}
              className="underline text-base font-semibold text-[#565656] cursor-pointer"
            >
              Forgot Your Password?
            </NavLink>
          </div>

          <NavLink to="/register">
            <button
              onClick={onClose}
              className="
              w-full border cursor-pointer text-base uppercase border-[#EED291] text-[#0B0B0B] hover:text-white rounded-full py-3 hover:bg-[#0B0B0B] transition-all duration-600
              font-semibold mt-4
            "
            >
              Create Account
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
