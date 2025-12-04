import React from "react";
import about from "../../assets/images/about.png";
import aboutuslogo from "../../assets/images/aboutuslogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, HashNavigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const aboutUsDetails = [
  {
    heading: "What our customers say about us",
    aboutImg: about,
    desc: `Once dismissed as too sweet or “cooked,” non-alcoholic wine has evolved.  Thanks to new tech, winemakers like Bergdolt-Nett now deliver pure terroir, zero alcohol.`,
    logo: aboutuslogo,
    logodesc: "Sommelière Romana Echensperger about Bergdolt, Reif & Nett",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="w-full  bg-gradient-to-b from-[#FFFFFF] pb-[10px] xl:pb-[30px] pt-[60px] xl:pt-[100px] to-[#FFF1D2]">
        <div className="w-[95%] xl:w-[80%]  mx-auto ">
          <div className="  items-center gap-10 text-[#0B0B0B]">
            <p className="font-cormorant font-bold text-3xl xl:text-[36px] uppercase text-center">
              What our customers say about us
            </p>
          </div>
        </div>

          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination, HashNavigation]}
            className="mySwiper pb-[100px]"
          >
            {[...Array(4)].map((_, repeatIndex) =>
              aboutUsDetails.map((aboutDetail, index) => (
                <SwiperSlide
                  key={`${repeatIndex}-${index}`}
                  data-hash={`slide-${repeatIndex}-${index}`}
                >
                  <div className="flex flex-col items-center justify-between gap-8 py-8 md:py-10 text-[#0B0B0B]">
                    <div>
                      <img
                        src={aboutDetail.aboutImg}
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                    <p className="font-urbanist font-medium text-base md:text-md text-center w-full md:max-w-[520px] xl:max-w-[660px]">
                      Once dismissed as too sweet or “cooked,” non-alcoholic wine
                      has evolved. <br /> Thanks to new tech, winemakers like
                      Bergdolt-Nett now deliver pure terroir, zero alcohol
                    </p>
                    <div>
                      <img
                        src={aboutDetail.logo}
                        alt=""
                        className="w-[80px] h-[80px] object-cover object-center mx-auto"
                      />
                    </div>
                    <p className="font-urbanist font-semibold text-lg md:text-md text-center mb-0 md:mb-3">
                      {aboutDetail.logodesc}
                    </p>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
      </div>
    </>
  );
};

export default AboutUs;
