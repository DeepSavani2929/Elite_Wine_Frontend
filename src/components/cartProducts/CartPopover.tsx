// import React, { useEffect } from "react";
// import { X, Minus, Plus } from "lucide-react";

// const CartPopover = ({
//   isOpen,
//   onClose,
//   cartItems = [],
//   subtotal = 0,
//   total = 0,
// }) => {
//   // Prevent background scroll while popover is open
//   useEffect(() => {
//     if (isOpen) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   return (
//     <div className={`fixed inset-0 z-[999999] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>

//       {/* Overlay */}
//       <div
//         className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//         onClick={onClose}
//       />

//       {/* RIGHT PANEL */}
//       <div
//         className={`
//           fixed right-0 top-0 h-full w-[360px] md:w-[400px]
//           bg-white shadow-xl z-[99999999]
//           transform transition-transform duration-300 ease-out
//           flex flex-col
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* HEADER */}
//         <div className="py-5 px-5 flex justify-between items-center border-b">
//           <div>
//             <p className="font-semibold text-lg">Shopping Cart</p>
//             <p className="text-sm text-gray-500">{cartItems.length} items</p>
//           </div>

//           <button onClick={onClose} className="text-gray-700">
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* PROGRESS BAR */}
//         <div className="px-5 pt-3 pb-4 border-b">
//           <p className="text-green-700 text-sm font-medium">
//             You qualify for free shipping!
//           </p>
//           <div className="w-full h-[7px] bg-gray-200 rounded-full mt-2">
//             <div
//               className="h-full bg-green-400 rounded-full transition-all"
//               style={{ width: "100%" }} // always full for now
//             />
//           </div>
//         </div>

//         {/* SCROLLABLE CART ITEMS */}
//         <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
//           {cartItems.map((item, index) => (
//             <div key={index} className="border-b pb-4">
//               <div className="flex gap-4">
//                 <img
//                   src={item.image}
//                   className="w-16 h-20 object-contain"
//                   alt=""
//                 />

//                 <div className="flex flex-col flex-1">
//                   <p className="font-semibold text-sm">{item.name}</p>
//                   <p className="font-bold text-md pt-1">${item.price}</p>

//                   {/* Quantity */}
//                   <div className="flex items-center gap-4 mt-2 border rounded-full px-3 py-1 w-fit">
//                     <Minus className="w-4 h-4" />
//                     <span className="text-md">{item.qty}</span>
//                     <Plus className="w-4 h-4" />
//                   </div>
//                 </div>

//                 {/* REMOVE */}
//                 <button className="text-gray-500">
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* FOOTER (Sticky) */}
//         <div className="border-t p-5 bg-white">
//           <div className="flex justify-between pb-1">
//             <span className="text-gray-600">Subtotal:</span>
//             <span className="font-semibold">${subtotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between pb-4">
//             <span className="text-gray-600">Total:</span>
//             <span className="font-semibold">${total.toFixed(2)}</span>
//           </div>

//           <button className="w-full bg-[#EED291] text-black font-semibold py-3 rounded-full">
//             Checkout
//           </button>

//           <button className="w-full border border-[#EED291] text-black font-semibold py-3 rounded-full mt-3">
//             View Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPopover;

// import React, { useEffect } from "react";
// import { X, Minus, Plus } from "lucide-react";

// const CartPopover = ({
//   isOpen,
//   onClose,
//   cartItems = [],
//   subtotal = 0,
//   total = 0,
// }) => {
//   // prevent background scroll
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [isOpen]);

//   return (
//     <div
//       className={`fixed inset-0 z-[999999] ${
//         isOpen ? "pointer-events-auto" : "pointer-events-none"
//       }`}
//     >
//       {/* Background Overlay */}
//       <div
//         onClick={onClose}
//         className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* POPOVER PANEL */}
//       <div
//         className={`
//           fixed right-0 top-0 h-full w-[360px] md:w-[400px]
//           bg-white shadow-[0_0_25px_rgba(0,0,0,0.18)]
//           transition-transform duration-300 ease-out
//           transform flex flex-col
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* ---------------- HEADER (STICKY) ---------------- */}
//         <div className="sticky top-0 bg-white z-[30] border-b px-5 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-semibold text-[18px] text-[#0B0B0B]">
//                 Shopping Cart
//               </p>
//               <p className="text-sm text-gray-500">{cartItems.length} items</p>
//             </div>
//             <button onClick={onClose}>
//               <X className="w-6 h-6 text-black" />
//             </button>
//           </div>
//         </div>

//         {/* ---------------- PROGRESS BAR ---------------- */}
//         <div className="px-5 py-4 border-b bg-white">
//           <p className="text-green-700 text-[13px] font-medium mb-2">
//             You qualify for free shipping!
//           </p>

//           <div className="w-full h-[7px] bg-[#e8e8e8] rounded-full overflow-hidden">
//             <div
//               className="h-full bg-green-400 rounded-full transition-all duration-500"
//               style={{ width: "100%" }}
//             ></div>
//           </div>
//         </div>

//         {/* ---------------- CART LIST (SCROLLABLE) ---------------- */}
//         <div
//           className="flex-1 overflow-y-auto px-5 py-5 space-y-6 overscroll-contain"
//           style={{
//             scrollbarWidth: "thin",
//             scrollbarColor: "#cccccc transparent",
//           }}
//         >
//           {cartItems.map((item, index) => (
//             <div key={index} className="border-b pb-5">
//               <div className="flex gap-4">
//                 <img
//                   src={item.image}
//                   className="w-16 h-20 object-contain"
//                   alt=""
//                 />

//                 <div className="flex flex-col flex-1">
//                   <p className="font-semibold text-sm text-[#0B0B0B] leading-5">
//                     {item.name}
//                   </p>
//                   <p className="font-bold text-md pt-1">${item.price}</p>

//                   {/* Quantity Counter */}
//                   <div className="flex items-center gap-4 mt-3 border rounded-full px-4 py-1 w-fit shadow-sm">
//                     <Minus className="w-4 h-4" />
//                     <span className="text-md">{item.qty}</span>
//                     <Plus className="w-4 h-4" />
//                   </div>
//                 </div>

//                 <button className="text-gray-500">
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ---------------- FOOTER (STICKY BOTTOM) ---------------- */}
//         <div className="border-t p-5 bg-white sticky bottom-0 z-[40] shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
//           <div className="flex justify-between pb-1">
//             <span className="text-gray-600 text-[15px]">Subtotal:</span>
//             <span className="font-semibold text-[15px]">
//               ${subtotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="flex justify-between pb-4">
//             <span className="text-gray-600 text-[15px]">Total:</span>
//             <span className="font-semibold text-[16px]">
//               ${total.toFixed(2)}
//             </span>
//           </div>

//           <button className="w-full bg-[#EED291] text-black font-semibold py-3 rounded-full">
//             Checkout
//           </button>

//           <button className="w-full border border-[#EED291] text-black font-semibold py-3 rounded-full mt-3">
//             View Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPopover;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   X,
//   Minus,
//   Plus,
//   ChevronLeft,
//   ChevronRight,
//   MoveLeft,
//   MoveRight,
// } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";

// const CartPopover = ({
//   isOpen,
//   onClose,
//   cartItems = [],
//   relatedItems = [],
//   subtotal = 0,
//   total = 0,
// }) => {
//   const swiperRef = useRef(null);

//   const slideLeft = () => swiperRef.current?.slidePrev();
//   const slideRight = () => swiperRef.current?.slideNext();

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   // Prevent body scroll
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [isOpen]);

//   // Horizontal scrolling for related list
//   const scrollRelated = (dir) => {
//     if (!relatedRef.current) return;
//     relatedRef.current.scrollBy({
//       left: dir === "left" ? -250 : 250,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-[999999] ${
//         isOpen ? "pointer-events-auto" : "pointer-events-none"
//       }`}
//     >
//       {/* Overlay */}
//       <div
//         onClick={onClose}
//         className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* Right Panel */}
//       <div
//         className={`
//           fixed right-0 top-0 h-full w-[360px] md:w-[420px]
//           bg-white shadow-[0_0_25px_rgba(0,0,0,0.18)]
//           flex flex-col transform transition-transform duration-300 ease-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* HEADER */}
//         <div className="sticky top-0 bg-white z-[40]  px-5 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-semibold text-[18px] text-black">
//                 Shopping Cart
//               </p>
//               <p className="text-sm text-gray-500">{cartItems.length} items</p>
//             </div>

//             <button onClick={onClose}>
//               <X className="w-6 h-6 text-black" />
//             </button>
//           </div>
//         </div>

//         {/* PROGRESS BAR */}
//         <div className="px-5 py-4  bg-white">
//           <div className="w-full h-[7px] bg-[#e8e8e8] rounded-full">
//             <div
//               className="h-full bg-green-400 rounded-full"
//               style={{ width: "100%" }}
//             ></div>
//           </div>

//           <p className="text-green-700 text-[13px] font-medium mt-2">
//             You qualify for free shipping!
//           </p>
//         </div>

//         {/* CART ITEMS (SCROLLABLE) */}
//         <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
//           {cartItems.map((item, index) => (
//             <div key={index} className="border-b border-[#CCCCCC]  pb-6">
//               <div className="flex gap-8 items-center">
//                 <img src={item.image} className="w-16 h-20 object-contain" />

//                 <div className="flex flex-col flex-1">
//                   <p className="font-semibold text-md mb-2 leading-5 font-urbanist text-[#641026]">
//                     {item.name}
//                   </p>
//                   <p className=" font-urbanist font-bold text-base text-[#0B0B0B] pt-1 pb-1.5">
//                     ${item.price}
//                   </p>

//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-6  border border-[#EED291] rounded-full px-5 py-1 w-fit shadow-sm">
//                       <Minus className="w-4 h-4 cursor-pointer" />
//                       <span className="font-semibold text-base leading-[140%]">
//                         {item.qty}
//                       </span>
//                       <Plus className="w-4 h-4 cursor-pointer" />
//                     </div>

//                     <button className="text-[#0B0B0B]">
//                       <X className="w-6 h-6 mt-3" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* ---------------- YOU MAY ALSO LIKE SECTION ---------------- */}
//           {relatedItems.length > 0 && (
//             <div className="pt-1 ">
//               <div className="flex justify-between items-center mb-3">
//                 <p className="font-semibold text-[#0B0B0B] text-[24px] font-urbanist">
//                   You May Also Like
//                 </p>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={slideLeft}
//                     disabled={isBeginning}
//                     className={`cursor-pointer ${
//                       isBeginning
//                         ? "opacity-30 pointer-events-none"
//                         : "opacity-100"
//                     }`}
//                   >
//                     <MoveLeft className="w-8 h-8" />
//                   </button>
//                   <button
//                     onClick={slideRight}
//                     disabled={isEnd}
//                     className={`cursor-pointer ${
//                       isEnd ? "opacity-30 pointer-events-none" : "opacity-100"
//                     }`}
//                   >
//                     <MoveRight className="w-8 h-8" />
//                   </button>
//                 </div>
//               </div>

       
//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={20}
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 onSlideChange={(swiper) => {
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 allowTouchMove={true}
//                 className="w-full"
//               >
//                 {relatedItems.map((product, idx) => (
//                   <SwiperSlide key={idx}>
//                     <div className="flex gap-10 items-start ps-7 justify-center ">
//                       <img
//                         src={product.productImg}
//                         className="w-[60px] h-[100px] object-contain"    
//                       />

//                       <div>
//                         <p className="font-semibold font-urbanist text-md mb-1 leading-5  text-[#641026]">
//                           {product.productName}
//                         </p>

//                         <p className="font-urbanist font-bold text-base text-[#0B0B0B] pt-1 pb-1.5">
//                           {product.price}
//                         </p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           )}
//         </div>

//         {/* FOOTER (STICKY) */}
//         <div className="sticky bottom-0 bg-white px-6 pb-5 font-urbanist">
//           <div className="flex justify-between pb-1">
//             <span className="text-[#0B0B0B] font-semibold text-md">Subtotal:</span>
//             <span className="text-[#0B0B0B] font-semibold text-md">
//               ${subtotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="flex justify-between pb-2">
//             <span className="text-[#0B0B0B] font-semibold text-md">Total:</span>
//             <span className="text-[#0B0B0B] font-semibold text-md">
//               ${total.toFixed(2)}
//             </span>
//           </div>

//           <div>
//             <p className="font-urbanist font-semibold text-base text-[#5656560] mb-6">Tax included and shipping calculated at checkout</p>
//           </div>

//           <button className="w-full bg-[#EED291] hover:bg-transparent border border-[#EED291] transition-all duration-600 cursor-pointer text-[#0B0B0B] text-base font-semibold py-3 rounded-full">
//             Checkout
//           </button>

//           <button className="w-full border cursor-pointer hover:bg-[#EED291] border-[#EED291] transition-all duration-600  text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3">
//             View Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPopover;


// import React, { useEffect, useRef, useState } from "react";
// import {
//   X,
//   Minus,
//   Plus,
//   ChevronLeft,
//   ChevronRight,
//   MoveLeft,
//   MoveRight,
//   Clipboard,
//   Truck,
//   Tag,
// } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import "swiper/css";


// const CartPopover = ({
//   isOpen,
//   onClose,
//   cartItems = [],
//   relatedItems = [],
//   subtotal = 0,
//   total = 0,
// }) => {
//   const swiperRef = useRef(null);

//   const slideLeft = () => swiperRef.current?.slidePrev();
//   const slideRight = () => swiperRef.current?.slideNext();

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   // Bottom sheet states
//   const [openInstructions, setOpenInstructions] = useState(false);
//   const [openShipping, setOpenShipping] = useState(false);
//   const [openCoupon, setOpenCoupon] = useState(false);

//   // Refs for clicks outside of bottom-sheet content
//   const sheetOverlayRef = useRef(null);
//   const sheetContentRef = useRef(null);

//   // Prevent body scroll while cart open OR any bottom-sheet open
//   useEffect(() => {
//     const locked = isOpen || openInstructions || openShipping || openCoupon;
//     document.body.style.overflow = locked ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen, openInstructions, openShipping, openCoupon]);

//   // close particular sheet when clicking overlay (outside content)
//   const handleSheetOverlayClick = (e, closeFn) => {
//     // if clicked directly on overlay (not on content), close
//     if (e.target === sheetOverlayRef.current) {
//       closeFn();
//     }
//   };

//   // Utility: open a specific sheet and ensure others are closed
//   const openSheet = (which) => {
//     setOpenInstructions(which === "instructions");
//     setOpenShipping(which === "shipping");
//     setOpenCoupon(which === "coupon");
//   };

//   // Small helper components for sheet headers
//   const SheetHeader = ({ title, onCloseSheet }) => (
//     <div className="flex items-center justify-between px-5 py-4 border-b">
//       <div className="flex items-center gap-3">
//         {/* small icon placeholder left - keep consistent spacing with screenshots */}
//         <Clipboard className="w-5 h-5 text-[#0B0B0B]" />
//         <h3 className="font-semibold text-base text-[#0B0B0B]">{title}</h3>
//       </div>
//       <button onClick={onCloseSheet} aria-label="Close sheet">
//         <X className="w-6 h-6 text-black" />
//       </button>
//     </div>
//   );

//   return (
//     <div
//       className={`fixed inset-0 z-[999999] ${
//         isOpen ? "pointer-events-auto" : "pointer-events-none"
//       }`}
//     >
//       {/* Main overlay behind entire cart drawer (click closes cart) */}
//       <div
//         onClick={onClose}
//         className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* Right-side cart panel */}
//       <div
//         className={`
//           fixed right-0 top-0 h-full w-[360px] md:w-[400px]
//           bg-white shadow-[0_0_25px_rgba(0,0,0,0.18)]
//           flex flex-col transform transition-transform duration-300 ease-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* HEADER */}
//         <div className="sticky top-0 bg-white z-[40] border-b px-5 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-semibold text-[18px] text-black">Shopping Cart</p>
//               <p className="text-sm text-gray-500">{cartItems.length} items</p>
//             </div>

//             <button
//               onClick={() => {
//                 // if any sheet is open, close it first; otherwise close cart
//                 if (openInstructions || openShipping || openCoupon) {
//                   openSheet(null);
//                 } else {
//                   onClose();
//                 }
//               }}
//             >
//               <X className="w-6 h-6 text-black" />
//             </button>
//           </div>
//         </div>

//         {/* PROGRESS BAR */}
//         <div className="px-5 py-4 bg-white">
//           <div className="w-full h-[7px] bg-[#e8e8e8] rounded-full">
//             <div className="h-full bg-green-400 rounded-full" style={{ width: "100%" }} />
//           </div>

//           <p className="text-green-700 text-[13px] font-medium mt-2">
//             You qualify for free shipping!
//           </p>
//         </div>

//         {/* CART ITEMS (SCROLLABLE) */}
//         <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
//           {cartItems.map((item, index) => (
//             <div key={index} className="border-b border-[#CCCCCC] pb-6">
//               <div className="flex gap-8 items-center">
//                 <img src={item.image} className="w-16 h-20 object-contain" alt={item.name} />

//                 <div className="flex flex-col flex-1">
//                   <p className="font-semibold text-md mb-2 leading-5 font-cormorant text-[#641026]">
//                     {item.name}
//                   </p>
//                   <p className="font-urbanist font-bold text-base text-[#0B0B0B] pt-1 pb-1.5">${item.price}</p>

//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-5 py-1 w-fit shadow-sm">
//                       <Minus className="w-4 h-4 cursor-pointer" />
//                       <span className="font-semibold text-base leading-[140%]">{item.qty}</span>
//                       <Plus className="w-4 h-4 cursor-pointer" />
//                     </div>

//                     <button className="text-[#0B0B0B]">
//                       <X className="w-6 h-6 mt-3" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* ---------------- YOU MAY ALSO LIKE SECTION ---------------- */}
//           {relatedItems.length > 0 && (
//             <div className="pt-1 ">
//               <div className="flex justify-between items-center mb-3">
//                 <p className="font-semibold text-[#0B0B0B] text-[24px] font-urbanist">You May Also Like</p>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={slideLeft}
//                     disabled={isBeginning}
//                     className={`cursor-pointer ${isBeginning ? "opacity-30 pointer-events-none" : "opacity-100"}`}
//                   >
//                     <MoveLeft className="w-8 h-8" />
//                   </button>
//                   <button
//                     onClick={slideRight}
//                     disabled={isEnd}
//                     className={`cursor-pointer ${isEnd ? "opacity-30 pointer-events-none" : "opacity-100"}`}
//                   >
//                     <MoveRight className="w-8 h-8" />
//                   </button>
//                 </div>
//               </div>

//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={20}
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 onSlideChange={(swiper) => {
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 allowTouchMove={true}
//                 className="w-full"
//               >
//                 {relatedItems.map((product, idx) => (
//                   <SwiperSlide key={idx}>
//                     <div className="flex gap-10 items-start ps-12 justify-center ">
//                       <img src={product.productImg} className="w-[60px] h-[100px] object-contain" alt={product.productName} />

//                       <div>
//                         <p className="font-semibold text-md mb-1 leading-5 font-cormorant text-[#641026]">
//                           {product.productName}
//                         </p>

//                         <p className="font-urbanist font-bold text-base text-[#0B0B0B] pt-1 pb-1.5">
//                           {product.price}
//                         </p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           )}
//         </div>

//         {/* FOOTER (STICKY) */}
//         <div className="sticky bottom-0 bg-white px-6 pb-5 font-urbanist">
//           {/* === 3-icon grid (Order Instructions / Shipping Rates / Coupon) === */}
//           <div className="grid grid-cols-3 border border-[#E5E5E5] rounded-md mb-5 overflow-hidden">
//             <button
//               onClick={() => openSheet("instructions")}
//               className="flex justify-center items-center py-4 border-r border-[#E5E5E5] bg-white hover:bg-gray-50"
//             >
//               <Clipboard className="w-6 h-6 text-[#565656]" />
//             </button>

//             <button
//               onClick={() => openSheet("shipping")}
//               className="flex justify-center items-center py-4 border-r border-[#E5E5E5] bg-white hover:bg-gray-50"
//             >
//               <Truck className="w-6 h-6 text-[#565656]" />
//             </button>

//             <button
//               onClick={() => openSheet("coupon")}
//               className="flex justify-center items-center py-4 bg-white hover:bg-gray-50"
//             >
//               <Tag className="w-6 h-6 text-[#565656]" />
//             </button>
//           </div>

//           {/* Subtotal / Total */}
//           <div className="flex justify-between pb-1">
//             <span className="text-[#0B0B0B] font-semibold text-md">Subtotal:</span>
//             <span className="text-[#0B0B0B] font-semibold text-md">${subtotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between pb-2">
//             <span className="text-[#0B0B0B] font-semibold text-md">Total:</span>
//             <span className="text-[#0B0B0B] font-semibold text-md">${total.toFixed(2)}</span>
//           </div>

//           <div>
//             <p className="font-urbanist font-semibold text-base text-[#565656] mb-6">Tax included and shipping calculated at checkout</p>
//           </div>

//           <button className="w-full bg-[#EED291] hover:bg-transparent border border-[#EED291] transition-all duration-600 cursor-pointer text-[#0B0B0B] text-base font-semibold py-3 rounded-full">
//             Checkout
//           </button>

//           <button className="w-full border cursor-pointer hover:bg-[#EED291] border-[#EED291] transition-all duration-600 text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3">
//             View Cart
//           </button>
//         </div>

//               {(openInstructions || openShipping || openCoupon) && (
//         <div
//           ref={sheetOverlayRef}
//           onClick={(e) => {
//             // close whichever sheet is open
//             if (e.target === sheetOverlayRef.current) {
//               openSheet(null);
//             }
//           }}
//           className="fixed inset-0 z-[1000000] flex items-end justify-center"
//         >
//           {/* dim layer (partial) so cart remains visible but dimmed */}
//           <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />

//           {/* Content container: we render only the active sheet. sheets share consistent design */}
//           <div
//             className="relative w-full md:w-[400px] max-h-[85vh] flex items-end justify-center"
//             // prevent clicks inside content from bubbling to overlay
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Order Instructions sheet */}
//             <div
//               className={`w-full md:mx-4 bg-white rounded-t-xl shadow-xl transform transition-transform duration-300 ease-out
//                 ${openInstructions ? "translate-y-0" : "translate-y-full"}
//               `}
//               style={{ maxHeight: "85vh", overflow: "auto" }}
//             >
//               <SheetHeader title="Order Special Instructions" onCloseSheet={() => openSheet(null)} />
//               <div className="p-5">
//                 <textarea
//                   placeholder="Order special instructions"
//                   className="w-full border border-[#E5E5E5] rounded-xl p-4 h-28 resize-none text-sm"
//                 />
//                 <div className="mt-5 space-y-3">
//                   <button
//                     onClick={() => openSheet(null)}
//                     className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => openSheet(null)}
//                     className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Shipping Rates sheet */}
//             <div
//               className={`w-full md:mx-4 bg-white rounded-t-xl shadow-xl transform transition-transform duration-300 ease-out
//                 ${openShipping ? "translate-y-0" : "translate-y-full"}
//               `}
//               style={{ maxHeight: "85vh", overflow: "auto" }}
//             >
//               <SheetHeader title="Estimate Shipping Rates" onCloseSheet={() => openSheet(null)} />
//               <div className="p-5 space-y-4">
//                 <div>
//                   <label className="text-sm font-semibold text-[#0B0B0B]">Country/Region</label>
//                   <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
//                     <option>United States</option>
//                     <option>Canada</option>
//                     <option>United Kingdom</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-[#0B0B0B]">State</label>
//                   <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
//                     <option>Alabama</option>
//                     <option>Alaska</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-[#0B0B0B]">ZIP Code</label>
//                   <input className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4" placeholder="Postal code" />
//                 </div>

//                 <div className="mt-3 space-y-3">
//                   <button onClick={() => openSheet(null)} className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
//                     Calculate Shipping
//                   </button>
//                   <button onClick={() => openSheet(null)} className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Add Coupon sheet */}
//             <div
//               className={`w-full md:mx-4 bg-white rounded-t-xl shadow-xl transform transition-transform duration-300 ease-out
//                 ${openCoupon ? "translate-y-0" : "translate-y-full"}
//               `}
//               style={{ maxHeight: "85vh", overflow: "auto" }}
//             >
//               <SheetHeader title="Add A Coupon" onCloseSheet={() => openSheet(null)} />
//               <div className="p-5 space-y-4">
//                 <div>
//                   <label className="text-sm font-semibold text-[#0B0B0B]">Coupon code</label>
//                   <input className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4" placeholder="Coupon code content" />
//                 </div>

//                 <div className="mt-3 space-y-3">
//                   <button onClick={() => openSheet(null)} className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
//                     Save
//                   </button>
//                   <button onClick={() => openSheet(null)} className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}    
//       </div>

//     </div>
//   );
// };

// export default CartPopover;






// import React, { useEffect, useRef, useState } from "react";
// import {
//   X,
//   Minus,
//   Plus,
//   MoveLeft,
//   MoveRight,
//   Clipboard,
//   Truck,
//   Tag,
// } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { NavLink, useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cart/cartSlice";

// const CartPopover = ({
//   isOpen,
//   onClose,
// }) => {
//   const swiperRef = useRef(null);

//   const slideLeft = () => swiperRef.current?.slidePrev();
//   const slideRight = () => swiperRef.current?.slideNext();

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   // FIXED: only one sheet active
//   const [activeSheet, setActiveSheet] = useState(null);
//   const navigate = useNavigate()

//   const dispatch = useDispatch()
//       const relatedProductsList = useSelector(
//     (state) => state.cart.relatedProducts
//   );

//         const cartItems = useSelector(
//     (state) => state.cart.cartItems
//   );

//   console.log(cartItems)

//   const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
//   const total = subtotal;

//   useEffect(() => {
//     document.body.style.overflow =
//       isOpen || activeSheet ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen, activeSheet]);

//   const openSheet = (type) => {
//     setActiveSheet(type); // null | instructions | shipping | coupon
//   };

//   const closeSheet = () => setActiveSheet(null);

//   const SheetHeader = ({ title, Icon, onCloseSheet }) => (
//     <div className="flex items-center justify-between px-5 py-4 border-b">
//       <div className="flex items-center gap-3">
//         <Icon className="w-5 h-5 text-[#0B0B0B]" />
//         <h3 className="font-semibold text-base text-[#0B0B0B]">{title}</h3>
//       </div>
//       <button onClick={onCloseSheet}>
//         <X className="w-6 h-6 text-black" />
//       </button>
//     </div>
//   );

//   return (
//     <div
//       className={`fixed inset-0 z-[999999] ${
//         isOpen ? "pointer-events-auto" : "pointer-events-none"
//       }`}
//     >
//       {/* Overlay */}
//       <div
//         onClick={() => {
//           if (activeSheet) closeSheet();
//           else onClose();
//         }}
//         className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* MAIN CART DRAWER - untouched */}
//       <div
//         className={`
//           fixed right-0 top-0 h-full w-[360px] md:w-[410px]
//           bg-white shadow-[0_0_25px_rgba(0,0,0,0.18)]
//           flex flex-col transform transition-transform duration-300 ease-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* HEADER */}
//         <div className="sticky top-0 bg-white z-[40] px-5 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-semibold font-urbanist text-md text-black">
//                 Shopping Cart
//               </p>
//                 <p className="font-semibold font-urbanist text-base text-[#565656]">{cartItems.length} items</p>
//             </div>

//             <button
//               onClick={() => {
//                 if (activeSheet) closeSheet();
//                 else onClose();
//               }}
//             >
//               <X className="w-6 h-6 text-black" />
//             </button>
//           </div>
//         </div>

//         {/* PROGRESS BAR */}
//         <div className="px-5 pb-4 bg-white">
//           <div className="w-full h-[7px] bg-[#e8e8e8] rounded-full">
//             <div
//               className="h-full bg-green-400 rounded-full"
//               style={{ width: "100%" }}
//             ></div>
//           </div>
//           <p className="text-[#565656] text-md font-semibold mt-2">
//             You qualify for free shipping!
//           </p>
//         </div>

//         {/* CART ITEMS */}
//         <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
//           {cartItems.map((product, index) => (
//             <div key={index} className="border-b border-[#CCCCCC] pb-6">
//               <div className="flex gap-8 items-center" >
//                 <img
//                  onClick={() => { onClose(); navigate(`/productDetails/${product.id}`); }}
//                   src={product.productImg}
//                   className="w-16 h-20 object-contain cursor-pointer"
//                   alt={product.name}
//                 />

//                 <div className="flex flex-col flex-1">
//                   <p className="font-semibold text-md mb-2 leading-5 font-urbanist  text-[#641026] cursor-pointer" onClick={() => { onClose(); navigate(`/productDetails/${product.id}`); }}>
//                     {product.productName}
//                   </p>
//                   <p className="font-urbanist font-bold text-base text-[#0B0B0B] pt-1 pb-1.5">
//                     ${product.price}
//                   </p>

//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-5 py-1 w-fit shadow-sm">
//                       <Minus className="w-4 h-4 cursor-pointer" onClick={() => dispatch(decreaseQuantity(product))} />
//                       <span className="font-semibold text-base leading-[140%]">
//                         {product.quantity}
//                       </span>
//                       <Plus className="w-4 h-4 cursor-pointer" onClick={() => dispatch(increaseQuantity(product))} />
//                     </div>

//                     <button className="text-[#0B0B0B]"  onClick={() => dispatch(removeFromCart(product.id))} >
//                       <X className="w-6 h-6 mt-3 cursor-pointer"  />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* YOU MAY ALSO LIKE */}
//           {relatedProductsList.length > 0 && (
//             <div className="pt-1">
//               <div className="flex justify-between items-center mb-3">
//                 <p className="font-semibold text-[#0B0B0B] text-[24px] font-urbanist">
//                   You May Also Like
//                 </p>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={slideLeft}
//                     disabled={isBeginning}
//                     className={`cursor-pointer ${
//                       isBeginning ? "opacity-30 pointer-events-none" : ""
//                     }`}
//                   >
//                     <MoveLeft className="w-8 h-8" />
//                   </button>
//                   <button
//                     onClick={slideRight}
//                     disabled={isEnd}
//                     className={`cursor-pointer ${
//                       isEnd ? "opacity-30 pointer-events-none" : ""
//                     }`}
//                   >
//                     <MoveRight className="w-8 h-8" />
//                   </button>
//                 </div>
//               </div>

//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={20}
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 onSlideChange={(swiper) => {
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 allowTouchMove={true}
//                 className="w-full"
//               >
//                 {relatedProductsList.map((product, idx) => (
//                   <SwiperSlide key={idx}>
//                     <div className="flex gap-10 items-start ps-12 justify-center" onClick={() => navigate(`/productDetails/${product.id}`)} >
//                       <img
//                        onClick={() => { onClose(); navigate(`/productDetails/${product.id}`); }}
//                         src={product.productImg}
//                         className="w-[60px] h-[100px] object-contain cursor-pointer"
//                         alt={product.productName}
//                       />

//                       <div>
//                         <p className="font-semibold text-md mb-1 leading-5 font-urbanist text-[#641026] cursor-pointer" onClick={() => { onClose(); navigate(`/productDetails/${product.id}`); }}>
//                           {product.productName}
//                         </p>
//                         <p className="font-urbanist font-bold text-base text-[#0B0B0B] pt-1 pb-1.5">
//                           ${product.price}
//                         </p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           )}
//         </div>

//         {/* FOOTER */}
//         <div className="sticky bottom-0 bg-white px-6 pb-5 font-urbanist">
//           <div className="grid grid-cols-3 border border-[#E5E5E5] rounded-md mb-5 overflow-hidden">
//             <button
//               onClick={() => openSheet("instructions")}
//               className="flex justify-center items-center py-4 border-r border-[#E5E5E5] cursor-pointer"
//             >
//               <Clipboard className="w-6 h-6 text-[#565656] " />
//             </button>

//             <button
//               onClick={() => openSheet("shipping")}
//               className="flex justify-center items-center py-4 border-r border-[#E5E5E5] cursor-pointer"
//             >
//               <Truck className="w-6 h-6 text-[#565656] " />
//             </button>

//             <button
//               onClick={() => openSheet("coupon")}
//               className="flex justify-center items-center py-4 cursor-pointer"
//             >
//               <Tag className="w-6 h-6 text-[#565656] " />
//             </button>
//           </div>

//           <div className="flex justify-between pb-1">
//             <span className="text-[#0B0B0B] font-semibold text-md">
//               Subtotal:
//             </span>
//             <span className="text-[#0B0B0B] font-semibold text-md">
//               ${subtotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="flex justify-between pb-2">
//             <span className="text-[#0B0B0B] font-semibold text-md">
//               Total:
//             </span>
//             <span className="text-[#0B0B0B] font-semibold text-md">
//               ${total.toFixed(2)}
//             </span>
//           </div>

//           <p className="font-urbanist font-semibold text-base text-[#565656] mb-6">
//             Tax included and shipping calculated at checkout
//           </p>

//           <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B]  cursor-pointer  text-base font-semibold py-3 rounded-full">
//             Checkout
//           </button>

//          <NavLink to="/cartDetails">
//             <button className="w-full border border-[#EED291] text-[#0B0B0B] cursor-pointer text-base font-semibold py-3 rounded-full mt-3" onClick = {() =>  onClose()}>
//             View Cart
//           </button>
//             </NavLink> 
//         </div>






// {activeSheet && (
//   <div className="fixed inset-0 z-[1000000]" onClick={closeSheet}>
//     <div className="absolute inset-0 bg-black/40 transition-opacity duration-600" />

//     <div
//       className="absolute right-0 bottom-0 w-[360px] md:w-[410px]"
//       onClick={(e) => e.stopPropagation()}
//     >
//       {/* INSTRUCTIONS SHEET */}
//       {activeSheet === "instructions" && (
//         <div
//           className="
//             w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto
//             transition-all duration-600 ease-in-out
//             translate-y-0
//           "
//         >
//           <SheetHeader
//             title="Order Special Instructions"
//             Icon={Clipboard}
//             onCloseSheet={closeSheet}
//           />

//           <div className="p-5">
//             <textarea
//               placeholder="Order special instructions"
//               className="w-full border border-[#E5E5E5] rounded-xl p-4 h-28 resize-none text-sm"
//             />

//             <div className="mt-5 space-y-3">
//               <button
//                 onClick={closeSheet}
//                 className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={closeSheet}
//                 className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* SHIPPING SHEET */}
//       {activeSheet === "shipping" && (
//         <div
//           className="
//             w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto
//             transition-all duration-300 ease-out
//             translate-y-0
//           "
//         >
//           <SheetHeader
//             title="Estimate Shipping Rates"
//             Icon={Truck}
//             onCloseSheet={closeSheet}
//           />

//           <div className="p-5 space-y-4">
//             <div>
//               <label className="text-sm font-semibold text-[#0B0B0B]">
//                 Country/Region
//               </label>
//               <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>United Kingdom</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-semibold text-[#0B0B0B]">State</label>
//               <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
//                 <option>Alabama</option>
//                 <option>Alaska</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-semibold text-[#0B0B0B]">
//                 ZIP Code
//               </label>
//               <input
//                 className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4"
//                 placeholder="Postal code"
//               />
//             </div>

//             <div className="mt-3 space-y-3">
//               <button
//                 onClick={closeSheet}
//                 className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//               >
//                 Calculate Shipping
//               </button>
//               <button
//                 onClick={closeSheet}
//                 className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* COUPON SHEET */}
//       {activeSheet === "coupon" && (
//         <div
//           className="
//             w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto
//             transition-all duration-300 ease-out
//             translate-y-0
//           "
//         >
//           <SheetHeader
//             title="Add A Coupon"
//             Icon={Tag}
//             onCloseSheet={closeSheet}
//           />

//           <div className="p-5 space-y-4">
//             <div>
//               <label className="text-sm font-semibold text-[#0B0B0B]">
//                 Coupon code
//               </label>
//               <input
//                 className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4"
//                 placeholder="Coupon code content"
//               />
//             </div>

//             <div className="mt-3 space-y-3">
//               <button
//                 onClick={closeSheet}
//                 className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={closeSheet}
//                 className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// )}



//         {/* END BOTTOM SHEETS */}
//       </div>
//     </div>
//   );
// };

// export default CartPopover;





import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Minus,
  Plus,
  MoveLeft,
  MoveRight,
  Clipboard,
  Truck,
  Tag,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigate, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cart/cartSlice";

const CartPopover = ({ isOpen, onClose }) => {
  const swiperRef = useRef(null);

  const slideLeft = () => swiperRef.current?.slidePrev();
  const slideRight = () => swiperRef.current?.slideNext();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [activeSheet, setActiveSheet] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const relatedProductsList = useSelector((state) => state.cart.relatedProducts);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal;

  useEffect(() => {
    document.body.style.overflow = isOpen || activeSheet ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen, activeSheet]);

  const openSheet = (type) => setActiveSheet(type);
  const closeSheet = () => setActiveSheet(null);

  const SheetHeader = ({ title, Icon, onCloseSheet }) => (
    <div className="flex items-center justify-between px-5 py-4 border-b">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-[#0B0B0B]" />
        <h3 className="font-semibold text-base text-[#0B0B0B]">{title}</h3>
      </div>
      <button onClick={onCloseSheet}>
        <X className="w-6 h-6 text-black" />
      </button>
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-[999999] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={() => {
          if (activeSheet) closeSheet();
          else onClose();
        }}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MAIN CART DRAWER */}
      <div
        className={`
          fixed right-0 top-0 h-full w-[360px] md:w-[410px]
          bg-white shadow-[0_0_25px_rgba(0,0,0,0.18)]
          flex flex-col transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="sticky top-0 bg-white z-[40] px-5 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold font-urbanist text-md text-black">Shopping Cart</p>
              <p className="font-semibold font-urbanist text-base text-[#565656]">
                {cartItems.length} items
              </p>
            </div>

            <button
              onClick={() => {
                if (activeSheet) closeSheet();
                else onClose();
              }}
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* ========================= EMPTY CART MESSAGE ========================= */}
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <p className="font-cormorant font-bold text-[28px] text-[#0B0B0B]">
              Your cart is empty.
            </p>
            <p className="font-urbanist text-[#565656] mt-2 text-base">
              Add some products to continue shopping.
            </p>
          </div>
        )}

        {/* ========================= CART UI (only when items exist) ========================= */}
        {cartItems.length > 0 && (
          <>
            {/* PROGRESS BAR */}
            <div className="px-5 pb-4 bg-white">
              <div className="w-full h-[7px] bg-[#e8e8e8] rounded-full">
                <div className="h-full bg-green-400 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="text-[#565656] text-md font-semibold mt-2">
                You qualify for free shipping!
              </p>
            </div>

            {/* CART ITEMS */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {cartItems.map((product, index) => (
                <div key={index} className="border-b border-[#CCCCCC] pb-6">
                  <div className="flex gap-8 items-center">
                    <img
                      onClick={() => {
                        onClose();
                        navigate(`/productDetails/${product.id}`);
                      }}
                      src={product.productImg}
                      className="w-16 h-20 object-contain cursor-pointer"
                    />

                    <div className="flex flex-col flex-1">
                      <p
                        className="font-semibold text-md mb-2 leading-5 font-urbanist text-[#641026] cursor-pointer"
                        onClick={() => {
                          onClose();
                          navigate(`/productDetails/${product.id}`);
                        }}
                      >
                        {product.productName}
                      </p>

                      <p className="font-urbanist font-bold text-base text-[#0B0B0B]">
                        ${product.price}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-5 py-1 w-fit shadow-sm">
                          <Minus
                            className="w-4 h-4 cursor-pointer"
                            onClick={() => dispatch(decreaseQuantity(product))}
                          />
                          <span className="font-semibold text-base">{product.quantity}</span>
                          <Plus
                            className="w-4 h-4 cursor-pointer"
                            onClick={() => dispatch(increaseQuantity(product))}
                          />
                        </div>

                        <button className="text-[#0B0B0B]" onClick={() => dispatch(removeFromCart(product.id))}>
                          <X className="w-6 h-6 mt-3 cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* YOU MAY ALSO LIKE */}
              {relatedProductsList.length > 0 && (
                <div className="pt-1">
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-[#0B0B0B] text-[24px] font-urbanist">
                      You May Also Like
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={slideLeft}
                        disabled={isBeginning}
                        className={`${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
                      >
                        <MoveLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={slideRight}
                        disabled={isEnd}
                        className={`${isEnd ? "opacity-30 pointer-events-none" : ""}`}
                      >
                        <MoveRight className="w-8 h-8" />
                      </button>
                    </div>
                  </div>

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    className="w-full"
                  >
                    {relatedProductsList.map((product, idx) => (
                      <SwiperSlide key={idx}>
                        <div
                          className="flex gap-10 items-start ps-12 justify-center"
                          onClick={() => navigate(`/productDetails/${product.id}`)}
                        >
                          <img
                            src={product.productImg}
                            className="w-[60px] h-[100px] object-contain cursor-pointer"
                          />

                          <div>
                            <p
                              className="font-semibold text-md mb-1 leading-5 font-urbanist text-[#641026] cursor-pointer"
                              onClick={() => {
                                onClose();
                                navigate(`/productDetails/${product.id}`);
                              }}
                            >
                              {product.productName}
                            </p>
                            <p className="font-urbanist font-bold text-base text-[#0B0B0B]">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="sticky bottom-0 bg-white px-6 pb-5 font-urbanist">
              <div className="grid grid-cols-3 border border-[#E5E5E5] rounded-md mb-5 overflow-hidden">
                <button
                  onClick={() => openSheet("instructions")}
                  className="flex justify-center items-center py-4 border-r border-[#E5E5E5]"
                >
                  <Clipboard className="w-6 h-6 text-[#565656]" />
                </button>

                <button
                  onClick={() => openSheet("shipping")}
                  className="flex justify-center items-center py-4 border-r border-[#E5E5E5]"
                >
                  <Truck className="w-6 h-6 text-[#565656]" />
                </button>

                <button
                  onClick={() => openSheet("coupon")}
                  className="flex justify-center items-center py-4"
                >
                  <Tag className="w-6 h-6 text-[#565656]" />
                </button>
              </div>

              <div className="flex justify-between pb-1">
                <span className="text-[#0B0B0B] font-semibold text-md">Subtotal:</span>
                <span className="text-[#0B0B0B] font-semibold text-md">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between pb-2">
                <span className="text-[#0B0B0B] font-semibold text-md">Total:</span>
                <span className="text-[#0B0B0B] font-semibold text-md">${total.toFixed(2)}</span>
              </div>

              <p className="font-urbanist font-semibold text-base text-[#565656] mb-6">
                Tax included and shipping calculated at checkout
              </p>

              <NavLink to = "/checkout">
                <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] cursor-pointer text-base font-semibold py-3 rounded-full">
                Checkout
              </button>
                </NavLink>

              <NavLink to="/cartDetails">
                <button
                  className="w-full border border-[#EED291] text-[#0B0B0B] text-base font-semibold cursor-pointer py-3 rounded-full mt-3"
                  onClick={() => onClose()}
                >
                  View Cart
                </button>
              </NavLink>
            </div>
          </>
        )}

        {/* ===================== Bottom Sheets (Unchanged) ===================== */}
        {activeSheet && (
          <div className="fixed inset-0 z-[1000000]" onClick={closeSheet}>
            <div className="absolute inset-0 bg-black/40" />

            <div
              className="absolute right-0 bottom-0 w-[360px] md:w-[410px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* INSTRUCTIONS SHEET */}
              {activeSheet === "instructions" && (
                <div className="w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto">
                  <SheetHeader
                    title="Order Special Instructions"
                    Icon={Clipboard}
                    onCloseSheet={closeSheet}
                  />

                  <div className="p-5">
                    <textarea
                      placeholder="Order special instructions"
                      className="w-full border border-[#E5E5E5] rounded-xl p-4 h-28 resize-none text-sm"
                    />

                    <div className="mt-5 space-y-3">
                      <button className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Save
                      </button>
                      <button className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* SHIPPING SHEET */}
              {activeSheet === "shipping" && (
                <div className="w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto">
                  <SheetHeader
                    title="Estimate Shipping Rates"
                    Icon={Truck}
                    onCloseSheet={closeSheet}
                  />

                  <div className="p-5 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">
                        Country/Region
                      </label>
                      <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">State</label>
                      <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
                        <option>Alabama</option>
                        <option>Alaska</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">ZIP Code</label>
                      <input
                        className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4"
                        placeholder="Postal code"
                      />
                    </div>

                    <div className="mt-3 space-y-3">
                      <button className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Calculate Shipping
                      </button>
                      <button className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* COUPON SHEET */}
              {activeSheet === "coupon" && (
                <div className="w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto">
                  <SheetHeader title="Add A Coupon" Icon={Tag} onCloseSheet={closeSheet} />

                  <div className="p-5 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">Coupon code</label>
                      <input
                        className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4"
                        placeholder="Coupon code content"
                      />
                    </div>

                    <div className="mt-3 space-y-3">
                      <button className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Save
                      </button>
                      <button className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopover;
