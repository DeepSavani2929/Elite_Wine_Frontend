import React from "react";
import collection1 from "../../assets/images/collections/collection1.png";
import collection2 from "../../assets/images/collections/collection2.png";
import collection3 from "../../assets/images/collections/collection3.png";
import { useNavigate } from "react-router";

const Collections = () => {
  const navigate = useNavigate();

  const productDetails = [
    {
      productImage: collection1,
      type: "Matthias Anton",
      path: "matthias-anton",
    },

    {
      productImage: collection2,
      type: "Bergdolt, Reif & Nett",
      path: "bergdolt-reif-nett",
    },

    {
      productImage: collection3,
      type: "KvD Strauch Sektmanufaktur",
      path: "kvd",
    },
  ];
  return (
    <>
      <div className="bg-[url('/images/collections/collectionsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="mx-1">&gt;</span> Collections
          </p>

          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            Collections
          </p>
        </div>
      </div>

      <div className="w-[95%] mx-auto py-[50px] xl:py-[80px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 xl:gap-16">
          {productDetails.map((product, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col cursor-pointer items-center"
              onClick={() =>
                navigate(
                  `${product.path}/${product.type
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`
                )
              }
            >
              <div className="w-full h-full bg-[#F8F8F8] py-10">
                <img
                  src={product.productImage}
                  alt={`Collection ${index + 1}`}
                  className="w-full h-[447px] object-contain"
                />
              </div>

              <p className="w-full text-center uppercase font-urbanist bg-[#EED291] border border-[#EED291] py-3 cursor-pointer hover:bg-transparent transition-all duration-600 font-semibold text-md text-[#641026]">
                {product.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collections;
