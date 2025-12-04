import Header from "../components/header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import CartPopover from "../components/cartProducts/CartPopover";
import { setDrawerOpen } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const isOpen = useSelector((state) => state.cart.isDrawerOpen);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const hideHeader = pathname === "/checkout" || pathname === "/paymentSuccess";

  return (
    <>
      <CartPopover
        isOpen={isOpen}
        onClose={() => dispatch(setDrawerOpen(false))}
      />

      {!hideHeader && <Header />}

      <Outlet />

      {!hideHeader && <Footer />}
    </>
  );
};

export default Layout;
