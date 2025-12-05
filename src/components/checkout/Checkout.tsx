// import React, { useMemo, useState, useRef, useEffect } from "react";
// import ews from "../../assets/images/ews.png";
// import { ChevronDown, ChevronUp, Handbag } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import product1 from "../../assets/images/product1.png";
// import payoption1 from "../../assets/images/payoption1.png";
// import payoption2 from "../../assets/images/payoption2.png";
// import payoption4 from "../../assets/images/payoption4.png";
// import payoption5 from "../../assets/images/payoption5.png";
// import { Elements } from "@stripe/react-stripe-js";

// import { loadStripe } from "@stripe/stripe-js";
// import PaymentForm from "./PaymentForm";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// const Checkout: React.FC = () => {
//   return <CheckoutInner />;
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const order = useMemo(
//     () => ({
//       items: [
//         {
//           id: 1,
//           name: "Breakaway Merlot Dealcoholized - Bergdolt, Reif & Nett",
//           qty: 1,
//           price: 29.76,
//           img: "/images/sample-bottle.png",
//         },
//       ],
//       subtotal: 29.76,
//       shipping: 0,
//       discount: 0,
//       currency: "usd",
//     }),
//     []
//   );

//   const [email, setEmail] = useState("");

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });

//   const [cardNumber, setCardNumber] = useState("");
//   const [cardExpiry, setCardExpiry] = useState("");
//   const [cardCvc, setCardCvc] = useState("");
//   const [billingName, setBillingName] = useState("");
//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
//   const cartDetails = useSelector((state) => state.cart.cartItems);
//   console.log(cartDetails);

//   const [errors, setErrors] = useState<any>({});
//   const naviagte = useNavigate();

//   const validateCheckout = () => {
//     const err: any = {};

//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     const mobileRegex = /^[0-9]{10}$/;

//     if (!email.trim()) {
//       err.email = "Email or Mobile Number is required";
//     } else {
//       const isEmail = emailRegex.test(email);
//       const isMobile = mobileRegex.test(email);

//       if (!isEmail && !isMobile) {
//         err.email = email.includes("@")
//           ? "Invalid email address"
//           : "Invalid mobile number (must be 10 digits)";
//       }
//     }

//     if (!firstName.trim()) err.firstName = "First name is required";
//     if (!lastName.trim()) err.lastName = "Last name is required";

//     if (!address.country.trim()) err.country = "Country is required";
//     if (!address.line1.trim()) err.address = "Address is required";
//     if (!address.city.trim()) err.city = "City is required";
//     if (!address.state.trim()) err.state = "State is required";

//     if (!address.postal_code.trim()) err.postal_code = "ZIP Code is required";
//     else if (!/^[0-9]{4,10}$/.test(address.postal_code))
//       err.postal_code = "ZIP Code must be 4–10 digits";

//     // PAYMENT
//     if (!cardNumber.trim()) err.cardNumber = "Card number is required";
//     else if (!/^[0-9]{12,19}$/.test(cardNumber))
//       err.cardNumber = "Card number must be 12–19 digits";

//     if (!cardExpiry.trim()) err.cardExpiry = "Expiration date is required";
//     else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry))
//       err.cardExpiry = "Invalid format (MM/YY)";

//     if (!cardCvc.trim()) err.cardCvc = "Security code is required";
//     else if (!/^[0-9]{3,4}$/.test(cardCvc))
//       err.cardCvc = "CVC must be 3 or 4 digits";

//     if (!billingName.trim()) err.billingName = "Cardholder name is required";

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const [summaryOpenTop, setSummaryOpenTop] = useState(false);
//   const topRef = useRef<HTMLDivElement | null>(null);
//   const topContentRef = useRef<HTMLDivElement | null>(null);
//   const [topContentHeight, setTopContentHeight] = useState(0);
//   useEffect(() => {
//     if (topContentRef.current) {
//       setTopContentHeight(topContentRef.current.scrollHeight);
//     }
//   }, [summaryOpenTop]);

//   const [summaryOpenBottom, setSummaryOpenBottom] = useState(false);
//   const bottomRef = useRef<HTMLDivElement | null>(null);
//   const bottomContentRef = useRef<HTMLDivElement | null>(null);
//   const [bottomContentHeight, setBottomContentHeight] = useState(0);
//   useEffect(() => {
//     if (bottomContentRef.current) {
//       setBottomContentHeight(bottomContentRef.current.scrollHeight);
//     }
//   }, [summaryOpenBottom]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!validateCheckout()) return;

//     setLoading(true);

//     try {
//       const resp = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           currency: order.currency,
//           items: order.items,
//           customer_email: email,
//           shipping: {
//             name: billingName,
//             address,
//           },
//           card: {
//             number: cardNumber,
//             exp: cardExpiry,
//             cvc: cardCvc,
//           },
//         }),
//       });

//       setSuccess(true);
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (summaryOpenBottom) {
//       const height = bottomContentRef.current?.scrollHeight || 0;
//       setBottomContentHeight(height);
//     } else {
//       setBottomContentHeight(0);
//     }
//   }, [summaryOpenBottom]);

//   useEffect(() => {
//     if (summaryOpenTop) {
//       const fullHeight = topContentRef.current?.scrollHeight || 0;
//       setTopContentHeight(fullHeight);
//     } else {
//       setTopContentHeight(0);
//     }
//   }, [summaryOpenTop]);

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
//         <div className="w-[95%] md:w-[70%] flex justify-between items-center">
//           <div className="flex flex-col items-center gap-2">
//             <img src={ews} className="w-[70px] h-[60px]" />
//             <p className="text-[#641026] text-[12px]">
//               Pure Terroir.{" "}
//               <span className="text-[#641026]">Zero Compromise.</span>
//             </p>
//           </div>

//           <NavLink to="/cartDetails">
//             <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
//           </NavLink>
//         </div>
//       </header>

//       <main className="w-full flex flex-col lg:flex-row items-start min-h-screen">
//         <div className="w-full bg-[#F8F8F8] ps-0 md:ps-25 lg:ms-0 md:block lg:hidden">
//           <div className="w-[95%] md:w-[85%] mx-auto md:mx-0">
//             <button
//               type="button"
//               onClick={() => setSummaryOpenTop((s) => !s)}
//               aria-expanded={summaryOpenTop}
//               className="w-full flex items-center justify-between font-semibold font-urbanist py-5 md:px-4 rounded bg-[#F8F8F8]"
//             >
//               <div className="flex items-center gap-2">
//                 <span className="text-md font-medium">Order summary</span>
//                 <span className="text-sm text-[#0B0B0B]">
//                   {summaryOpenTop ? <ChevronUp /> : <ChevronDown />}
//                 </span>
//               </div>

//               <span className="text-md font-semibold">
//                 ${order.subtotal.toFixed(2)}
//               </span>
//             </button>

//             <div
//               ref={topRef}
//               style={{
//                 maxHeight: topContentHeight,
//                 transition: "max-height 0.35s ease",
//                 overflow: "hidden",
//               }}
//               className={summaryOpenTop ? "mt-4" : ""}
//             >
//               <div ref={topContentRef}>
//                 <div className="bg-[#F8F8F8] font-urbanist p-0 md:px-4 py-4 rounded">
//                   <div className="flex items-center gap-4">
//                     <div className="relative">
//                       <div className="w-20 h-20 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//                         <img src={product1} className="max-h-16" />
//                       </div>
//                       <span
//                         className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-[#FFFFFF]"
//                         style={{
//                           width: 22,
//                           height: 22,
//                           borderRadius: 9999,
//                           background: "#565656",
//                           boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
//                         }}
//                       >
//                         {order.items[0].qty}
//                       </span>
//                     </div>

//                     <div className="flex-1">
//                       <p className="text-sm md:text-md font-urbanist font-semibold text-[#641026]">
//                         {order.items[0].name}
//                       </p>
//                     </div>

//                     <p className="text-md font-urbanist font-semibold">
//                       ${order.items[0].price.toFixed(2)}
//                     </p>
//                   </div>

//                   <div className="mt-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                       <input
//                         placeholder="Discount Code"
//                         className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
//                       />
//                       <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
//                         Apply
//                       </button>
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <div className="flex justify-between py-2">
//                       <span className="text-[#565656] font-semibold">
//                         Subtotal
//                       </span>
//                       <span className="font-semibold text-[#565656] text-md">
//                         ${order.subtotal.toFixed(2)}
//                       </span>
//                     </div>

//                     <div className="flex justify-between py-2">
//                       <span className="text-[#0B0B0B] font-semibold">
//                         Shipping
//                       </span>
//                       <span className="text-[#565656] font-semibold">
//                         Enter Shipping Address
//                       </span>
//                     </div>

//                     <div className="flex justify-between py-2">
//                       <span className="text-2xl font-semibold">Total</span>
//                       <span className="text-xl font-semibold">
//                         $
//                         {(
//                           order.subtotal +
//                           order.shipping -
//                           order.discount
//                         ).toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="ms-2.5 order-2 lg:order-1 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-3 md:pe-28 lg:px-10 xl:pe-30 py-10 lg:min-h-screen lg:overflow-y-auto items-stretch font-urbanist"
//         >
//           <section className="mb-8">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B]">
//                 Contact
//               </h3>
//               <span
//                 className="text-sm underline cursor-pointer"
//                 onClick={() => naviagte("/login")}
//               >
//                 Sign In
//               </span>
//             </div>

//             <input
//               placeholder="Email or Mobile Phone Number"
//               className="w-full border border-gray-200 font-medium rounded px-3 py-3 text-md placeholder-[#565656]"
//               value={email}
//               onChange={(e) => {
//                 let v = e.target.value;

//                 if (/^\d*$/.test(v)) {
//                   v = v.slice(0, 10);
//                 }

//                 setEmail(v);
//                 setErrors((p: any) => ({ ...p, email: "" }));
//               }}
//             />
//             {errors.email && (
//               <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//             )}

//             <label className="flex items-center gap-2 mt-4 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Email me with news and offers</span>
//             </label>
//           </section>

//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-4">
//               Delivery
//             </h3>

//             <select
//               className="w-full border border-gray-200 rounded-lg px-3 py-4"
//               value={address.country}
//               onChange={(e) => {
//                 setAddress((p) => ({ ...p, country: e.target.value }));
//                 setErrors((p: any) => ({ ...p, country: "" }));
//               }}
//             >
//               <option value="US">United States</option>
//               <option value="UK">United Kingdom</option>
//             </select>
//             {errors.country && (
//               <p className="text-red-600 text-sm mt-1">{errors.country}</p>
//             )}

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <div>
//                 <input
//                   placeholder="First Name"
//                   className="border border-gray-200 w-full font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//                   value={firstName}
//                   onChange={(e) => {
//                     setFirstName(e.target.value);
//                     setErrors((p: any) => ({ ...p, firstName: "" }));
//                   }}
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-600 text-sm mt-1">
//                     {errors.firstName}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   placeholder="Last Name"
//                   className="border border-gray-200 w-full font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//                   value={lastName}
//                   onChange={(e) => {
//                     setLastName(e.target.value);
//                     setErrors((p: any) => ({ ...p, lastName: "" }));
//                   }}
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <input
//                 placeholder="Address"
//                 className="w-full border font-medium border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//                 value={address.line1}
//                 onChange={(e) => {
//                   setAddress((p) => ({ ...p, line1: e.target.value }));
//                   setErrors((p: any) => ({ ...p, address: "" }));
//                 }}
//               />
//               {errors.address && (
//                 <p className="text-red-600 text-sm mt-1">{errors.address}</p>
//               )}
//             </div>

//             <input
//               placeholder="Apartment, Suite, Etc. (Optional)"
//               className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//             />

//             <div className="grid grid-cols-4 gap-3 mt-3">
//               <div className="col-span-2">
//                 <input
//                   placeholder="City"
//                   className="w-full border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//                   value={address.city}
//                   onChange={(e) => {
//                     setAddress((p) => ({ ...p, city: e.target.value }));
//                     setErrors((p: any) => ({ ...p, city: "" }));
//                   }}
//                 />
//                 {errors.city && (
//                   <p className="text-red-600 text-sm mt-1">{errors.city}</p>
//                 )}
//               </div>

//               <div>
//                 <select
//                   className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656] w-full"
//                   value={address.state}
//                   onChange={(e) => {
//                     setAddress((p) => ({ ...p, state: e.target.value }));
//                     setErrors((p: any) => ({ ...p, state: "" }));
//                   }}
//                 >
//                   <option value="">State</option>
//                   <option value="CA">CA</option>
//                 </select>
//                 {errors.state && (
//                   <p className="text-red-600 text-sm mt-1">{errors.state}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   placeholder="ZIP Code"
//                   className="w-full border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//                   value={address.postal_code}
//                   onChange={(e) => {
//                     const v = e.target.value.replace(/\D/g, "").slice(0, 4);
//                     setAddress((p) => ({
//                       ...p,
//                       postal_code: v,
//                     }));
//                     setErrors((p: any) => ({ ...p, postal_code: "" }));
//                   }}
//                 />
//                 {errors.postal_code && (
//                   <p className="text-red-600 text-sm mt-1">
//                     {errors.postal_code}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <label className="flex items-center gap-2 mt-5 text-sm">
//               <input type="checkbox" className="accent-[#EED291] h-5 w-5" />
//               <span>Save this information for next time</span>
//             </label>
//           </section>

//           <div className="rounded-lg overflow-hidden bg-[#F5F6FF]  ">
//             <div className="flex items-center justify-between border border-[#005BD1] px-4 py-2 bg-transparent">
//               <div className="text-sm font-medium">Credit Card</div>
//               <div className="flex gap-2">
//                 <img
//                   src={payoption1}
//                   className="w-[34px] md:w-[38px] h-[20px]"
//                   alt=""
//                 />
//                 <img
//                   src={payoption2}
//                   className="w-[34px] md:w-[38px] h-[20px]"
//                   alt=""
//                 />
//                 <img
//                   src={payoption4}
//                   className="w-[34px] md:w-[38px] h-[20px]"
//                   alt=""
//                 />
//                 <img
//                   src={payoption5}
//                   className="w-[34px] md:w-[42px] h-[24px]"
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="p-4 bg-[#F4F4F4] border border-gray-100 font-urbanist">
//               <div className="mb-3">
//                 <input
//                   value={cardNumber}
//                   onChange={(e) => {
//                     const value = e.target.value.replace(/\D/g, "");
//                     setCardNumber(value);
//                     setErrors((p: any) => ({ ...p, cardNumber: "" }));
//                   }}
//                   placeholder="Card Number"
//                   className="w-full border bg-[#FFFFFF] font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                 />
//                 {errors.cardNumber && (
//                   <p className="text-red-600 text-left text-sm mt-1">
//                     {errors.cardNumber}
//                   </p>
//                 )}
//               </div>

//               <div className="grid grid-cols-2 gap-3 mb-3">
//                 <div>
//                   <input
//                     value={cardExpiry}
//                     onChange={(e) => {
//                       let v = e.target.value;

//                       v = v.replace(/[^0-9/]/g, "");

//                       if (v.length === 2 && cardExpiry.length === 1) {
//                         v = v + "/";
//                       }

//                       if (v.length > 5) {
//                         v = v.slice(0, 5);
//                       }

//                       if (v.length === 3 && v[2] !== "/") {
//                         v = v.slice(0, 2) + "/" + v[2];
//                       }

//                       setCardExpiry(v);
//                       setErrors((p) => ({ ...p, cardExpiry: "" }));
//                     }}
//                     placeholder="Expiration Date (MM / YY)"
//                     className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                   />
//                   {errors.cardExpiry && (
//                     <p className="text-red-600 text-left text-sm mt-1">
//                       {errors.cardExpiry}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <input
//                     value={cardCvc}
//                     onChange={(e) => {
//                       const v = e.target.value.replace(/\D/g, "").slice(0, 4);
//                       setCardCvc(v);
//                       setErrors((p: any) => ({ ...p, cardCvc: "" }));
//                     }}
//                     placeholder="Security Code"
//                     className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                   />
//                   {errors.cardCvc && (
//                     <p className="text-red-600 text-left text-sm mt-1">
//                       {errors.cardCvc}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <label className="text-xs mb-1 block text-[#6B7280]">
//                   Name on Card
//                 </label>
//                 <input
//                   placeholder="Name on Card"
//                   className="w-full border font-urbanist font-medium border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                   value={billingName}
//                   onChange={(e) => {
//                     setBillingName(e.target.value);
//                     setErrors((p: any) => ({ ...p, billingName: "" }));
//                   }}
//                 />
//                 {errors.billingName && (
//                   <p className="text-red-600 text-left text-sm mt-1">
//                     {errors.billingName}
//                   </p>
//                 )}
//               </div>

//               <label className="flex items-center gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   checked={useShippingAsBilling}
//                   onChange={() => setUseShippingAsBilling((s) => !s)}
//                   className="accent-[#0B7AFF] h-5 w-5"
//                 />
//                 <span className="text-[#0B0B0B] font-urbanist font-medium text-md">
//                   Use shipping address as billing address
//                 </span>
//               </label>
//             </div>
//           </div>

//           {errorMessage && (
//             <div className="text-red-600 mt-3">{errorMessage}</div>
//           )}

//           <div className="w-full mt-6 md:block lg:hidden">
//             <div className="mx-auto">
//               <div
//                 className="w-full flex items-center justify-between py-3 bg-white cursor-pointer"
//                 onClick={() => setSummaryOpenBottom((s) => !s)}
//                 aria-expanded={summaryOpenBottom}
//               >
//                 <div className="flex items-center gap-2">
//                   <span className="text-xl font-semibold">Order summary</span>
//                 </div>

//                 <div className="flex items-center gap-2 text-md text-[#0B0B0B]">
//                   <span>{summaryOpenBottom ? "Hide" : "Show"}</span>
//                   {summaryOpenBottom ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </div>

//               <div
//                 ref={bottomRef}
//                 style={{
//                   maxHeight: bottomContentHeight,
//                   transition: "max-height 0.35s ease",
//                   overflow: "hidden",
//                 }}
//                 className={summaryOpenBottom ? "mt-3" : ""}
//               >
//                 <div ref={bottomContentRef}>
//                   <div className="bg-white pt-4 pb-3">
//                     <div className="flex items-center gap-4">
//                       <div className="relative">
//                         <div className="w-20 h-20 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//                           <img src={product1} className="max-h-16" />
//                         </div>
//                         <span
//                           className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-[#FFFFFF]"
//                           style={{
//                             width: 22,
//                             height: 22,
//                             borderRadius: 9999,
//                             background: "#565656",
//                             boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
//                           }}
//                         >
//                           {order.items[0].qty}
//                         </span>
//                       </div>

//                       <div className="flex-1">
//                         <p className="text-sm md:text-md font-urbanist font-semibold text-[#641026]">
//                           {order.items[0].name}
//                         </p>
//                       </div>

//                       <p className="text-md font-urbanist font-semibold">
//                         ${order.items[0].price.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" md:block lg:hidden w-full">
//             <div className=" mx-auto">
//               <div className="bg-white pt-4 ">
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                   <input
//                     placeholder="Discount Code"
//                     className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-4 py-2"
//                   />
//                   <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
//                     Apply
//                   </button>
//                 </div>

//                 <div className="mt-4">
//                   <div className="flex justify-between py-2">
//                     <span className="text-[#565656] font-semibold">
//                       Subtotal
//                     </span>
//                     <span className="font-semibold text-[#565656] text-md">
//                       ${order.subtotal.toFixed(2)}
//                     </span>
//                   </div>

//                   <div className="flex justify-between py-2">
//                     <span className="text-[#0B0B0B] font-semibold">
//                       Shipping
//                     </span>
//                     <span className="text-[#565656] font-semibold">
//                       Enter Shipping Address
//                     </span>
//                   </div>

//                   <div className="flex justify-between py-2">
//                     <span className="text-2xl font-semibold">Total</span>
//                     <span className="text-xl font-semibold">
//                       $
//                       {(
//                         order.subtotal +
//                         order.shipping -
//                         order.discount
//                       ).toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:block lg:hidden">
//             <div className=" mx-auto">
//               <button
//                 type="submit"
//                 className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-2 cursor-pointer"
//               >
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>

//               <div className="mt-6 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
//                 <a href="#" className="underline text-sm font-medium">
//                   Refund Policy
//                 </a>
//                 <a href="#" className="underline text-sm font-medium">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="underline text-sm font-medium">
//                   Terms of Service
//                 </a>
//                 <a href="#" className="underline text-sm font-medium">
//                   Contact
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="w-full hidden lg:block">
//             <div className="mt-6 mx-auto">
//               <button
//                 type="submit"
//                 className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold cursor-pointer"
//               >
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>

//               <div className="mt-6 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
//                 <a href="#" className="underline text-sm font-medium">
//                   Refund Policy
//                 </a>
//                 <a href="#" className="underline text-sm font-medium">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="underline text-sm font-medium">
//                   Terms of Service
//                 </a>
//                 <a href="#" className="underline text-sm font-medium">
//                   Contact
//                 </a>
//               </div>
//             </div>
//           </div>

//           <Elements stripe={stripePromise}>
//             <PaymentForm
//               details={{
//                 email,
//                 firstName,
//                 lastName,
//                 billingName,
//                 address,
//                 cartItems: cartDetails,
//                 currency: order.currency,
//                 totalPrice: order.subtotal,
//               }}
//               validateCheckout={validateCheckout}
//             />
//           </Elements>
//         </form>
//         {/*
//         <div className="w-full hidden border-l font-urbanist border-[#CCCCCC] lg:block order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
//           <aside className="lg:w-[70%] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="w-24 h-24 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//                   <img src={product1} className="max-h-20" />
//                 </div>

//                 <span
//                   className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-[#FFFFFF]"
//                   style={{
//                     width: 22,
//                     height: 22,
//                     borderRadius: 9999,
//                     background: "#565656",
//                     boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
//                   }}
//                 >
//                   {order.items[0].qty}
//                 </span>
//               </div>

//               <div className="flex justify-between items-start gap-9 md:gap-7 lg:gap-5 xl:gap-8 w-full">
//                 <div className="flex-1">
//                   <p className="text-sm md:text-md xl:text-md font-semibold text-[#641026]">
//                     {order.items[0].name}
//                   </p>
//                 </div>

//                 <p className="text-md font-semibold">
//                   ${order.items[0].price.toFixed(2)}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-5">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                 <input
//                   placeholder="Discount Code"
//                   className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
//                 />
//                 <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
//                   Apply
//                 </button>
//               </div>
//             </div>

//             <div className="mt-6">
//               <div className="flex justify-between py-2">
//                 <span className="text-[#565656] font-semibold">Subtotal</span>
//                 <span className="font-semibold text-[#565656] text-md">
//                   ${order.subtotal.toFixed(2)}
//                 </span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//                 <span className="text-[#565656] font-semibold">
//                   Enter Shipping Address
//                 </span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-2xl font-semibold">Total</span>
//                 <span className="text-2xl font-semibold">
//                   $
//                   {(order.subtotal + order.shipping - order.discount).toFixed(
//                     2
//                   )}
//                 </span>
//               </div>
//             </div>
//           </aside>
//         </div> */}

//         <div className="w-full hidden border-l font-urbanist border-[#CCCCCC] lg:block order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
//           <aside
//             className="lg:w-[70%] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative"
//             style={{ maxHeight: "100vh", overflowY: "auto" }}
//           >
//             {/* CART ITEMS LOOP */}
//             {cartDetails.map((product, index) => (
//               <div key={index} className="flex items-center gap-4 mb-6">
//                 <div className="relative">
//                   <div className="w-24 h-24 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//                     <img
//                       src={`${import.meta.env.VITE_IMG_URL}/${
//                         product.productImg
//                       }`}
//                       className="max-h-20 object-contain"
//                     />
//                   </div>

//                   {/* QUANTITY BADGE */}
//                   <span
//                     className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-white"
//                     style={{
//                       width: 22,
//                       height: 22,
//                       borderRadius: 9999,
//                       background: "#565656",
//                     }}
//                   >
//                     {product.quantity}
//                   </span>
//                 </div>

//                 <div className="flex justify-between items-start gap-4 w-full">
//                   <p className="text-sm font-semibold text-[#641026] flex-1">
//                     {product.productName}
//                   </p>
//                   <p className="text-md font-semibold">
//                     ${(product.price * product.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* DISCOUNT + TOTAL */}
//             <div className="mt-5">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                 <input
//                   placeholder="Discount Code"
//                   className="flex-1 border border-[#CCCCCC] bg-white placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 w-full"
//                 />
//                 <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
//                   Apply
//                 </button>
//               </div>
//             </div>

//             <div className="mt-6">
//               <div className="flex justify-between py-2">
//                 <span className="text-[#565656] font-semibold">Subtotal</span>
//                 <span className="font-semibold text-[#565656] text-md">
//                   $
//                   {cartDetails
//                     .reduce((a, b) => a + b.price * b.qty, 0)
//                     .toFixed(2)}
//                 </span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//                 <span className="text-[#565656] font-semibold">
//                   Enter Shipping Address
//                 </span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-2xl font-semibold">Total</span>
//                 <span className="text-2xl font-semibold">
//                   $
//                   {cartDetails
//                     .reduce((a, b) => a + b.price * b.qty, 0)
//                     .toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//           <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//             <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//             <p className="mb-4">
//               Thank you! Your payment was processed successfully.
//             </p>

//             <button
//               onClick={() => {
//                 setSuccess(false);
//                 window.location.href = "/";
//               }}
//               className="bg-[#0B7AFF] text-white px-6 py-2 rounded"
//             >
//               Continue shopping
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const cardStyle: any = {
//   style: {
//     base: {
//       fontSize: "14px",
//       color: "#0B0B0B",
//       fontFamily: "inherit",
//       "::placeholder": { color: "#9CA3AF" },
//     },
//     invalid: { color: "#9e2146" },
//   },
// };

import React, { useMemo, useState, useRef, useEffect } from "react";
import ews from "../../assets/images/ews.png";
import { ChevronDown, ChevronUp, Handbag } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import product1 from "../../assets/images/product1.png";
import payoption1 from "../../assets/images/payoption1.png";
import payoption2 from "../../assets/images/payoption2.png";
import payoption4 from "../../assets/images/payoption4.png";
import payoption5 from "../../assets/images/payoption5.png";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import {
  createGuestCartId,
  getGuestCartId,
  getUserCartId,
} from "../../utils/cartIdManager";
import { clearCartItems } from "../../redux/cart/cartSlice";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutInner />
    </Elements>
  );
};

export default Checkout;

const CheckoutInner: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const getActiveCartId = () => {
    const userCartId = getUserCartId();
    if (userCartId) return userCartId;

    let guestId = getGuestCartId();
    if (!guestId) guestId = createGuestCartId();
    return guestId;
  };

  const activeCartId = getActiveCartId();

  const order = useMemo(
    () => ({
      items: [
        {
          id: 1,
          name: "Breakaway Merlot Dealcoholized - Bergdolt, Reif & Nett",
          qty: 1,
          price: 29.76,
          img: "/images/sample-bottle.png",
        },
      ],
      subtotal: 29.76,
      shipping: 0,
      discount: 0,
      currency: "usd",
    }),
    []
  );

  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [address, setAddress] = useState({
    line1: "",
    city: "",
    state: "",
    postal_code: "",
    country: "US",
  });

  const [billingName, setBillingName] = useState("");
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.cartItems);
  console.log(cartDetails);

  const [errors, setErrors] = useState<any>({});
  const naviagte = useNavigate();

  const validateCheckout = () => {
    const err: any = {};

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const mobileRegex = /^[0-9]{10}$/;

    if (!email.trim()) {
      err.email = "Email or Mobile Number is required";
    } else {
      const isEmail = emailRegex.test(email);
      const isMobile = mobileRegex.test(email);

      if (!isEmail && !isMobile) {
        err.email = email.includes("@")
          ? "Invalid email address"
          : "Invalid mobile number (must be 10 digits)";
      }
    }

    if (!firstName.trim()) err.firstName = "First name is required";
    if (!lastName.trim()) err.lastName = "Last name is required";

    if (!address.country.trim()) err.country = "Country is required";
    if (!address.line1.trim()) err.address = "Address is required";
    if (!address.city.trim()) err.city = "City is required";
    if (!address.state.trim()) err.state = "State is required";

    if (!address.postal_code.trim()) err.postal_code = "ZIP Code is required";
    else if (!/^[0-9]{4,10}$/.test(address.postal_code))
      err.postal_code = "ZIP Code must be 4–10 digits";

    if (!billingName.trim()) err.billingName = "Cardholder name is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [summaryOpenTop, setSummaryOpenTop] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);
  const topContentRef = useRef<HTMLDivElement | null>(null);
  const [topContentHeight, setTopContentHeight] = useState(0);
  useEffect(() => {
    if (topContentRef.current) {
      setTopContentHeight(topContentRef.current.scrollHeight);
    }
  }, [summaryOpenTop]);

  const [summaryOpenBottom, setSummaryOpenBottom] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const bottomContentRef = useRef<HTMLDivElement | null>(null);
  const [bottomContentHeight, setBottomContentHeight] = useState(0);
  useEffect(() => {
    if (bottomContentRef.current) {
      setBottomContentHeight(bottomContentRef.current.scrollHeight);
    }
  }, [summaryOpenBottom]);

  const handlePayment = async (e: any) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateCheckout()) return;
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/buyProducts/createPaymentIntent`,
        {
          cartId: activeCartId,
          cartItems: cartDetails,
          contactInfo: { emailOrPhone: email },
          deliveryAddress: {
            firstName,
            lastName,
            addressLine1: address.line1,
            city: address.city,
            state: address.state,
            postalCode: address.postal_code,
            country: address.country,
          },
          billingAddress: {
            nameOnCard: billingName,
            useShippingAsBilling,
            address: {
              line1: address.line1,
              city: address.city,
              state: address.state,
              postalCode: address.postal_code,
              country: address.country,
            },
          },
          pricing: { totalAmount: order.subtotal },
          currency: order.currency,
        }
      );

      const clientSecret = res.data.clientSecret;

      const cardElement = elements.getElement(CardNumberElement);

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement!,
            billing_details: {
              name: billingName,
              email,
              address: {
                line1: address.line1,
                city: address.city,
                state: address.state,
                postal_code: address.postal_code,
                country: address.country,
              },
            },
          },
        }
      );

      if (error) {
        navigate("/paymentFailed");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        navigate("/paymentSuccess");
        dispatch(clearCartItems());
      }
    } catch (err: any) {
      setErrorMessage("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (summaryOpenBottom) {
      const height = bottomContentRef.current?.scrollHeight || 0;
      setBottomContentHeight(height);
    } else {
      setBottomContentHeight(0);
    }
  }, [summaryOpenBottom]);

  useEffect(() => {
    if (summaryOpenTop) {
      const fullHeight = topContentRef.current?.scrollHeight || 0;
      setTopContentHeight(fullHeight);
    } else {
      setTopContentHeight(0);
    }
  }, [summaryOpenTop]);

  const subTotal = cartDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subTotal + order.shipping - order.discount;

  const elementStyle = {
    style: {
      base: {
        fontSize: "14px",
        color: "#0B0B0B",
        fontFamily: "inherit",
        "::placeholder": {
          color: "#565656",
        },
      },
      invalid: {
        color: "#e53935",
      },
    },
    placeholder: "Card Number",
  };

  return (
    <div className="min-h-screen bg-white text-[#0B0B0B]">
      <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
        <div className="w-[95%] md:w-[70%] flex justify-between items-center">
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={ews} className="w-[70px] h-[60px]" />
            <p className="text-[#641026] text-[12px]">
              Pure Terroir.{" "}
              <span className="text-[#641026]">Zero Compromise.</span>
            </p>
          </div>

          <NavLink to="/cartDetails">
            <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
          </NavLink>
        </div>
      </header>

      <main className="w-full flex flex-col lg:flex-row items-start min-h-screen">
        <div className="w-full bg-[#F8F8F8] ps-0 md:ps-25 lg:ms-0 md:block lg:hidden">
          <div className="w-[95%] md:w-[85%] mx-auto md:mx-0">
            <button
              type="button"
              onClick={() => setSummaryOpenTop((s) => !s)}
              aria-expanded={summaryOpenTop}
              className="w-full flex items-center justify-between font-semibold font-urbanist py-5 md:px-4 rounded bg-[#F8F8F8]"
            >
              <div className="flex items-center gap-2">
                <span className="text-md font-medium">Order summary</span>
                <span className="text-sm text-[#0B0B0B]">
                  {summaryOpenTop ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>

              <span className="text-md font-semibold">
                ${subTotal.toFixed(2)}
              </span>
            </button>

            <div
              ref={topRef}
              style={{
                maxHeight: topContentHeight,
                transition: "max-height 0.35s ease",
                overflow: "hidden",
              }}
              className={summaryOpenTop ? "mt-4" : ""}
            >
              <div ref={topContentRef}>
                <div className="bg-[#F8F8F8] font-urbanist p-0 md:px-4 py-4 rounded">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
                        <img src={product1} className="max-h-16" />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-[#FFFFFF]"
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: 9999,
                          background: "#565656",
                          boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
                        }}
                      >
                        {order.items[0].qty}
                      </span>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm md:text-md font-urbanist font-semibold text-[#641026]">
                        {order.items[0].name}
                      </p>
                    </div>

                    <p className="text-md font-urbanist font-semibold">
                      ${order.items[0].price.toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <input
                        placeholder="Discount Code"
                        className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
                      />
                      <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between py-2">
                      <span className="text-[#565656] font-semibold">
                        Subtotal
                      </span>
                      <span className="font-semibold text-[#565656] text-md">
                        ${subTotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between py-2">
                      <span className="text-[#0B0B0B] font-semibold">
                        Shipping
                      </span>
                      <span className="text-[#565656] font-semibold">
                        Enter Shipping Address
                      </span>
                    </div>

                    <div className="flex justify-between py-2">
                      <span className="text-2xl font-semibold">Total</span>
                      <span className="text-xl font-semibold">
                        $
                        {(
                          order.subtotal +
                          order.shipping -
                          order.discount
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handlePayment}
          className="ms-2.5 order-2 lg:order-1 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-3 md:pe-28 lg:px-10 xl:pe-30 py-10 lg:min-h-screen lg:overflow-y-auto items-stretch font-urbanist"
        >
          <section className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B]">
                Contact
              </h3>
              <span
                className="text-sm underline cursor-pointer"
                onClick={() => naviagte("/login")}
              >
                Sign In
              </span>
            </div>

            <input
              placeholder="Email or Mobile Phone Number"
              className="w-full border border-gray-200 font-medium rounded px-3 py-3 text-md placeholder-[#565656]"
              value={email}
              onChange={(e) => {
                let v = e.target.value;

                if (/^\d*$/.test(v)) {
                  v = v.slice(0, 10);
                }

                setEmail(v);
                setErrors((p: any) => ({ ...p, email: "" }));
              }}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}

            <label className="flex items-center gap-2 mt-4 text-sm">
              <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
              <span>Email me with news and offers</span>
            </label>
          </section>

          <section className="mb-8">
            <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-4">
              Delivery
            </h3>

            <select
              className="w-full border border-gray-200 rounded-lg px-3 py-4"
              value={address.country}
              onChange={(e) => {
                setAddress((p) => ({ ...p, country: e.target.value }));
                setErrors((p: any) => ({ ...p, country: "" }));
              }}
            >
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
            {errors.country && (
              <p className="text-red-600 text-sm mt-1">{errors.country}</p>
            )}

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <input
                  placeholder="First Name"
                  className="border border-gray-200 w-full font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrors((p: any) => ({ ...p, firstName: "" }));
                  }}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <input
                  placeholder="Last Name"
                  className="border border-gray-200 w-full font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrors((p: any) => ({ ...p, lastName: "" }));
                  }}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <input
                placeholder="Address"
                className="w-full border font-medium border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
                value={address.line1}
                onChange={(e) => {
                  setAddress((p) => ({ ...p, line1: e.target.value }));
                  setErrors((p: any) => ({ ...p, address: "" }));
                }}
              />
              {errors.address && (
                <p className="text-red-600 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            <input
              placeholder="Apartment, Suite, Etc. (Optional)"
              className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
            />

            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className="col-span-2">
                <input
                  placeholder="City"
                  className="w-full border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
                  value={address.city}
                  onChange={(e) => {
                    setAddress((p) => ({ ...p, city: e.target.value }));
                    setErrors((p: any) => ({ ...p, city: "" }));
                  }}
                />
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <select
                  className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656] w-full"
                  value={address.state}
                  onChange={(e) => {
                    setAddress((p) => ({ ...p, state: e.target.value }));
                    setErrors((p: any) => ({ ...p, state: "" }));
                  }}
                >
                  <option value="">State</option>
                  <option value="CA">CA</option>
                </select>
                {errors.state && (
                  <p className="text-red-600 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="ZIP Code"
                  className="w-full border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
                  value={address.postal_code}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                    setAddress((p) => ({
                      ...p,
                      postal_code: v,
                    }));
                    setErrors((p: any) => ({ ...p, postal_code: "" }));
                  }}
                />
                {errors.postal_code && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.postal_code}
                  </p>
                )}
              </div>
            </div>

            <label className="flex items-center gap-2 mt-5 text-sm">
              <input type="checkbox" className="accent-[#EED291] h-5 w-5" />
              <span>Save this information for next time</span>
            </label>
          </section>

          <div className="rounded-lg overflow-hidden bg-[#F5F6FF]  ">
            <div className="flex items-center justify-between border border-[#005BD1] px-4 py-2 bg-transparent">
              <div className="text-sm font-medium">Credit Card</div>
              <div className="flex gap-2">
                <img
                  src={payoption1}
                  className="w-[34px] md:w-[38px] h-[20px]"
                  alt=""
                />
                <img
                  src={payoption2}
                  className="w-[34px] md:w-[38px] h-[20px]"
                  alt=""
                />
                <img
                  src={payoption4}
                  className="w-[34px] md:w-[38px] h-[20px]"
                  alt=""
                />
                <img
                  src={payoption5}
                  className="w-[34px] md:w-[42px] h-[24px]"
                  alt=""
                />
              </div>
            </div>

            <div className="p-4 bg-[#F4F4F4] border border-gray-100 font-urbanist">
              {/* <div className="mb-3">
                  <input
                    value={cardNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setCardNumber(value);
                      setErrors((p: any) => ({ ...p, cardNumber: "" }));
                    }}
                    placeholder="Card Number"
                    className="w-full border bg-[#FFFFFF] font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-600 text-left text-sm mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div> */}

              <div className="mb-3 w-full border bg-white border-[#CCCCCC] rounded-lg px-3 py-2">
                <CardNumberElement
                  options={{
                    ...elementStyle,
                    placeholder: "Card Number",
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* <div>
                    <input
                      value={cardExpiry}
                      onChange={(e) => {
                        let v = e.target.value;

                        v = v.replace(/[^0-9/]/g, "");

                        if (v.length === 2 && cardExpiry.length === 1) {
                          v = v + "/";
                        }

                        if (v.length > 5) {
                          v = v.slice(0, 5);
                        }

                        if (v.length === 3 && v[2] !== "/") {
                          v = v.slice(0, 2) + "/" + v[2];
                        }

                        setCardExpiry(v);
                        setErrors((p) => ({ ...p, cardExpiry: "" }));
                      }}
                      placeholder="Expiration Date (MM / YY)"
                      className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                    />
                    {errors.cardExpiry && (
                      <p className="text-red-600 text-left text-sm mt-1">
                        {errors.cardExpiry}
                      </p>
                    )}
                  </div> */}

                <div className="w-full border bg-white border-[#CCCCCC] rounded-lg px-3 py-2">
                  <CardExpiryElement
                    options={{
                      ...elementStyle,
                      placeholder: "MM / YY",
                    }}
                  />
                </div>

                {/* <div>
                    <input
                      value={cardCvc}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                        setCardCvc(v);
                        setErrors((p: any) => ({ ...p, cardCvc: "" }));
                      }}
                      placeholder="Security Code"
                      className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                    />
                    {errors.cardCvc && (
                      <p className="text-red-600 text-left text-sm mt-1">
                        {errors.cardCvc}
                      </p>
                    )}
                  </div> */}

                <div className="w-full border bg-white border-[#CCCCCC] rounded-lg px-3 py-2">
                  <CardCvcElement
                    options={{
                      ...elementStyle,
                      placeholder: "CVC",
                    }}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-xs mb-1 block text-[#6B7280]">
                  Name on Card
                </label>
                <input
                  placeholder="Name on Card"
                  className="w-full border font-urbanist font-medium border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                  value={billingName}
                  onChange={(e) => {
                    setBillingName(e.target.value);
                    setErrors((p: any) => ({ ...p, billingName: "" }));
                  }}
                />
                {errors.billingName && (
                  <p className="text-red-600 text-left text-sm mt-1">
                    {errors.billingName}
                  </p>
                )}
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={useShippingAsBilling}
                  onChange={() => setUseShippingAsBilling((s) => !s)}
                  className="accent-[#0B7AFF] h-5 w-5"
                />
                <span className="text-[#0B0B0B] font-urbanist font-medium text-md">
                  Use shipping address as billing address
                </span>
              </label>
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-600 mt-3">{errorMessage}</div>
          )}

          <div className="w-full mt-6 md:block lg:hidden">
            <div className="mx-auto">
              <div
                className="w-full flex items-center justify-between py-3 bg-white cursor-pointer"
                onClick={() => setSummaryOpenBottom((s) => !s)}
                aria-expanded={summaryOpenBottom}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold">Order summary</span>
                </div>

                <div className="flex items-center gap-2 text-md text-[#0B0B0B]">
                  <span>{summaryOpenBottom ? "Hide" : "Show"}</span>
                  {summaryOpenBottom ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </div>

              <div
                ref={bottomRef}
                style={{
                  maxHeight: bottomContentHeight,
                  transition: "max-height 0.35s ease",
                  overflow: "hidden",
                }}
                className={summaryOpenBottom ? "mt-3" : ""}
              >
                <div ref={bottomContentRef}>
                  <div className="bg-white pt-4 pb-3">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
                          <img src={product1} className="max-h-16" />
                        </div>
                        <span
                          className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-[#FFFFFF]"
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 9999,
                            background: "#565656",
                            boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
                          }}
                        >
                          {order.items[0].qty}
                        </span>
                      </div>

                      <div className="flex-1">
                        <p className="text-sm md:text-md font-urbanist font-semibold text-[#641026]">
                          {order.items[0].name}
                        </p>
                      </div>

                      <p className="text-md font-urbanist font-semibold">
                        ${order.items[0].price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:block lg:hidden w-full">
            <div className=" mx-auto">
              <div className="bg-white pt-4 ">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <input
                    placeholder="Discount Code"
                    className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-4 py-2"
                  />
                  <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
                    Apply
                  </button>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between py-2">
                    <span className="text-[#565656] font-semibold">
                      Subtotal
                    </span>
                    <span className="font-semibold text-[#565656] text-md">
                      ${subTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-[#0B0B0B] font-semibold">
                      Shipping
                    </span>
                    <span className="text-[#565656] font-semibold">
                      Enter Shipping Address
                    </span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-2xl font-semibold">Total</span>
                    <span className="text-xl font-semibold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:block lg:hidden">
            <div className=" mx-auto">
              <button
                type="submit"
                className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-2 cursor-pointer"
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>

              <div className="mt-6 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
                <a href="#" className="underline text-sm font-medium">
                  Refund Policy
                </a>
                <a href="#" className="underline text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="underline text-sm font-medium">
                  Terms of Service
                </a>
                <a href="#" className="underline text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="w-full hidden lg:block">
            <div className="mt-6 mx-auto">
              <button
                type="submit"
                className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold cursor-pointer"
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>

              <div className="mt-6 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
                <a href="#" className="underline text-sm font-medium">
                  Refund Policy
                </a>
                <a href="#" className="underline text-sm font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="underline text-sm font-medium">
                  Terms of Service
                </a>
                <a href="#" className="underline text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </form>

        <div className="w-full hidden border-l font-urbanist border-[#CCCCCC] lg:block order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
          <aside
            className="lg:w-[70%] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative"
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            {/* CART ITEMS LOOP */}
            {cartDetails.map((product, index) => (
              <div key={index} className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/${
                        product.productImg
                      }`}
                      className="max-h-20 object-contain"
                    />
                  </div>

                  {/* QUANTITY BADGE */}
                  <span
                    className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-white"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 9999,
                      background: "#565656",
                    }}
                  >
                    {product.quantity}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4 w-full">
                  <p className="text-sm font-semibold text-[#641026] flex-1">
                    {product.productName}
                  </p>
                  <p className="text-md font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            {/* DISCOUNT + TOTAL */}
            <div className="mt-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  placeholder="Discount Code"
                  className="flex-1 border border-[#CCCCCC] bg-white placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 w-full"
                />
                <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between py-2">
                <span className="text-[#565656] font-semibold">Subtotal</span>
                <span className="font-semibold text-[#565656] text-md">
                  ${subTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-[#0B0B0B] font-semibold">Shipping</span>
                <span className="text-[#565656] font-semibold">
                  Enter Shipping Address
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-2xl font-semibold">Total</span>
                <span className="text-2xl font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
            <p className="mb-4">
              Thank you! Your payment was processed successfully.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                window.location.href = "/";
              }}
              className="bg-[#0B7AFF] text-white px-6 py-2 rounded"
            >
              Continue shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
