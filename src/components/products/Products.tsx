// import React, { useState } from "react";
// import product1 from "../../assets/images/product1.png";
// import product2 from "../../assets/images/product2.png";
// import product3 from "../../assets/images/product3.png";
// import product4 from "../../assets/images/product4.png";
// import product5 from "../../assets/images/product5.png";
// import product6 from "../../assets/images/product6.png";
// import verietyImg from "../../assets/images/variety.png";
// import productmedal from "../../assets/images/productmedal.png";
// import ProductsChild from "./productsChild";
// import secondtabproduct from "../../assets/images/secondtabproduct.png";
// import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
// import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
// import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
// import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
// import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
// import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
// import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
// import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Products = () => {
//   const wineries = [
//     "Bergdolt, Reif & Nett",
//     "Lamm Jung",
//     "KvD Strauch Sektmanufaktur",
//     "Château Clos de Boüard",
//     "Matthias Anton",
//   ];

//   const productsDetails = useSelector((state) => state.cart.productsDetails);

//   const params = useParams();

//   const [activeTab, setActiveTab] = useState(wineries[0]);

//   const filteredProducts = productsDetails.filter(
//     (product) => product.type === activeTab
//   );

//   return (
//     <>
//       <div className="w-full bg-[#F8F8F8]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
//             <div className="flex flex-col items-center justify-between gap-8 text-center w-full">
//               <p className="font-cormorant font-bold text-[28px] xl:text-[36px] uppercase leading-tight">
//                 Products
//               </p>

//               <div
//                 className="
//                   flex items-center gap-4 md:gap-3 xl:gap-8 
//                   overflow-x-auto xl:overflow-visible 
//                   w-full scrollbar-thin scrollbar-thumb-[#EED291] scrollbar-track-[#D9D9D9]
//                   lg:justify-between
//                 "
//               >
//                 {wineries.map((name, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveTab(name)}
//                     className={`
//                       flex-shrink-0 mb-5
//                       font-urbanist cursor-pointer font-semibold text-xs xl:text-sm md:text-base 
//                       border rounded-full px-6 md:px-8 py-3 
//                       transition-colors duration-300 
//                       ${
//                         activeTab === name
//                           ? "bg-[#EED291] border-[#EED291] text-[#0B0B0B]"
//                           : "bg-[#FFFFFF] border-[#EED291] text-[#0B0B0B] hover:bg-[#EED291]/80"
//                       }
//                       lg:flex-1 lg:max-w-[18%]
//                     `}
//                   >
//                     {name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid w-full gap-8 md:gap-8 xl:gap-10  grid-cols-2 md:grid-cols-3 transition-all duration-500">
//               {filteredProducts.map((product, index) => (
//                 <ProductsChild key={index} product={product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-thin::-webkit-scrollbar {
//           height: 6px;
//         }
//         .scrollbar-thin::-webkit-scrollbar-thumb {
//           background-color: #eed291; /* gold thumb */
//           border-radius: 10px;
//         }
//         .scrollbar-thin::-webkit-scrollbar-track {
//           background: #f2f2f2; /* very light gray track */
//           border-radius: 10px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Products;




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsChild from "./productsChild";

const wineries = [
  { name: "Bergdolt, Reif & Nett", slug: "bergdolt-reif-nett" },
  { name: "Lamm Jung", slug: "lamm-jung" },
  { name: "KvD Strauch Sektmanufaktur", slug: "kvd-strauch-sektmanufaktur" },
  { name: "Château Clos de Boüard", slug: "château-clos-de-boüard" },
  { name: "Matthias Anton", slug: "matthias-anton" },
];

const Products = () => {
  const params = useParams();

 
  const [activeTab, setActiveTab] = useState(wineries[0].slug);


  const [productsByType, setProductsByType] = useState([]);


  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/getProductsBasedOnType?type=${activeTab}`
      );

      if (res.data.success) {
        setProductsByType(res.data.data); 
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [activeTab]);

  return (
    <>
      <div className="w-full bg-[#F8F8F8]">
        <div className="w-[95%] xl:w-[80%] mx-auto">
          <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
            {/* ------------------ TABS SECTION ------------------ */}
            <div className="flex flex-col items-center justify-between gap-8 text-center w-full">
              <p className="font-cormorant font-bold text-[28px] xl:text-[36px] uppercase leading-tight">
                Products
              </p>

              <div
                className="
                  flex items-center gap-4 md:gap-3 xl:gap-8 
                  overflow-x-auto xl:overflow-visible 
                  w-full scrollbar-thin scrollbar-thumb-[#EED291] scrollbar-track-[#D9D9D9]
                  lg:justify-between
                "
              >
                {wineries.map((w, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(w.slug)}
                    className={`
                      flex-shrink-0 mb-5
                      font-urbanist cursor-pointer font-semibold text-xs xl:text-sm md:text-base 
                      border rounded-full px-6 md:px-8 py-3 
                      transition-colors duration-300 
                      ${
                        activeTab === w.slug
                          ? "bg-[#EED291] border-[#EED291] text-[#0B0B0B]"
                          : "bg-[#FFFFFF] border-[#EED291] text-[#0B0B0B] hover:bg-[#EED291]/80"
                      }
                      lg:flex-1 lg:max-w-[18%]
                    `}
                  >
                    {w.name}
                  </button>
                ))}
              </div>
            </div>

 
            <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3 transition-all duration-500">
              {productsByType.length > 0 ? (
                productsByType.map((product, index) => (
                  <ProductsChild key={index} product={product} />
                ))
              ) : (
                <p className="text-center col-span-full font-medium">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #eed291;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f2f2f2;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Products;
