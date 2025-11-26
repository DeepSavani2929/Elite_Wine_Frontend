// // src/components/checkout/Checkout.tsx
// import React, { useMemo, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// /**
//  * Card form UI matching your Figma screenshot.
//  * Outer component wraps Stripe Elements provider.
//  */
// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// /* ----------------------- Inner component ----------------------- */

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   // Order mock — ideally this comes from your Redux/cart state
//   const order = useMemo(
//     () => ({
//       items: [
//         {
//           id: 1,
//           name: "Breakaway Merlot Dealcoholized - Bergdolt, Reif & Nett",
//           qty: 1,
//           price: 29.76,
//           img: "/images/sample-bottle.png", // replace with real asset
//         },
//       ],
//       subtotal: 29.76,
//       shipping: 0,
//       discount: 0,
//       currency: "usd",
//     }),
//     []
//   );

//   // form state
//   const [email, setEmail] = useState("");
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });
//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1) Create payment intent on backend
//       const resp = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           currency: order.currency,
//           items: order.items,
//           // send customer & shipping info (optional)
//           customer_email: email,
//           shipping: {
//             name: billingName,
//             address,
//           },
//         }),
//       });

//       const data = await resp.json();

//       if (!resp.ok) {
//         throw new Error(data?.message || "Failed to create payment intent");
//       }

//       const clientSecret = data.clientSecret as string;

//       // 2) Confirm card payment
//       const cardElement = elements.getElement(CardElement);
//       if (!cardElement) {
//         throw new Error("Card element not found");
//       }

//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if (confirmResult.error) {
//         // Payment failed
//         setErrorMessage(confirmResult.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       // Payment succeeded (client side). Server will also receive webhook 'payment_intent.succeeded'
//       if (confirmResult.paymentIntent && confirmResult.paymentIntent.status === "succeeded") {
//         setSuccess(true);
//       } else {
//         setErrorMessage("Payment processing. Please check your email for confirmation.");
//       }
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       <div className="  px-6 py-8">
//         {/* header (small logo gap like figma) */}
//         <header >
//                 <div className="w-[70%] mx-auto border-b border-[#CCCCCC]  mx-auto flex justify-between items-center">
//                    {/* LOGO */}
//                    <div className="flex flex-col items-center gap-3 font-urbanist font-semibold">
//                      <img
//                        src={ews}
//                        className="not-[]:duration-500 w-[80px]   xl:w-[128px]  h-[100px] xl:h-[137px]"

//                      />

//                      <p
//                        className="text-[#C89D53] duration-500 text-xs"
//                      >
//                        Pure Terroir.{" "}
//                        <span className="text-[#F9E6B1]">Zero Compromise.</span>
//                      </p>
//                    </div>
//                    </div>
//         </header>

//         <main className="w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left form: spans 2 cols on large */}
//           <div className="lg:col-span-2">
//             <div className="bg-white pr-6">
//               {/* Contact card */}
//               <section className="mb-6">
//                 <h3 className="font-urbanist font-semibold text-lg mb-3">Contact</h3>
//                 <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
//                   <div className="w-[60%]">
//                     <input
//                       placeholder="Email or Mobile Phone Number"
//                       className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="text-xs">Sign In</div>
//                 </div>

//                 <label className="flex items-center gap-2 mt-2 text-sm">
//                   <input
//                     type="checkbox"
//                     className="accent-[#E5C97A]"
//                     onChange={() => {}}
//                   />
//                   <span className="text-sm text-gray-600">Email me with news and offers</span>
//                 </label>
//               </section>

//               {/* Delivery */}
//               <section className="mb-6">
//                 <h3 className="font-urbanist font-semibold text-lg mb-3">Delivery</h3>

//                 <div className="space-y-3">
//                   <select className="w-60 border border-gray-200 rounded px-3 py-2 text-sm">
//                     <option>United States</option>
//                     <option>United Kingdom</option>
//                   </select>

//                   <div className="grid grid-cols-2 gap-3">
//                     <input
//                       placeholder="First Name"
//                       className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                     />
//                     <input
//                       placeholder="Last Name"
//                       className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                     />
//                   </div>

//                   <input
//                     placeholder="Address"
//                     className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
//                   />
//                   <input
//                     placeholder="Apartment, Suite, Etc. (Optional)"
//                     className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                   />

//                   <div className="grid grid-cols-4 gap-3">
//                     <input
//                       placeholder="City"
//                       className="col-span-2 border border-gray-200 rounded px-3 py-2 text-sm"
//                       onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))}
//                     />
//                     <select
//                       className="border border-gray-200 rounded px-3 py-2 text-sm"
//                       onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}
//                     >
//                       <option>State</option>
//                       <option>CA</option>
//                     </select>
//                     <input
//                       placeholder="ZIP Code"
//                       className="border border-gray-200 rounded px-3 py-2 text-sm"
//                       onChange={(e) => setAddress((p) => ({ ...p, postal_code: e.target.value }))}
//                     />
//                   </div>

//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" className="accent-[#E5C97A]" />
//                     <span className="text-sm text-gray-600">Save this information for next time</span>
//                   </label>

//                   <div className="mt-2 text-sm text-gray-500 bg-gray-50 px-3 py-3 rounded">Enter your shipping address to view available shipping methods.</div>
//                 </div>
//               </section>

//               {/* Payment */}
//               <section className="mt-6">
//                 <h3 className="font-urbanist font-semibold text-lg mb-3">Payment</h3>
//                 <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

//                 <form onSubmit={handleSubmit}>
//                   <div className="border border-gray-200 rounded p-4">
//                     {/* Tab header */}
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="text-sm font-medium">Credit Card</div>
//                       <div className="text-sm">
//                         <img src="/images/payment-icons.png" alt="cards" className="h-5 inline-block" />
//                       </div>
//                     </div>

//                     {/* Card UI box */}
//                     <div className="bg-white border border-gray-100 rounded p-4">
//                       <div className="mb-3">
//                         <label className="text-xs block mb-1">Card details</label>

//                         <div className="border rounded px-3 py-3">
//                           {/* CardElement */}
//                           <CardElement options={cardStyle} />
//                         </div>
//                       </div>

//                       {/* Name on card */}
//                       <div className="grid grid-cols-3 gap-3 mb-3">
//                         <input
//                           placeholder="Name on Card"
//                           className="col-span-3 border border-gray-200 rounded px-3 py-2 text-sm"
//                           value={billingName}
//                           onChange={(e) => setBillingName(e.target.value)}
//                         />
//                       </div>

//                       <label className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           checked={useShippingAsBilling}
//                           onChange={() => setUseShippingAsBilling((s) => !s)}
//                           className="accent-[#0B7AFF]"
//                         />
//                         <span className="text-sm text-gray-600">Use shipping address as billing address</span>
//                       </label>
//                     </div>
//                   </div>

//                   {/* error */}
//                   {errorMessage && <div className="text-red-600 mt-3 text-sm">{errorMessage}</div>}

//                   {/* pay now button */}
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       disabled={!stripe || loading}
//                       className="w-full bg-[#0B7AFF] text-white py-3 rounded font-semibold"
//                     >
//                       {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                   </div>
//                 </form>

//                 {/* small links */}
//                 <div className="mt-3 text-xs text-blue-600 flex gap-3">
//                   <a href="#">Refund Policy</a>
//                   <a href="#">Privacy Policy</a>
//                   <a href="#">Terms of Service</a>
//                   <a href="#">Contact</a>
//                 </div>
//               </section>
//             </div>
//           </div>

//           {/* Right summary */}
//           <aside className="lg:col-span-1 bg-gray-50 border-l border-gray-100 px-6 py-6">
//             <div className="space-y-4">
//               {/* single line product card */}
//               <div className="flex items-start gap-4">
//                 <div className="w-16 h-16 bg-white border rounded flex items-center justify-center">
//                   <img src={order.items[0].img} alt="product" className="max-h-12" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="text-sm font-semibold text-[#641026]">{order.items[0].name}</div>
//                   <div className="text-xs text-gray-500 mt-1">Bergdolt, Reif & Nett</div>
//                 </div>
//                 <div className="text-sm font-semibold">${order.items[0].price.toFixed(2)}</div>
//               </div>

//               {/* discount code */}
//               <div className="flex gap-3 items-center">
//                 <input placeholder="Discount Code" className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm" />
//                 <button className="bg-[#EED291] px-4 py-2 rounded font-semibold">Apply</button>
//               </div>

//               {/* price breakdown */}
//               <div className="text-sm">
//                 <div className="flex justify-between py-2">
//                   <div className="text-gray-600">Subtotal</div>
//                   <div className="font-medium">${order.subtotal.toFixed(2)}</div>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <div className="text-gray-600">Shipping</div>
//                   <div className="text-gray-500">Enter Shipping Address</div>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <div className="text-lg font-semibold">Total</div>
//                   <div className="text-lg font-bold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </main>

//         {/* success overlay */}
//         {success && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//             <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//               <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//               <p className="mb-4">Thank you! Your payment was processed successfully.</p>
//               <button
//                 onClick={() => {
//                   setSuccess(false);
//                   // redirect to order page or clear cart
//                   window.location.href = "/";
//                 }}
//                 className="bg-[#0B7AFF] text-white px-6 py-2 rounded"
//               >
//                 Continue shopping
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// /* ----------------------- CardElement style ----------------------- */

// const cardStyle: any = {
//   style: {
//     base: {
//       fontSize: "14px",
//       color: "#0B0B0B",
//       fontFamily: "inherit",
//       "::placeholder": {
//         color: "#9CA3AF",
//       },
//     },
//     invalid: {
//       color: "#9e2146",
//     },
//   },
// };

// Updated Checkout.tsx with requested styling adjustments.
// Only requested changes applied: left background (#CCCCCC), Contact + Sign In in one line, Shipping Method title.

// import React, { useMemo, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });
//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok) throw new Error(data?.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;

//       const cardElement = elements.getElement(CardElement);
//       if (!cardElement) throw new Error("Card element not found");

//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if (confirmResult.error) {
//         setErrorMessage(confirmResult.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if (confirmResult.paymentIntent?.status === "succeeded") setSuccess(true);
//       else setErrorMessage("Payment processing. Please check your email for confirmation.");
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       <div className="px-6 py-8">
//         {/* Header */}
//         <header>
//           <div className="w-[70%] mx-auto border-b border-[#CCCCCC] flex justify-between items-center">
//             <div className="flex flex-col items-center gap-3 font-urbanist font-semibold">
//               <img
//                 src={ews}
//                 className="w-[80px] xl:w-[128px] h-[100px] xl:h-[137px]"
//               />
//               <p className="text-[#C89D53] text-xs">
//                 Pure Terroir. <span className="text-[#F9E6B1]">Zero Compromise.</span>
//               </p>
//             </div>
//           </div>
//         </header>

//         <main className="w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* LEFT */}
//           <div className="lg:col-span-2  p-6 rounded">
//             {/* Contact */}
//             <section className="mb-6">
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="font-urbanist font-semibold text-lg">Contact</h3>
//                 <span className="text-xs text-gray-600">Sign In</span>
//               </div>

//               <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
//                 <div className="w-[60%]">
//                   <input
//                     placeholder="Email or Mobile Phone Number"
//                     className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <label className="flex items-center gap-2 mt-2 text-sm">
//                 <input type="checkbox" className="accent-[#E5C97A]" />
//                 <span className="text-gray-600">Email me with news and offers</span>
//               </label>
//             </section>

//             {/* Delivery */}
//             <section className="mb-6">
//               <h3 className="font-urbanist font-semibold text-lg mb-3">Delivery</h3>

//               <div className="space-y-3">
//                 <select className="w-60 border border-gray-200 rounded px-3 py-2 text-sm">
//                   <option>United States</option>
//                   <option>United Kingdom</option>
//                 </select>

//                 <div className="grid grid-cols-2 gap-3">
//                   <input placeholder="First Name" className="border border-gray-200 rounded px-3 py-2 text-sm" />
//                   <input placeholder="Last Name" className="border border-gray-200 rounded px-3 py-2 text-sm" />
//                 </div>

//                 <input
//                   placeholder="Address"
//                   className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                   onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
//                 />

//                 <input
//                   placeholder="Apartment, Suite, Etc. (Optional)"
//                   className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                 />

//                 <div className="grid grid-cols-4 gap-3">
//                   <input
//                     placeholder="City"
//                     className="col-span-2 border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))}
//                   />
//                   <select
//                     className="border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}
//                   >
//                     <option>State</option>
//                     <option>CA</option>
//                   </select>
//                   <input
//                     placeholder="ZIP Code"
//                     className="border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, postal_code: e.target.value }))}
//                   />
//                 </div>

//                 <label className="flex items-center gap-2 text-sm">
//                   <input type="checkbox" className="accent-[#E5C97A]" />
//                   <span className="text-gray-600">Save this information for next time</span>
//                 </label>
//               </div>
//             </section>

//             {/* Shipping Method Title */}
//             <section className="mb-6">
//               <h3 className="font-urbanist font-semibold text-lg mb-3">Shipping Method</h3>
//               <div className="text-sm text-gray-500 bg-gray-50 px-3 py-3 rounded">
//                 Enter your shipping address to view available shipping methods.
//               </div>
//             </section>

//             {/* Payment */}
//             <section className="mt-6">
//               <h3 className="font-urbanist font-semibold text-lg mb-3">Payment</h3>
//               <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

//               <form onSubmit={handleSubmit}>
//                 <div className="border border-gray-200 rounded p-4 bg-white">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="text-sm font-medium">Credit Card</div>
//                     <img src="/images/payment-icons.png" className="h-5" />
//                   </div>

//                   <div className="border border-gray-100 rounded p-4 bg-white">
//                     <div className="mb-3">
//                       <label className="text-xs mb-1 block">Card details</label>
//                       <div className="border rounded px-3 py-3 bg-white">
//                         <CardElement options={cardStyle} />
//                       </div>
//                     </div>

//                     <input
//                       placeholder="Name on Card"
//                       className="w-full border border-gray-200 rounded px-3 py-2 text-sm mb-3"
//                       value={billingName}
//                       onChange={(e) => setBillingName(e.target.value)}
//                     />

//                     <label className="flex items-center gap-2 text-sm">
//                       <input
//                         type="checkbox"
//                         checked={useShippingAsBilling}
//                         onChange={() => setUseShippingAsBilling((s) => !s)}
//                         className="accent-[#0B7AFF]"
//                       />
//                       <span className="text-gray-600">Use shipping address as billing address</span>
//                     </label>
//                   </div>
//                 </div>

//                 {errorMessage && <div className="text-red-600 mt-3 text-sm">{errorMessage}</div>}

//                 <button
//                   type="submit"
//                   disabled={!stripe || loading}
//                   className="w-full bg-[#0B7AFF] text-white py-3 rounded font-semibold mt-6"
//                 >
//                   {loading ? "Processing..." : "Pay Now"}
//                 </button>
//               </form>

//               <div className="mt-3 text-xs text-blue-600 flex gap-3">
//                 <a href="#">Refund Policy</a>
//                 <a href="#">Privacy Policy</a>
//                 <a href="#">Terms of Service</a>
//                 <a href="#">Contact</a>
//               </div>
//             </section>
//           </div>

//           {/* RIGHT SUMMARY */}
//           <aside className="lg:col-span-1 bg-gray-50 border-l border-gray-100 px-6 py-6">
//             <div className="space-y-4">
//               <div className="flex items-start gap-4">
//                 <div className="w-16 h-16 bg-white border rounded flex items-center justify-center">
//                   <img src={order.items[0].img} className="max-h-12" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-semibold text-[#641026]">{order.items[0].name}</p>
//                   <p className="text-xs text-gray-500 mt-1">Bergdolt, Reif & Nett</p>
//                 </div>
//                 <p className="text-sm font-semibold">${order.items[0].price.toFixed(2)}</p>
//               </div>

//               <div className="flex gap-3 items-center">
//                 <input placeholder="Discount Code" className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm" />
//                 <button className="bg-[#EED291] px-4 py-2 rounded font-semibold">Apply</button>
//               </div>

//               <div className="text-sm">
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="font-medium">${order.subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="text-gray-500">Enter Shipping Address</span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="text-lg font-semibold">Total</span>
//                   <span className="text-lg font-bold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </main>

//         {success && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//             <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//               <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//               <p className="mb-4">Thank you! Your payment was processed successfully.</p>
//               <button
//                 onClick={() => {
//                   setSuccess(false);
//                   window.location.href = "/";
//                 }}
//                 className="bg-[#0B7AFF] text-white px-6 py-2 rounded"
//               >
//                 Continue shopping
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
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
//     invalid: {
//       color: "#9e2146",
//     },
//   },
// };

// Updated Checkout.tsx with requested styling adjustments.
// Only requested changes applied: left background (#CCCCCC), Contact + Sign In in one line, Shipping Method title.

// import React, { useMemo, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { Handbag } from "lucide-react";
// import { NavLink } from "react-router";

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });
//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok) throw new Error(data?.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;

//       const cardElement = elements.getElement(CardElement);
//       if (!cardElement) throw new Error("Card element not found");

//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if (confirmResult.error) {
//         setErrorMessage(confirmResult.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if (confirmResult.paymentIntent?.status === "succeeded") setSuccess(true);
//       else setErrorMessage("Payment processing. Please check your email for confirmation.");
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       <div>
//         {/* Header */}
//         <header>
//   <div className="w-full  border-b border-[#CCCCCC] bg-[#FFFFFF] flex justify-between items-center py-2.5">
//     {/* Left Logo */}

//     <div className=" w-[70%]  mx-auto items-center flex justify-between">
//          <div className=" flex flex-col items-center gap-2 font-urbanist font-semibold">
//       <img src={ews} className="w-[70px] xl:w-[70px] h-[60px] xl:h-[60px]" />
//       <p className="text-[#641026] font-semibold font-urbanist text-[12px] tracking-wide">
//         Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
//       </p>
//     </div>

//     {/* Right Cart Icon */}
//     <div className="text-[#641026]">
//       {/* lucide-react Cart Icon */}
//       {/* {React.createElement(require("lucide-react").ShoppingCart, { size: 22, strokeWidth: 1.5 })} */}

//         <NavLink to = "/cartDetails"><Handbag className="h-14 text-[#005BD1] cursor-pointer" /></NavLink>

//     </div>
//     </div>

//   </div>
// </header>

// <div className="bg-[#F8F8F8]">
//             <main className=" grid grid-cols-1 lg:grid-cols-2 gap-8">

//         <div className="flex bg-white justify-end w-[80%]">
//           <div className="py-6  rounded">
//             {/* Contact */}
//             <section className="mb-6">
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="font-urbanist font-semibold text-lg">Contact</h3>
//                 <span className="text-xs text-gray-600">Sign In</span>
//               </div>

//               <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
//                 <div className="w-[60%]">
//                   <input
//                     placeholder="Email or Mobile Phone Number"
//                     className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <label className="flex items-center gap-2 mt-2 text-sm">
//                 <input type="checkbox" className="accent-[#E5C97A]" />
//                 <span className="text-gray-600">Email me with news and offers</span>
//               </label>
//             </section>

//             {/* Delivery */}
//             <section className="mb-6">
//               <h3 className="font-urbanist font-semibold text-lg mb-3">Delivery</h3>

//               <div className="space-y-3">
//                 <select className="w-60 border border-gray-200 rounded px-3 py-2 text-sm">
//                   <option>United States</option>
//                   <option>United Kingdom</option>
//                 </select>

//                 <div className="grid grid-cols-2 gap-3">
//                   <input placeholder="First Name" className="border border-gray-200 rounded px-3 py-2 text-sm" />
//                   <input placeholder="Last Name" className="border border-gray-200 rounded px-3 py-2 text-sm" />
//                 </div>

//                 <input
//                   placeholder="Address"
//                   className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                   onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
//                 />

//                 <input
//                   placeholder="Apartment, Suite, Etc. (Optional)"
//                   className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
//                 />

//                 <div className="grid grid-cols-4 gap-3">
//                   <input
//                     placeholder="City"
//                     className="col-span-2 border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))}
//                   />
//                   <select
//                     className="border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}
//                   >
//                     <option>State</option>
//                     <option>CA</option>
//                   </select>
//                   <input
//                     placeholder="ZIP Code"
//                     className="border border-gray-200 rounded px-3 py-2 text-sm"
//                     onChange={(e) => setAddress((p) => ({ ...p, postal_code: e.target.value }))}
//                   />
//                 </div>

//                 <label className="flex items-center gap-2 text-sm">
//                   <input type="checkbox" className="accent-[#E5C97A]" />
//                   <span className="text-gray-600">Save this information for next time</span>
//                 </label>
//               </div>
//             </section>

//             {/* Shipping Method Title */}
//             <section className="mb-6">
//               <h3 className="font-urbanist font-semibold text-lg mb-3">Shipping Method</h3>
//               <div className="text-sm text-gray-500 bg-gray-50 px-3 py-3 rounded">
//                 Enter your shipping address to view available shipping methods.
//               </div>
//             </section>

//             {/* Payment */}
//             <section className="mt-6">
//               <h3 className="font-urbanist font-semibold text-lg mb-3">Payment</h3>
//               <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

//               <form onSubmit={handleSubmit}>
//                 <div className="border border-gray-200 rounded p-4 bg-white">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="text-sm font-medium">Credit Card</div>
//                     <img src="/images/payment-icons.png" className="h-5" />
//                   </div>

//                   <div className="border border-gray-100 rounded p-4 bg-white">
//                     <div className="mb-3">
//                       <label className="text-xs mb-1 block">Card details</label>
//                       <div className="border rounded px-3 py-3 bg-white">
//                         <CardElement options={cardStyle} />
//                       </div>
//                     </div>

//                     <input
//                       placeholder="Name on Card"
//                       className="w-full border border-gray-200 rounded px-3 py-2 text-sm mb-3"
//                       value={billingName}
//                       onChange={(e) => setBillingName(e.target.value)}
//                     />

//                     <label className="flex items-center gap-2 text-sm">
//                       <input
//                         type="checkbox"
//                         checked={useShippingAsBilling}
//                         onChange={() => setUseShippingAsBilling((s) => !s)}
//                         className="accent-[#0B7AFF]"
//                       />
//                       <span className="text-gray-600">Use shipping address as billing address</span>
//                     </label>
//                   </div>
//                 </div>

//                 {errorMessage && <div className="text-red-600 mt-3 text-sm">{errorMessage}</div>}

//                 <button
//                   type="submit"
//                   disabled={!stripe || loading}
//                   className="w-full bg-[#0B7AFF] text-white py-3 rounded font-semibold mt-6"
//                 >
//                   {loading ? "Processing..." : "Pay Now"}
//                 </button>
//               </form>

//               <div className="mt-3 text-xs text-blue-600 flex gap-3">
//                 <a href="#">Refund Policy</a>
//                 <a href="#">Privacy Policy</a>
//                 <a href="#">Terms of Service</a>
//                 <a href="#">Contact</a>
//               </div>
//             </section>
//           </div>
//         </div>

//           {/* RIGHT SUMMARY */}
//           <aside className="lg:col-span-1 bg-[#F8F8F8] border-l border-gray-100 w-[30%]  py-6">
//             <div className="space-y-4">
//               <div className="flex items-start gap-4">
//                 <div className="w-16 h-16 bg-white border rounded flex items-center justify-center">
//                   <img src={order.items[0].img} className="max-h-12" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-semibold text-[#641026]">{order.items[0].name}</p>
//                   <p className="text-xs text-gray-500 mt-1">Bergdolt, Reif & Nett</p>
//                 </div>
//                 <p className="text-sm font-semibold">${order.items[0].price.toFixed(2)}</p>
//               </div>

//               <div className="flex gap-3 items-center">
//                 <input placeholder="Discount Code" className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm" />
//                 <button className="bg-[#EED291] px-4 py-2 rounded font-semibold">Apply</button>
//               </div>

//               <div className="text-sm">
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="font-medium">${order.subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="text-gray-500">Enter Shipping Address</span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="text-lg font-semibold">Total</span>
//                   <span className="text-lg font-bold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </main>

// </div>

//         {success && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//             <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//               <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//               <p className="mb-4">Thank you! Your payment was processed successfully.</p>
//               <button
//                 onClick={() => {
//                   setSuccess(false);
//                   window.location.href = "/";
//                 }}
//                 className="bg-[#0B7AFF] text-white px-6 py-2 rounded"
//               >
//                 Continue shopping
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
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
//     invalid: {
//       color: "#9e2146",
//     },
//   },
// };

// import React, { useMemo, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { Handbag } from "lucide-react";
// import { NavLink } from "react-router";
// import product1 from "../../assets/images/product1.png"

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });
//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok)
//         throw new Error(data?.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;

//       const cardElement = elements.getElement(CardElement);
//       if (!cardElement) throw new Error("Card element not found");

//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if (confirmResult.error) {
//         setErrorMessage(confirmResult.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if (confirmResult.paymentIntent?.status === "succeeded") setSuccess(true);
//       else
//         setErrorMessage(
//           "Payment processing. Please check your email for confirmation."
//         );
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       {/* -------- HEADER FULL WIDTH -------- */}
//       <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
//         <div className="w-[70%] flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex flex-col items-center gap-2 font-urbanist font-semibold">
//             <img src={ews} className="w-[70px] h-[60px]" />
//             <p className="text-[#641026] font-semibold text-[12px] tracking-wide">
//               Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
//             </p>
//           </div>

//           {/* Cart */}
//           <NavLink to="/cartDetails">
//             <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
//           </NavLink>
//         </div>
//       </header>

//       {/* -------- MAIN TWO COLUMN LAYOUT -------- */}
//       <main className=" w-[70%] mx-auto grid grid-cols-1 font-urbanist lg:grid-cols-[70%_30%] gap-0 items-start min-h-[calc(100vh-80px)]">

//         {/* ---------------- LEFT WHITE FORM ---------------- */}

//         <div className="bg-white py-10 pr-10 lg:min-h-screen lg:overflow-y-auto">
//           {/* Contact */}
//           <section className="mb-6">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-urbanist font-semibold text-lg">Contact</h3>
//               <span className="text-sm   text-[#0B0B0B] underline font-Medium">Sign In</span>
//             </div>

//             <div className="w-full text-sm text-gray-600 mb-2">
//               <input
//                 placeholder="Email or Mobile Phone Number"
//                 className="w-full border border-gray-200 font-medium placeholder-[#565656] text-[#565656] rounded px-3 py-2 text-md"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <label className="flex items-center gap-2 mt-5 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5 cursor-pointer" />
//               <span className="text-[#0B0B0B] text-sm font-Medium">Email me with news and offers</span>
//             </label>
//           </section>

//           {/* Delivery */}
//           <section className="mb-6">
//             <h3 className="font-urbanist font-semibold text-lg mb-3">Delivery</h3>

//             <div className="space-y-3">
//               <select className="w-full border border-gray-200 rounded-lg px-3 py-4 text-sm">
//                 <option>United States</option>
//                 <option>United Kingdom</option>
//               </select>

//               <div className="grid grid-cols-2 gap-3">
//                 <input
//                   placeholder="First Name"
//                   className="border border-gray-200 placeholder-[#565656] text-[#565656]  px-3 py-2 text-md rounded-lg"
//                 />
//                 <input
//                   placeholder="Last Name"
//                   className="border border-gray-200 placeholder-[#565656] text-[#565656]  px-3 py-2 text-md rounded-lg"
//                 />
//               </div>

//               <input
//                 placeholder="Address"
//                 className="w-full border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-2 text-md rounded-lg"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, line1: e.target.value }))
//                 }
//               />

//               <input
//                 placeholder="Apartment, Suite, Etc. (Optional)"
//                 className="w-full border border-gray-200 placeholder-[#565656] text-[#565656]  px-3 py-2 text-md rounded-lg "
//               />

//               <div className="grid grid-cols-4 gap-3">
//                 <input
//                   placeholder="City"
//                   className="col-span-2 border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-2 text-md rounded-lg"
//                   onChange={(e) =>
//                     setAddress((p) => ({ ...p, city: e.target.value }))
//                   }
//                 />
//                 <select
//                   className="border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-2 text-md rounded-lg"
//                   onChange={(e) =>
//                     setAddress((p) => ({ ...p, state: e.target.value }))
//                   }
//                 >
//                   <option>State</option>
//                   <option>CA</option>
//                 </select>
//                 <input
//                   placeholder="ZIP Code"
//                   className="border border-gray-200 placeholder-[#565656] text-[#565656] rounded-lg px-3 py-2 text-md"
//                   onChange={(e) =>
//                     setAddress((p) => ({ ...p, postal_code: e.target.value }))
//                   }
//                 />
//               </div>

//               <label className="flex items-center gap-2 text-sm mt-6">
//                 <input type="checkbox" className="accent-[#E5C97A] h-5 w-5 cursor-pointer" />
//                 <span className="text-[#0B0B0B] text-sm font-Medium">Save this information for next time</span>
//               </label>
//             </div>
//           </section>

//           {/* Shipping */}
//           <section className="mb-6">
//             <h3 className="font-urbanist font-semibold text-lg mb-3">
//               Shipping Method
//             </h3>
//             <div className="text-sm text-[#565656] font-medioum rounded-lg bg-gray-50 px-3 py-3 ">
//               Enter your shipping address to view available shipping methods.
//             </div>
//           </section>

//           {/* Payment */}
//           <section className="mt-6">
//             <h3 className="font-urbanist font-semibold text-lg mb-3">Payment</h3>
//             <p className="text-md text-[#565656] font-medium mb-4">
//               All transactions are secure and encrypted.
//             </p>

//             <form onSubmit={handleSubmit} >
//               <div className="border border-gray-200 rounded p-4 bg-[#F4F4F4]">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="text-sm font-medium">Credit Card</div>
//                   <img src="/images/payment-icons.png" className="h-5" />
//                 </div>

//                 <div className="border border-gray-100 rounded p-4 bg-white">
//                   <div className="mb-3">
//                     <label className="text-xs mb-1 block">Card details</label>
//                     <div className="border rounded px-3 py-3 bg-white">
//                       <CardElement options={cardStyle} />
//                     </div>
//                   </div>

//                   <input
//                     placeholder="Name on Card"
//                     className="w-full border border-gray-200 font-medium text-[#565656] rounded-lg px-3 py-2 text-sm mb-3"
//                     value={billingName}
//                     onChange={(e) => setBillingName(e.target.value)}
//                   />

//                   <label className="flex items-center gap-2 text-sm mt-2">
//                     <input
//                       type="checkbox"
//                       checked={useShippingAsBilling}
//                       onChange={() =>
//                         setUseShippingAsBilling((s) => !s)
//                       }
//                       className="accent-[#0B7AFF] w-6 h-6 rounded-md"
//                     />
//                     <span className="text-[#0B0B0B] text-sm font-medium font-urbanist">
//                       Use shipping address as billing address
//                     </span>
//                   </label>
//                 </div>
//               </div>

//               {errorMessage && (
//                 <div className="text-red-600 mt-3 text-sm">
//                   {errorMessage}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={!stripe || loading}
//                 className="w-full bg-[#005BD1] cursor-pointer text-white py-3 text-sm rounded-xl font-semibold mt-10 mb-4 "
//               >
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </form>

//             <div className="mt-3 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
//               <a href="#" className="underline text-sm font-medium">Refund Policy</a>
//               <a href="#"  className="underline text-sm font-medium">Privacy Policy</a>
//               <a href="#"  className="underline text-sm font-medium">Terms of Service</a>
//               <a href="#"  className="underline text-sm font-medium">Contact</a>
//             </div>
//           </section>
//         </div>

//         {/* ---------------- RIGHT SUMMARY AREA ---------------- */}
//         <aside className="bg-[#F8F8F8] border-l lg:sticky lg:top-0 min-h-screen border-[#CCCCCC] w-full py-10 px-8">
//           <div className="space-y-4">
//             <div className="flex items-start gap-4">
//               <div className="w-16 h-16 bg-white border border-gray rounded flex items-center justify-center">
//                 <img src={product1} className="max-h-12" />
//               </div>

//                <div className="flex items-start ">

//                               <div className="flex-1">
//                 <p className="text-sm font-semibold text-[#641026]">
//                   {order.items[0].name}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Bergdolt, Reif & Nett
//                 </p>
//               </div>

//               <p className="text-md font-semibold">
//                 ${order.items[0].price.toFixed(2)}
//               </p>

//                </div>

//             </div>

//             <div className="flex gap-3 items-center">
//               <input
//                 placeholder="Discount Code"
//                 className="flex-1 border text-[#0B0B0B] placeholder:text-[#0B0B0B] border-[#CCCCCC] rounded-lg px-4 py-2 text-base"
//               />
//               <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold">
//                 Apply
//               </button>
//             </div>

//             <div className="text-sm">
//               <div className="flex justify-between py-2">
//                 <span className="text-[#565656] font-semibold text-md ">Subtotal</span>
//                 <span className="font-semibold text-md text-[#565656]">${order.subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-[#0B0B0B] font-semibold text-md ">Shipping</span>
//                 <span className="text-[#565656]  font-semibold text-md">Enter Shipping Address</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className=" text-[#0B0B0B] text-2xl font-semibold">Total</span>
//                 <span className="text-2xl font-semibold">
//                   ${(order.subtotal + order.shipping - order.discount).toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </aside>
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

// FULL CODE HERE (FLEXBOX VERSION)
// import React, { useMemo, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { Handbag } from "lucide-react";
// import { NavLink } from "react-router";

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });
//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok)
//         throw new Error(data?.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;
//       const cardElement = elements.getElement(CardElement);
//       if (!cardElement) throw new Error("Card element not found");

//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: billingName,
//             email,
//             address,
//           },
//         },
//       });

//       if (confirmResult.error) {
//         setErrorMessage(confirmResult.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if (confirmResult.paymentIntent?.status === "succeeded") setSuccess(true);
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       {/* HEADER */}
//       <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
//         <div className="w-[70%] flex justify-between items-center">
//           <div className="flex flex-col items-center gap-2 font-urbanist font-semibold">
//             <img src={ews} className="w-[70px] h-[60px]" />
//             <p className="text-[#641026] text-[12px]">
//               Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
//             </p>
//           </div>

//           <NavLink to="/cartDetails">
//             <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
//           </NavLink>
//         </div>
//       </header>

//       {/* ----------- FLEXBOX LAYOUT (NO GRID) ----------- */}
//       <main className="w-full ms-auto justify-center flex flex-col lg:flex-row items-start">

//         <div className="flex w-full  ms-61">
//                  <div className=" bg-white px-10 py-10 lg:min-h-screen">
//           {/* CONTACT */}
//           <section className="mb-6">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold text-lg">Contact</h3>
//               <span className="text-sm underline">Sign In</span>
//             </div>

//             <input
//               placeholder="Email or Mobile Phone Number"
//               className="w-full border border-gray-200 rounded px-3 py-3 text-md placeholder-[#565656] text-[#565656]"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="flex items-center gap-2 mt-4 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Email me with news and offers</span>
//             </label>
//           </section>

//           {/* DELIVERY */}
//           <section className="mb-6">
//             <h3 className="font-semibold text-lg mb-3">Delivery</h3>

//             <select className="w-full border border-gray-200 rounded-lg px-3 py-4">
//               <option>United States</option>
//               <option>United Kingdom</option>
//             </select>

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input
//                 placeholder="First Name"
//                 className="border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-3 rounded-lg"
//               />
//               <input
//                 placeholder="Last Name"
//                 className="border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-3 rounded-lg"
//               />
//             </div>

//             <input
//               placeholder="Address"
//               className="w-full border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-3 mt-3 rounded-lg"
//               onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
//             />

//             <input
//               placeholder="Apartment, Suite, Etc. (Optional)"
//               className="w-full border border-gray-200 placeholder-[#565656] text-[#565656] px-3 py-3 mt-3 rounded-lg"
//             />

//             <div className="grid grid-cols-4 gap-3 mt-3">
//               <input
//                 placeholder="City"
//                 className="col-span-2 border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656] text-[#565656]"
//                 onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))}
//               />
//               <select
//                 className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656] text-[#565656]"
//                 onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}
//               >
//                 <option>State</option>
//                 <option>CA</option>
//               </select>
//               <input
//                 placeholder="ZIP Code"
//                 className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656] text-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, postal_code: e.target.value }))
//                 }
//               />
//             </div>

//             <label className="flex items-center gap-2 mt-5">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Save this information for next time</span>
//             </label>
//           </section>

//           {/* SHIPPING */}
//           <section className="mb-6">
//             <h3 className="font-semibold text-lg mb-3">Shipping Method</h3>
//             <div className="bg-gray-50 rounded-lg px-3 py-3 text-[#565656]">
//               Enter your shipping address to view available shipping methods.
//             </div>
//           </section>

//           {/* PAYMENT */}
//           <section className="mt-6">
//             <h3 className="font-semibold text-lg mb-3">Payment</h3>
//             <p className="text-[#565656] mb-4">All transactions are secure and encrypted.</p>

//             <form onSubmit={handleSubmit}>
//               <div className="border border-gray-200 rounded p-4 bg-[#F4F4F4]">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="font-medium">Credit Card</div>
//                   <img src="/images/payment-icons.png" className="h-5" />
//                 </div>

//                 <div className="border border-gray-100 rounded p-4 bg-white">
//                   <label className="text-xs block mb-2">Card details</label>
//                   <div className="border rounded px-3 py-3 bg-white mb-3">
//                     <CardElement options={cardStyle} />
//                   </div>

//                   <input
//                     placeholder="Name on Card"
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#565656] mb-3"
//                     value={billingName}
//                     onChange={(e) => setBillingName(e.target.value)}
//                   />

//                   <label className="flex items-center gap-2 text-sm">
//                     <input
//                       type="checkbox"
//                       checked={useShippingAsBilling}
//                       onChange={() => setUseShippingAsBilling((s) => !s)}
//                       className="accent-[#0B7AFF] h-5 w-5"
//                     />
//                     <span>Use shipping address as billing address</span>
//                   </label>
//                 </div>
//               </div>

//               {errorMessage && (
//                 <div className="text-red-600 mt-3">{errorMessage}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={!stripe || loading}
//                 className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-8"
//               >
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </form>
//           </section>
//         </div>
//         </div>

//         {/* LEFT SECTION — SEPARATE CONTAINER */}

//         {/* RIGHT SECTION — SEPARATE CONTAINER */}

//         <div className="flex min-h-screen   w-full bg-[#F8F8F8]">
//          <aside className=" border-l w-[30%]border-[#CCCCCC] lg:w-[420px] px-8 py-10">

//           {/* ITEM */}
//           <div className="flex items-start gap-4">
//             <div className="w-16 h-16 bg-white border rounded flex items-center justify-center">
//               <img src={order.items[0].img} className="max-h-12" />
//             </div>

//             <div className="flex-1">
//               <p className="text-sm font-semibold text-[#641026]">
//                 {order.items[0].name}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">Bergdolt, Reif & Nett</p>
//             </div>

//             <p className="text-md font-semibold">
//               ${order.items[0].price.toFixed(2)}
//             </p>
//           </div>

//           {/* DISCOUNT */}
//           <div className="flex gap-3 items-center mt-5">
//             <input
//               placeholder="Discount Code"
//               className="flex-1 border border-[#CCCCCC] rounded-lg px-4 py-2 text-base"
//             />
//             <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold">
//               Apply
//             </button>
//           </div>

//           <div className="mt-6">
//             <div className="flex justify-between py-2">
//               <span className="text-[#565656] font-semibold">Subtotal</span>
//               <span className="font-semibold">${order.subtotal.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between py-2">
//               <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//               <span className="text-[#565656] font-semibold">
//                 Enter Shipping Address
//               </span>
//             </div>

//             <div className="flex justify-between py-2">
//               <span className="text-2xl font-semibold">Total</span>
//               <span className="text-2xl font-semibold">
//                 ${(order.subtotal + order.shipping - order.discount).toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </aside>
//         </div>

//       </main>

//       {/* SUCCESS MODAL */}
//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//           <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//             <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//             <p className="mb-4">Thank you! Your payment was processed successfully.</p>
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
//     invalid: {
//       color: "#9e2146",
//     },
//   },
// };

// import React, { useMemo, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { Handbag } from "lucide-react";
// import { NavLink } from "react-router";
// import product1 from "../../assets/images/product1.png"

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });

//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) return;

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok) throw new Error(data.message);

//       const clientSecret = data.clientSecret as string;
//       const cardElement = elements.getElement(CardElement);

//       const confirmResult = await stripe!.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement!,
//           billing_details: {
//             name: billingName,
//             email,
//             address,
//           },
//         },
//       });

//       if (confirmResult.error) {
//         setErrorMessage(confirmResult.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if (confirmResult.paymentIntent?.status === "succeeded") setSuccess(true);
//     } catch (err: any) {
//       setErrorMessage(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">

//       {/* ---------------------- HEADER ---------------------- */}
//       <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
//         <div className="w-[95%] md:w-[70%] flex justify-between items-center">
//           <div className="flex flex-col items-center gap-2">
//             <img src={ews} className="w-[70px] h-[60px]" />
//             <p className="text-[#641026] text-[12px]">
//               Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
//             </p>
//           </div>

//           <NavLink to="/cartDetails">
//             <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
//           </NavLink>
//         </div>
//       </header>

//       {/* ---------------------- TWO COLUMN FLEX LAYOUT ---------------------- */}
//       <main className="w-full flex flex-col lg:flex-row items-start min-h-screen">

//         {/* LEFT SECTION */}

//     <div className=" ms-2.5 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-4 lg:px-10 xl:pe-30  py-10 lg:min-h-screen lg:overflow-y-auto items-stretch">

//           {/* ---------------- CONTACT ---------------- */}
//           <section className="mb-6">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold text-lg">Contact</h3>
//               <span className="text-sm underline">Sign In</span>
//             </div>

//             <input
//               placeholder="Email or Mobile Phone Number"
//               className="w-full border border-gray-200 rounded px-3 py-3 text-md placeholder-[#565656]"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="flex items-center gap-2 mt-4 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Email me with news and offers</span>
//             </label>
//           </section>

//           {/* ---------------- DELIVERY ---------------- */}
//           <section className="mb-6">
//             <h3 className="font-semibold text-lg mb-3">Delivery</h3>

//             <select className="w-full border border-gray-200 rounded-lg px-3 py-4">
//               <option>United States</option>
//               <option>United Kingdom</option>
//             </select>

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input
//                 placeholder="First Name"
//                 className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656]"
//               />
//               <input
//                 placeholder="Last Name"
//                 className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656]"
//               />
//             </div>

//             <input
//               placeholder="Address"
//               className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//               onChange={(e) =>
//                 setAddress((p) => ({ ...p, line1: e.target.value }))
//               }
//             />

//             <input
//               placeholder="Apartment, Suite, Etc. (Optional)"
//               className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//             />

//             <div className="grid grid-cols-4 gap-3 mt-3">
//               <input
//                 placeholder="City"
//                 className="col-span-2 border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, city: e.target.value }))
//                 }
//               />

//               <select
//                 className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, state: e.target.value }))
//                 }
//               >
//                 <option>State</option>
//                 <option>CA</option>
//               </select>

//               <input
//                 placeholder="ZIP Code"
//                 className="border border-gray-200 rounded-lg px-3 py-3 placeholder-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, postal_code: e.target.value }))
//                 }
//               />
//             </div>

//             <label className="flex items-center gap-2 mt-5 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Save this information for next time</span>
//             </label>
//           </section>

//           {/* ---------------- SHIPPING ---------------- */}
//           <section className="mb-6">
//             <h3 className="font-semibold text-lg mb-3">Shipping Method</h3>
//             <div className="bg-gray-50 rounded-lg px-3 py-3 text-[#565656]">
//               Enter your shipping address to view available shipping methods.
//             </div>
//           </section>

//           {/* ---------------- PAYMENT ---------------- */}
//           <section className="mt-6">
//             <h3 className="font-semibold text-lg mb-3">Payment</h3>
//             <p className="text-[#565656] mb-4">All transactions are secure and encrypted.</p>

//             <form onSubmit={handleSubmit}>
//               <div className="border border-gray-200 rounded p-4 bg-[#F4F4F4]">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="font-medium">Credit Card</div>
//                   <img src="/images/payment-icons.png" className="h-5" />
//                 </div>

//                 <div className="border border-gray-100 rounded p-4 bg-white">
//                   <label className="text-xs block mb-2">Card details</label>
//                   <div className="border rounded px-3 py-3 bg-white mb-3">
//                     <CardElement options={cardStyle} />
//                   </div>

//                   <input
//                     placeholder="Name on Card"
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#565656] mb-3"
//                     value={billingName}
//                     onChange={(e) => setBillingName(e.target.value)}
//                   />

//                   <label className="flex items-center gap-2 text-sm">
//                     <input
//                       type="checkbox"
//                       checked={useShippingAsBilling}
//                       onChange={() => setUseShippingAsBilling((s) => !s)}
//                       className="accent-[#0B7AFF] h-5 w-5"
//                     />
//                     <span>Use shipping address as billing address</span>
//                   </label>
//                 </div>
//               </div>

//               {errorMessage && (
//                 <div className="text-red-600 mt-3">{errorMessage}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={!stripe || loading}
//                 className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-8"
//               >
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </form>
//           </section>
//         </div>

//         {/* ---------------------- RIGHT SUMMARY SECTION ---------------------- */}
// {/* ---------------------- RIGHT SUMMARY SECTION ---------------------- */}
// <div className="w-full min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">   {/* UPDATED */}
//   <aside className="lg:w-[70%] border-l border-[#CCCCCC] h-screen px-5 md:px-28 lg:px-5 py-10 overflow-y-auto">  {/* UPDATED */}

//     {/* ITEM */}
//     <div className="flex items-start gap-4">
//       <div className="w-24 h-24 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//         <img src={product1} className="max-h-20" />
//       </div>

//       <div className="flex-1">
//         <p className="text-sm font-semibold text-[#641026]">{order.items[0].name}</p>
//         <p className="text-xs text-gray-500 mt-1">Bergdolt, Reif & Nett</p>
//       </div>

//       <p className="text-md font-semibold">${order.items[0].price.toFixed(2)}</p>
//     </div>

//     {/* DISCOUNT */}
//     <div className="flex flex-row lg:flex-col xl:flex-row gap-3 items-center mt-5">
//       <input
//         placeholder="Discount Code"
//         className="flex-1 border border-[#CCCCCC] rounded-lg px-4 py-2 text-base"
//       />
//       <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold">
//         Apply
//       </button>
//     </div>

//     {/* SUMMARY */}
//     <div className="mt-6">
//       <div className="flex justify-between py-2">
//         <span className="text-[#565656] font-semibold">Subtotal</span>
//         <span className="font-semibold">${order.subtotal.toFixed(2)}</span>
//       </div>

//       <div className="flex justify-between py-2">
//         <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//         <span className="text-[#565656] font-semibold">
//           Enter Shipping Address
//         </span>
//       </div>

//       <div className="flex justify-between py-2">
//         <span className="text-2xl font-semibold">Total</span>
//         <span className="text-2xl font-semibold">
//           ${(order.subtotal + order.shipping - order.discount).toFixed(2)}
//         </span>
//       </div>
//     </div>
//   </aside>
// </div>

//       </main>

//       {/* SUCCESS POPUP */}
//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//           <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//             <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//             <p className="mb-4">Thank you! Your payment was processed successfully.</p>
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

// import React, { useMemo, useState } from "react";
// import {
//   CardNumberElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { Handbag } from "lucide-react";
// import { NavLink } from "react-router";
// import product1 from "../../assets/images/product1.png";
// import payoption1 from "../../assets/images/payoption1.png"
// import payoption2 from "../../assets/images/payoption2.png"
// import payoption4 from "../../assets/images/payoption4.png"
// import payoption5 from "../../assets/images/payoption5.png"

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });

//   const [cardExpiry, setCardExpiry] = useState("");
//   const [cardCvc, setCardCvc] = useState("");

//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok) throw new Error(data.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;

//       // get card number element (we're using CardNumberElement for only card number)
//       const cardNumberEl = elements.getElement(CardNumberElement);
//       if (!cardNumberEl) throw new Error("Card number element not found");

//       // confirm payment using card details + additional billing info
//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardNumberEl,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if ((confirmResult as any).error) {
//         setErrorMessage((confirmResult as any).error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if ((confirmResult as any).paymentIntent?.status === "succeeded") setSuccess(true);
//       else setErrorMessage("Payment processing. Please check your email for confirmation.");
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       {/* ---------------------- HEADER ---------------------- */}
//       <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
//         <div className="w-[95%] md:w-[70%] flex justify-between items-center">
//           <div className="flex flex-col items-center gap-2">
//             <img src={ews} className="w-[70px] h-[60px]" />
//             <p className="text-[#641026] text-[12px]">
//               Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
//             </p>
//           </div>

//           <NavLink to="/cartDetails">
//             <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
//           </NavLink>
//         </div>
//       </header>

//       {/* ---------------------- TWO COLUMN FLEX LAYOUT ---------------------- */}
//       <main className="w-full flex flex-col lg:flex-row items-start min-h-screen">
//         {/* LEFT */}
//         <div className="ms-2.5 order-2 lg:order-1 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-3 md:pe-28 lg:px-10 xl:pe-30 py-10 lg:min-h-screen lg:overflow-y-auto items-stretch font-urbanist">
//           {/* CONTACT */}
//           <section className="mb-8">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B]">Contact</h3>
//               <span className="text-sm underline">Sign In</span>
//             </div>

//             <input
//               placeholder="Email or Mobile Phone Number"
//               className="w-full border border-gray-200 font-medium rounded px-3 py-3 text-md  placeholder-[#565656]"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="flex items-center gap-2 mt-4 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Email me with news and offers</span>
//             </label>
//           </section>

//           {/* DELIVERY */}
//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-4">Delivery</h3>

//             <select className="w-full border border-gray-200 rounded-lg px-3 py-4">
//               <option>United States</option>
//               <option>United Kingdom</option>
//             </select>

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input placeholder="First Name" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" />
//               <input placeholder="Last Name" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" />
//             </div>

//             <input
//               placeholder="Address"
//               className="w-full border font-medium border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//               onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
//             />

//             <input placeholder="Apartment, Suite, Etc. (Optional)" className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]" />

//             <div className="grid grid-cols-4 gap-3 mt-3">
//               <input placeholder="City" className="col-span-2 border border-gray-200  font-medium rounded-lg px-3 py-3 placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))} />
//               <select className="border border-gray-200 rounded-lg px-3 py-3  placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}>
//                 <option>State</option>
//                 <option>CA</option>
//               </select>
//               <input placeholder="ZIP Code" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, postal_code: e.target.value }))} />
//             </div>

//             <label className="flex items-center gap-2 mt-5 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Save this information for next time</span>
//             </label>
//           </section>

//           {/* SHIPPING */}
//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">Shipping Method</h3>
//             <div className="bg-gray-50 rounded-lg px-3 py-3 text-[#565656]">Enter your shipping address to view available shipping methods.</div>
//           </section>

//           {/* PAYMENT */}
//           <section className="mt-6">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">Payment</h3>
//             <p className="text-[#565656] mb-4">All transactions are secure and encrypted.</p>

//             <form onSubmit={handleSubmit}>
//               {/* Payment box with blue top border (matches screenshot) */}
//               <div className="rounded-lg overflow-hidden bg-[#F5F6FF] border border-gray-200">
//                 {/* Blue top border area with Credit Card label + logos */}
//                 <div className="flex items-center justify-between px-4 py-2 bg-transparent">
//                   <div className="text-sm font-medium">Credit Card</div>
//                    <div className="flex gap-2">
//                        <img src={payoption1} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
//                        <img src={payoption2} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
//                        <img src={payoption4} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
//                        <img src={payoption5} className="w-[34px] md:w-[42px] h-[24px]" alt="" />
//                    </div>
//                 </div>

//                 {/* Inner white box with inputs */}
//                 <div className="p-4 bg-white border-t border-gray-100 font-urbanist">
//                   {/* Card Number (Stripe CardNumberElement) */}
//                   <div className="mb-3">
//                     <div>
//                       {/* CardNumberElement is used here so only card number is handled by Stripe */}
//                         <input
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         placeholder="Card Number"
//                         className="w-full border font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                   </div>

//                   {/* Expiration & CVC in two columns */}
//                   <div className="grid grid-cols-2 gap-3 mb-3">
//                     <div>
//                       <input
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         placeholder="Expiration Date (MM / YY)"
//                         className="w-full border font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                     <div>

//                       <input
//                         value={cardCvc}
//                         onChange={(e) => setCardCvc(e.target.value)}
//                         placeholder="Security Code"
//                         className="w-full border font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                   </div>

//                   {/* Name on Card */}
//                   <div className="mb-3">
//                     <label className="text-xs mb-1 block text-[#6B7280]">Name on Card</label>
//                     <input
//                       placeholder="Name on Card"
//                       className="w-full border font-urbanist font-medium border-[#CCCCCC] rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       value={billingName}
//                       onChange={(e) => setBillingName(e.target.value)}
//                     />
//                   </div>

//                   {/* Checkbox */}
//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" checked={useShippingAsBilling} onChange={() => setUseShippingAsBilling((s) => !s)} className="accent-[#0B7AFF] h-5 w-5" />
//                     <span className="text-[#0B0B0B] text-sm">Use shipping address as billing address</span>
//                   </label>
//                 </div>
//               </div>

//               {errorMessage && <div className="text-red-600 mt-3">{errorMessage}</div>}

//               <button type="submit" disabled={!stripe || loading} className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-8">
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </form>
//           </section>
//         </div>

//         {/* ---------------------- RIGHT SUMMARY SECTION ---------------------- */}
//         <div className="w-full order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
//           <aside className="lg:w-[70%] border-l border-[#CCCCCC] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative">
//             {/* ITEM with badge */}
//             <div className="flex items-center  gap-4">
//               <div className="relative">
//                 <div className="w-24 h-24 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//                   <img src={product1} className="max-h-20" />
//                 </div>
//                 {/* small grey circular badge top-right */}
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
//                   1
//                 </span>
//               </div>

//               <div className="flex justify-between items-center gap-9 md:gap-7 lg:gap-5 xl:gap-8 mt-0 xl:mt-10">
//                 <p className="text-sm xl:text-md font-semibold text-[#641026]">{order.items[0].name}</p>
//                <p className="text-md font-semibold">${order.items[0].price.toFixed(2)}</p>
//               </div>

//             </div>

//             {/* DISCOUNT - responsive: stack on small, row on md+ */}
//             <div className="mt-5">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                 <input placeholder="Discount Code" className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full" />
//                 <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap">Apply</button>
//               </div>
//             </div>

//             {/* SUMMARY */}
//             <div className="mt-6">
//               <div className="flex justify-between py-2">
//                 <span className="text-[#565656] font-semibold">Subtotal</span>
//                 <span className="font-semibold text-[#565656] text-md">${order.subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//                 <span className="text-[#565656] font-semibold">Enter Shipping Address</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-2xl font-semibold">Total</span>
//                 <span className="text-2xl font-semibold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* SUCCESS POPUP */}
//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//           <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//             <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//             <p className="mb-4">Thank you! Your payment was processed successfully.</p>
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

// import React, { useMemo, useState } from "react";
// import {
//   CardNumberElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { ChevronDown, ChevronUp, Handbag } from "lucide-react";
// import { NavLink } from "react-router";
// import product1 from "../../assets/images/product1.png";
// import payoption1 from "../../assets/images/payoption1.png";
// import payoption2 from "../../assets/images/payoption2.png";
// import payoption4 from "../../assets/images/payoption4.png";
// import payoption5 from "../../assets/images/payoption5.png";
// import  { useRef,  useEffect } from "react";

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });

//   const [cardExpiry, setCardExpiry] = useState("");
//   const [cardCvc, setCardCvc] = useState("");

//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   // NEW: mobile summary toggle state (Option A)
//   const [summaryOpen, setSummaryOpen] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok) throw new Error(data.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;

//       // get card number element (we're using CardNumberElement for only card number)
//       const cardNumberEl = elements.getElement(CardNumberElement);
//       if (!cardNumberEl) throw new Error("Card number element not found");

//       // confirm payment using card details + additional billing info
//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardNumberEl,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if ((confirmResult as any).error) {
//         setErrorMessage((confirmResult as any).error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if ((confirmResult as any).paymentIntent?.status === "succeeded") setSuccess(true);
//       else setErrorMessage("Payment processing. Please check your email for confirmation.");
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const summaryRef = useRef(null);
// const summaryContentRef = useRef(null);
// const [contentHeight, setContentHeight] = useState(0);

// useEffect(() => {
//   if (summaryContentRef.current) {
//     setContentHeight(summaryContentRef.current.scrollHeight);
//   }
// }, [summaryOpen]);

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       {/* ---------------------- HEADER ---------------------- */}
//       <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
//         <div className="w-[95%] md:w-[70%] flex justify-between items-center">
//           <div className="flex flex-col items-center gap-2">
//             <img src={ews} className="w-[70px] h-[60px]" />
//             <p className="text-[#641026] text-[12px]">
//               Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
//             </p>
//           </div>

//           <NavLink to="/cartDetails">
//             <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
//           </NavLink>
//         </div>
//       </header>

//       {/* ---------------------- TWO COLUMN FLEX LAYOUT ---------------------- */}
//       <main className="w-full  flex flex-col lg:flex-row items-start min-h-screen">

//         <div className="w-full bg-[#F8F8F8] ps-0 md:ps-25 lg:ms-0 md:block lg:hidden">

// <div className="w-[95%] md:w-[85%] mx-auto md:mx-0">
// <button
//   type="button"
//   onClick={() => setSummaryOpen((s) => !s)}
//   aria-expanded={summaryOpen}
//   className="w-full flex items-center justify-between font-semibold font-urbanist py-5 md:px-4 rounded bg-[#F8F8F8]"
// >
//   <div className="flex items-center gap-2">
//     <span className="text-md font-medium">Order summary</span>

//     {/* ARROW CLOSER TO TEXT (LIKE YOUR IMAGE) */}
//     <span className="text-sm text-[#0B0B0B]">
//       {summaryOpen ? <ChevronUp /> : <ChevronDown />}
//     </span>
//   </div>

//   <span className="text-md font-semibold">
//     ${order.subtotal.toFixed(2)}
//   </span>
// </button>

//   {/* Smooth Animated Dropdown */}
//   <div
//     ref={summaryRef}
//     style={{
//       maxHeight: summaryOpen ? `${contentHeight}px` : "0px",
//       transition: "max-height 0.35s ease",
//       overflow: "hidden",
//     }}
//     className={summaryOpen ? "mt-4" : ""}
//   >
//     <div ref={summaryContentRef}>
//       <div className="bg-[#F8F8F8] font-urbanist p-0 md:px-4 py-4 rounded">
//         {/* ITEM */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-20 h-20 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
//               <img src={product1} className="max-h-16" />
//             </div>
//             <span
//               className="absolute -top-2 -right-2 inline-flex items-center justify-center text-xs font-semibold text-[#FFFFFF]"
//               style={{
//                 width: 22,
//                 height: 22,
//                 borderRadius: 9999,
//                 background: "#565656",
//                 boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
//               }}
//             >
//               {order.items[0].qty}
//             </span>
//           </div>

//           <div className="flex-1">
//             <p className="text-sm md:text-md font-urbanist font-semibold text-[#641026]">
//               {order.items[0].name}
//             </p>
//           </div>

//           <p className="text-md font-urbanist font-semibold">
//             ${order.items[0].price.toFixed(2)}
//           </p>
//         </div>

//         {/* DISCOUNT */}
//         <div className="mt-4">
//           <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//             <input
//               placeholder="Discount Code"
//               className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
//             />
//             <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap">
//               Apply
//             </button>
//           </div>
//         </div>

//         {/* SUMMARY TOTALS */}
//         <div className="mt-4">
//           <div className="flex justify-between py-2">
//             <span className="text-[#565656] font-semibold">Subtotal</span>
//             <span className="font-semibold text-[#565656] text-md">
//               ${order.subtotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="flex justify-between py-2">
//             <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//             <span className="text-[#565656] font-semibold">
//               Enter Shipping Address
//             </span>
//           </div>

//           <div className="flex justify-between py-2">
//             <span className="text-2xl font-semibold">Total</span>
//             <span className="text-xl font-semibold">
//               ${(order.subtotal + order.shipping - order.discount).toFixed(2)}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>

//         {/* LEFT (main form) */}
//         <div className="ms-2.5 order-2 lg:order-1 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-3 md:pe-28 lg:px-10 xl:pe-30 py-10 lg:min-h-screen lg:overflow-y-auto items-stretch font-urbanist">
//           {/* CONTACT */}
//           <section className="mb-8">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B]">Contact</h3>
//               <span className="text-sm underline">Sign In</span>
//             </div>

//             <input
//               placeholder="Email or Mobile Phone Number"
//               className="w-full border border-gray-200 font-medium rounded px-3 py-3 text-md  placeholder-[#565656]"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="flex items-center gap-2 mt-4 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Email me with news and offers</span>
//             </label>
//           </section>

//           {/* DELIVERY */}
//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-4">Delivery</h3>

//             <select className="w-full border border-gray-200 rounded-lg px-3 py-4">
//               <option>United States</option>
//               <option>United Kingdom</option>
//             </select>

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input placeholder="First Name" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" />
//               <input placeholder="Last Name" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" />
//             </div>

//             <input
//               placeholder="Address"
//               className="w-full border font-medium border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//               onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
//             />

//             <input placeholder="Apartment, Suite, Etc. (Optional)" className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]" />

//             <div className="grid grid-cols-4 gap-3 mt-3">
//               <input placeholder="City" className="col-span-2 border border-gray-200  font-medium rounded-lg px-3 py-3 placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))} />
//               <select className="border border-gray-200 rounded-lg px-3 py-3  placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}>
//                 <option>State</option>
//                 <option>CA</option>
//               </select>
//               <input placeholder="ZIP Code" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, postal_code: e.target.value }))} />
//             </div>

//             <label className="flex items-center gap-2 mt-5 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Save this information for next time</span>
//             </label>
//           </section>

//           {/* SHIPPING */}
//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">Shipping Method</h3>
//             <div className="bg-gray-50 rounded-lg px-3 py-3 text-[#565656]">Enter your shipping address to view available shipping methods.</div>
//           </section>

//           {/* PAYMENT */}
//           <section className="mt-6">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">Payment</h3>
//             <p className="text-[#565656] mb-4">All transactions are secure and encrypted.</p>

//             <form onSubmit={handleSubmit}>
//               {/* Payment box with blue top border (matches screenshot) */}
//               <div className="rounded-lg overflow-hidden bg-[#F5F6FF] border border-gray-300 ">
//                 {/* Blue top border area with Credit Card label + logos */}
//                 <div className="flex items-center justify-between border border-[#005BD1] px-4 py-2 bg-transparent">
//                   <div className="text-sm font-medium">Credit Card</div>
//                   <div className="flex gap-2">
//                     <img src={payoption1} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
//                     <img src={payoption2} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
//                     <img src={payoption4} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
//                     <img src={payoption5} className="w-[34px] md:w-[42px] h-[24px]" alt="" />
//                   </div>
//                 </div>

//                 {/* Inner white box with inputs */}
//                 <div className="p-4 bg-[#F4F4F4] border-t border-gray-100 font-urbanist">
//                   {/* Card Number (Stripe CardNumberElement) */}
//                   <div className="mb-3">
//                     <div>
//                       {/* retained your style but using a normal input placeholder for UI (you can swap to CardNumberElement if you wish) */}
//                       <input
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         placeholder="Card Number"
//                         className="w-full border bg-[#FFFFFF] font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                   </div>

//                   {/* Expiration & CVC in two columns */}
//                   <div className="grid grid-cols-2 gap-3 mb-3">
//                     <div>
//                       <input
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         placeholder="Expiration Date (MM / YY)"
//                         className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         value={cardCvc}
//                         onChange={(e) => setCardCvc(e.target.value)}
//                         placeholder="Security Code"
//                         className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                   </div>

//                   {/* Name on Card */}
//                   <div className="mb-3">
//                     <label className="text-xs mb-1 block text-[#6B7280]">Name on Card</label>
//                     <input
//                       placeholder="Name on Card"
//                       className="w-full border font-urbanist font-medium border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       value={billingName}
//                       onChange={(e) => setBillingName(e.target.value)}
//                     />
//                   </div>

//                   {/* Checkbox */}
//                   <label className="flex items-center gap-2 text-sm">
//                     <input type="checkbox" checked={useShippingAsBilling} onChange={() => setUseShippingAsBilling((s) => !s)} className="accent-[#0B7AFF] h-5 w-5" />
//                     <span className="text-[#0B0B0B] text-sm">Use shipping address as billing address</span>
//                   </label>
//                 </div>
//               </div>

//               {errorMessage && <div className="text-red-600 mt-3">{errorMessage}</div>}

//               <button type="submit" disabled={!stripe || loading} className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-8">
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </form>

//                  <div className="mt-8 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
//               <a href="#" className="underline text-sm font-medium">Refund Policy</a>
//               <a href="#"  className="underline text-sm font-medium">Privacy Policy</a>
//               <a href="#"  className="underline text-sm font-medium">Terms of Service</a>
//              <a href="#"  className="underline text-sm font-medium">Contact</a>
//            </div>
//           </section>
//         </div>

//         {/* ---------------------- RIGHT SUMMARY SECTION (desktop) ---------------------- */}
//         <div className="w-full hidden  border-l font-urbanist border-[#CCCCCC] lg:block order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
//           <aside className="lg:w-[70%] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative">
//             {/* ITEM with badge */}
//             <div className="flex items-center  gap-4">
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

//               <div className="flex justify-between items-start gap-9 md:gap-7 lg:gap-5 xl:gap-8  w-full">
//                 <div className="flex-1">
//                   <p className="text-sm md:text-md xl:text-md font-semibold text-[#641026]">{order.items[0].name}</p>
//                 </div>
//                 <p className="text-md font-semibold">${order.items[0].price.toFixed(2)}</p>
//               </div>
//             </div>

//             {/* DISCOUNT - responsive: stack on small, row on md+ */}
//             <div className="mt-5">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                 <input placeholder="Discount Code" className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full" />
//                 <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap">Apply</button>
//               </div>
//             </div>

//             {/* SUMMARY */}
//             <div className="mt-6">
//               <div className="flex justify-between py-2">
//                 <span className="text-[#565656] font-semibold">Subtotal</span>
//                 <span className="font-semibold text-[#565656] text-md">${order.subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-[#0B0B0B] font-semibold">Shipping</span>
//                 <span className="text-[#565656] font-semibold">Enter Shipping Address</span>
//               </div>

//               <div className="flex justify-between py-2">
//                 <span className="text-2xl font-semibold">Total</span>
//                 <span className="text-2xl font-semibold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* SUCCESS POPUP */}
//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40">
//           <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
//             <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
//             <p className="mb-4">Thank you! Your payment was processed successfully.</p>
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

// import React, { useMemo, useState, useRef, useEffect } from "react";
// import {
//   CardNumberElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ews from "../../assets/images/ews.png";
// import { ChevronDown, ChevronUp, Handbag } from "lucide-react";
// import { NavLink } from "react-router";
// import product1 from "../../assets/images/product1.png";
// import payoption1 from "../../assets/images/payoption1.png";
// import payoption2 from "../../assets/images/payoption2.png";
// import payoption4 from "../../assets/images/payoption4.png";
// import payoption5 from "../../assets/images/payoption5.png";

// const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

// const Checkout: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutInner />
//     </Elements>
//   );
// };

// export default Checkout;

// const CheckoutInner: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

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
//   const [billingName, setBillingName] = useState("");
//   const [address, setAddress] = useState({
//     line1: "",
//     city: "",
//     state: "",
//     postal_code: "",
//     country: "US",
//   });

//   const [cardExpiry, setCardExpiry] = useState("");
//   const [cardCvc, setCardCvc] = useState("");

//   const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   // top dropdown state (original)
//   const [summaryOpenTop, setSummaryOpenTop] = useState(false);
//   const topRef = useRef<HTMLDivElement | null>(null);
//   const topContentRef = useRef<HTMLDivElement | null>(null);
//   const [topContentHeight, setTopContentHeight] = useState(0);

//   useEffect(() => {
//     if (topContentRef.current) {
//       setTopContentHeight(topContentRef.current.scrollHeight);
//     }
//   }, [summaryOpenTop]);

//   // bottom dropdown state (GIF-style)
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

//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       return;
//     }

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
//         }),
//       });

//       const data = await resp.json();
//       if (!resp.ok)
//         throw new Error(data.message || "Failed to create payment intent");

//       const clientSecret = data.clientSecret as string;

//       // get card number element (we're using CardNumberElement for only card number)
//       const cardNumberEl = elements.getElement(CardNumberElement);
//       if (!cardNumberEl) throw new Error("Card number element not found");

//       // confirm payment using card details + additional billing info
//       const confirmResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardNumberEl,
//           billing_details: {
//             name: billingName,
//             email,
//             address: {
//               line1: address.line1,
//               city: address.city,
//               state: address.state,
//               postal_code: address.postal_code,
//               country: address.country,
//             },
//           },
//         },
//       });

//       if ((confirmResult as any).error) {
//         setErrorMessage(
//           (confirmResult as any).error.message || "Payment failed"
//         );
//         setLoading(false);
//         return;
//       }

//       if ((confirmResult as any).paymentIntent?.status === "succeeded")
//         setSuccess(true);
//       else
//         setErrorMessage(
//           "Payment processing. Please check your email for confirmation."
//         );
//     } catch (err: any) {
//       setErrorMessage(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#0B0B0B]">
//       {/* ---------------------- HEADER ---------------------- */}
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

//       {/* ---------------------- TWO COLUMN FLEX LAYOUT ---------------------- */}
//       <main className="w-full  flex flex-col lg:flex-row items-start min-h-screen">
//         {/* TOP DROPDOWN (original position) - show on sm and md, hide on lg */}
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

//                 {/* ARROW CLOSER TO TEXT (LIKE YOUR IMAGE) */}
//                 <span className="text-sm text-[#0B0B0B]">
//                   {summaryOpenTop ? <ChevronUp /> : <ChevronDown />}
//                 </span>
//               </div>

//               <span className="text-md font-semibold">
//                 ${order.subtotal.toFixed(2)}
//               </span>
//             </button>

//             {/* Smooth Animated Dropdown */}
//             <div
//               ref={topRef}
//               style={{
//                 maxHeight: summaryOpenTop ? `${topContentHeight}px` : "0px",
//                 transition: "max-height 0.35s ease",
//                 overflow: "hidden",
//               }}
//               className={summaryOpenTop ? "mt-4" : ""}
//             >
//               <div ref={topContentRef}>
//                 <div className="bg-[#F8F8F8] font-urbanist p-0 md:px-4 py-4 rounded">
//                   {/* ITEM */}
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

//                   {/* DISCOUNT */}
//                   <div className="mt-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                       <input
//                         placeholder="Discount Code"
//                         className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
//                       />
//                       <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap">
//                         Apply
//                       </button>
//                     </div>
//                   </div>

//                   {/* SUMMARY TOTALS */}
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

//         {/* LEFT (main form) */}
//         <div className="ms-2.5 order-2 lg:order-1 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-3 md:pe-28 lg:px-10 xl:pe-30 py-10 lg:min-h-screen lg:overflow-y-auto items-stretch font-urbanist">
//           {/* CONTACT */}
//           <section className="mb-8">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B]">
//                 Contact
//               </h3>
//               <span className="text-sm underline">Sign In</span>
//             </div>

//             <input
//               placeholder="Email or Mobile Phone Number"
//               className="w-full border border-gray-200 font-medium rounded px-3 py-3 text-md  placeholder-[#565656]"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="flex items-center gap-2 mt-4 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Email me with news and offers</span>
//             </label>
//           </section>

//           {/* DELIVERY */}
//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-4">
//               Delivery
//             </h3>

//             <select className="w-full border border-gray-200 rounded-lg px-3 py-4">
//               <option>United States</option>
//               <option>United Kingdom</option>
//             </select>

//             <div className="grid grid-cols-2 gap-3 mt-3">
//               <input
//                 placeholder="First Name"
//                 className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//               />
//               <input
//                 placeholder="Last Name"
//                 className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//               />
//             </div>

//             <input
//               placeholder="Address"
//               className="w-full border font-medium border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//               onChange={(e) =>
//                 setAddress((p) => ({ ...p, line1: e.target.value }))
//               }
//             />

//             <input
//               placeholder="Apartment, Suite, Etc. (Optional)"
//               className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
//             />

//             <div className="grid grid-cols-4 gap-3 mt-3">
//               <input
//                 placeholder="City"
//                 className="col-span-2 border border-gray-200  font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, city: e.target.value }))
//                 }
//               />
//               <select
//                 className="border border-gray-200 rounded-lg px-3 py-3  placeholder-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, state: e.target.value }))
//                 }
//               >
//                 <option>State</option>
//                 <option>CA</option>
//               </select>
//               <input
//                 placeholder="ZIP Code"
//                 className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]"
//                 onChange={(e) =>
//                   setAddress((p) => ({ ...p, postal_code: e.target.value }))
//                 }
//               />
//             </div>

//             <label className="flex items-center gap-2 mt-5 text-sm">
//               <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
//               <span>Save this information for next time</span>
//             </label>
//           </section>

//           {/* SHIPPING */}
//           <section className="mb-8">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">
//               Shipping Method
//             </h3>
//             <div className="bg-gray-50 rounded-lg px-3 py-3 text-[#565656]">
//               Enter your shipping address to view available shipping methods.
//             </div>
//           </section>

//           {/* PAYMENT */}
//           <section className="mt-6">
//             <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">
//               Payment
//             </h3>
//             <p className="text-[#565656] mb-4">
//               All transactions are secure and encrypted.
//             </p>

//             <form onSubmit={handleSubmit}>
//               {/* Payment box with blue top border (matches screenshot) */}
//               <div className="rounded-lg overflow-hidden bg-[#F5F6FF] border border-gray-300 ">
//                 {/* Blue top border area with Credit Card label + logos */}
//                 <div className="flex items-center justify-between border border-[#005BD1] px-4 py-2 bg-transparent">
//                   <div className="text-sm font-medium">Credit Card</div>
//                   <div className="flex gap-2">
//                     <img
//                       src={payoption1}
//                       className="w-[34px] md:w-[38px] h-[20px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption2}
//                       className="w-[34px] md:w-[38px] h-[20px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption4}
//                       className="w-[34px] md:w-[38px] h-[20px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption5}
//                       className="w-[34px] md:w-[42px] h-[24px]"
//                       alt=""
//                     />
//                   </div>
//                 </div>

//                 {/* Inner white box with inputs */}
//                 <div className="p-4 bg-[#F4F4F4] border-t border-gray-100 font-urbanist">
//                   {/* Card Number (Stripe CardNumberElement) */}
//                   <div className="mb-3">
//                     <div>
//                       {/* retained your style but using a normal input placeholder for UI (you can swap to CardNumberElement if you wish) */}
//                       <input
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         placeholder="Card Number"
//                         className="w-full border bg-[#FFFFFF] font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                   </div>

//                   {/* Expiration & CVC in two columns */}
//                   <div className="grid grid-cols-2 gap-3 mb-3">
//                     <div>
//                       <input
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         placeholder="Expiration Date (MM / YY)"
//                         className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         value={cardCvc}
//                         onChange={(e) => setCardCvc(e.target.value)}
//                         placeholder="Security Code"
//                         className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       />
//                     </div>
//                   </div>

//                   {/* Name on Card */}
//                   <div className="mb-3">
//                     <label className="text-xs mb-1 block text-[#6B7280]">
//                       Name on Card
//                     </label>
//                     <input
//                       placeholder="Name on Card"
//                       className="w-full border font-urbanist font-medium border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-3 py-2 text-md placeholder-[#565656]"
//                       value={billingName}
//                       onChange={(e) => setBillingName(e.target.value)}
//                     />
//                   </div>

//                   {/* Checkbox */}
//                   <label className="flex items-center gap-2 text-sm">
//                     <input
//                       type="checkbox"
//                       checked={useShippingAsBilling}
//                       onChange={() => setUseShippingAsBilling((s) => !s)}
//                       className="accent-[#0B7AFF] h-5 w-5"
//                     />
//                     <span className="text-[#0B0B0B] text-sm">
//                       Use shipping address as billing address
//                     </span>
//                   </label>
//                 </div>
//               </div>

//               {errorMessage && (
//                 <div className="text-red-600 mt-3">{errorMessage}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={!stripe || loading}
//                 className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-8"
//               >
//                 {loading ? "Processing..." : "Pay Now"}
//               </button>
//             </form>

//             <div className="mt-8 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
//               <a href="#" className="underline text-sm font-medium">
//                 Refund Policy
//               </a>
//               <a href="#" className="underline text-sm font-medium">
//                 Privacy Policy
//               </a>
//               <a href="#" className="underline text-sm font-medium">
//                 Terms of Service
//               </a>
//               <a href="#" className="underline text-sm font-medium">
//                 Contact
//               </a>
//             </div>
//           </section>

//           {/* ---------------------- BOTTOM DROPDOWN (GIF style header, uses TOP content) ---------------------- */}
//           <div className="w-full mt-6 md:block lg:hidden">
//             <div className=" mx-auto md:mx-0">
//               {/* GIF-style header: left label, right 'Show'/'Hide' text (matches gif) */}
//               <div
//                 className="w-full flex items-center justify-between py-4  bg-white  "
//                 onClick={() => setSummaryOpenBottom((s) => !s)}
//                 aria-expanded={summaryOpenBottom}
//               >
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-semibold">Order summary</span>
//                 </div>

//                 <button
//                   type="button"
//                   className="flex items-center gap-2 text-sm text-[#6B7280] hover:underline"
//                 >
//                   <span>{summaryOpenBottom ? "Hide" : "Show"}</span>
//                   {/* small chevron to mirror gif feel */}
//                   {summaryOpenBottom ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </button>
//               </div>

//               <div
//                 ref={bottomRef}
//                 style={{
//                   maxHeight: summaryOpenBottom
//                     ? `${bottomContentHeight}px`
//                     : "0px",
//                   transition: "max-height 0.35s ease",
//                   overflow: "hidden",
//                 }}
//                 className={summaryOpenBottom ? "mt-3" : ""}
//               >
//                 <div ref={bottomContentRef}>
//                   {/* Use the exact same content as top dropdown (item, discount, totals) */}
//                   <div className="bg-white font-urbanist pt-3 rounded ">
//                     {/* ITEM */}
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

//                     {/* DISCOUNT */}
//                     <div className="mt-4">
//                       <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                         <input
//                           placeholder="Discount Code"
//                           className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
//                         />
//                         <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap">
//                           Apply
//                         </button>
//                       </div>
//                     </div>

//                     {/* SUMMARY TOTALS */}
//                     <div className="mt-4">
//                       <div className="flex justify-between py-2">
//                         <span className="text-[#565656] font-semibold">
//                           Subtotal
//                         </span>
//                         <span className="font-semibold text-[#565656] text-md">
//                           ${order.subtotal.toFixed(2)}
//                         </span>
//                       </div>

//                       <div className="flex justify-between py-2">
//                         <span className="text-[#0B0B0B] font-semibold">
//                           Shipping
//                         </span>
//                         <span className="text-[#565656] font-semibold">
//                           Enter Shipping Address
//                         </span>
//                       </div>

//                       <div className="flex justify-between py-2">
//                         <span className="text-2xl font-semibold">Total</span>
//                         <span className="text-xl font-semibold">
//                           $
//                           {(
//                             order.subtotal +
//                             order.shipping -
//                             order.discount
//                           ).toFixed(2)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ---------------------- END BOTTOM DROPDOWN ---------------------- */}
//         </div>

//         {/* ---------------------- RIGHT SUMMARY SECTION (desktop) ---------------------- */}
//         <div className="w-full hidden  border-l font-urbanist border-[#CCCCCC] lg:block order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
//           <aside className="lg:w-[70%] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative">
//             {/* ITEM with badge */}
//             <div className="flex items-center  gap-4">
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

//               <div className="flex justify-between items-start gap-9 md:gap-7 lg:gap-5 xl:gap-8  w-full">
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

//             {/* DISCOUNT - responsive: stack on small, row on md+ */}
//             <div className="mt-5">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                 <input
//                   placeholder="Discount Code"
//                   className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"
//                 />
//                 <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap">
//                   Apply
//                 </button>
//               </div>
//             </div>

//             {/* SUMMARY */}
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
//         </div>
//       </main>

//       {/* SUCCESS POPUP */}
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
import {
  CardNumberElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ews from "../../assets/images/ews.png";
import { ChevronDown, ChevronUp, Handbag } from "lucide-react";
import { NavLink } from "react-router";
import product1 from "../../assets/images/product1.png";
import payoption1 from "../../assets/images/payoption1.png";
import payoption2 from "../../assets/images/payoption2.png";
import payoption4 from "../../assets/images/payoption4.png";
import payoption5 from "../../assets/images/payoption5.png";

/* GIF file you provided (local): /mnt/data/Checkout-elitewineselections-GoogleChrome2025-11-2523-24-53-ezgif.com-video-to-gif-converter.gif */

const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

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
  const [billingName, setBillingName] = useState("");
  const [address, setAddress] = useState({
    line1: "",
    city: "",
    state: "",
    postal_code: "",
    country: "US",
  });

  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Top dropdown (unchanged)
  const [summaryOpenTop, setSummaryOpenTop] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);
  const topContentRef = useRef<HTMLDivElement | null>(null);
  const [topContentHeight, setTopContentHeight] = useState(0);
  useEffect(() => {
    if (topContentRef.current) {
      setTopContentHeight(topContentRef.current.scrollHeight);
    }
  }, [summaryOpenTop]);

  // Bottom GIF-style dropdown (only product row inside)
  const [summaryOpenBottom, setSummaryOpenBottom] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const bottomContentRef = useRef<HTMLDivElement | null>(null);
  const [bottomContentHeight, setBottomContentHeight] = useState(0);
  useEffect(() => {
    if (bottomContentRef.current) {
      setBottomContentHeight(bottomContentRef.current.scrollHeight);
    }
  }, [summaryOpenBottom]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet.");
      return;
    }

    setLoading(true);

    try {
      const resp = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currency: order.currency,
          items: order.items,
          customer_email: email,
          shipping: {
            name: billingName,
            address,
          },
        }),
      });

      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message || "Failed to create payment intent");

      const clientSecret = data.clientSecret as string;

      const cardNumberEl = elements.getElement(CardNumberElement);
      if (!cardNumberEl) throw new Error("Card number element not found");

      const confirmResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberEl,
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
      });

      if ((confirmResult as any).error) {
        setErrorMessage((confirmResult as any).error.message || "Payment failed");
        setLoading(false);
        return;
      }

      if ((confirmResult as any).paymentIntent?.status === "succeeded") setSuccess(true);
      else setErrorMessage("Payment processing. Please check your email for confirmation.");
    } catch (err: any) {
      setErrorMessage(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B0B0B]">
      {/* HEADER */}
      <header className="w-full border-b border-[#CCCCCC] bg-white py-2.5 flex justify-center">
        <div className="w-[95%] md:w-[70%] flex justify-between items-center">
          <div className="flex flex-col items-center gap-2">
            <img src={ews} className="w-[70px] h-[60px]" />
            <p className="text-[#641026] text-[12px]">
              Pure Terroir. <span className="text-[#641026]">Zero Compromise.</span>
            </p>
          </div>

          <NavLink to="/cartDetails">
            <Handbag className="h-10 text-[#005BD1] cursor-pointer" />
          </NavLink>
        </div>
      </header>

      {/* LAYOUT */}
      <main className="w-full flex flex-col lg:flex-row items-start min-h-screen">
        {/* TOP DROPDOWN (original) - visible sm+md, hidden lg */}
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

              <span className="text-md font-semibold">${order.subtotal.toFixed(2)}</span>
            </button>

            <div
              ref={topRef}
              style={{
                maxHeight: summaryOpenTop ? `${topContentHeight}px` : "0px",
                transition: "max-height 0.35s ease",
                overflow: "hidden",
              }}
              className={summaryOpenTop ? "mt-4" : ""}
            >
              <div ref={topContentRef}>
                <div className="bg-[#F8F8F8] font-urbanist p-0 md:px-4 py-4 rounded">
                  {/* ITEM (same as before) */}
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

                  {/* Top dropdown keeps discount/subtotal/shipping/total (unchanged) */}
                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <input
                        placeholder="Discount Code"
                        className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full"/>
                      <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between py-2">
                      <span className="text-[#565656] font-semibold">Subtotal</span>
                      <span className="font-semibold text-[#565656] text-md">${order.subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between py-2">
                      <span className="text-[#0B0B0B] font-semibold">Shipping</span>
                      <span className="text-[#565656] font-semibold">Enter Shipping Address</span>
                    </div>

                    <div className="flex justify-between py-2">
                      <span className="text-2xl font-semibold">Total</span>
                      <span className="text-xl font-semibold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT FORM (main) */}
        <div className="ms-2.5 order-2 lg:order-1 md:ms-28 lg:ms-28 xl:ms-61 xl:w-[86%] bg-white pe-3 md:pe-28 lg:px-10 xl:pe-30 py-10 lg:min-h-screen lg:overflow-y-auto items-stretch font-urbanist">
          {/* CONTACT */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B]">Contact</h3>
              <span className="text-sm underline">Sign In</span>
            </div>

            <input
              placeholder="Email or Mobile Phone Number"
              className="w-full border border-gray-200 font-medium rounded px-3 py-3 text-md  placeholder-[#565656]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="flex items-center gap-2 mt-4 text-sm">
              <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
              <span>Email me with news and offers</span>
            </label>
          </section>

          {/* DELIVERY */}
          <section className="mb-8">
            <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-4">Delivery</h3>

            <select className="w-full border border-gray-200 rounded-lg px-3 py-4">
              <option>United States</option>
              <option>United Kingdom</option>
            </select>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input placeholder="First Name" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" />
              <input placeholder="Last Name" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" />
            </div>

            <input
              placeholder="Address"
              className="w-full border font-medium border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]"
              onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
            />

            <input placeholder="Apartment, Suite, Etc. (Optional)" className="w-full border border-gray-200 rounded-lg px-3 py-3 mt-3 placeholder-[#565656]" />

            <div className="grid grid-cols-4 gap-3 mt-3">
              <input placeholder="City" className="col-span-2 border border-gray-200  font-medium rounded-lg px-3 py-3 placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))} />
              <select className="border border-gray-200 rounded-lg px-3 py-3  placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, state: e.target.value }))}>
                <option>State</option>
                <option>CA</option>
              </select>
              <input placeholder="ZIP Code" className="border border-gray-200 font-medium rounded-lg px-3 py-3 placeholder-[#565656]" onChange={(e) => setAddress((p) => ({ ...p, postal_code: e.target.value }))} />
            </div>

            <label className="flex items-center gap-2 mt-5 text-sm">
              <input type="checkbox" className="accent-[#E5C97A] h-5 w-5" />
              <span>Save this information for next time</span>
            </label>
          </section>

          {/* SHIPPING METHOD */}
          <section className="mb-8">
            <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">Shipping Method</h3>
            <div className="bg-gray-50 rounded-lg px-3 py-3 text-[#565656]">Enter your shipping address to view available shipping methods.</div>
          </section>

          {/* PAYMENT */}
          <section className="mt-6">
            <h3 className="font-semibold font-urbanist text-2xl text-[#0B0B0B] mb-3">Payment</h3>
            <p className="text-[#565656] mb-4">All transactions are secure and encrypted.</p>

            {/* Keep the form open — we'll place the Pay Now button AFTER the bottom dropdown */}
            <form onSubmit={handleSubmit}>
              <div className="rounded-lg overflow-hidden bg-[#F5F6FF] border border-gray-300 ">
                <div className="flex items-center justify-between !border !border-[#005BD1] px-4 py-2 bg-transparent">
                  <div className="text-sm font-medium">Credit Card</div>
                  <div className="flex gap-2">
                    <img src={payoption1} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
                    <img src={payoption2} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
                    <img src={payoption4} className="w-[34px] md:w-[38px] h-[20px]" alt="" />
                    <img src={payoption5} className="w-[34px] md:w-[42px] h-[24px]" alt="" />
                  </div>
                </div>

                <div className="p-4 bg-[#F4F4F4] border-t border-gray-100 font-urbanist">
                  {/* Card Number (placeholder input kept) */}
                  <div className="mb-3">
                    <input
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="Card Number"
                      className="w-full border bg-[#FFFFFF] font-medium border-[#CCCCCC] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="Expiration Date (MM / YY)"
                      className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                    />
                    <input
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      placeholder="Security Code"
                      className="w-full border font-medium border-[#CCCCCC] bg-[#FFFFFF] font-urbanist rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-xs mb-1 block text-[#6B7280]">Name on Card</label>
                    <input
                      placeholder="Name on Card"
                      className="w-full border font-urbanist font-medium border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-3 py-2 text-md placeholder-[#565656]"
                      value={billingName}
                      onChange={(e) => setBillingName(e.target.value)}
                    />
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={useShippingAsBilling} onChange={() => setUseShippingAsBilling((s) => !s)} className="accent-[#0B7AFF] h-5 w-5" />
                    <span className="text-[#0B0B0B] font-urbanist font-medium text-md">Use shipping address as billing address</span>
                  </label>

    
                </div>


              </div>

              {/* Display any payment errors here (stays inside form) */}
              {errorMessage && <div className="text-red-600 mt-3">{errorMessage}</div>}

           

              {/* === BOTTOM DROPDOWN (GIF-style header). Only product row is revealed inside === */}
              <div className="w-full mt-6 md:block lg:hidden">
                <div className="mx-auto">
                  {/* GIF-style header: left label, right 'Show'/'Hide' text */}
                  <div
                    className="w-full flex items-center justify-between py-3  bg-white  cursor-pointer"
                    onClick={() => setSummaryOpenBottom((s) => !s)}
                    aria-expanded={summaryOpenBottom}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold">Order summary</span>
                    </div>

                    <div className="flex items-center gap-2 text-md text-[#0B0B0B]">
                      <span>{summaryOpenBottom ? "Hide" : "Show"}</span>
                      {summaryOpenBottom ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>

                  <div
                    ref={bottomRef}
                    style={{
                      maxHeight: summaryOpenBottom ? `${bottomContentHeight}px` : "0px",
                      transition: "max-height 0.35s ease",
                      overflow: "hidden",
                    }}
                    className={summaryOpenBottom ? "mt-3" : ""}
                  >
                    <div ref={bottomContentRef}>
                      {/* ONLY the product row should be inside the opened bottom dropdown (per GIF) */}
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
                    {/* Discount row */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <input placeholder="Discount Code" className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] rounded-lg px-4 py-2" />
                      <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">Apply</button>
                    </div>

                    {/* Totals (outside bottom dropdown) */}
                    <div className="mt-4">
                      <div className="flex justify-between py-2">
                        <span className="text-[#565656] font-semibold">Subtotal</span>
                        <span className="font-semibold text-[#565656] text-md">${order.subtotal.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between py-2">
                        <span className="text-[#0B0B0B] font-semibold">Shipping</span>
                        <span className="text-[#565656] font-semibold">Enter Shipping Address</span>
                      </div>

                      <div className="flex justify-between py-2">
                        <span className="text-2xl font-semibold">Total</span>
                        <span className="text-xl font-semibold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* === Place Pay Now button and footer links BELOW bottom dropdown (sm+md) === */}
              <div className="w-full md:block lg:hidden">
                <div className=" mx-auto">
                  <button type="submit" disabled={!stripe || loading} className="w-full bg-[#005BD1] text-white py-3 rounded-xl font-semibold mt-2 cursor-pointer">
                    {loading ? "Processing..." : "Pay Now"}
                  </button>

                  <div className="mt-6 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
                    <a href="#" className="underline text-sm font-medium">Refund Policy</a>
                    <a href="#" className="underline text-sm font-medium">Privacy Policy</a>
                    <a href="#" className="underline text-sm font-medium">Terms of Service</a>
                    <a href="#" className="underline text-sm font-medium">Contact</a>
                  </div>
                </div>
              </div>
            </form>

                                <div className="w-full hidden lg:block">
                <div className="mt-6 mx-auto">
                  <button type="submit" disabled={!stripe || loading} className="w-full  bg-[#005BD1] text-white py-3 rounded-xl font-semibold cursor-pointer">
                    {loading ? "Processing..." : "Pay Now"}
                  </button>

                  <div className="mt-6 text-xs text-[#005BD1] flex gap-3 border-t border-[#CCCCCC] pt-5">
                    <a href="#" className="underline text-sm font-medium">Refund Policy</a>
                    <a href="#" className="underline text-sm font-medium">Privacy Policy</a>
                    <a href="#" className="underline text-sm font-medium">Terms of Service</a>
                    <a href="#" className="underline text-sm font-medium">Contact</a>
                  </div>
                </div>
              </div>
          </section>
        </div>

        {/* RIGHT (desktop summary) */}
        <div className="w-full hidden border-l font-urbanist border-[#CCCCCC] lg:block order-1 lg:order-2 lg:min-h-screen bg-[#F8F8F8] flex lg:sticky lg:top-0">
          <aside className="lg:w-[70%] px-3 md:px-28 lg:px-5 py-10 overflow-y-auto relative">
            {/* ITEM with badge */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 bg-white border border-[#CCCCCC] rounded-lg flex items-center justify-center">
                  <img src={product1} className="max-h-20" />
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

              <div className="flex justify-between items-start gap-9 md:gap-7 lg:gap-5 xl:gap-8 w-full">
                <div className="flex-1">
                  <p className="text-sm md:text-md xl:text-md font-semibold text-[#641026]">{order.items[0].name}</p>
                </div>
                <p className="text-md font-semibold">${order.items[0].price.toFixed(2)}</p>
              </div>
            </div>

            {/* DISCOUNT - desktop */}
            <div className="mt-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input placeholder="Discount Code" className="flex-1 border border-[#CCCCCC] bg-[#FFFFFF] placeholder:text-[#0B0B0B] rounded-lg px-4 py-2 text-base w-full" />
                <button className="bg-[#EED291] px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer">Apply</button>
              </div>
            </div>

            {/* SUMMARY - desktop */}
            <div className="mt-6">
              <div className="flex justify-between py-2">
                <span className="text-[#565656] font-semibold">Subtotal</span>
                <span className="font-semibold text-[#565656] text-md">${order.subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-[#0B0B0B] font-semibold">Shipping</span>
                <span className="text-[#565656] font-semibold">Enter Shipping Address</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-2xl font-semibold">Total</span>
                <span className="text-2xl font-semibold">${(order.subtotal + order.shipping - order.discount).toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-2">Payment successful</h2>
            <p className="mb-4">Thank you! Your payment was processed successfully.</p>
            <button onClick={() => { setSuccess(false); window.location.href = "/"; }} className="bg-[#0B7AFF] text-white px-6 py-2 rounded">Continue shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

const cardStyle: any = {
  style: {
    base: {
      fontSize: "14px",
      color: "#0B0B0B",
      fontFamily: "inherit",
      "::placeholder": { color: "#9CA3AF" },
    },
    invalid: { color: "#9e2146" },
  },
};
