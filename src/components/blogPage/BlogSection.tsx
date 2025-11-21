import BlogChild from "../blog/BlogChild";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import { useSelector } from "react-redux";


const BlogSection = () => {


    const blogDetails = useSelector((state) => state.blog.blogDetails);
    console.log("Blog Details from Redux:", blogDetails);

    return (
         <>
            <div className="bg-[url('/images/blogbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="font-Poppins ms-1 me-1"> &gt;</span> Blog 
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            BLOG
          </p>
        </div>
      </div>

   <div className="w-[95%]  mx-auto">
        <div className="py-[55px] xl:py-[100px] flex flex-col gap-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 md:gap-8">
              {blogDetails.map((blog, index) => (
                <div key={index} className="flex-1">
                  <BlogChild blog={blog} />
                </div>
              ))}
            </div>
            </div>
            </div>




         </>
    )
}

export default BlogSection;