// import { Heart, Minus, Plus, Share2 } from "lucide-react";
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
// import payoption1 from "../../assets/images/payoption1.png";
// import payoption2 from "../../assets/images/payoption2.png";
// import payoption3 from "../../assets/images/payoption3.png";
// import payoption4 from "../../assets/images/payoption4.png";
// import payoption5 from "../../assets/images/payoption5.png";
// import payoption6 from "../../assets/images/payoption6.png";
// import { useParams } from "react-router-dom";

// import CartPopover from "../cartProducts/CartPopover";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   decreaseQuantity,
//   increaseQuantity,
//   setDrawerOpen,
// } from "../../redux/cart/cartSlice";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const [modalContent, setModalContent] = useState(null);

//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const { productId } = useParams();
//   const rightRef = useRef(null);
//   const leftRef = useRef(null);

//   const dispatch = useDispatch();
//   const productsDetails = useSelector((state) => state.cart.productsDetails);

//   const isOpen = useSelector((state) => state.cart.isDrawerOpen);

//   console.log(productsDetails);
//   const relatedProductsList = useSelector(
//     (state) => state.cart.relatedProducts
//   );

//   const cartItems = useSelector((state) => state.cart.cartItems);

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

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!leftRef.current || !rightRef.current) return;

//       const left = leftRef.current;
//       const right = rightRef.current;

//       const leftRect = left.getBoundingClientRect();
//       const leftTop = leftRect.top;
//       const leftHeight = left.offsetHeight;
//       const rightHeight = right.scrollHeight;

//       if (rightHeight <= leftHeight) {
//         right.style.maxHeight = "none";
//         right.style.overflowY = "visible";
//         return;
//       }

//       if (leftTop > 0) {
//         right.style.maxHeight = `${leftHeight}px`;
//         right.style.overflowY = "hidden";
//         right.scrollTop = 0;
//         return;
//       }

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

//   const availableProductInCart = cartItems.find(
//     (item) => item.id === Number(productId)
//   );

//   console.log(currentProduct);

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
//             <div className="flex flex-col gap-4 xl:gap-5 Justify-center w-full md:w-auto md:flex-1 md:sticky md:top-20">
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

//             <div className="flex flex-col gap-1 xl:gap-6 w-full md:flex-1 md:min-h-screen md:overflow-y-auto">
//               <div className="flex flex-col gap-1 xl:gap-3 w-full md:flex-1">
//                 <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
//                   {currentProduct?.productName}
//                 </p>
//                 <p className="font-urbanist font-semibold text-md text-[#0B0B0B] pb-3">
//                   <span className="capitalize">De</span>-
//                   <span>Alcoholized</span>
//                 </p>
//                 <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
//                   ${currentProduct?.price}
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-5 font-urbanist">
//                 <div className="flex items-center gap-5">
//                   <img src={productDetails1} />
//                   <p>
//                     <span className="font-semibold text-[#641026]">
//                       Alcohol &lt;
//                     </span>{" "}
//                     0.5% abv
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-5">
//                   <img src={productDetails2} />
//                   <p>
//                     <span className="font-semibold text-[#641026]">
//                       Residual Sugar
//                     </span>{" "}
//                     20.9G/L
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-5">
//                   <img src={productDetails3} />
//                   <p>
//                     <span className="font-semibold text-[#641026]">
//                       Grape Variety
//                     </span>{" "}
//                     Merlot
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-5">
//                   <img src={productDetails4} />
//                   <p>
//                     <span className="font-semibold text-[#641026]">
//                       Total Acidity
//                     </span>{" "}
//                     5.5G/L
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-5">
//                   <img src={productDetails5} />
//                   <p>
//                     <span className="font-semibold text-[#641026]">
//                       Maturation
//                     </span>{" "}
//                     In wooden barrels
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-3 flex flex-col gap-3 font-urbanist">
//                 <p>
//                   <span className="text-[#641026] font-semibold">
//                     Sensory Characteristics:
//                   </span>
//                   This merlot presents a deep, appealing color that is nearly
//                   indistinguishable From a conventional red wine. The nose
//                   reveals a spicy-fruity bouquet with notes of dried berries and
//                   a Hint of red pepper.
//                 </p>

//                 <p>
//                   <span className="text-[#641026] font-semibold">
//                     Tasting Notes:
//                   </span>
//                   A smooth, fruit-driven merlot with deep notes of dark berries,
//                   plum, and a hint of spice.On the palate, it's soft and
//                   rounded, with gentle tannins and a pleasantly dry finish.A
//                   refined and full-bodied red - without the alcohol.
//                 </p>

//                 <p className="text-[#641026] font-semibold">
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

//                 <p>
//                   <span className="text-[#641026] font-semibold">
//                     Serving temperature
//                   </span>{" "}
//                   10°-12°C
//                 </p>
//                 <p>
//                   <span className="text-[#641026] font-semibold">
//                     Bottle Size
//                   </span>{" "}
//                   0.75l
//                 </p>
//                 <p>
//                   <span className="text-[#641026] font-semibold">
//                     Made in Germany
//                   </span>
//                 </p>
//               </div>

//               <div className="flex flex-col gap-4 font-urbanist">
//                 <p className="font-semibold text-md text-[#0B0B0B]">Quantity</p>
//                 <button className="flex items-center gap-7 px-6 py-1.5 font-semibold rounded-full border border-[#EED291] w-fit">
//                   <Minus
//                     className="w-4 h-4 text-[#0B0B0B] cursor-pointer"
//                     onClick={() => dispatch(decreaseQuantity(currentProduct))}
//                   />

//                   <p className="text-[#0B0B0B] font-semibold text-xl">
//                     {availableProductInCart
//                       ? availableProductInCart.quantity
//                       : 1}
//                   </p>
//                   <Plus
//                     className="w-4 h-4 text-[#0B0B0B] cursor-pointer"
//                     onClick={() => dispatch(increaseQuantity(currentProduct))}
//                   />
//                 </button>

//                 <div className="flex gap-4 items-center">
//                   <button
//                     onClick={() => {
//                       dispatch(setDrawerOpen(true));
//                       dispatch(addToCart(currentProduct));
//                     }}
//                     className="font-urbanist font-semibold cursor-pointer text-base text-[#0B0B0B] bg-[#EED291] w-full rounded-full py-3 hover:bg-[#0B0B0B] hover:text-[#EED291] transition-all duration-800"
//                   >
//                     ADD TO CART
//                   </button>

//                   <div className="w-14 xl:w-12 h-10 lg:h-11 flex items-center hover:bg-[#EED291] transition-all duration-800 justify-center rounded-full bg-white border  border-[gray] cursor-pointer">
//                     <Heart className=" w-5 h-5 text-[#0B0B0B]" />
//                   </div>

//                   <div>
//                     <Share2 className="cursor-pointer" />
//                   </div>
//                 </div>

//                 <div>
//                   <button className="font-urbanist cursor-pointer font-semibold text-base border border-[#EED291] text-[#0B0B0B] bg-transparent w-full rounded-full py-2.5 hover:bg-[#0B0B0B] hover:text-white transition-all duration-800 ">
//                     BUY IT NOW
//                   </button>

//                   <div className="flex gap-2 xl:gap-3 items-center mt-3 lg:mt-0">
//                     <img
//                       src={payoption1}
//                       className="   w-10  lg:w-[100px] h-5 lg:h-[31px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption2}
//                       className=" w-12 lg:w-[50px] h-5 lg:h-[31px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption3}
//                       className=" w-12 lg:w-[50px] h-5 lg:h-[31px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption4}
//                       className=" w-12  lg:w-[50px] h-5 lg:h-[31px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption5}
//                       className=" w-18   lg:w-[60px] h-8 lg:h-[60px]"
//                       alt=""
//                     />
//                     <img
//                       src={payoption6}
//                       className="w-22   lg:w-[130px] h-12 lg:h-[90px]"
//                       alt=""
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-col font-[urbanist] font-medium gap-2">
//                   <div className="flex items-center gap-5">
//                     <img src={shipping1} className="w-[40px] h-[40px]" alt="" />
//                     <p className="text-[#565656] text-md">
//                       Flat Fee $15 nationwide for 3-bottle bundles
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-5">
//                     <img src={shipping2} className="w-[40px] h-[40px]" alt="" />
//                     <p className="text-[#565656] text-md">
//                       Free shipping at $99+
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

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
//                   <p className="font-urbanist">
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
//                     <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl ">
//                       Product Specifications
//                     </h3>
//                     <ul className="list-disc list-inside mb-4 font-urbanist">
//                       <li>Volume: 750ml</li>
//                       <li>Alcohol Content: 13.5%</li>
//                       <li>Serving Temperature: 16–18°C</li>
//                       <li>Closure Type: Natural Cork</li>
//                     </ul>
//                     <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl mt-8">
//                       Storage Instructions
//                     </h3>
//                     <p className="font-urbanist">
//                       Store in a cool, dark place away from direct sunlight.
//                       Best consumed within 2 years of purchase for optimal
//                       freshness.
//                     </p>
//                   </div>
//                 )}

//                 {activeTab === "shipping" && (
//                   <div>
//                     <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl">
//                       Returns Policy
//                     </h3>
//                     <p className="mb-4 font-urbanist">
//                       You may return most new, unopened items within 30 days of
//                       delivery for a full refund. We'll also pay the return
//                       shipping costs if the return is a result of our error (you
//                       received an incorrect or defective item, etc.).
//                     </p>
//                     <p className="mb-4 font-urbanist">
//                       You should expect to receive your refund within four weeks
//                       of giving your package to the return shipper; however, in
//                       many cases you will receive a refund more quickly.
//                     </p>
//                     <p className="font-urbanist">
//                       If you need to return an item, simply login to your
//                       account, view your order, and click the "Return Item(s)"
//                       button. We'll notify you via e-mail once we've processed
//                       the returned item.
//                     </p>

//                     <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl mt-8">
//                       Shipping
//                     </h3>

//                     <p className="mb-4 font-urbanist">
//                       We can ship to virtually any address in the world. Note
//                       that there are restrictions on some products, and some
//                       products cannot be shipped to international destinations.
//                     </p>
//                     <p className="mb-4 font-urbanist">
//                       When you place an order, we will estimate shipping and
//                       delivery dates for you based on the availability of your
//                       items and the shipping options you choose. Depending on
//                       the shipping provider you choose, shipping date estimates
//                       may appear on the shipping quotes page.
//                     </p>
//                     <p className="font-urbanist">
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

//           <div className="w-full bg-[#F8F8F8]">
//             <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
//               <div className="flex flex-col items-center gap-8 text-center w-full">
//                 <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
//                   Related Products
//                 </p>

//                 <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
//                   {relatedProductsList.map((product, index) => (
//                     <ProductsChild key={index} product={product} />
//                   ))}
//                 </div>
//               </div>

//               <div className="text-center">
//                 <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-[#0B0B0B] text-center ">
//                   VIEW MORE
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;




import { Heart, Minus, Plus, Share2 } from "lucide-react";
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
import payoption1 from "../../assets/images/payoption1.png";
import payoption2 from "../../assets/images/payoption2.png";
import payoption3 from "../../assets/images/payoption3.png";
import payoption4 from "../../assets/images/payoption4.png";
import payoption5 from "../../assets/images/payoption5.png";
import payoption6 from "../../assets/images/payoption6.png";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAPI,
  decrementQuantity,
  incrementQuantity,
  setDrawerOpen,
} from "../../redux/cart/cartSlice";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [modalContent, setModalContent] = useState(null);
  const [relatedProductsList, setReletedProductsList] = useState([])

  const [isCartOpen, setIsCartOpen] = useState(false);

  const { productId } = useParams();
  
  useEffect(() => {
    fetchProduct();
    getReletedProducts();
  }, [productId]);
  
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  const dispatch = useDispatch();

  // const relatedProductsList = useSelector(
  //   (state) => state.cart.relatedProducts
  // );

  const cartItems = useSelector((state) => state.cart.cartItems);


  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && modalContent) {
        closeModal();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [modalContent]);

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

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/getProduct/${productId}`
      );

      if (res.data.success) {
        setCurrentProduct(res.data.data);
      }
    } catch (err) {
      console.error("Failed to load product:", err);
    } finally {
      setLoading(false);
    }
  };


    const getReletedProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/getReletedProducts`
      );

      if (res.data.success) {
        setReletedProductsList(res.data.data);
      }
    } catch (err) {
      console.error("Failed to load product:", err);
    } finally {
      setLoading(false);
    }
  };


  const availableProductInCart = cartItems.find(
    (item) => item.productId === currentProduct?._id
  );

  if (loading) {
    return (
      <div className="w-full text-center py-20 text-xl">
        Loading product details...
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="w-full text-center py-20 text-xl text-red-600">
        Product not found.
      </div>
    );
  }

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



  return (
    <>
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
            <div className="flex flex-col gap-4 xl:gap-5 Justify-center w-full md:w-auto md:flex-1 md:sticky md:top-20">
              <div className="w-full flex flex-col justify-center md:flex-1 border border-[#CCCCCC] h-[849px] py-5">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}/${currentProduct.productImg}`}
                  alt={currentProduct.productName}
                  className="object-contain object-center w-full h-[788px]"
                />
              </div>

              <div className="w-full flex justify-center">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}/${currentProduct.productImg}`}
                  alt={currentProduct.productName}
                  className="w-[160px] border border-[#CCCCCC] py-2 h-[160px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 xl:gap-6 w-full md:flex-1 md:min-h-screen md:overflow-y-auto">
              <div className="flex flex-col gap-1 xl:gap-3 w-full md:flex-1">
                <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
                  {currentProduct.productName}
                </p>
                <p className="font-urbanist font-semibold text-md text-[#0B0B0B] pb-3">
                  <span className="capitalize">De</span>-
                  <span>Alcoholized</span>
                </p>
                <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
                  ${currentProduct.price}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-5 font-urbanist">
                <div className="flex items-center gap-5">
                  <img src={productDetails1} />
                  <p>
                    <span className="font-semibold text-[#641026]">
                      Alcohol &lt;
                    </span>{" "}
                    0.5% abv
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <img src={productDetails2} />
                  <p>
                    <span className="font-semibold text-[#641026]">
                      Residual Sugar
                    </span>{" "}
                    20.9G/L
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <img src={productDetails3} />
                  <p>
                    <span className="font-semibold text-[#641026]">
                      Grape Variety
                    </span>{" "}
                    Merlot
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <img src={productDetails4} />
                  <p>
                    <span className="font-semibold text-[#641026]">
                      Total Acidity
                    </span>{" "}
                    5.5G/L
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <img src={productDetails5} />
                  <p>
                    <span className="font-semibold text-[#641026]">
                      Maturation
                    </span>{" "}
                    In wooden barrels
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 font-urbanist">
                <p>
                  <span className="text-[#641026] font-semibold">
                    Sensory Characteristics:
                  </span>
                  This merlot presents a deep, appealing color that is nearly
                  indistinguishable From a conventional red wine. The nose
                  reveals a spicy-fruity bouquet with notes of dried berries and
                  a Hint of red pepper.
                </p>

                <p>
                  <span className="text-[#641026] font-semibold">
                    Tasting Notes:
                  </span>
                  A smooth, fruit-driven merlot with deep notes of dark berries,
                  plum, and a hint of spice.On the palate, it's soft and
                  rounded, with gentle tannins and a pleasantly dry finish.A
                  refined and full-bodied red - without the alcohol.
                </p>

                <p className="text-[#641026] font-semibold">
                  Serving Suggestions
                </p>

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

                <p>
                  <span className="text-[#641026] font-semibold">
                    Serving temperature
                  </span>{" "}
                  10°-12°C
                </p>
                <p>
                  <span className="text-[#641026] font-semibold">
                    Bottle Size
                  </span>{" "}
                  0.75l
                </p>
                <p>
                  <span className="text-[#641026] font-semibold">
                    Made in Germany
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4 font-urbanist">
                <p className="font-semibold text-md text-[#0B0B0B]">Quantity</p>
                <button className="flex items-center gap-7 px-6 py-1.5 font-semibold rounded-full border border-[#EED291] w-fit">
                  <Minus
                    className="w-4 h-4 text-[#0B0B0B] cursor-pointer"
                    onClick={() => dispatch(decrementQuantity(currentProduct._id))}
                  />

                  <p className="text-[#0B0B0B] font-semibold text-xl">
                    {availableProductInCart
                      ? availableProductInCart.quantity
                      : 1}
                  </p>
                  <Plus
                    className="w-4 h-4 text-[#0B0B0B] cursor-pointer"
                    onClick={() => dispatch(incrementQuantity(currentProduct._id))}
                  />
                </button>

                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => {
                      dispatch(setDrawerOpen(true));
                      dispatch(addToCartAPI(currentProduct._id));
                    }}
                    className="font-urbanist font-semibold cursor-pointer text-base text-[#0B0B0B] bg-[#EED291] w-full rounded-full py-3 hover:bg-[#0B0B0B] hover:text-[#EED291] transition-all duration-800"
                  >
                    ADD TO CART
                  </button>

                  <div className="w-14 xl:w-12 h-10 lg:h-11 flex items-center hover:bg-[#EED291] transition-all duration-800 justify-center rounded-full bg-white border  border-[gray] cursor-pointer">
                    <Heart className=" w-5 h-5 text-[#0B0B0B]" />
                  </div>

                  <div>
                    <Share2 className="cursor-pointer" />
                  </div>
                </div>

                <div>
                  <button className="font-urbanist cursor-pointer font-semibold text-base border border-[#EED291] text-[#0B0B0B] bg-transparent w-full rounded-full py-2.5 hover:bg-[#0B0B0B] hover:text-white transition-all duration-800 ">
                    BUY IT NOW
                  </button>

                  <div className="flex gap-2 xl:gap-3 items-center mt-3 lg:mt-0">
                    <img
                      src={payoption1}
                      className="   w-10  lg:w-[100px] h-5 lg:h-[31px]"
                      alt=""
                    />
                    <img
                      src={payoption2}
                      className=" w-12 lg:w-[50px] h-5 lg:h-[31px]"
                      alt=""
                    />
                    <img
                      src={payoption3}
                      className=" w-12 lg:w-[50px] h-5 lg:h-[31px]"
                      alt=""
                    />
                    <img
                      src={payoption4}
                      className=" w-12  lg:w-[50px] h-5 lg:h-[31px]"
                      alt=""
                    />
                    <img
                      src={payoption5}
                      className=" w-18   lg:w-[60px] h-8 lg:h-[60px]"
                      alt=""
                    />
                    <img
                      src={payoption6}
                      className="w-22   lg:w-[130px] h-12 lg:h-[90px]"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex flex-col font-[urbanist] font-medium gap-2">
                  <div className="flex items-center gap-5">
                    <img src={shipping1} className="w-[40px] h-[40px]" alt="" />
                    <p className="text-[#565656] text-md">
                      Flat Fee $15 nationwide for 3-bottle bundles
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={shipping2} className="w-[40px] h-[40px]" alt="" />
                    <p className="text-[#565656] text-md">
                      Free shipping at $99+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  <p className="font-urbanist">
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
                    <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl ">
                      Product Specifications
                    </h3>
                    <ul className="list-disc list-inside mb-4 font-urbanist">
                      <li>Volume: 750ml</li>
                      <li>Alcohol Content: 13.5%</li>
                      <li>Serving Temperature: 16–18°C</li>
                      <li>Closure Type: Natural Cork</li>
                    </ul>
                    <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl mt-8">
                      Storage Instructions
                    </h3>
                    <p className="font-urbanist">
                      Store in a cool, dark place away from direct sunlight.
                      Best consumed within 2 years of purchase for optimal
                      freshness.
                    </p>
                  </div>
                )}

                {activeTab === "shipping" && (
                  <div>
                    <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl">
                      Returns Policy
                    </h3>
                    <p className="mb-4 font-urbanist">
                      You may return most new, unopened items within 30 days of
                      delivery for a full refund. We'll also pay the return
                      shipping costs if the return is a result of our error (you
                      received an incorrect or defective item, etc.).
                    </p>
                    <p className="mb-4 font-urbanist">
                      You should expect to receive your refund within four weeks
                      of giving your package to the return shipper; however, in
                      many cases you will receive a refund more quickly.
                    </p>
                    <p className="font-urbanist">
                      If you need to return an item, simply login to your
                      account, view your order, and click the "Return Item(s)"
                      button. We'll notify you via e-mail once we've processed
                      the returned item.
                    </p>

                    <h3 className="font-medium font-cormoran mb-2 text-[#0b0b0b] text-2xl mt-8">
                      Shipping
                    </h3>

                    <p className="mb-4 font-urbanist">
                      We can ship to virtually any address in the world. Note
                      that there are restrictions on some products, and some
                      products cannot be shipped to international destinations.
                    </p>
                    <p className="mb-4 font-urbanist">
                      When you place an order, we will estimate shipping and
                      delivery dates for you based on the availability of your
                      items and the shipping options you choose. Depending on
                      the shipping provider you choose, shipping date estimates
                      may appear on the shipping quotes page.
                    </p>
                    <p className="font-urbanist">
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

            {modalContent && (
              <div className="fixed inset-0 bg-white z-[999] overflow-y-auto font-urbanist">
                <div className="flex justify-between items-center px-4 py-1.5 border-b border-gray-300 sticky top-0 bg-[#eed291]">
                  <h2 className="text-lg font-medium uppercase">
                    {modalContent === "description" && "Description"}
                    {modalContent === "additional" &&
                      "Additional Information"}
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
                <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-[#0B0B0B] text-center ">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
