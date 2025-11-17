// import React from "react";

// import about1 from "../../assets/images/aboutImg1.png";
// import about2 from "../../assets/images/aboutImg2.png";
// import about3 from "../../assets/images/aboutImg3.png";
// import about4 from "../../assets/images/aboutImg4.png";
// import about5 from "../../assets/images/aboutImg5.png";

// const About = () => {
//   return (
//     <>
//       {/* TOP BANNER */}
//       <div className="bg-[url('images/aboutImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
//         <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
//           <p className="font-urbanist font-semibold text-base text-white">
//             Home <span className="font-Poppins"> &gt;</span> About Us
//           </p>
//           <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
//             about us
//           </p>
//         </div>
//       </div>

//       {/* SECTION FROM FIGMA */}
//       <div className="w-full  ">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           {/* FLEX ROW SECTION */}
//           <div className="py-[55px] xl:py-[100px]  flex flex-col xl:flex-row  lg:gap-1 xl:gap-20">
//             {/* LEFT IMAGE */}
//             <div className="w-full xl:w-1/2 hover:scale(1) cursor-pointer">
//               <img
//                 src={about1}
//                 alt="About section"
//                 className="w-full object-cover"
//               />
//             </div>

//             {/* RIGHT TEXT */}
//             <div className="w-full xl:w-1/2 pt-6">
//               <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
//                 ELITE WINE SELECTIONS - PURE TERROIR. ZERO COMPROMISE.
//               </h2>

//               <p className="mt-6 text-[#565656] font-medium font-urbanist text-sm xl:text-base  leading-[26px]">
//                 Elite Wine Selections Inc. is a New York–based importer and
//                 wholesaler of premium, award-winning European dealcoholized
//                 wines (&lt;0.5% ABV) from Germany, France, Italy, and Spain.
//                 Many selections are organic and vegan, crafted to closely
//                 preserve the authentic aroma, mouthfeel, and character of
//                 traditional wines. We serve the fast-growing sober-curious and
//                 health-conscious communities seeking sophistication and
//                 creative, mindful drinking experiences without alcohol.
//               </p>

//               <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
//                 Our partner vineyards combine centuries of heritage and terroir
//                 with cutting-edge dealcoholization methods such as advanced
//                 aroma recovery. This ensures every bottle retains its original
//                 complexity, varietal character, and mouthfeel. Some selections
//                 are even barrel-aged, underscoring that these are authentic
//                 wines—not simply grape juice in disguise.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF1D2]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="pb-[55px] xl:pb-[100px] pt-0 ">
//             <div className="flex flex-col md:flex-row justify-between  lg:gap-1 xl:gap-20">
//               {/* LEFT COLUMN: Text Content */}
//               <div className="order-2 md:order-1 lg:w-1/2 flex flex-col justify-center py-3 lg:py-0">
//                 <h2 className="font-cormorant font-bold text-[28px] xl:text-[36px] uppercase text-[#0B0B0B] mb-0 md:mb-2 xl:mb-6">
//                   AWARDS & RECOGNITION
//                 </h2>

//                 <p className="mt-2 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
//                   We proudly showcase wines from e.g. Bergdolt-Reif & Nett
//                   (Pfalz, Germany), a pioneer in artisanal dealcoholized
//                   winemaking, whose achievements include:
//                 </p>

//                 <ul className="mt-4 space-y-2 text-[#565656] font-medium font-urbanist text-sm xl:text-base list-disc list-inside">
//                   <p>
//                     Falstaff Alcohol-Free Trophy: Reverse Riesling (90 pts),
//                     Breakaway Pinot Blanc (90 pts), Breakaway Gewürztraminer (91
//                     pts), Reverse Sauvignon Blanc (90.5 pts)
//                   </p>
//                 </ul>

//                 <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
//                   These accolades underline our commitment to offering
//                   award-winning wines that set the benchmark for the
//                   non-alcoholic category.
//                 </p>
//               </div>

//               {/* RIGHT COLUMN: Award Image (about2) */}
//               <div className="order-1  md:order-2 flex">
//                 <div className="w-full  cursor-pointer">
//                   <img
//                     src={about2}
//                     alt="Falstaff Award Trophy 2025"
//                     className="w-full  object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col md:flex-row items-center  gap-3 md:gap-6 lg:gap-12 ">
//               <div className="flex flex-col w-full md:w-[50%]  gap-3 items-start justify-center">
//                 <div>
//                   <img
//                     src={about3}
//                     alt="Gold Medal Wine"
//                     className="object-contain object-center w-[538px] xl:h-[538px]"
//                   />

//                   <div className="w-full">
//                     <p className="font-urbanist font-semibold  text-sm md:text-xs xl:text-base text-[#0B0B0B] !text-center  px-3 md:px-0">
//                       Gold Medal for the Bergdolt-Reif & Nett Breakaway Merlot
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Text Section */}
//               <div className="flex  w-full  md:w-[50%] flex-col items-start  gap-5 max-w-[600px]  md:text-left">
//                 <p className="font-cormorant font-bold text-3xl md:text-[22px] lg:text-2xl xl:text-[36px] text-[#0B0B0B] uppercase leading-snug">
//                   Elite Wine Selections – Pure{" "}
//                   <br className="hidden sm:block" /> terroir. Zero compromise.
//                 </p>

//                 <p className="text-[#565656] font-medium font-urbanist text-sm  leading-relaxed">
//                   Elite Wine Selections is a New York–based importer and
//                   wholesaler specializing in premium, award-winning European
//                   dealcoholized wines (&le; 0.5% ABV) primarily from Germany,
//                   France, Italy, and Spain. <br />
//                   <br />
//                   We serve the fast-growing sober-curious and health-conscious
//                   communities who seek sophistication without alcohol.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF1D2]">
//         <div className="w-[95%] xl:w-[80%] mx-auto">
//           <div className="py-[55px] xl:py-[100px]">
//             {/* Layout: Image left, Text/List right on desktop; Stacked on mobile */}
//             <div className="flex flex-col lg:flex-row lg:gap-20 items-start">
              
//               {/* LEFT COLUMN: Image (about5) */}
//               <div className="w-full lg:w-1/2 order-1 mb-8 lg:mb-0">
//                 <img
//                   src={about4}
//                   alt="Couple sampling non-alcoholic wine in cellar"
//                   className="w-full h-auto object-cover rounded-lg shadow-xl"
    
//                 />
//               </div>

//               {/* RIGHT COLUMN: Text Content (Title and List) */}
//               <div className="w-full lg:w-1/2 order-2 flex flex-col pt-0 lg:pt-12">
//                 <h3 className="font-cormorant font-bold text-[28px] md:text-[32px] xl:text-[36px] uppercase text-[#0B0B0B] mb-6">
//                   WHAT SETS US APART
//                 </h3>
                
//                 <ul className="space-y-4 font-urbanist text-sm xl:text-base text-[#565656] list-none p-0">
//                   {/* Using a custom span for the bullet to replicate the yellow dot */}
//                   <li className="flex items-start">
//                     <span className="text-[#EED291] text-lg leading-none mr-3">•</span>
//                     Advanced aroma recovery that preserves varietal expression
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#EED291] text-lg leading-none mr-3">•</span>
//                     Barrel-aging for depth and structure (rare in NA wine)
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#EED291] text-lg leading-none mr-3">•</span>
//                     Terroir-driven authenticity with European pedigree
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#EED291] text-lg leading-none mr-3">•</span>
//                     Vegan selections
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#EED291] text-lg leading-none mr-3">•</span>
//                     No added sugar for purity and wellness
//                   </li>
//                 </ul>

//               </div>
//             </div>

//           </div>
          
//             <div>
                
//             </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;



import React from "react";

import about1 from "../../assets/images/aboutImg1.png";
import about2 from "../../assets/images/aboutImg2.png";
import about3 from "../../assets/images/aboutImg3.png";
import about4 from "../../assets/images/aboutImg4.png";
import about5 from "../../assets/images/aboutImg5.png";

const About = () => {
  return (
    <>
      {/* TOP BANNER */}
      <div className="bg-[url('images/aboutImg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins"> &gt;</span> About Us
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            about us
          </p>
        </div>
      </div>

      {/* SECTION FROM FIGMA */}
      <div className="w-full">
        <div className="w-[95%] xl:w-[80%] mx-auto">
          {/* FLEX ROW SECTION */}
          <div className="py-[55px] xl:py-[100px] flex flex-col xl:flex-row lg:gap-1 xl:gap-20">
            {/* LEFT IMAGE */}
            <div className="w-full xl:w-1/2 hover:scale(1) cursor-pointer">
              <img
                src={about1}
                alt="About section"
                className="w-full object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full xl:w-1/2 pt-6">
              <h2 className="font-cormorant font-bold text-[28px] xl:text-[40px] leading-tight uppercase text-[#0B0B0B]">
                ELITE WINE SELECTIONS - PURE TERROIR. ZERO COMPROMISE.
              </h2>

              <p className="mt-6 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                Elite Wine Selections Inc. is a New York–based importer and
                wholesaler of premium, award-winning European dealcoholized
                wines (&lt;0.5% ABV) from Germany, France, Italy, and Spain.
              </p>

              <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                Our partner vineyards combine centuries of heritage and terroir
                with cutting-edge dealcoholization methods...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF1D2]">
        <div className="w-[95%] xl:w-[80%] mx-auto">
          <div className="pb-[55px] xl:pb-[100px] pt-0">
            <div className="flex flex-col md:flex-row justify-between lg:gap-1 xl:gap-20">
              <div className="order-2 md:order-1 md:w-1/2 flex flex-col justify-center py-3 lg:py-0">
                <h2 className="font-cormorant font-bold text-[28px] xl:text-[36px] uppercase text-[#0B0B0B] mb-0 md:mb-2 xl:mb-6">
                  AWARDS & RECOGNITION
                </h2>

                <p className="mt-2 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                  We proudly showcase wines from Bergdolt-Reif & Nett
                  (Pfalz, Germany), pioneers in artisanal dealcoholized
                  winemaking:
                </p>

                <ul className="mt-4 space-y-2 text-[#565656] font-medium font-urbanist text-sm xl:text-base list-disc list-inside">
                  <p>
                    Falstaff Alcohol-Free Trophy: Reverse Riesling (90 pts),
                    Breakaway Pinot Blanc (90 pts), Breakaway Gewürztraminer (91 pts)
                  </p>
                </ul>

                <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                  These accolades underline our commitment to excellence.
                </p>
              </div>

              <div className="order-1 md:order-2 flex w-full md:w-1/2">
                <div className="w-full cursor-pointer">
                  <img
                    src={about2}
                    alt="Falstaff Award Trophy 2025"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 lg:gap-12">
              <div className="flex flex-col w-full md:w-[50%] gap-3 items-start justify-center">
                <div>
                  <img
                    src={about3}
                    alt="Gold Medal Wine"
                    className="object-contain object-center w-[538px] xl:h-[538px]"
                  />
                  <div className="w-full">
                    <p className="font-urbanist font-semibold text-sm md:text-xs xl:text-base text-[#0B0B0B] text-center px-3 md:px-0">
                      Gold Medal for the Bergdolt-Reif & Nett Breakaway Merlot
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full md:w-[50%] flex-col items-start gap-5 max-w-[600px]">
                <p className="font-cormorant font-bold text-3xl md:text-[22px] lg:text-2xl xl:text-[36px] text-[#0B0B0B] uppercase leading-snug">
                  Elite Wine Selections – Pure terroir.
                  <br className="hidden sm:block" /> Zero compromise.
                </p>

                <p className="text-[#565656] font-medium font-urbanist text-sm leading-relaxed">
                  Elite Wine Selections is a New York–based importer specializing
                  in award-winning European dealcoholized wines (&le; 0.5% ABV).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 
                <section className="py-0 flex flex-col-reverse md:flex-row md:justify-between gap-5 animate-fadeIn delay-200">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold mb-4 uppercase font-[Cormorant-Upright-bold] tracking-wider">
                Awards & Recognition
              </h3>

              <p className="leading-relaxed  text-sm md:text-[16px] opacity-80 mb-4">
                We proudly showcase wines from e.g. Bergdolt-Reif & Nett (Pfalz,
                Germany), a pioneer in artisanal dealcoholized winemaking, whose
                achievements include:
              </p>

              <p className="leading-relaxed  text-sm md:text-[16px] opacity-80 mb-4">
                Falstaff Alcohol-Free Trophy: Reverse Riesling (90 pts),
                Breakaway Pinot Blanc (90 pts), Breakaway Gewürztraminer (91
                pts), Reverse Sauvignon Blanc (90.5 pts)
              </p>

              <p className="leading-relaxed  text-sm md:text-[16px] opacity-80 mt-4">
                These accolades underline our commitment to offering
                award-winning wines that set the benchmark for the non-alcoholic
                category.
              </p>
            </div>

  
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={about2}
                alt="Falstaff award"
                className="w-full lg:w-80 rounded-xl"
              />
            </div>
          </section> */}

      {/* WHAT SETS US APART */}
      <div className="w-full bg-gradient-to-b from-[#FFFFFF] via-white via-70% to-[#FFF1D2]">
        <div className="w-[95%] xl:w-[80%] mx-auto">
          <div className="py-[55px] xl:py-[100px]">
            <div className="flex flex-col lg:flex-row lg:gap-20 items-start">
              <div className="w-full order-1 mb-8 lg:mb-0">
                <img
                  src={about4}
                  alt="Couple sampling non-alcoholic wine"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 order-2 flex flex-col pt-0 lg:pt-12">
                <h3 className="font-cormorant font-bold text-[28px] md:text-[32px] xl:text-[36px] uppercase text-[#0B0B0B] mb-4">
                  WHAT SETS US APART
                </h3>

                <ul className="space-y-4 font-urbanist text-sm xl:text-base text-[#565656] list-disc list-inside p-0 ms-3">
                  <li>Advanced aroma recovery preserving varietal character</li>
                  <li>Rare barrel-aging in non-alcoholic wines</li>
                  <li>Authentic European terroir</li>
                  <li>Vegan selections</li>
                  <li>No added sugar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CUSTOMERS */}
          <div className="py-[30px] xl:py-[50px] text-center">
            <h2 className="font-cormorant font-bold text-[30px] md:text-[34px] xl:text-[36px] uppercase text-[#0B0B0B] mb-4">
              CUSTOMERS
            </h2>

            <p className="mx-auto text-[#565656] font-medium font-urbanist text-sm md:text-md xl:text-base leading-[26px]">
           We supply specialty non-alcoholic retailers, fine-dining restaurants, boutique hotels, beverage caterers, social clubs,yacht and golf clubs, and online platforms.
For partners seeking exclusivity, Elite also offers turnkey private-label solutions with boutique branding and premium packaging.
            </p>
          </div>
        </div>
      </div>

      {/* ▶️ NEW SECTION ADDED IN YOUR EMPTY DIV EXACTLY AS REQUESTED */}
      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px]">

          <div className="flex flex-col xl:flex-row items-center gap-y-2 md:gap-y-6 gap-x-20">
            {/* LEFT TEXT */}
            <div className="w-full xl:w-1/2 order-2 xl:order-1">
              <h2 className="font-cormorant font-bold text-[28px] xl:text-[36px] uppercase text-[#0B0B0B]">
                VISION
              </h2>

              <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                With the U.S. non-alcoholic wine market projected to grow at double-digit rates,
                Elite Wine Selections positions itself as a pioneer in the premium European segment—
                bringing terroir-driven, award-winning wines to consumers who refuse to compromise
                on quality.
              </p>

              <p className="mt-4 text-[#565656] font-medium font-urbanist text-sm xl:text-base leading-[26px]">
                We believe that enjoying wine is about ritual, elegance, and connection —
                not necessarily alcohol anymore.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full xl:w-1/2 order-1 xl:order-2">
              <img
                src={about5}
                className="w-full object-cover "
                alt="Vision people toasting"
              />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default About;

