import React, { useEffect, useState } from "react";
import BlogChild from "./BlogChild";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/blog/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const blogDetails = useSelector((state) => state.blog.blogDetails);

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
