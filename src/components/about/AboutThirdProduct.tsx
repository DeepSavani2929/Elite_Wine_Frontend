import React from "react";
import about1 from "../../assets/images/aboutProduct3/aboutp1.png";
import about2 from "../../assets/images/aboutProduct3/aboutp2.png";
import about3 from "../../assets/images/aboutProduct3/aboutp3.png";
import about4 from "../../assets/images/aboutProduct3/aboutp4.png";
import about5 from "../../assets/images/aboutProduct3/aboutp5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const AboutThirdProduct = () => {

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
      <div className="bg-[url('/images/aboutheader4.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-40 md:mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins ms-1 me-1"> &gt;</span> About Us KvD
            Strauch Sektmanufaktur
          </p>
          <p className="font-cormorant font-bold text-[28px] lg:text-[34px]  xl:text-[48px] uppercase text-white">
            about us KvD Strauch Sektmanufaktur
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
            <div className="w-full xl:w-1/2  flex justify-center  bg-[#F8F8F8] py-6 cursor-pointer overflow-hidden">
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
                  KvD Strauch Sektmanufaktur is a family-run sparkling wine
                  house based in Osthofen (Wonnegau), Rheinhessen. The Strauch
                  family has been crafting sekt in Osthofen for decades (early
                  house bottlings date back to 1979 at the Dalbergerhof), and in
                  2011 Tim & Isabel Strauch merged their parents’ operations to
                  found today’s Sektmanufaktur. Their focus is artisanal,
                  traditional-method sparkling wines rooted in the
                  limestone-rich hills of southern Rheinhessen
                </p>

                <div>
                  <p className="mb-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    The estate emphasizes certified organic work and a precise,
                    low-intervention cellar style. Classic Champagne varieties
                    sit alongside regional grapes like Riesling and
                    Weißburgunder, with long lees aging and a dry, gastronomic
                    profile. Recent German wine guides (Falstaff, Vinum, Gault &
                    Millau, Eichelmann) have recognized the house’s quality
                    trajectory.
                  </p>

                  <p className="text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Alongside its traditional sekt, Strauch makes a
                    dealcoholized line designed to keep varietal character and
                    food-friendly structure. The flagship Blanc Pur alkoholfrei
                    is Riesling-based, produced from organically grown fruit
                    that’s hand-harvested, whole-cluster pressed, vinified in
                    stainless steel, gently dealcoholized, and then given fine
                    bubbles; it has earned 91 points from Falstaff. The range
                    also includes Rouge Pur alkoholfrei (an organic, vegan red
                    cuvée featuring Pinot varieties).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px]">
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-20">
            <div className="w-full xl:w-1/2 order-2 xl:order-1">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    History
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Strauch Sektmanufaktur is a family-run sparkling wine estate
                    in Rheinhessen. The business, led today by Isabel
                    Strauch-Weißbach and her husband Tim Weißbach, was formed in
                    2011 when they combined the long-standing Strauch family
                    winery with the Dalbergerhof estate. Although young as a
                    joint venture, the house quickly gained recognition and in
                    2014 was named “Discovery of the Year” by Gault & Millau.
                  </p>
                </div>

                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    Terroir
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    The vineyards of Strauch Sektmanufaktur lie in some of
                    Rheinhessen’s most characterful sites, including
                    Michelsberg, Osthofener Goldberg and Osthofener Liebenberg.
                    About twenty-five hectares are under vine, all certified
                    organic. Old parcels of Riesling and Gewürztraminer grow on
                    terraced slopes framed by historic stone walls, while
                    Chardonnay, Pinot Noir, Pinot Blanc, Silvaner and other
                    varieties complete the broad palette. Hand-harvesting,
                    careful selection and the use of only the finest first
                    pressings are central to their sparkling wine production.
                    Depending on the cuvée, the wines rest on the lees for
                    between ten and forty months, developing depth and finesse.
                  </p>
                </div>

                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    Philosophy
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Strauch’s philosophy is built on organic and ecological
                    principles. The estate works in harmony with nature,
                    striving for biodiversity in the vineyards and energy
                    self-sufficiency in the cellar. Every wine is intended to be
                    an authentic expression of both the region and the family’s
                    vision: distinctive, elegant, and true to its origin.
                    Quality is always given priority over speed, with patient
                    maturation and precise winemaking ensuring complexity and
                    balance. The result is a collection of sparkling wines that
                    combine regional character with cosmopolitan sophistication.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/2  order-1 xl:order-2  flex justify-center  bg-[#F8F8F8] py-6 cursor-pointer overflow-hidden">
              <img
                src={about2}
                alt="About section"
                className="w-[80px] md:w-[100px] xl:w-[120px] object-contain transition-all duration-500 ease-in-out hover:scale-105"
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
        


      <div className="hidden w-full lg:flex justify-center gap-3  xl:gap-8 overflow-hidden cursor-pointer">
            {aboutGallery.map((item, index) => (
              <div key={index} className="">
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

export default AboutThirdProduct;
