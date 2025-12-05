export const getGuestCartId = () => localStorage.getItem("guestCartId");

export const createGuestCartId = () => {
  const id = "guest-" + crypto.randomUUID();
  localStorage.setItem("guestCartId", id);
  return id;
};

export const getUserCartId = () => localStorage.getItem("userCartId");
export const storeUserCartId = (id: string) =>
  localStorage.setItem("userCartId", id);

export const clearGuestCartId = () => localStorage.removeItem("guestCartId");
export const clearUserCartId = () => localStorage.removeItem("userCartId");

export const storeUserId = (id: string) => localStorage.setItem("userId", id);
export const clearUserId = () => localStorage.removeItem("userId");

export const clearAllCartStorage = () => {
  clearGuestCartId();
  clearUserCartId();
  clearUserId();
  localStorage.removeItem("token");
};
