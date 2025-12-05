import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCartAPI, setDrawerOpen } from "../../redux/cart/cartSlice";
import verietyImg from "../../assets/images/variety.png";
import productmedal from "../../assets/images/productmedal.png";

const ProductsChild = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isBlogDetailsPage = location.pathname.startsWith("/blog/blogDetails");

  return (
    <>
      <div
        className={`group flex h-full flex-col gap-6 cursor-pointer ${
          isBlogDetailsPage ? "rounded-none" : "rounded-[32px]"
        }  transition-all duration-300`}
        onClick={() => navigate(`/productDetails/${product._id}`)}
      >
        <div className="relative flex items-center justify-center  overflow-hidden">
          <div
            className={`w-full py-10 ${
              isBlogDetailsPage ? "" : "bg-[#FFFFFF]"
            }`}
          >
            <img
              src={`${import.meta.env.VITE_IMG_URL}/${product.productImg}`}
              alt={product.productName}
              className="mx-auto h-[200px] xl:h-[438px] w-auto object-cover"
            />
          </div>

          <button
            className="
              absolute bottom-1 left-1/2 w-full -translate-x-1/2 translate-y-6
              rounded-full bg-[#EED291] py-4 text-center font-urbanist text-sm
              font-semibold text-[#641026] 
              
              opacity-0 pointer-events-none transition-all duration-500 ease-out
              
              group-hover:flex group-hover:items-center group-hover:justify-center
              group-hover:opacity-100 group-hover:pointer-events-auto
              group-hover:translate-y-0 cursor-pointer
              hover:bg-[#641026] hover:text-[#EED291] transition-all duration-800
            "
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setDrawerOpen(true));
              dispatch(addToCartAPI({ productId: product._id }));
            }}
          >
            ADD TO CART
          </button>
        </div>

        <div className="flex flex-1 flex-col text-left">
          <p className="font-urbanist text-md font-semibold text-[#641026] hover:text-black leading-snug min-h-[20px] flex items-center">
            {product.productName}
          </p>

          <div className="mt-auto flex flex-col gap-4">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-0.1 gap-x-1 md:gap-4 text-sm font-medium text-[#5E5E5E]">
              <div className="flex items-center gap-2 min-h-[32px] flex-row-reverse md:flex-row">
                <span className="font-urbanist text-md xl:text-base font-semibold text-[#565656] whitespace-nowrap">
                  {product.variety}
                </span>
                <img
                  src={verietyImg}
                  alt="icon"
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div className="flex items-center gap-0.5 text-[#0B0B0B] min-h-[32px]">
                {product.medal && (
                  <img
                    src={productmedal}
                    alt="Medal"
                    className="h-8 w-8 object-contain"
                  />
                )}
                <span className="font-urbanist text-sm lg:text-base font-semibold text-[#565656]">
                  {product.flavour}
                </span>
              </div>
            </div>

            <p className="font-urbanist text-md font-semibold text-[#641026]">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsChild;
