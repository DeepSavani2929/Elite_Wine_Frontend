import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import CartPopover from "../components/cartProducts/CartPopover";
import { setDrawerOpen } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
    const isOpen = useSelector(state => state.cart.isDrawerOpen);

  const dispatch = useDispatch();

  return (
    <>
        <CartPopover
        isOpen={isOpen}
        onClose={() => dispatch(setDrawerOpen(false))}
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
