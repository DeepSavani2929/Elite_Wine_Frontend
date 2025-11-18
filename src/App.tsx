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
import AboutFirstProduct from "./components/about/AboutFirstProduct.tsx";
import AboutSecondProduct from "./components/about/AboutSecondProduct.tsx";
import AboutThirdProduct from "./components/about/AboutThirdProduct.tsx";
import AboutFourthProduct from "./components/about/AboutFourthProduct.tsx";
import AboutFifthProduct from "./components/about/AboutFifthProduct.tsx";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutUs" element={<About />} />

          <Route path="/aboutUs/bergdolt-reif-nett" element={<AboutFirstProduct />} />
          <Route path="/aboutUs/lamm-jung" element={<AboutSecondProduct />} />
          <Route path="/aboutUs/kvd-strauch-sektmanufaktur" element={<AboutThirdProduct />} />
          <Route path="/aboutUs/château-clos-de-boüard" element={<AboutFourthProduct />} />
          <Route path="/aboutUs/matthias" element={<AboutFifthProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;