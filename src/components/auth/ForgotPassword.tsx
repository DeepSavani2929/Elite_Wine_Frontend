import React, { useState } from "react";
import { clearGuestCartId, storeUserCartId } from "../../utils/cartIdManager";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { showError, showSuccess } from "../../utils/toastHandler";

const ForgotPassword = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  const [userDataErrors, setUserDataErrors] = useState({});

  const [reg, setReg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribed: false,
  });
  const [regErrors, setRegErrors] = useState({});
  const navigate = useNavigate();

  const isValidEmail = (value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

  const validateLogin = () => {
    const errs = {};
    if (!userData.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(userData.email))
      errs.email = "Invalid email address";

    setUserDataErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleOnForgotPassword = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const payload = {
        email: userData.email,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/emailVerify`,
        payload
      );

      if (res.data.success) {
          showSuccess(res.data.message);
        navigate("/login");
      } else {
          showError(res.data.message);
      }
    } catch (error) {
          showError(error, "Email is not valid!");
    }
  };

  const validateRegister = () => {
    const errs = {};
    if (!reg.firstName.trim()) errs.firstName = "First name is required";
    if (!reg.lastName.trim()) errs.lastName = "Last name is required";

    if (!reg.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(reg.email)) errs.email = "Invalid email address";

    if (!reg.password.trim()) errs.password = "Password is required";
    else if (reg.password.length < 6)
      errs.password = "Password must be at least 6 characters";

    if (!reg.subscribed)
      errs.subscribed = "Please accept marketing subscription";

    setRegErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    try {
      const guestCartId = localStorage.getItem("guestCartId");

      const payload = {
        firstName: reg.firstName,
        lastName: reg.lastName,
        email: reg.email,
        password: reg.password,
        guestCartId: guestCartId || null,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        payload
      );

      if (res.data.success) {
        showSuccess(res.data.message);
        storeUserCartId(res.data.cartId);
        clearGuestCartId();
        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("userName", res.data.firstName);
        navigate("/");
      } else {
        showError(res.data.message);
      }
    } catch (error) {
          showError(error, "Register failed");
    }
  };

  return (
    <>
      <div className="h-[200px] lg:h-[200px] xl:h-[270px] bg-cover bg-center relative">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-[#0B0B0B]">
            Home <span className="font-Poppins ms-1 me-1">&gt;</span>
            Account
          </p>
        </div>
      </div>

      <div className="w-[95%] mx-auto pb-[50px] xl:pb-[80px] pt-8">
        <h1 className=" px-0 xl:ps-32 font-cormorant text-center font-bold text-[28px] md:text-[34px] lg:text-[36px] xl:text-[48px] text-[#0B0B0B] mb-4 xl:mb-10">
          SIGN IN
        </h1>
        <div className="flex flex-col md:flex-row gap-y-12 gap-10 xl:gap-16 ">
          <div className="w-full md:w-[50%] xl:w-[45%]  pt-[36px] xl:pt-[52px]">
            <div>
              <h3 className="font-urbanist font-semibold text-lg text-[#0B0B0B] mb-1.5 xl:mb-3.5">
                Reset your password
              </h3>
              <p className="font-urbanist text-md xl:text-lg font-medium  text-[#0B0B0B] mb-3 xl:mb-8">
                We will send you an email to reset your password
              </p>

              <form
                onSubmit={handleOnForgotPassword}
                className="flex flex-col gap-2 lg:gap-2 xl:gap-8"
              >
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={(e) => {
                      setUserData((s) => ({ ...s, email: e.target.value }));
                      setUserDataErrors((p) => ({ ...p, email: "" }));
                    }}
                    className="w-full border-b border-[#CCCCCC] text-base font-medium py-3 placeholder:text-[#565656] focus:outline-none font-urbanist"
                  />
                  {userDataErrors.email && (
                    <p className="text-red-600 font-urbanist text-left text-sm mt-1">
                      {userDataErrors.email}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-5 pt-1 mt-5">
                  <button
                    type="submit"
                    className="bg-[#EED291] py-2.5 xl:py-4 px-10 xl:px-14 rounded-full border border-[#EED291] cursor-pointer hover:border-[#0B0B0B] text-[#0B0B0B] font-urbanist font-semibold shadow-sm hover:bg-transparent transition-all duration-600 uppercase"
                  >
                    submit
                  </button>

                  <button
                    type="submit"
                    onClick={() => navigate("/login")}
                    className="bg-transparent py-2.5 xl:py-4 px-10 xl:px-14 rounded-full border border-[#EED291] cursor-pointer hover:bg-[#EED291] text-[#0B0B0B] font-urbanist font-semibold shadow-sm      transition-all duration-600 uppercase"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full md:w-[50%] xl:w-[55%]">
            <div
              className="p-6 md:p-8 rounded-sm"
              style={{ backgroundColor: "#F8F8F8" }}
            >
              <h4 className="font-urbanist font-semibold text-lg text-[#0B0B0B] mb-4">
                Register
              </h4>

              <form
                onSubmit={handleRegisterSubmit}
                className="flex flex-col gap-2 lg:gap-3 xl:gap-8"
              >
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={reg.firstName}
                    onChange={(e) => {
                      setReg((s) => ({ ...s, firstName: e.target.value }));
                      setRegErrors((p) => ({ ...p, firstName: "" }));
                    }}
                    className="w-full border-b border-[#CCCCCC] text-base font-medium py-3 placeholder:text-[#565656] focus:outline-none font-urbanist"
                  />
                  {regErrors.firstName && (
                    <p className="text-red-600 font-urbanist text-left text-sm mt-1">
                      {regErrors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={reg.lastName}
                    onChange={(e) => {
                      setReg((s) => ({ ...s, lastName: e.target.value }));
                      setRegErrors((p) => ({ ...p, lastName: "" }));
                    }}
                    className="w-full border-b border-[#CCCCCC] text-base font-medium py-3 placeholder:text-[#565656] focus:outline-none font-urbanist"
                  />
                  {regErrors.lastName && (
                    <p className="text-red-600 text-left text-sm mt-1">
                      {regErrors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={reg.email}
                    onChange={(e) => {
                      setReg((s) => ({ ...s, email: e.target.value }));
                      setRegErrors((p) => ({ ...p, email: "" }));
                    }}
                    className="w-full border-b border-[#CCCCCC] text-base font-medium  py-3 placeholder:text-[#565656] focus:outline-none font-urbanist"
                  />
                  {regErrors.email && (
                    <p className="text-red-600 text-left text-sm mt-1">
                      {regErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Your password"
                    value={reg.password}
                    onChange={(e) => {
                      setReg((s) => ({ ...s, password: e.target.value }));
                      setRegErrors((p) => ({ ...p, password: "" }));
                    }}
                    className="w-full border-b border-[#CCCCCC] text-base font-medium  py-3 placeholder:text-[#565656] focus:outline-none font-urbanist"
                  />
                  {regErrors.password && (
                    <p className="text-red-600 text-left text-sm mt-1">
                      {regErrors.password}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full xl:w-[550px] mx-auto  bg-[#EED291] border border-[#EED291] mt-1.5 md:mt-2.5  cursor-pointer text-[#0B0B0B] font-urbanist font-semibold text-base py-2.5 xl:py-3 rounded-full hover:bg-transparent transition-all duration-600"
                >
                  CREATE AN ACCOUNT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
