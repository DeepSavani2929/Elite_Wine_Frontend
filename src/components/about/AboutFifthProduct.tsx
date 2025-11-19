import React from 'react'
import about1 from "../../assets/images/aboutProduct5/aboutp1.png";
import about2 from "../../assets/images/aboutProduct5/aboutp2.png";
import about3 from "../../assets/images/aboutProduct5/aboutp3.png";
import about4 from "../../assets/images/aboutProduct5/aboutp4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const AboutFifthProduct = () => {

                  const aboutGallery = [
                      {
                        gallery: about2
                      },
                
                     {
                       gallery: about3
                     },
                
                          {
                       gallery: about4
                     },
                  ]
  return (
    <>
          <div className="bg-[url('/images/aboutheader6.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-43 md:mt-40 md:mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins ms-1 me-1"> &gt;</span> About Us KvD
            Strauch Sektmanufaktur
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[32px] lg:text-[34px] xl:text-[48px] uppercase text-white">
            About Weingut Matthias Anton
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
                    <div className="flex flex-col gap-4">
                      <p className="mb-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                        Weingut Matthias Anton is a fourth-generation family estate in Herxheim bei Landau in the Southern Palatinate—one of Germany’s sunniest wine regions—farming roughly 20 hectares with a close-to-nature, sustainable approach that blends tradition and innovation.
                      </p>

                      <p className="mb-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">Alongside its classic Palatinate wines, the estate crafts a growing range of dealcoholized ($lt;0.5% ABV) wines under the Anton free label, including Sauvignon Blanc, Pinot Grigio, Rosé, and a Blanc de Blancs sparkling. Using aroma-recovery technology and gentle, low-temperature dealcoholization, the team captures and reintegrates varietal aromas to retain authentic character, texture, and freshness—delivering a true wine experience without the alcohol.</p>
                    </div>
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
                          <div key={index} className="overflow-hidden cursor-pointer">
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
                            768: { slidesPerView: 2.5  }, 
                          }}
                          className="!pb-10 gap-2 flex "
                        >
                          {aboutGallery.map((item, index) => (
                            <SwiperSlide key={index} className="flex  items-stretch overflow-hidden cursor-pointer">
                              <img src={item.gallery} alt="" className='transition-all duration-500 ease-in-out hover:scale-105'/>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default AboutFifthProduct