// import { CircleX } from "lucide-react";
// import React from "react";

// const ProfileDrawer = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* BACKDROP */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300
//         ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         onClick={onClose}
//       />

//       {/* DRAWER PANEL */}
//       <div
//         className={`
//           fixed top-0 right-0 h-full 
//           w-[335px] md:w-[380px] max-w-full bg-white z-[9999]
//           shadow-xl overflow-y-auto
//           transition-transform duration-300 ease-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* HEADER */}
//         <div className="flex items-center justify-between font-urbanist  px-6 pt-6 pb-4">
//             <h2 className="text-lg font-semibold text-[#0B0B0B]">Login</h2>

//           <button onClick={onClose} className="text-black">
//            <CircleX className="text-white cursor-pointer" fill = "black" />
//           </button>
//         </div>

//         {/* FORM */}
//         <div className="px-6 pb-10 font-urbanist text-[#0B0B0B]">
//           {/* Email */}
//           <label className="block text-base font-semibold text-[#0B0B0B] mb-2">
//             Email Address <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="
//               w-full border border-[#CCCCCC] font-semibold rounded-full px-4 py-3 
//               font-urbanist text-sm placeholder-[#565656]
//             "
//           />

//           {/* Password */}
//           <label className="block text-base font-semibold mb-2 mt-5">
//             Password <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="password"
//             placeholder="Password"
//             className="
//               w-full border font-semibold border-[#CCCCCC] rounded-full px-4 py-3 
//               font-urbanist text-sm placeholder-[#565656]
//             "
//           />

//           {/* Login Button */}
//           <button
//             className="
//               w-full bg-[#EED291] text-base text-[#0B0B0B] rounded-full py-3 
//               font-semibold mt-6 uppercase
//             "
//           >
//             Log In
//           </button>

//           {/* Forgot Password */}
//           <div className="text-center mt-3">
//             <a className="underline text-base font-semibold text-[#565656]">Forgot your password?</a>
//           </div>

//           {/* Create Account */}
//           <button
//             className="
//               w-full border text-base uppercase border-[#EED291] text-[#0B0B0B] rounded-full py-3 
//               font-semibold mt-6
//             "
//           >
//             Create Account
//           </button>
//         </div>
//       </div>



//     </>
//   );
// };

// export default ProfileDrawer;




import { CircleX } from "lucide-react";
import React, { useState } from "react";

const ProfileDrawer = ({ isOpen, onClose }) => {
  // ---------------- LOGIN FORM STATE ----------------
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  // ---------------- EMAIL VALIDATION ----------------
  const isValidEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

  // ---------------- LOGIN VALIDATION FUNCTION ----------------
  const validateLogin = () => {
    const errs: any = {};

    if (!login.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(login.email)) errs.email = "Invalid email address";

    if (!login.password.trim()) errs.password = "Password is required";

    setLoginErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ---------------- SUBMIT HANDLER ----------------
  const handleLoginSubmit = () => {
    if (!validateLogin()) return;
    console.log("Login submitted:", login);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* DRAWER PANEL */}
      <div
        className={`
          fixed top-0 right-0 h-full 
          w-[335px] md:w-[380px] max-w-full bg-white z-[9999]
          shadow-xl overflow-y-auto
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between font-urbanist px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-[#0B0B0B]">Login</h2>

          <button onClick={onClose} className="text-black">
            <CircleX className="text-white cursor-pointer" fill="black" />
          </button>
        </div>

        {/* FORM */}
        <div className="px-6 pb-10 font-urbanist text-[#0B0B0B]">

          {/* Email */}
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

          {/* Email Error */}
          {loginErrors.email && (
            <p className="text-red-600 text-sm mt-1">{loginErrors.email}</p>
          )}

          {/* Password */}
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

          {/* Password Error */}
          {loginErrors.password && (
            <p className="text-red-600 text-sm mt-1">{loginErrors.password}</p>
          )}

          {/* Login Button */}
          <button
            className="
              w-full bg-[#EED291] text-base text-[#0B0B0B] rounded-full py-3 
              font-semibold mt-6 cursor-pointer uppercase
            "
            onClick={handleLoginSubmit}
          >
            Log In
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-3">
            <a className="underline text-base font-semibold text-[#565656] cursor-pointer">
              Forgot your password?
            </a>
          </div>

          {/* Create Account */}
          <button
            className="
              w-full border cursor-pointer text-base uppercase border-[#EED291] text-[#0B0B0B] rounded-full py-3 
              font-semibold mt-6
            "
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDrawer;
