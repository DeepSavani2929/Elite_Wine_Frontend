// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";

// const BlogDetails = () => {
//   const { blogId } = useParams();

//   const blogDetails = useSelector((state: any) => state.blog.blogDetails);
//   const products = useSelector((state: any) => state.cart.productsDetails);

//   // Find selected blog
//   const blog = blogDetails.find(
//     (item: any) => item.id === Number(blogId)
//   );

//   // Filter featured products – only the first 3
//   const featuredProducts = products
//     .filter((p: any) => p.categoryType === "Featured")
//     .slice(0, 3);

//   if (!blog) return <div className="text-center py-10">Blog Not Found</div>;

//   return (
//     <>
//       {/* Banner */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative bg-cover bg-center">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="ms-1 me-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto  flex flex-col lg:flex-row gap-22">

//         {/* LEFT SIDEBAR */}
//         <div className="w-full lg:w-[18%] flex flex-col gap-10">

//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((blog: any) => (
//                 <div key={blog.id} className="flex flex-col gap-2 border-b border-[#CCCCCC] last:border-b-0 pb-5">
//                   <Link
//                     to={`/blog/blogDetails/${blog.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {blog.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656] mt-1">
//                     {blog.createdDate}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Featured Products */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <div className="flex flex-col gap-5">
//               {featuredProducts.map((product: any) => (
//                 <div key={product.id} className="flex items-center gap-3">
//                   <img
//                     src={product.productImg}
//                     alt={product.productName}
//                     className="w-[60px] h-[80px] object-cover rounded"
//                   />
//                   <div>
//                     <p className="font-urbanist font-semibold text-[#0B0B0B] leading-tight">
//                       {product.productName}
//                     </p>
//                     <p className="font-urbanist text-sm text-[#565656]">
//                       ${product.price}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-full lg:w-[80%]">

//           {/* Blog Title */}
//           <h1 className="font-urbanist font-semibold text-2xl  text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           {/* Author + Date */}
//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             by <span className="font-medium">Lores Rode</span> • 25 Sep 2025
//           </p>

//           {/* Blog Image */}
//           {/* <div className="w-full mb-6">
//             <img
//               src={blog.blogImg}
//               alt="Blog main"
//               className="w-full h-auto rounded-md"
//             />
//           </div> */}

//           {/* Blog Content */}
//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>

//       </div>
//     </>
//   );
// };

// export default BlogDetails;




// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";

// // ⭐ Swiper imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import ProductsChild from "../products/productsChild";

// const BlogDetails = () => {
//   const { blogId } = useParams();

//   const blogDetails = useSelector((state: any) => state.blog.blogDetails);
//   const products = useSelector((state: any) => state.cart.productsDetails);

//   // Find selected blog
//   const blog = blogDetails.find((item: any) => item.id === Number(blogId));

//   // Filter featured products – only the first 3
//   const featuredProducts = products
//     .filter((p: any) => p.categoryType === "Featured")
//     .slice(0, 3);

//   if (!blog) return <div className="text-center py-10">Blog Not Found</div>;

//   return (
//     <>
//       {/* Banner */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative bg-cover bg-center">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="ms-1 me-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto flex flex-col lg:flex-row gap-22">

//         {/* LEFT SIDEBAR */}
//         <div className="w-full lg:w-[18%] flex flex-col gap-10">

//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((blog: any) => (
//                 <div
//                   key={blog.id}
//                   className="flex flex-col gap-2 border-b border-[#CCCCCC] last:border-b-0 pb-5"
//                 >
//                   <Link
//                     to={`/blog/blogDetails/${blog.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {blog.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656] mt-1">
//                     {blog.createdDate}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ⭐ FEATURED PRODUCTS – UPDATED WITH SWIPER */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <Swiper
//               modules={[Navigation]}
//               navigation
//               slidesPerView={1}
//               loop={true}
//               className="w-full"
//             >
//               {featuredProducts.map((product: any, index) => (
//                 <SwiperSlide key={product.id}>
//                   <div className="flex flex-col items-center text-center gap-3 py-3">

             
//                     <img
//                       src={product.productImg}
//                       alt={product.productName}
//                       className="w-[160px] h-[320px] object-cover mx-auto"
//                     />

           
//                     <p className="font-urbanist font-semibold text-[16px] text-[#641026] px-2">
//                       {product.productName}
//                     </p>

         
//                     <div className="flex justify-between w-full px-2 text-[#565656] text-sm">
//                       <p className="flex items-center gap-1">
//                         {product.variety}
//                         <img
//                           src={product.varietylogo}
//                           alt="variety"
//                           className="w-[15px] h-[15px]"
//                         />
//                       </p>
//                       <p>{product.flavour}</p>
//                     </div>

             
//                     <p className="font-urbanist font-semibold text-lg text-[#0B0B0B]">
//                       ${product.price}
//                     </p>

//                   </div>
//                    {/* <ProductsChild key={index} product={product} /> */}

//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-full lg:w-[80%]">

//           {/* Blog Title */}
//           <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           {/* Author + Date */}
//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             by <span className="font-medium">Lores Rode</span> • 25 Sep 2025
//           </p>

//           {/* Blog Content */}
//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>

//       </div>
//     </>
//   );
// };

// export default BlogDetails;




// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import ProductsChild from "../products/productsChild";

// const BlogDetails = () => {
//   const { blogId } = useParams();

//   const blogDetails = useSelector((state) => state.blog.blogDetails);
//   const products = useSelector((state) => state.cart.productsDetails);

//   const blog = blogDetails.find((item) => item.id === Number(blogId));

//   const featuredProducts = products
//     .filter((p) => p.categoryType === "Featured")
//     .slice(0, 3);

//   if (!blog) return <div className="py-10 text-center">Blog Not Found</div>;

//   return (
//     <>
//       {/* Banner */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="mx-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>
//       </div>

//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto flex flex-col lg:flex-row gap-22">

//         {/* LEFT SIDEBAR */}
//         <div className="w-full lg:w-[18%] flex flex-col gap-10">
          
//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((blog) => (
//                 <div key={blog.id} className="border-b pb-5 last:border-b-0">
//                   <Link
//                     to={`/blog/blogDetails/${blog.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {blog.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656]">{blog.createdDate}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* FEATURED SLIDER */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <Swiper
//               modules={[Navigation]}
//               navigation
//               slidesPerView={1}
//               loop
//               className="w-full"
//             >
//               {featuredProducts.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductsChild product={product} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-full lg:w-[80%]">
//           <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             by <span className="font-medium">Lores Rode</span> • 25 Sep 2025
//           </p>

//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;



// import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { MoveLeft, MoveRight } from "lucide-react";
// import ProductsChild from "../products/productsChild";

// const BlogDetails = () => {
//   const { blogId } = useParams();
  
//       const [isBeginning, setIsBeginning] = useState(true);
//       const [isEnd, setIsEnd] = useState(false);

//   const blogDetails = useSelector((state) => state.blog.blogDetails);
//   const products = useSelector((state) => state.cart.productsDetails);

//   const blog = blogDetails.find((item) => item.id === Number(blogId));

//   const featuredProducts = products
//     .filter((p) => p.categoryType === "Featured")
//     .slice(0, 3);

//   const swiperRef = useRef(null);

//   if (!blog) return <div className="py-10 text-center">Blog Not Found</div>;

//   return (
//     <>
//       {/* Banner */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="mx-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>
//       </div>

//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto flex flex-col lg:flex-row gap-22">

//         {/* LEFT SIDEBAR */}
//         <div className="w-full lg:w-[18%] flex flex-col gap-10">
          
//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((blog) => (
//                 <div key={blog.id} className="border-b pb-5 last:border-b-0">
//                   <Link
//                     to={`/blog/blogDetails/${blog.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {blog.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656]">{blog.createdDate}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* FEATURED PRODUCTS WITH CUSTOM ARROWS */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <div className="relative w-full">

//               {/* CUSTOM LEFT ARROW */}
//               <button
//                 onClick={() => swiperRef.current.slidePrev()}
//                 className={`absolute left-4 top-[260px] cursor-pointer z-20 bg-transparent ${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
//               >
//                 <MoveLeft className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               {/* CUSTOM RIGHT ARROW */}
//               <button
//                 onClick={() => swiperRef.current.slideNext()}
//                 className={`absolute right-4 top-[260px] cursor-pointer z-20 bg-transparent ${isEnd ? "opacity-30 pointer-events-none" : ""}`}
//               >
//                 <MoveRight className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <Swiper
//                 slidesPerView={1}
//                 loop
//                       onSwiper={(swiper) => {
//                       swiperRef.current = swiper;
//                       setIsBeginning(swiper.isBeginning);
//                       setIsEnd(swiper.isEnd);
//                     }}
//                     onSlideChange={(swiper) => {
//                       setIsBeginning(swiper.isBeginning);
//                       setIsEnd(swiper.isEnd);
//                     }}
//                 className="w-full"
//               >
//                 {featuredProducts.map((product) => (
//                   <SwiperSlide key={product.id}>
//                     <ProductsChild product={product} />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-full lg:w-[80%]">
//           <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             by <span className="font-medium">Lores Rode</span> • 25 Sep 2025
//           </p>

//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;



// import React, { useRef, useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { MoveLeft, MoveRight, X, Menu } from "lucide-react";
// import ProductsChild from "../products/productsChild";

// const BlogDetails = () => {
//   const { blogId } = useParams();
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const blogDetails = useSelector((state: any) => state.blog.blogDetails);
//   // your products live under cart.productsDetails per your code
//   const products = useSelector((state: any) => state.cart.productsDetails);

//   const blog = blogDetails.find((item: any) => item.id === Number(blogId));

//   // Featured products (first 3)
//   const featuredProducts = products
//     .filter((p: any) => p.categoryType === "Featured")
//     .slice(0, 3);

//   // Swiper ref for featured products controls
//   const swiperRef = useRef<any>(null);

//   // Drawer state for <= 1024px
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Lock body scroll when drawer is open (mobile)
//   useEffect(() => {
//     if (drawerOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [drawerOpen]);

//   if (!blog) return <div className="py-10 text-center">Blog Not Found</div>;

//   return (
//     <>
//       {/* Banner */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="mx-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>

//         {/* HAMBURGER (visible on <=1024px) - placed top-left inside page */}
//         <button
//           aria-label="Open sidebar"
//           onClick={() => setDrawerOpen(true)}
//           className="xl:hidden absolute left-4 top-100 z-60 bg-transparent p-2 rounded-md"
//         >
//           {/* Using Menu icon styled white to match header */}
//           <Menu className="w-6 h-6 text-black" />
//         </button>
//       </div>

//       {/* Main area */}
//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto flex flex-col xl:flex-row gap-22 relative">

//         {/* LEFT SIDEBAR (desktop only) - hidden on <=lg */}
//         <div className="hidden xl:flex w-full xl:w-[18%] flex-col gap-10">
//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((b: any) => (
//                 <div key={b.id} className="border-b pb-5 last:border-b-0">
//                   <Link
//                     to={`/blog/blogDetails/${b.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {b.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656]">{b.createdDate}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Featured Products */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <div className="relative w-full">
//               {/* arrows */}
//               <button
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 className={`absolute left-4 top-[260px] cursor-pointer z-20 bg-transparent ${isBeginning ? "opacity-30 pointer-events-none" : ""
//                   }`}
//               >
//                 <MoveLeft className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <button
//                 onClick={() => swiperRef.current?.slideNext()}
//                 className={`absolute right-4 top-[260px] cursor-pointer z-20 bg-transparent ${isEnd ? "opacity-30 pointer-events-none" : ""
//                   }`}
//               >
//                 <MoveRight className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <Swiper
//                 slidesPerView={1}
//                 loop
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 onSlideChange={(swiper) => {
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 className="w-full"
//               >
//                 {featuredProducts.map((product: any) => (
//                   <div key={product.id}>
//                     <SwiperSlide>
//                       <ProductsChild product={product} />
//                     </SwiperSlide>
//                   </div>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT (main blog) */}
//         <div className="w-full xl:w-[80%]">
//           <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             by <span className="font-medium">Lores Rode</span> • 25 Sep 2025
//           </p>

//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>
//       </div>

//       {/* ---------------------------
//           DRAWER (for <= 1024px)
//          --------------------------- */}
//       {/* overlay */}
//       <div
//         className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-300 ${drawerOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
//           } lg:hidden`}
//         onClick={() => setDrawerOpen(false)}
//       />

//       {/* drawer panel */}
//       <aside
//         className={`fixed top-0 left-0 h-full z-50 transform bg-white w-80 md:w-96 p-6 overflow-auto transition-transform duration-300 ease-in-out lg:hidden ${drawerOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         aria-hidden={!drawerOpen}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setDrawerOpen(false)}
//           className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center bg-[#641026] text-white rounded-sm"
//           aria-label="Close sidebar"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Drawer content - Recent posts */}
//         <div className="mt-8">
//           <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
//             Recent Post
//           </h3>

//           <div className="flex flex-col gap-4 border-t pt-4">
//             {blogDetails.slice(0, 6).map((b: any) => (
//               <div key={b.id} className="py-3 border-b last:border-b-0">
//                 <Link
//                   to={`/blog/blogDetails/${b.id}`}
//                   onClick={() => setDrawerOpen(false)}
//                   className="font-urbanist text-[15px] font-medium text-[#0B0B0B] hover:text-[#641026]"
//                 >
//                   {b.blogTitle}
//                 </Link>
//                 <p className="text-sm text-[#565656] mt-1">{b.createdDate}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Products */}
//         <div className="mt-6">
//           <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
//             Featured Products
//           </h3>

//           <div className="relative">
//             {/* arrows inside drawer */}
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className={`absolute left-2 top-2 cursor-pointer z-20 bg-transparent ${isBeginning ? "opacity-30 pointer-events-none" : ""
//                 }`}
//             >
//               <MoveLeft className="w-6 h-6 text-[#0B0B0B]" />
//             </button>

//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className={`absolute right-2 top-2 cursor-pointer z-20 bg-transparent ${isEnd ? "opacity-30 pointer-events-none" : ""
//                 }`}
//             >
//               <MoveRight className="w-6 h-6 text-[#0B0B0B]" />
//             </button>

//             <Swiper
//               slidesPerView={1}
//               loop
//               onSwiper={(swiper) => {
//                 swiperRef.current = swiper;
//                 setIsBeginning(swiper.isBeginning);
//                 setIsEnd(swiper.isEnd);
//               }}
//               onSlideChange={(swiper) => {
//                 setIsBeginning(swiper.isBeginning);
//                 setIsEnd(swiper.isEnd);
//               }}
//             >
//               {featuredProducts.map((product: any) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductsChild product={product} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default BlogDetails;



// =======================
// BlogDetails.tsx (UPDATED)
// =======================

// import React, { useRef, useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { MoveLeft, MoveRight, X, Menu } from "lucide-react";
// import ProductsChild from "../products/productsChild";

// const BlogDetails = () => {
//   const { blogId } = useParams();

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const swiperRef = useRef<any>(null);

//   const blogDetails = useSelector((state: any) => state.blog.blogDetails);
//   const products = useSelector((state: any) => state.cart.productsDetails);

//   const blog = blogDetails.find((item: any) => item.id === Number(blogId));

//   const featuredProducts = products
//     .filter((p: any) => p.categoryType === "Featured")
//     .slice(0, 3);

//   // Disable body scroll when drawer is open
//   useEffect(() => {
//     document.body.style.overflow = drawerOpen ? "hidden" : "";
//   }, [drawerOpen]);

//   if (!blog) return <div className="py-10 text-center">Blog Not Found</div>;

//   return (
//     <>
//       {/* ===== Banner Section ===== */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">

//         {/* White Hamburger icon for <=1024px */}
//         <button
//           aria-label="Open Sidebar"
//           onClick={() => setDrawerOpen(true)}
//           className="xl:hidden absolute left-4 top-100 z-[200] p-2 rounded-md"
//         >
//           <Menu className="w-6 h-6 text-black" />
//         </button>

//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="mx-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>
//       </div>

//       {/* ===== Main Layout (Desktop) ===== */}
//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto mt-30 md:mt-20     xl:mt-0 flex flex-col xl:flex-row gap-22 relative">

//         {/* LEFT SIDEBAR (only visible above 1024px) */}
//         <div className="hidden xl:flex w-[18%] flex-col gap-10">

//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((b: any) => (
//                 <div key={b.id} className="border-b pb-5 last:border-b-0">
//                   <Link
//                     to={`/blog/blogDetails/${b.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {b.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656]">
//                     {b.createdDate || "25 September 2025"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Featured Products */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <div className="relative w-full">
//               <button
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 className={`absolute left-4 top-[260px] cursor-pointer z-20 bg-transparent 
//                   ${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
//               >
//                 <MoveLeft className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <button
//                 onClick={() => swiperRef.current?.slideNext()}
//                 className={`absolute right-4 top-[260px] cursor-pointer z-20 bg-transparent 
//                   ${isEnd ? "opacity-30 pointer-events-none" : ""}`}
//               >
//                 <MoveRight className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <Swiper
//                 slidesPerView={1}
//                 loop
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 onSlideChange={(swiper) => {
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//               >
//                 {featuredProducts.map((product: any) => (
//                   <SwiperSlide key={product.id}>
//                     <ProductsChild product={product} />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-full xl:w-[80%]">
//           <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             By Ioana Rednic • 25 Sep 2025
//           </p>

//           {/* Blog Content */}
//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>
//       </div>

//       {/* ============================
//           MOBILE DRAWER (z-[999999])
//          ============================ */}
      
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-[999998] xl:hidden 
//           ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         onClick={() => setDrawerOpen(false)}
//       />

//       {/* Drawer Panel */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-80 md:w-[750px] bg-white 
//           overflow-auto transition-transform duration-300 ease-in-out 
//           z-[999999] xl:hidden 
//           ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <button
//           onClick={() => setDrawerOpen(false)}
//           className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center 
//             bg-[#641026] text-white rounded-sm"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Drawer Title */}
//         <div className="mt-10">
//           <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
//             Recent Post
//           </h3>

//           <div className="flex flex-col gap-4 border-t pt-4">
//             {blogDetails.slice(0, 6).map((b: any) => (
//               <div key={b.id} className="py-3 border-b last:border-b-0">
//                 <Link
//                   to={`/blog/blogDetails/${b.id}`}
//                   onClick={() => setDrawerOpen(false)}
//                   className="font-urbanist text-[15px] font-medium text-[#0B0B0B]"
//                 >
//                   {b.blogTitle}
//                 </Link>
//                 <p className="text-sm text-[#565656] mt-1">
//                   {b.createdDate || "25 September 2025"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Section */}
//         <div className="mt-6">
//           <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
//             Featured Products
//           </h3>

//           <Swiper
//             slidesPerView={1}
//             loop
//             onSwiper={(s) => (swiperRef.current = s)}
//           >
//             {featuredProducts.map((product: any) => (
//               <SwiperSlide key={product.id}>
//                 <ProductsChild product={product} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default BlogDetails;



// import React, { useRef, useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { MoveLeft, MoveRight, X, SlidersVertical } from "lucide-react";
// import ProductsChild from "../products/productsChild";
// import BlogChild from "../blog/BlogChild";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const BlogDetails = () => {
//   const { blogId } = useParams();

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const swiperRef = useRef<any>(null);

//   const blogDetails = useSelector((state: any) => state.blog.blogDetails);
//   const products = useSelector((state: any) => state.cart.productsDetails);

//   const blog = blogDetails.find((item: any) => item.id === Number(blogId));

//   const featuredProducts = products
//     .filter((p: any) => p.categoryType === "Featured")
//     .slice(0, 3);

//   useEffect(() => {
//     document.body.style.overflow = drawerOpen ? "hidden" : "";
//   }, [drawerOpen]);

//   if (!blog) return <div className="py-10 text-center">Blog Not Found</div>;

//   return (
//     <>
//       {/* =======================
//           BANNER
//       ======================== */}
//       <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">

//         {/* === Sidebar Icon (SlidersVertical) — only below xl === */}
//         <button
//           aria-label="Open Sidebar"
//           onClick={() => setDrawerOpen(true)}
//           className="xl:hidden absolute left-4 top-100 z-[200] p-2 rounded-md"
//         >
//           <SlidersVertical className="w-7 h-7 text-[gray]" />
//         </button>

//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="mx-1">&gt;</span> Blog Detail
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             BLOG DETAIL
//           </p>
//         </div>
//       </div>

//       {/* =======================
//           MAIN CONTENT
//       ======================== */}
//       <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto mt-30 md:mt-20 xl:mt-0 flex flex-col xl:flex-row gap-22 relative">

//         {/* ========= LEFT SIDEBAR (Desktop only) ======== */}
//         <div className="hidden xl:flex w-[18%] flex-col gap-10">

//           {/* Recent Posts */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-[#CCCCCC] border-b pb-1 text-[#641026] mb-3">
//               Recent Post
//             </h3>

//             <div className="flex flex-col gap-4">
//               {blogDetails.slice(0, 3).map((b: any) => (
//                 <div key={b.id} className="border-b border-[#CCCCCC] pb-5 last:border-b-0">
//                   <Link
//                     to={`/blog/blogDetails/${b.id}`}
//                     className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//                   >
//                     {b.blogTitle}
//                   </Link>
//                   <p className="text-base text-[#565656]">
//                     {b.createdDate || "25 September 2025"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Featured */}
//           <div>
//             <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
//               Featured Products
//             </h3>

//             <div className="relative w-full">
//               <button
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 className={`absolute left-4 top-[260px] cursor-pointer z-20
//                 ${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
//               >
//                 <MoveLeft className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <button
//                 onClick={() => swiperRef.current?.slideNext()}
//                 className={`absolute right-4 top-[260px] cursor-pointer z-20
//                 ${isEnd ? "opacity-30 pointer-events-none" : ""}`}
//               >
//                 <MoveRight className="w-7 h-7 text-[#0B0B0B]" />
//               </button>

//               <Swiper
//                 slidesPerView={1}
//                 loop
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//                 onSlideChange={(swiper) => {
//                   setIsBeginning(swiper.isBeginning);
//                   setIsEnd(swiper.isEnd);
//                 }}
//               >
//                 {featuredProducts.map((product: any) => (
//                   <SwiperSlide key={product.id}>
//                     <ProductsChild product={product} />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>

//         {/* ========= RIGHT BLOG CONTENT ========= */}
//         <div className="w-full xl:w-[80%]">
//           <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
//             {blog.blogTitle}
//           </h1>

//           <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
//             By Ioana Rednic • 25 Sep 2025
//           </p>

//           <div
//             className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
//             dangerouslySetInnerHTML={{ __html: blog.blogContent }}
//           />
//         </div>
//       </div>

//             <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="pb-[10px] lg:pb-[50px] xl:pb-[100px] flex flex-col gap-3 mg:gap-10">
//           {/* Title */}
//           <div>
//             <p className="font-cormorant font-bold text-[36px] uppercase text-center text-[#0B0B0B]">
//               Blog
//             </p>
//           </div>

     
//             <div className="hidden lg:flex justify-between gap-8">
//               {blogDetails.map((blog, index) => (
//                 <div key={index} className="flex-1">
//                   <BlogChild blog={blog} />
//                 </div>
//               ))}
//             </div>


//           <div className="block lg:hidden">
//             <Swiper
//               modules={[Pagination]}
//               pagination={{ clickable: true }}
//               spaceBetween={30}
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 }, 
//               }}
//               className="!pb-10"
//             >
//               {blogDetails.map((blog, index) => (
//                 <SwiperSlide key={index} className="flex items-stretch">
//                   <BlogChild blog={blog} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>

//       {/* =======================
//           DRAWER (≤ 1024px)
//       ======================== */}

//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 transition-opacity duration-300 
//         z-[999998] xl:hidden 
//         ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         onClick={() => setDrawerOpen(false)}
//       />

//       {/* Drawer Panel */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-75 md:w-130 lg:w-[750px] bg-white 
//         overflow-auto transition-transform duration-300 ease-in-out px-8
//         z-[999999] xl:hidden
//         ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* Floating Close Button */}

//         <div className="flex justify-between items-center">
//             <p className="mt-6 text-2xl font-semibold text-[#0B0B0B]">Sidebar</p>
//                   <button
//           onClick={() => setDrawerOpen(false)}
//           className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center 
//           bg-[#641026] text-white rounded-sm z-[999999]"
//         >
//           <X className="w-5 h-5" />
//         </button>
//         </div>
  

//         {/* Drawer Title */}
//         <h2 className="font-urbanist font-bold text-2xl text-[#641026] mb-3 mt-6">
//           Recent Post
//         </h2>

//         {/* Recent Posts */}
//         <div className="border-t border-[#CCCCCC] pt-4">
//           {blogDetails.slice(0, 6).map((b: any) => (
//             <div key={b.id} className="py-3 border-b border-[#CCCCCC] last:border-b-0">
//               <Link
//                 to={`/blog/blogDetails/${b.id}`}
//                 onClick={() => setDrawerOpen(false)}
//                 className="font-urbanist text-sm md:text-md xl:text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
//               >
//                 {b.blogTitle}
//               </Link>
//               <p className=" text-sm lg:text-base text-[#565656] mt-1">
//                 {b.createdDate || "25 September 2025"}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Featured Products in Drawer */}
//         <div className="mt-6">
//           <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
//             Featured Products
//           </h3>

//           <div className="relative">
//             {/* Same arrows as desktop */}
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className={`absolute left-2 top-[250px] md:top-[350px] z-20
//               ${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
//             >
//               <MoveLeft className="w-6 h-6 text-[#0B0B0B]" />
//             </button>

//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className={`absolute right-2 top-[250px] md:top-[350px] z-20
//               ${isEnd ? "opacity-30 pointer-events-none" : ""}`}
//             >
//               <MoveRight className="w-6 h-6 text-[#0B0B0B]" />
//             </button>

//             <Swiper
//               slidesPerView={1}
//               loop
//               onSwiper={(s) => (swiperRef.current = s)}
//             >
//               {featuredProducts.map((product: any) => (
//                 <SwiperSlide key={product.id}>
//                       <div
//                         className={`group flex h-full flex-col gap-6 cursor-pointer  transition-all duration-300`}
//                         onClick={() => navigate(`/productDetails/${product.id}`)} 
//                       >
//                         {/* Image Wrapper */}
//                         <div className="relative flex items-center justify-center  overflow-hidden">
//                           <div className="w-full py-10 ">
//                             <img
//                               src={product.productImg}
//                               alt={product.productName}
//                               className="w-full h-[400px] md:h-[650px]  object-contain"
//                             />
//                           </div>
                
//                           <button
//                             className="
//                               absolute bottom-1 left-1/2 w-full -translate-x-1/2 translate-y-6
//                               rounded-full bg-[#EED291] py-4 text-center font-urbanist text-sm
//                               font-semibold text-[#641026] 
                              
//                               opacity-0 pointer-events-none transition-all duration-500 ease-out
                              
//                               group-hover:flex group-hover:items-center group-hover:justify-center
//                               group-hover:opacity-100 group-hover:pointer-events-auto
//                               group-hover:translate-y-0 cursor-pointer
//                               hover:bg-[#641026] hover:text-[#EED291] transition-all duration-800
//                             "
//                             onClick={(e) => { e.stopPropagation();  dispatch(setDrawerOpen(true)); dispatch(addToCart(product)); }}
//                           >
//                             ADD TO CART
//                           </button>
//                         </div>
                
//                         {/* Text Section */}
//                         <div className="flex flex-1 flex-col text-left">
//                           <p className="font-urbanist text-sm md:text-md lg:text-2xl font-semibold text-[#641026] mb-4 hover:text-black leading-snug min-h-[20px] flex items-center">
//                             {product.productName}
//                           </p>
                
//                           <div className="mt-auto flex flex-col gap-4">
//                             <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-0.1 gap-x-1 md:gap-4 text-sm font-medium text-[#5E5E5E]">
                              
//                               <div className="flex items-center gap-2 min-h-[32px] flex-row-reverse md:flex-row">
//                                 <span className="font-urbanist text-md md:text-xl xl:text-base font-semibold text-[#565656] whitespace-nowrap">
//                                   {product.variety}
//                                 </span>
//                                 <img
//                                   src={product.varietylogo}
//                                   alt={`${product.variety} icon`}
//                                   className="h-6 w-6 md:h-8 md:w-8 object-contain"
//                                 />
//                               </div>
                
//                               <div className="flex items-center gap-0.5 text-[#0B0B0B] min-h-[32px]">
//                                 {product.medal && (
//                                   <img
//                                     src={product.medal}
//                                     alt="Medal"
//                                     className="h-6 w-6 md:h-10 md:w-10 object-contain"
//                                   />
//                                 )}
//                                 <span className="font-urbanist text-sm md:text-md xl:text-lg font-semibold text-[#565656]">
//                                   {product.flavour}
//                                 </span>
//                               </div>
//                             </div>
                
//                             <p className="font-urbanist text-md md:text-xl  font-semibold text-[#641026]">
//                               ${product.price}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </aside>


      
//     </>
//   );
// };

// export default BlogDetails;


import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { MoveLeft, MoveRight, X, SlidersVertical } from "lucide-react";
import ProductsChild from "../products/productsChild";
import BlogChild from "../blog/BlogChild";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { addToCart, setDrawerOpen as setCartDrawer } from "../../redux/cart/cartSlice";

const BlogDetails = () => {
  const { blogId } = useParams();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const desktopSwiperRef = useRef<any>(null);
  const drawerSwiperRef = useRef<any>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogDetails = useSelector((state: any) => state.blog.blogDetails);
  const products = useSelector((state: any) => state.cart.productsDetails);

  const blog = blogDetails.find((item: any) => item.id === Number(blogId));

  const featuredProducts = products
    .filter((p: any) => p.categoryType === "Featured")
    .slice(0, 3);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  if (!blog) return <div className="py-10 text-center">Blog Not Found</div>;

  return (
    <>
      {/* ======================= BANNER ======================= */}
      <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">

        {/* SlidersVertical Icon (Below xl only) */}
        <button
          aria-label="Open Sidebar"
          onClick={() => setDrawerOpen(true)}
          className="xl:hidden absolute left-4 top-100 z-[200] p-2 rounded-md"
        >
          <SlidersVertical className="w-7 h-7 text-[gray]" />
        </button>

        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="mx-1">&gt;</span> Blog Detail
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            BLOG DETAIL
          </p>
        </div>
      </div>

      {/* ======================= MAIN CONTENT ======================= */}
      <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto mt-30 md:mt-20 xl:mt-0 flex flex-col xl:flex-row gap-22 relative">

        {/* ================= Desktop Sidebar ================= */}
        <div className="hidden xl:flex w-[18%] flex-col gap-10">

          {/* Recent Posts */}
          <div>
            <h3 className="font-urbanist font-bold text-2xl border-[#CCCCCC] border-b pb-1 text-[#641026] mb-3">
              Recent Post
            </h3>

            <div className="flex flex-col gap-4">
              {blogDetails.slice(0, 3).map((b: any) => (
                <div key={b.id} className="border-b border-[#CCCCCC] pb-5 last:border-b-0">
                  <Link
                    to={`/blog/blogDetails/${b.id}`}
                    className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
                  >
                    {b.blogTitle}
                  </Link>
                  <p className="text-base text-[#565656]">
                    {b.createdDate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div>
            <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
              Featured Products
            </h3>

            <div className="relative w-full">
              {/* Left Arrow */}
              <button
                onClick={() => desktopSwiperRef.current?.slidePrev()}
                className={`absolute left-4 top-[260px] cursor-pointer z-20 
                ${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
              >
                <MoveLeft className="w-7 h-7 text-[#0B0B0B]" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => desktopSwiperRef.current?.slideNext()}
                className={`absolute right-4 top-[260px] cursor-pointer z-20 
                ${isEnd ? "opacity-30 pointer-events-none" : ""}`}
              >
                <MoveRight className="w-7 h-7 text-[#0B0B0B]" />
              </button>

              <Swiper
                slidesPerView={1}
                loop
                onSwiper={(swiper) => {
                  desktopSwiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
              >
                {featuredProducts.map((product: any) => (
                  <SwiperSlide key={product.id}>
                    <ProductsChild product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* ================= Blog Content ================= */}
        <div className="w-full xl:w-[80%]">
          <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
            {blog.blogTitle}
          </h1>

          <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
            By Ioana Rednic • 25 Sep 2025
          </p>

          <div
            className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
            dangerouslySetInnerHTML={{ __html: blog.blogContent }}
          />
        </div>
      </div>

      {/* ======================= BLOG LIST (BOTTOM) ======================= */}

      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="pb-[10px] lg:pb-[50px] xl:pb-[100px] flex flex-col gap-3 mg:gap-10">
          <p className="font-cormorant font-bold text-[36px] uppercase text-center text-[#0B0B0B]">
            Blog
          </p>

          {/* Desktop Grid */}
          <div className="hidden lg:flex justify-between gap-8">
            {blogDetails.map((b, index) => (
              <div key={index} className="flex-1">
                <BlogChild blog={b} />
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="block lg:hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              className="!pb-10"
            >
              {blogDetails.map((b, index) => (
                <SwiperSlide key={index}>
                  <BlogChild blog={b} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ======================= DRAWER ======================= */}

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 
        z-[999998] xl:hidden 
        ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-75 md:w-130 lg:w-[750px] bg-white 
        overflow-auto transition-transform duration-300 ease-in-out px-8
        z-[999999] xl:hidden
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* Header + Close Btn */}
        <div className="flex justify-between items-center">
          <p className="mt-6 text-2xl font-semibold text-[#0B0B0B]">Sidebar</p>

          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center 
              bg-[#641026] text-white rounded-sm z-[999999]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Recent Posts */}
        <h2 className="font-urbanist font-bold text-2xl text-[#641026] mb-3 mt-6">
          Recent Post
        </h2>

        <div className="border-t border-[#CCCCCC] pt-4">
          {blogDetails.slice(0, 6).map((b: any) => (
            <div key={b.id} className="py-3 border-b border-[#CCCCCC] last:border-b-0">
              <Link
                to={`/blog/blogDetails/${b.id}`}
                onClick={() => setDrawerOpen(false)}
                className="font-urbanist text-sm md:text-md xl:text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
              >
                {b.blogTitle}
              </Link>
              <p className="text-sm lg:text-base text-[#565656] mt-1">
                {b.createdDate}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Products in Drawer */}
        <div className="mt-6">
          <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
            Featured Products
          </h3>

          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={() => drawerSwiperRef.current?.slidePrev()}
              className={`absolute left-2 top-[250px] md:top-[350px] z-20
            `}
            >
              <MoveLeft className="w-6 h-6 text-[#0B0B0B]" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => drawerSwiperRef.current?.slideNext()}
              className={`absolute right-2 top-[250px] md:top-[350px] z-20
              `}
            >
              <MoveRight className="w-6 h-6 text-[#0B0B0B]" />
            </button>

            <Swiper
              slidesPerView={1}
              loop
              onSwiper={(swiper) => {
                drawerSwiperRef.current = swiper;
              }}
            >
              {featuredProducts.map((product: any) => (
                <SwiperSlide key={product.id}>
                  <div
                    className="group flex h-full flex-col gap-6 cursor-pointer transition-all duration-300"
                    onClick={() => navigate(`/productDetails/${product.id}`)}
                  >
                    {/* Image */}
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <div className="w-full py-10">
                        <img
                          src={product.productImg}
                          alt={product.productName}
                          className="w-full h-[400px] md:h-[650px] object-contain"
                        />
                      </div>

                      <button
                        className="
                          absolute bottom-1 left-1/2 w-full -translate-x-1/2 translate-y-6
                          rounded-full bg-[#EED291] py-4 text-center font-urbanist text-sm
                          font-semibold text-[#641026]
                          opacity-0 pointer-events-none transition-all duration-500
                          group-hover:flex group-hover:items-center group-hover:justify-center
                          group-hover:opacity-100 group-hover:pointer-events-auto
                          group-hover:translate-y-0 cursor-pointer
                          hover:bg-[#641026] hover:text-[#EED291]
                        "
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(setCartDrawer(true));
                          dispatch(addToCart(product));
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>

                    {/* Text */}
                    <div className="flex flex-1 flex-col text-left">
                      <p className="font-urbanist text-sm md:text-md lg:text-2xl font-semibold text-[#641026] mb-4 leading-snug">
                        {product.productName}
                      </p>

                      <div className="mt-auto flex flex-col gap-4">
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-0.1 gap-x-1 md:gap-4 text-sm font-medium text-[#5E5E5E]">

                          <div className="flex items-center gap-2 min-h-[32px] flex-row-reverse md:flex-row">
                            <span className="font-urbanist text-md md:text-xl font-semibold text-[#565656] whitespace-nowrap">
                              {product.variety}
                            </span>
                            <img
                              src={product.varietylogo}
                              className="h-6 w-6 md:h-8 md:w-8 object-contain"
                            />
                          </div>

                          <div className="flex items-center gap-0.5 text-[#0B0B0B] min-h-[32px]">
                            {product.medal && (
                              <img
                                src={product.medal}
                                className="h-6 w-6 md:h-10 md:w-10 object-contain"
                              />
                            )}
                            <span className="font-urbanist text-sm md:text-md font-semibold text-[#565656]">
                              {product.flavour}
                            </span>
                          </div>
                        </div>

                        <p className="font-urbanist text-md md:text-xl font-semibold text-[#641026]">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogDetails;
