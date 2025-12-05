import React, { useState, useEffect } from "react";
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

import axios from "axios";

const PopularProducts = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/getPopularProducts`
        );

        if (res.data.success) {
          setPopularProducts(res.data.data);
        }
      } catch (error) {
        console.error("Popular products fetch error:", error);
      }
    };

    fetchPopular();
  }, []);

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

  return (
    <section className="w-full bg-[#F8F8F8] py-10 md:py-20">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="font-cormorant font-bold text-[28px] xl:text-[36px] text-[#0B0B0B] text-center uppercase leading-tight">
            Popular products
          </p>

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
              {popularProducts?.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductsChild key={index} product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

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
                    isEnd
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-200"
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
