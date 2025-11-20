import BlogChild from "../blog/BlogChild";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";


const BlogSection = () => {

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

            <div className="hidden lg:flex justify-between gap-8">
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