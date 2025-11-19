// import { Heart, Minus, Plus } from "lucide-react";
// import product from "../../assets/images/product.png";
// import productDetails1 from "../../assets/images/productDetails1.png";
// import productDetails2 from "../../assets/images/productDetails2.png";
// import productDetails3 from "../../assets/images/productDetails3.png";
// import productDetails4 from "../../assets/images/productDetails4.png";
// import productDetails5 from "../../assets/images/productDetails5.png";
// import share from "../../assets/images/share.png";
// import paymentcard from "../../assets/images/paymentcard.png";
// import shipping1 from "../../assets/images/shipping1.png";
// import shipping2 from "../../assets/images/shipping2.png";
// import { useEffect, useState, useRef } from "react";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import relatedproduct1 from "../../assets/images/relatedproduct1.png";
// import relatedproduct2 from "../../assets/images/relatedproduct2.png";
// import verietyImg from "../../assets/images/variety.png";
// import ProductsChild from "./productsChild";
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const [modalContent, setModalContent] = useState(null); // for mobile modal

//   const { productId } = useParams();
//   const rightRef = useRef(null);
//   const leftRef = useRef(null);

//   const [lockScroll, setLockScroll] = useState(false);

//   const tabs = [
//     { id: "description", label: "Description" },
//     { id: "additional", label: "Additional Information" },
//     { id: "shipping", label: "Shipping & Return" },
//   ];

//   const openModal = (id) => {
//     setModalContent(id);
//     document.body.style.overflow = "hidden"; // prevent scroll behind modal
//   };

//   const closeModal = () => {
//     setModalContent(null);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && modalContent) {
//         closeModal();
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [modalContent]);

//   const relatedProductsList = [
//     {
//       productImg: relatedproduct1,
//       productName: "Reverse Gewurztraminer Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Gewurztraminer",
//     },

//     {
//       productImg: relatedproduct2,
//       productName: "Reverse Rose (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Rose",
//     },

//     {
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//   ];

//   const productsDetails = [
//     {
//       id: 1,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       flavour: "Merlot",
//     },
//     {
//       id: 2,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product2,
//       productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Pinot Noir",
//     },
//     {
//       id: 3,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product3,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       id: 4,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product4,
//       productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Gewurztraminer",
//     },
//     {
//       id: 5,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product5,
//       productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Rosé",
//     },
//     {
//       id: 6,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product6,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$27.16",
//       flavour: "Riesling",
//     },
//     {
//       id: 7,
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       id: 8,
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//     {
//       id: 9,
//       type: "Château Clos de Boüard",
//       productImg: fourthtabproduct1,
//       productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       id: 10,
//       type: "Château Clos de Boüard",
//       productImg: fourthtabproduct2,
//       productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//     {
//       id: 11,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct1,
//       productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$33.61",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       id: 12,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct2,
//       productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//     {
//       id: 13,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct3,
//       productName: "Matthias Anton Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Rosé",
//     },
//     {
//       id: 14,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct4,
//       productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Pinot Grigio",
//     },
//     {
//       id: 15,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct5,
//       productName:
//         "Matthias Anton Blanc de Blancs Sparkling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//   ];

//   useEffect(() => {
//   const handleScroll = () => {
//     if (!leftRef.current || !rightRef.current) return;

//     const left = leftRef.current;
//     const right = rightRef.current;

//     const leftTop = left.getBoundingClientRect().top;
//     const leftBottom = left.getBoundingClientRect().bottom;
//     const rightHeight = right.scrollHeight;
//     const leftHeight = left.offsetHeight;

//     // If right content is shorter than left, no scrolling is needed
//     if (rightHeight <= leftHeight) {
//       right.style.overflowY = "visible";
//       right.style.maxHeight = "none";
//       return;
//     }

//     // When left section has not reached the top of viewport → right does not scroll
//     if (leftTop > 0) {
//       right.style.overflowY = "hidden";
//       right.style.maxHeight = `${leftHeight}px`;
//       right.scrollTop = 0;
//       return;
//     }

//     // When right reaches its maximum scrollable limit
//     if (leftBottom <= rightHeight - right.scrollTop) {
//       right.style.overflowY = "hidden";
//       return;
//     }

//     // Enable internal scrolling
//     right.style.overflowY = "auto";
//     right.style.maxHeight = `${leftHeight}px`;
//   };

//   window.addEventListener("scroll", handleScroll);
//   window.addEventListener("resize", handleScroll);

//   handleScroll();
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//     window.removeEventListener("resize", handleScroll);
//   };
// }, []);

//   const currentProduct = productsDetails.find(
//     (product) => product.id === Number(productId)
//   );

//   return (
//     <>
//       <div className="bg-[url('images/productDetailsImg.png')]  h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#FFFFFF] ">
//             Home <span className="font-Poppins">&gt; </span>Shop{" "}
//             <span className="font-Poppins"> &gt;</span> Product Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
//             Product detail
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%]  mx-auto ">
//           <div className="  flex flex-col py-[55px] xl:py-[100px] md:flex-row gap-6 xl:gap-18 justify-between md:items-start">
//             <div
//               className="flex flex-col gap-4 xl:gap-5   Justify-center w-full md:w-auto md:flex-1"
//               ref={leftRef}
//             >
//               <div className="w-full flex flex-col justify-center md:flex-1 border border-[#CCCCCC] h-[849px] py-5">
//                 <img
//                   src={currentProduct?.productImg}
//                   alt={currentProduct?.productName}
//                   alt=""
//                   className="object-contain object-center w-full h-[788px]"
//                 />
//               </div>

//               <div className="w-full flex justify-center">
//                 <img
//                   src={currentProduct?.productImg}
//                   alt={currentProduct?.productName}
//                   className=" w-[160px] border border-[#CCCCCC] py-2  h-[160px] object-contain"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-1 xl:gap-6 w-full md:flex-1">
//          <div
//   ref={rightRef}
//   className="flex flex-col gap-1 xl:gap-3 w-full md:flex-1 overflow-hidden"
// >

//                 <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
//                   {currentProduct?.productName}
//                 </p>
//                 <p className="font-urbanist font-semibold text-md text-[#0B0B0B] pb-3">
//                   <span className="capitalize ">De</span>-
//                   <span>Alcoholized</span>
//                 </p>
//                 <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
//                   {currentProduct?.price}
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-5  font-urbanist space-y-0.5">
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails1} alt="alcohol" />
//                   <p>
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg">
//                       Alcohol &lt;
//                     </span>
//                     <span> 0.5%</span> abv
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails2} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"RESIDUAL SUGAR".toLowerCase()}
//                     </span>
//                     <span> 20.9</span>G/L
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails3} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"GRAPE VARIETY".toLowerCase()}
//                     </span>
//                     <span className=" capitalize">
//                       {" "}
//                       {"MERLOT".toLowerCase()}
//                     </span>
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails4} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"TOTAL ACIDITY".toLowerCase()}
//                     </span>
//                     <span> 5.5</span>G/L
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails5} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"MATURATION".toLowerCase()}
//                     </span>
//                     <span className=" capitalize">
//                       {" "}
//                       {"IN WOODEN BARRELS".toLowerCase()}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-3 flex flex-col gap-3">
//                 <p className="font-urbanist text-sm  md:text-base lg:text-md ">
//                   <span className="text-[#641026] font-semibold pe-1">
//                     Sensory Characteristics
//                   </span>
//                   This merlot presents a deep, appealing color that is nearly
//                   indistinguishable From a conventional red wine. The nose
//                   reveals a spicy-fruity bouquet with notes of dried berries and
//                   a Hint of red pepper.
//                 </p>

//                 <p className="font-urbanist  text-sm  md:text-base lg:text-md  ">
//                   <span className="text-[#641026] font-semibold pe-1">
//                     Tasting Notes
//                   </span>
//                   A smooth, fruit-driven merlot with deep notes of dark berries,
//                   plum, and a hint of spice.On the palate, it's soft and
//                   rounded, with gentle tannins and a pleasantly dry finish.A
//                   refined and full-bodied red - without the alcohol.
//                 </p>

//                 <p className="text-[#641026] font-urbanist font-semibold  text-sm  md:text-base lg:text-md  ">
//                   Serving Suggestions
//                 </p>

//                 <ul className="flex flex-col gap-1 font-urbanist font-regular text-sm  md:text-base lg:text-md  text-[#0B0B0B] ps-4 mb-2 list-disc list-inside">
//                   <li>Best enjoyed slightly chilled at 14-16°C / 57.2-59°F.</li>
//                   <li>
//                     Pair with roasted vegetables, grilled dishes, or hearty
//                     pasta
//                   </li>
//                   <li>
//                     Perfect for mindful sipping, dinners without compromise, or
//                     casual evenings
//                   </li>
//                 </ul>

//                 <div className="flex flex-col gap-3">
//                   <p className="font-urbanist text-[#0B0B0B] text-sm  md:text-base lg:text-md ">
//                     <span className="text-[#641026] font-semibold">
//                       Serving temperature
//                     </span>{" "}
//                     10°-12° c
//                   </p>
//                   <p className="font-urbanist text-[#0B0B0B]  text-sm  md:text-base lg:text-md ">
//                     <span className="text-[#641026] font-semibold">
//                       Bottle Size
//                     </span>{" "}
//                     0.75l / 25.4 oz
//                   </p>
//                   <p className="font-urbanist text-[#0B0B0B] text-sm  md:text-base lg:text-md ">
//                     <span className="text-[#641026] font-semibold">
//                       Made in Germany
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-4 font-urbanist">
//                 <p className="font-semibold text-md text-[#0B0B0B]">Quantity</p>
//                 <button className="flex items-center gap-7 px-6 py-1.5 font-semibold rounded-full border border-[#EED291] w-fit">
//                   <Minus className="w-4 h-4 text-[#0B0B0B]" />
//                   <p className="text-[#0B0B0B] font-semibold text-xl leding-[140%]">
//                     1
//                   </p>

//                   <Plus className="w-4 h-4 text-[#0B0B0B]" />
//                 </button>

//                 <div className="flex gap-4 items-center ">
//                   <button className="font-urbanist font-semibold text-base text-[#0B0B0B] bg-[#EED291] w-full rounded-full py-3 ">
//                     BUY NOW
//                   </button>
//                   <div className="w-12 h-11 flex items-center justify-center rounded-full bg-[#EED291]">
//                     <Heart className="w-5 h-5 text-[#0B0B0B]" />
//                   </div>

//                   <div>
//                     <img src={share} className="w-6 h-6" alt="" />
//                   </div>
//                 </div>

//                 <button className="font-urbanist font-semibold text-base border border-[#EED291] text-[#0B0B0B] bg-transparent w-full rounded-full py-2.5 mb-2">
//                   BUY IT NOW
//                 </button>

//                 <div>
//                   <img src={paymentcard} alt="" className="h-[31px] " />
//                 </div>

//                 <div className="flex flex-col font-[urbanist] font-medium gap-2">
//                   <div className="flex items-center gap-5">
//                     <img
//                       src={shipping1}
//                       className="w-[40px] h-[40px]  "
//                       alt=""
//                     />
//                     <p className="text-[#565656] text-md">
//                       Flat Fee $15 nationwide for 3-bottle bundles
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img
//                       src={shipping2}
//                       className="w-[40px] h-[40px]  "
//                       alt=""
//                     />
//                     <p className="text-[#565656] text-md">
//                       Free shipping at $99+
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* shipping Tab view */}

//           <div>
//             {/* ===================== Desktop Tabs ===================== */}
//             <div className="hidden md:block">
//               <div className="w-full border-b flex justify-center border-gray-300">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-4 py-2 pb-5 text-md font-urbanist font-semibold cursor-pointer  ${
//                       activeTab === tab.id
//                         ? "border-b-2 border-black text-black"
//                         : "text-[#0B0B0B]"
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-4 text-md text-gray-700 leading-relaxed font-urbanist font-semibold">
//                 {activeTab === "description" && (
//                   <p>
//                     <strong>Sensorik:</strong> This merlot presents a deep,
//                     appealing color that is nearly indistinguishable from a
//                     conventional red wine. The nose reveals a spicy-fruity
//                     bouquet with notes of dried berries and a hint of red
//                     pepper. On the palate, it is juicy with cherry-like flavors
//                     supported by vibrant acidity. The body remains lean and
//                     completely free of tannins. The finish is smooth and
//                     well-rounded — also enjoyable lightly chilled in summer.{" "}
//                     <br />– A fitting companion to salads, picnics, or mild
//                     cheeses.
//                   </p>
//                 )}

//                 {activeTab === "additional" && (
//                   <div>
//                     <h3 className="font-semibold mb-2">
//                       Product Specifications
//                     </h3>
//                     <ul className="list-disc list-inside mb-4">
//                       <li>Volume: 750ml</li>
//                       <li>Alcohol Content: 13.5%</li>
//                       <li>Serving Temperature: 16–18°C</li>
//                       <li>Closure Type: Natural Cork</li>
//                     </ul>
//                     <h3 className="font-semibold mb-2">Storage Instructions</h3>
//                     <p>
//                       Store in a cool, dark place away from direct sunlight.
//                       Best consumed within 2 years of purchase for optimal
//                       freshness.
//                     </p>
//                   </div>
//                 )}

//                 {activeTab === "shipping" && (
//                   <div>
//                     <h3 className="font-semibold mb-2">Returns Policy</h3>
//                     <p className="mb-4">
//                       You may return most new, unopened items within 30 days of
//                       delivery for a full refund. We'll also pay the return
//                       shipping costs if the return is a result of our error (you
//                       received an incorrect or defective item, etc.).
//                     </p>
//                     <p className="mb-4">
//                       You should expect to receive your refund within four weeks
//                       of giving your package to the return shipper; however, in
//                       many cases you will receive a refund more quickly.
//                     </p>
//                     <p>
//                       If you need to return an item, simply login to your
//                       account, view your order, and click the "Return Item(s)"
//                       button. We'll notify you via e-mail once we've processed
//                       the returned item.
//                     </p>

//                     <h3 className="font-semibold mb-2 mt-5">Shipping</h3>

//                     <p className="mb-4">
//                       We can ship to virtually any address in the world. Note
//                       that there are restrictions on some products, and some
//                       products cannot be shipped to international destinations.
//                     </p>
//                     <p className="mb-4">
//                       When you place an order, we will estimate shipping and
//                       delivery dates for you based on the availability of your
//                       items and the shipping options you choose. Depending on
//                       the shipping provider you choose, shipping date estimates
//                       may appear on the shipping quotes page.
//                     </p>
//                     <p>
//                       Please also note that the shipping rates for many items we
//                       sell are weight-based. The weight of any such item can be
//                       found on its detail page. To reflect the policies of the
//                       shipping companies we use, all weights will be rounded up
//                       to the next full pound.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* ===================== Mobile View ===================== */}
//             <div className="block md:hidden space-y-2">
//               {tabs.map((tab) => (
//                 <div key={tab.id} className="border-b border-gray-200">
//                   <button
//                     onClick={() => openModal(tab.id)}
//                     className="flex justify-between items-center w-full py-3 text-base text-urbanist font-semibold text-left"
//                   >
//                     <span>{tab.label}</span>
//                     <span className="text-2xl">›</span>
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* ===================== Mobile Modal ===================== */}
//             {modalContent && (
//               <div className="fixed inset-0 bg-white z-50 overflow-y-auto font-urbanist">
//                 <div className="flex justify-between items-center px-4 py-1.5 border-b border-gray-300 sticky top-0 bg-[#eed291]">
//                   <h2 className="text-lg font-medium uppercase font-urbanist">
//                     {modalContent === "description" && "Description"}
//                     {modalContent === "additional" && "Additional Information"}
//                     {modalContent === "shipping" && "Shipping & Return"}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="text-4xl pb-2 font-light"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <div className="p-5 text-sm text-gray-700 leading-relaxed">
//                   {modalContent === "description" && (
//                     <>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Origin & Winery
//                       </h3>
//                       <p className="mb-4">
//                         Produced by Weingut Lamm-Jung KG, located in Eltville am
//                         Rhein at the heart of the Rheingau — a historic region
//                         renowned for Riesling. The estate follows sustainable
//                         viticulture and specializes in varietal clarity.
//                       </p>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Character
//                       </h3>
//                       <p>
//                         Classic Riesling notes of citrus and stone fruits. The
//                         wine shows fruit-driven freshness with a charming
//                         residual sweetness, delivering balance and easy
//                         drinkability. The vibrant acidity keeps the palate
//                         lively, while the gentle sweetness adds charm and
//                         approachability.
//                       </p>
//                     </>
//                   )}

//                   {modalContent === "additional" && (
//                     <>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Product Specifications
//                       </h3>
//                       <ul className="list-disc list-inside mb-4">
//                         <li>Volume: 750ml</li>
//                         <li>Alcohol Content: 13.5%</li>
//                         <li>Serving Temperature: 16–18°C</li>
//                         <li>Closure Type: Natural Cork</li>
//                       </ul>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Storage Instructions
//                       </h3>
//                       <p className="mb-4">
//                         Store in a cool, dark place away from direct sunlight.
//                         Best consumed within 2 years of purchase for optimal
//                         freshness.
//                       </p>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Tasting Notes
//                       </h3>
//                       <p>
//                         A medium-bodied red wine with a pleasant mix of cherry,
//                         plum, and a touch of vanilla oak, creating a balanced
//                         and smooth profile perfect for casual dinners.
//                       </p>
//                     </>
//                   )}

//                   {modalContent === "shipping" && (
//                     <>
//                       <h3 className="font-semibold text-xl text-[#0b0b0b] mb-4">
//                         Returns Policy
//                       </h3>
//                       <p className="mb-4">
//                         You may return most new, unopened items within 30 days
//                         of delivery for a full refund. We'll also pay the return
//                         shipping costs if the return is a result of our error
//                         (you received an incorrect or defective item, etc.).
//                       </p>
//                       <p className="mb-4">
//                         You should expect to receive your refund within four
//                         weeks of giving your package to the return shipper;
//                         however, in many cases you will receive a refund more
//                         quickly.
//                       </p>
//                       <p>
//                         If you need to return an item, simply login to your
//                         account, view your order, and click the "Return Item(s)"
//                         button. We'll notify you via e-mail once we've processed
//                         the returned item.
//                       </p>

//                       <h3 className="font-semibold mb-4 mt-5 text-xl text-[#0b0b0b]">
//                         Shipping
//                       </h3>

//                       <p className="mb-4">
//                         We can ship to virtually any address in the world. Note
//                         that there are restrictions on some products, and some
//                         products cannot be shipped to international
//                         destinations.
//                       </p>
//                       <p className="mb-4">
//                         When you place an order, we will estimate shipping and
//                         delivery dates for you based on the availability of your
//                         items and the shipping options you choose. Depending on
//                         the shipping provider you choose, shipping date
//                         estimates may appear on the shipping quotes page.
//                       </p>
//                       <p>
//                         Please also note that the shipping rates for many items
//                         we sell are weight-based. The weight of any such item
//                         can be found on its detail page. To reflect the policies
//                         of the shipping companies we use, all weights will be
//                         rounded up to the next full pound.
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="w-[95%] xl:w-[80%] mx-auto py-[55px]  xl:py-[100px]">
//             <div className="flex flex-col items-center justify-between gap-8 text-center w-full">
//               <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase leading-tight">
//                 Related Products
//               </p>

//               <div className="grid w-full gap-8 md:gap-8 xl:gap-10  grid-cols-2 md:grid-cols-3 transition-all duration-500">
//                 {relatedProductsList.map((product, index) => (
//                   <ProductsChild key={index} product={product} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;

// import { Heart, Minus, Plus } from "lucide-react";
// import productDetails1 from "../../assets/images/productDetails1.png";
// import productDetails2 from "../../assets/images/productDetails2.png";
// import productDetails3 from "../../assets/images/productDetails3.png";
// import productDetails4 from "../../assets/images/productDetails4.png";
// import productDetails5 from "../../assets/images/productDetails5.png";
// import share from "../../assets/images/share.png";
// import paymentcard from "../../assets/images/paymentcard.png";
// import shipping1 from "../../assets/images/shipping1.png";
// import shipping2 from "../../assets/images/shipping2.png";
// import { useEffect, useState, useRef } from "react";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import relatedproduct1 from "../../assets/images/relatedproduct1.png";
// import relatedproduct2 from "../../assets/images/relatedproduct2.png";
// import verietyImg from "../../assets/images/variety.png";
// import ProductsChild from "./productsChild";
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const [modalContent, setModalContent] = useState(null);

//   const { productId } = useParams();
//   const rightRef = useRef(null);
//   const leftRef = useRef(null);

//   const openModal = (id) => {
//     setModalContent(id);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setModalContent(null);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && modalContent) closeModal();
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [modalContent]);

//   /** --------------------------------------------
//    *  NEW SCROLL LOGIC (Working)
//    * --------------------------------------------*/
//   useEffect(() => {
//     const onScroll = () => {
//       if (!leftRef.current || !rightRef.current) return;

//       const left = leftRef.current;
//       const right = rightRef.current;

//       // Tailwind Breakpoint Hero Heights
//       const width = window.innerWidth;
//       let heroHeight = 320;
//       if (width >= 1280) heroHeight = 400;
//       else if (width >= 1024) heroHeight = 340;

//       const leftRect = left.getBoundingClientRect();
//       const leftTop = leftRect.top;
//       const leftHeight = left.offsetHeight;

//       const rightHeight = right.scrollHeight;

//       // If right is smaller → no scroll needed
//       if (rightHeight <= leftHeight) {
//         right.style.overflowY = "visible";
//         right.style.maxHeight = "none";
//         return;
//       }

//       // Before left touches hero bottom → NO SCROLL
//       if (leftTop > heroHeight) {
//         right.style.overflowY = "hidden";
//         right.style.maxHeight = `${leftHeight}px`;
//         right.scrollTop = 0;
//         return;
//       }

//       // Determine when right should stop scrolling
//       const maxScroll = rightHeight - leftHeight;
//       if (right.scrollTop >= maxScroll) {
//         right.style.overflowY = "hidden";
//         return;
//       }

//       // Enable scroll
//       right.style.overflowY = "auto";
//       right.style.maxHeight = `${leftHeight}px`;
//     };

//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("resize", onScroll);
//     onScroll();

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, []);

//   /** Product DB */
//   const productsDetails = [
//     { id: 1, type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", flavour: "Merlot" },
//     { id: 2, type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir" },
//     { id: 3, type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc" },
//     { id: 4, type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer" },
//     { id: 5, type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé" },
//     { id: 6, type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Bergdolt, Reif & Nett Reverse Riesling (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling" },
//     { id: 7, type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling DealAlcoholized (Vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", flavour: "Riesling" },
//     { id: 8, type: "KvD Strauch Sektmanufaktur", productImg: thirdtabproduct, productName: "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", flavour: "Rouge Pur" },
//     { id: 9, type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Château Clos de Boüard Sauvignon Blanc DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc" },
//     { id: 10, type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Château Clos de Boüard Rosé Sparkling DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" },
//     { id: 11, type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Matthias Anton Sauvignon Blanc (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", flavour: "Sauvignon Blanc" },
//     { id: 12, type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Matthias Anton Rosé Sparkling (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" },
//     { id: 13, type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Matthias Anton Rosé (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé" },
//     { id: 14, type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Matthias Anton Pinot Grigio (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio" },
//     { id: 15, type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Matthias Anton Blanc de Blancs Sparkling (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" },
//   ];

//   const currentProduct = productsDetails.find(
//     (product) => product.id === Number(productId)
//   );

//     const relatedProductsList = [
//     { productImg: relatedproduct1, productName: "Reverse Gewurztraminer DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer" },
//     { productImg: relatedproduct2, productName: "Reverse Rose (vegan) DealAlcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rose" },
//     { productImg: secondtabproduct, productName: "Lamm-Jung Riesling DealAlcoholized (Vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", flavour: "Riesling" },
//   ];

//   return (
//     <>
//       {/* HERO SECTION */}
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span>&gt;</span> Shop <span>&gt;</span> Product Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Product detail
//           </p>
//         </div>
//       </div>

//       {/* MAIN SECTION */}
//       <div className="w-full">
//         <div className="w-[95%] mx-auto">
//           <div className="flex flex-col md:flex-row gap-6 xl:gap-18 py-[55px] xl:py-[100px]">

//             {/* LEFT SECTION */}
//             <div ref={leftRef} className="flex flex-col gap-4 xl:gap-5 w-full md:flex-1">
//               <div className="border border-[#CCCCCC] h-[849px] py-5 flex justify-center">
//                 <img
//                   src={currentProduct?.productImg}
//                   alt={currentProduct?.productName}
//                   className="object-contain w-full h-[788px]"
//                 />
//               </div>

//               <div className="flex justify-center">
//                 <img
//                   src={currentProduct?.productImg}
//                   className="w-[160px] h-[160px] border border-[#CCCCCC] py-2 object-contain"
//                 />
//               </div>
//             </div>

//             {/* RIGHT SECTION (SCROLL WRAPPER FIXED) */}
//             <div className="flex flex-col gap-1 xl:gap-6 w-full md:flex-1 relative">
//               {/*  WRAP ALL SCROLLABLE CONTENT INSIDE rightRef */}
//               <div ref={rightRef} className="flex flex-col gap-3 w-full overflow-hidden">

//                 <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
//                   {currentProduct?.productName}
//                 </p>

//                 <p className="font-urbanist font-semibold text-md text-[#0B0B0B] pb-3">
//                   <span className="capitalize">De</span>-Alcoholized
//                 </p>

//                 <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
//                   {currentProduct?.price}
//                 </p>

//                 {/* PRODUCT INFO GRID */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-5 font-urbanist">
//                   <div className="flex items-center gap-5">
//                     <img src={productDetails1} />
//                     <p><span className="font-semibold text-[#641026]">Alcohol &lt;</span> 0.5% abv</p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img src={productDetails2} />
//                     <p><span className="font-semibold text-[#641026]">Residual Sugar</span> 20.9G/L</p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img src={productDetails3} />
//                     <p><span className="font-semibold text-[#641026]">Grape Variety</span> Merlot</p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img src={productDetails4} />
//                     <p><span className="font-semibold text-[#641026]">Total Acidity</span> 5.5G/L</p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img src={productDetails5} />
//                     <p><span className="font-semibold text-[#641026]">Maturation</span> In wooden barrels</p>
//                   </div>
//                 </div>

//                 {/* TEXT CONTENT */}
//                 <div className="mt-3 flex flex-col gap-3 font-urbanist">
//                   <p>
//                     <span className="text-[#641026] font-semibold">Sensory Characteristics:</span>
//                       This merlot presents a deep, appealing color that is nearly
//                   indistinguishable From a conventional red wine. The nose
//                   reveals a spicy-fruity bouquet with notes of dried berries and
//                   a Hint of red pepper.
//                   </p>

//                   <p>
//                     <span className="text-[#641026] font-semibold">Tasting Notes:</span>
//                                      A smooth, fruit-driven merlot with deep notes of dark berries,
//                   plum, and a hint of spice.On the palate, it's soft and
//                   rounded, with gentle tannins and a pleasantly dry finish.A
//                   refined and full-bodied red - without the alcohol.
//                   </p>

//                   <p className="text-[#641026] font-semibold">Serving Suggestions</p>

//                       <ul className="flex flex-col gap-1 font-urbanist font-regular text-sm  md:text-base lg:text-md  text-[#0B0B0B] ps-4 mb-2 list-disc list-inside">
//                   <li>Best enjoyed slightly chilled at 14-16°C / 57.2-59°F.</li>
//                   <li>
//                     Pair with roasted vegetables, grilled dishes, or hearty
//                     pasta
//                   </li>
//                   <li>
//                     Perfect for mindful sipping, dinners without compromise, or
//                     casual evenings
//                   </li>
//                 </ul>

//                   <p><span className="text-[#641026] font-semibold">Serving temperature</span> 10°-12°C</p>
//                   <p><span className="text-[#641026] font-semibold">Bottle Size</span> 0.75l</p>
//                   <p><span className="text-[#641026] font-semibold">Made in Germany</span></p>
//                 </div>

//                 {/* QUANTITY & BUTTONS */}
//                 <div className="flex flex-col gap-4 font-urbanist">
//                   <p className="font-semibold text-md">Quantity</p>

//                   <button className="flex items-center gap-7 border border-[#EED291] px-6 py-1.5 rounded-full">
//                     <Minus className="w-4 h-4" />
//                     <p className="text-xl font-semibold">1</p>
//                     <Plus className="w-4 h-4" />
//                   </button>

//                   <div className="flex gap-4">
//                     <button className="bg-[#EED291] w-full py-3 rounded-full font-semibold">
//                       BUY NOW
//                     </button>

//                     <div className="w-12 h-11 bg-[#EED291] rounded-full flex items-center justify-center">
//                       <Heart />
//                     </div>

//                     <img src={share} className="w-6 h-6" />
//                   </div>

//                   <button className="border border-[#EED291] py-2.5 rounded-full font-semibold">
//                     BUY IT NOW
//                   </button>

//                   <img src={paymentcard} className="h-[31px]" />

//                   <div className="flex flex-col gap-2 text-[#565656]">
//                     <div className="flex items-center gap-5">
//                       <img src={shipping1} className="w-[40px]" />
//                       <p>Flat Fee $15 nationwide for bundles</p>
//                     </div>

//                     <div className="flex items-center gap-5">
//                       <img src={shipping2} className="w-[40px]" />
//                       <p>Free shipping at $99+</p>
//                     </div>
//                   </div>
//                 </div>

//               </div> {/* END rightRef wrapper */}
//             </div>
//           </div>

//           {/* RELATED PRODUCTS */}
//           <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//             <div className="flex flex-col items-center gap-8 text-center">
//               <p className="font-cormorant text-[28px] lg:text-[36px] uppercase font-bold">
//                 Related Products
//               </p>

//               <div className="grid grid-cols-2 md:grid-cols-3 gap-8 xl:gap-10">
//                 {relatedProductsList.map((product, index) => (
//                   <ProductsChild key={index} product={product} />
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;



// import { Heart, Minus, Plus } from "lucide-react";
// import product from "../../assets/images/product.png";
// import productDetails1 from "../../assets/images/productDetails1.png";
// import productDetails2 from "../../assets/images/productDetails2.png";
// import productDetails3 from "../../assets/images/productDetails3.png";
// import productDetails4 from "../../assets/images/productDetails4.png";
// import productDetails5 from "../../assets/images/productDetails5.png";
// import share from "../../assets/images/share.png";
// import paymentcard from "../../assets/images/paymentcard.png";
// import shipping1 from "../../assets/images/shipping1.png";
// import shipping2 from "../../assets/images/shipping2.png";
// import { useEffect, useState, useRef } from "react";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import relatedproduct1 from "../../assets/images/relatedproduct1.png";
// import relatedproduct2 from "../../assets/images/relatedproduct2.png";
// import verietyImg from "../../assets/images/variety.png";
// import ProductsChild from "./productsChild";
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const [modalContent, setModalContent] = useState(null);

//   const { productId } = useParams();
//   const rightRef = useRef(null);
//   const leftRef = useRef(null);

//   const tabs = [
//     { id: "description", label: "Description" },
//     { id: "additional", label: "Additional Information" },
//     { id: "shipping", label: "Shipping & Return" },
//   ];

//   const openModal = (id) => {
//     setModalContent(id);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setModalContent(null);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && modalContent) {
//         closeModal();
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [modalContent]);

//   const relatedProductsList = [
//     {
//       productImg: relatedproduct1,
//       productName: "Reverse Gewurztraminer Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Gewurztraminer",
//     },

//     {
//       productImg: relatedproduct2,
//       productName: "Reverse Rose (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Rose",
//     },

//     {
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//   ];

//   const productsDetails = [
//     {
//       id: 1,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       flavour: "Merlot",
//     },
//     {
//       id: 2,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product2,
//       productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Pinot Noir",
//     },
//     {
//       id: 3,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product3,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       id: 4,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product4,
//       productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Gewurztraminer",
//     },
//     {
//       id: 5,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product5,
//       productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Rosé",
//     },
//     {
//       id: 6,
//       type: "Bergdolt, Reif & Nett",
//       productImg: product6,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$27.16",
//       flavour: "Riesling",
//     },
//     {
//       id: 7,
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       id: 8,
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//     {
//       id: 9,
//       type: "Château Clos de Boüard",
//       productImg: fourthtabproduct1,
//       productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       id: 10,
//       type: "Château Clos de Boüard",
//       productImg: fourthtabproduct2,
//       productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//     {
//       id: 11,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct1,
//       productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$33.61",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       id: 12,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct2,
//       productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//     {
//       id: 13,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct3,
//       productName: "Matthias Anton Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Rosé",
//     },
//     {
//       id: 14,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct4,
//       productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Pinot Grigio",
//     },
//     {
//       id: 15,
//       type: "Matthias Anton",
//       productImg: fifthtabproduct5,
//       productName:
//         "Matthias Anton Blanc de Blancs Sparkling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//   ];

//   // ✅ THE ONLY THING UPDATED: SCROLL LOGIC (Option B)
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!leftRef.current || !rightRef.current) return;

//       const left = leftRef.current;
//       const right = rightRef.current;

//       const leftRect = left.getBoundingClientRect();
//       const leftTop = leftRect.top;
//       const leftHeight = left.offsetHeight;
//       const rightHeight = right.scrollHeight;

//       // Right smaller → no scroll needed
//       if (rightHeight <= leftHeight) {
//         right.style.maxHeight = "none";
//         right.style.overflowY = "visible";
//         return;
//       }

//       // Left has not reached top → reset right
//       if (leftTop > 0) {
//         right.style.maxHeight = `${leftHeight}px`;
//         right.style.overflowY = "hidden";
//         right.scrollTop = 0;
//         return;
//       }

//       // Enable scroll inside right
//       right.style.maxHeight = `${leftHeight}px`;
//       right.style.overflowY = "auto";
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   const currentProduct = productsDetails.find(
//     (product) => product.id === Number(productId)
//   );

//   return (
//     <>
//       <div className="bg-[url('/images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-[#FFFFFF] ">
//             Home <span className="font-Poppins me-1 ms-1">&gt; </span>Shop{" "}
//             <span className="font-Poppins ms-1 me-1"> &gt;</span> Product Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
//             Product detail
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto ">
//           <div className="flex flex-col py-[55px] xl:py-[100px] md:flex-row gap-6 xl:gap-18 justify-between md:items-start">
//             <div
//               className="flex flex-col gap-4 xl:gap-5 Justify-center w-full md:w-auto md:flex-1 md:sticky md:top-20"

//             >
//               <div className="w-full flex flex-col justify-center md:flex-1 border border-[#CCCCCC] h-[849px] py-5">
//                 <img
//                   src={currentProduct?.productImg}
//                   alt={currentProduct?.productName}
//                   className="object-contain object-center w-full h-[788px]"
//                 />
//               </div>

//               <div className="w-full flex justify-center">
//                 <img
//                   src={currentProduct?.productImg}
//                   alt={currentProduct?.productName}
//                   className="w-[160px] border border-[#CCCCCC] py-2 h-[160px] object-contain"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-1 xl:gap-6 w-full md:flex-1  md:min-h-screen md:overflow-y-auto" >
//               <div
             
//                 className="flex flex-col gap-1 xl:gap-3 w-full md:flex-1"
//               >
//                 <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
//                   {currentProduct?.productName}
//                 </p>
//                 <p className="font-urbanist font-semibold text-md text-[#0B0B0B] pb-3">
//                   <span className="capitalize">De</span>-<span>Alcoholized</span>
//                 </p>
//                 <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
//                   {currentProduct?.price}
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-5 font-urbanist space-y-0.5">
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails1} alt="alcohol" />
//                   <p>
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg">
//                       Alcohol &lt;
//                     </span>
//                     <span> 0.5%</span> abv
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails2} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"RESIDUAL SUGAR".toLowerCase()}
//                     </span>
//                     <span> 20.9</span>G/L
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails3} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"GRAPE VARIETY".toLowerCase()}
//                     </span>
//                     <span className="capitalize">
//                       {" "}{"MERLOT".toLowerCase()}
//                     </span>
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails4} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"TOTAL ACIDITY".toLowerCase()}
//                     </span>
//                     <span> 5.5</span>G/L
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 xl:gap-5">
//                   <img src={productDetails5} alt="alcohol" />
//                   <p className="lowercase">
//                     <span className="font-semibold text-[#641026] text-sm xl:text-lg capitalize">
//                       {"MATURATION".toLowerCase()}
//                     </span>
//                     <span className="capitalize">
//                       {" "}{"IN WOODEN BARRELS".toLowerCase()}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-3 flex flex-col gap-3">
//                 <p className="font-urbanist text-sm md:text-base lg:text-md">
//                   <span className="text-[#641026] font-semibold pe-1">
//                     Sensory Characteristics
//                   </span>
//                   This merlot presents a deep, appealing color that is nearly
//                   indistinguishable From a conventional red wine. The nose reveals
//                   a spicy-fruity bouquet with notes of dried berries and a hint of
//                   red pepper.
//                 </p>

//                 <p className="font-urbanist text-sm md:text-base lg:text-md">
//                   <span className="text-[#641026] font-semibold pe-1">
//                     Tasting Notes
//                   </span>
//                   A smooth, fruit-driven merlot with deep notes of dark berries,
//                   plum, and a hint of spice. On the palate, it's soft and rounded
//                   with gentle tannins and a pleasantly dry finish.
//                 </p>

//                 <p className="text-[#641026] font-urbanist font-semibold text-sm md:text-base lg:text-md">
//                   Serving Suggestions
//                 </p>

//                 <ul className="flex flex-col gap-1 font-urbanist text-sm md:text-base lg:text-md text-[#0B0B0B] ps-4 mb-2 list-disc list-inside">
//                   <li>Best enjoyed slightly chilled at 14-16°C / 57.2-59°F.</li>
//                   <li>Pair with roasted vegetables, grilled dishes, or hearty pasta.</li>
//                   <li>Ideal for dinners, mindful sipping, or gatherings.</li>
//                 </ul>

//                 <div className="flex flex-col gap-3">
//                   <p className="font-urbanist text-[#0B0B0B] text-sm md:text-base lg:text-md">
//                     <span className="text-[#641026] font-semibold">Serving temperature</span>{" "}
//                     10°-12° c
//                   </p>
//                   <p className="font-urbanist text-[#0B0B0B] text-sm md:text-base lg:text-md">
//                     <span className="text-[#641026] font-semibold">Bottle Size</span>{" "}
//                     0.75l / 25.4 oz
//                   </p>
//                   <p className="font-urbanist text-[#0B0B0B] text-sm md:text-base lg:text-md">
//                     <span className="text-[#641026] font-semibold">Made in Germany</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-4 font-urbanist">
//                 <p className="font-semibold text-md text-[#0B0B0B]">Quantity</p>
//                 <button className="flex items-center gap-7 px-6 py-1.5 font-semibold rounded-full border border-[#EED291] w-fit">
//                   <Minus className="w-4 h-4 text-[#0B0B0B]" />
//                   <p className="text-[#0B0B0B] font-semibold text-xl">1</p>
//                   <Plus className="w-4 h-4 text-[#0B0B0B]" />
//                 </button>

//                 <div className="flex gap-4 items-center">
//                   <button className="font-urbanist font-semibold text-base text-[#0B0B0B] bg-[#EED291] w-full rounded-full py-3">
//                     BUY NOW
//                   </button>

//                   <div className="w-12 h-11 flex items-center justify-center rounded-full bg-[#EED291]">
//                     <Heart className="w-5 h-5 text-[#0B0B0B]" />
//                   </div>

//                   <img src={share} className="w-6 h-6" alt="" />
//                 </div>

//                 <button className="font-urbanist font-semibold text-base border border-[#EED291] text-[#0B0B0B] bg-transparent w-full rounded-full py-2.5 mb-2">
//                   BUY IT NOW
//                 </button>

//                 <img src={paymentcard} alt="" className="h-[31px]" />

//                 <div className="flex flex-col font-[urbanist] font-medium gap-2">
//                   <div className="flex items-center gap-5">
//                     <img src={shipping1} className="w-[40px] h-[40px]" alt="" />
//                     <p className="text-[#565656] text-md">
//                       Flat Fee $15 nationwide for 3-bottle bundles
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img src={shipping2} className="w-[40px] h-[40px]" alt="" />
//                     <p className="text-[#565656] text-md">Free shipping at $99+</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===================== DESKTOP TABS ===================== */}
//           <div>
//             <div className="hidden md:block">
//               <div className="w-full border-b flex justify-center border-gray-300">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-4 py-2 pb-5 text-md font-urbanist font-semibold cursor-pointer ${
//                       activeTab === tab.id
//                         ? "border-b-2 border-black text-black"
//                         : "text-[#0B0B0B]"
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-4 text-md text-gray-700 leading-relaxed font-urbanist font-semibold">
//                 {activeTab === "description" && (
//                   <p>
//                     <strong>Sensorik:</strong> This merlot presents a deep,
//                     appealing color that is nearly indistinguishable from a
//                     conventional red wine. The nose reveals a spicy-fruity
//                     bouquet with notes of dried berries and a hint of red
//                     pepper. On the palate, it is juicy with cherry-like flavors
//                     supported by vibrant acidity. The body remains lean and
//                     completely free of tannins. The finish is smooth and
//                     well-rounded — also enjoyable lightly chilled in summer.{" "}
//                     <br />– A fitting companion to salads, picnics, or mild
//                     cheeses.
//                   </p>
//                 )}

//                 {activeTab === "additional" && (
//                   <div>
//                     <h3 className="font-semibold mb-2">
//                       Product Specifications
//                     </h3>
//                     <ul className="list-disc list-inside mb-4">
//                       <li>Volume: 750ml</li>
//                       <li>Alcohol Content: 13.5%</li>
//                       <li>Serving Temperature: 16–18°C</li>
//                       <li>Closure Type: Natural Cork</li>
//                     </ul>
//                     <h3 className="font-semibold mb-2">Storage Instructions</h3>
//                     <p>
//                       Store in a cool, dark place away from direct sunlight.
//                       Best consumed within 2 years of purchase for optimal
//                       freshness.
//                     </p>
//                   </div>
//                 )}

//                 {activeTab === "shipping" && (
//                   <div>
//                     <h3 className="font-semibold mb-2">Returns Policy</h3>
//                     <p className="mb-4">
//                       You may return most new, unopened items within 30 days of
//                       delivery for a full refund. We'll also pay the return
//                       shipping costs if the return is a result of our error (you
//                       received an incorrect or defective item, etc.).
//                     </p>
//                     <p className="mb-4">
//                       You should expect to receive your refund within four weeks
//                       of giving your package to the return shipper; however, in
//                       many cases you will receive a refund more quickly.
//                     </p>
//                     <p>
//                       If you need to return an item, simply login to your
//                       account, view your order, and click the "Return Item(s)"
//                       button. We'll notify you via e-mail once we've processed
//                       the returned item.
//                     </p>

//                     <h3 className="font-semibold mb-2 mt-5">Shipping</h3>

//                     <p className="mb-4">
//                       We can ship to virtually any address in the world. Note
//                       that there are restrictions on some products, and some
//                       products cannot be shipped to international destinations.
//                     </p>
//                     <p className="mb-4">
//                       When you place an order, we will estimate shipping and
//                       delivery dates for you based on the availability of your
//                       items and the shipping options you choose. Depending on
//                       the shipping provider you choose, shipping date estimates
//                       may appear on the shipping quotes page.
//                     </p>
//                     <p>
//                       Please also note that the shipping rates for many items we
//                       sell are weight-based. The weight of any such item can be
//                       found on its detail page. To reflect the policies of the
//                       shipping companies we use, all weights will be rounded up
//                       to the next full pound.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* ===================== MOBILE TABS ===================== */}
//             <div className="block md:hidden space-y-2">
//               {tabs.map((tab) => (
//                 <div key={tab.id} className="border-b border-gray-200">
//                   <button
//                     onClick={() => openModal(tab.id)}
//                     className="flex justify-between items-center w-full py-3 text-base font-urbanist font-semibold"
//                   >
//                     <span>{tab.label}</span>
//                     <span className="text-2xl">›</span>
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* ===================== MOBILE MODAL ===================== */}
//             {modalContent && (
//               <div className="fixed inset-0 bg-white z-[999] overflow-y-auto font-urbanist">
//                 <div className="flex justify-between items-center px-4 py-1.5 border-b border-gray-300 sticky top-0 bg-[#eed291]">
//                   <h2 className="text-lg font-medium uppercase">
//                     {modalContent === "description" && "Description"}
//                     {modalContent === "additional" && "Additional Information"}
//                     {modalContent === "shipping" && "Shipping & Return"}
//                   </h2>

//                   <button
//                     onClick={closeModal}
//                     className="text-4xl pb-2 font-light"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <div className="p-5 text-sm text-gray-700 leading-relaxed">
//                   {modalContent === "description" && (
//                     <>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Origin & Winery
//                       </h3>
//                       <p className="mb-4">
//                         Produced by Weingut Lamm-Jung KG, located in Eltville am
//                         Rhein at the heart of the Rheingau — a historic region
//                         renowned for Riesling. The estate follows sustainable
//                         viticulture and specializes in varietal clarity.
//                       </p>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Character
//                       </h3>
//                       <p>
//                         Classic Riesling notes of citrus and stone fruits. The
//                         wine shows fruit-driven freshness with a charming
//                         residual sweetness, delivering balance and easy
//                         drinkability. The vibrant acidity keeps the palate
//                         lively, while the gentle sweetness adds charm and
//                         approachability.
//                       </p>
//                     </>
//                   )}

//                   {modalContent === "additional" && (
//                     <>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Product Specifications
//                       </h3>
//                       <ul className="list-disc list-inside mb-4">
//                         <li>Volume: 750ml</li>
//                         <li>Alcohol Content: 13.5%</li>
//                         <li>Serving Temperature: 16–18°C</li>
//                         <li>Closure Type: Natural Cork</li>
//                       </ul>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Storage Instructions
//                       </h3>
//                       <p className="mb-4">
//                         Store in a cool, dark place away from direct sunlight.
//                         Best consumed within 2 years of purchase for optimal
//                         freshness.
//                       </p>
//                       <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
//                         Tasting Notes
//                       </h3>
//                       <p>
//                         A medium-bodied red wine with a pleasant mix of cherry,
//                         plum, and a touch of vanilla oak, creating a balanced
//                         and smooth profile perfect for casual dinners.
//                       </p>
//                     </>
//                   )}

//                   {modalContent === "shipping" && (
//                     <>
//                       <h3 className="font-semibold text-xl text-[#0b0b0b] mb-4">
//                         Returns Policy
//                       </h3>
//                       <p className="mb-4">
//                         You may return most new, unopened items within 30 days
//                         of delivery for a full refund. We'll also pay the return
//                         shipping costs if the return is a result of our error
//                         (you received an incorrect or defective item, etc.).
//                       </p>
//                       <p className="mb-4">
//                         You should expect to receive your refund within four
//                         weeks of giving your package to the return shipper;
//                         however, in many cases you will receive a refund more
//                         quickly.
//                       </p>
//                       <p>
//                         If you need to return an item, simply login to your
//                         account, view your order, and click the "Return Item(s)"
//                         button. We'll notify you via e-mail once we've processed
//                         the returned item.
//                       </p>

//                       <h3 className="font-semibold mb-4 mt-5 text-xl text-[#0b0b0b]">
//                         Shipping
//                       </h3>

//                       <p className="mb-4">
//                         We can ship to virtually any address in the world. Note
//                         that there are restrictions on some products, and some
//                         products cannot be shipped to international
//                         destinations.
//                       </p>
//                       <p className="mb-4">
//                         When you place an order, we will estimate shipping and
//                         delivery dates for you based on the availability of your
//                         items and the shipping options you choose. Depending on
//                         the shipping provider you choose, shipping date
//                         estimates may appear on the shipping quotes page.
//                       </p>
//                       <p>
//                         Please also note that the shipping rates for many items
//                         we sell are weight-based. The weight of any such item
//                         can be found on its detail page. To reflect the policies
//                         of the shipping companies we use, all weights will be
//                         rounded up to the next full pound.
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* ===================== RELATED PRODUCTS ===================== */}
//           <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//             <div className="flex flex-col items-center gap-8 text-center w-full">
//               <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
//                 Related Products
//               </p>

//               <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
//                 {relatedProductsList.map((product, index) => (
//                   <ProductsChild key={index} product={product} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;







import { Heart, Minus, Plus } from "lucide-react";
import product from "../../assets/images/product.png";
import productDetails1 from "../../assets/images/productDetails1.png";
import productDetails2 from "../../assets/images/productDetails2.png";
import productDetails3 from "../../assets/images/productDetails3.png";
import productDetails4 from "../../assets/images/productDetails4.png";
import productDetails5 from "../../assets/images/productDetails5.png";
import share from "../../assets/images/share.png";
import paymentcard from "../../assets/images/paymentcard.png";
import shipping1 from "../../assets/images/shipping1.png";
import shipping2 from "../../assets/images/shipping2.png";
import { useEffect, useState, useRef } from "react";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import relatedproduct1 from "../../assets/images/relatedproduct1.png";
import relatedproduct2 from "../../assets/images/relatedproduct2.png";
import verietyImg from "../../assets/images/variety.png";
import ProductsChild from "./productsChild";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
import { useParams } from "react-router-dom";

// ⭐ ADDED FOR POPOVER
import CartPopover from "../cart/CartPopover";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [modalContent, setModalContent] = useState(null);

  // ⭐ ADDED FOR POPOVER
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { productId } = useParams();
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "shipping", label: "Shipping & Return" },
  ];

  const openModal = (id) => {
    setModalContent(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && modalContent) {
        closeModal();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [modalContent]);

    const relatedProductsList = [
      {
        productImg: relatedproduct1,
        productName: "Reverse Gewurztraminer Dealcoholized",
        variety: "Grape variety",
        varietylogo: verietyImg,
        price: "$29.38",
        flavour: "Gewurztraminer",
      },
      {
        productImg: relatedproduct2,
        productName: "Reverse Rose (vegan) Dealcoholized",
        variety: "Grape variety",
        varietylogo: verietyImg,
        price: "$25.76",
        flavour: "Rose",
      },
      {
        productImg: secondtabproduct,
        productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
        variety: "Grape variety",
        varietylogo: verietyImg,
        price: "$26.97",
        flavour: "Riesling",
      },
    ];

  const productsDetails = [
    {
      id: 1,
      type: "Bergdolt, Reif & Nett",
      productImg: product1,
      productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$29.76",
      flavour: "Merlot",
    },
    {
      id: 2,
      type: "Bergdolt, Reif & Nett",
      productImg: product2,
      productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$29.38",
      flavour: "Pinot Noir",
    },
    {
      id: 3,
      type: "Bergdolt, Reif & Nett",
      productImg: product3,
      productName:
        "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$25.76",
      flavour: "Sauvignon Blanc",
    },
    {
      id: 4,
      type: "Bergdolt, Reif & Nett",
      productImg: product4,
      productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$29.38",
      flavour: "Gewurztraminer",
    },
    {
      id: 5,
      type: "Bergdolt, Reif & Nett",
      productImg: product5,
      productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$25.76",
      flavour: "Rosé",
    },
    {
      id: 6,
      type: "Bergdolt, Reif & Nett",
      productImg: product6,
      productName:
        "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$27.16",
      flavour: "Riesling",
    },

    // ... Remaining product list (unchanged)
    {
      id: 7,
      type: "Lamm Jung",
      productImg: secondtabproduct,
      productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$26.97",
      flavour: "Riesling",
    },
    {
      id: 8,
      type: "KvD Strauch Sektmanufaktur",
      productImg: thirdtabproduct,
      productName:
        "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$28.91",
      flavour: "Rouge Pur",
    },
    {
      id: 9,
      type: "Château Clos de Boüard",
      productImg: fourthtabproduct1,
      productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$25.61",
      flavour: "Sauvignon Blanc",
    },
    {
      id: 10,
      type: "Château Clos de Boüard",
      productImg: fourthtabproduct2,
      productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$28.19",
      flavour: "Pinot Noir",
    },
    {
      id: 11,
      type: "Matthias Anton",
      productImg: fifthtabproduct1,
      productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$33.61",
      flavour: "Sauvignon Blanc",
    },
    {
      id: 12,
      type: "Matthias Anton",
      productImg: fifthtabproduct2,
      productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$28.19",
      flavour: "Pinot Noir",
    },
    {
      id: 13,
      type: "Matthias Anton",
      productImg: fifthtabproduct3,
      productName: "Matthias Anton Rosé (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$25.61",
      flavour: "Rosé",
    },
    {
      id: 14,
      type: "Matthias Anton",
      productImg: fifthtabproduct4,
      productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$25.61",
      flavour: "Pinot Grigio",
    },
    {
      id: 15,
      type: "Matthias Anton",
      productImg: fifthtabproduct5,
      productName:
        "Matthias Anton Blanc de Blancs Sparkling (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$28.19",
      flavour: "Pinot Noir",
    },
  ];

  // ⭐ ADDED FOR POPOVER EXAMPLE DATA
  const cartItems = [
    {
      image: product1,
      name: "Bergdolt, Reif & Nett Reverse Riesling (Vegan)",
      price: 24.97,
      qty: 1,
    },
    {
      image: product2,
      name: "Bergdolt, Reif & Nett Reverse Gewurztraminer",
      price: 25.38,
      qty: 1,
    },
  ];

  const relatedItems = [
    {
      productImg: relatedproduct1,
      productName: "Reverse Gewurztraminer Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$29.38",
      flavour: "Gewurztraminer",
    },
    {
      productImg: relatedproduct2,
      productName: "Reverse Rose (vegan) Dealcoholized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$25.76",
      flavour: "Rose",
    },
    {
      productImg: secondtabproduct,
      productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$26.97",
      flavour: "Riesling",
    },
  ];

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal;

  // scroll logic (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      if (!leftRef.current || !rightRef.current) return;

      const left = leftRef.current;
      const right = rightRef.current;

      const leftRect = left.getBoundingClientRect();
      const leftTop = leftRect.top;
      const leftHeight = left.offsetHeight;
      const rightHeight = right.scrollHeight;

      if (rightHeight <= leftHeight) {
        right.style.maxHeight = "none";
        right.style.overflowY = "visible";
        return;
      }

      if (leftTop > 0) {
        right.style.maxHeight = `${leftHeight}px`;
        right.style.overflowY = "hidden";
        right.scrollTop = 0;
        return;
      }

      right.style.maxHeight = `${leftHeight}px`;
      right.style.overflowY = "auto";
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const currentProduct = productsDetails.find(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      {/* ⭐ ADDED: Cart Popover */}
      <CartPopover
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        relatedItems={relatedItems}
        subtotal={subtotal}
        total={total}
      />

      {/* ------- YOUR ORIGINAL PAGE CONTENT BELOW (unchanged) ------- */}

      <div className="bg-[url('/images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-[#FFFFFF] ">
            Home <span className="font-Poppins me-1 ms-1">&gt; </span>Shop{" "}
            <span className="font-Poppins ms-1 me-1"> &gt;</span> Product Detail
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
            Product detail
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[95%] mx-auto ">
          <div className="flex flex-col py-[55px] xl:py-[100px] md:flex-row gap-6 xl:gap-18 justify-between md:items-start">
            
            {/* LEFT SIDE — unchanged */}
            <div
  
              className="flex flex-col gap-4 xl:gap-5 Justify-center w-full md:w-auto md:flex-1 md:sticky md:top-20"
            >
              <div className="w-full flex flex-col justify-center md:flex-1 border border-[#CCCCCC] h-[849px] py-5">
                <img
                  src={currentProduct?.productImg}
                  alt={currentProduct?.productName}
                  className="object-contain object-center w-full h-[788px]"
                />
              </div>

              <div className="w-full flex justify-center">
                <img
                  src={currentProduct?.productImg}
                  alt={currentProduct?.productName}
                  className="w-[160px] border border-[#CCCCCC] py-2 h-[160px] object-contain"
                />
              </div>
            </div>

            {/* RIGHT SIDE — ONLY BUY NOW updated */}
            <div
  
              className="flex flex-col gap-1 xl:gap-6 w-full md:flex-1 md:min-h-screen md:overflow-y-auto"
            >
              <div className="flex flex-col gap-1 xl:gap-3 w-full md:flex-1">
                <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
                  {currentProduct?.productName}
                </p>
                <p className="font-urbanist font-semibold text-md text-[#0B0B0B] pb-3">
                  <span className="capitalize">De</span>-<span>Alcoholized</span>
                </p>
                <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
                  {currentProduct?.price}
                </p>
              </div>

                              {/* PRODUCT INFO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-5 font-urbanist">
                  <div className="flex items-center gap-5">
                    <img src={productDetails1} />
                    <p><span className="font-semibold text-[#641026]">Alcohol &lt;</span> 0.5% abv</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={productDetails2} />
                    <p><span className="font-semibold text-[#641026]">Residual Sugar</span> 20.9G/L</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={productDetails3} />
                    <p><span className="font-semibold text-[#641026]">Grape Variety</span> Merlot</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={productDetails4} />
                    <p><span className="font-semibold text-[#641026]">Total Acidity</span> 5.5G/L</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={productDetails5} />
                    <p><span className="font-semibold text-[#641026]">Maturation</span> In wooden barrels</p>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="mt-3 flex flex-col gap-3 font-urbanist">
                  <p>
                    <span className="text-[#641026] font-semibold">Sensory Characteristics:</span>
                      This merlot presents a deep, appealing color that is nearly
                  indistinguishable From a conventional red wine. The nose
                  reveals a spicy-fruity bouquet with notes of dried berries and
                  a Hint of red pepper.
                  </p>

                  <p>
                    <span className="text-[#641026] font-semibold">Tasting Notes:</span>
                                     A smooth, fruit-driven merlot with deep notes of dark berries,
                  plum, and a hint of spice.On the palate, it's soft and
                  rounded, with gentle tannins and a pleasantly dry finish.A
                  refined and full-bodied red - without the alcohol.
                  </p>

                  <p className="text-[#641026] font-semibold">Serving Suggestions</p>

                      <ul className="flex flex-col gap-1 font-urbanist font-regular text-sm  md:text-base lg:text-md  text-[#0B0B0B] ps-4 mb-2 list-disc list-inside">
                  <li>Best enjoyed slightly chilled at 14-16°C / 57.2-59°F.</li>
                  <li>
                    Pair with roasted vegetables, grilled dishes, or hearty
                    pasta
                  </li>
                  <li>
                    Perfect for mindful sipping, dinners without compromise, or
                    casual evenings
                  </li>
                </ul>

                  <p><span className="text-[#641026] font-semibold">Serving temperature</span> 10°-12°C</p>
                  <p><span className="text-[#641026] font-semibold">Bottle Size</span> 0.75l</p>
                  <p><span className="text-[#641026] font-semibold">Made in Germany</span></p>
                </div>

              <div className="flex flex-col gap-4 font-urbanist">
                <p className="font-semibold text-md text-[#0B0B0B]">Quantity</p>
                <button className="flex items-center gap-7 px-6 py-1.5 font-semibold rounded-full border border-[#EED291] w-fit">
                  <Minus className="w-4 h-4 text-[#0B0B0B]" />
                  <p className="text-[#0B0B0B] font-semibold text-xl">1</p>
                  <Plus className="w-4 h-4 text-[#0B0B0B]" />
                </button>

                <div className="flex gap-4 items-center">
                  
                  {/* ⭐ BUY NOW — ADDED POPUP OPEN */}
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="font-urbanist font-semibold cursor-pointer text-base text-[#0B0B0B] bg-[#EED291] w-full rounded-full py-3"
                  >
                    BUY NOW
                  </button>

                  <div className="w-12 h-11 flex items-center justify-center rounded-full bg-[#EED291]">
                    <Heart className="w-5 h-5 text-[#0B0B0B]" />
                  </div>
                </div>

                {/* Rest buttons unchanged */}
                <button className="font-urbanist cursor-pointer font-semibold text-base border border-[#EED291] text-[#0B0B0B] bg-transparent w-full rounded-full py-2.5 mb-2">
                  BUY IT NOW
                </button>

                 <img src={paymentcard} alt="" className="h-[31px]" />

                <div className="flex flex-col font-[urbanist] font-medium gap-2">
                  <div className="flex items-center gap-5">
                    <img src={shipping1} className="w-[40px] h-[40px]" alt="" />
                    <p className="text-[#565656] text-md">
                      Flat Fee $15 nationwide for 3-bottle bundles
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={shipping2} className="w-[40px] h-[40px]" alt="" />
                    <p className="text-[#565656] text-md">Free shipping at $99+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== DESKTOP TABS ===================== */}
          <div>
            <div className="hidden md:block">
              <div className="w-full border-b flex justify-center border-gray-300">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 pb-5 text-md font-urbanist font-semibold cursor-pointer ${
                      activeTab === tab.id
                        ? "border-b-2 border-black text-black"
                        : "text-[#0B0B0B]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-md text-gray-700 leading-relaxed font-urbanist font-semibold">
                {activeTab === "description" && (
                  <p>
                    <strong>Sensorik:</strong> This merlot presents a deep,
                    appealing color that is nearly indistinguishable from a
                    conventional red wine. The nose reveals a spicy-fruity
                    bouquet with notes of dried berries and a hint of red
                    pepper. On the palate, it is juicy with cherry-like flavors
                    supported by vibrant acidity. The body remains lean and
                    completely free of tannins. The finish is smooth and
                    well-rounded — also enjoyable lightly chilled in summer.{" "}
                    <br />– A fitting companion to salads, picnics, or mild
                    cheeses.
                  </p>
                )}

                {activeTab === "additional" && (
                  <div>
                    <h3 className="font-semibold mb-2">
                      Product Specifications
                    </h3>
                    <ul className="list-disc list-inside mb-4">
                      <li>Volume: 750ml</li>
                      <li>Alcohol Content: 13.5%</li>
                      <li>Serving Temperature: 16–18°C</li>
                      <li>Closure Type: Natural Cork</li>
                    </ul>
                    <h3 className="font-semibold mb-2">Storage Instructions</h3>
                    <p>
                      Store in a cool, dark place away from direct sunlight.
                      Best consumed within 2 years of purchase for optimal
                      freshness.
                    </p>
                  </div>
                )}

                {activeTab === "shipping" && (
                  <div>
                    <h3 className="font-semibold mb-2">Returns Policy</h3>
                    <p className="mb-4">
                      You may return most new, unopened items within 30 days of
                      delivery for a full refund. We'll also pay the return
                      shipping costs if the return is a result of our error (you
                      received an incorrect or defective item, etc.).
                    </p>
                    <p className="mb-4">
                      You should expect to receive your refund within four weeks
                      of giving your package to the return shipper; however, in
                      many cases you will receive a refund more quickly.
                    </p>
                    <p>
                      If you need to return an item, simply login to your
                      account, view your order, and click the "Return Item(s)"
                      button. We'll notify you via e-mail once we've processed
                      the returned item.
                    </p>

                    <h3 className="font-semibold mb-2 mt-5">Shipping</h3>

                    <p className="mb-4">
                      We can ship to virtually any address in the world. Note
                      that there are restrictions on some products, and some
                      products cannot be shipped to international destinations.
                    </p>
                    <p className="mb-4">
                      When you place an order, we will estimate shipping and
                      delivery dates for you based on the availability of your
                      items and the shipping options you choose. Depending on
                      the shipping provider you choose, shipping date estimates
                      may appear on the shipping quotes page.
                    </p>
                    <p>
                      Please also note that the shipping rates for many items we
                      sell are weight-based. The weight of any such item can be
                      found on its detail page. To reflect the policies of the
                      shipping companies we use, all weights will be rounded up
                      to the next full pound.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ===================== MOBILE TABS ===================== */}
            <div className="block md:hidden space-y-2">
              {tabs.map((tab) => (
                <div key={tab.id} className="border-b border-gray-200">
                  <button
                    onClick={() => openModal(tab.id)}
                    className="flex justify-between items-center w-full py-3 text-base font-urbanist font-semibold"
                  >
                    <span>{tab.label}</span>
                    <span className="text-2xl">›</span>
                  </button>
                </div>
              ))}
            </div>

            {/* ===================== MOBILE MODAL ===================== */}
            {modalContent && (
              <div className="fixed inset-0 bg-white z-[999] overflow-y-auto font-urbanist">
                <div className="flex justify-between items-center px-4 py-1.5 border-b border-gray-300 sticky top-0 bg-[#eed291]">
                  <h2 className="text-lg font-medium uppercase">
                    {modalContent === "description" && "Description"}
                    {modalContent === "additional" && "Additional Information"}
                    {modalContent === "shipping" && "Shipping & Return"}
                  </h2>

                  <button
                    onClick={closeModal}
                    className="text-4xl pb-2 font-light"
                  >
                    ×
                  </button>
                </div>

                <div className="p-5 text-sm text-gray-700 leading-relaxed">
                  {modalContent === "description" && (
                    <>
                      <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
                        Origin & Winery
                      </h3>
                      <p className="mb-4">
                        Produced by Weingut Lamm-Jung KG, located in Eltville am
                        Rhein at the heart of the Rheingau — a historic region
                        renowned for Riesling. The estate follows sustainable
                        viticulture and specializes in varietal clarity.
                      </p>
                      <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
                        Character
                      </h3>
                      <p>
                        Classic Riesling notes of citrus and stone fruits. The
                        wine shows fruit-driven freshness with a charming
                        residual sweetness, delivering balance and easy
                        drinkability. The vibrant acidity keeps the palate
                        lively, while the gentle sweetness adds charm and
                        approachability.
                      </p>
                    </>
                  )}

                  {modalContent === "additional" && (
                    <>
                      <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
                        Product Specifications
                      </h3>
                      <ul className="list-disc list-inside mb-4">
                        <li>Volume: 750ml</li>
                        <li>Alcohol Content: 13.5%</li>
                        <li>Serving Temperature: 16–18°C</li>
                        <li>Closure Type: Natural Cork</li>
                      </ul>
                      <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
                        Storage Instructions
                      </h3>
                      <p className="mb-4">
                        Store in a cool, dark place away from direct sunlight.
                        Best consumed within 2 years of purchase for optimal
                        freshness.
                      </p>
                      <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">
                        Tasting Notes
                      </h3>
                      <p>
                        A medium-bodied red wine with a pleasant mix of cherry,
                        plum, and a touch of vanilla oak, creating a balanced
                        and smooth profile perfect for casual dinners.
                      </p>
                    </>
                  )}

                  {modalContent === "shipping" && (
                    <>
                      <h3 className="font-semibold text-xl text-[#0b0b0b] mb-4">
                        Returns Policy
                      </h3>
                      <p className="mb-4">
                        You may return most new, unopened items within 30 days
                        of delivery for a full refund. We'll also pay the return
                        shipping costs if the return is a result of our error
                        (you received an incorrect or defective item, etc.).
                      </p>
                      <p className="mb-4">
                        You should expect to receive your refund within four
                        weeks of giving your package to the return shipper;
                        however, in many cases you will receive a refund more
                        quickly.
                      </p>
                      <p>
                        If you need to return an item, simply login to your
                        account, view your order, and click the "Return Item(s)"
                        button. We'll notify you via e-mail once we've processed
                        the returned item.
                      </p>

                      <h3 className="font-semibold mb-4 mt-5 text-xl text-[#0b0b0b]">
                        Shipping
                      </h3>

                      <p className="mb-4">
                        We can ship to virtually any address in the world. Note
                        that there are restrictions on some products, and some
                        products cannot be shipped to international
                        destinations.
                      </p>
                      <p className="mb-4">
                        When you place an order, we will estimate shipping and
                        delivery dates for you based on the availability of your
                        items and the shipping options you choose. Depending on
                        the shipping provider you choose, shipping date
                        estimates may appear on the shipping quotes page.
                      </p>
                      <p>
                        Please also note that the shipping rates for many items
                        we sell are weight-based. The weight of any such item
                        can be found on its detail page. To reflect the policies
                        of the shipping companies we use, all weights will be
                        rounded up to the next full pound.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ===================== RELATED PRODUCTS ===================== */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;