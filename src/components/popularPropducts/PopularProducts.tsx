// import React, { useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const Products = () => {

//   const productsDetails = [

//         {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",

//       flavour: "Riesling",
//     },

//             {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },

//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },

//   ];

//   return (
//     <>
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//             <div>
//               <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//                 Popular products
//               </p>
//             </div>

//             <div className="hidden xl:grid w-full gap-8 md:gap-8 xl:gap-10  grid-cols-2 md:grid-cols-3 transition-all duration-500">
//               {productsDetails.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>

//             <div className="block xl:hidden">
//             <Swiper
//               modules={[Pagination]}
//               pagination={{ clickable: true }}
//               spaceBetween={30}
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//               }}
//               className="!pb-10 "
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index} className="flex items-stretch">
//                    <ProductsChild key={index} product={product} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Products;

// import React from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Navigation, HashNavigation } from "swiper/modules";

// const PopularProducts = () => {
//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <>
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//             <div>
//               <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//                 Popular products
//               </p>
//             </div>

//             {/* Grid View for XL and above */}
//             <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//               {productsDetails.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>

//             {/* Swiper for below XL */}
//             <div className="block xl:hidden w-full">
//               <Swiper
//                 modules={[Pagination]}
//                 pagination={{ clickable: true }}
//                 hashNavigation={{
//                   watchState: true,
//                 }}
//                 spaceBetween={20}
//                 breakpoints={{
//                   0: { slidesPerView: 2 },
//                   640: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation, HashNavigation]}
//                 className="!pb-10"
//               >
//                 {productsDetails.map((product, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="px-2">
//                       <ProductsChild product={product} />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PopularProducts;

// import React from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // icons similar to figma

// const PopularProducts = () => {
//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <>
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//             <div>
//               <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//                 Popular products
//               </p>
//             </div>

//             {/* Grid View for XL and above */}
//             <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//               {productsDetails.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>

//             {/* Swiper for below XL with custom arrows */}
//             <div className="block xl:hidden w-full relative">
//               <Swiper
//                 modules={[Navigation]}
//                 navigation={{
//                   nextEl: ".swiper-button-next-custom",
//                   prevEl: ".swiper-button-prev-custom",
//                 }}
//                 spaceBetween={20}
//                 breakpoints={{
//                   0: { slidesPerView: 2 },
//                   640: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                 }}
//                 className="!pb-10"
//               >
//                 {productsDetails.map((product, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="px-2">
//                       <ProductsChild product={product} />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Custom Navigation Arrows */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 mt-14 ">
//                 <button className="swiper-button-prev-custom border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition">
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button className="swiper-button-next-custom border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition">
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PopularProducts;

// import React, { useRef } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <>
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//             <div>
//               <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//                 Popular products
//               </p>
//             </div>

//             {/* Grid View for XL and above */}
//             <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//               {productsDetails.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>

//             {/* Swiper for below XL with working custom arrows */}
//             <div className="block xl:hidden w-full relative">
//               <Swiper
//                 modules={[Navigation]}
//                 spaceBetween={20}
//                 breakpoints={{
//                   0: { slidesPerView: 2 },
//                   640: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                 }}
//                 onBeforeInit={(swiper) => {
//                   // assign the refs to swiper navigation before init
//                   swiper.params.navigation.prevEl = prevRef.current;
//                   swiper.params.navigation.nextEl = nextRef.current;
//                 }}
//                 navigation={{
//                   prevEl: prevRef.current,
//                   nextEl: nextRef.current,
//                 }}
//                 className="!pb-10"
//               >
//                 {productsDetails.map((product, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="px-2">
//                       <ProductsChild product={product} />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Custom Navigation Arrows */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 mt-14">
//                 <button
//                   ref={prevRef}
//                   className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   ref={nextRef}
//                   className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PopularProducts;

// import React, { useRef, useEffect, useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const [swiperInstance, setSwiperInstance] = useState<any>(null);

//   useEffect(() => {

//     if (swiperInstance && prevRef.current && nextRef.current) {
//       swiperInstance.params.navigation.prevEl = prevRef.current;
//       swiperInstance.params.navigation.nextEl = nextRef.current;

//       swiperInstance.navigation.destroy();
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]);

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F8F8F8]">
//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//           <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//             Popular products
//           </p>

        
//           <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//             {productsDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

 
//           <div className="block xl:hidden w-full relative">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               onSwiper={(swiper) => setSwiperInstance(swiper)} 
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//               }}
//               className="!pb-10"
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index}>
         
//                   <div className="px-2 h-full">
//                     <ProductsChild product={product} />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 mt-14">
//               <button
//                 ref={prevRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 ref={nextRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;



// import React, { useRef, useEffect, useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const [swiperInstance, setSwiperInstance] = useState<any>(null);

//   useEffect(() => {
//     if (
//       swiperInstance &&
//       swiperInstance.params &&
//       prevRef.current &&
//       nextRef.current
//     ) {
//       swiperInstance.params.navigation.prevEl = prevRef.current;
//       swiperInstance.params.navigation.nextEl = nextRef.current;

//       swiperInstance.navigation.destroy();
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance, prevRef, nextRef]);

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F8F8F8]">
//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//           <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//             Popular products
//           </p>

//           {/* Grid for XL and above */}
//           <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//             {productsDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

//           {/* Swiper for below XL */}
//           <div className="block xl:hidden w-full relative">

//                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 mt-14">
//               <button
//                 ref={prevRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 ref={nextRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
            
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               onSwiper={(swiper) => setSwiperInstance(swiper)}
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//               }}
//               className="!pb-10"
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="px-2 h-full">
//                     <ProductsChild product={product} />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Custom Navigation Buttons */}
         
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;



// import React, { useRef, useEffect, useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const [swiperInstance, setSwiperInstance] = useState<any>(null);

//   useEffect(() => {
//     // Wait for DOM refs and swiper instance to exist before setting navigation
//     const timer = setTimeout(() => {
//       if (
//         swiperInstance &&
//         prevRef.current &&
//         nextRef.current &&
//         swiperInstance.params
//       ) {
//         swiperInstance.params.navigation.prevEl = prevRef.current;
//         swiperInstance.params.navigation.nextEl = nextRef.current;

//         swiperInstance.navigation.destroy();
//         swiperInstance.navigation.init();
//         swiperInstance.navigation.update();
//       }
//     }, 0);

//     return () => clearTimeout(timer);
//   }, [swiperInstance]);

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F8F8F8]">
//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//           <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//             Popular products
//           </p>

//           {/* Grid for XL and above */}
//           <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//             {productsDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

//           {/* Swiper for below XL */}
//           <div className="block xl:hidden w-full relative">
//             {/* Swiper component */}
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               onSwiper={(swiper) => setSwiperInstance(swiper)}
//               navigation={false} // disable auto-init navigation
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//               }}
//               className="!pb-16"
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="px-2 h-full">
//                     <ProductsChild product={product} />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Custom Navigation Buttons */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
//               <button
//                 ref={prevRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 ref={nextRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;



// import React, { useRef } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F8F8F8]">
//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//           <p className="font-cormorant font-bold text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//             Popular products
//           </p>

//           {/* Grid for XL and above */}
//           <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//             {productsDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

//           {/* Swiper for below XL */}
//           <div className="block xl:hidden w-full relative">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               navigation={{
//                 prevEl: prevRef.current,
//                 nextEl: nextRef.current,
//               }}
//               onBeforeInit={(swiper) => {
//                 // Attach refs before swiper initializes
//                 // This ensures navigation buttons work immediately
//                 if (typeof swiper.params.navigation !== "boolean") {
//                   swiper.params.navigation.prevEl = prevRef.current;
//                   swiper.params.navigation.nextEl = nextRef.current;
//                 }
//               }}
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//               }}
//               className="!pb-16"
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="px-2 h-full">
//                     <ProductsChild product={product} />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Custom Navigation Buttons */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
//               <button
//                 ref={prevRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 ref={nextRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;



// import React, { useRef, useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
//   import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const [showNav, setShowNav] = useState(true);

//   const handleNavigationVisibility = (swiper: any) => {
//     if (swiper.slides.length <= swiper.params.slidesPerView) {
//       setShowNav(false);
//     } else {
//       setShowNav(true);
//     }

//     if (swiper.navigation) {
//       swiper.navigation.destroy();
//       swiper.navigation.init();
//       swiper.navigation.update();
//     }

//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#F8F8F8]">
//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//           <p className="font-cormorant font-bold text-[28px] xl:text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//             Popular products
//           </p>

//           <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//             {productsDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

   
//           <div className="block xl:hidden w-full relative">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               navigation={{
//                 prevEl: prevRef.current,
//                 nextEl: nextRef.current,
//               }}
//               onBeforeInit={(swiper) => {
//                 if (typeof swiper.params.navigation !== "boolean") {
//                   swiper.params.navigation.prevEl = prevRef.current;
//                   swiper.params.navigation.nextEl = nextRef.current;
//                 }
//               }}
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//               }}
//               className="!pb-16"
//               onInit={(swiper) => handleNavigationVisibility(swiper)}
//               onResize={(swiper) => handleNavigationVisibility(swiper)}
//               onSlideChange={(swiper) => {
//                 setIsBeginning(swiper.isBeginning);
//                 setIsEnd(swiper.isEnd);
//               }}
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="px-2 h-full">
//                     <ProductsChild product={product} />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>


//             {showNav && (
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
//                 <button
//                   ref={prevRef}
//                   className={`border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition ${
//                     isBeginning ? "opacity-40 cursor-not-allowed" : ""
//                   }`}
//                   disabled={isBeginning}
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   ref={nextRef}
//                   className={`border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition ${
//                     isEnd ? "opacity-40 cursor-not-allowed" : ""
//                   }`}
//                   disabled={isEnd}
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;





// import React, { useRef, useEffect, useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "../products/productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// import { ChevronLeft, ChevronRight } from "lucide-react";

// const PopularProducts = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);

//   const [swiperInstance, setSwiperInstance] = useState<any>(null);

//   const productsDetails = [
//     {
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       flavour: "Riesling",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product1,
//       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealalcoolized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.76",
//       medal: productmedal,
//       flavour: "Merlot",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealalcoolized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       flavour: "Rouge Pur",
//     },
//   ];

//   useEffect(() => {
//     if (swiperInstance && prevRef.current && nextRef.current) {
//       swiperInstance.params.navigation.prevEl = prevRef.current;
//       swiperInstance.params.navigation.nextEl = nextRef.current;

//       swiperInstance.navigation.destroy();
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]);

//   return (
//     <div className="w-full bg-[#F8F8F8]">
//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//           <p className="font-cormorant font-bold text-[28px] xl:text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
//             Popular products
//           </p>

//           <div className="hidden xl:grid w-full gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
//             {productsDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>


//           <div className="block xl:hidden w-full relative">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               onSwiper={setSwiperInstance} // store swiper instance
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//               }}
//               className="!pb-16"
//             >
//               {productsDetails.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="px-2 h-full">
//                     <ProductsChild product={product} />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>


//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
//               <button
//                 ref={prevRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 ref={nextRef}
//                 className="border border-[#0B0B0B] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#0B0B0B] hover:text-white transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;




// import React, { useState } from "react";
// import Title from "./Title";
// import product1 from "/products/product1.png";
// import product2 from "/products/product2.png";
// import product3 from "/products/product3.png";
// import Product from "./Product";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation } from "swiper/modules";

import React, {  useState } from "react";
import product1 from "../../assets/images/product1.png";
import verietyImg from "../../assets/images/variety.png";
import productmedal from "../../assets/images/productmedal.png";
import ProductsChild from "../products/productsChild";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import thirdtabproduct from "../../assets/images/thirdtabproduct.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

const PopularProducts = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleNavigationVisibility = (swiper) => {
    if (swiper.slides.length <= swiper.params.slidesPerView) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const productDetails = [
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
        id: 1,
      type: "Bergdolt, Reif & Nett",
      productImg: product1,
      productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealalcoolized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$29.76",
      medal: productmedal,
      flavour: "Merlot",
    },
    {
      id: 8,
      type: "KvD Strauch Sektmanufaktur",
      productImg: thirdtabproduct,
      productName:
        "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealalcoolized",
      variety: "Grape variety",
      varietylogo: verietyImg,
      price: "$28.91",
      flavour: "Rouge Pur",
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-10 md:py-20">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        {/* Title */}
        <div className="flex flex-col gap-8">
                        <p className="font-cormorant font-bold text-[28px] xl:text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
             Popular products
           </p>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper pb-16"
            onInit={(swiper) => {
              handleNavigationVisibility(swiper);
            }}
            onResize={(swiper) => {
              handleNavigationVisibility(swiper);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {productDetails.map((product, index) => (
              <SwiperSlide key={index}>
            <ProductsChild key={index} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {showNav && (
            <div className="flex justify-center gap-2 mt-6">
              <button
                className={`swiper-button-prev-custom border border-black rounded-full w-12 h-12 flex items-center justify-center shadow-md transition ${
                  isBeginning
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}
                disabled={isBeginning}
              >
                ❮
              </button>
              <button
                className={`swiper-button-next-custom border border-black rounded-full w-12 h-12 flex items-center justify-center shadow-md transition ${
                  isEnd ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
                disabled={isEnd}
              >
                ❯
              </button>
            </div>
          )}
        </div>
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;
