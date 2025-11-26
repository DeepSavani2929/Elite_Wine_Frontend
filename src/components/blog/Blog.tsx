import React from "react";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import BlogChild from "./BlogChild";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Blog = () => {
  const blogDetails = [
    {
      blogImg: blog1,
      blogTitle:
        "“How non-alcoholic wine is made without losing the taste” Gentle Dealcoholization: How LTVD and Aroma Recovery Work",
      blogDesc:
        "For a long time, non-alcoholic wines carried a reputation for being overly sweet, flat, or marked by cooked flavors......",
    },
    {
      blogImg: blog2,
      blogTitle:
        "The Perfect Non-Alcoholic Wines for Weddings, Brunches, Picnics, Family Celebrations, and Nights Out",
      blogDesc:
        "Wine has always been part of life’s most memorable moments — toasting newlyweds, sharing a Sunday brunch, or opening a bottle.....",
    },
    {
      blogImg: blog3,
      blogTitle: "Hosting a Dinner Party with Wine Pairings for Everyone",
      blogDesc:
        "There’s something magical about gathering friends and family around the table. The laughter, the conversation, the aroma of home-cooked dishes — and of course, the wine......",
    },
  ];

  return (
    <>
      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="py-[55px] xl:py-[100px] flex flex-col gap-10">
      
          <div>
            <p className="font-cormorant font-bold text-[36px] uppercase text-center text-[#0B0B0B]">
              Blog
            </p>
          </div>

     
            <div className="hidden lg:flex justify-between gap-8">
              {blogDetails.map((blog, index) => (
                <div key={index} className="flex-1">
                  <BlogChild blog={blog} />
                </div>
              ))}
            </div>


          <div className="block lg:hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 }, 
              }}
              className="!pb-10"
            >
              {blogDetails.map((blog, index) => (
                <SwiperSlide key={index} className="flex items-stretch">
                  <BlogChild blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;




