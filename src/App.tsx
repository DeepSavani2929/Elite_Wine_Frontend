import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import ProductDetails from "./components/products/ProductDetails.tsx";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Shop from "./components/shop/Shop.tsx";
import About from "./components/about/About.tsx";
import AboutFirstProduct from "./components/about/AboutFirstProduct.tsx";
import AboutSecondProduct from "./components/about/AboutSecondProduct.tsx";
import AboutThirdProduct from "./components/about/AboutThirdProduct.tsx";
import AboutFourthProduct from "./components/about/AboutFourthProduct.tsx";
import AboutFifthProduct from "./components/about/AboutFifthProduct.tsx";
import ScrollToTop from "./components/scrollToTop/ScrollToTop.tsx";
import CartDetails from "./components/cartProducts/CartDetails.tsx";
import BlogSection from "./components/blogPage/BlogSection.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogDetails from "./components/blogPage/BlogDetails.tsx";
import ContactUs from "./components/contactUs/ContactUs.tsx";
import Faqs from "./components/faqs/Faqs.tsx";
import Register from "./components/auth/Register.tsx";
import Login from "./components/auth/Login.tsx";
import ResetPassword from "./components/auth/ForgotPassword.tsx";
import Collections from "./components/collections/Collections.tsx";
import FilteredCollections from "./components/collections/filteredCollections.tsx";
import Checkout from "./components/checkout/Checkout.tsx";
import Privacy from "./components/privacy/Privacy.tsx";
import ForgotPassword from "./components/auth/ForgotPassword.tsx";

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={1800}
        pauseOnHover={false}
        draggable={false}
        closeOnClick
        theme="light"
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/about-us/bergdolt-reif-nett"
            element={<AboutFirstProduct />}
          />
          <Route path="/about-us/lamm-jung" element={<AboutSecondProduct />} />
          <Route
            path="/about-us/kvd-strauch-sektmanufaktur"
            element={<AboutThirdProduct />}
          />
          <Route
            path="/about-us/château-clos-de-boüard"
            element={<AboutFourthProduct />}
          />
          <Route
            path="/about-us/weingut-matthias-anton"
            element={<AboutFifthProduct />}
          />
          <Route path="/cartDetails" element={<CartDetails />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog/blogDetails/:blogId" element={<BlogDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:email" element={<ResetPassword />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/collections/kvd/:collectionType"
            element={<FilteredCollections />}
          />
          <Route
            path="/collections/bergdolt-reif-nett/:collectionType"
            element={<FilteredCollections />}
          />
          <Route
            path="/collections/matthias-anton/:collectionType"
            element={<FilteredCollections />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
