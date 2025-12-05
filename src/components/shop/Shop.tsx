// import React, { useState, useMemo, useEffect } from "react";
// import { X, Filter, Plus, Minus } from "lucide-react";
// import ProductsChild from "../products/productsChild";
// import FilterDropdown from "../ui/FilterDropDown";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { showError } from "../../utils/toastHandler";

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

// const Shop: React.FC = () => {
//   const [filters, setFilters] = useState({
//     size: [] as string[],
//     price: { min: 0, max: 100 },
//     grape: [] as string[],
//     all: [] as string[],
//     availability: [] as string[],
//     sortBy: "Alphabetically Z-A",
//   });

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const itemsPerPageOptions = [6, 10, 20, 30, 100];
//   const [limit, setLimit] = useState(itemsPerPageOptions[0]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [totalItems, setTotalItems] = useState(0);

//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchFilteredProducts = async () => {
//     try {
//       const sizeStr = filters.size.length ? filters.size.join(",") : "";
//       const categoryStr = filters.all.length ? filters.all.join(",") : "";
//       const grapeStr = filters.grape.length ? filters.grape.join(",") : "";
//       const availability = filters.availability.length
//         ? filters.availability.join(",")
//         : "";

//       const queryParams = new URLSearchParams({
//         size: sizeStr,
//         grape: grapeStr,
//         minPrice: filters.price.min.toString(),
//         maxPrice: filters.price.max.toString(),
//         availability,
//         categoryType: categoryStr,
//         sortBy: filters.sortBy,
//         page: currentPage.toString(),
//         limit: limit.toString(),
//       });

//       const url = `${
//         import.meta.env.VITE_API_URL
//       }/products/getFilteredProducts?${queryParams.toString()}`;
//       const res = await axios.get(url);

//       if (res.data.success) {
//         const products = res.data.data;
//         setFilteredProducts(products);
//         setTotalItems(res.data.total);

//         if (products.length === 0) {
//           if (filters.availability.includes("Out Of Stock")) {
//             setErrorMessage("No out-of-stock products found.");
//           } else if (filters.availability.includes("In Stock")) {
//             setErrorMessage("No in-stock products available.");
//           } else {
//             setErrorMessage("No products found for the selected filters.");
//           }
//         } else {
//           setErrorMessage("");
//         }
//       }
//     } catch (error) {
//       showError(error, "FILTER API FAILED:");
//     }
//   };

//   useEffect(() => {
//     fetchFilteredProducts();
//   }, [filters, limit, currentPage]);

//   const totalPages = Math.ceil(totalItems / limit);
//   const currentProducts = filteredProducts;

//   const shopDetails = useSelector((state: any) => state.cart.productsDetails);

//   const handleOpenSidebar = () => {
//     if (typeof window !== "undefined" && window.innerWidth > 1024) return;
//     setSidebarOpen(true);
//   };

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

//   const handleFilterChange = (name: string, value: any) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     setCurrentPage(1);
//   };


//   //  const filteredProducts = useMemo(() => {
//   //   const filtered = shopDetails.filter((p) => {
//   //     const priceNum = parseFloat(p.price);

//   //     if (filters.size !== "Size" && p.size !== filters.size) return false;

//   //     if (filters.grape.length > 0 && !filters.grape.includes(p.flavour))
//   //       return false;

//   //     if (filters.availability.length > 0) {
//   //       if (filters.availability.includes("In Stock") && !p.inStock)
//   //         return false;
//   //       if (filters.availability.includes("Out Of Stock") && p.inStock)
//   //         return false;
//   //     }

//   //     if (filters.all !== "All" && p.categoryType !== filters.all) return false;

//   //     if (priceNum < filters.price.min || priceNum > filters.price.max)
//   //       return false;

//   //     return true;
//   //   });

//   //   const sorted = [...filtered];
//   //   const originalOrder = (product: Product) => shopDetails.indexOf(product);

//   //   switch (filters.sortBy) {
//   //     case "Alphabetically A-Z":
//   //       sorted.sort((a, b) => a.productName.localeCompare(b.productName));
//   //       break;

//   //     case "Alphabetically Z-A":
//   //       sorted.sort((a, b) => b.productName.localeCompare(a.productName));
//   //       break;

//   //     case "Price, low to high":
//   //       sorted.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
//   //       break;

//   //     case "Price, high to low":
//   //       sorted.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
//   //       break;

//   //     case "Date, new to old":
//   //       sorted.sort((a, b) => originalOrder(b) - originalOrder(a));
//   //       break;

//   //     case "Date, old to new":
//   //       sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//   //       break;

//   //     case "Featured":
//   //       sorted.sort((a, b) => {
//   //         const aPriority = a.categoryType === "Featured" ? 0 : 1;
//   //         const bPriority = b.categoryType === "Featured" ? 0 : 1;
//   //         if (aPriority === bPriority)
//   //           return originalOrder(a) - originalOrder(b);
//   //         return aPriority - bPriority;
//   //       });
//   //       break;

//   //     default:
//   //       sorted.sort((a, b) => originalOrder(a) - originalOrder(b));
//   //   }

//   //   return sorted;
//   // }, [filters, shopDetails]);

//   const removeChip = (type: string, value: string) => {
//     if (type === "size") {
//       setFilters((prev) => ({
//         ...prev,
//         size: prev.size.filter((x) => x !== value),
//       }));
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
//       setFilters((prev) => ({
//         ...prev,
//         all: prev.all.filter((x) => x !== value),
//       }));
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

//   const clearAll = () => {
//     setFilters({
//       size: [],
//       price: { min: 0, max: 100 },
//       grape: [],
//       all: [],
//       availability: [],
//       sortBy: "Best Sellers",
//     });
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setSidebarOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

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
//       <div className="bg-[url('/images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38 md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins me-1 ms-1">&gt; </span>Shop
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             Products
//           </p>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
//             <div className="flex items-center flex-wrap gap-3">
//               <button
//                 onClick={handleOpenSidebar}
//                 className="flex items-center gap-2 w-[60px] h-[40px] rounded-lg font-urbanist font-semibold text-sm text-[#0B0B0B]"
//               >
//                 <Filter size={18} />
//                 <span>Filter</span>
//               </button>

//               <div className="hidden xl:flex items-center gap-3">
//                 <div className="w-[150px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Size"
//                     value={filters.size}
//                     options={sizeOptions}
//                     onChange={(v) => handleFilterChange("size", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="price"
//                     value={filters.price}
//                     label="Price"
//                     onChange={(v) => handleFilterChange("price", v)}
//                   />
//                 </div>

//                 <div className="w-[240px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="All"
//                     value={filters.all}
//                     options={allOptions}
//                     onChange={(v) => handleFilterChange("all", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Grape"
//                     value={filters.grape}
//                     options={grapeOptions}
//                     onChange={(v) => handleFilterChange("grape", v)}
//                   />
//                 </div>

//                 <div className="w-[200px]">
//                   <FilterDropdown
//                     type="multi"
//                     label="Availability"
//                     value={filters.availability}
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
//                   value={filters.sortBy}
//                   label={filters.sortBy}
//                   options={sortByOptions}
//                   onChange={(v) => handleFilterChange("sortBy", v)}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             {(filters.size.length > 0 ||
//               filters.price.min !== 0 ||
//               filters.price.max !== 100 ||
//               filters.grape.length > 0 ||
//               filters.availability.length > 0 ||
//               filters.all.length > 0) && (
//               <button
//                 onClick={clearAll}
//                 className="text-[#0B0B0B] cursor-pointer hover:text-[#EED291] transition duration-600 underline font-urbanist text-sm"
//               >
//                 Clear All
//               </button>
//             )}

//             {filters.size.map((s) => (
//               <Chip key={s} label={s} onRemove={() => removeChip("size", s)} />
//             ))}

//             {(filters.price.min !== 0 || filters.price.max !== 100) && (
//               <Chip
//                 label={`$${filters.price.min} - $${filters.price.max}`}
//                 onRemove={() => removeChip("price", "")}
//               />
//             )}

//             {filters.grape.map((g) => (
//               <Chip key={g} label={g} onRemove={() => removeChip("grape", g)} />
//             ))}

//             {filters.availability.map((a) => (
//               <Chip
//                 key={a}
//                 label={a}
//                 onRemove={() => removeChip("availability", a)}
//               />
//             ))}

//             {filters.all.map((c) => (
//               <Chip key={c} label={c} onRemove={() => removeChip("all", c)} />
//             ))}
//           </div>
//         </div>

//         {errorMessage && (
//           <div className="w-[95%] xl:w-[80%] mx-auto mt-6 text-center text-red-600 font-urbanist font-semibold text-lg">
//             {errorMessage}
//           </div>
//         )}




//         {/* SIDEBAR ACCORDIONS */}
//              <Accordion title="Size">
//            {sizeOptions.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-1">
//                   <input
//                     type="radio"
//                     name="size"
//                     value={filters.size}
//                     checked={filters.size === opt}
//                     onChange={() => {
//                       handleFilterChange("size", opt);
//                       setSidebarOpen(false); 
//                     }}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>

//             <Accordion title="Price">
//               <div className="flex flex-col gap-4">
//                 <div className="relative w-full h-2 bg-gray-200 rounded-full">
//                   <div
//                     className="absolute h-full bg-[#E5C97A] rounded-full"
//                     style={{
//                       left: `${filters.price.min}%`,
//                       width: `${filters.price.max - filters.price.min}%`,
//                     }}
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.min}
//                     onChange={(e) => {
//                       const v = +e.target.value;
//                       if (v < filters.price.max)
//                         handleFilterChange("price", {
//                           ...filters.price,
//                           min: v,
//                         });
//                     }}
//                     onMouseUp={() => setSidebarOpen(false)} 
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />

//                   <input
//                     type="range"
//                     min={0}
//                     max={100}
//                     value={filters.price.max}
//                     onChange={(e) => {
//                       const v = +e.target.value;
//                       if (v > filters.price.min)
//                         handleFilterChange("price", {
//                           ...filters.price,
//                           max: v,
//                         });
//                     }}
//                     onMouseUp={() => setSidebarOpen(false)}
//                     className="absolute w-full top-[-6px] opacity-0 cursor-pointer"
//                   />
//                 </div>

//                 <div className="flex justify-between">
//                   <div className="border px-3 py-1 rounded">
//                     ${filters.price.min}
//                   </div>
//                   <span>to</span>
//                   <div className="border px-3 py-1 rounded">
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
//                     value={opt}
//                     checked={filters.grape.includes(opt)}
//                     onChange={() => {
//                       const u = filters.grape.includes(opt)
//                         ? filters.grape.filter((x) => x !== opt)
//                         : [...filters.grape, opt];

//                       handleFilterChange("grape", u);
//                       setSidebarOpen(false); 
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>

//             <Accordion title="All Categories">
//               {allOptions.map((opt) => (
//                 <label key={opt} className="flex items-center gap-3 py-2">
//                   <input
//                     type="radio"
//                     name="all"
//                     value={filters.all}
//                     checked={filters.all === opt}
//                     onChange={() => {
//                       handleFilterChange("all", opt);
//                       setSidebarOpen(false); // CLOSE SIDEBAR
//                     }}
//                     className="accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
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
//                     value={opt}
//                     checked={filters.availability.includes(opt)}
//                     onChange={() => {
//                       const u = filters.availability.includes(opt)
//                         ? filters.availability.filter((x) => x !== opt)
//                         : [...filters.availability, opt];

//                       handleFilterChange("availability", u);
//                       setSidebarOpen(false); // CLOSE SIDEBAR
//                     }}
//                     className="w-4 h-4 accent-[#E5C97A]"
//                   />
//                   <span>{opt}</span>
//                 </label>
//               ))}
//             </Accordion>
//           </div>
//         </div>

 
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[900] xl:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}



//         <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
//           {!errorMessage &&
//             currentProducts.map((product, index) => (
//               <ProductsChild key={index} product={product} />
//             ))}
//         </div>




//         {!errorMessage && (
//           <div className="w-full flex gap-y-4 flex-col md:flex-row justify-between items-center px-6 pb-12">
//             <div className="flex items-center gap-2 mt-4 md:mt-0 font-urbanist">
//               <p className="text-sm">Showing</p>

//               <select
//                 value={limit}
//                 onChange={(e) => {
//                   setLimit(Number(e.target.value));
//                   setCurrentPage(1);
//                 }}
//                 className="border border-[#E5C97A] rounded-lg px-2 py-1 text-sm"
//               >
//                 {itemsPerPageOptions.map((opt) => (
//                   <option key={opt} value={opt}>
//                     {opt}
//                   </option>
//                 ))}
//               </select>

//               <p className="text-sm">
//                 of <span className="font-semibold">{totalItems}</span> entries
//               </p>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border cursor-pointer font-urbanist border-[#E5C97A] rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>

//               {Array.from({ length: totalPages }).map((_, i) => {
//                 const p = i + 1;
//                 return (
//                   <button
//                     key={p}
//                     onClick={() => setCurrentPage(p)}
//                     className={`px-4 py-2 rounded font-urbanist cursor-pointer text-sm ${
//                       currentPage === p
//                         ? "bg-[#EED291]"
//                         : "bg-white border border-[#EED291]"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 );
//               })}

//               <button
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 border cursor-pointer font-urbanist border-[#EED291] rounded disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Shop;






import React, { useState, useMemo, useEffect } from "react";
import { X, Filter, Plus, Minus } from "lucide-react";
import ProductsChild from "../products/productsChild";
import FilterDropdown from "../ui/FilterDropDown";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { showError } from "../../utils/toastHandler";

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

const Shop: React.FC = () => {
  const [filters, setFilters] = useState({
    size: [] as string[],
    price: { min: 0, max: 100 },
    grape: [] as string[],
    all: [] as string[],
    availability: [] as string[],
    sortBy: "Alphabetically Z-A",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const itemsPerPageOptions = [6, 10, 20, 30, 100];
  const [limit, setLimit] = useState(itemsPerPageOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");

  const fetchFilteredProducts = async () => {
    try {
      const sizeStr = filters.size.length ? filters.size.join(",") : "";
      const categoryStr = filters.all.length ? filters.all.join(",") : "";
      const grapeStr = filters.grape.length ? filters.grape.join(",") : "";
      const availability = filters.availability.length
        ? filters.availability.join(",")
        : "";

      const queryParams = new URLSearchParams({
        size: sizeStr,
        grape: grapeStr,
        minPrice: filters.price.min.toString(),
        maxPrice: filters.price.max.toString(),
        availability,
        categoryType: categoryStr,
        sortBy: filters.sortBy,
        page: currentPage.toString(),
        limit: limit.toString(),
      });

      const url = `${
        import.meta.env.VITE_API_URL
      }/products/getFilteredProducts?${queryParams.toString()}`;
      const res = await axios.get(url);

      if (res.data.success) {
        const products = res.data.data;
        setFilteredProducts(products);
        setTotalItems(res.data.total);

        if (products.length === 0) {
          if (filters.availability.includes("Out Of Stock")) {
            setErrorMessage("No out-of-stock products found.");
          } else if (filters.availability.includes("In Stock")) {
            setErrorMessage("No in-stock products available.");
          } else {
            setErrorMessage("No products found for the selected filters.");
          }
        } else {
          setErrorMessage("");
        }
      }
    } catch (error) {
      showError(error, "FILTER API FAILED:");
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters, limit, currentPage]);

  const totalPages = Math.ceil(totalItems / limit);
  const currentProducts = filteredProducts;

  const handleOpenSidebar = () => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen(true);
    }
  };

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

  const handleFilterChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const removeChip = (type: string, value: string) => {
    if (type === "size") {
      setFilters((prev) => ({
        ...prev,
        size: prev.size.filter((x) => x !== value),
      }));
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
      setFilters((prev) => ({
        ...prev,
        all: prev.all.filter((x) => x !== value),
      }));
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

  const clearAll = () => {
    setFilters({
      size: [],
      price: { min: 0, max: 100 },
      grape: [],
      all: [],
      availability: [],
      sortBy: "Best Sellers",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* HERO SECTION */}
      <div className="bg-[url('/images/productDetailsImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-38 md:mt-45 lg:mt-50 xl:mt-60 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins me-1 ms-1">&gt; </span>Shop
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            Products
          </p>
        </div>
      </div>

      {/* TOP FILTER BAR */}
      <div className="w-full">
        <div className="w-[95%] mx-auto pt-[55px] xl:pt-[100px]">
          <div className="flex flex-col md:flex-row items-start xl:items-end md:items-center justify-between gap-4 mt-6">
            <div className="flex items-center flex-wrap gap-3">
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
                    type="multi"
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

                <div className="w-[240px]">
                  <FilterDropdown
                    type="multi"
                    label="All"
                    value={filters.all}
                    options={allOptions}
                    onChange={(v) => handleFilterChange("all", v)}
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

            {/* SORT FILTER */}
            <div className="flex flex-row  items-center gap-3 w-full md:w-auto">
              <span className="font-urbanist font-semibold text-sm xl:text-sm 2xl:text-base md:text-base text-[#0B0B0B]">
                Sort By:
              </span>
              <div className="w-[180px]">
                <FilterDropdown
                  type="single"
                  value={filters.sortBy}
                  label={filters.sortBy}
                  options={sortByOptions}
                  onChange={(v) => handleFilterChange("sortBy", v)}
                />
              </div>
            </div>
          </div>

          {/* CHIPS */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {(filters.size.length > 0 ||
              filters.price.min !== 0 ||
              filters.price.max !== 100 ||
              filters.grape.length > 0 ||
              filters.availability.length > 0 ||
              filters.all.length > 0) && (
              <button
                onClick={clearAll}
                className="text-[#0B0B0B] cursor-pointer hover:text-[#EED291] transition duration-600 underline font-urbanist text-sm"
              >
                Clear All
              </button>
            )}

            {filters.size.map((s) => (
              <Chip key={s} label={s} onRemove={() => removeChip("size", s)} />
            ))}

            {(filters.price.min !== 0 || filters.price.max !== 100) && (
              <Chip
                label={`$${filters.price.min} - $${filters.price.max}`}
                onRemove={() => removeChip("price", "")}
              />
            )}

            {filters.grape.map((g) => (
              <Chip key={g} label={g} onRemove={() => removeChip("grape", g)} />
            ))}

            {filters.availability.map((a) => (
              <Chip
                key={a}
                label={a}
                onRemove={() => removeChip("availability", a)}
              />
            ))}

            {filters.all.map((c) => (
              <Chip key={c} label={c} onRemove={() => removeChip("all", c)} />
            ))}
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <div className="w-[95%] xl:w-[80%] mx-auto mt-6 text-center text-red-600 font-urbanist font-semibold text-lg">
            {errorMessage}
          </div>
        )}

        {/* OVERLAY */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[900] xl:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* SLIDING MOBILE DRAWER */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-[999] transform transition-transform duration-300 xl:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="font-urbanist font-semibold text-lg">Filters</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="overflow-y-scroll h-full p-4">
            {/* SIZE */}
            <Accordion title="Size">
              {sizeOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-3 py-1">
                  <input
                    type="checkbox"
                    checked={filters.size.includes(opt)}
                    onChange={() => {
                      const updated = filters.size.includes(opt)
                        ? filters.size.filter((x) => x !== opt)
                        : [...filters.size, opt];

                      handleFilterChange("size", updated);
                      setSidebarOpen(false); // CLOSE DRAWER HERE
                    }}
                    className="accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>

    
            {/* <Accordion title="Price">
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
                    onMouseUp={() => setSidebarOpen(false)} 
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
                    onMouseUp={() => setSidebarOpen(false)} 
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
            </Accordion> */}


            <Accordion title="Price">
  <div className="flex flex-col gap-4">

    {/* Dual Slider Container */}
    <div className="relative w-full h-7 mt-2">

      {/* inactive light gray track */}
      <div className="absolute inset-0 bg-[#D4D4D4] h-[6px] rounded-full" />

      {/* active black track */}
      <div
        className="absolute h-[6px] bg-black rounded-full"
        style={{
          left: `${filters.price.min}%`,
          width: `${filters.price.max - filters.price.min}%`,
        }}
      />

      {/* MIN input */}
      <input
        type="range"
        min={0}
        max={100}
        value={filters.price.min}
        onChange={(e) => {
          const v = +e.target.value;
          if (v < filters.price.max)
            handleFilterChange("price", { ...filters.price, min: v });
        }}
        onMouseUp={() => setSidebarOpen(false)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
        style={{ zIndex: 5 }}
      />

      {/* MAX input */}
      <input
        type="range"
        min={0}
        max={100}
        value={filters.price.max}
        onChange={(e) => {
          const v = +e.target.value;
          if (v > filters.price.min)
            handleFilterChange("price", { ...filters.price, max: v });
        }}
        onMouseUp={() => setSidebarOpen(false)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
        style={{ zIndex: 4 }}
      />

      {/* LEFT handle */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: `${filters.price.min}%`, top: "50%" }}
      >
        <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
      </div>

      {/* RIGHT handle */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: `${filters.price.max}%`, top: "50%" }}
      >
        <div className="w-4 h-4 bg-white border-[3px] border-black rounded-full" />
      </div>

    </div>

    {/* PRICE LABELS */}
    <div className="flex justify-between">
      <div className="border px-3 py-1 rounded">${filters.price.min}</div>
      <span>to</span>
      <div className="border px-3 py-1 rounded">${filters.price.max}</div>
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
                      const updated = filters.grape.includes(opt)
                        ? filters.grape.filter((x) => x !== opt)
                        : [...filters.grape, opt];

                      handleFilterChange("grape", updated);
                      setSidebarOpen(false); // CLOSE DRAWER HERE
                    }}
                    className="w-4 h-4 accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>

            {/* CATEGORIES */}
            <Accordion title="All Categories">
              {allOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    checked={filters.all.includes(opt)}
                    onChange={() => {
                      const updated = filters.all.includes(opt)
                        ? filters.all.filter((x) => x !== opt)
                        : [...filters.all, opt];

                      handleFilterChange("all", updated);
                      setSidebarOpen(false); // CLOSE DRAWER HERE
                    }}
                    className="accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>

            {/* AVAILABILITY */}
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
                      const updated = filters.availability.includes(opt)
                        ? filters.availability.filter((x) => x !== opt)
                        : [...filters.availability, opt];

                      handleFilterChange("availability", updated);
                      setSidebarOpen(false); // CLOSE DRAWER HERE
                    }}
                    className="w-4 h-4 accent-[#E5C97A]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </Accordion>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="w-[95%] xl:w-[80%] pb-[55px] xl:pb-[100px] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 mt-10">
          {!errorMessage &&
            currentProducts.map((product, index) => (
              <ProductsChild key={index} product={product} />
            ))}
        </div>

        {/* PAGINATION */}
        {!errorMessage && (
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
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border cursor-pointer font-urbanist border-[#E5C97A] rounded disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-4 py-2 rounded font-urbanist cursor-pointer text-sm ${
                      currentPage === p
                        ? "bg-[#EED291]"
                        : "bg-white border border-[#EED291]"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border cursor-pointer font-urbanist border-[#EED291] rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;

