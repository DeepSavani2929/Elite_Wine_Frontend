import { toast } from "react-toastify";

const getErrorMessage = (error, fallback = "Something went wrong") => {
  return (
    error?.response?.data?.message ||
    error?.message ||
    fallback
  );
};

export const showSuccess = (message = "Success") => {
  toast.success(message);
};

export const showError = (error, fallbackMessage) => {
  toast.error(getErrorMessage(error, fallbackMessage));
};
