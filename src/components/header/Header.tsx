// import React, { useEffect, useRef, useState } from "react";
// import ews from "../../assets/images/ews.png";
// import user from "../../assets/images/user.png";
// import cart from "../../assets/images/cart.png";
// import { CircleUserRound, UserRoundPlus } from "lucide-react";
// import search from "../../assets/images/search.png";
// import USA from "../../assets/images/USA.svg";
// import Europe from "../../assets/images/Europe.svg.png";
// import UK from "../../assets/images/UK.svg";
// import switzerland from "../../assets/images/switzerland.jpg";
// import { NavLink } from "react-router";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const bannerRef = useRef<HTMLDivElement | null>(null);
//   const bannerHeightRef = useRef<number>(0);

//   useEffect(() => {
//     const measure = () => {
//       bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
//     };
//     measure();
//     window.addEventListener("resize", measure, { passive: true });

//     let ticking = false;
//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       requestAnimationFrame(() => {
//         const threshold = bannerHeightRef.current;
//         setIsSticky(window.scrollY >= threshold);
//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   const SearchIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-[19px] h-[19px]"
//     >
//       <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
//       <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"></line>
//     </svg>
//   );

//   const MenuIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-8 h-8"
//     >
//       <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"></line>
//       <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"></line>
//       <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"></line>
//     </svg>
//   );

//   const CloseIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
//       <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
//     </svg>
//   );

//   const ChevronRight = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-4 h-4"
//     >
//       <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
//     </svg>
//   );

//   return (
//     <>
//       {/* Banner section */}
//       <div className="w-full" ref={bannerRef}>
//         <div>
//           <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base relative   z-60 flex justify-center items-center w-full bg-[#EED291]">
//             Free shipping at $99+
//           </p>
//         </div>
//       </div>

//       {/* Header section */}
//       <header
//         className={`w-full   transition-colors duration-500 ease-in-out
//           ${
//             isSticky ? "bg-black z-[999] top-0 fixed" : "bg-transparent fixed"
//           } z-50 pt-2`}
//       >
//         <div className="w-[95%]  mx-auto flex justify-between items-center">
//           {/* Logo + tagline */}
//           <div className="flex flex-col justify-between items-center gap-3 font-urbanist font-semibold">
//             <img
//               src={ews}
//               alt="Elite Wine Logo"
//               className={`duration-500 ease-in-out  ${
//                 isSticky
//                   ? "xl:w-[50px] h-[60px]"
//                   : "w-[50px] xl:w-[128px] h-[60px] lg:h-[130px] xl:h-[137px] "
//               } object-cover object-center`}
//             />
//             <p
//               className={`text-[#C89D53] duration-500 ease-in-out  ${
//                 isSticky
//                   ? " text-xs"
//                   : " text-xs md:text-md lg:text-lg xl:text-xl"
//               }`}
//             >
//               Pure Terroir.{" "}
//               <span className="text-[#F9E6B1]">Zero Compromise.</span>
//             </p>
//           </div>

//           {/* Desktop navigation */}
//           <div className="hidden xl:flex justify-between gap-10 items-center text-[#FFFFFF] font-urbanist font-semibold text-md">
//             <ul className="flex items-center gap-8">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Home</li>
//               </NavLink>

//               <NavLink
//                 to="/shop"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Shop All</li>
//               </NavLink>

//               <NavLink
//                 to="/aboutUs"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>About Us</li>
//               </NavLink>

//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Blog</li>
//               </NavLink>
//             </ul>

//             <div className="flex items-center gap-4 text-[#FFFFFF]">
//               <img
//                 src={search}
//                 className="w-[18px] h-[18px] object-cover object-center"
//                 alt=""
//               />
//               <img
//                 src={user}
//                 alt="User"
//                 className="w-[18px] h-[18px] object-cover object-center"
//               />
//               <img
//                 src={cart}
//                 alt="Cart"
//                 className="w-[18px] h-[18px] object-cover object-center"
//               />
//             </div>

//             <div className="block">
//               <button className="text-[#0B0B0B] bg-[#EED291] border hover:bg-transparent ease-in-out duration-500 cursor-pointer hover:text-[#EED291] border-[#EED291] rounded-full px-8 pt-3 py-2.5">
//                 CONTACT US
//               </button>
//             </div>
//           </div>

//           {/* Mobile header */}
//           <div className="flex xl:hidden items-center gap-5 text-white">
//             <img
//               src={search}
//               className="search object-cover object-center"
//               alt=""
//             />
//             <img
//               src={user}
//               alt="User"
//               className="w-[24px] h-[24px] object-cover object-center"
//             />
//             <img
//               src={cart}
//               alt="Cart"
//               className="w-[24px] h-[24px] object-cover object-center"
//             />
//             <button
//               aria-label="Open menu"
//               onClick={() => setIsMenuOpen(true)}
//               className="text-white"
//             >
//               <MenuIcon class="hemburger" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Slide-over menu */}
//       <div
//         className={`fixed inset-0 z-[9999] xl:hidden ${
//           isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ease-out ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsMenuOpen(false)}
//         ></div>
//         <div
//           className={`absolute top-0 left-0 h-full w-[330px] z-90   md:w-[370px] bg-[#0b0b0b] text-white overflow-y-auto transform transition-transform duration-300 ease-out ${
//             isMenuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-lg font-semibold px-5 pt-3">Menu</p>
//             <button
//               aria-label="Close menu"
//               onClick={() => setIsMenuOpen(false)}
//               className="text-white pt-3 pe-3"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           <nav className="space-y-0.5">
//             <NavLink
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left ${
//                   isActive ? "text-[#EED291]" : ""
//                 } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
//               }
//             >
//               <span>Home</span>
//             </NavLink>

//             <NavLink
//               to="/shop"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left ${
//                   isActive ? "text-[#EED291]" : ""
//                 } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
//               }
//             >
//               <span>Shop All</span>
//             </NavLink>

//             <NavLink
//               to="/about"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left ${
//                   isActive ? "text-[#EED291]" : ""
//                 } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
//               }
//             >
//               <span>About Us</span>
//               <ChevronRight className="text-xl !h-6 !w-5" />
//             </NavLink>

//             <NavLink
//               to="/blog"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left ${
//                   isActive ? "text-[#EED291]" : ""
//                 } px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center justify-between`
//               }
//             >
//               <span>Blog</span>
//             </NavLink>

//             <button
//               onClick={() => setIsMenuOpen(false)}
//               className="w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center gap-2"
//             >
//               <span className="w-5 h-5 flex items-center justify-center">
//                 <CircleUserRound />
//               </span>
//               <span>Sign In</span>
//             </button>
//           </nav>

//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="w-full text-left px-5 pb-3 pt-2.5 rounded bg-transparent hover:bg-white/5  flex items-center gap-2"
//           >
//             <span className="w-5 h-5   flex items-center justify-center ">
//               {" "}
//               <UserRoundPlus />
//             </span>
//             <span>Create an account</span>
//           </button>

//           <div onClick={() => setIsMenuOpen(false)}>
//             <p className="text-sm text-white  font-bold px-5 pb-3 pt-2.5">
//               CURRENCY
//             </p>
//           </div>

//           <div className="ps-5 px-5 pb-3 pt-2.5">
//             <div
//               className="flex items-center gap-5 flex-wrap "
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <span className="flex items-center gap-2">
//                 <img
//                   src={USA}
//                   alt="USA"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 USD
//               </span>

//               <span className="flex items-center gap-2">
//                 <img
//                   src={Europe}
//                   alt="Europe"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 EUR
//               </span>

//               <span className="flex items-center gap-2">
//                 <img
//                   src={UK}
//                   alt="UK"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 GBP
//               </span>

//               <span className="flex items-center gap-2">
//                 <img
//                   src={switzerland}
//                   alt="Switzerland"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 CHF
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

// Header.tsx — PART 1 of 3
// import React, { useEffect, useRef, useState } from "react";
// import ews from "../../assets/images/ews.png";
// import user from "../../assets/images/user.png";
// import cart from "../../assets/images/cart.png";
// import { CircleUserRound, UserRoundPlus } from "lucide-react";
// import search from "../../assets/images/search.png";
// import USA from "../../assets/images/USA.svg";
// import Europe from "../../assets/images/Europe.svg.png";
// import UK from "../../assets/images/UK.svg";
// import switzerland from "../../assets/images/switzerland.jpg";
// import { NavLink } from "react-router";
// import { Link } from "react-router-dom"; // used for dropdown links

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const bannerRef = useRef<HTMLDivElement | null>(null);
//   const bannerHeightRef = useRef<number>(0);

//   // NEW: control desktop hover dropdown
//   const [showAboutDropdown, setShowAboutDropdown] = useState(false);
//   const aboutTimeoutRef = useRef<number | null>(null);

//   // NEW: control mobile nested about panel inside slide-over
//   const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

//   useEffect(() => {
//     const measure = () => {
//       bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
//     };
//     measure();
//     window.addEventListener("resize", measure, { passive: true });

//     let ticking = false;
//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       requestAnimationFrame(() => {
//         const threshold = bannerHeightRef.current;
//         setIsSticky(window.scrollY >= threshold);
//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   const SearchIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-[19px] h-[19px]"
//     >
//       <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
//       <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"></line>
//     </svg>
//   );

//   const MenuIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-8 h-8"
//     >
//       <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"></line>
//       <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"></line>
//       <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"></line>
//     </svg>
//   );

//   const CloseIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
//       <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
//     </svg>
//   );

//   const ChevronRight = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className="w-4 h-4"
//     >
//       <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
//     </svg>
//   );

//   // ABOUT ITEMS (routes + labels)
//   const aboutItems = [
//     { label: "About Us Bergdolt, Reif & Nett", to: "/aboutUs/bergdolt-reif-nett" },
//     { label: "About Us Lamm-Jung", to: "/aboutUs/lamm-jung" },
//     { label: "About Us KvD Strauch Sektmanufaktur", to: "/aboutUs/kvd-strauch-sektmanufaktur" },
//     { label: "About Château Clos De Boüard", to: "/aboutUs/château-clos-de-boüard" },
//     { label: "About Weingut Matthias Anton", to: "/aboutUs/matthias" },
//   ];

//   // Helpers for desktop hover: small delay to avoid flicker
//   const openAboutDropdown = () => {
//     if (aboutTimeoutRef.current) {
//       window.clearTimeout(aboutTimeoutRef.current);
//       aboutTimeoutRef.current = null;
//     }
//     setShowAboutDropdown(true);
//   };

//   const closeAboutDropdown = () => {
//     // small delay for mouse leave
//     aboutTimeoutRef.current = window.setTimeout(() => {
//       setShowAboutDropdown(false);
//     }, 120);
//   };

//   // Close dropdown immediately (used when clicking elsewhere)
//   const forceCloseAboutDropdown = () => {
//     if (aboutTimeoutRef.current) {
//       window.clearTimeout(aboutTimeoutRef.current);
//       aboutTimeoutRef.current = null;
//     }
//     setShowAboutDropdown(false);
//   };

//   // Header.tsx — PART 2 of 3

//   return (
//     <>
//       {/* Banner section */}
//       <div className="w-full" ref={bannerRef}>
//         <div>
//           <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base relative z-60 flex justify-center items-center w-full bg-[#EED291]">
//             Free shipping at $99+
//           </p>
//         </div>
//       </div>

//       {/* Header section */}
//       <header
//         className={`w-full transition-colors duration-500 ease-in-out
//           ${
//             isSticky ? "bg-black z-[999] top-0 fixed" : "bg-transparent fixed"
//           } z-50 pt-2`}
//       >
//         <div className="w-[95%] mx-auto flex justify-between items-center">

//           {/* LOGO */}
//           <div className="flex flex-col justify-between items-center gap-3 font-urbanist font-semibold">
//             <img
//               src={ews}
//               alt="Elite Wine Logo"
//               className={`duration-500 ease-in-out ${
//                 isSticky
//                   ? "xl:w-[50px] h-[60px]"
//                   : "w-[50px] xl:w-[128px] h-[60px] lg:h-[130px] xl:h-[137px]"
//               } object-cover object-center`}
//             />

//             <p
//               className={`text-[#C89D53] duration-500 ease-in-out ${
//                 isSticky ? "text-xs" : "text-xs md:text-md lg:text-lg xl:text-xl"
//               }`}
//             >
//               Pure Terroir. <span className="text-[#F9E6B1]">Zero Compromise.</span>
//             </p>
//           </div>

//           {/* DESKTOP NAVIGATION (≥1024px) */}
//           <div className="hidden xl:flex justify-between gap-10 items-center text-[#FFFFFF] font-urbanist font-semibold text-md relative">

//             <ul className="flex items-center gap-8">

//               <NavLink
//                 to="/"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Home</li>
//               </NavLink>

//               <NavLink
//                 to="/shop"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Shop All</li>
//               </NavLink>

//               {/* ================= DESKTOP ABOUT DROPDOWN ================= */}
//               <li
//                 className="relative"
//                 // onMouseEnter={openAboutDropdown}
//                 // onMouseLeave={closeAboutDropdown}
//                 onClick = {openAboutDropdown}
//               >
//                 <span
//                   className={`cursor-pointer ${
//                     showAboutDropdown ? "text-[#EED291]" : ""
//                   }`}
//                 >
//                   About Us
//                 </span>

//                 {/* Dropdown panel (260px fixed width) */}
//                 {showAboutDropdown && (
//                   <div
//                     className="absolute top-full left-0 mt-3 bg-white shadow-xl border border-gray-200 rounded-lg py-2 w-[220px] z-[999999] transition-all"
//                     // onMouseEnter={openAboutDropdown}
//                     // onMouseLeave={openAboutDropdown}
//                   >
//                     {aboutItems.map((item, i) => (
//                       <Link
//                         key={i}
//                         to={item.to}
//                         className="block px-4 py-3 text-[#0B0B0B] border-b mx-3  border-[#EED291] font-urbanist font-semibold text-sm hover:bg-[#F5F5F5]"
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </li>

//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Blog</li>
//               </NavLink>
//             </ul>

//             <div className="flex items-center gap-4 text-[#FFFFFF]">
//               <img src={search} className="w-[18px] h-[18px]" alt="search" />
//               <img src={user} className="w-[18px] h-[18px]" alt="user" />
//               <img src={cart} className="w-[18px] h-[18px]" alt="cart" />
//             </div>

//             <div className="block">
//               <button className="text-[#0B0B0B] bg-[#EED291] border hover:bg-transparent ease-in-out duration-500 cursor-pointer hover:text-[#EED291] border-[#EED291] rounded-full px-8 pt-3 py-2.5">
//                 CONTACT US
//               </button>
//             </div>
//           </div>

//           {/* MOBILE HEADER (≤1024px) */}
//           <div className="flex xl:hidden items-center gap-5 text-white">
//             <img src={search} className="w-[20px] h-[20px]" alt="" />
//             <img src={user} className="w-[24px] h-[24px]" alt="" />
//             <img src={cart} className="w-[24px] h-[24px]" alt="" />

//             <button onClick={() => setIsMenuOpen(true)} className="text-white">
//               <MenuIcon />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ===================== MOBILE SLIDE MENU ===================== */}
// {/* ===================== MOBILE SLIDE MENU ===================== */}
// <div
//   className={`fixed inset-0 z-[9999] xl:hidden ${
//     isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
//   }`}
// >
//   <div
//     className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//       isMenuOpen ? "opacity-100" : "opacity-0"
//     }`}
//     onClick={() => {
//       setIsMenuOpen(false);
//       setIsAboutPanelOpen(false);
//     }}
//   />

//   {/* LEFT SLIDE PANEL */}
//   <div
//     className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px] bg-[#0b0b0b] text-white overflow-y-auto transform transition-transform duration-300 ease-out ${
//       isMenuOpen ? "translate-x-0" : "-translate-x-full"
//     }`}
//   >
//     <div className="flex items-center justify-between mb-4">
//       <p className="text-lg font-semibold px-5 pt-3">Menu</p>
//       <button
//         onClick={() => {
//           setIsMenuOpen(false);
//           setIsAboutPanelOpen(false);
//         }}
//         className="text-white pt-3 pe-3"
//       >
//         <CloseIcon />
//       </button>
//     </div>

//     {/* MOBILE MENU LIST */}
//     <nav className="space-y-0.5">
//       <NavLink
//         to="/"
//         onClick={() => setIsMenuOpen(false)}
//         className={({ isActive }) =>
//           `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex justify-between hover:bg-white/5 ${
//             isActive ? "text-[#EED291]" : ""
//           }`
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/shop"
//         onClick={() => setIsMenuOpen(false)}
//         className={({ isActive }) =>
//           `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex justify-between hover:bg-white/5 ${
//             isActive ? "text-[#EED291]" : ""
//           }`
//         }
//       >
//         Shop All
//       </NavLink>

//       {/* OPEN NESTED ABOUT PANEL */}
//       <button
//         onClick={() => setIsAboutPanelOpen(true)}
//         className="w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex items-center justify-between hover:bg-white/5 font-semibold"
//       >
//         <span>About Us</span>
//         <ChevronRight />
//       </button>

//       <NavLink
//         to="/blog"
//         onClick={() => setIsMenuOpen(false)}
//         className={({ isActive }) =>
//           `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex justify-between hover:bg-white/5 ${
//             isActive ? "text-[#EED291]" : ""
//           }`
//         }
//       >
//         Blog
//       </NavLink>

//                   <button
//               onClick={() => setIsMenuOpen(false)}
//               className="w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] rounded bg-transparent hover:bg-white/5 flex items-center gap-2"
//             >
//               <span className="w-5 h-5 flex items-center justify-center">
//                 <CircleUserRound />
//               </span>
//               <span>Sign In</span>
//             </button>
//     </nav>

//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="w-full text-left px-5 pb-3 pt-2.5 rounded bg-transparent hover:bg-white/5  flex items-center gap-2"
//           >
//             <span className="w-5 h-5   flex items-center justify-center ">
//               {" "}
//               <UserRoundPlus />
//             </span>
//             <span>Create an account</span>
//           </button>

//           <div onClick={() => setIsMenuOpen(false)}>
//             <p className="text-sm text-white  font-bold px-5 pb-3 pt-2.5">
//               CURRENCY
//             </p>
//           </div>

//           <div className="ps-5 px-5 pb-3 pt-2.5">
//             <div
//               className="flex items-center gap-5 flex-wrap "
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <span className="flex items-center gap-2">
//                 <img
//                   src={USA}
//                   alt="USA"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 USD
//               </span>

//               <span className="flex items-center gap-2">
//                 <img
//                   src={Europe}
//                   alt="Europe"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 EUR
//               </span>

//               <span className="flex items-center gap-2">
//                 <img
//                   src={UK}
//                   alt="UK"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 GBP
//               </span>

//               <span className="flex items-center gap-2">
//                 <img
//                   src={switzerland}
//                   alt="Switzerland"
//                   className="w-4 h-4 rounded-full object-cover object-center"
//                 />{" "}
//                 CHF
//               </span>
//             </div>
//           </div>
//   </div>

//   {/* ================= MOBILE NESTED ABOUT PANEL ================= */}
//   <div
//     className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px] bg-[#0b0b0b] text-white overflow-y-auto transform transition-transform duration-300 ease-out ${
//       isAboutPanelOpen ? "translate-x-0" : "-translate-x-full"
//     }`}
//   >
//     {/* HEADER */}
//     <div className="flex items-center justify-between mb-4">
//       <p className="text-lg font-semibold px-5 pt-3">About Us</p>

//       <button
//         onClick={() => setIsAboutPanelOpen(false)}
//         className="text-white pt-3 pe-3"
//       >
//         <CloseIcon />
//       </button>
//     </div>

//     {/* SAME LIST AS DESKTOP */}
//     <div className="pb-4">
//       {aboutItems.map((item, idx) => (
//         <NavLink
//           key={idx}
//           to={item.to}
//           onClick={() => {
//             setIsMenuOpen(false);
//             setIsAboutPanelOpen(false);
//           }}
//           className="block px-5 py-4 border-b border-[#e6e6e673] text-[#FFFFFF] font-urbanist font-semibold text-sm hover:bg-white/5"
//         >
//           {item.label}
//         </NavLink>
//       ))}
//     </div>
//   </div>
// </div>

//       {/* ================= END MOBILE SLIDE MENU ================= */}
//     </>
//   );
// };

// export default Header;

// import React, { useEffect, useRef, useState } from "react";
// import ews from "../../assets/images/ews.png";
// import user from "../../assets/images/user.png";
// import cart from "../../assets/images/cart.png";
// import { CircleUserRound, UserRoundPlus } from "lucide-react";
// import search from "../../assets/images/search.png";
// import USA from "../../assets/images/USA.svg";
// import Europe from "../../assets/images/Europe.svg.png";
// import UK from "../../assets/images/UK.svg";
// import switzerland from "../../assets/images/switzerland.jpg";
// import { NavLink } from "react-router";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const bannerRef = useRef<HTMLDivElement | null>(null);
//   const bannerHeightRef = useRef<number>(0);

//   const [showAboutDropdown, setShowAboutDropdown] = useState(false);
//   const aboutTimeoutRef = useRef<number | null>(null);

//   const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

//   useEffect(() => {
//     const measure = () => {
//       bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
//     };
//     measure();
//     window.addEventListener("resize", measure, { passive: true });

//     let ticking = false;
//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       requestAnimationFrame(() => {
//         const threshold = bannerHeightRef.current;
//         setIsSticky(window.scrollY >= threshold);
//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   const ChevronRight = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       stroke="currentColor"
//       className="w-4 h-4"
//     >
//       <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
//     </svg>
//   );

//   const CloseIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
//       <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
//     </svg>
//   );

//   const aboutItems = [
//     {
//       label: "About Us Bergdolt, Reif & Nett",
//       to: "/aboutUs/bergdolt-reif-nett",
//     },
//     { label: "About Us Lamm-Jung", to: "/aboutUs/lamm-jung" },
//     {
//       label: "About Us KvD Strauch Sektmanufaktur",
//       to: "/aboutUs/kvd-strauch-sektmanufaktur",
//     },
//     {
//       label: "About Château Clos De Boüard",
//       to: "/aboutUs/château-clos-de-boüard",
//     },
//     { label: "About Weingut Matthias Anton", to: "/aboutUs/matthias" },
//   ];

//   const openAboutDropdown = () => {
//     if (aboutTimeoutRef.current) {
//       clearTimeout(aboutTimeoutRef.current);
//       aboutTimeoutRef.current = null;
//     }
//     setShowAboutDropdown(true);
//   };

//   const closeAboutDropdown = () => {
//     aboutTimeoutRef.current = window.setTimeout(() => {
//       setShowAboutDropdown(false);
//     }, 130);
//   };

//   return (
//     <>
//       {/* Banner */}
//       <div className="w-full" ref={bannerRef}>
//         <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base bg-[#EED291] w-full text-center">
//           Free shipping at $99+
//         </p>
//       </div>

//       {/* HEADER */}
//       <header
//         className={`w-full z-50 pt-2 transition-colors duration-500 ${
//           isSticky ? "bg-black fixed top-0 z-[999]" : "bg-transparent fixed"
//         }`}
//       >
//         <div className="w-[95%] mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex flex-col items-center gap-3 font-urbanist font-semibold">
//             <img
//               src={ews}
//               className={`duration-500 ${
//                 isSticky
//                   ? "xl:w-[50px] h-[60px]"
//                   : "w-[50px] xl:w-[128px] h-[60px] lg:h-[130px] xl:h-[137px]"
//               }`}
//             />

//             <p
//               className={`text-[#C89D53] duration-500 ${
//                 isSticky
//                   ? "text-xs"
//                   : "text-xs md:text-md lg:text-lg xl:text-xl"
//               }`}
//             >
//               Pure Terroir.{" "}
//               <span className="text-[#F9E6B1]">Zero Compromise.</span>
//             </p>
//           </div>

//           {/* DESKTOP NAV */}
//           <div className="hidden xl:flex gap-10 items-center text-white font-urbanist font-semibold text-md relative">
//             <ul className="flex items-center gap-8">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Home</li>
//               </NavLink>

//               <NavLink
//                 to="/shop"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Shop All</li>
//               </NavLink>

//               {/* ABOUT DROPDOWN */}
//               <li
//                 className="relative"
//                 onMouseEnter={openAboutDropdown}
//                 onMouseLeave={closeAboutDropdown}
//               >
//                 <span
//                   className={`cursor-pointer ${
//                     showAboutDropdown ? "text-[#EED291]" : ""
//                   }`}
//                 >
//                   About Us
//                 </span>
//                 {/* Dropdown panel — UPDATED DESIGN */}
//                 {showAboutDropdown && (
//                   <div
//                     className="
//                       absolute top-full left-0 mt-3
//                       w-[220px]
//                       bg-gradient-to-b from-[#121212] to-[#0B0B0B]
//                       border border-[#EED291]
//                       z-[999999]
//                     "
//                     onMouseEnter={openAboutDropdown}
//                     onMouseLeave={closeAboutDropdown}
//                   >
//                     {aboutItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={item.to}
//                         className="
//                           block px-4 py-3
//                           text-white font-urbanist font-semibold text-sm
//                           border-b border-[#EED291]
//                           hover:text-[#EED291]
//                         "
//                         style={{ backgroundColor: "transparent" }}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </li>

//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) => (isActive ? "text-[#EED291]" : "")}
//               >
//                 <li>Blog</li>
//               </NavLink>
//             </ul>

//             {/* Search / User / Cart */}
//             <div className="flex items-center gap-4 text-white">
//               <img src={search} className="w-[18px] h-[18px]" alt="search" />
//               <img src={user} className="w-[18px] h-[18px]" alt="user" />
//               <img src={cart} className="w-[18px] h-[18px]" alt="cart" />
//             </div>

//             {/* CONTACT US */}
//             <div>
//               <button className="text-[#0B0B0B] bg-[#EED291] border border-[#EED291] hover:bg-transparent hover:text-[#EED291] duration-300 rounded-full px-8 pt-3 py-2.5">
//                 CONTACT US
//               </button>
//             </div>
//           </div>

//           {/* MOBILE HEADER ICONS */}
//           <div className="flex xl:hidden items-center gap-5 text-white">
//             <img src={search} className="w-[20px] h-[20px]" alt="" />
//             <img src={user} className="w-[24px] h-[24px]" alt="" />
//             <img src={cart} className="w-[24px] h-[24px]" alt="" />

//             <button onClick={() => setIsMenuOpen(true)} className="text-white">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor">
//                 <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
//                 <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
//                 <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ===================== MOBILE SLIDE MENU ===================== */}
//       <div
//         className={`fixed inset-0 z-[9999] xl:hidden ${
//           isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => {
//             setIsMenuOpen(false);
//             setIsAboutPanelOpen(false);
//           }}
//         />

//         {/* LEFT SLIDE PANEL */}
//         <div
//           className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px] bg-[#0b0b0b] text-white overflow-y-auto transform transition-transform duration-300 ease-out ${
//             isMenuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-lg font-semibold px-5 pt-3">Menu</p>
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setIsAboutPanelOpen(false);
//               }}
//               className="text-white pt-3 pe-3"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* MOBILE MENU LIST */}
//           <nav className="space-y-0.5">
//             <NavLink
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex justify-between hover:bg-white/5 ${
//                   isActive ? "text-[#EED291]" : ""
//                 }`
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/shop"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex justify-between hover:bg-white/5 ${
//                   isActive ? "text-[#EED291]" : ""
//                 }`
//               }
//             >
//               Shop All
//             </NavLink>

//             {/* OPEN ABOUT PANEL */}
//             <button
//               onClick={() => setIsAboutPanelOpen(true)}
//               className="w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex items-center justify-between hover:bg-white/5 font-semibold"
//             >
//               <span>About Us</span>
//               <ChevronRight />
//             </button>

//             <NavLink
//               to="/blog"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] flex justify-between hover:bg-white/5 ${
//                   isActive ? "text-[#EED291]" : ""
//                 }`
//               }
//             >
//               Blog
//             </NavLink>

//             {/* SIGN IN */}
//             <button
//               onClick={() => setIsMenuOpen(false)}
//               className="w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673] hover:bg-white/5 flex items-center gap-2"
//             >
//               <span className="w-5 h-5 flex items-center justify-center">
//                 <CircleUserRound />
//               </span>
//               <span>Sign In</span>
//             </button>
//           </nav>

//           {/* CREATE ACCOUNT */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="w-full text-left px-5 pb-3 pt-2.5 hover:bg-white/5 flex items-center gap-2"
//           >
//             <span className="w-5 h-5 flex items-center justify-center">
//               <UserRoundPlus />
//             </span>
//             <span>Create an account</span>
//           </button>

//           {/* CURRENCY */}
//           <p className="text-sm text-white font-bold px-5 pb-3 pt-2.5">
//             CURRENCY
//           </p>

//           <div className="ps-5 px-5 pb-3 pt-2.5">
//             <div className="flex items-center gap-5 flex-wrap">
//               <span className="flex items-center gap-2">
//                 <img src={USA} className="w-4 h-4 rounded-full" /> USD
//               </span>
//               <span className="flex items-center gap-2">
//                 <img src={Europe} className="w-4 h-4 rounded-full" /> EUR
//               </span>
//               <span className="flex items-center gap-2">
//                 <img src={UK} className="w-4 h-4 rounded-full" /> GBP
//               </span>
//               <span className="flex items-center gap-2">
//                 <img src={switzerland} className="w-4 h-4 rounded-full" /> CHF
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ================= MOBILE NESTED ABOUT PANEL ================= */}
//         <div
//           className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px] bg-[#0b0b0b] text-white overflow-y-auto transform transition-transform duration-300 ease-out ${
//             isAboutPanelOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* HEADER */}
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-lg font-semibold px-5 pt-3">About Us</p>

//             <button
//               onClick={() => setIsAboutPanelOpen(false)}
//               className="text-white pt-3 pe-3"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* ABOUT ITEMS */}
//           <div className="pb-4">
//             {aboutItems.map((item, idx) => (
//               <NavLink
//                 key={idx}
//                 to={item.to}
//                 onClick={() => {
//                   setIsMenuOpen(false);
//                   setIsAboutPanelOpen(false);
//                 }}
//                 className="block px-5 py-4 border-b border-[#e6e6e673] text-white font-urbanist font-semibold text-sm hover:bg-white/5"
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= END MOBILE SLIDE MENU ================= */}
//     </>
//   );
// };

// export default Header;

// ====================== HEADER.TSX — PART 1/3 ======================
// import React, { useEffect, useRef, useState } from "react";
// import ews from "../../assets/images/ews.png";
// import user from "../../assets/images/user.png";
// import cart from "../../assets/images/cart.png";
// import { CircleUserRound, UserRoundPlus } from "lucide-react";
// import search from "../../assets/images/search.png";
// import USA from "../../assets/images/USA.svg";
// import Europe from "../../assets/images/Europe.svg.png";
// import UK from "../../assets/images/UK.svg";
// import switzerland from "../../assets/images/switzerland.jpg";
// import { NavLink } from "react-router";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const bannerRef = useRef<HTMLDivElement | null>(null);
//   const bannerHeightRef = useRef<number>(0);

//   // Desktop dropdown state
//   const [showAboutDropdown, setShowAboutDropdown] = useState(false);

//   // Mobile nested panel
//   const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

//   // Fix dropdown closing issue
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const aboutBtnRef = useRef<HTMLLIElement | null>(null);

//   useEffect(() => {
//     // Close only when clicked outside BOTH button and dropdown
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node) &&
//         !aboutBtnRef.current?.contains(e.target as Node)
//       ) {
//         setShowAboutDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Sticky header logic
//   useEffect(() => {
//     const measure = () => {
//       bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
//     };
//     measure();
//     window.addEventListener("resize", measure, { passive: true });

//     let ticking = false;
//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       requestAnimationFrame(() => {
//         const threshold = bannerHeightRef.current;
//         setIsSticky(window.scrollY >= threshold);
//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   // Chevron icon
//   const ChevronRight = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4">
//       <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
//     </svg>
//   );

//   const CloseIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6">
//       <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
//       <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
//     </svg>
//   );

//   // ABOUT ITEMS
//   const aboutItems = [
//     { label: "About Us Bergdolt, Reif & Nett", to: "/aboutUs/bergdolt-reif-nett" },
//     { label: "About Us Lamm-Jung", to: "/aboutUs/lamm-jung" },
//     { label: "About Us KvD Strauch Sektmanufaktur", to: "/aboutUs/kvd-strauch-sektmanufaktur" },
//     { label: "About Château Clos De Boüard", to: "/aboutUs/château-clos-de-boüard" },
//     { label: "About Weingut Matthias Anton", to: "/aboutUs/matthias" },
//   ];

//     const aboutItemsForMobile = [
//     { label: "Go To About Us", to: "/aboutUs" },
//     { label: "About Us Bergdolt, Reif & Nett", to: "/aboutUs/bergdolt-reif-nett" },
//     { label: "About Us Lamm-Jung", to: "/aboutUs/lamm-jung" },
//     { label: "About Us KvD Strauch Sektmanufaktur", to: "/aboutUs/kvd-strauch-sektmanufaktur" },
//     { label: "About Château Clos De Boüard", to: "/aboutUs/château-clos-de-boüard" },
//     { label: "About Weingut Matthias Anton", to: "/aboutUs/matthias" },
//   ];

//   // ========== Text-Only Underline Animation Utility ==========
//   const underlineClass =
//     "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#EED291] " +
//     "after:w-0 hover:after:w-full after:transition-all after:duration-300";

//     // ====================== HEADER.TSX — PART 2/3 ======================

//   return (
//     <>
//       {/* Banner */}
//       <div className="w-full" ref={bannerRef}>
//         <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base bg-[#EED291] text-center">
//           Free shipping at $99+
//         </p>
//       </div>

//       {/* HEADER */}
//       <header
//         className={`w-full fixed top-0 pt-2 transition-colors duration-500 z-[999] ${
//           isSticky ? "bg-black" : "bg-transparent"
//         }`}
//       >
//         <div className="w-[95%] mt-10 mx-auto flex justify-between items-center">

//           {/* Logo */}
//           <div className="flex flex-col items-center gap-3 font-urbanist font-semibold">
//             <img
//               src={ews}
//               className={`duration-500 ${
//                 isSticky
//                   ? "xl:w-[50px] h-[60px]"
//                   : "w-[50px] xl:w-[128px] h-[60px] lg:h-[130px] xl:h-[137px]"
//               }`}
//             />

//             <p
//               className={`text-[#C89D53] duration-500 ${
//                 isSticky ? "text-xs" : "text-xs md:text-md lg:text-lg xl:text-xl"
//               }`}
//             >
//               Pure Terroir.{" "}
//               <span className="text-[#F9E6B1]">Zero Compromise.</span>
//             </p>
//           </div>

//           {/* DESKTOP NAVIGATION */}
//           <div className="hidden xl:flex gap-10 items-center text-white font-urbanist font-semibold text-md relative">

//             <ul className="flex items-center gap-8">

//               {/* HOME */}
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-[#EED291]" : ""} ${underlineClass}`
//                 }
//               >
//                 <li>Home</li>
//               </NavLink>

//               {/* SHOP ALL */}
//               <NavLink
//                 to="/shop"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-[#EED291]" : ""} ${underlineClass}`
//                 }
//               >
//                 <li>Shop All</li>
//               </NavLink>

//               {/* ABOUT US DROPDOWN */}
//               <li
//                 ref={aboutBtnRef}
//                 className={`relative cursor-pointer ${underlineClass}`}
//                 onClick={() => setShowAboutDropdown(!showAboutDropdown)}
//               >
//                 <span className={showAboutDropdown ? "text-[#EED291]" : ""}>
//                   About Us
//                 </span>

//                 {/* DROPDOWN PANEL */}
//                 {showAboutDropdown && (
//                   <div
//                     ref={dropdownRef}
//                     className="
//                       absolute top-full left-0 mt-3
//                       w-[210px]
//                       bg-[#0B0B0B]
//                       border border-[#EED291]
//                       shadow-lg
//                       overflow-hidden
//                       z-[999999]
//                     "
//                   >
//                     {aboutItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={item.to}
//                         className="
//                           block px-1 py-2 text-white font-urbanist font-semibold text-sm
//                           border-b border-[#EED291] mx-4
//                           relative
//                           transition-colors duration-300
//                           hover:text-[#EED291]
//                         "
//                       >
//                         {/* Text */}
//                         {item.label}

//                         {/* Underline animation inside dropdown */}
//                         <span
//                           className="
//                             absolute bottom-0 left-0 h-[2px] bg-[#EED291]
//                             w-0 group-hover:w-full transition-all duration-300
//                           "
//                         ></span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </li>

//               {/* BLOG */}
//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-[#EED291]" : ""} ${underlineClass}`
//                 }
//               >
//                 <li>Blog</li>
//               </NavLink>
//             </ul>

//             {/* Icons */}
//             <div className="flex items-center gap-4 text-white">
//               <img src={search} className="w-[18px] h-[18px]" alt="search" />
//               <img src={user} className="w-[18px] h-[18px]" alt="user" />
//               <img src={cart} className="w-[18px] h-[18px]" alt="cart" />
//             </div>

//             {/* Contact Button */}
//             <button className="text-[#0B0B0B] bg-[#EED291] border border-[#EED291] rounded-full px-8 pt-3 py-2.5 hover:bg-transparent hover:text-[#EED291] transition">
//               CONTACT US
//             </button>
//           </div>

//           {/* ================= MOBILE HEADER ICONS ================= */}
//           <div className="flex xl:hidden items-center gap-5 text-white">
//             <img src={search} className="w-[20px] h-[20px]" />
//             <img src={user} className="w-[24px] h-[24px]" />
//             <img src={cart} className="w-[24px] h-[24px]" />

//             <button onClick={() => setIsMenuOpen(true)}>
//               <svg className="w-8 h-8" fill="none" stroke="currentColor">
//                 <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
//                 <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
//                 <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ===================== MOBILE SLIDE MENU ===================== */}
//       <div
//         className={`fixed inset-0 z-[9999] xl:hidden ${
//           isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => {
//             setIsMenuOpen(false);
//             setIsAboutPanelOpen(false);
//           }}
//         />

//         {/* LEFT MENU PANEL */}
//         <div
//           className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px]
//             bg-[#0B0B0B] text-white overflow-y-auto
//             transform transition-transform duration-300 ease-out
//             ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//         >
//           {/* HEADER */}
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-lg font-semibold px-5 pt-3">Menu</p>
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setIsAboutPanelOpen(false);
//               }}
//               className="text-white pt-3 pe-3"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* MENU LIST */}
//           <nav className="space-y-0.5">

//             <NavLink
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
//                 flex justify-between hover:bg-white/5 ${
//                   isActive ? "text-[#EED291]" : ""
//                 }`
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/shop"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
//                 flex justify-between hover:bg-white/5 ${
//                   isActive ? "text-[#EED291]" : ""
//                 }`
//               }
//             >
//               Shop All
//             </NavLink>

//             {/* OPEN ABOUT PANEL */}
//             <button
//               onClick={() => setIsAboutPanelOpen(true)}
//               className="w-full text-left px-5 pb-3 pt-2.5
//               border-b border-[#e6e6e673] flex items-center justify-between
//               hover:bg-white/5 font-semibold"
//             >
//               <span>About Us</span>
//               <ChevronRight />
//             </button>

//             <NavLink
//               to="/blog"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
//                  flex justify-between hover:bg-white/5 ${
//                    isActive ? "text-[#EED291]" : ""
//                  }`
//               }
//             >
//               Blog
//             </NavLink>

//             {/* SIGN IN */}
//             <button
//               onClick={() => setIsMenuOpen(false)}
//               className="w-full text-left px-5 pb-3 pt-2.5
//               border-b border-[#e6e6e673] hover:bg-white/5 flex items-center gap-2"
//             >
//               <span className="w-5 h-5 flex items-center justify-center">
//                 <CircleUserRound />
//               </span>
//               <span>Sign In</span>
//             </button>
//           </nav>

//           {/* CREATE ACCOUNT */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="w-full text-left px-5 pb-3 pt-2.5
//             hover:bg-white/5 flex items-center gap-2"
//           >
//             <span className="w-5 h-5 flex items-center justify-center">
//               <UserRoundPlus />
//             </span>
//             <span>Create an account</span>
//           </button>

//           {/* CURRENCY AREA */}
//           <p className="text-sm text-white font-bold px-5 pb-3 pt-2.5">
//             CURRENCY
//           </p>

//           <div className="ps-5 px-5 pb-3 pt-2.5">
//             <div className="flex items-center gap-5 flex-wrap">
//               <span className="flex items-center gap-2">
//                 <img src={USA} className="w-4 h-4 rounded-full" /> USD
//               </span>
//               <span className="flex items-center gap-2">
//                 <img src={Europe} className="w-4 h-4 rounded-full" /> EUR
//               </span>
//               <span className="flex items-center gap-2">
//                 <img src={UK} className="w-4 h-4 rounded-full" /> GBP
//               </span>
//               <span className="flex items-center gap-2">
//                 <img src={switzerland} className="w-4 h-4 rounded-full" /> CHF
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ===================== MOBILE ABOUT PANEL ===================== */}
//         <div
//           className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px]
//             bg-[#0B0B0B] text-white overflow-y-auto
//             transform transition-transform duration-300 ease-out
//             ${isAboutPanelOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//         >
//           {/* HEADER */}
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-lg font-semibold px-5 pt-3">About Us</p>

//             <button
//               onClick={() => setIsAboutPanelOpen(false)}
//               className="text-white pt-3 pe-3"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* MOBILE ABOUT ITEMS */}
//           <div className="pb-4">
//             {aboutItemsForMobile.map((item, idx) => (
//               <NavLink
//                 key={idx}
//                 to={item.to}
//                 onClick={() => {
//                   setIsMenuOpen(false);
//                   setIsAboutPanelOpen(false);
//                 }}
//                 className="block px-5 py-4 border-b border-[#e6e6e673]
//                   text-white font-urbanist font-semibold text-sm
//                   hover:bg-white/5"
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* END MOBILE MENU */}
//     </>
//   );
// };

// export default Header;

import React, { useEffect, useRef, useState } from "react";
import ews from "../../assets/images/ews.png";
import user from "../../assets/images/user.png";
import cart from "../../assets/images/cart.png";
import { CircleUserRound, MoveLeft, UserRoundPlus } from "lucide-react";
import search from "../../assets/images/search.png";
import USA from "../../assets/images/USA.svg";
import Europe from "../../assets/images/Europe.svg.png";
import UK from "../../assets/images/UK.svg";
import switzerland from "../../assets/images/switzerland.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPopover from "../cartProducts/CartPopover";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastOpenedPanel, setLastOpenedPanel] = useState<"main" | "about">(
    "main"
  );
  // const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);


    const location = useLocation();
  const isCartPage = location.pathname === "/cartDetails" || location.pathname === "/register" ||  location.pathname === "/login" ||  location.pathname === "/resetPassword" || location.pathname === "/privacy";

  const textColor = isCartPage ? "text-[#0B0B0B]" : "text-white";
  const iconColor = isCartPage ? "brightness-0" : ""; // makes PNG icons black
  

  // Show number of unique products
  const itemCount = cartItems.length;

  const bannerRef = useRef<HTMLDivElement | null>(null);
  const bannerHeightRef = useRef<number>(0);

  // Desktop dropdown state
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  // Mobile nested About panel
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);


  // Prevent dropdown from closing while hovering
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const aboutBtnRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !aboutBtnRef.current?.contains(e.target as Node)
      ) {
        setShowAboutDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sticky header logic
  useEffect(() => {
    const measure = () => {
      bannerHeightRef.current = bannerRef.current?.offsetHeight ?? 0;
    };
    measure();
    window.addEventListener("resize", measure);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY >= bannerHeightRef.current);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const openHamburger = () => {
    setIsMenuOpen(true);

    // RE-OPEN LAST PANEL
    if (lastOpenedPanel === "about") {
      setIsAboutPanelOpen(true);
    } else {
      setIsAboutPanelOpen(false);
    }
  };

  const openDropdown = () => {
  if (closeTimeout.current) clearTimeout(closeTimeout.current);
  setShowAboutDropdown(true);
};

const closeDropdown = () => {
  closeTimeout.current = setTimeout(() => {
    setShowAboutDropdown(false);
  }, 150); // delay prevents flicker
};

  const ChevronRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <polyline points="9 18 15 12 9 6" strokeWidth="2"></polyline>
    </svg>
  );

  const BackArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0B0B0B"
      className="w-6 h-6"
    >
      <polyline points="15 6 9 12 15 18" strokeWidth="2" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"></line>
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"></line>
    </svg>
  );

  // About items (Desktop)
  const aboutItems = [
    {
      label: "About Us Bergdolt, Reif & Nett",
      to: "/about-us/bergdolt-reif-nett",
    },
    { label: "About Us Lamm-Jung", to: "/about-us/lamm-jung" },
    {
      label: "About Us KvD Strauch Sektmanufaktur",
      to: "/about-us/kvd-strauch-sektmanufaktur",
    },
    {
      label: "About Château Clos De Boüard",
      to: "/about-us/château-clos-de-boüard",
    },
    { label: "About Weingut Matthias Anton", to: "/about-us/weingut-matthias-anton" },
  ];

  // Mobile About items (including "Go To About Us")
  const aboutItemsForMobile = [
    { label: "Go To About Us", to: "/about-us" },
    {
      label: "About Us Bergdolt, Reif & Nett",
      to: "/about-us/bergdolt-reif-nett",
    },
    { label: "About Us Lamm-Jung", to: "/about-us/lamm-jung" },
    {
      label: "About Us KvD Strauch Sektmanufaktur",
      to: "/about-us/kvd-strauch-sektmanufaktur",
    },
    {
      label: "About Château Clos De Boüard",
      to: "/about-us/château-clos-de-boüard",
    },
    { label: "About Weingut Matthias Anton", to: "/about-us/weingut-matthias-anton" },
  ];

  // Text-only underline animation
  const underlineClass =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:bg-[#EED291] after:w-0 hover:after:w-full " +
    "after:transition-all after:duration-300";

  return (
    <>

          <CartPopover isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Banner */}
      <div className="w-full" ref={bannerRef}>
        <p className="text-[#0B0B0B] py-2 font-urbanist font-semibold text-base bg-[#EED291] text-center">
          Free shipping at $99+
        </p>
      </div>

      {/* HEADER */}
      <header
        className={`w-full fixed top-0 pt-2 transition-colors duration-500 z-[999] ${
          isSticky ? "bg-black py-3" : " pt-14 bg-transparent"
        }`}
      >
        <div className="w-[95%]  mx-auto flex justify-between items-center">
          {/* LOGO */}
          <div className="flex flex-col items-center gap-3 font-urbanist font-semibold">
            <img
              src={ews}
              className={`duration-500 ${
                isSticky
                  ? "   xl:w-[50px] h-[60px]"
                  : "w-[80px]   xl:w-[128px]  h-[100px] xl:h-[137px]"
              }`}
            />

            <p
              className={`text-[#C89D53] duration-500 ${
                isSticky
                  ? "text-xs"
                  : `text-xs md:text-md lg:text-lg xl:text-xl`
              }`}
            >
              Pure Terroir.{" "}
              <span className="text-[#F9E6B1]">Zero Compromise.</span>
            </p>
          </div>

          {/* ================= DESKTOP NAVIGATION (Above 1024px) ================= */}
          <div className="hidden xl:flex gap-10 items-center text-white font-urbanist font-semibold text-md relative">
            <ul className="flex items-center gap-8">
              {/* HOME */}
       <NavLink
  to="/"
  className={({ isActive }) =>
    `
      ${isActive ? "text-[#EED291]" : textColor}
      ${underlineClass}
      hover:text-[#EED291]
      ${isSticky ? "text-white" : ""}
    `
  }
>
  <li>Home</li>
</NavLink>

              {/* SHOP ALL */}
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `${isActive ? "text-[#EED291]" : textColor} ${underlineClass} hover:text-[#EED291]      ${isSticky ? "text-white" : ""}`
                }
              >
                <li>Shop All</li>
              </NavLink>

              {/* ABOUT US (hover dropdown) */}
              {/* <li
                ref={aboutBtnRef}
                className={`relative cursor-pointer ${underlineClass}`}
                    onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <span
                  className={showAboutDropdown ? "text-[#EED291]" : ""}
                  onClick={() => navigate("/about-us")}
                >
                  About Us
                </span>

                {showAboutDropdown && (
                  <div
                    ref={dropdownRef}
                    className="
                      absolute top-full left-0 mt-3 
                      w-[220px]
                      bg-[#0B0B0B]
                      border border-[gray]
                      shadow-lg z-[999999]
                
                    "
                     onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                  >
                    {aboutItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="
                          block px-4 py-3 mx-3
                          text-white font-urbanist font-semibold text-sm
                          border-b border-[gray]
                          relative group
                          hover:text-[#EED291]
                          
                        "
                        onClick={() => setShowAboutDropdown(false)}
                      >
                        {item.label}

                   
                      </Link>
                    ))}
                  </div>
                )}
              </li> */}


                            <li
                ref={aboutBtnRef}
                className="relative cursor-pointer"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#EED291]" : textColor} ${underlineClass} hover:text-[#EED291]  ${isSticky ? "text-white" : ""}`
                  }
                >
                  <span>About Us</span>
                </NavLink>

                {showAboutDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-3 w-[220px] bg-[#0B0B0B] border border-[gray] shadow-lg z-[999999]"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {aboutItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="block px-4 py-3 mx-3 text-white font-urbanist font-semibold text-sm border-b border-[gray] hover:text-[#EED291]"
                        onClick={() => setShowAboutDropdown(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* BLOG */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${isActive ? "text-[#EED291]" : textColor} ${underlineClass} hover:text-[#EED291]      ${isSticky ? "text-white" : ""}`
                }
              >
                <li>Blog</li>
              </NavLink>
            </ul>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4 text-white">
              <img src={search}   className={`w-[20px] h-[20px] ${iconColor}         ${isSticky ? "brightness-0 invert" : ""}` } alt="search" />
              <img src={user}    className={`w-[24px] h-[24px] ${iconColor}           ${isSticky ? "brightness-0 invert" : ""}`} alt="user" />
              {/* <img src={cart} className="w-[18px] h-[18px]" alt="cart" /> */}
              
       <div className="relative">
                <img src={cart}   className={`w-[24px] h-[24px] cursor-pointer ${iconColor}       ${isSticky ? "brightness-0 invert" : ""}`} alt="cart" onClick = {() => setIsCartOpen(true)} />

                {itemCount > 0 && (
                  <span
                    className="
                      absolute -top-3 -right-3
                      bg-[#EED291] text-[#0B0B0B]
                      text-[11px] font-bold
                      w-[20px] h-[20px]
                      rounded-full flex items-center justify-center
                      border border-[#0B0B0B]
                    "
                  >
                    {itemCount}
                  </span>
                )}
              </div>
            </div>

            {/* CONTACT US BUTTON */}
           <NavLink to = "/contact-us">
             <button className="text-[#0B0B0B] bg-[#EED291] cursor-pointer border border-[#EED291] rounded-full px-8 pt-3 py-2.5 hover:bg-transparent hover:text-[#EED291] transition">
              CONTACT US
            </button>
            </NavLink>
          </div>

          {/* ================= MOBILE HEADER ICONS ================= */}
          <div className="flex xl:hidden items-center gap-5 text-white">
            <img src={search}  className={`w-[20px] h-[20px] ${iconColor}       ${isSticky ? "brightness-0 invert" : ""}`} />
            <img src={user} className={`w-[24px] h-[24px] ${iconColor}       ${isSticky ? "brightness-0 invert" : ""}`}  />
                 <div className="relative">
                <img src={cart}   className={`w-[22px] h-[22px] cursor-pointer ${iconColor}       ${isSticky ? "brightness-0 invert" : ""}`}alt="cart" onClick = {() => setIsCartOpen(true)} />

                {itemCount > 0 && (
                  <span
                    className="
                      absolute -top-3 -right-3
                      bg-[#EED291] text-[#0B0B0B]
                      text-[11px] font-bold
                      w-[20px] h-[20px]
                      rounded-full flex items-center justify-center
                      border border-[#0B0B0B]
                    "
                  >
                    {itemCount}
                  </span>
                )}
              </div>

            <button onClick={openHamburger}>
              <svg className={`w-8 h-8 mt-2 ${iconColor} ${isSticky ? "brightness-0 invert" : ""}`} fill="none" stroke="currentColor">
                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
                <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ===================== MOBILE SLIDE MENU ===================== */}
      <div
        className={`fixed inset-0 z-[9999] xl:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setIsMenuOpen(false);
            setIsAboutPanelOpen(false);
          }}
        />

        {/* LEFT MAIN MENU PANEL */}
        <div
          className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px]
            bg-[#0B0B0B] text-white overflow-y-auto 
            transform transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* MENU HEADER */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold px-5 pt-3">Menu</p>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsAboutPanelOpen(false);
              }}
              className="text-white pt-3 pe-3"
            >
              <CloseIcon />
            </button>
          </div>

          {/* MENU LIST */}
          <nav className="space-y-0.5">
            {/* HOME */}
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
                flex justify-between ${isActive ? "text-[#EED291]" : ""}`
              }
            >
              Home
            </NavLink>

            {/* SHOP ALL */}
            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
                flex justify-between ${isActive ? "text-[#EED291]" : ""}`
              }
            >
              Shop All
            </NavLink>

<button
  onClick={() => {
    setIsAboutPanelOpen(true);
    setLastOpenedPanel("about");
  }}
  className={`w-full text-left px-5 pb-3 pt-2.5 
    border-b border-[#e6e6e673] flex items-center justify-between 
    ${location.pathname.includes("/about-us") ? "text-[#EED291]" : ""}
  `}
>
  <span>About Us</span>
  <ChevronRight />
</button>

         
            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-5 pb-3 pt-2.5 border-b border-[#e6e6e673]
                 flex justify-between ${isActive ? "text-[#EED291]" : ""}`
              }
            >
              Blog
            </NavLink>

  
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left px-5 pb-3 pt-2.5 
              border-b border-[#e6e6e673] flex items-center gap-2"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <CircleUserRound />
              </span>
              <NavLink to = "/login">
                      <span>Sign In</span>
              </NavLink>

            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-left px-5 pb-3 pt-2.5 
            flex items-center gap-2"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <UserRoundPlus />
            </span>
            <NavLink to = "/register">
              <span>Create an account</span>
              </NavLink>
          </button>

          {/* CURRENCY */}
          <p className="text-sm text-white font-bold px-5 pb-3 pt-2.5">
            CURRENCY
          </p>

          <div className="ps-5 px-5 pb-3 pt-2.5">
            <div className="flex items-center gap-5 flex-wrap">
              <span className="flex items-center gap-2">
                <img src={USA} className="w-4 h-4 rounded-full" /> USD
              </span>
              <span className="flex items-center gap-2">
                <img src={Europe} className="w-4 h-4 rounded-full" /> EUR
              </span>
              <span className="flex items-center gap-2">
                <img src={UK} className="w-4 h-4 rounded-full" /> GBP
              </span>
              <span className="flex items-center gap-2">
                <img src={switzerland} className="w-4 h-4 rounded-full" /> CHF
              </span>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE ABOUT PANEL ===================== */}
        <div
          className={`absolute top-0 left-0 h-full w-[330px] md:w-[370px]
            bg-[#0B0B0B] text-white overflow-y-auto
            transform transition-transform duration-300 ease-out
            ${isAboutPanelOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* GOLD TOP BAR (matches screenshot) */}
          <div className="w-full bg-[#EED291] h-[56px] flex items-center relative">
            {/* BACK ARROW */}
            <button
              onClick={() => {
                setIsAboutPanelOpen(false);
                setLastOpenedPanel("main");
              }}
              className="absolute left-4 text-black"
            >

                <MoveLeft />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="black"
              >
                <polyline points="15 18 9 12 15 6" strokeWidth="2"></polyline>
              </svg> */}
            </button>

            {/* CENTER TITLE */}
            <p className="mx-auto text-black font-urbanist font-semibold text-lg">
              About Us
            </p>
          </div>

          {/* ABOUT ITEMS — same as screenshot */}
          <div className="pb-4">
            {aboutItemsForMobile.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                    end={item.to === "/about-us"}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAboutPanelOpen(false);
                }}
                 className={({ isActive }) =>
            `block px-5 py-4 border-b border-[#e6e6e673]
             font-urbanist font-semibold text-sm
            hover:text-[#EED291]
            ${isActive ? "text-[#EED291]" : "text-white"}`
          }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* END MOBILE MENU */}
    </>
  );
};

export default Header;
