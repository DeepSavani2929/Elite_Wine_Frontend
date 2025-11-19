import React from "react";
import about1 from "../../assets/images/aboutProduct4/aboutp1.png";
import about2 from "../../assets/images/aboutProduct4/aboutp2.png";
import about3 from "../../assets/images/aboutProduct4/aboutp3.png";
import about4 from "../../assets/images/aboutProduct4/aboutp4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const AboutFourthProduct = () => {

    
              const aboutGallery = [
                  {
                    gallery: about3
                  },
            
                 {
                   gallery: about4
                 },
            
              ]
  return (
    <>
      <div className="bg-[url('/images/aboutheader5.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-42 md:mt-40 md:mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins ms-1 me-1"> &gt;</span> About Château Clos
            de Boüard
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            About Château Clos de Boüard
          </p>
        </div>
      </div>

      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px]">
          <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-10">
            KvD Strauch Sektmanufaktur
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-20">
            {/* LEFT IMAGE */}
            <div className="w-full xl:w-1/2 hover:scale(1) flex justify-center  bg-[#F8F8F8] py-6 cursor-pointer overflow-hidden">
              <img
                src={about1}
                alt="About section"
                className="w-[80px] md:w-[180px] xl:w-[140px]  object-contain transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full xl:w-1/2 ">
              <div className="flex flex-col">
                <p className="mb-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                  Founded and led by Coralie de Boüard (daughter of Hubert de
                  Boüard of Château Angélus), Château Clos de Boüard sits in the
                  Montagne–Saint-Émilion appellation on clay-limestone slopes
                  just northeast of Saint-Émilion. After years managing Château
                  La Fleur de Boüard, Coralie and her husband, Loïc Maillet,
                  acquired and launched Clos de Boüard—its debut vintage was
                  2016—to pursue an ultra-precise, terroir-first style that
                  balances supple Merlot fruit with structure and freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px]">
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-20">
            <div className="w-full xl:w-1/2 order-2 xl:order-1">
              <div>
                <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                  Non-Alcoholic (Dealcoholized) Project — Prince Oscar
                </h2>

                <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                  Strauch Sektmanufaktur is a family-run sparkling wine estate
                  in Rheinhessen. The business, led today by Isabel
                  Strauch-Weißbach and her husband Tim Weißbach, was formed in
                  2011 when they combined the long-standing Strauch family
                  winery with the Dalbergerhof estate. Although young as a joint
                  venture, the house quickly gained recognition and in 2014 was
                  named “Discovery of the Year” by Gault & Millau.
                </p>

                <p>
                  Style snapshot: ripe red-fruit core, gentle tannic grip, and a
                  clean, food-friendly finish; versatile with roast poultry,
                  mushroom dishes, charcuterie boards, and hard cheeses.
                  (Multiple retailers now list Prince Oscar as a premium
                  non-alcoholic Bordeaux red.)
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/2 flex justify-center  order-1 xl:order-2 hover:scale(1) bg-[#F8F8F8] py-6  cursor-pointer overflow-hidden">
              <img
                src={about2}
                alt="About section"
                className="w-[80px] md:w-[180px] xl:w-[140px]  object-contain transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

                   <div className="w-[95%] xl:w-[80%] mx-auto">
              <div className="pb-3 lg:pb-[55px] xl:pb-[100px] ">
                <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-6 xl:mb-8">
                Vineyards
                </p>
              
      
      
            <div className="hidden w-full lg:flex justify-center gap-3  xl:gap-8">
                  {aboutGallery.map((item, index) => (
                    <div key={index} className="cursor-pointer overflow-hidden">
                        <img src={item.gallery} alt="" className="lg:w-[250px] xl:w-full object-cover transition-all duration-500 ease-in-out hover:scale-105" />
                    </div>
                  ))}
                </div>
             
      
      
      
                <div className="block lg:hidden">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                     loop={true} 
                    spaceBetween={30}
                    breakpoints={{
                      0: { slidesPerView: 1.5 },
                      768: { slidesPerView: 2  }, 
                    }}
                    className="!pb-10 gap-2 flex "
                  >
                    {aboutGallery.map((item, index) => (
                      <SwiperSlide key={index} className="flex  items-stretch cursor-pointer overflow-hidden">
                        <img src={item.gallery} alt="" className="transition-all duration-500 ease-in-out hover:scale-105"/>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
    </>
  );
};

export default AboutFourthProduct;
