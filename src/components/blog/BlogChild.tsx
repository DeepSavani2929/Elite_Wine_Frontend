import React from "react";
import { useNavigate } from "react-router-dom";

const BlogChild = ({ blog, index }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-3 font-urbanist w-full lg:h-full bg-white p-2"
      onClick={() => navigate(`/blog/blogDetails/${blog._id}`)}
    >
      <div className="w-full  lg:h-[300px] xl:h-[360px] overflow-hidden  cursor-pointer">
        <img
          src={`${import.meta.env.VITE_IMG_URL}/${blog.blogImg}`}
          alt="blog"
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="font-semibold text-md text-[#641026]">{blog.blogTitle}</p>

      <p
        className={`font-urbanist font-medium text-base leading-[22px] text-[#565656] ${
          index === 2 ? "line-clamp-3" : "line-clamp-2"
        }`}
      >
        {blog.blogDesc}
      </p>

      <div className="mt-auto">
        <button className="font-urbanist font-semibold cursor-pointer text-md underline border-solid text-[#0B0B0B]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogChild;
