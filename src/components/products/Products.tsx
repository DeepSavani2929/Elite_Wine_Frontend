

import React, { useState } from "react";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import verietyImg from "../../assets/images/variety.png";
import productmedal from "../../assets/images/productmedal.png";
import ProductsChild from "./productsChild";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const wineries = [
    "Bergdolt, Reif & Nett",
    "Lamm Jung",
    "KvD Strauch Sektmanufaktur",
    "Château Clos de Boüard",
    "Matthias Anton",
  ];


    const productsDetails = useSelector((state) => state.cart.productsDetails);


  const params = useParams()

  // const productsDetails = [
  //   {
  //     id:1,
  //     type: "Bergdolt, Reif & Nett",
  //     productImg: product1,
  //     productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$29.76",
  //     medal: productmedal,
  //     flavour: "Merlot",
  //   },
  //   {
  //      id:2,
  //     type: "Bergdolt, Reif & Nett",
  //     productImg: product2,
  //     productName: "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$29.38",
  //     flavour: "Pinot Noir",
  //   },
  //   {
  //      id:3,
  //     type: "Bergdolt, Reif & Nett",
  //     productImg: product3,
  //     productName:
  //       "Bergdolt, Reif & Nett Reverse Sauvignon Blanc (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$25.76",
  //     flavour: "Sauvignon Blanc",
  //   },
  //   {
  //      id:4,
  //     type: "Bergdolt, Reif & Nett",
  //     productImg: product4,
  //     productName:
  //       "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$29.38",
  //     flavour: "Gewurztraminer",
  //   },
  //   {
  //      id:5,
  //     type: "Bergdolt, Reif & Nett",
  //     productImg: product5,
  //     productName: "Bergdolt, Reif & Nett Reverse Rosé (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$25.76",
  //     flavour: "Rosé",
  //   },
  //   {
  //      id:6,
  //     type: "Bergdolt, Reif & Nett",
  //     productImg: product6,
  //     productName:
  //       "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$27.16",
  //     flavour: "Riesling",
  //   },
  //   {
  //      id:7,
  //     type: "Lamm Jung",
  //     productImg: secondtabproduct,
  //     productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$26.97",
  //     medal: productmedal,
  //     flavour: "Riesling",
  //   },
  //   {
  //      id:8,
  //     type: "KvD Strauch Sektmanufaktur",
  //     productImg: thirdtabproduct,
  //     productName:
  //       "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$28.91",
  //     medal: productmedal,
  //     flavour: "Rouge Pur",
  //   },
  //   {
  //      id:9,
  //     type: "Château Clos de Boüard",
  //     productImg: fourthtabproduct1,
  //     productName: "Château Clos de Boüard Sauvignon Blanc Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$25.61",
  //     flavour: "Sauvignon Blanc",
  //   },
  //   {
  //      id:10,
  //     type: "Château Clos de Boüard",
  //     productImg: fourthtabproduct2,
  //     productName: "Château Clos de Boüard Rosé Sparkling Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$28.19",
  //     flavour: "Pinot Noir",
  //   },
  //   {
  //      id:11,
  //     type: "Matthias Anton",
  //     productImg: fifthtabproduct1,
  //     productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$33.61",
  //     medal: productmedal,
  //     flavour: "Sauvignon Blanc",
  //   },
  //   {
  //      id:12,
  //     type: "Matthias Anton",
  //     productImg: fifthtabproduct2,
  //     productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$28.19",
  //     medal: productmedal,
  //     flavour: "Pinot Noir",
  //   },
  //   {
  //      id:13,
  //     type: "Matthias Anton",
  //     productImg: fifthtabproduct3,
  //     productName: "Matthias Anton Rosé (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$25.61",
  //     flavour: "Rosé",
  //   },
  //   {
  //      id:14,
  //     type: "Matthias Anton",
  //     productImg: fifthtabproduct4,
  //     productName: "Matthias Anton Pinot Grigio (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$25.61",
  //     flavour: "Pinot Grigio",
  //   },
  //   {
  //      id:15,
  //     type: "Matthias Anton",
  //     productImg: fifthtabproduct5,
  //     productName:
  //       "Matthias Anton Blanc de Blancs Sparkling (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$28.19",
  //     flavour: "Pinot Noir",
  //   },
  // ];

  const [activeTab, setActiveTab] = useState(wineries[0]);

  const filteredProducts = productsDetails.filter(
    (product) => product.type === activeTab
  );

  return (
    <>
      <div className="w-full bg-[#F8F8F8]">
        <div className="w-[95%] xl:w-[80%] mx-auto">
          <div className="py-[55px] xl:py-[100px] flex flex-col items-center justify-between gap-12">
            {/* Title + Winery Buttons */}
            <div className="flex flex-col items-center justify-between gap-8 text-center w-full">
              <p className="font-cormorant font-bold text-[28px] xl:text-[36px] uppercase leading-tight">
                Products
              </p>

              {/* Responsive Winery Tabs */}
              <div
                className="
                  flex items-center gap-4 md:gap-3 xl:gap-8 
                  overflow-x-auto xl:overflow-visible 
                  w-full scrollbar-thin scrollbar-thumb-[#EED291] scrollbar-track-[#D9D9D9]
                  lg:justify-between
                "
              >
                {wineries.map((name, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(name)}
                    className={`
                      flex-shrink-0 mb-5
                      font-urbanist cursor-pointer font-semibold text-xs xl:text-sm md:text-base 
                      border rounded-full px-6 md:px-8 py-3 
                      transition-colors duration-300 
                      ${
                        activeTab === name
                          ? "bg-[#EED291] border-[#EED291] text-[#0B0B0B]"
                          : "bg-[#FFFFFF] border-[#EED291] text-[#0B0B0B] hover:bg-[#EED291]/80"
                      }
                      lg:flex-1 lg:max-w-[18%]
                    `}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
              <div className="grid w-full gap-8 md:gap-8 xl:gap-10  grid-cols-2 md:grid-cols-3 transition-all duration-500">
                {filteredProducts.map((product, index) => (
                  <ProductsChild key={index} product={product} />
                ))}
              </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar */}
  <style jsx>{`
  .scrollbar-thin::-webkit-scrollbar {
    height: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #eed291; /* gold thumb */
    border-radius: 10px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: #f2f2f2; /* very light gray track */
    border-radius: 10px;
  }
`}</style>
    </>
  );
};

export default Products;