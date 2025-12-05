import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MoveLeft, MoveRight, X, SlidersVertical } from "lucide-react";
import ProductsChild from "../products/productsChild";
import BlogChild from "../blog/BlogChild";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import verietyImg from "../../assets/images/variety.png";
import productmedal from "../../assets/images/productmedal.png";
import {
  addToCartAPI,
  setDrawerOpen as setCartDrawer,
} from "../../redux/cart/cartSlice";
import axios from "axios";
import { getBlog, getOtherBlogs } from "../../redux/blog/blogSlice";

const BlogDetails = () => {
  const { blogId } = useParams();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOtherBlogs(blogId));
    dispatch(getBlog(blogId));
  }, [blogId]);

  const desktopSwiperRef = useRef<any>(null);
  const drawerSwiperRef = useRef<any>(null);

  const navigate = useNavigate();

  const blogDetails = useSelector((state: any) => state.blog.otherBlogs);
  const perticularBlog = useSelector((state: any) => state.blog.perticularBlog);
  console.log(perticularBlog);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const fetchFilteredProducts = async () => {
    try {
      const queryParams = new URLSearchParams({
        categoryType: "Featured",
        limit: "3",
        page: "1",
      });

      const url = `${
        import.meta.env.VITE_API_URL
      }/products/getFilteredProducts?${queryParams.toString()}`;

      const res = await axios.get(url);

      if (res.data.success) {
        setFilteredProducts(res.data.data);
      }
    } catch (error) {
      console.error("FILTER API FAILED:", error);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, []);

  if (!perticularBlog)
    return <div className="py-10 text-center">Blog Not Found</div>;

  return (
    <>
      <div className="bg-[url('/images/blogImages/blogDetailsbg.png')] h-[320px] lg:h-[340px] xl:h-[400px] bg-cover bg-center relative">
        <button
          aria-label="Open Sidebar"
          onClick={() => setDrawerOpen(true)}
          className="xl:hidden absolute left-4 top-100 z-[200] p-2 rounded-md"
        >
          <SlidersVertical className="w-7 h-7 text-[gray]" />
        </button>

        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-white">
            Home <span className="mx-1">&gt;</span> Blog Detail
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-white">
            BLOG DETAIL
          </p>
        </div>
      </div>

      <div className="w-[95%] py-[55px] xl:py-[100px] mx-auto mt-30 md:mt-20 xl:mt-0 flex flex-col xl:flex-row gap-22 relative md:items-start">
        <div className="hidden xl:flex w-[18%] flex-col gap-10 md:sticky md:top-20">
          <div>
            <h3 className="font-urbanist font-bold text-2xl border-[#CCCCCC] border-b pb-1 text-[#641026] mb-3">
              Recent Post
            </h3>

            <div className="flex flex-col gap-4">
              {blogDetails.slice(0, 3).map((blog: any) => (
                <div
                  key={blog._id}
                  className="border-b border-[#CCCCCC] pb-5 last:border-b-0"
                >
                  <Link
                    to={`/blog/blogDetails/${blog._id}`}
                    className="font-urbanist text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
                  >
                    {blog.blogTitle}
                  </Link>
                  <p className="text-base text-[#565656]">{blog.createdDate}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-urbanist font-bold text-2xl border-b border-[#CCCCCC] pb-1 text-[#641026] mb-3">
              Featured Products
            </h3>

            <div className="relative w-full">
              <button
                onClick={() => desktopSwiperRef.current?.slidePrev()}
                className={`absolute left-4 top-[260px] cursor-pointer z-20 
                ${isBeginning ? "opacity-30 pointer-events-none" : ""}`}
              >
                <MoveLeft className="w-7 h-7 text-[#0B0B0B]" />
              </button>

              <button
                onClick={() => desktopSwiperRef.current?.slideNext()}
                className={`absolute right-4 top-[260px] cursor-pointer z-20 
                ${isEnd ? "opacity-30 pointer-events-none" : ""}`}
              >
                <MoveRight className="w-7 h-7 text-[#0B0B0B]" />
              </button>

              <Swiper
                slidesPerView={1}
                loop
                onSwiper={(swiper) => {
                  desktopSwiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
              >
                {filteredProducts.map((product: any) => (
                  <SwiperSlide key={product.id}>
                    <ProductsChild product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[80%] md:min-h-screen md:overflow-y-auto">
          <h1 className="font-urbanist font-semibold text-2xl text-[#641026]">
            {perticularBlog.blogTitle}
          </h1>

          <p className="font-urbanist text-base text-[#565656] mt-2 mb-5">
            By Ioana Rednic • 25 Sep 2025
          </p>

          <div
            className="blog-content font-urbanist text-[17px] leading-[26px] text-[#3D3D3D] space-y-5"
            dangerouslySetInnerHTML={{ __html: perticularBlog.blogContent }}
          />
        </div>
      </div>

      <div className="w-[95%] xl:w-[80%] mx-auto">
        <div className="pb-[10px] lg:pb-[50px] xl:pb-[100px] flex flex-col gap-3 mg:gap-10">
          <p className="font-cormorant font-bold text-[36px] uppercase text-center text-[#0B0B0B]">
            Blog
          </p>

          {/* Desktop Grid */}
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
                <SwiperSlide key={index}>
                  <BlogChild blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 
        z-[999998] xl:hidden 
        ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-75 md:w-130 lg:w-[750px] bg-white 
        overflow-auto transition-transform duration-300 ease-in-out px-8
        z-[999999] xl:hidden
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <p className="mt-6 text-2xl font-semibold text-[#0B0B0B]">Sidebar</p>

          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center 
              bg-[#641026] text-white rounded-sm z-[999999]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h2 className="font-urbanist font-bold text-2xl text-[#641026] mb-3 mt-6">
          Recent Post
        </h2>

        <div className="border-t border-[#CCCCCC] pt-4">
          {blogDetails.slice(0, 6).map((blog: any) => (
            <div
              key={blog._id}
              className="py-3 border-b border-[#CCCCCC] last:border-b-0"
            >
              <Link
                to={`/blog/blogDetails/${blog._id}`}
                onClick={() => setDrawerOpen(false)}
                className="font-urbanist text-sm md:text-md xl:text-lg font-medium text-[#0B0B0B] hover:text-[#641026]"
              >
                {blog.blogTitle}
              </Link>
              <p className="text-sm lg:text-base text-[#565656] mt-1">
                {blog.createdDate}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-urbanist font-bold text-2xl text-[#641026] mb-3">
            Featured Products
          </h3>

          <div className="relative">
            <button
              onClick={() => drawerSwiperRef.current?.slidePrev()}
              className={`absolute left-2 top-[250px] md:top-[350px] z-20
            `}
            >
              <MoveLeft className="w-6 h-6 text-[#0B0B0B]" />
            </button>

            <button
              onClick={() => drawerSwiperRef.current?.slideNext()}
              className={`absolute right-2 top-[250px] md:top-[350px] z-20
              `}
            >
              <MoveRight className="w-6 h-6 text-[#0B0B0B]" />
            </button>

            <Swiper
              slidesPerView={1}
              loop
              onSwiper={(swiper) => {
                drawerSwiperRef.current = swiper;
              }}
            >
              {filteredProducts.map((product: any) => (
                <SwiperSlide key={product._id}>
                  <div
                    className="group flex h-full flex-col gap-6 cursor-pointer transition-all duration-300"
                    onClick={() => navigate(`/productDetails/${product._id}`)}
                  >
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <div className="w-full py-10">
                        <img
                          src={`${import.meta.env.VITE_IMG_URL}/${
                            product.productImg
                          }`}
                          alt={product.productName}
                          className="w-full h-[400px] md:h-[650px] object-contain"
                        />
                      </div>

                      <button
                        className="
                          absolute bottom-1 left-1/2 w-full -translate-x-1/2 translate-y-6
                          rounded-full bg-[#EED291] py-4 text-center font-urbanist text-sm
                          font-semibold text-[#641026]
                          opacity-0 pointer-events-none transition-all duration-500
                          group-hover:flex group-hover:items-center group-hover:justify-center
                          group-hover:opacity-100 group-hover:pointer-events-auto
                          group-hover:translate-y-0 cursor-pointer
                          hover:bg-[#641026] hover:text-[#EED291]
                        "
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(setCartDrawer(true));
                          dispatch(addToCartAPI(product._id));
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>

                    <div className="flex flex-1 flex-col text-left">
                      <p className="font-urbanist text-sm md:text-md lg:text-2xl font-semibold text-[#641026] mb-4 leading-snug">
                        {product.productName}
                      </p>

                      <div className="mt-auto flex flex-col gap-4">
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-0.1 gap-x-1 md:gap-4 text-sm font-medium text-[#5E5E5E]">
                          <div className="flex items-center gap-2 min-h-[32px] flex-row-reverse md:flex-row">
                            <span className="font-urbanist text-md md:text-xl font-semibold text-[#565656] whitespace-nowrap">
                              {product.variety}
                            </span>
                            <img
                              src={verietyImg}
                              className="h-6 w-6 md:h-8 md:w-8 object-contain"
                            />
                          </div>

                          <div className="flex items-center gap-0.5 text-[#0B0B0B] min-h-[32px]">
                            {product.medal && (
                              <img
                                src={productmedal}
                                className="h-6 w-6 md:h-10 md:w-10 object-contain"
                              />
                            )}
                            <span className="font-urbanist text-sm md:text-md font-semibold text-[#565656]">
                              {product.flavour}
                            </span>
                          </div>
                        </div>

                        <p className="font-urbanist text-md md:text-xl font-semibold text-[#641026]">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogDetails;
