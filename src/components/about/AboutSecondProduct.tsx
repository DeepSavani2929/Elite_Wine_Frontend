import React from "react";
import about1 from "../../assets/images/aboutProduct2/aboutp1.png";
import about2 from "../../assets/images/aboutProduct2/aboutp2.png";
import about3 from "../../assets/images/aboutProduct2/aboutp3.png";
import about4 from "../../assets/images/aboutProduct2/aboutp4.png";
import about5 from "../../assets/images/aboutProduct2/aboutp5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const AboutSecondProduct = () => {

      const aboutGallery = [
          {
            gallery: about3
          },
    
         {
           gallery: about4
         },
    
         {
           gallery: about5
         }
      ]

  return (
    <>
      <div className="bg-[url('images/aboutheader3.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-40 md:mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins"> &gt;</span>About Us Lamm-Jung
          </p>
          <p className="font-cormorant font-bold text-[32px] md:text-[34px] lg:text-[48px] uppercase text-white">
            about us Lamm-Jung
          </p>
        </div>
      </div>


        <div className="w-[95%] xl:w-[80%] mx-auto ">
          <div className="py-[55px] xl:py-[100px]">
            <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-10">
              About Weingut Lamm-Jung (Rheingau, Germany)
            </p>
            {/* DESKTOP VERSION (≥1024px) */}
            <div className=" flex flex-col xl:flex-row justify-between items-center gap-6  xl:gap-20">
              {/* RIGHT IMAGES */}
              <div className="w-full xl:w-1/2  flex items-center justify-center gap-4 md:gap-10 bg-[#F8F8F8] py-8">
                <div className="flex flex-col gap-2 md:gap-5 items-center">
                  <img
                    src={about1}
                    alt="Gold medal"
                    className="w-[100px] md:w-[210px] object-cover"
                  />

                  <p className="text-[#000000] font-urbanist font-semibold text-xs md:text-md">
                    Merlot Vineyard of the year
                  </p>
                </div>

                <img
                  src={about2}
                  alt="Bottle"
                  className=" w-[100px] md:w-[176px]  object-cover"
                />
              </div>

              <div className="w-full xl:w-1/2 ">
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                      History
                    </h2>

                    <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                      The Lamm-Jung name dates to 1947, formed from the marriage
                      of the Lamm and Jung families in Erbach (Eltville). The
                      estate was revitalized in 2016 under Günther Weisel with
                      cellar master Paul Will and now farms ~15 ha across
                      central and western Rheingau sites.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                      Terroir
                    </h2>

                    <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                      Parcels span from Eltville/Erbach westward through
                      Rüdesheim and the steep slopes of Lorch, giving a
                      cross-section of Rheingau exposures and mesoclimates
                      (river-influenced, from gentler central hillsides to
                      slatey/steep western banks). The breadth of sites is the
                      backbone for their crisp, precise house style.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                      Philosophy
                    </h2>

                    <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                      Hand-Werk-Wein”: careful, sustainable, resource-conserving
                      work in the vineyard and cellar; wines that are clear,
                      precise, and to the point.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>

             <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF1D2]">
       <div className="py-8 font-urbanist flex text-center w-full xl:w-[80%] mx-auto px-3 xl:x-30 font-medium  text-sm lg:text-md xl:text-base leading-[25px] text-[#565656] ">
            <p>
              Riesling Dealcoholized (Vegan). Made from Rheingau Riesling and
              gently dealcoholized to &lt;0.5% ABV; labeled vegan. Flavor is
              classically Riesling—yellow-fruit (peach/apricot) notes, lively
              freshness, fine creaminess and a charming touch of sweetness;
              typical analysis: RS 33.0 g/L, acidity 6.8 g/L. Suggested with
              seafood/fish or light poultry.{" "}
            </p>
          </div>
     </div>


             <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="pb-3 lg:pb-[55px] xl:pb-[100px] py-[55px] xl:py-[100px]">
          <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-6 xl:mb-8">
          Vineyards
          </p>
        


      <div className="hidden w-full lg:flex justify-center gap-3  xl:gap-8">
            {aboutGallery.map((item, index) => (
              <div key={index} className="">
                  <img src={item.gallery} alt="" className="lg:w-[250px] xl:w-full object-cover" />
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
                768: { slidesPerView: 2.5  }, 
              }}
              className="!pb-10 gap-2 flex "
            >
              {aboutGallery.map((item, index) => (
                <SwiperSlide key={index} className="flex  items-stretch">
                  <img src={item.gallery} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default AboutSecondProduct;
