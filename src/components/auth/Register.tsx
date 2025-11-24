// import React from "react";

// const Register = () => {
//   return (
//     <>
//       {/* TOP BREADCRUMB BAR (your original block) */}
//       <div className="h-[320px] lg:h-[340px] xl:h-[320px] bg-cover bg-center relative">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#0B0B0B]">
//             Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Create Account
//           </p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="w-[95%] xl:w-[80%] mx-auto py-[50px] xl:py-[80px] flex justify-center">
//         <div className="w-full max-w-[980px] text-center">

//           {/* Heading */}
//           <h1 className="font-cormorant text-[32px] md:text-[48px] font-bold  text-[#0B0B0B]">
//             CREATE ACCOUNT
//           </h1>

//           {/* Subtitle */}
//           <p className="font-urbanist text-base font-medium md:text-md text-[#000000] mt-2 mb-10">
//             Please register below to create an account
//           </p>

//           {/* FORM */}
//           <form className="w-full flex flex-col gap-3 md:gap-6 xl:gap-7">

//             {/* First Name */}
//             <div >
//               <input
//                 type="text"
//                 className="w-full border-b border-[#D9D9D9] font-medium py-2 font-urbanist text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="First Name"
//               />
//             </div>

//             {/* Last Name */}
//             <div >

//               <input
//                 type="text"
//                 className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="Last Name"
//               />
//             </div>

//             {/* Email */}
//             <div >

//               <input
//                 type="email"
//                 className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="Your email address *"
//               />
//             </div>

//             {/* Password */}
//             <div >
//               <input
//                 type="password"
//                 className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="Your password *"
//               />
//             </div>

//             {/* Checkbox */}
//             <div className="flex items-center gap-2 mt-0 md:mt-2">
//               <input type="checkbox" className="w-4 h-4 cursor-pointer border border-[#CCCCCC]" />
//               <label className="font-urbanist font-medium text-base text-[#0B0B0B] cursor-pointer">
//                 Subscribe to email marketing
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full xl:w-[550px]   mx-auto bg-[#EED291] border border-[#EED291] mt-1.5 md:mt-0 cursor-pointer text-[#0B0B0B] font-urbanist font-semibold text-base py-2.5 xl:py-4 rounded-full  hover:bg-transparent transition-all duration-600"
//             >
//               CREATE AN ACCOUNT
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

// import React from "react";

// const Register = () => {
//   return (
//     <>
//       {/* TOP BREADCRUMB BAR */}
//       <div className="h-[320px] lg:h-[340px] xl:h-[270px] bg-cover bg-center relative">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#0B0B0B]">
//             Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Create Account
//           </p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="w-[95%] xl:w-[80%] mx-auto pb-[50px] xl:pb-[80px] flex justify-center">
//         <div className="w-full max-w-[980px] text-center">

//           {/* Heading */}
//           <h1 className="font-cormorant text-[32px] md:text-[48px] font-bold text-[#0B0B0B]">
//             CREATE ACCOUNT
//           </h1>

//           {/* Subtitle */}
//           <p className="font-urbanist text-base font-medium text-[#000000] mt-2 mb-8">
//             Please register below to create an account
//           </p>

//           {/* FORM */}
//           <form className="w-full flex flex-col gap-3 md:gap-6 ">

//             {/* First Name */}
//             <div>
//               <input
//                 type="text"
//                 className="w-full border-b border-[#D9D9D9] font-medium py-2 font-urbanist text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="First Name"
//               />
//             </div>

//             {/* Last Name */}
//             <div>
//               <input
//                 type="text"
//                 className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="Last Name"
//               />
//             </div>

//             {/* Email (Required → Red) */}
//             <div>
//               <input
//                 type="email"
//                 className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder={`Your email address *`}
//               />
//             </div>

//             {/* Password (Required → Red) */}
//             <div>
//               <input
//                 type="password"
//                 className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
//                 placeholder="Your password *"
//               />
//             </div>

//             {/* Checkbox (Now Button Color on Check) */}
//             <div className="flex items-center gap-2 mt-0 md:mt-2">
//               <input
//                 type="checkbox"
//                 className="w-5 h-5 cursor-pointer border !border-[#CCCCCC]
//                 !checked:bg-[#EED291] checked:border-[#EED291] transition-all"
//               />
//               <label className="font-urbanist font-medium text-base text-[#0B0B0B] cursor-pointer">
//                 Subscribe to email marketing
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full xl:w-[550px] mx-auto bg-[#EED291] border border-[#EED291] mt-1.5 md:mt-0 cursor-pointer text-[#0B0B0B] font-urbanist font-semibold text-base py-2.5 xl:py-3 rounded-full hover:bg-transparent transition-all duration-600"
//             >
//               CREATE AN ACCOUNT
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribed: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};

    // FIRST NAME
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }

    // LAST NAME
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    // EMAIL
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Invalid email address";
    }

    // PASSWORD
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    // SUBSCRIBE CHECKBOX (NEW VALIDATION)
    if (!formData.subscribed) {
      validationErrors.subscribed = "You must agree to email marketing";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("REGISTER FORM SUBMITTED:", formData);
    }
  };

  return (
    <>
      {/* TOP BREADCRUMB BAR */}
      <div className="h-[320px] lg:h-[340px] xl:h-[270px] bg-cover bg-center relative">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-[#0B0B0B]">
            Home <span className="font-Poppins ms-1 me-1">&gt;</span> Create
            Account
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-[95%] xl:w-[80%] mx-auto pb-[50px] xl:pb-[80px] flex justify-center">
        <div className="w-full max-w-[980px] text-center">
          <h1 className="font-cormorant text-[32px] md:text-[48px] font-bold text-[#0B0B0B]">
            CREATE ACCOUNT
          </h1>

          <p className="font-urbanist text-base font-medium text-[#000000] mt-2 mb-8">
            Please register below to create an account
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-3 md:gap-6"
          >
            {/* FIRST NAME */}
            <div>
              <input
                type="text"
                value={formData.firstName}
                placeholder="First Name"
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                  setErrors({ ...errors, firstName: "" });
                }}
                className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
              />
              {errors.firstName && (
                <p className="text-red-600 text-left text-sm mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* LAST NAME */}
            <div>
              <input
                type="text"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                  setErrors({ ...errors, lastName: "" });
                }}
                className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
              />
              {errors.lastName && (
                <p className="text-red-600 text-left text-sm mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                value={formData.email}
                placeholder="Your email address"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
                className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
              />
              {errors.email && (
                <p className="text-red-600 text-left text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                value={formData.password}
                placeholder="Your password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors({ ...errors, password: "" });
                }}
                className="w-full border-b border-[#D9D9D9] py-2 font-urbanist font-medium text-base text-[#0B0B0B] focus:outline-none placeholder:text-[#565656]"
              />
              {errors.password && (
                <p className="text-red-600 text-left text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* SUBSCRIBE CHECKBOX (WITH VALIDATION) */}
            <div>
              <div className="flex items-center gap-2 mt-0 md:mt-2">
                <input
                  type="checkbox"
                  checked={formData.subscribed}
                  onChange={(e) => {
                    setFormData({ ...formData, subscribed: e.target.checked });
                    setErrors({ ...errors, subscribed: "" });
                  }}
                  className="w-5 h-5 cursor-pointer border !border-[#CCCCCC] 
                  !checked:bg-[#EED291] checked:border-[#EED291] transition-all"
                />
                <label className="font-urbanist font-medium text-base text-[#0B0B0B] cursor-pointer">
                  Subscribe to email marketing
                </label>
              </div>

              {errors.subscribed && (
                <p className="text-red-600 text-left text-sm mt-1">
                  {errors.subscribed}
                </p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full xl:w-[550px] mx-auto bg-[#EED291] border border-[#EED291] mt-1.5 md:mt-0 cursor-pointer text-[#0B0B0B] font-urbanist font-semibold text-base py-2.5 xl:py-3 rounded-full hover:bg-transparent transition-all duration-600"
            >
              CREATE AN ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
