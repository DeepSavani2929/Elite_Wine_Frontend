import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import GoldMedal from "../components/goldmedal/GoldMedal";
import Products from "../components/products/Products";
import Shipping from "../components/shipping/Shipping.tsx";
import PopularProducts from "../components/popularPropducts/PopularProducts.tsx";
import AboutUs from "../components/aboutUs/AboutUs.tsx";
import Blog from "../components/blog/Blog.tsx";
import FollowUs from "../components/followUs/FollowUs.tsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <GoldMedal />
      <Products />
      <Shipping />
      <PopularProducts />
      <AboutUs />
      <Blog />
      <FollowUs />
    </>
  );
};

export default Home;
