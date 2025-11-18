// import React from "react";
// import about1 from "../../assets/images/aboutProduct1/aboutp1.png";
// import about2 from "../../assets/images/aboutProduct1/aboutp2.png";
// import about3 from "../../assets/images/aboutProduct1/aboutp3.png";
// import about4 from "../../assets/images/aboutProduct1/aboutp4.png";
// import about5 from "../../assets/images/aboutProduct1/aboutp5.png";
// import about6 from "../../assets/images/aboutProduct1/aboutp6.png";
// import about7 from "../../assets/images/aboutProduct1/aboutp7.png";

// const AboutFirstProduct = () => {
//   return (
//     <>
//       <div className="bg-[url('images/aboutheader2.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-40 md:mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins"> &gt;</span>About Us Bergdolt,
//             Reif & Net
//           </p>
//           <p className="font-cormorant font-bold text-[32px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             about us Bergdolt, Reif & Nett
//           </p>
//         </div>
//       </div>

//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="py-[55px] xl:py-[100px]">
//           <p className="font-bold font-cormorant px-8    md:px-16 text-[24px] md:text-[28px]   xl:text-[36px] uppercase text-center mb-10">
//             Weingut Bergdolt-Reif & Nett (Palatinate, Germany)
//           </p>
//           <div className=" flex flex-col xl:flex-row items-center gap-6 xl:gap-20">
//             {/* LEFT IMAGE */}
//             <div className="w-full xl:w-1/2 hover:scale(1) cursor-pointer">
//               <img
//                 src={about1}
//                 alt="About section"
//                 className="w-full object-cover"
//               />
//             </div>

//             {/* RIGHT TEXT */}
//             <div className="w-full xl:w-1/2 ">
//               <div className="flex flex-col gap-8">
//                 <div>
//                   <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
//                     History
//                   </h2>

//                   <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
//                     Based in Duttweiler between Speyer and Neustadt an der
//                     Weinstraße, the estate traces its roots to 1838, when the
//                     sandstone cellars were built. After a family split around
//                     1900 and a later adoption/marriage that united the current
//                     name, the winery is now run by the fifth generation of the
//                     Nett family. In 2011 they revived horse-powered cultivation
//                     in select top parcels to aerate soils and sharpen site
//                     expression.
//                   </p>
//                 </div>

//                 <div>
//                   <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
//                     Terroir
//                   </h2>

//                   <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
//                     Vines grow at 120–140 m in an almost Mediterranean pocket of
//                     the Pfalz where kiwis, figs and almonds also ripen. Deep
//                     loess- and loam-rich soils laced with fine limestone veins
//                     are the signature here—excellent for Pinot Blanc/Gris and
//                     aromatic grapes; warmer sites also ripen Merlot, Shiraz,
//                     Cabernet Sauvignon and Lagrein. Regionally, the Palatinate
//                     area is one of Germany’s warmest, sunniest winegrowing
//                     areas, which underpins the ripe, generous fruit profile.
//                   </p>
//                 </div>

//                 <div>
//                   <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
//                     Philosophy
//                   </h2>

//                   <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
//                     Dem Wein Zeit und Raum geben”—give the wine time and space.
//                     Work rhythms follow the vineyard; the cellar approach is
//                     gentle pressing, restrained fermentations and extended
//                     fine-lees aging to preserve clarity and texture.
//                     Variety–parcel matching is central to style.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF1D2]">
//         <div className="pb-[55px] xl:pb-[100px]">
//           <p className="font-bold font-cormorant px-8    md:px-16 text-[24px] md:text-[28px]   xl:text-[36px] uppercase text-center mb-6 xl:mb-10">
//             Awards & recognition (highlights)
//           </p>
//           <div className="flex flex-col md:flex-row gap-y-6 gap-x-14 justify-center ">
//             <div className="flex flex-col gap-0 md:gap-6 items-center">
//               <div>
//                 <img
//                   src={about2}
//                   alt="About section"
//                   className=" w-[240px] lg:w-[256px] xl:w-[334px] object-cover mb-5 md:mb-0"
//                 />
//               </div>
//               <p className="w-[330px] md:w-[320px] lg:w-[416px] text-center font-urbanist font-medium text-base text-[#565656]">
//                 <span className="font-semibold text-[#0B0B0B]">Falstaff(Alcohol-Free Trophy):</span> Reverse Riesling 90
//                 pts; Breakaway Pinot Blanc 90 pts; Breakaway Gewürztraminer 91
//                 pts; Reverse Sauvignon Blanc 90.5 pts.{" "}
//               </p>
//             </div>

//             <div>
//               <div className="flex flex-col gap-0 md:gap-6 items-center">
//                 <div>
//                   <img
//                     src={about3}
//                     alt="About section"
//                     className="w-[335px] lg:w-[360px] xl:w-[473px] object-cover mb-5 md:mb-0"
//                   />
//                 </div>
//                 <p className="w-[350px] md:w-[320px] lg:w-[437px] text-center font-urbanist font-medium text-base text-[#565656]">
//                   <span  className="font-semibold text-[#0B0B0B]">Gold Medal For Best Merlot 2025: </span> Best of Show
//                   Pinot Blanc for Breakaway Pinot Blanc (Bergdolt-Reif & Nett);
//                   Gold for Reverse Pinot Bianco.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-[95%] xl:w-[80%] mx-auto">
//         <div className="pb-[55px] xl:pb-[100px]">

//         </div>

//       </div>
//     </>
//   );
// };

// export default AboutFirstProduct;

import React from "react";
import about1 from "../../assets/images/aboutProduct1/aboutp1.png";
import about2 from "../../assets/images/aboutProduct1/aboutp2.png";
import about3 from "../../assets/images/aboutProduct1/aboutp3.png";
import productImg from "../../assets/images/aboutProduct1/about4.png";
import about4 from "../../assets/images/aboutProduct1/aboutp4.png";
import about5 from "../../assets/images/aboutProduct1/aboutp5.png";
import about6 from "../../assets/images/aboutProduct1/aboutp6.png";
import about7 from "../../assets/images/aboutProduct1/aboutp7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const AboutFirstProduct = () => {

  const aboutGallery = [
      {
        gallery: about5
      },

     {
       gallery: about6
     },

     {
       gallery: about7
     }
  ]
  return (
    <>
      {/* TOP BANNER */}
      <div className="bg-[url('/images/aboutheader2.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-40 md:mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins"> &gt;</span>About Us Bergdolt,
            Reif & Net
          </p>
          <p className="font-cormorant font-bold text-[32px] md:text-[34px] lg:text-[48px] uppercase text-white">
            about us Bergdolt, Reif & Nett
          </p>
        </div>
      </div>

      {/* FIRST TEXT + IMAGE SECTION */}
      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px]">
          <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-10">
            Weingut Bergdolt-Reif & Nett (Palatinate, Germany)
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-20">
            {/* LEFT IMAGE */}
            <div className="w-full xl:w-1/2  flex justify-center  bg-[#F8F8F8] pb-5 cursor-pointer overflow-hidden">
              <img
                src={about1}
                alt="About section"
                className="w-full h-[521px] object-contain transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full xl:w-1/2 ">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    History
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Based in Duttweiler between Speyer and Neustadt an der
                    Weinstraße, the estate traces its roots to 1838, when the
                    sandstone cellars were built. After a family split around
                    1900 and a later adoption/marriage that united the current
                    name, the winery is now run by the fifth generation of the
                    Nett family. In 2011 they revived horse-powered cultivation
                    in select top parcels to aerate soils and sharpen site
                    expression.
                  </p>
                </div>

                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    Terroir
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Vines grow at 120–140 m in an almost Mediterranean pocket of
                    the Pfalz where kiwis, figs and almonds also ripen. Deep
                    loess- and loam-rich soils laced with fine limestone veins
                    are the signature here—excellent for Pinot Blanc/Gris and
                    aromatic grapes; warmer sites also ripen Merlot, Shiraz,
                    Cabernet Sauvignon and Lagrein. Regionally, the Palatinate
                    area is one of Germany’s warmest, sunniest winegrowing
                    areas, which underpins the ripe, generous fruit profile.
                  </p>
                </div>

                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    Philosophy
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Dem Wein Zeit und Raum geben”—give the wine time and space.
                    Work rhythms follow the vineyard; the cellar approach is
                    gentle pressing, restrained fermentations and extended
                    fine-lees aging to preserve clarity and texture.
                    Variety–parcel matching is central to style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AWARDS SECTION */}
      <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF1D2]">
        <div className="pb-[55px] xl:pb-[100px]">
          <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-6 xl:mb-10">
            Awards & recognition (highlights)
          </p>
          <div className="flex flex-col md:flex-row gap-y-6 gap-x-14 justify-center ">
            <div className="flex flex-col gap-0 md:gap-6 items-center cursor-pointer overflow-hidden">
              <div>
                <img
                  src={about2}
                  alt="About section"
                  className=" w-[240px] lg:w-[256px] xl:w-[334px] object-cover mb-5 md:mb-0 transition-all duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <p className="w-[330px] md:w-[320px] lg:w-[416px] text-center font-urbanist font-medium text-base text-[#565656]">
                <span className="font-semibold text-[#0B0B0B]">
                  Falstaff(Alcohol-Free Trophy):
                </span>{" "}
                Reverse Riesling 90 pts; Breakaway Pinot Blanc 90 pts; Breakaway
                Gewürztraminer 91 pts; Reverse Sauvignon Blanc 90.5 pts.{" "}
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-0 md:gap-6 items-center  ">
                <div className="cursor-pointer overflow-hidden">
                  <img
                    src={about3}
                    alt="About section"
                    className="w-[335px] lg:w-[360px] xl:w-[473px] object-cover mb-5 md:mb-0 transition-all duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <p className="w-[350px] md:w-[320px] lg:w-[437px] text-center font-urbanist font-medium text-base text-[#565656]">
                  <span className="font-semibold text-[#0B0B0B]">
                    Gold Medal For Best Merlot 2025:{" "}
                  </span>
                  Best of Show Pinot Blanc for Breakaway Pinot Blanc
                  (Bergdolt-Reif & Nett); Gold for Reverse Pinot Bianco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== NEW SECTION (YOUR REQUEST) ===================== */}
      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px]">
          {/* DESKTOP VERSION (≥1024px) */}
          <div className=" flex flex-col xl:flex-row justify-between items-center gap-6  xl:gap-20">
            {/* LEFT TEXT BLOCK */}
            <div className="w-full xl:w-1/2 order-2 xl:order-1">
              <h2 className="font-cormorant font-bold text-[28px] xl:text-[38px] uppercase text-[#0B0B0B] mb-4">
                THE DEALCOHOLIZED SPECTRUM (FOCUS)
              </h2>
              <p className="text-[#565656] font-urbanist font-medium text-sm xl:text-base leading-[25px]">
                Bergdolt-Reif & Nett is a category leader in premium
                non-alcoholic wine, using the patented SOLOS process to remove
                alcohol while preserving terroir, varietal character, and the
                winemaker’s touch—an approach the estate positions as unique for
                an artisanal producer. Typical finished alcohol sits around 0.2%
                ABV.
              </p>
            </div>

            {/* RIGHT IMAGES */}
            
<div className="w-full xl:w-1/2 order-1 xl:order-2 flex items-center justify-center gap-4 md:gap-10 bg-[#F8F8F8] py-8 overflow-hidden group cursor-pointer">
  {/* LEFT INNER IMAGE + TEXT */}
  <div className="flex flex-col gap-2 md:gap-5 items-center">
    <img
      src={about3}
      alt="Gold medal"
      className="w-[100px] md:w-[210px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
    />
    <p className="text-[#000000] font-urbanist font-semibold text-xs md:text-md">
      Merlot Vineyard of the year
    </p>
  </div>

  {/* RIGHT INNER IMAGE */}
  <img
    src={productImg}
    alt="Bottle"
    className="w-[100px] md:w-[217px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
  />
</div>

          </div>

  
        </div>
      </div>

      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="pb-[55px] xl:pb-[100px]">
          <p className="font-bold font-cormorant px-8 md:px-16 text-[24px] md:text-[28px] xl:text-[36px] uppercase text-center mb-10">
            Two lines, two intentions
          </p>
          <div className="flex flex-col xl:flex-row items-start gap-6 xl:gap-20">
            {/* LEFT IMAGE */}
            <div className="w-full xl:w-1/2 hover:scale(1) flex justify-center  bg-[#F8F8F8] py-6 cursor-pointer overflow-hidden">
              <img
                src={about4}
                alt="About section"
                className="w-[80px] md:w-[180px] xl:w-[140px]  object-contain transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full xl:w-1/2 ">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    REVERSE
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    The “easy-drinking” gateway: fresh, fruit-led styles
                    designed for versatility and purity. Current bottlings
                    include Riesling (stony citrus, 0.11% ABV, 90 Falstaff),
                    Sauvignon Blanc, Pinot Bianco (90 Falstaff), Rosé
                    (Dornfelder/Spätburgunder, 88.5 Falstaff) and a dry-profile
                    Red (Dornfelder/Cabernet)
                  </p>
                </div>

                <div>
                  <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                    BREAKAWAY
                  </h2>

                  <p className="mt-3 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    The connoisseur tier: some wines see wood, bringing extra
                    depth and texture. Bottlings include Pinot Blanc (oak-aged,
                    90 Falstaff, Best of Show at Mundus Vini Non-Alcoholic),
                    Pinot Noir (oak-influenced, Gold-awarded) and Gewürztraminer
                    (91 Falstaff).
                  </p>

                  <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                    Beyond still wines, the range also features Frizzante
                    (alcohol-free sparkling), an Orange Wine “Evil Twin”, and a
                    “Grand Gold Chardonnay” special (wood & granite maturation),
                    underscoring the estate’s willingness to explore styles
                    rarely attempted in the NA category.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="pb-3 lg:pb-[55px] xl:pb-[100px]">
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
              className="!pb-10 gap-2 flex"
            >
              {aboutGallery.map((item, index) => (
                <SwiperSlide key={index} className="flex  items-stretch overflow-hidden cursor-pointer">
                  <img src={item.gallery} alt="" className="transition-all duration-500 ease-in-out hover:scale-105" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFirstProduct;
