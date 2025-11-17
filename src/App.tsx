import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import ProductDetails from "./components/products/ProductDetails.tsx";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Shop from "./components/shop/Shop.tsx";
import About from "./components/about/About.tsx";
import AboutSecond from "./components/about/AboutSecond.tsx";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
           <Route path="/aboutSecond" element={<AboutSecond />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;