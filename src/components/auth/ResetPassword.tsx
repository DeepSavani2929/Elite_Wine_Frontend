import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { showError, showSuccess } from "../../utils/toastHandler";

const ResetPassword = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    const errs: any = {};

    if (!form.password.trim()) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";

    if (!form.confirmPassword.trim())
      errs.confirmPassword = "Confirm password is required";
    else if (form.confirmPassword !== form.password)
      errs.confirmPassword = "Passwords do not match";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const payload = {
        email,
        newPassword: form.password,
      };

      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/resetPassword`,
        payload
      );

      if (res.data.success) {
        showSuccess(res.data.message);
        navigate("/login");
      } else {
        showError(res.data.message);
      }
    } catch (error: any) {
      showError(error, "Something went wrong");
    }
  };

  return (
    <div className=" mb-40 w-full bg-white  pt-12 ">
      <h2 className="text-center font-urbanist text-[28px] md:text-xl font-bold text-[#0B0B0B] mt-14 pb-6">
        RESET ACCOUNT PASSWORD
      </h2>

      <p className="text-center text-[#0B0B0B] font-medium   font-urbanist text-lg mt-3">
        Enter a new password for <br />
        <span className="font-medium">{email}</span>
      </p>

      <form
        onSubmit={handleOnSubmit}
        className="w-[90%] md:w-[38%] xl:w-[24%] mx-auto mt-16 flex flex-col gap-6"
      >
        <div>
          <label className="text-[#0B0B0B] font-urbanist font-medium text-base">
            Password
          </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              setErrors({ ...errors, password: "" });
            }}
            placeholder="Password"
            className="w-full border-b border-gray-300 placeholder:text-[#565656] font-meidum py-3.5 focus:outline-none text-md font-urbanist"
          />
          {errors.password && (
            <p className="text-red-600 font-urbanist text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <div>
          <label className="text-[#0B0B0B] font-urbanist font-medium text-base">
            Confirm Password
          </label>
          <input
            type="password"
            value={form.confirmPassword}
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
              setErrors({ ...errors, confirmPassword: "" });
            }}
            placeholder="Confirm password"
            className="w-full border-b border-gray-300 placeholder:text-[#565656] py-3 focus:outline-none  text-md font-urbanist"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 font-urbanist text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className=" bg-white text-[#0B0B0B] border border-[#0B0B0B] hover:text-white hover:bg-[#0B0B0B] rounded-full py-2.5 text-lg  font-urbanist font-semibold cursor-pointer  transition-all duration-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
