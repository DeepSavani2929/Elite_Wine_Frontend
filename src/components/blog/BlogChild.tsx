    // import React from 'react'

    // const BlogChild = ({blog}) => {
    // return (
    //     <div className='flex flex-col gap-3 font-urbanist w-[33.33%]'>
    //         <div>
    //             <img src={blog.blogImg} alt="" className='object-contain object-center' />
    //         </div>
            
    //         <p className='font-semibold text-md text-[#641026]'>{blog.blogTitle}</p>

    //         <p className='font-urbanist font-medium text-base leading-[22px] text-[#565656]'>{blog.blogDesc}</p>

    //         <button className='font-urbanist font-semibold text-md underline border-solid text-[#0B0B0B]'>Read More</button>
    //     </div>
    // )
    // }

    // export default BlogChild


//     import React from "react";

// const BlogChild = ({ blog }) => {
//   return (
//     <div className="flex flex-col gap-3 font-urbanist w-[33.33%] h-full">
//       <div>
//         <img
//           src={blog.blogImg}
//           alt=""
//           className="object-cover object-center w-full"
//         />
//       </div>

//       <p className="font-semibold text-md text-[#641026]">{blog.blogTitle}</p>

//       <p className="font-urbanist font-medium text-base leading-[22px] text-[#565656]">
//         {blog.blogDesc}
//       </p>

//       <div className="mt-auto">
//         <button className="font-urbanist font-semibold text-md underline border-solid text-[#0B0B0B]">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogChild;



// import React from "react";

// const BlogChild = ({ blog }) => {
//   return (
//     <div className="flex flex-col gap-3 font-urbanist w-full h-full">
//       <div>
//         <img
//           src={blog.blogImg}
//           alt=""
//           className="object-cover object-center w-full"
//         />
//       </div>

//       <p className="font-semibold text-md text-[#641026]">{blog.blogTitle}</p>

//       <p className="font-urbanist font-medium text-base leading-[22px] text-[#565656]">
//         {blog.blogDesc}
//       </p>

//       <div className="mt-auto">
//         <button className="font-urbanist font-semibold text-md underline border-solid text-[#0B0B0B]">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogChild;
 






import React from "react";

const BlogChild = ({ blog }) => {
  return (
    <div className="flex flex-col gap-3 font-urbanist w-full lg:h-full bg-white rounded-lg p-2">
      {/* Fixed-height image container */}
      <div className="w-full lg:h-[300px] xl:h-[360px] overflow-hidden rounded-md">
        <img
          src={blog.blogImg}
          alt="blog"
          className="w-full h-full  object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="font-semibold text-md text-[#641026]">{blog.blogTitle}</p>

      <p className="font-urbanist font-medium text-base leading-[22px] text-[#565656]">
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
