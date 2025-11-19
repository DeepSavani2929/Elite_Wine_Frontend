// import React, { useState } from 'react';
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from '../products/productsChild';
// import FilterDropdown from '../ui/FilterDropDown';
// import { Filter } from 'lucide-react';

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
// }

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: 'Size',
//     price: 'Price',
//     grape: 'Grape',
//     all: 'All',
//     availability: 'Availability',
//     sortBy: 'Best Sellers',
//   });

//   const shopDetails: Product[] = [
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
//       type: "Bergdolt, Reif & Nett",
//       productImg: product2,
//       productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Pinot Noir",
//     },
//     {
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
//       type: "Bergdolt, Reif & Nett",
//       productImg: product4,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Gewurztraminer",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product5,
//       productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Rosé",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product6,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$27.16",
//       flavour: "Riesling",
//     },
//   ];

//     const sizeOptions = ['Size', 'Small', 'Medium', 'Large', 'Extra Large'];
//   const priceOptions = ['Price', 'Under $20', '$20-$30', '$30-$50', 'Over $50'];
//   const grapeOptions = ['Grape', 'Merlot', 'Pinot Noir', 'Sauvignon Blanc', 'Riesling'];
//   const allOptions = ['All', 'Featured', 'Popular', 'New Arrivals'];
//   const availabilityOptions = ['Availability', 'In Stock', 'Pre-Order', 'Coming Soon'];
//   const sortByOptions = [
//     'Best Sellers',
//     'Featured',
//     'Alphabetically A-Z',
//     'Alphabetically Z-A',
//     'Price, low to high',
//     'Price, high to low',
//     'Date, old to new',
//     'Date, new to old',
//   ];

//   const handleFilterChange = (filterName: string, value: string) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//   };

//   return (
//     <>
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-42 md:mt-45 xl:mt-58 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Regulated as a food product. Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className='w-full'>
//         <div className='w-[95%] xl:w-[80%] mx-auto'>

//           {/* FILTER ROW */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center gap-2 md:gap-3">
//               <button className="flex items-center gap-2 px-3 md:px-4 py-2 border border-[#D5D5D5] rounded-lg font-urbanist font-semibold text-xs md:text-sm text-[#0B0B0B] hover:bg-[#F9F9F9] transition-all duration-200">
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-2 lg:gap-3">
//                 <FilterDropdown label="Size" options={sizeOptions} onSelect={(val) => handleFilterChange('size', val)} defaultValue={filters.size} variant="beige" />
//                 <FilterDropdown label="Price" options={priceOptions} onSelect={(val) => handleFilterChange('price', val)} defaultValue={filters.price} variant="beige" />
//                 <FilterDropdown label="Grape" options={grapeOptions} onSelect={(val) => handleFilterChange('grape', val)} defaultValue={filters.grape} variant="beige" />
//                 <FilterDropdown label="All" options={allOptions} onSelect={(val) => handleFilterChange('all', val)} defaultValue={filters.all} variant="beige" />
//                 <FilterDropdown label="Availability" options={availabilityOptions} onSelect={(val) => handleFilterChange('availability', val)} defaultValue={filters.availability} variant="beige" />
//               </div>
//             </div>

//             <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B] whitespace-nowrap">Sort By:</span>
//               <FilterDropdown label="Sort" options={sortByOptions} onSelect={(val) => handleFilterChange('sortBy', val)} defaultValue={filters.sortBy} variant="white" />
//             </div>
//           </div>

//           {/* MOBILE FILTER GRID */}
//           <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
//             <FilterDropdown label="Size" options={sizeOptions} onSelect={(val) => handleFilterChange('size', val)} defaultValue={filters.size} variant="beige" />
//             <FilterDropdown label="Price" options={priceOptions} onSelect={(val) => handleFilterChange('price', val)} defaultValue={filters.price} variant="beige" />
//             <FilterDropdown label="Grape" options={grapeOptions} onSelect={(val) => handleFilterChange('grape', val)} defaultValue={filters.grape} variant="beige" />
//             <FilterDropdown label="All" options={allOptions} onSelect={(val) => handleFilterChange('all', val)} defaultValue={filters.all} variant="beige" />
//           </div>

//           {/* PRODUCT GRID */}
//           <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500 mt-10">
//             {shopDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;

// import React, { useState } from 'react';
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from '../products/productsChild';
// import FilterDropdown from '../ui/FilterDropDown';
// import { Filter } from 'lucide-react';

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
// }

// // UPDATED WITH FIGMA MATCHED DROPDOWN STYLING

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: 'Size',
//     price: 'Price',
//     grape: 'Grape',
//     all: 'All',
//     availability: 'Availability',
//     sortBy: 'Best Sellers',
//   });

//   const shopDetails: Product[] = [
//   {
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
//       type: "Bergdolt, Reif & Nett",
//       productImg: product2,
//       productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Pinot Noir",
//     },
//     {
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
//       type: "Bergdolt, Reif & Nett",
//       productImg: product4,
//       productName:
//         "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$29.38",
//       flavour: "Gewurztraminer",
//     },
//     {
//       type: "Bergdolt, Reif & Nett",
//       productImg: product5,
//       productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.76",
//       flavour: "Rosé",
//     },
//     {
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
//       type: "Lamm Jung",
//       productImg: secondtabproduct,
//       productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$26.97",
//       medal: productmedal,
//       flavour: "Riesling",
//     },
//     {
//       type: "KvD Strauch Sektmanufaktur",
//       productImg: thirdtabproduct,
//       productName:
//         "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.91",
//       medal: productmedal,
//       flavour: "Rouge Pur",
//     },
//     {
//       type: "Château Clos de Boüard",
//       productImg: fourthtabproduct1,
//       productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       type: "Château Clos de Boüard",
//       productImg: fourthtabproduct2,
//       productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       flavour: "Pinot Noir",
//     },
//     {
//       type: "Matthias Anton",
//       productImg: fifthtabproduct1,
//       productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$33.61",
//       medal: productmedal,
//       flavour: "Sauvignon Blanc",
//     },
//     {
//       type: "Matthias Anton",
//       productImg: fifthtabproduct2,
//       productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$28.19",
//       medal: productmedal,
//       flavour: "Pinot Noir",
//     },
//     {
//       type: "Matthias Anton",
//       productImg: fifthtabproduct3,
//       productName: "Matthias Anton Rosé (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Rosé",
//     },
//     {
//       type: "Matthias Anton",
//       productImg: fifthtabproduct4,
//       productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized",
//       variety: "Grape variety",
//       varietylogo: verietyImg,
//       price: "$25.61",
//       flavour: "Pinot Grigio",
//     },
//     {
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

//     const sizeOptions = ['Size', 'Small', 'Medium', 'Large', 'Extra Large'];
//   const priceOptions = ['In Stock(11)', 'Out Of Stock(4)'];
//   const grapeOptions = ['Grape Variety(14)','Grape Variety(1)'];
//   const allOptions = ['All', 'Featured', 'Popular', 'New Arrivals'];
//   const availabilityOptions = ['In Stock(11)', 'Out Of Stock(4)'];
//   const sortByOptions = [
//     'Best Sellers',
//     'Featured',
//     'Alphabetically A-Z',
//     'Alphabetically Z-A',
//     'Price, low to high',
//     'Price, high to low',
//     'Date, old to new',
//     'Date, new to old',
//   ];

//   const handleFilterChange = (filterName: string, value: string) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//   };

//   return (
//     <>
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-42 md:mt-45 xl:mt-58 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Regulated as a food product. Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className='w-full'>
//         <div className='w-[95%] mx-auto pt-[55px] xl:pt-[100px] '>

//           {/* FILTER ROW */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">
//               <button className="flex items-center justify-center gap-2 w-[120px] h-[40px]   rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B] hover:bg-[#E5C97A] transition-all duration-200">
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               <div className="hidden md:flex items-center gap-3">
//                 <div className="w-[140px]">
//                   <FilterDropdown label="Size" options={sizeOptions} onSelect={(val) => handleFilterChange('size', val)} defaultValue={filters.size} variant="beige" />
//                 </div>
//                 <div className="w-[140px]">
//                   <FilterDropdown label="Price" options={priceOptions} onSelect={(val) => handleFilterChange('price', val)} defaultValue={filters.price} variant="beige" />
//                 </div>
//                 <div className="w-[140px]">
//                   <FilterDropdown label="Grape" options={grapeOptions} onSelect={(val) => handleFilterChange('grape', val)} defaultValue={filters.grape} variant="beige" />
//                 </div>
//                 <div className="w-[140px]">
//                   <FilterDropdown label="All" options={allOptions} onSelect={(val) => handleFilterChange('all', val)} defaultValue={filters.all} variant="beige" />
//                 </div>
//                 <div className="w-[140px]">
//                   <FilterDropdown label="Availability" options={availabilityOptions} onSelect={(val) => handleFilterChange('availability', val)} defaultValue={filters.availability} variant="beige" />
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B] whitespace-nowrap">Sort By:</span>
//               <div className="w-[180px]">
//                 <FilterDropdown label="Sort" options={sortByOptions} onSelect={(val) => handleFilterChange('sortBy', val)} defaultValue={filters.sortBy} variant="white" />
//               </div>
//             </div>
//           </div>

//           {/* MOBILE FILTER GRID */}
//           <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
//             <FilterDropdown label="Size" options={sizeOptions} onSelect={(val) => handleFilterChange('size', val)} defaultValue={filters.size} variant="beige" />
//             <FilterDropdown label="Price" options={priceOptions} onSelect={(val) => handleFilterChange('price', val)} defaultValue={filters.price} variant="beige" />
//             <FilterDropdown label="Grape" options={grapeOptions} onSelect={(val) => handleFilterChange('grape', val)} defaultValue={filters.grape} variant="beige" />
//             <FilterDropdown label="All" options={allOptions} onSelect={(val) => handleFilterChange('all', val)} defaultValue={filters.all} variant="beige" />
//           </div>
//         </div>
//           {/* PRODUCT GRID */}
//           <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500 mt-10">
//             {shopDetails.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//           </div>

//       </div>
//     </>
//   );
// };

// export default Shop;

// UPDATED SHOP COMPONENT WITH PAGINATION (6 PRODUCTS PER PAGE)
// MATCHED TO EXISTING DESIGN + COLOR SCHEME

// import React, { useState } from 'react';
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from '../products/productsChild';
// import FilterDropdown from '../ui/FilterDropDown';
// import { Filter } from 'lucide-react';

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
// }

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: 'Size',
//     price: 'Price',
//     grape: 'Grape',
//     all: 'All',
//     availability: 'Availability',
//     sortBy: 'Best Sellers',
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const shopDetails: Product[] = [
//     { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot" },
//     { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir" },
//     { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc" },
//     { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer" },
//     { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé" },
//     { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling" },
//     { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealcoholized (Vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling" },
//     { type: "KvD Strauch Sektmanufaktur", productImg: thirdtabproduct, productName: "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" },
//     { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc" },
//     { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir" },
//     { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Matthias Anton Rosé (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé" },
//     { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio" },
//     { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Matthias Anton Blanc de Blancs Sparkling (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" }
//   ];

//   // Pagination Logic
//   const totalPages = Math.ceil(shopDetails.length / productsPerPage);
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const currentProducts = shopDetails.slice(startIndex, startIndex + productsPerPage);

//   const changePage = (page: number) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const sizeOptions = ['Size', 'Small', 'Medium', 'Large', 'Extra Large'];
//   const priceOptions = ['In Stock(11)', 'Out Of Stock(4)'];
//   const grapeOptions = ['Grape Variety(14)', 'Grape Variety(1)'];
//   const allOptions = ['All', 'Featured', 'Popular', 'New Arrivals'];
//   const availabilityOptions = ['In Stock(11)', 'Out Of Stock(4)'];
//   const sortByOptions = [
//     'Best Sellers',
//     'Featured',
//     'Alphabetically A-Z',
//     'Alphabetically Z-A',
//     'Price, low to high',
//     'Price, high to low',
//     'Date, old to new',
//     'Date, new to old',
//   ];

//   const handleFilterChange = (filterName: string, value: string) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//   };

//   return (
//     <>
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-42 md:mt-45 xl:mt-58 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Regulated as a food product. Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className='w-full'>
//         <div className='w-[95%] mx-auto pt-[55px] xl:pt-[100px] '>

//           {/* FILTER ROW */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">
//               <button className="flex items-center justify-center gap-2 w-[120px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B] hover:bg-[#E5C97A] transition-all duration-200">
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               <div className="hidden md:flex items-center gap-3">
//                 <div className="w-[140px]"><FilterDropdown label="Size" options={sizeOptions} onSelect={(val) => handleFilterChange('size', val)} defaultValue={filters.size} variant="beige" /></div>
//                 <div className="w-[140px]"><FilterDropdown label="Price" options={priceOptions} onSelect={(val) => handleFilterChange('price', val)} defaultValue={filters.price} variant="beige" /></div>
//                 <div className="w-[140px]"><FilterDropdown label="Grape" options={grapeOptions} onSelect={(val) => handleFilterChange('grape', val)} defaultValue={filters.grape} variant="beige" /></div>
//                 <div className="w-[140px]"><FilterDropdown label="All" options={allOptions} onSelect={(val) => handleFilterChange('all', val)} defaultValue={filters.all} variant="beige" /></div>
//                 <div className="w-[140px]"><FilterDropdown label="Availability" options={availabilityOptions} onSelect={(val) => handleFilterChange('availability', val)} defaultValue={filters.availability} variant="beige" /></div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B] whitespace-nowrap">Sort By:</span>
//               <div className="w-[180px]"><FilterDropdown label="Sort" options={sortByOptions} onSelect={(val) => handleFilterChange('sortBy', val)} defaultValue={filters.sortBy} variant="white" /></div>
//             </div>
//           </div>

//           {/* MOBILE FILTER GRID */}
//           <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
//             <FilterDropdown label="Size" options={sizeOptions} onSelect={(val) => handleFilterChange('size', val)} defaultValue={filters.size} variant="beige" />
//             <FilterDropdown label="Price" options={priceOptions} onSelect={(val) => handleFilterChange('price', val)} defaultValue={filters.price} variant="beige" />
//             <FilterDropdown label="Grape" options={grapeOptions} onSelect={(val) => handleFilterChange('grape', val)} defaultValue={filters.grape} variant="beige" />
//             <FilterDropdown label="All" options={allOptions} onSelect={(val) => handleFilterChange('all', val)} defaultValue={filters.all} variant="beige" />
//           </div>
//         </div>

//         {/* PRODUCT GRID */}
//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500 mt-10">
//           {currentProducts.map((product, index) => (
//             <ProductsChild key={index} product={product} />
//           ))}
//         </div>

//         {/* PAGINATION */}
//         <div className="w-full flex justify-center pb-16">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => changePage(currentPage - 1)}
//               className="px-3 py-1 rounded-md border border-[#E5C97A] text-[#0B0B0B] hover:bg-[#E5C97A] transition"
//             >Prev</button>

//             {[...Array(totalPages)].map((_, i) => {
//               const page = i + 1;
//               const active = currentPage === page;
//               return (
//                 <button
//                   key={page}
//                   onClick={() => changePage(page)}
//                   className={`px-4 py-2 rounded-md font-urbanist text-sm transition-all
//                     ${active ? 'bg-[#E5C97A] text-black' : 'bg-white border border-[#E5C97A] text-[#0B0B0B] hover:bg-[#E5C97A]'}`}
//                 >
//                   {page}
//                 </button>
//               );
//             })}

//             <button
//               onClick={() => changePage(currentPage + 1)}
//               className="px-3 py-1 rounded-md border border-[#E5C97A] text-[#0B0B0B] hover:bg-[#E5C97A] transition"
//             >Next</button>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Shop

// ===== Updated Shop.tsx =====

// import React, { useState } from 'react';
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from '../products/productsChild';
// import FilterDropdown from '../ui/FilterDropDown';
// import { Filter } from 'lucide-react';

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
// }

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: 'Size',
//     price: 'Price',
//     grape: [],
//     all: 'All',
//     availability: [],
//     sortBy: 'Best Sellers',
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const shopDetails: Product[] = [
//     { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot" },
//     { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir" },
//     { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc" },
//     { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer" },
//     { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé" },
//     { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling" },
//     { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealcoholized (Vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling" },
//     { type: "KvD Strauch Sektmanufaktur", productImg: thirdtabproduct, productName: "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" },
//     { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc" },
//     { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir" },
//     { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Matthias Anton Rosé (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé" },
//     { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio" },
//     { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Matthias Anton Blanc de Blancs Sparkling (vegan) Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir" }
//   ];

//   const totalPages = Math.ceil(shopDetails.length / productsPerPage);
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const currentProducts = shopDetails.slice(startIndex, startIndex + productsPerPage);

//   const changePage = (page: number) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const sizeOptions = ['Size', 'Small', 'Medium', 'Large', 'Extra Large'];
//   const grapeOptions = ['Merlot', 'Pinot Noir', 'Sauvignon Blanc', 'Riesling'];
//   const availabilityOptions = ['In Stock', 'Out Of Stock'];

//   const priceOptions = []; // Price is now slider only

//   const allOptions = ['All', 'Featured', 'Popular', 'New Arrivals'];

//   const sortByOptions = [
//     'Best Sellers', 'Featured','Alphabetically A-Z','Alphabetically Z-A','Price, low to high','Price, high to low','Date, old to new','Date, new to old',
//   ];

//   const handleFilterChange = (filterName: string, value: any) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//   };

//   return (
//     <>
//             <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//          <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-42 md:mt-45 xl:mt-58 w-[95%] xl:w-[80%] mx-auto">
//            <p className="font-urbanist font-semibold text-base text-white">
//              Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//            </p>
//            <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//              Bergdolt, Reif & Nett
//            </p>
//            <p className="font-urbanist font-semibold text-base text-white">
//              Non-alcoholic (&lt;0.5% ABV). Regulated as a food product. Intended for adults.
//            </p>
//          </div>
//      </div>

//       <div className='w-full'>
//         <div className='w-[95%] mx-auto pt-[55px] xl:pt-[100px]'>
//           {/* FILTER ROW */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">
//               <button className="flex items-center justify-center gap-2 w-[120px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B] hover:bg-[#E5C97A] transition-all duration-200">
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               <div className="hidden md:flex items-center gap-3">
//                 <div className="w-[150px]"><FilterDropdown type="single" label="Size" options={sizeOptions} onChange={(v) => handleFilterChange('size', v)} /></div>
//                 <div className="w-[200px]"><FilterDropdown type="price" label="Price" onChange={(v)=> handleFilterChange('price', v)} /></div>
//                 <div className="w-[200px]"><FilterDropdown type="multi" label="Grape" options={grapeOptions} onChange={(v)=> handleFilterChange('grape', v)} /></div>
//                 <div className="w-[140px]"><FilterDropdown type="single" label="All" options={allOptions} onChange={(v)=> handleFilterChange('all', v)} /></div>
//                 <div className="w-[200px]"><FilterDropdown type="multi" label="Availability" options={availabilityOptions} onChange={(v)=> handleFilterChange('availability', v)} /></div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">Sort By:</span>
//               <div className="w-[180px]"><FilterDropdown type="single" label="Sort" options={sortByOptions} onChange={(v)=> handleFilterChange('sortBy', v)} /></div>
//             </div>
//           </div>
//         </div>

//         {/* PRODUCT GRID */}
//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
//           {currentProducts.map((product, index) => (
//             <ProductsChild key={index} product={product} />
//           ))}
//         </div>

//          <div className="w-full flex justify-center pb-16">
//            <div className="flex items-center gap-2">
//              <button
//                onClick={() => changePage(currentPage - 1)}
//                className="px-3 py-1 rounded-md border border-[#E5C97A] text-[#0B0B0B] hover:bg-[#E5C97A] transition"
//              >Prev</button>

//              {[...Array(totalPages)].map((_, i) => {
//                const page = i + 1;
//                const active = currentPage === page;
//                return (
//                  <button
//                    key={page}
//                    onClick={() => changePage(page)}
//                    className={`px-4 py-2 rounded-md font-urbanist text-sm transition-all
//                      ${active ? 'bg-[#E5C97A] text-black' : 'bg-white border border-[#E5C97A] text-[#0B0B0B] hover:bg-[#E5C97A]'}`}
//                  >
//                    {page}
//                  </button>
//                );
//              })}

//              <button
//                onClick={() => changePage(currentPage + 1)}
//                className="px-3 py-1 rounded-md border border-[#E5C97A] text-[#0B0B0B] hover:bg-[#E5C97A] transition"
//              >Next</button>
//            </div>
//          </div>
//       </div>
//     </>
//   );
// };

// export default Shop;

// import React, { useState, useMemo } from 'react';
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from '../products/productsChild';
// import FilterDropdown from '../ui/FilterDropDown';
// import { Filter } from 'lucide-react';

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
//   size: string;
//   inStock: boolean;
//   categoryType: string; // for “All”
// }

// const randomSize = () => {
//   const arr = ["Small", "Medium", "Large", "Extra Large"];
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: 'Size',
//     price: { min: 0, max: 100 },
//     grape: [],
//     all: 'All',
//     availability: [],
//     sortBy: 'Best Sellers',
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const shopDetails: Product[] = [
//     { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot", size: randomSize(), inStock: true, categoryType: "Featured" },
//     { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir", size: randomSize(), inStock: false, categoryType: "Popular" },
//     { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Reverse Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//     { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Reverse Gewurztraminer Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Reverse Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//     { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Reverse Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//     { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "KvD Strauch", productImg: thirdtabproduct, productName: "Rouge Pur Alkoholfrei", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur", size: randomSize(), inStock: true, categoryType: "Featured" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc", size: randomSize(), inStock: false, categoryType: "New Arrivals" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Rosé Sparkling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//     { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Sauvignon Blanc (vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Rosé Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//     { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//     { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Pinot Grigio Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Blanc de Blancs Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" }
//   ];

//   // -------------------------------------
//   // 🔍 APPLY FILTERS
//   // -------------------------------------
//   const filteredProducts = useMemo(() => {
//     return shopDetails.filter((p) => {
//       const priceNum = parseFloat(p.price.replace("$", ""));

//       if (filters.size !== "Size" && p.size !== filters.size) return false;
//       if (filters.grape.length > 0 && !filters.grape.includes(p.flavour)) return false;

//       if (filters.availability.length > 0) {
//         if (filters.availability.includes("In Stock") && !p.inStock) return false;
//         if (filters.availability.includes("Out Of Stock") && p.inStock) return false;
//       }

//       if (filters.all !== "All" && p.categoryType !== filters.all) return false;

//       if (priceNum < filters.price.min || priceNum > filters.price.max) return false;

//       return true;
//     });
//   }, [filters]);

//   // -------------------------------------
//   // 🔢 PAGINATION AFTER FILTERING
//   // -------------------------------------
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

//   const changePage = (p: number) => {
//     if (p < 1 || p > totalPages) return;
//     setCurrentPage(p);
//   };

//   const sizeOptions = ['Size', 'Small', 'Medium', 'Large', 'Extra Large'];
//   const grapeOptions = ['Merlot', 'Pinot Noir', 'Sauvignon Blanc', 'Riesling', "Rosé", "Gewurztraminer", "Rouge Pur", "Pinot Grigio"];
//   const availabilityOptions = ['In Stock', 'Out Of Stock'];
//   const allOptions = ['All', 'Featured', 'Popular', 'New Arrivals'];

//   const sortByOptions = [
//     'Best Sellers', 'Featured','Alphabetically A-Z','Alphabetically Z-A',
//     'Price, low to high','Price, high to low','Date, old to new','Date, new to old',
//   ];

//   const handleFilterChange = (name: string, value: any) => {
//     setFilters(prev => ({ ...prev, [name]: value }));
//     setCurrentPage(1);
//   };

//   return (
//     <>
//       {/* BANNER (unchanged) */}
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-42 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">

//           {/* FILTERS */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">
//               <button className="flex items-center gap-2 w-[120px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B] hover:bg-[#E5C97A] transition">
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               <div className="hidden md:flex items-center gap-3">
//                 <div className="w-[150px]"><FilterDropdown type="single" label="Size" options={sizeOptions} onChange={(v)=>handleFilterChange("size",v)} /></div>
//                 <div className="w-[200px]"><FilterDropdown type="price" label="Price" onChange={(v)=>handleFilterChange("price",v)} /></div>
//                 <div className="w-[200px]"><FilterDropdown type="multi" label="Grape" options={grapeOptions} onChange={(v)=>handleFilterChange("grape",v)} /></div>
//                 <div className="w-[140px]"><FilterDropdown type="single" label="All" options={allOptions} onChange={(v)=>handleFilterChange("all",v)} /></div>
//                 <div className="w-[200px]"><FilterDropdown type="multi" label="Availability" options={availabilityOptions} onChange={(v)=>handleFilterChange("availability",v)} /></div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">Sort By:</span>
//               <div className="w-[180px]">
//                 <FilterDropdown type="single" label="Sort" options={sortByOptions} onChange={(v)=>handleFilterChange("sortBy",v)} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* PRODUCTS */}
//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
//           {currentProducts.map((product, index) => (
//             <ProductsChild key={index} product={product} />
//           ))}
//         </div>

//         {/* PAGINATION */}
//         <div className="w-full flex justify-center pb-16">
//           <div className="flex items-center gap-2">
//             <button onClick={()=>changePage(currentPage - 1)}
//               className="px-3 py-1 rounded-md border border-[#E5C97A] hover:bg-[#E5C97A]">
//               Prev
//             </button>

//             {Array.from({ length: totalPages }).map((_, i) => {
//               const page = i + 1;
//               const active = currentPage === page;
//               return (
//                 <button key={page} onClick={()=>changePage(page)}
//                   className={`px-4 py-2 rounded-md text-sm transition
//                     ${active ? "bg-[#E5C97A]" : "bg-white border border-[#E5C97A] hover:bg-[#E5C97A]"}`}>
//                   {page}
//                 </button>
//               );
//             })}

//             <button onClick={()=>changePage(currentPage + 1)}
//               className="px-3 py-1 rounded-md border border-[#E5C97A] hover:bg-[#E5C97A]">
//               Next
//             </button>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Shop;

// import React, { useState, useMemo } from "react";
// import { X, Filter, Plus, Minus } from "lucide-react";

// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";

// import ProductsChild from "../products/productsChild";
// import FilterDropdown from "../ui/FilterDropDown";

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
//   size: string;
//   inStock: boolean;
//   categoryType: string;
// }

// const randomSize = () => {
//   const arr = ["Small", "Medium", "Large", "Extra Large"];
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: "Size",
//     price: { min: 0, max: 100 },
//     grape: [],
//     all: "All",
//     availability: [],
//     sortBy: "Best Sellers",
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const productsPerPage = 6;

//   const handleOpenSidebar = () => {
//     if (typeof window !== "undefined" && window.innerWidth > 1024) return;
//     setSidebarOpen(true);
//   };

//   const priceToNumber = (price: string) => {
//     const parsed = parseFloat(price.replace(/[^0-9.]/g, ""));
//     return Number.isNaN(parsed) ? 0 : parsed;
//   };

//   const shopDetails: Product[] = useMemo(
//     () => [
//     { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot", size: randomSize(), inStock: true, categoryType: "Featured" },
//     { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir", size: randomSize(), inStock: false, categoryType: "Popular" },
//     { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Reverse Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//     { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Reverse Gewurztraminer Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Reverse Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//     { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Reverse Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//     { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "KvD Strauch", productImg: thirdtabproduct, productName: "Rouge Pur Alkoholfrei", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur", size: randomSize(), inStock: true, categoryType: "Featured" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc", size: randomSize(), inStock: false, categoryType: "New Arrivals" },
//     { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Rosé Sparkling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//     { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Sauvignon Blanc (vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Rosé Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//     { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//     { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Pinot Grigio Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio", size: randomSize(), inStock: true, categoryType: "Popular" },
//     { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Blanc de Blancs Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//     ],
//     []
//   );

//   const filteredProducts = useMemo(() => {
//     const filtered = shopDetails.filter((p) => {
//       const priceNum = parseFloat(p.price.replace("$", ""));

//       if (filters.size !== "Size" && p.size !== filters.size) return false;
//       if (filters.grape.length > 0 && !filters.grape.includes(p.flavour)) return false;

//       if (filters.availability.length > 0) {
//         if (filters.availability.includes("In Stock") && !p.inStock) return false;
//         if (filters.availability.includes("Out Of Stock") && p.inStock) return false;
//       }

//       if (filters.all !== "All" && p.categoryType !== filters.all) return false;

//       if (priceNum < filters.price.min || priceNum > filters.price.max) return false;

//       return true;
//     });

//     const originalOrder = (product: Product) => shopDetails.indexOf(product);
//     const sorted = [...filtered];

//     switch (filters.sortBy) {
//       case "Alphabetically A-Z":
//         sorted.sort((a, b) => a.productName.localeCompare(b.productName));
//         break;
//       case "Alphabetically Z-A":
//         sorted.sort((a, b) => b.productName.localeCompare(a.productName));
//         break;
//       case "Price, low to high":
//         sorted.sort(
//           (a, b) => priceToNumber(a.price) - priceToNumber(b.price)
//         );
//         break;
//       case "Price, high to low":
//         sorted.sort(
//           (a, b) => priceToNumber(b.price) - priceToNumber(a.price)
//         );
//         break;
//       case "Featured":
//         sorted.sort((a, b) => {
//           const aPriority = a.categoryType === "Featured" ? 0 : 1;
//           const bPriority = b.categoryType === "Featured" ? 0 : 1;
//           if (aPriority === bPriority) {
//             return originalOrder(a) - originalOrder(b);
//           }
//           return aPriority - bPriority;
//         });
//         break;
//       case "Date, new to old":
//         sorted.sort((a, b) => originalOrder(b) - originalOrder(a));
//         break;
//       case "Date, old to new":
//       case "Best Sellers":
//       default:
//         sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//     }

//     return sorted;
//   }, [filters, shopDetails]);

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

//   const changePage = (p: number) => {
//     if (p < 1 || p > totalPages) return;
//     setCurrentPage(p);
//   };

//   const sizeOptions = ["Size", "Small", "Medium", "Large", "Extra Large"];
//   const grapeOptions = [
//     "Merlot",
//     "Pinot Noir",
//     "Sauvignon Blanc",
//     "Riesling",
//     "Rosé",
//     "Gewurztraminer",
//     "Rouge Pur",
//     "Pinot Grigio",
//   ];
//   const availabilityOptions = ["In Stock", "Out Of Stock"];
//   const allOptions = ["All", "Featured", "Popular", "New Arrivals"];

//   const sortByOptions = [
//     "Best Sellers",
//     "Featured",
//     "Alphabetically A-Z",
//     "Alphabetically Z-A",
//     "Price, low to high",
//     "Price, high to low",
//     "Date, old to new",
//     "Date, new to old",
//   ];

//   const handleFilterChange = (name: string, value: any) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     setCurrentPage(1);
//   };

//   const Accordion = ({
//     title,
//     children,
//   }: {
//     title: string;
//     children: any;
//   }) => {
//     const [open, setOpen] = useState(false);
//     return (
//       <div className="border-b border-gray-300 pb-3">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex justify-between items-center w-full text-left py-3 font-urbanist font-semibold text-lg"
//         >
//           <span>{title}</span>
//           {open ? (
//             <Minus size={20} className="text-[#0B0B0B]" />
//           ) : (
//             <Plus size={20} className="text-[#0B0B0B]" />
//           )}
//         </button>

//         {open && <div className="pl-2 pb-2">{children}</div>}
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* BANNER */}
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38  md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">

//           {/* FILTERS HEADER */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">

//               {/* MOBILE FILTER BUTTON (ONLY <=1024px) */}
//               <button
//                 onClick={handleOpenSidebar}
//                 className="flex items-center gap-2 w-[120px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B] hover:bg-[#E5C97A] transition "
//               >
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               {/* DESKTOP FILTERS */}
//               <div className="hidden xl:flex items-center gap-3">
//                 <div className="w-[150px]">
//                   <FilterDropdown
//                     type="single"
//                     label="Size"
//                     options={sizeOptions}
//                     onChange={(v) => handleFilterChange("size", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="price"
//                     label="Price"
//                     onChange={(v) => handleFilterChange("price", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Grape"
//                     options={grapeOptions}
//                     onChange={(v) => handleFilterChange("grape", v)}
//                   />
//                 </div>

//                 <div className="w-[140px]">
//                   <FilterDropdown
//                     type="single"
//                     label="All"
//                     options={allOptions}
//                     onChange={(v) => handleFilterChange("all", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Availability"
//                     options={availabilityOptions}
//                     onChange={(v) => handleFilterChange("availability", v)}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">
//                 Sort By:
//               </span>
//               <div className="w-[180px]">
//                 <FilterDropdown
//                   type="single"
//                   label="Sort"
//                   options={sortByOptions}
//                   onChange={(v) => handleFilterChange("sortBy", v)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE SIDEBAR */}
//         <div
//           className={`fixed top-0 left-0 h-full w-[72%]  z-90 top-0  sm:w-[40%] md:w-[38%] lg:w-[28%] bg-white shadow-xl  transform transition-all duration-300 ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* HEADER */}
//           <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
//             <h2 className="text-xl font-semibold">Sidebar </h2>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           {/* ACCORDION FILTERS */}
//           <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">

//             <Accordion title="Size">
//               {sizeOptions.slice(1).map((opt) => (
//                 <div key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="size"
//                     value={opt}
//                     checked={filters.size === opt}
//                     onChange={() => handleFilterChange("size", opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </div>
//               ))}
//             </Accordion>

//             <Accordion title="Price">
//               <div className="flex flex-col gap-4">
//                 <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                   <div
//                     className="absolute h-full bg-[#E5C97A] rounded-full"
//                     style={{
//                       left: `${filters.price.min}%`,
//                       width: `${Math.max(
//                         filters.price.max - filters.price.min,
//                         0
//                       )}%`,
//                     }}
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.min}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value >= filters.price.max) return;
//                       handleFilterChange("price", {
//                         ...filters.price,
//                         min: value,
//                       });
//                     }}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.max}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value <= filters.price.min) return;
//                       handleFilterChange("price", {
//                         ...filters.price,
//                         max: value,
//                       });
//                     }}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between text-sm font-urbanist">
//                   <div className="border border-[#EED291] rounded-md px-3 py-1">
//                     ${filters.price.min}
//                   </div>
//                   <span className="text-[#0B0B0B] font-semibold">to</span>
//                   <div className="border border-[#EED291] rounded-md px-3 py-1">
//                     ${filters.price.max}
//                   </div>
//                 </div>
//               </div>
//             </Accordion>

//             <Accordion title="Grape">
//               {grapeOptions.map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-3 py-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={filters.grape.includes(opt)}
//                     onChange={() => {
//                       const updated = filters.grape.includes(opt)
//                         ? filters.grape.filter((x) => x !== opt)
//                         : [...filters.grape, opt];

//                       handleFilterChange("grape", updated);
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>

//             <Accordion title="All Categories">
//               {allOptions.map((opt) => (
//                 <div key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="all"
//                     value={opt}
//                     checked={filters.all === opt}
//                     onChange={() => handleFilterChange("all", opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </div>
//               ))}
//             </Accordion>

//             <Accordion title="Availability">
//               {availabilityOptions.map((opt) => (
//                 <label
//                   key={opt}
//                   className="flex items-center gap-3 py-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={filters.availability.includes(opt)}
//                     onChange={() => {
//                       const updated = filters.availability.includes(opt)
//                         ? filters.availability.filter((x) => x !== opt)
//                         : [...filters.availability, opt];

//                       handleFilterChange("availability", updated);
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>
//           </div>
//         </div>

//         {/* BACKDROP */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* PRODUCTS GRID */}
//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
//           {currentProducts.map((product, index) => (
//             <ProductsChild key={index} product={product} />
//           ))}
//         </div>

//         {/* PAGINATION */}
//         <div className="w-full flex justify-center pb-16">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => changePage(currentPage - 1)}
//               className="px-3 py-1 rounded-md border border-[#E5C97A] hover:bg-[#E5C97A]"
//             >
//               Prev
//             </button>

//             {Array.from({ length: totalPages }).map((_, i) => {
//               const page = i + 1;
//               const active = currentPage === page;
//               return (
//                 <button
//                   key={page}
//                   onClick={() => changePage(page)}
//                   className={`px-4 py-2 rounded-md text-sm transition ${
//                     active
//                       ? "bg-[#E5C97A]"
//                       : "bg-white border border-[#E5C97A] hover:bg-[#E5C97A]"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               );
//             })}

//             <button
//               onClick={() => changePage(currentPage + 1)}
//               className="px-3 py-1 rounded-md border border-[#E5C97A] hover:bg-[#E5C97A]"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;

// import React, { useState, useMemo, useEffect } from "react";
// import { X, Filter, Plus, Minus } from "lucide-react";

// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";

// import ProductsChild from "../products/productsChild";
// import FilterDropdown from "../ui/FilterDropDown";

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
//   size: string;
//   inStock: boolean;
//   categoryType: string;
// }

// const randomSize = () => {
//   const arr = ["Small", "Medium", "Large", "Extra Large"];
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: "Size",
//     price: { min: 0, max: 100 },
//     grape: [],
//     all: "All",
//     availability: [],
//     sortBy: "Best Sellers",
//   });

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   /** NEW PAGINATION LOGIC **/
//   const itemsPerPageOptions = [6,10, 20, 30, 100];
//   const [limit, setLimit] = useState(itemsPerPageOptions[0]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleOpenSidebar = () => {
//     if (typeof window !== "undefined" && window.innerWidth > 1024) return;
//     setSidebarOpen(true);
//   };

//   const priceToNumber = (price: string) => {
//     const parsed = parseFloat(price.replace(/[^0-9.]/g, ""));
//     return Number.isNaN(parsed) ? 0 : parsed;
//   };

//   const shopDetails: Product[] = useMemo(
//     () => [
//       { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir", size: randomSize(), inStock: false, categoryType: "Popular" },
//       { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Reverse Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Reverse Gewurztraminer Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Reverse Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//       { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Reverse Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "KvD Strauch", productImg: thirdtabproduct, productName: "Rouge Pur Alkoholfrei", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc", size: randomSize(), inStock: false, categoryType: "New Arrivals" },
//       { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Rosé Sparkling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Sauvignon Blanc (vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Rosé Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//       { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Pinot Grigio Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Blanc de Blancs Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//     ],
//     []
//   );

//   /** FILTERING + SORTING **/
//   const filteredProducts = useMemo(() => {
//     const filtered = shopDetails.filter((p) => {
//       const priceNum = parseFloat(p.price.replace("$", ""));

//       if (filters.size !== "Size" && p.size !== filters.size) return false;
//       if (filters.grape.length > 0 && !filters.grape.includes(p.flavour)) return false;

//       if (filters.availability.length > 0) {
//         if (filters.availability.includes("In Stock") && !p.inStock) return false;
//         if (filters.availability.includes("Out Of Stock") && p.inStock) return false;
//       }

//       if (filters.all !== "All" && p.categoryType !== filters.all) return false;

//       if (priceNum < filters.price.min || priceNum > filters.price.max) return false;

//       return true;
//     });

//     const originalOrder = (product: Product) => shopDetails.indexOf(product);
//     const sorted = [...filtered];

//     switch (filters.sortBy) {
//       case "Alphabetically A-Z":
//         sorted.sort((a, b) => a.productName.localeCompare(b.productName));
//         break;
//       case "Alphabetically Z-A":
//         sorted.sort((a, b) => b.productName.localeCompare(a.productName));
//         break;
//       case "Price, low to high":
//         sorted.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
//         break;
//       case "Price, high to low":
//         sorted.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
//         break;
//       case "Featured":
//         sorted.sort((a, b) => {
//           const aPriority = a.categoryType === "Featured" ? 0 : 1;
//           const bPriority = b.categoryType === "Featured" ? 0 : 1;
//           if (aPriority === bPriority) {
//             return originalOrder(a) - originalOrder(b);
//           }
//           return aPriority - bPriority;
//         });
//         break;
//       case "Date, new to old":
//         sorted.sort((a, b) => originalOrder(b) - originalOrder(a));
//         break;
//       default:
//         sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//     }

//     return sorted;
//   }, [filters, shopDetails]);

//   /** PAGINATION AFTER FILTERS **/
//   const totalItems = filteredProducts.length;
//   const totalPages = Math.ceil(totalItems / limit);
//   const start = (currentPage - 1) * limit;
//   const currentProducts = filteredProducts.slice(start, start + limit);

//   const changePage = (p: number) => {
//     if (p < 1 || p > totalPages) return;
//     setCurrentPage(p);
//   };

//   /** OPTIONS **/
//   const sizeOptions = ["Small", "Medium", "Large", "Extra Large"];
//   const grapeOptions = [
//     "Merlot", "Pinot Noir", "Sauvignon Blanc", "Riesling", "Rosé",
//     "Gewurztraminer", "Rouge Pur", "Pinot Grigio",
//   ];
//   const availabilityOptions = ["In Stock", "Out Of Stock"];
//   const allOptions = ["Featured", "Popular", "New Arrivals"];
//   const sortByOptions = [
//     "Best Sellers",
//     "Featured",
//     "Alphabetically A-Z",
//     "Alphabetically Z-A",
//     "Price, low to high",
//     "Price, high to low",
//     "Date, old to new",
//     "Date, new to old",
//   ];

//   const handleFilterChange = (name: string, value: any) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     setCurrentPage(1);
//   };

//   const Accordion = ({ title, children }: { title: string; children: any }) => {
//     const [open, setOpen] = useState(false);
//     return (
//       <div className="border-b border-gray-300 pb-3">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex justify-between items-center w-full text-left py-3 font-urbanist font-semibold text-lg"
//         >
//           <span>{title}</span>
//           {open ? (
//             <Minus size={20} className="text-[#0B0B0B]" />
//           ) : (
//             <Plus size={20} className="text-[#0B0B0B]" />
//           )}
//         </button>

//         {open && <div className="pl-2 pb-2">{children}</div>}
//       </div>
//     );
//   };

//   useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth >= 1024) {
//       setSidebarOpen(false);
//     }
//   };

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

//   return (
//     <>
//       {/* BANNER */}
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38  md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">
//           {/* FILTERS HEADER */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">

//               {/* MOBILE FILTER BUTTON */}
//               <button
//                 onClick={handleOpenSidebar}
//                 className="flex items-center gap-2 w-[60px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B]  transition "
//               >
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               {/* DESKTOP FILTERS */}
//               <div className="hidden xl:flex items-center gap-3">
//                 <div className="w-[150px]">
//                   <FilterDropdown
//                     type="single"
//                     label="Size"
//                     options={sizeOptions}
//                     onChange={(v) => handleFilterChange("size", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="price"
//                     label="Price"
//                     onChange={(v) => handleFilterChange("price", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Grape"
//                     options={grapeOptions}
//                     onChange={(v) => handleFilterChange("grape", v)}
//                   />
//                 </div>

//                 <div className="w-[140px]">
//                   <FilterDropdown
//                     type="single"
//                     label="All"
//                     options={allOptions}
//                     onChange={(v) => handleFilterChange("all", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Availability"
//                     options={availabilityOptions}
//                     onChange={(v) => handleFilterChange("availability", v)}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">
//                 Sort By:
//               </span>
//               <div className="w-[180px]">
//                 <FilterDropdown
//                   type="single"
//                   label="Sort"
//                   options={sortByOptions}
//                   onChange={(v) => handleFilterChange("sortBy", v)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE SIDEBAR */}
//         <div
//           className={`fixed top-0 left-0 h-full w-[72%] sm:w-[40%] md:w-[38%] lg:w-[28%] z-[9999] bg-white shadow-xl transform transition-all duration-300 ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* HEADER */}
//           <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
//             <h2 className="text-xl font-semibold font-cormorant">Sidebar </h2>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           {/* SIDEBAR CONTENT */}
//           <div className="p-4 overflow-y-auto h-[calc(100%-60px)] font-urbanist">
//             <Accordion title="Size">
//               {sizeOptions.slice(1).map((opt) => (
//                 <div key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="size"
//                     value={opt}
//                     checked={filters.size === opt}
//                     onChange={() => handleFilterChange("size", opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </div>
//               ))}
//             </Accordion>

//             <Accordion title="Price">
//               <div className="flex flex-col gap-4 ">
//                 <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                   <div
//                     className="absolute h-full bg-[#E5C97A] rounded-full"
//                     style={{
//                       left: `${filters.price.min}%`,
//                       width: `${Math.max(
//                         filters.price.max - filters.price.min,
//                         0
//                       )}%`,
//                     }}
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.min}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value >= filters.price.max) return;
//                       handleFilterChange("price", {
//                         ...filters.price,
//                         min: value,
//                       });
//                     }}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.max}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value <= filters.price.min) return;
//                       handleFilterChange("price", {
//                         ...filters.price,
//                         max: value,
//                       });
//                     }}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between text-sm font-urbanist">
//                   <div className="border border-[#EED291] rounded-md px-3 py-1">
//                     ${filters.price.min}
//                   </div>
//                   <span className="text-[#0B0B0B] font-semibold">to</span>
//                   <div className="border border-[#EED291] rounded-md px-3 py-1">
//                     ${filters.price.max}
//                   </div>
//                 </div>
//               </div>
//             </Accordion>

//             <Accordion title="Grape">
//               {grapeOptions.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={filters.grape.includes(opt)}
//                     onChange={() => {
//                       const updated = filters.grape.includes(opt)
//                         ? filters.grape.filter((x) => x !== opt)
//                         : [...filters.grape, opt];
//                       handleFilterChange("grape", updated);
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>

//             <Accordion title="All Categories">
//               {allOptions.map((opt) => (
//                 <div key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="all"
//                     value={opt}
//                     checked={filters.all === opt}
//                     onChange={() => handleFilterChange("all", opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </div>
//               ))}
//             </Accordion>

//             <Accordion title="Availability">
//               {availabilityOptions.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={filters.availability.includes(opt)}
//                     onChange={() => {
//                       const updated = filters.availability.includes(opt)
//                         ? filters.availability.filter((x) => x !== opt)
//                         : [...filters.availability, opt];
//                       handleFilterChange("availability", updated);
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>
//           </div>
//         </div>

//         {/* BACKDROP */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* PRODUCTS GRID */}
//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
//           {currentProducts.map((product, index) => (
//             <ProductsChild key={index} product={product} />
//           ))}
//         </div>

//         {/* PAGINATION + DROPDOWN + TEXT */}
//         <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 pb-12">

//           <div className="flex items-center gap-2 mt-4 md:mt-0 font-urbanist">
//             <p className="text-sm text-gray-700 whitespace-nowrap">Showing</p>

//             <select
//               value={limit}
//               onChange={(e) => {
//                 setLimit(Number(e.target.value));
//                 setCurrentPage(1);
//               }}
//               className="border border-[#E5C97A] rounded-lg px-2 py-1 text-sm"
//             >
//               {itemsPerPageOptions.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>

//             <p className="text-sm text-gray-700 whitespace-nowrap">
//               of <span className="font-semibold">{totalItems}</span> entries
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => changePage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-3 py-1 border border-[#E5C97A] rounded-md hover:bg-[#E5C97A] disabled:opacity-50"
//             >
//               Prev
//             </button>

//             {Array.from({ length: totalPages }).map((_, i) => {
//               const p = i + 1;
//               return (
//                 <button
//                   key={p}
//                   onClick={() => changePage(p)}
//                   className={`px-4 py-2 rounded-md text-sm transition ${
//                     currentPage === p
//                       ? "bg-[#E5C97A]"
//                       : "bg-white border border-[#E5C97A] hover:bg-[#E5C97A]"
//                   }`}
//                 >
//                   {p}
//                 </button>
//               );
//             })}

//             <button
//               onClick={() => changePage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 border border-[#E5C97A] rounded-md hover:bg-[#E5C97A] disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;

// import React, { useState, useMemo, useEffect } from "react";
// import { X, Filter, Plus, Minus } from "lucide-react";

// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";

// import ProductsChild from "../products/productsChild";
// import FilterDropdown from "../ui/FilterDropDown";

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
//   size: string;
//   inStock: boolean;
//   categoryType: string;
// }

// const randomSize = () => {
//   const arr = ["Small", "Medium", "Large", "Extra Large"];
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: "Size",
//     price: { min: 0, max: 100 },
//     grape: [] as string[],
//     all: "All",
//     availability: [] as string[],
//     sortBy: "Best Sellers",
//   });

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const itemsPerPageOptions = [6, 10, 20, 30, 100];
//   const [limit, setLimit] = useState(itemsPerPageOptions[0]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleOpenSidebar = () => {
//     if (typeof window !== "undefined" && window.innerWidth > 1024) return;
//     setSidebarOpen(true);
//   };

//   const priceToNumber = (price: string) => {
//     const parsed = parseFloat(price.replace(/[^0-9.]/g, ""));
//     return Number.isNaN(parsed) ? 0 : parsed;
//   };

//   const shopDetails: Product[] = useMemo(
//     () => [
//       { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir", size: randomSize(), inStock: false, categoryType: "Popular" },
//       { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Reverse Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Reverse Gewurztraminer Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Reverse Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//       { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Reverse Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "KvD Strauch", productImg: thirdtabproduct, productName: "Rouge Pur Alkoholfrei", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Sauvignon Blanc Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc", size: randomSize(), inStock: false, categoryType: "New Arrivals" },
//       { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Rosé Sparkling Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Sauvignon Blanc (vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Rosé Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Rosé Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//       { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Pinot Grigio Dealcoholized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Blanc de Blancs Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//     ],
//     []
//   );

//   /** FILTER + SORT LOGIC **/
// /** FILTER + SORT LOGIC **/
// const filteredProducts = useMemo(() => {
//   const filtered = shopDetails.filter((p) => {
//     const priceNum = parseFloat(p.price.replace("$", ""));

//     if (filters.size !== "Size" && p.size !== filters.size) return false;
//     if (filters.grape.length > 0 && !filters.grape.includes(p.flavour)) return false;

//     if (filters.availability.length > 0) {
//       if (filters.availability.includes("In Stock") && !p.inStock) return false;
//       if (filters.availability.includes("Out Of Stock") && p.inStock) return false;
//     }

//     if (filters.all !== "All" && p.categoryType !== filters.all) return false;

//     if (priceNum < filters.price.min || priceNum > filters.price.max) return false;

//     return true;
//   });

//   // ---- SORTING STARTS HERE (FIXED) ----
//   const sorted = [...filtered];

//   const originalOrder = (product: Product) => shopDetails.indexOf(product);

//   switch (filters.sortBy) {
//     case "Alphabetically A-Z":
//       sorted.sort((a, b) => a.productName.localeCompare(b.productName));
//       break;

//     case "Alphabetically Z-A":
//       sorted.sort((a, b) => b.productName.localeCompare(a.productName));
//       break;

//     case "Price, low to high":
//       sorted.sort(
//         (a, b) => priceToNumber(a.price) - priceToNumber(b.price)
//       );
//       break;

//     case "Price, high to low":
//       sorted.sort(
//         (a, b) => priceToNumber(b.price) - priceToNumber(a.price)
//       );
//       break;

//     case "Date, new to old":
//       sorted.sort((a, b) => originalOrder(b) - originalOrder(a));
//       break;

//     case "Date, old to new":
//       sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//       break;

//     case "Featured":
//       sorted.sort((a, b) => {
//         const aPriority = a.categoryType === "Featured" ? 0 : 1;
//         const bPriority = b.categoryType === "Featured" ? 0 : 1;
//         if (aPriority === bPriority) {
//           return originalOrder(a) - originalOrder(b);
//         }
//         return aPriority - bPriority;
//       });
//       break;

//     default:  // "Best Sellers"
//       sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//   }

//   return sorted;
// }, [filters, shopDetails]);

//   /** PAGINATION **/
//   const totalItems = filteredProducts.length;
//   const totalPages = Math.ceil(totalItems / limit);
//   const start = (currentPage - 1) * limit;
//   const currentProducts = filteredProducts.slice(start, start + limit);

//   const changePage = (p: number) => {
//     if (p < 1 || p > totalPages) return;
//     setCurrentPage(p);
//   };

//   /** DROPDOWN OPTIONS **/
//   const sizeOptions = ["Small", "Medium", "Large", "Extra Large"];
//   const grapeOptions = [
//     "Merlot", "Pinot Noir", "Sauvignon Blanc", "Riesling", "Rosé",
//     "Gewurztraminer", "Rouge Pur", "Pinot Grigio",
//   ];
//   const availabilityOptions = ["In Stock", "Out Of Stock"];
//   const allOptions = ["Featured", "Popular", "New Arrivals"];
//     const sortByOptions = [
//     "Best Sellers",
//     "Featured",
//     "Alphabetically A-Z",
//     "Alphabetically Z-A",
//     "Price, low to high",
//     "Price, high to low",
//     "Date, old to new",
//     "Date, new to old",
//   ];

//   //   const handleFilterChange = (name: string, value: any) => {
//   //   setFilters((prev) => ({ ...prev, [name]: value }));
//   //   setCurrentPage(1);
//   // };

//   /** UPDATE FILTER **/
//   const handleFilterChange = (name: string, value: any) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     setCurrentPage(1);
//   };

//   /** REMOVE SINGLE CHIP **/
//   const removeChip = (type: string, value: string) => {
//     if (type === "size") {
//       setFilters((prev) => ({ ...prev, size: "Size" }));
//     } else if (type === "price") {
//       setFilters((prev) => ({ ...prev, price: { min: 0, max: 100 } }));
//     } else if (type === "grape") {
//       setFilters((prev) => ({
//         ...prev,
//         grape: prev.grape.filter((g) => g !== value),
//       }));
//     } else if (type === "availability") {
//       setFilters((prev) => ({
//         ...prev,
//         availability: prev.availability.filter((a) => a !== value),
//       }));
//     } else if (type === "all") {
//       setFilters((prev) => ({ ...prev, all: "All" }));
//     }
//   };

//   const Accordion = ({ title, children }: { title: string; children: any }) => {
//     const [open, setOpen] = useState(false);
//     return (
//       <div className="border-b border-gray-300 pb-3">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex justify-between items-center w-full text-left py-3 font-urbanist font-semibold text-lg"
//         >
//           <span>{title}</span>
//           {open ? (
//             <Minus size={20} className="text-[#0B0B0B]" />
//           ) : (
//             <Plus size={20} className="text-[#0B0B0B]" />
//           )}
//         </button>

//         {open && <div className="pl-2 pb-2">{children}</div>}
//       </div>
//     );
//   };

//   /** CLEAR ALL **/
//   const clearAll = () => {
//     setFilters({
//       size: "Size",
//       price: { min: 0, max: 100 },
//       grape: [],
//       all: "All",
//       availability: [],
//       sortBy: "Best Sellers",
//     });
//   };

//   /** CLOSE SIDEBAR ON RESIZE **/
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setSidebarOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /** CHIP COMPONENT **/
//   const Chip = ({ label, onRemove }: any) => (
//     <div className="bg-[#EED291] text-[#0B0B0B] px-3 py-1 rounded-md flex items-center gap-2 font-urbanist text-sm">
//       {label}
//       <button onClick={onRemove}>
//         <X size={16} />
//       </button>
//     </div>
//   );

//   return (
//     <>
//       {/* BANNER */}
//       <div className="bg-[url('images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38 md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins">&gt; </span>Bergdolt, Reif & Nett
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Bergdolt, Reif & Nett
//           </p>
//           <p className="font-urbanist font-semibold text-base text-white">
//             Non-alcoholic (&lt;0.5% ABV). Intended for adults.
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">

//           {/* FILTER BAR */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">

//               {/* MOBILE FILTER BUTTON */}
//               <button
//                 onClick={handleOpenSidebar}
//                 className="flex items-center gap-2 w-[60px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B]"
//               >
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               {/* DESKTOP FILTERS */}
//               <div className="hidden xl:flex items-center gap-3">
//                 <div className="w-[150px]">
//                   <FilterDropdown
//                     type="single"
//                     label="Size"
//                     options={sizeOptions}
//                     onChange={(v) => handleFilterChange("size", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="price"
//                     label="Price"
//                     onChange={(v) => handleFilterChange("price", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Grape"
//                     options={grapeOptions}
//                     onChange={(v) => handleFilterChange("grape", v)}
//                   />
//                 </div>

//                 <div className="w-[140px]">
//                   <FilterDropdown
//                     type="single"
//                     label="All"
//                     options={allOptions}
//                     onChange={(v) => handleFilterChange("all", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Availability"
//                     options={availabilityOptions}
//                     onChange={(v) => handleFilterChange("availability", v)}
//                   />
//                 </div>
//               </div>
//             </div>

//               <div className="flex items-center gap-3 w-full md:w-auto">
//                <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">
//                  Sort By:
//                </span>               <div className="w-[180px]">
//                  <FilterDropdown
//                    type="single"
//                    label="Sort"
//                    options={sortByOptions}
//                    onChange={(v) => handleFilterChange("sortBy", v)}
//                  />
//                </div>
//            </div>
//           </div>

//           {/* FILTER CHIPS */}
//           <div className="mt-6 flex flex-wrap items-center gap-3">

//             {/* CLEAR ALL */}
//             {(filters.size !== "Size" ||
//               filters.price.min !== 0 ||
//               filters.price.max !== 100 ||
//               filters.grape.length > 0 ||
//               filters.availability.length > 0 ||
//               filters.all !== "All") && (
//               <button
//                 onClick={clearAll}
//                 className="text-[#0B0B0B] underline font-urbanist text-sm"
//               >
//                 Clear All
//               </button>
//             )}

//             {/* SIZE */}
//             {filters.size !== "Size" && (
//               <Chip
//                 label={filters.size}
//                 onRemove={() => removeChip("size", filters.size)}
//               />
//             )}

//             {/* PRICE */}
//             {(filters.price.min !== 0 || filters.price.max !== 100) && (
//               <Chip
//                 label={`$${filters.price.min} - $${filters.price.max}`}
//                 onRemove={() => removeChip("price", "")}
//               />
//             )}

//             {/* GRAPES */}
//             {filters.grape.map((g) => (
//               <Chip
//                 key={g}
//                 label={g}
//                 onRemove={() => removeChip("grape", g)}
//               />
//             ))}

//             {/* AVAILABILITY */}
//             {filters.availability.map((a) => (
//               <Chip
//                 key={a}
//                 label={a}
//                 onRemove={() => removeChip("availability", a)}
//               />
//             ))}

//             {/* CATEGORY */}
//             {filters.all !== "All" && (
//               <Chip
//                 label={filters.all}
//                 onRemove={() => removeChip("all", filters.all)}
//               />
//             )}
//           </div>

//         </div>

//                 {/* MOBILE SIDEBAR */}
//         <div
//           className={`fixed top-0 left-0 h-full w-[72%] sm:w-[40%] md:w-[38%] lg:w-[28%] z-[9999] bg-white shadow-xl transform transition-all duration-300 ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* HEADER */}
//           <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
//             <h2 className="text-xl font-semibold font-cormorant">Sidebar </h2>
//             <button onClick={() => setSidebarOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           {/* SIDEBAR CONTENT */}
//           <div className="p-4 overflow-y-auto h-[calc(100%-60px)] font-urbanist">
//             <Accordion title="Size">
//               {sizeOptions.slice(1).map((opt) => (
//                 <div key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="size"
//                     value={opt}
//                     checked={filters.size === opt}
//                     onChange={() => handleFilterChange("size", opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </div>
//               ))}
//             </Accordion>

//             <Accordion title="Price">
//               <div className="flex flex-col gap-4 ">
//                 <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                   <div
//                     className="absolute h-full bg-[#E5C97A] rounded-full"
//                     style={{
//                       left: `${filters.price.min}%`,
//                       width: `${Math.max(
//                         filters.price.max - filters.price.min,
//                         0
//                       )}%`,
//                     }}
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.min}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value >= filters.price.max) return;
//                       handleFilterChange("price", {
//                         ...filters.price,
//                         min: value,
//                       });
//                     }}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.max}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value <= filters.price.min) return;
//                       handleFilterChange("price", {
//                         ...filters.price,
//                         max: value,
//                       });
//                     }}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between text-sm font-urbanist">
//                   <div className="border border-[#EED291] rounded-md px-3 py-1">
//                     ${filters.price.min}
//                   </div>
//                   <span className="text-[#0B0B0B] font-semibold">to</span>
//                   <div className="border border-[#EED291] rounded-md px-3 py-1">
//                     ${filters.price.max}
//                   </div>
//                 </div>
//               </div>
//             </Accordion>

//             <Accordion title="Grape">
//               {grapeOptions.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={filters.grape.includes(opt)}
//                     onChange={() => {
//                       const updated = filters.grape.includes(opt)
//                         ? filters.grape.filter((x) => x !== opt)
//                         : [...filters.grape, opt];
//                       handleFilterChange("grape", updated);
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>

//             <Accordion title="All Categories">
//               {allOptions.map((opt) => (
//                 <div key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="all"
//                     value={opt}
//                     checked={filters.all === opt}
//                     onChange={() => handleFilterChange("all", opt)}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </div>
//               ))}
//             </Accordion>

//             <Accordion title="Availability">
//               {availabilityOptions.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={filters.availability.includes(opt)}
//                     onChange={() => {
//                       const updated = filters.availability.includes(opt)
//                         ? filters.availability.filter((x) => x !== opt)
//                         : [...filters.availability, opt];
//                       handleFilterChange("availability", updated);
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>
//           </div>
//         </div>

//         {/* BACKDROP */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* PRODUCTS GRID */}
//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
//           {currentProducts.map((product, index) => (
//             <ProductsChild key={index} product={product} />
//           ))}
//         </div>

//         {/* PAGINATION */}
//         <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 pb-12">

//           <div className="flex items-center gap-2 mt-4 md:mt-0 font-urbanist">
//             <p className="text-sm text-gray-700 whitespace-nowrap">Showing</p>

//             <select
//               value={limit}
//               onChange={(e) => {
//                 setLimit(Number(e.target.value));
//                 setCurrentPage(1);
//               }}
//               className="border border-[#E5C97A] rounded-lg px-2 py-1 text-sm"
//             >
//               {itemsPerPageOptions.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>

//             <p className="text-sm text-gray-700 whitespace-nowrap">
//               of <span className="font-semibold">{totalItems}</span> entries
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => changePage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-3 py-1 border border-[#E5C97A] rounded-md hover:bg-[#E5C97A] disabled:opacity-50"
//             >
//               Prev
//             </button>

//             {Array.from({ length: totalPages }).map((_, i) => {
//               const p = i + 1;
//               return (
//                 <button
//                   key={p}
//                   onClick={() => changePage(p)}
//                   className={`px-4 py-2 rounded-md text-sm transition ${
//                     currentPage === p
//                       ? "bg-[#E5C97A]"
//                       : "bg-white border border-[#E5C97A] hover:bg-[#E5C97A]"
//                   }`}
//                 >
//                   {p}
//                 </button>
//               );
//             })}

//             <button
//               onClick={() => changePage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 border border-[#E5C97A] rounded-md hover:bg-[#E5C97A] disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;

// import React, { useState, useMemo, useEffect } from "react";
// import { X, Filter, Plus, Minus } from "lucide-react";

// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";

// import ProductsChild from "../products/productsChild";
// import FilterDropdown from "../ui/FilterDropDown";

// interface Product {
//   type: string;
//   productImg: string;
//   productName: string;
//   variety: string;
//   varietylogo: string;
//   price: string;
//   medal?: string;
//   flavour: string;
//   size: string;
//   inStock: boolean;
//   categoryType: string;
// }

// const randomSize = () => {
//   const arr = ["Small", "Medium", "Large", "Extra Large"];
//   return arr[Math.floor(Math.random() * arr.length)];
// };

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: "Size",
//     price: { min: 0, max: 100 },
//     grape: [] as string[],
//     all: "All",
//     availability: [] as string[],
//     sortBy: "Best Sellers",
//   });

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const itemsPerPageOptions = [6, 10, 20, 30, 100];
//   const [limit, setLimit] = useState(itemsPerPageOptions[0]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleOpenSidebar = () => {
//     if (typeof window !== "undefined" && window.innerWidth > 1024) return;
//     setSidebarOpen(true);
//   };

//   const priceToNumber = (price: string) => {
//     const parsed = parseFloat(price.replace(/[^0-9.]/g, ""));
//     return Number.isNaN(parsed) ? 0 : parsed;
//   };

//   const shopDetails: Product[] = useMemo(
//     () => [
//       { type: "Bergdolt, Reif & Nett", productImg: product1, productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.76", medal: productmedal, flavour: "Merlot", size: randomSize(), inStock: true, categoryType: "Featured" },
//       { type: "Bergdolt, Reif & Nett", productImg: product2, productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Pinot Noir", size: randomSize(), inStock: false, categoryType: "Popular" },
//       { type: "Bergdolt, Reif & Nett", productImg: product3, productName: "Reverse Sauvignon Blanc Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Bergdolt, Reif & Nett", productImg: product4, productName: "Reverse Gewurztraminer Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$29.38", flavour: "Gewurztraminer", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Bergdolt, Reif & Nett", productImg: product5, productName: "Reverse Rosé Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.76", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//       { type: "Bergdolt, Reif & Nett", productImg: product6, productName: "Reverse Riesling Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$27.16", flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "New Arrivals" },

//       { type: "Lamm Jung", productImg: secondtabproduct, productName: "Lamm-Jung Riesling Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$26.97", medal: productmedal, flavour: "Riesling", size: randomSize(), inStock: true, categoryType: "Popular" },

//       { type: "KvD Strauch", productImg: thirdtabproduct, productName: "Rouge Pur Alkoholfrei", variety: "Grape variety", varietylogo: verietyImg, price: "$28.91", medal: productmedal, flavour: "Rouge Pur", size: randomSize(), inStock: true, categoryType: "Featured" },

//       { type: "Château Clos de Boüard", productImg: fourthtabproduct1, productName: "Sauvignon Blanc Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Sauvignon Blanc", size: randomSize(), inStock: false, categoryType: "New Arrivals" },
//       { type: "Château Clos de Boüard", productImg: fourthtabproduct2, productName: "Rosé Sparkling Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },

//       { type: "Matthias Anton", productImg: fifthtabproduct1, productName: "Sauvignon Blanc (vegan)", variety: "Grape variety", varietylogo: verietyImg, price: "$33.61", medal: productmedal, flavour: "Sauvignon Blanc", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Matthias Anton", productImg: fifthtabproduct2, productName: "Rosé Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", medal: productmedal, flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "New Arrivals" },
//       { type: "Matthias Anton", productImg: fifthtabproduct3, productName: "Rosé Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Rosé", size: randomSize(), inStock: false, categoryType: "Featured" },
//       { type: "Matthias Anton", productImg: fifthtabproduct4, productName: "Pinot Grigio Dealalcoolized", variety: "Grape variety", varietylogo: verietyImg, price: "$25.61", flavour: "Pinot Grigio", size: randomSize(), inStock: true, categoryType: "Popular" },
//       { type: "Matthias Anton", productImg: fifthtabproduct5, productName: "Blanc de Blancs Sparkling", variety: "Grape variety", varietylogo: verietyImg, price: "$28.19", flavour: "Pinot Noir", size: randomSize(), inStock: true, categoryType: "Featured" },
//     ],
//     []
//   );

//   /** FILTER + SORT LOGIC **/
//   const filteredProducts = useMemo(() => {
//     const filtered = shopDetails.filter((p) => {
//       const priceNum = parseFloat(p.price.replace("$", ""));

//       if (filters.size !== "Size" && p.size !== filters.size) return false;

//       if (filters.grape.length > 0 && !filters.grape.includes(p.flavour))
//         return false;

//       if (filters.availability.length > 0) {
//         if (filters.availability.includes("In Stock") && !p.inStock)
//           return false;
//         if (filters.availability.includes("Out Of Stock") && p.inStock)
//           return false;
//       }

//       if (filters.all !== "All" && p.categoryType !== filters.all) return false;

//       if (priceNum < filters.price.min || priceNum > filters.price.max)
//         return false;

//       return true;
//     });

//     const sorted = [...filtered];
//     const originalOrder = (product: Product) => shopDetails.indexOf(product);

//     switch (filters.sortBy) {
//       case "Alphabetically A-Z":
//         sorted.sort((a, b) => a.productName.localeCompare(b.productName));
//         break;

//       case "Alphabetically Z-A":
//         sorted.sort((a, b) => b.productName.localeCompare(a.productName));
//         break;

//       case "Price, low to high":
//         sorted.sort(
//           (a, b) => priceToNumber(a.price) - priceToNumber(b.price)
//         );
//         break;

//       case "Price, high to low":
//         sorted.sort(
//           (a, b) => priceToNumber(b.price) - priceToNumber(a.price)
//         );
//         break;

//       case "Date, new to old":
//         sorted.sort((a, b) => originalOrder(b) - originalOrder(a));
//         break;

//       case "Date, old to new":
//         sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//         break;

//       case "Featured":
//         sorted.sort((a, b) => {
//           const aPriority = a.categoryType === "Featured" ? 0 : 1;
//           const bPriority = b.categoryType === "Featured" ? 0 : 1;
//           if (aPriority === bPriority)
//             return originalOrder(a) - originalOrder(b);
//           return aPriority - bPriority;
//         });
//         break;

//       default:
//         sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//     }

//     return sorted;
//   }, [filters, shopDetails]);

//   /** PAGINATION **/
//   const totalItems = filteredProducts.length;
//   const totalPages = Math.ceil(totalItems / limit);
//   const start = (currentPage - 1) * limit;
//   const currentProducts = filteredProducts.slice(start, start + limit);

//   const changePage = (p: number) => {
//     if (p < 1 || p > totalPages) return;
//     setCurrentPage(p);
//   };

//   /** OPTIONS **/
//   const sizeOptions = ["Small", "Medium", "Large", "Extra Large"];
//   const grapeOptions = [
//     "Merlot",
//     "Pinot Noir",
//     "Sauvignon Blanc",
//     "Riesling",
//     "Rosé",
//     "Gewurztraminer",
//     "Rouge Pur",
//     "Pinot Grigio",
//   ];
//   const availabilityOptions = ["In Stock", "Out Of Stock"];
//   const allOptions = ["Featured", "Popular", "New Arrivals"];
//   const sortByOptions = [
//     "Best Sellers",
//     "Featured",
//     "Alphabetically A-Z",
//     "Alphabetically Z-A",
//     "Price, low to high",
//     "Price, high to low",
//     "Date, old to new",
//     "Date, new to old",
//   ];

//   /** UPDATE FILTER **/
//   const handleFilterChange = (name: string, value: any) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     setCurrentPage(1);
//   };

//   /** REMOVE CHIP **/
//   const removeChip = (type: string, value: string) => {
//     if (type === "size") {
//       setFilters((prev) => ({ ...prev, size: "Size" }));
//     } else if (type === "price") {
//       setFilters((prev) => ({ ...prev, price: { min: 0, max: 100 } }));
//     } else if (type === "grape") {
//       setFilters((prev) => ({
//         ...prev,
//         grape: prev.grape.filter((g) => g !== value),
//       }));
//     } else if (type === "availability") {
//       setFilters((prev) => ({
//         ...prev,
//         availability: prev.availability.filter((a) => a !== value),
//       }));
//     } else if (type === "all") {
//       setFilters((prev) => ({ ...prev, all: "All" }));
//     }
//   };

import React, { useState, useMemo, useEffect } from "react";
import { X, Filter, Plus, Minus } from "lucide-react";

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
import relatedproduct1 from "../../assets/images/relatedproduct1.png";
import relatedproduct2 from "../../assets/images/relatedproduct2.png";
import verietyImg from "../../assets/images/variety.png";
import productmedal from "../../assets/images/productmedal.png";

import ProductsChild from "../products/productsChild";
import FilterDropdown from "../ui/FilterDropDown";
import { useSelector } from "react-redux";

interface Product {
  type: string;
  productImg: string;
  productName: string;
  variety: string;
  varietylogo: string;
  price: string;
  medal?: string;
  flavour: string;
  size: string;
  inStock: boolean;
  categoryType: string;
}

const randomSize = () => {
  const arr = ["Small", "Medium", "Large", "Extra Large"];
  return arr[Math.floor(Math.random() * arr.length)];
};

const Shop: React.FC = () => {
  const [filters, setFilters] = useState({
    size: "Size",
    price: { min: 0, max: 100 },
    grape: [] as string[],
    all: "All",
    availability: [] as string[],
    sortBy: "Alphabetically Z-A",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const itemsPerPageOptions = [6, 10, 20, 30, 100];
  const [limit, setLimit] = useState(itemsPerPageOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const shopDetails = useSelector((state) => state.cart.productsDetails);

  const handleOpenSidebar = () => {
    if (typeof window !== "undefined" && window.innerWidth > 1024) return;
    setSidebarOpen(true);
  };

  // const priceToNumber = (price: string) => {
  //   const parsed = parseFloat(price.replace(/[^0-9.]/g, ""));
  //   return Number.isNaN(parsed) ? 0 : parsed;
  // };

  const priceToNumber = (price: any) => {
  if (typeof price === "number") return price; 
  if (typeof price === "string") return parseFloat(price.replace("$", ""));
  return 0; // fallback to avoid crash
};


  // const shopDetails: Product[] = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       type: "Bergdolt, Reif & Nett",
  //       productImg: product1,
  //       productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$29.76",
  //       medal: productmedal,
  //       flavour: "Merlot",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Featured",
  //     },
  //     {
  //       id: 2,
  //       type: "Bergdolt, Reif & Nett",
  //       productImg: product2,
  //       productName:
  //         "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$29.38",
  //       flavour: "Pinot Noir",
  //       size: randomSize(),
  //       inStock: false,
  //       categoryType: "Popular",
  //     },
  //     {
  //       id: 3,
  //       type: "Bergdolt, Reif & Nett",
  //       productImg: product3,
  //       productName: "Reverse Sauvignon Blanc Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$25.76",
  //       flavour: "Sauvignon Blanc",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "New Arrivals",
  //     },
  //     {
  //       id: 4,
  //       type: "Bergdolt, Reif & Nett",
  //       productImg: product4,
  //       productName: "Reverse Gewurztraminer Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$29.38",
  //       flavour: "Gewurztraminer",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Popular",
  //     },
  //     {
  //       id: 5,
  //       type: "Bergdolt, Reif & Nett",
  //       productImg: product5,
  //       productName: "Reverse Rosé Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$25.76",
  //       flavour: "Rosé",
  //       size: randomSize(),
  //       inStock: false,
  //       categoryType: "Featured",
  //     },
  //     {
  //       id: 6,
  //       type: "Bergdolt, Reif & Nett",
  //       productImg: product6,
  //       productName: "Reverse Riesling Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$27.16",
  //       flavour: "Riesling",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "New Arrivals",
  //     },

  //     {
  //       id: 7,
  //       type: "Lamm Jung",
  //       productImg: secondtabproduct,
  //       productName: "Lamm-Jung Riesling Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$26.97",
  //       medal: productmedal,
  //       flavour: "Riesling",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Popular",
  //     },

  //     {
  //       id: 8,
  //       type: "KvD Strauch",
  //       productImg: thirdtabproduct,
  //       productName: "Rouge Pur Alkoholfrei",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$28.91",
  //       medal: productmedal,
  //       flavour: "Rouge Pur",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Featured",
  //     },

  //     {
  //       id: 9,
  //       type: "Château Clos de Boüard",
  //       productImg: fourthtabproduct1,
  //       productName: "Sauvignon Blanc Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$25.61",
  //       flavour: "Sauvignon Blanc",
  //       size: randomSize(),
  //       inStock: false,
  //       categoryType: "New Arrivals",
  //     },
  //     {
  //       id: 10,
  //       type: "Château Clos de Boüard",
  //       productImg: fourthtabproduct2,
  //       productName: "Rosé Sparkling Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$28.19",
  //       flavour: "Pinot Noir",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Featured",
  //     },

  //     {
  //       id: 11,
  //       type: "Matthias Anton",
  //       productImg: fifthtabproduct1,
  //       productName: "Sauvignon Blanc (vegan)",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$33.61",
  //       medal: productmedal,
  //       flavour: "Sauvignon Blanc",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Popular",
  //     },
  //     {
  //       id: 12,
  //       type: "Matthias Anton",
  //       productImg: fifthtabproduct2,
  //       productName: "Rosé Sparkling",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$28.19",
  //       medal: productmedal,
  //       flavour: "Pinot Noir",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "New Arrivals",
  //     },
  //     {
  //       id: 13,
  //       type: "Matthias Anton",
  //       productImg: fifthtabproduct3,
  //       productName: "Rosé Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$25.61",
  //       flavour: "Rosé",
  //       size: randomSize(),
  //       inStock: false,
  //       categoryType: "Featured",
  //     },
  //     {
  //       id: 14,
  //       type: "Matthias Anton",
  //       productImg: fifthtabproduct4,
  //       productName: "Pinot Grigio Dealalcoolized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$25.61",
  //       flavour: "Pinot Grigio",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Popular",
  //     },
  //     {
  //       id: 15,
  //       type: "Matthias Anton",
  //       productImg: fifthtabproduct5,
  //       productName: "Blanc de Blancs Sparkling",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$28.19",
  //       flavour: "Pinot Noir",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Featured",
  //     },

  //     {
  //       id: 16,
  //       productImg: relatedproduct1,
  //       productName: "Reverse Gewurztraminer Dealcoholized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$29.38",
  //       flavour: "Gewurztraminer",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Featured",
  //     },
  //     {
  //       id: 17,
  //       productImg: relatedproduct2,
  //       productName: "Reverse Rose (vegan) Dealcoholized",
  //       variety: "Grape variety",
  //       varietylogo: verietyImg,
  //       price: "$25.76",
  //       flavour: "Rose",
  //       size: randomSize(),
  //       inStock: true,
  //       categoryType: "Popular",
  //     },
  //   ],
  //   []
  // );




  /** FILTER + SORT LOGIC **/
  const filteredProducts = useMemo(() => {
    const filtered = shopDetails.filter((p) => {
      const priceNum = parseFloat(p.price);

      if (filters.size !== "Size" && p.size !== filters.size) return false;

      if (filters.grape.length > 0 && !filters.grape.includes(p.flavour))
        return false;

      if (filters.availability.length > 0) {
        if (filters.availability.includes("In Stock") && !p.inStock)
          return false;
        if (filters.availability.includes("Out Of Stock") && p.inStock)
          return false;
      }

      if (filters.all !== "All" && p.categoryType !== filters.all) return false;

      if (priceNum < filters.price.min || priceNum > filters.price.max)
        return false;

      return true;
    });

    const sorted = [...filtered];
    const originalOrder = (product: Product) => shopDetails.indexOf(product);

    switch (filters.sortBy) {
      case "Alphabetically A-Z":
        sorted.sort((a, b) => a.productName.localeCompare(b.productName));
        break;

      case "Alphabetically Z-A":
        sorted.sort((a, b) => b.productName.localeCompare(a.productName));
        break;

      case "Price, low to high":
        sorted.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
        break;

      case "Price, high to low":
        sorted.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
        break;

      case "Date, new to old":
        sorted.sort((a, b) => originalOrder(b) - originalOrder(a));
        break;

      case "Date, old to new":
        sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
        break;

      case "Featured":
        sorted.sort((a, b) => {
          const aPriority = a.categoryType === "Featured" ? 0 : 1;
          const bPriority = b.categoryType === "Featured" ? 0 : 1;
          if (aPriority === bPriority)
            return originalOrder(a) - originalOrder(b);
          return aPriority - bPriority;
        });
        break;

      default:
        sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
    }

    return sorted;
  }, [filters, shopDetails]);

  /** PAGINATION **/
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (currentPage - 1) * limit;
  const currentProducts = filteredProducts.slice(start, start + limit);

  const changePage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setCurrentPage(p);
  };

  /** OPTIONS **/
  const sizeOptions = ["Small", "Medium", "Large", "Extra Large"];
  const grapeOptions = [
    "Merlot",
    "Pinot Noir",
    "Sauvignon Blanc",
    "Riesling",
    "Rosé",
    "Gewurztraminer",
    "Rouge Pur",
    "Pinot Grigio",
  ];
  const availabilityOptions = ["In Stock", "Out Of Stock"];
  const allOptions = ["Featured", "Popular", "New Arrivals"];
  const sortByOptions = [
    "Best Sellers",
    "Featured",
    "Alphabetically A-Z",
    "Alphabetically Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];

  /** UPDATE FILTER **/
  const handleFilterChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  /** REMOVE CHIP **/
  const removeChip = (type: string, value: string) => {
    if (type === "size") {
      setFilters((prev) => ({ ...prev, size: "Size" }));
    } else if (type === "price") {
      setFilters((prev) => ({ ...prev, price: { min: 0, max: 100 } }));
    } else if (type === "grape") {
      setFilters((prev) => ({
        ...prev,
        grape: prev.grape.filter((g) => g !== value),
      }));
    } else if (type === "availability") {
      setFilters((prev) => ({
        ...prev,
        availability: prev.availability.filter((a) => a !== value),
      }));
    } else if (type === "all") {
      setFilters((prev) => ({ ...prev, all: "All" }));
    }
  };

  const Accordion = ({ title, children }: { title: string; children: any }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-gray-300 pb-3">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full text-left py-3 font-urbanist font-semibold text-lg"
        >
          <span>{title}</span>
          {open ? (
            <Minus size={20} className="text-[#0B0B0B]" />
          ) : (
            <Plus size={20} className="text-[#0B0B0B]" />
          )}
        </button>

        {open && <div className="pl-2 pb-2">{children}</div>}
      </div>
    );
  };

  /** CLEAR ALL **/
  const clearAll = () => {
    setFilters({
      size: "Size",
      price: { min: 0, max: 100 },
      grape: [],
      all: "All",
      availability: [],
      sortBy: "Best Sellers",
    });
  };

  /** CLOSE SIDEBAR ON RESIZE **/
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /** CHIP COMPONENT **/
  const Chip = ({ label, onRemove }: any) => (
    <div className="bg-[#EED291] text-[#0B0B0B] px-3 py-1 rounded-md flex items-center gap-2 font-urbanist text-sm">
      {label}
      <button onClick={onRemove}>
        <X size={16} />
      </button>
    </div>
  );

  return (
    <>
      {/* BANNER */}
      <div className="bg-[url('/images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38 md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins me-1 ms-1">&gt; </span>Shop
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            Products
          </p>
          {/* <p className="font-urbanist font-semibold text-base text-white">
            Non-alcoholic (&lt;0.5% ABV). Intended for adults.
          </p> */}
        </div>
      </div>

      <div className="w-full">
        <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">
          {/* FILTER BAR */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
            <div className="flex items-center flex-wrap gap-3">
              {/* MOBILE FILTER BUTTON */}
              <button
                onClick={handleOpenSidebar}
                className="flex items-center gap-2 w-[60px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B]"
              >
                <Filter size={18} />
                <span>Filter</span>
              </button>

              {/* DESKTOP FILTERS */}
              <div className="hidden xl:flex items-center gap-3">
                <div className="w-[150px]">
                  <FilterDropdown
                    type="single"
                    label="Size"
                    value={filters.size}
                    options={sizeOptions}
                    onChange={(v) => handleFilterChange("size", v)}
                  />
                </div>

                <div className="w-[200px]">
                  <FilterDropdown
                    type="price"
                    value={filters.price}
                    label="Price"
                    onChange={(v) => handleFilterChange("price", v)}
                  />
                </div>

                <div className="w-[200px]">
                  <FilterDropdown
                    type="multi"
                    label="Grape"
                    value={filters.grape}
                    options={grapeOptions}
                    onChange={(v) => handleFilterChange("grape", v)}
                  />
                </div>

                <div className="w-[140px]">
                  <FilterDropdown
                    type="single"
                    label="All"
                    value={filters.all}
                    options={allOptions}
                    onChange={(v) => handleFilterChange("all", v)}
                  />
                </div>

                <div className="w-[200px]">
                  <FilterDropdown
                    type="multi"
                    label="Availability"
                    value={filters.availability}
                    options={availabilityOptions}
                    onChange={(v) => handleFilterChange("availability", v)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="font-urbanist font-semibold text-sm md:text-base text-[#0B0B0B]">
                Sort By:
              </span>{" "}
              <div className="w-[180px]">
                <FilterDropdown
                  type="single"
                  value={filters.sortBy}
                  label="Sort"
                  options={sortByOptions}
                  onChange={(v) => handleFilterChange("sortBy", v)}
                />
              </div>
            </div>
          </div>

          {/* FILTER CHIPS */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* CLEAR ALL */}
            {(filters.size !== "Size" ||
              filters.price.min !== 0 ||
              filters.price.max !== 100 ||
              filters.grape.length > 0 ||
              filters.availability.length > 0 ||
              filters.all !== "All") && (
              <button
                onClick={clearAll}
                className="text-[#0B0B0B] underline font-urbanist text-sm"
              >
                Clear All
              </button>
            )}

            {/* SIZE */}
            {filters.size !== "Size" && (
              <Chip
                label={filters.size}
                onRemove={() => removeChip("size", filters.size)}
              />
            )}

            {/* PRICE */}
            {(filters.price.min !== 0 || filters.price.max !== 100) && (
              <Chip
                label={`$${filters.price.min} - $${filters.price.max}`}
                onRemove={() => removeChip("price", "")}
              />
            )}

            {/* GRAPES */}
            {filters.grape.map((g) => (
              <Chip key={g} label={g} onRemove={() => removeChip("grape", g)} />
            ))}

            {/* AVAILABILITY */}
            {filters.availability.map((a) => (
              <Chip
                key={a}
                label={a}
                onRemove={() => removeChip("availability", a)}
              />
            ))}

            {/* CATEGORY */}
            {filters.all !== "All" && (
              <Chip
                label={filters.all}
                onRemove={() => removeChip("all", filters.all)}
              />
            )}
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        {/* SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full w-[72%] sm:w-[40%] md:w-[38%] lg:w-[28%] z-[9999] bg-white shadow-xl transform transition-all duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-4 py-4">
            <h2 className="text-xl font-semibold font-urbanist">Sidebar</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* SIDEBAR CONTENT */}
          <div className="p-4 overflow-y-auto h-[calc(100%-60px)] font-urbanist">
            {/* SHOW FILTER HEADER + CLEAR ALL ONLY IF ANY FILTER IS ACTIVE */}
            {(filters.size !== "Size" ||
              filters.price.min !== 0 ||
              filters.price.max !== 100 ||
              filters.grape.length > 0 ||
              filters.availability.length > 0 ||
              filters.all !== "All") && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-urbanist font-semibold text-lg">Filters</h3>
                <button
                  onClick={clearAll}
                  className="text-[#0B0B0B] underline text-sm font-medium"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* CHIPS (SHOW ONLY IF ANY FILTER ACTIVE) */}
            {(filters.size !== "Size" ||
              filters.price.min !== 0 ||
              filters.price.max !== 100 ||
              filters.grape.length > 0 ||
              filters.availability.length > 0 ||
              filters.all !== "All") && (
              <div className="flex flex-wrap gap-2 mb-4 xl:hidden">
                {filters.size !== "Size" && (
                  <Chip
                    label={filters.size}
                    onRemove={() => removeChip("size", filters.size)}
                  />
                )}

                {(filters.price.min !== 0 || filters.price.max !== 100) && (
                  <Chip
                    label={`$${filters.price.min} - $${filters.price.max}`}
                    onRemove={() => removeChip("price", "")}
                  />
                )}

                {filters.grape.map((g) => (
                  <Chip
                    key={g}
                    label={g}
                    onRemove={() => removeChip("grape", g)}
                  />
                ))}

                {filters.availability.map((a) => (
                  <Chip
                    key={a}
                    label={a}
                    onRemove={() => removeChip("availability", a)}
                  />
                ))}

                {filters.all !== "All" && (
                  <Chip
                    label={filters.all}
                    onRemove={() => removeChip("all", filters.all)}
                  />
                )}
              </div>
            )}

            {/* SIDEBAR ACCORDIONS */}
            <Accordion title="Size">
              {sizeOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-3 py-1">
                  <input
                    type="radio"
                    name="size"
                    value={filters.size}
                    checked={filters.size === opt}
                    onChange={() => {
                      handleFilterChange("size", opt);
                      setSidebarOpen(false); // CLOSE SIDEBAR
                    }}
                    className="accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>

            <Accordion title="Price">
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-full bg-[#E5C97A] rounded-full"
                    style={{
                      left: `${filters.price.min}%`,
                      width: `${filters.price.max - filters.price.min}%`,
                    }}
                  />

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={filters.price.min}
                    onChange={(e) => {
                      const v = +e.target.value;
                      if (v < filters.price.max)
                        handleFilterChange("price", {
                          ...filters.price,
                          min: v,
                        });
                    }}
                    onMouseUp={() => setSidebarOpen(false)} // CLOSE SIDEBAR
                    className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
                  />

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={filters.price.max}
                    onChange={(e) => {
                      const v = +e.target.value;
                      if (v > filters.price.min)
                        handleFilterChange("price", {
                          ...filters.price,
                          max: v,
                        });
                    }}
                    onMouseUp={() => setSidebarOpen(false)} // CLOSE SIDEBAR
                    className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
                  />
                </div>

                <div className="flex justify-between">
                  <div className="border px-3 py-1 rounded">
                    ${filters.price.min}
                  </div>
                  <span>to</span>
                  <div className="border px-3 py-1 rounded">
                    ${filters.price.max}
                  </div>
                </div>
              </div>
            </Accordion>

            <Accordion title="Grape">
              {grapeOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 py-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={opt}
                    checked={filters.grape.includes(opt)}
                    onChange={() => {
                      const u = filters.grape.includes(opt)
                        ? filters.grape.filter((x) => x !== opt)
                        : [...filters.grape, opt];

                      handleFilterChange("grape", u);
                      setSidebarOpen(false); // CLOSE SIDEBAR
                    }}
                    className="w-4 h-4 accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>

            <Accordion title="All Categories">
              {allOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-3 py-2">
                  <input
                    type="radio"
                    name="all"
                    value={filters.all}
                    checked={filters.all === opt}
                    onChange={() => {
                      handleFilterChange("all", opt);
                      setSidebarOpen(false); // CLOSE SIDEBAR
                    }}
                    className="accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>

            <Accordion title="Availability">
              {availabilityOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 py-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={opt}
                    checked={filters.availability.includes(opt)}
                    onChange={() => {
                      const u = filters.availability.includes(opt)
                        ? filters.availability.filter((x) => x !== opt)
                        : [...filters.availability, opt];

                      handleFilterChange("availability", u);
                      setSidebarOpen(false); // CLOSE SIDEBAR
                    }}
                    className="w-4 h-4 accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>
          </div>
        </div>

        {/* BACKDROP */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[900] xl:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* PRODUCTS GRID */}
        <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
          {currentProducts.map((product, index) => (
            <ProductsChild key={index} product={product} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="w-full flex gap-y-4 flex-col md:flex-row justify-between items-center px-6 pb-12">
          <div className="flex items-center gap-2 mt-4 md:mt-0 font-urbanist">
            <p className="text-sm">Showing</p>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-[#E5C97A] rounded-lg px-2 py-1 text-sm"
            >
              {itemsPerPageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <p className="text-sm">
              of <span className="font-semibold">{totalItems}</span> entries
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border font-urbanist border-[#E5C97A] rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => changePage(p)}
                  className={`px-4 py-2 rounded  font-urbanist text-sm ${
                    currentPage === p
                      ? "bg-[#E5C97A]"
                      : "bg-white border border-[#E5C97A]"
                  }`}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border  font-urbanist border-[#E5C97A] rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
