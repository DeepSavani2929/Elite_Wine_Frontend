// import React from "react";
// import { Minus, Plus, X, ShieldCheck, CircleX } from "lucide-react";
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import relatedproduct1 from "../../assets/images/relatedproduct1.png";
// import relatedproduct2 from "../../assets/images/relatedproduct2.png";
// import verietyImg from "../../assets/images/variety.png";
// import ProductsChild from "../products/productsChild";
// import { useDispatch, useSelector } from "react-redux";
// import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cart/cartSlice";

// const CartDetails = () => {

//     const relatedProductsList = useSelector(
//     (state) => state.cart.relatedProducts
//   );

//     const cartItems = useSelector(
//     (state) => state.cart.cartItems
//   );

//   const dispatch = useDispatch()
  


//   const subTotal = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );
//   const total = subTotal;
//   console.log(subTotal)
//   console.log(total)

//   return (
//     <>
//       <div className="h-[320px] lg:h-[340px] xl:h-[240px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#0B0B0B] ">
//             Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Your Cart
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
//             Product detail
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto pb-[55px] xl:pb-[100px] ">
//           {/* ===================== HEADING ===================== */}
//           <h1 className="text-center font-cormorant font-bold text-[48px] text-[#0B0B0B] my-10">
//             YOUR CART
//           </h1>

//           {/* ===================== FREE SHIPPING BAR ===================== */}
//           <div className="w-full border-t border-[#D69E2E]  py-4">
//             <div className="flex items-center gap-3 px-3">
//               <p className="text-[#0B0B0B] fonr-urbanist font-semibold text-md text-[#565656]">
//                 Only <span className="text-[#D69E2E]">$29.76</span> away from
//                 Free Shipping
//               </p>
//             </div>
//           </div>

//           {/* ===================== WARNING BOX ===================== */}
//           <div className="w-full bg-[#E8C57F] mt-4 py-2 px-5 rounded-sm">
//             <p className="font-urbanist text-md font-medium text-[#0B0B0B] text-center">
//               Please, hurry! Someone has placed an order on one of the items you
//               have in the cart. We'll keep it for you for{" "}
//               <strong>37:43 minutes</strong>.
//             </p>
//           </div>

//           {/* ===================== GRID LAYOUT ===================== */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 gap-30 mt-10">
//             {/* ================================= LEFT CART TABLE ================================= */}
//             <div className="xl:col-span-2">
//               {/* TABLE HEADER */}
//               <table className="w-full border-collapse font-urbanist">
//                 <thead className="bg-[#F8F8F8]">
//                   <tr className="text-left  border-[#E5E5E5]">
//                     <th className="py-3 px-12 font-urbanist font-semibold text-[#0B0B0B] text-md">
//                       Product
//                     </th>
//                     <th className="py-3 font-urbanist font-semibold text-center text-[#0B0B0B] text-md">
//                       Price
//                     </th>
//                     <th className="py-3 ps-4 pe-5 font-urbanist text-center font-semibold text-[#0B0B0B] text-md">
//                       Quantity
//                     </th>
//                     <th className="py-3 pe-8 ps-6 font-urbanist text-center font-semibold text-[#0B0B0B] text-md">
//                       Total
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {cartItems.map((product, index) => (
//                     <>
//                       <tr className="border-b border-[#E5E5E5]">
//                         <td className="py-6">
//                           <div className="flex  items-center gap-6">
//                             <CircleX className="text-[#0B0B0B] cursor-pointer"  onClick={() => dispatch(removeFromCart(product.id))} />

//                             <div className="border border-[#CCCCCC] py-2 px-5">
//                               <img
//                                 src={product.productImg}
//                                 className="w-24 h-28 object-contain"
//                                 alt="product"
//                               />
//                             </div>

//                             <div>
//                               <p className="font-urbanist text-[#641026] font-semibold text-md ">
//                                 {product.productName}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         {/* PRICE */}
//                         <td className="font-urbanist font-semibold text-center text-[#0B0B0B] text-md">
//                           ${product.price}
//                         </td>

//                         {/* QUANTITY */}
//                         <td >
//                           <div className="text-center flex justify-center ">
//                           <div className="flex items-center gap-8 border font-urbanist  border-[#EED291] rounded-full px-6 py-2 w-fit">
//                             <Minus size={16} className="cursor-pointer"  onClick={() => dispatch(decreaseQuantity(product))}/>
//                             <span className=" text-xl font-semibold">{product.quantity}</span>
//                             <Plus size={16} className="cursor-pointer"  onClick={() => dispatch(increaseQuantity(product))} />
//                           </div>
//                           </div>

//                         </td>

//                         {/* TOTAL */}
//                         <td className="font-urbanist text-center font-semibold text-[#0B0B0B] text-md">
//                           ${(Number(product.price) * product.quantity).toFixed(2)}
//                         </td>
//                       </tr>
//                     </>
//                   ))}
//                 </tbody>
//               </table>

//               {/* REMOVE / GIFT WRAP SECTION */}
//               {/* <div className="flex items-center justify-between mt-4 py-4 border-b border-[#E5E5E5]">
//                 <button className="flex items-center gap-2 text-[#0B0B0B] text-[15px] font-urbanist">
//                   <X size={18} /> REMOVE
//                 </button>

//                 <button className="flex items-center gap-2 text-[#0B0B0B] text-[15px] font-urbanist">
//                   <span>DO YOU WANT A GIFT WRAP? ONLY FOR $10.00</span>
//                   <span className="underline font-bold">ADD</span>
//                 </button>
//               </div> */}

//               {/* SPECIAL INSTRUCTIONS */}
//               <div className="mt-6">
//                 <p className="font-urbanist font-semibold text-[15px] mb-2">
//                   Additional Comments
//                 </p>

//                 <textarea
//                   placeholder="Special Instruction For Seller..."
//                   className="w-full h-[140px] border border-[#E5E5E5] rounded-xl p-4 text-sm resize-none"
//                 ></textarea>
//               </div>

//               {/* SECURE SHOPPING */}
//               <div className="flex items-center gap-2 mt-5">
//                 <ShieldCheck className="text-[#0B0B0B]" size={18} />
//                 <span className="text-[#0B0B0B] text-[14px] font-urbanist">
//                   Secure Shopping Guarantee
//                 </span>
//               </div>
//             </div>

//             {/* ================================= RIGHT SUMMARY CARD ================================= */}
//             <div className="border border-[#E5E5E5] rounded-md p-6">
//               <div className="flex justify-between mb-3">
//                 <span className="font-urbanist font-bold text-[15px]">
//                   Subtotal
//                 </span>
//                 <span className="font-urbanist font-bold text-[15px]">
//                   $ 29.76
//                 </span>
//               </div>

//               {/* SHIPPING ESTIMATE */}
//               <p className="font-urbanist font-semibold text-[14px] mt-5 mb-2">
//                 Get Shipping Estimate:
//               </p>

//               <select className="w-full border border-[#E5E5E5] py-2 rounded-md text-sm">
//                 <option>------</option>
//                 <option>USA</option>
//                 <option>Canada</option>
//               </select>

//               <input
//                 placeholder="Postal Code"
//                 className="w-full border border-[#E5E5E5] py-2 px-3 rounded-md mt-3 text-sm"
//               />

//               <button className="w-full mt-3 bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
//                 CALCULATE SHIPPING
//               </button>

//               {/* COUPON */}
//               <p className="font-urbanist font-semibold text-[14px] mt-6 mb-2">
//                 Coupon Code
//               </p>

//               <input
//                 placeholder="Enter Coupon Code"
//                 className="w-full border border-[#E5E5E5] py-2 px-3 rounded-md text-sm"
//               />

//               <p className="text-[12px] text-[#565656] mt-1">
//                 Coupon code will be applied on the checkout page
//               </p>

//               {/* TOTAL */}
//               <div className="flex justify-between mt-5 pb-2">
//                 <span className="font-urbanist font-bold text-[16px]">
//                   Total
//                 </span>
//                 <span className="font-urbanist font-bold text-[16px]">
//                   $ 29.76
//                 </span>
//               </div>

//               <p className="text-[12px] text-[#565656] mb-6">
//                 Tax included and shipping calculated at checkout
//               </p>

//               <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full">
//                 PROCEED TO CHECKOUT
//               </button>

//               <button className="w-full border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3">
//                 CONTINUE SHOPPING
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//           <div className="flex flex-col items-center gap-8 text-center w-full">
//             <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
//               Related Products
//             </p>

//             <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
//               {relatedProductsList.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-[#0B0B0B] text-center ">
//               VIEW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartDetails;




// import React from "react";
// import { Minus, Plus, X, ShieldCheck, CircleX } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../../redux/cart/cartSlice";
// import ProductsChild from "../products/productsChild";

// const CartDetails = () => {
//   const relatedProductsList = useSelector(
//     (state) => state.cart.relatedProducts
//   );

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const dispatch = useDispatch();

//   const subTotal = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   const total = subTotal;

//   return (
//     <>
//       {/* ===================== BANNER ===================== */}
//       <div className="h-[320px] lg:h-[340px] xl:h-[240px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#0B0B0B] ">
//             Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Your Cart
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
//             Product detail
//           </p>
//         </div>
//       </div>

//       {/* ===================== MAIN WRAPPER ===================== */}
//       <div className="w-full">
//         <div className="w-[95%] mx-auto pb-[55px] xl:pb-[100px] ">
//           {/* ===================== HEADING ===================== */}
//           <h1 className="text-center font-cormorant font-bold text-[48px] text-[#0B0B0B] my-10">
//             YOUR CART
//           </h1>

//           {/* ===================== FREE SHIPPING BAR ===================== */}
//           <div className="w-full border-t border-[#D69E2E] py-4">
//             <div className="flex items-center gap-3 px-3">
//               <p className="text-[#565656] font-urbanist font-semibold text-md">
//                 Only <span className="text-[#D69E2E]">$29.76</span> away from
//                 Free Shipping
//               </p>
//             </div>
//           </div>

//           {/* ===================== WARNING BOX ===================== */}
//           <div className="w-full bg-[#E8C57F] mt-4 py-2 px-5 rounded-sm">
//             <p className="font-urbanist text-md font-medium text-[#0B0B0B] text-center">
//               Please, hurry! Someone has placed an order on one of the items you
//               have in the cart. We'll keep it for you for{" "}
//               <strong>37:43 minutes</strong>.
//             </p>
//           </div>

//           {/* ===================== GRID LAYOUT ===================== */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 gap-30 mt-10">
//             {/* ===================== LEFT CART TABLE ===================== */}
//             <div className="xl:col-span-2">
//               <table className="w-full border-collapse font-urbanist">
//                 <thead className="bg-[#F8F8F8]">
//                   <tr className="text-left border-[#E5E5E5]">
//                     <th className="py-3 px-12 font-semibold text-[#0B0B0B] text-md">
//                       Product
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Price
//                     </th>
//                     <th className="py-3 ps-4 pe-5 text-center font-semibold text-[#0B0B0B] text-md">
//                       Quantity
//                     </th>
//                     <th className="py-3 pe-8 ps-6 text-center font-semibold text-[#0B0B0B] text-md">
//                       Total
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {cartItems.map((product, index) => (
//                     <tr key={index} className="border-b border-[#E5E5E5]">
//                       <td className="py-6">
//                         <div className="flex items-center gap-6">
//                           <CircleX
//                             className="text-[#0B0B0B] cursor-pointer"
//                             onClick={() => dispatch(removeFromCart(product.id))}
//                           />

//                           <div className="border border-[#CCCCCC] py-2 px-5">
//                             <img
//                               src={product.productImg}
//                               className="w-24 h-28 object-contain"
//                               alt="product"
//                             />
//                           </div>

//                           <div>
//                             <p className="font-urbanist text-[#641026] font-semibold text-md">
//                               {product.productName}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="font-semibold text-center text-[#0B0B0B] text-md">
//                         ${product.price}
//                       </td>

//                       <td>
//                         <div className="flex justify-center">
//                           <div className="flex items-center gap-8 border border-[#EED291] rounded-full px-6 py-2">
//                             <Minus
//                               size={16}
//                               className="cursor-pointer"
//                               onClick={() => dispatch(decreaseQuantity(product))}
//                             />
//                             <span className="text-xl font-semibold">
//                               {product.quantity}
//                             </span>
//                             <Plus
//                               size={16}
//                               className="cursor-pointer"
//                               onClick={() => dispatch(increaseQuantity(product))}
//                             />
//                           </div>
//                         </div>
//                       </td>

//                       <td className="font-semibold text-center text-[#0B0B0B] text-md">
//                         ${(Number(product.price) * product.quantity).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* ===================== SPECIAL INSTRUCTIONS ===================== */}
//               <div className="mt-6">
//                 <p className="font-urbanist font-semibold text-[15px] mb-2">
//                   Additional Comments
//                 </p>

//                 <textarea
//                   placeholder="Special Instruction For Seller..."
//                   className="w-full h-[140px] border border-[#E5E5E5] rounded-xl p-4 text-sm resize-none"
//                 ></textarea>
//               </div>

//               <div className="flex items-center gap-2 mt-5">
//                 <ShieldCheck className="text-[#0B0B0B]" size={18} />
//                 <span className="text-[#0B0B0B] text-[14px] font-urbanist">
//                   Secure Shopping Guarantee
//                 </span>
//               </div>
//             </div>

//             {/* ===================== UPDATED RIGHT CART TOTAL CARD ===================== */}
//             <div
//               className="
//                 border border-[#E5E5E5] 
//                 rounded-lg 
//                 p-6 
//                 shadow-sm 
//                 w-full
//                 xl:w-[360px] 
//                 mx-auto
//               "
//             >
//               {/* Subtotal Row */}
//               <div className="flex justify-between mb-3">
//                 <span className="font-urbanist font-bold text-[16px]">
//                   Subtotal
//                 </span>
//                 <span className="font-urbanist font-bold text-[16px]">
//                   ${subTotal.toFixed(2)}
//                 </span>
//               </div>

//               {/* Shipping Estimate */}
//               <p className="font-urbanist font-semibold text-[14px] mt-5 mb-2">
//                 Get Shipping Estimate:
//               </p>

//               <select className="w-full border border-[#E5E5E5] py-2 rounded-md text-sm px-2">
//                 <option>------</option>
//                 <option>USA</option>
//                 <option>Canada</option>
//               </select>

//               <input
//                 placeholder="Postal Code"
//                 className="w-full border border-[#E5E5E5] py-2 px-3 rounded-md mt-3 text-sm"
//               />

//               <button className="w-full mt-3 bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
//                 CALCULATE SHIPPING
//               </button>

//               {/* Coupon Code */}
//               <p className="font-urbanist font-semibold text-[14px] mt-6 mb-2">
//                 Coupon Code
//               </p>

//               <input
//                 placeholder="Enter Coupon Code"
//                 className="w-full border border-[#E5E5E5] py-2 px-3 rounded-md text-sm"
//               />

//               <p className="text-[12px] text-[#565656] mt-1">
//                 Coupon code will be applied on the checkout page
//               </p>

//               {/* Total */}
//               <div className="flex justify-between mt-5 pb-2 border-b border-[#E5E5E5]">
//                 <span className="font-urbanist font-bold text-[16px]">
//                   Total
//                 </span>
//                 <span className="font-urbanist font-bold text-[16px]">
//                   ${total.toFixed(2)}
//                 </span>
//               </div>

//               <p className="text-[12px] text-[#565656] mt-2 mb-6">
//                 Tax included and shipping calculated at checkout
//               </p>

//               {/* Buttons */}
//               <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full">
//                 PROCEED TO CHECKOUT
//               </button>

//               <button className="w-full border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3">
//                 CONTINUE SHOPPING
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===================== RELATED PRODUCTS ===================== */}
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//           <div className="flex flex-col items-center gap-8 text-center w-full">
//             <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
//               Related Products
//             </p>

//             <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
//               {relatedProductsList.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-[#0B0B0B] text-center ">
//               VIEW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartDetails;




// import React from "react";
// import { Minus, Plus, ShieldCheck, CircleX, Gift } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../../redux/cart/cartSlice";
// import ProductsChild from "../products/productsChild";

// const CartDetails = () => {
//   const relatedProductsList = useSelector(
//     (state) => state.cart.relatedProducts
//   );

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const dispatch = useDispatch();

//   const subTotal = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   const total = subTotal;

//   return (
//     <>
//       {/* ===================== BANNER ===================== */}
//       <div className="h-[320px] lg:h-[340px] xl:h-[240px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#0B0B0B] ">
//             Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Your Cart
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
//             Product detail
//           </p>
//         </div>
//       </div>

//       {/* ===================== MAIN WRAPPER ===================== */}
//       <div className="w-full">
//         <div className="w-[95%] mx-auto pb-[55px] xl:pb-[100px] ">
//           {/* ===================== HEADING ===================== */}
//           <h1 className="text-center font-cormorant font-bold text-[48px] text-[#0B0B0B] my-10">
//             YOUR CART
//           </h1>

//           {/* ===================== FREE SHIPPING BAR ===================== */}
//           <div className="w-full border-t border-[#D69E2E] py-4">
//             <div className="flex items-center gap-3 px-3">
//               <p className="text-[#565656] font-urbanist font-semibold text-md">
//                 Only <span className="text-[#D69E2E]">$29.76</span> away from
//                 Free Shipping
//               </p>
//             </div>
//           </div>

//           {/* ===================== WARNING BOX ===================== */}
//           <div className="w-full bg-[#E8C57F] mt-4 py-2 px-5 rounded-sm">
//             <p className="font-urbanist text-md font-medium text-[#0B0B0B] text-center">
//               Please, hurry! Someone has placed an order on one of the items you
//               have in the cart. We'll keep it for you for{" "}
//               <strong>37:43 minutes</strong>.
//             </p>
//           </div>

//           {/* ===================== GRID LAYOUT ===================== */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 gap-30 mt-10">
//             {/* ===================== LEFT CART TABLE ===================== */}
//             <div className="xl:col-span-2">

//               {/* MOBILE LAYOUT (425px / 375px / 320px) */}
//               <div className="md:hidden flex flex-col gap-6">
//                 {cartItems.map((product, index) => (
//                   <div
//                     key={index}
//                     className="border-b border-[#E5E5E5] pb-4"
//                   >
//                     {/* Row 1 — Delete icon, image, title, price */}
//                     <div className="flex gap-4">
//                       {/* DELETE ICON - stays LEFT (your requirement) */}
//                       <CircleX
//                         className="text-[#0B0B0B] flex-shrink-0 cursor-pointer self-start mt-1"
//                         onClick={() => dispatch(removeFromCart(product.id))}
//                       />

//                       {/* IMAGE */}
//                       <div className="border border-[#CCCCCC] p-2 w-[75px] h-[90px] flex-shrink-0">
//                         <img
//                           src={product.productImg}
//                           className="w-full h-full object-contain"
//                           alt="product"
//                         />
//                       </div>

//                       {/* TITLE + PRICE */}
//                       <div className="flex flex-col justify-between w-full">
//                         <p className="font-urbanist text-[#641026] font-semibold text-[14px] leading-tight">
//                           {product.productName}
//                         </p>

//                         <p className="text-right font-urbanist font-bold text-[15px] mt-1">
//                           ${product.price}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Row 2 — Quantity Selector */}
//                     <div className="flex justify-start mt-3">
//                       <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-6 py-2">
//                         <Minus
//                           size={16}
//                           className="cursor-pointer"
//                           onClick={() => dispatch(decreaseQuantity(product))}
//                         />
//                         <span className="text-lg font-semibold">
//                           {product.quantity}
//                         </span>
//                         <Plus
//                           size={16}
//                           className="cursor-pointer"
//                           onClick={() => dispatch(increaseQuantity(product))}
//                         />
//                       </div>
//                     </div>

//                     {/* Row 3 — Total */}
//                     <div className="text-right mt-2 font-urbanist font-bold text-[15px]">
//                       ${(Number(product.price) * product.quantity).toFixed(2)}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* DESKTOP TABLE (unchanged) */}
//               <table className="w-full border-collapse font-urbanist hidden md:table">
//                 <thead className="bg-[#F8F8F8]">
//                   <tr className="text-left border-[#E5E5E5]">
//                     <th className="py-3 px-12 font-semibold text-[#0B0B0B] text-md">
//                       Product
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Price
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Quantity
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Total
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {cartItems.map((product, index) => (
//                     <tr key={index} className="border-b border-[#E5E5E5]">
//                       <td className="py-6">
//                         <div className="flex items-center gap-6">
//                           <CircleX
//                             className="text-[#0B0B0B] cursor-pointer"
//                             onClick={() => dispatch(removeFromCart(product.id))}
//                           />

//                           <div className="border border-[#CCCCCC] py-2 px-5">
//                             <img
//                               src={product.productImg}
//                               className="w-24 h-28 object-contain"
//                               alt="product"
//                             />
//                           </div>

//                           <div>
//                             <p className="font-urbanist text-[#641026] font-semibold text-md">
//                               {product.productName}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="font-semibold text-center text-[#0B0B0B] text-md">
//                         ${product.price}
//                       </td>

//                       <td>
//                         <div className="flex justify-center">
//                           <div className="flex items-center gap-8 border border-[#EED291] rounded-full px-6 py-2">
//                             <Minus
//                               size={16}
//                               className="cursor-pointer"
//                               onClick={() => dispatch(decreaseQuantity(product))}
//                             />
//                             <span className="text-xl font-semibold">
//                               {product.quantity}
//                             </span>
//                             <Plus
//                               size={16}
//                               className="cursor-pointer"
//                               onClick={() => dispatch(increaseQuantity(product))}
//                             />
//                           </div>
//                         </div>
//                       </td>

//                       <td className="font-semibold text-center text-[#0B0B0B] text-md">
//                         ${(Number(product.price) * product.quantity).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <div className="flex gap-3 mt-5 items-center font-urbanist text-base">
//                 <p ><Gift className="w-[24px] h-[24px] " /></p>
//                 <p className="font-semibold text-[#565656] pt-1">DO YOU WANT A GIFT WRAP? ONLY FOR $10.00</p>
//                 <p className="underline font-semibold text-[#0B0B0B] pt-1">ADD</p>
//               </div>
        
//               <div className="mt-6">
//                 <p className="font-urbanist font-semibold text-base text-[#0B0B0B] mb-3">
//                   Additional Comments
//                 </p>

//                 <textarea
//                   placeholder="Special Instruction For Seller..."
//                   className="w-full h-[140px] font-urbanist border font-medium border-[#E5E5E5] text-[#565656] rounded-xl p-4 text-base resize-none"
//                 ></textarea>
//               </div>

//               <div className="flex items-center gap-2 mt-4">
//                 <ShieldCheck className="text-white w-[24px] h-[24px]"  fill="#0B0B0B" size={18} />
//                 <span className="text-[#565656] font-semibold text-base font-urbanist">
//                   Secure Shopping Guarantee
//                 </span>
//               </div>
//             </div>

//             {/* ===================== RIGHT CART SUMMARY CARD (UNCHANGED) ===================== */}
//             <div className="w-full md:w-[380px] xl:mx-auto font-urbanist text-[#0B0B0B]">

//               <div>
                
//               </div>
//                <div className="mb-3.5 font-urbanist text-[#0B0B0B] font-semibold text-md">
//                 Cart Totals
//                </div>
//               <div className="bg-[#F8F8F8]  p-6 ">
//                  <div className="flex justify-between mb-3 border-b pb-3 border-[#CCCCCC]">
//                 <span className="font-urbanist font-medium text-base text-[#0B0B0B]">Subtotal</span>
//                 <span className="font-urbanist font-semibold text-md">
//                   ${subTotal.toFixed(2)}
//                 </span>
//               </div>

//               <p className="font-urbanist font-medium text-base mt-5 mb-4">
//                 Get Shipping Estimate:
//               </p>

//               <select className="w-full border border-[#CCCCCC] cursor-pointer bg-[#FFFFFF] placeholder:text-[#0B0B0B] text-[#0B0B0B] py-3.5 px-5 rounded-full text-sm mb-5">
//                 <option>------</option>
//                 <option>USA</option>
//                 <option>Canada</option>
//               </select>

//               <input
//                 placeholder="Postal Code"
//                 className="w-full border xl:w-[210px] text-[#0B0B0B] placeholder:text-[#0B0B0B] outline-none border-[#CCCCCC] bg-[#FFFFFF] py-3.5 px-5 rounded-full mb-7 text-base"
//               />

//               <button className="w-full mb-7 bg-[#EED291] text-base   text-[#0B0B0B] font-semibold py-3 rounded-full cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
//                 CALCULATE SHIPPING
//               </button>

//               <hr className="text-[#CCCCCC]"/>

//               <p className="font-urbanist font-medium text-base text-[#0B0B0B] mt-7 mb-4">
//                 Coupon Code
//               </p>

//               <input
//                 placeholder="Enter Coupon Code"
//                 className="w-full border border-[#CCCCCC] cursor-pointer bg-[#FFFFFF] placeholder:text-[#0B0B0B] text-[#0B0B0B] py-3.5 px-6 rounded-full mb-3 text-base"
//               />

//               <p className="text-sm text-[#565656] border-b border-[#CCCCCC] mt-1 pb-6 font-medium">
//                 Coupon code will be applied on the checkout page
//               </p>

//               <div className="flex justify-between mt-6 pb-4  border-b border-[#CCCCCC]">
//                 <span className="font-urbanist font-medium text-base">Total</span>
//                 <span className="font-urbanist font-semibold text-md">
//                   ${total.toFixed(2)}
//                 </span>
//               </div>

//               <p className="text-sm text-[#565656] font-medium mt-4 mb-6">
//                 Tax included and shipping calculated at checkout
//               </p>

//               <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
//                 PROCEED TO CHECKOUT
//               </button>

//               <button className="w-full border border-[#EED291] bg-[#FFFFFF] text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3 cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
//                 CONTINUE SHOPPING
//               </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===================== RELATED PRODUCTS ===================== */}
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//           <div className="flex flex-col items-center gap-8 text-center w-full">
//             <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
//               Related Products
//             </p>

//             <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
//               {relatedProductsList.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-center text-[#0B0B0B]">
//               VIEW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartDetails;



// import React from "react";
// import { Minus, Plus, ShieldCheck, CircleX, Gift } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../../redux/cart/cartSlice";
// import ProductsChild from "../products/productsChild";

// const CartDetails = () => {
//   const relatedProductsList = useSelector(
//     (state) => state.cart.relatedProducts
//   );

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const dispatch = useDispatch();

//   const subTotal = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   const total = subTotal;

//   return (
//     <>
//       {/* ===================== BANNER ===================== */}
//       <div className="h-[320px] lg:h-[340px] xl:h-[240px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#0B0B0B] ">
//             Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Your Cart
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
//             Product detail
//           </p>
//         </div>
//       </div>

//       {/* ===================== MAIN WRAPPER ===================== */}
//       <div className="w-full">
//         <div className="w-[95%] mx-auto pb-[55px] xl:pb-[100px] ">

//           {/* ===================== HEADING ===================== */}
//           <h1 className="text-center font-cormorant font-bold text-[48px] text-[#0B0B0B] my-10">
//             YOUR CART
//           </h1>

//           {cartItems.length === 0 && (
//             <div className="w-full text-center py-20">
//               <p className="font-cormorant font-bold text-[32px] text-[#0B0B0B]">
//                 Your cart is empty.
//               </p>
//               <p className="font-urbanist text-[#565656] mt-2 text-base">
//                 Add some products to continue shopping.
//               </p>
//             </div>
//           )}



//           {/* ===================== FREE SHIPPING BAR ===================== */}
//           <div className="w-full border-t border-[#D69E2E] py-4">
//             <div className="flex items-center gap-3 px-3">
//               <p className="text-[#565656] font-urbanist font-semibold text-md">
//                 Only <span className="text-[#D69E2E]">$29.76</span> away from
//                 Free Shipping
//               </p>
//             </div>
//           </div>

//           {/* ===================== WARNING BOX ===================== */}
//           <div className="w-full bg-[#E8C57F] mt-4 py-2 px-5 rounded-sm">
//             <p className="font-urbanist text-md font-medium text-[#0B0B0B] text-center">
//               Please, hurry! Someone has placed an order on one of the items you
//               have in the cart. We'll keep it for you for{" "}
//               <strong>37:43 minutes</strong>.
//             </p>
//           </div>

//           {/* ===================== GRID LAYOUT ===================== */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-30 mt-10">

//             {/* ===================== LEFT CART TABLE ===================== */}
//             <div className="xl:col-span-2">

//               {/* MOBILE LAYOUT */}
//               <div className="md:hidden flex flex-col gap-6">
//                 {cartItems.map((product, index) => (
//                   <div key={index} className="border-b border-[#E5E5E5] pb-4">
//                     <div className="flex gap-4">
//                       <CircleX
//                         className="text-[#0B0B0B] cursor-pointer mt-1"
//                         onClick={() => dispatch(removeFromCart(product.id))}
//                       />

//                       <div className="border border-[#CCCCCC] p-2 w-[75px] h-[90px] flex-shrink-0">
//                         <img
//                           src={product.productImg}
//                           className="w-full h-full object-contain"
//                           alt="product"
//                         />
//                       </div>
                      

//                     <div className="flex flex-col items-start w-full">
//                     <div className="flex  justify-between items-start  w-full">
//                         <p className="font-urbanist text-[#641026] font-semibold text-[14px] pt-1 leading-tight">
//                           {product.productName}
//                         </p>

//                         <p className="text-right font-urbanist font-bold text-[15px] mt-1">
//                           ${product.price}
//                         </p>
//                       </div>

//                                       <div className="flex justify-start mt-3">
//                       <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-6 py-2">
//                         <Minus size={16} onClick={() => dispatch(decreaseQuantity(product))} className="cursor-pointer" />
//                         <span className="text-lg font-semibold">{product.quantity}</span>
//                         <Plus size={16} onClick={() => dispatch(increaseQuantity(product))} className="cursor-pointer" />
//                       </div>
//                     </div>
//                     </div>


                    
    
//                     </div>
        

// {/* 
//                     <div className="text-right mt-2 font-urbanist font-bold text-[15px]">
//                       ${(Number(product.price) * product.quantity).toFixed(2)}
//                     </div> */}
//                   </div>
//                 ))}
//               </div>

//               {/* DESKTOP TABLE */}
//                  <div className="overflow-x-auto lg:overflow-x-auto md:overflow-x-auto scrollbar-thin">

//                   <table className="w-full border-collapse font-urbanist hidden md:table">
//                 <thead className="bg-[#F8F8F8]">
//                   <tr className="text-left border-[#E5E5E5]">
//                     <th className="py-3 px-12 font-semibold text-[#0B0B0B] text-md">
//                       Product
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Price
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Quantity
//                     </th>
//                     <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
//                       Total
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {cartItems.map((product, index) => (
//                     <tr key={index} className="border-b border-[#E5E5E5]">
//                       <td className="py-6">
//                         <div className="flex items-center gap-6">
//                           <CircleX
//                             className="text-[#0B0B0B] cursor-pointer"
//                             onClick={() => dispatch(removeFromCart(product.id))}
//                           />

//                           <div className="border border-[#CCCCCC] py-2 px-5">
//                             <img
//                               src={product.productImg}
//                               className="w-24 h-28 object-contain"
//                               alt="product"
//                             />
//                           </div>

//                           <div>
//                             <p className="font-urbanist text-[#641026] font-semibold text-md">
//                               {product.productName}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="font-semibold text-center text-[#0B0B0B] text-md">
//                         ${product.price}
//                       </td>

//                       <td>
//                         <div className="flex justify-center">
//                           <div className="flex items-center gap-8 border border-[#EED291] rounded-full px-6 py-2">
//                             <Minus size={16} className="cursor-pointer" onClick={() => dispatch(decreaseQuantity(product))} />
//                             <span className="text-xl font-semibold">{product.quantity}</span>
//                             <Plus size={16} className="cursor-pointer" onClick={() => dispatch(increaseQuantity(product))} />
//                           </div>
//                         </div>
//                       </td>

//                       <td className="font-semibold text-center text-[#0B0B0B] text-md">
//                         ${(Number(product.price) * product.quantity).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//                  </div>
              

//               {/* GIFT WRAP */}
//               <div className="flex gap-3 mt-5 items-center font-urbanist text-base">
//                 <Gift className="w-[24px] h-[24px]" fill="black" stroke="black" />
//                 <p className="font-semibold text-[#565656] pt-1">DO YOU WANT A GIFT WRAP? ONLY FOR $10.00</p>
//                 <p className="underline font-semibold text-[#0B0B0B] pt-1">ADD</p>
//               </div>

//               {/* ADDED COMMENTS */}
//               <div className="mt-6">
//                 <p className="font-urbanist font-semibold text-base text-[#0B0B0B] mb-3">
//                   Additional Comments
//                 </p>

//                 <textarea
//                   placeholder="Special Instruction For Seller..."
//                   className="w-full h-[140px] font-urbanist border font-medium border-[#E5E5E5] text-[#565656] rounded-xl p-4 text-base resize-none"
//                 ></textarea>
//               </div>

//               <div className="flex items-center gap-2 mt-4">
//                 <ShieldCheck className="text-white w-[24px] h-[24px]" fill="#0B0B0B" size={18} />
//                 <span className="text-[#565656] font-semibold text-base font-urbanist">
//                   Secure Shopping Guarantee
//                 </span>
//               </div>
//             </div>

//             {/* ===================== RIGHT SIDE (CARD + BUTTONS) ===================== */}

//             {/* 
//               --- NEW LAYOUT LOGIC --- 
//               For widths between 768px and 1024px:
//               - Wrap the card and buttons in a TWO-COLUMN layout.
//             */}

//             <div className="
//               w-full 
//               font-urbanist text-[#0B0B0B]

//               /* For tablet & laptop */
//               md:grid md:grid-cols-2 md:gap-4 xl:gap-6
//               md:bg-[#F8F8F8] xl:bg-white
//               /* For desktop >1024 keep your original behavior */
//               xl:block
//             ">

//               {/* LEFT COLUMN: CARD */}
//               <div className="bg-[#F8F8F8] pt-6 px-5 lg:px-6 md:h-fit md:self-start md:w-full">
//                 <div className="mb-3.5 font-semibold text-md">Cart Totals</div>

//                 <div className="flex justify-between mb-3 border-b pb-3 border-[#CCCCCC]">
//                   <span className="font-medium text-base text-[#0B0B0B]">Subtotal</span>
//                   <span className="font-semibold text-md">${subTotal.toFixed(2)}</span>
//                 </div>

//                 <p className="font-medium text-base mt-5 mb-4">Get Shipping Estimate:</p>

//                 <select className="w-full border border-[#CCCCCC] cursor-pointer bg-[#FFFFFF] text-[#0B0B0B] py-3.5 px-5 rounded-full text-sm mb-5">
//                   <option>------</option>
//                   <option>USA</option>
//                   <option>Canada</option>
//                 </select>

//                 <input
//                   placeholder="Postal Code"
//                   className="w-full border text-[#0B0B0B] placeholder:text-[#0B0B0B] outline-none border-[#CCCCCC] bg-[#FFFFFF] py-3.5 px-5 rounded-full mb-7 text-base"
//                 />

//                 <button className="w-full mb-7 bg-[#EED291] text-base text-[#0B0B0B] font-semibold py-3 rounded-full cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
//                   CALCULATE SHIPPING
//                 </button>

//                 <hr className="text-[#CCCCCC]" />

//                 <p className="font-medium text-base text-[#0B0B0B] mt-7 mb-4">Coupon Code</p>

//                 <input
//                   placeholder="Enter Coupon Code"
//                   className="w-full border border-[#CCCCCC] cursor-pointer bg-[#FFFFFF] placeholder:text-[#0B0B0B] text-[#0B0B0B] py-3.5 px-6 rounded-full mb-3 text-base"
//                 />

//                 <p className="text-sm text-[#565656] border-b border-[#CCCCCC] mt-1 pb-6 font-medium">
//                   Coupon code will be applied on the checkout page
//                 </p>

//                 <div className="flex justify-between mt-6 pb-4 border-b border-[#CCCCCC]">
//                   <span className="font-medium text-base">Total</span>
//                   <span className="font-semibold text-md">${total.toFixed(2)}</span>
//                 </div>

//                 <p className="text-sm text-[#565656] font-medium mt-4  mb-0 md:mb-4 xl:mb-0 pb-4 md:pb-0 xl:pb-4">
//                   Tax included and shipping calculated at checkout
//                 </p>
//               </div>

//               {/* RIGHT COLUMN: BUTTONS (STACKED) */}
//               <div className="flex bg-[#F8F8F8]  pb-7 md:pb-0 xl:pb-7 px-4 md:px-0 xl:px-6 flex-col justify-start md:pt-15   xl:pt-0 gap-y-2 md:w-full">

//                 <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
//                   PROCEED TO CHECKOUT
//                 </button>

//                 <button className="w-full border border-[#EED291] bg-[#FFFFFF] text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3 cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
//                   CONTINUE SHOPPING
//                 </button>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ===================== RELATED PRODUCTS ===================== */}
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//           <div className="flex flex-col items-center gap-8 text-center w-full">
//             <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
//               Related Products
//             </p>

//             <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
//               {relatedProductsList.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-center text-[#0B0B0B]">
//               VIEW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartDetails;




import React from "react";
import { Minus, Plus, ShieldCheck, CircleX, Gift } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cart/cartSlice";
import ProductsChild from "../products/productsChild";

const CartDetails = () => {
  const relatedProductsList = useSelector(
    (state) => state.cart.relatedProducts
  );

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const subTotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const total = subTotal;

  return (
    <>
      {/* ===================== BANNER ===================== */}
      <div className="h-[200px] lg:h-[245px] xl:h-[250px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-[#0B0B0B] ">
            Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Your Cart
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
            Product detail
          </p>
        </div>
      </div>

      {/* ===================== MAIN WRAPPER ===================== */}
      <div className="w-full">
        <div className="w-[95%] mx-auto pb-[55px] xl:pb-[100px] ">

          {/* ===================== HEADING ===================== */}
          <h1 className="text-center font-cormorant font-bold text-[48px] text-[#0B0B0B] my-10">
            YOUR CART
          </h1>

          {/* ===================== EMPTY CART MESSAGE ===================== */}
          {cartItems.length === 0 && (
            <div className="w-full text-center py-20">
              <p className="font-cormorant font-bold text-[32px] text-[#0B0B0B]">
                Your cart is empty.
              </p>
              <p className="font-urbanist text-[#565656] mt-2 text-base">
                Add some products to continue shopping.
              </p>
            </div>
          )}

          {/* Only show cart content if items exist */}
          {cartItems.length > 0 && (
            <>
              {/* ===================== FREE SHIPPING BAR ===================== */}
              <div className="w-full border-t border-[#D69E2E] py-4">
                <div className="flex items-center gap-3 px-3">
                  <p className="text-[#565656] font-urbanist font-semibold text-md">
                    Only <span className="text-[#D69E2E]">$29.76</span> away from
                    Free Shipping
                  </p>
                </div>
              </div>

              {/* ===================== WARNING BOX ===================== */}
              <div className="w-full bg-[#E8C57F] mt-4 py-2 px-5 rounded-sm">
                <p className="font-urbanist text-md font-medium text-[#0B0B0B] text-center">
                  Please, hurry! Someone has placed an order on one of the items you
                  have in the cart. We'll keep it for you for{" "}
                  <strong>37:43 minutes</strong>.
                </p>
              </div>

              {/* ===================== GRID LAYOUT ===================== */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-30 mt-10">

                {/* ===================== LEFT CART TABLE ===================== */}
                <div className="xl:col-span-2">

                                 <div className="md:hidden flex justify-between  gap-4 px-2 py-3 bg-[#F8F8F8] border-[#E5E5E5]  mb-4">
                    <p className="font-urbanist font-semibold text-[#0B0B0B] ps-8">
                      Product
                    </p>
                    <p className="font-urbanist font-semibold text-[#0B0B0B] text-center">
                      Price
                    </p>
          
                  </div>

                  {/* MOBILE LAYOUT */}
                  <div className="md:hidden flex flex-col gap-6">

                    
                    {cartItems.map((product, index) => (
                      <div key={index} className="border-b border-[#E5E5E5] pb-4">
                        <div className="flex gap-4 items-center">
                          <CircleX
                            className=" w-8 h-8 text-[#0B0B0B] cursor-pointer mt-1"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          />

                          <div className="border border-[#CCCCCC] p-2 w-[75px] h-[90px] flex-shrink-0">
                            <img
                              src={product.productImg}
                              className="w-full h-full object-contain"
                              alt="product"
                            />
                          </div>

                          <div className="flex flex-col items-start w-full">
                            <div className="flex justify-between items-start w-full">
                              <p className="font-urbanist text-[#641026] font-semibold text-[14px] pt-1 leading-tight">
                                {product.productName}
                              </p>

                              <p className="text-right font-urbanist font-bold text-[15px] mt-1">
                                ${product.price}
                              </p>
                            </div>

                            <div className="flex justify-start mt-3">
                              <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-6 py-2">
                                <Minus size={16} onClick={() => dispatch(decreaseQuantity(product))} className="cursor-pointer" />
                                <span className="text-lg font-semibold">{product.quantity}</span>
                                <Plus size={16} onClick={() => dispatch(increaseQuantity(product))} className="cursor-pointer" />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* DESKTOP TABLE WITH SCROLL */}
                  <div className="overflow-x-auto lg:overflow-x-auto md:overflow-x-auto scrollbar-thin">
                    <table className="w-full border-collapse font-urbanist hidden md:table min-w-[750px]">
                      <thead className="bg-[#F8F8F8]">
                        <tr className="text-left border-[#E5E5E5]">
                          <th className="py-3 px-12 font-semibold text-[#0B0B0B] text-md">
                            Product
                          </th>
                          <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
                            Price
                          </th>
                          <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
                            Quantity
                          </th>
                          <th className="py-3 text-center font-semibold text-[#0B0B0B] text-md">
                            Total
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {cartItems.map((product, index) => (
                          <tr key={index} className="border-b border-[#E5E5E5]">
                            <td className="py-6">
                              <div className="flex items-center gap-6">
                                <CircleX
                                  className="text-[#0B0B0B] cursor-pointer"
                                  onClick={() => dispatch(removeFromCart(product.id))}
                                />

                                <div className="border border-[#CCCCCC] py-2 px-5">
                                  <img
                                    src={product.productImg}
                                    className="w-24 h-28 object-contain"
                                    alt="product"
                                  />
                                </div>

                                <div>
                                  <p className="font-urbanist text-[#641026] font-semibold text-md">
                                    {product.productName}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="font-semibold text-center text-[#0B0B0B] text-md">
                              ${product.price}
                            </td>

                            <td>
                              <div className="flex justify-center">
                                <div className="flex items-center gap-8 border border-[#EED291] rounded-full px-6 py-2">
                                  <Minus size={16} className="cursor-pointer" onClick={() => dispatch(decreaseQuantity(product))} />
                                  <span className="text-xl font-semibold">{product.quantity}</span>
                                  <Plus size={16} className="cursor-pointer" onClick={() => dispatch(increaseQuantity(product))} />
                                </div>
                              </div>
                            </td>

                            <td className="font-semibold text-center text-[#0B0B0B] text-md">
                              ${(Number(product.price) * product.quantity).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* GIFT WRAP */}
                  <div className="flex gap-3 mt-5 items-center font-urbanist text-base">
                    <Gift className="w-[24px] h-[24px]" fill="black" stroke="black" />
                    <p className="font-semibold text-[#565656] pt-1">DO YOU WANT A GIFT WRAP? ONLY FOR $10.00</p>
                    <p className="underline font-semibold text-[#0B0B0B] pt-1">ADD</p>
                  </div>

                  {/* COMMENTS */}
                  <div className="mt-6">
                    <p className="font-urbanist font-semibold text-base text-[#0B0B0B] mb-3">
                      Additional Comments
                    </p>

                    <textarea
                      placeholder="Special Instruction For Seller..."
                      className="w-full h-[140px] font-urbanist border font-medium border-[#E5E5E5] text-[#565656] rounded-xl p-4 text-base resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <ShieldCheck className="text-white w-[24px] h-[24px]" fill="#0B0B0B" />
                    <span className="text-[#565656] font-semibold text-base font-urbanist">
                      Secure Shopping Guarantee
                    </span>
                  </div>
                </div>

                {/* ===================== RIGHT SIDE ===================== */}
                <div className="
                  w-full 
                  font-urbanist text-[#0B0B0B]
                  md:grid md:grid-cols-2 md:gap-4 xl:gap-6
                  md:bg-[#F8F8F8] xl:bg-white
                  xl:block
                ">

                  {/* LEFT COLUMN: SUMMARY CARD */}
                  <div className="bg-[#F8F8F8] pt-6 px-5 lg:px-6 md:h-fit md:self-start md:w-full">
                    <div className="mb-3.5 font-semibold text-md">Cart Totals</div>

                    <div className="flex justify-between mb-3 border-b pb-3 border-[#CCCCCC]">
                      <span className="font-medium text-base text-[#0B0B0B]">Subtotal</span>
                      <span className="font-semibold text-md">${subTotal.toFixed(2)}</span>
                    </div>

                    <p className="font-medium text-base mt-5 mb-4">Get Shipping Estimate:</p>

                    <select className="w-full border border-[#CCCCCC] cursor-pointer bg-[#FFFFFF] text-[#0B0B0B] py-3.5 px-5 rounded-full text-sm mb-5">
                      <option>------</option>
                      <option>USA</option>
                      <option>Canada</option>
                    </select>

                    <input
                      placeholder="Postal Code"
                      className="w-full border text-[#0B0B0B] placeholder:text-[#0B0B0B] outline-none border-[#CCCCCC] bg-[#FFFFFF] py-3.5 px-5 rounded-full mb-7 text-base"
                    />

                    <button className="w-full mb-7 bg-[#EED291] text-base text-[#0B0B0B] font-semibold py-3 rounded-full cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
                      CALCULATE SHIPPING
                    </button>

                    <hr className="text-[#CCCCCC]" />

                    <p className="font-medium text-base text-[#0B0B0B] mt-7 mb-4">Coupon Code</p>

                    <input
                      placeholder="Enter Coupon Code"
                      className="w-full border border-[#CCCCCC] cursor-pointer bg-[#FFFFFF] placeholder:text-[#0B0B0B] text-[#0B0B0B] py-3.5 px-6 rounded-full mb-3 text-base"
                    />

                    <p className="text-sm text-[#565656] border-b border-[#CCCCCC] mt-1 pb-6 font-medium">
                      Coupon code will be applied on the checkout page
                    </p>

                    <div className="flex justify-between mt-6 pb-4 border-b border-[#CCCCCC]">
                      <span className="font-medium text-base">Total</span>
                      <span className="font-semibold text-md">${total.toFixed(2)}</span>
                    </div>

                    <p className="text-sm text-[#565656] font-medium mt-4 mb-0 md:mb-4 xl:mb-0 pb-4 md:pb-0 xl:pb-4">
                      Tax included and shipping calculated at checkout
                    </p>
                  </div>

                  {/* RIGHT COLUMN: BUTTONS */}
                  <div className="flex bg-[#F8F8F8] pb-7 md:pb-0 xl:pb-7 px-4 md:px-0 xl:px-6 flex-col justify-start md:pt-15 xl:pt-0 gap-y-2 md:w-full">

                    <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
                      PROCEED TO CHECKOUT
                    </button>

                    <button className="w-full border border-[#EED291] bg-[#FFFFFF] text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3 cursor-pointer hover:bg-[#0B0B0B] hover:text-white transition-all duration-800">
                      CONTINUE SHOPPING
                    </button>

                  </div>
                </div>

              </div>
            </>
          )}

        </div>
      </div>

      {/* ===================== RELATED PRODUCTS ===================== */}
      <div className="w-full bg-[#F8F8F8]">
        <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
          <div className="flex flex-col items-center gap-8 text-center w-full">
            <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
              Related Products
            </p>

            <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
              {relatedProductsList.map((product, index) => (
                <ProductsChild key={index} product={product} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-center text-[#0B0B0B]">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
