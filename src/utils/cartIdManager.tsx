// // utils/cartIdManager.ts

// // ------------------------------------------
// // GUEST CART ID — generated ONLY when needed
// // ------------------------------------------
// export const getGuestCartId = (): string | null => {
//   return localStorage.getItem("guestCartId");
// };

// export const createGuestCartId = (): string => {
//   const id =
//     "guest-" + Date.now() + "-" + Math.random().toString(36).substring(2, 10);

//   localStorage.setItem("guestCartId", id);
//   return id;
// };

// export const clearGuestCartId = (): void => {
//   localStorage.removeItem("guestCartId");
// };

// // ------------------------------------------
// // USER CART ID
// // ------------------------------------------
// export const storeUserCartId = (id: string): void => {
//   localStorage.setItem("userCartId", id);
// };

// export const getUserCartId = (): string | null => {
//   return localStorage.getItem("userCartId");
// };

// export const clearUserCartId = (): void => {
//   localStorage.removeItem("userCartId");
// };

// // ------------------------------------------
// // USER ID
// // ------------------------------------------
// export const storeUserId = (id: string): void => {
//   localStorage.setItem("userId", id);
// };

// export const getUserId = (): string | null => {
//   return localStorage.getItem("userId");
// };

// export const clearUserId = (): void => {
//   localStorage.removeItem("userId");
// };

// // ------------------------------------------
// // CLEAR ALL (after login/register merge)
// // ------------------------------------------
// export const clearAllCartStorage = (): void => {
//   clearGuestCartId();
//   clearUserCartId();
//   clearUserId();
// };


export const getGuestCartId = () => localStorage.getItem("guestCartId");

export const createGuestCartId = () => {
  const id = "guest-" + crypto.randomUUID();
  localStorage.setItem("guestCartId", id);
  return id;
};

export const getUserCartId = () => localStorage.getItem("userCartId");
export const storeUserCartId = (id: string) => localStorage.setItem("userCartId", id);

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
