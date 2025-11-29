import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Minus,
  Plus,
  MoveLeft,
  MoveRight,
  Clipboard,
  Truck,
  Tag,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigate, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteCartProduct,
  incrementQuantity,
} from "../../redux/cart/cartSlice";

const CartPopover = ({ isOpen, onClose }) => {
  const swiperRef = useRef(null);

  const slideLeft = () => swiperRef.current?.slidePrev();
  const slideRight = () => swiperRef.current?.slideNext();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [activeSheet, setActiveSheet] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const relatedProductsList = useSelector(
    (state) => state.cart.relatedProducts
  );

  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal;



  useEffect(() => {
    document.body.style.overflow = isOpen || activeSheet ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen, activeSheet]);

  const openSheet = (type) => setActiveSheet(type);
  const closeSheet = () => setActiveSheet(null);

  const SheetHeader = ({ title, Icon, onCloseSheet }) => (
    <div className="flex items-center justify-between px-5 py-4 border-b">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-[#0B0B0B]" />
        <h3 className="font-semibold text-base text-[#0B0B0B]">{title}</h3>
      </div>
      <button onClick={onCloseSheet}>
        <X className="w-6 h-6 text-black" />
      </button>
    </div>
  );


      const getReletedProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/getReletedProducts`
      );

      if (res.data.success) {
        setReletedProductsList(res.data.data);
      }
    } catch (err) {
      console.error("Failed to load product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[999999] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={() => {
          if (activeSheet) closeSheet();
          else onClose();
        }}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`
          fixed right-0 top-0 h-full w-[360px] md:w-[410px]
          bg-white shadow-[0_0_25px_rgba(0,0,0,0.18)]
          flex flex-col transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="sticky top-0 bg-white z-[40] px-5 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold font-urbanist text-md text-black">
                Shopping Cart
              </p>
              <p className="font-semibold font-urbanist text-base text-[#565656]">
                {cartItems.length} items
              </p>
            </div>

            <button
              onClick={() => {
                if (activeSheet) closeSheet();
                else onClose();
              }}
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <p className="font-cormorant font-bold text-[28px] text-[#0B0B0B]">
              Your cart is empty.
            </p>
            <p className="font-urbanist text-[#565656] mt-2 text-base">
              Add some products to continue shopping.
            </p>
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <div className="px-5 pb-4 bg-white">
              <div className="w-full h-[7px] bg-[#e8e8e8] rounded-full">
                <div
                  className="h-full bg-green-400 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-[#565656] text-md font-semibold mt-2">
                You qualify for free shipping!
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {cartItems.map((product, index) => (
                <div key={index} className="border-b border-[#CCCCCC] pb-6">
                  <div className="flex gap-8 items-center">
                    <img
                      onClick={() => {
                        onClose();
                        navigate(`/productDetails/${product.productId}`);
                      }}
                      src={product.productImg}
                      className="w-16 h-20 object-contain cursor-pointer"
                    />

                    <div className="flex flex-col flex-1">
                      <p
                        className="font-semibold text-md mb-2 leading-5 font-urbanist text-[#641026] cursor-pointer"
                        onClick={() => {
                          onClose();
                          navigate(`/productDetails/${product.productId}`);
                        }}
                      >
                        {product.productName}
                      </p>

                      <p className="font-urbanist font-bold text-base text-[#0B0B0B]">
                        ${product.price}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6 border border-[#EED291] rounded-full px-5 py-1 w-fit shadow-sm">
                          <Minus
                            className="w-4 h-4 cursor-pointer"
                            onClick={() =>
                              dispatch(decrementQuantity(product.productId))
                            }
                          />
                          <span className="font-semibold text-base">
                            {product.quantity}
                          </span>
                          <Plus
                            className="w-4 h-4 cursor-pointer"
                            onClick={() =>
                              dispatch(incrementQuantity(product.productId))
                            }
                          />
                        </div>

                        <button
                          className="text-[#0B0B0B]"
                          onClick={() =>
                            dispatch(deleteCartProduct(product.productId))
                          }
                        >
                          <X className="w-6 h-6 mt-3 cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {relatedProductsList.length > 0 && (
                <div className="pt-1">
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-[#0B0B0B] text-[24px] font-urbanist">
                      You May Also Like
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={slideLeft}
                        disabled={isBeginning}
                        className={`${
                          isBeginning ? "opacity-30 pointer-events-none" : ""
                        }`}
                      >
                        <MoveLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={slideRight}
                        disabled={isEnd}
                        className={`${
                          isEnd ? "opacity-30 pointer-events-none" : ""
                        }`}
                      >
                        <MoveRight className="w-8 h-8" />
                      </button>
                    </div>
                  </div>

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    className="w-full"
                  >
                    {relatedProductsList.map((product, idx) => (
                      <SwiperSlide key={idx}>
                        <div
                          className="flex gap-10 items-start ps-12 justify-center"
                          onClick={() =>
                            navigate(`/productDetails/${product.id}`)
                          }
                        >
                          <img
                            src={product.productImg}
                            className="w-[60px] h-[100px] object-contain cursor-pointer"
                          />

                          <div>
                            <p
                              className="font-semibold text-md mb-1 leading-5 font-urbanist text-[#641026] cursor-pointer"
                              onClick={() => {
                                onClose();
                                navigate(`/productDetails/${product.id}`);
                              }}
                            >
                              {product.productName}
                            </p>
                            <p className="font-urbanist font-bold text-base text-[#0B0B0B]">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white px-6 pb-5 font-urbanist">
              <div className="grid grid-cols-3 border border-[#E5E5E5] rounded-md mb-5 overflow-hidden">
                <button
                  onClick={() => openSheet("instructions")}
                  className="flex justify-center items-center py-4 border-r border-[#E5E5E5]"
                >
                  <Clipboard className="w-6 h-6 text-[#565656]" />
                </button>

                <button
                  onClick={() => openSheet("shipping")}
                  className="flex justify-center items-center py-4 border-r border-[#E5E5E5]"
                >
                  <Truck className="w-6 h-6 text-[#565656]" />
                </button>

                <button
                  onClick={() => openSheet("coupon")}
                  className="flex justify-center items-center py-4"
                >
                  <Tag className="w-6 h-6 text-[#565656]" />
                </button>
              </div>

              <div className="flex justify-between pb-1">
                <span className="text-[#0B0B0B] font-semibold text-md">
                  Subtotal:
                </span>
                <span className="text-[#0B0B0B] font-semibold text-md">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between pb-2">
                <span className="text-[#0B0B0B] font-semibold text-md">
                  Total:
                </span>
                <span className="text-[#0B0B0B] font-semibold text-md">
                  ${total.toFixed(2)}
                </span>
              </div>

              <p className="font-urbanist font-semibold text-base text-[#565656] mb-6">
                Tax included and shipping calculated at checkout
              </p>

              <NavLink to="/checkout">
                <button
                  onClick={() => onClose()}
                  className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] cursor-pointer text-base font-semibold py-3 rounded-full"
                >
                  Checkout
                </button>
              </NavLink>

              <NavLink to="/cartDetails">
                <button
                  className="w-full border border-[#EED291] text-[#0B0B0B] text-base font-semibold cursor-pointer py-3 rounded-full mt-3"
                  onClick={() => onClose()}
                >
                  View Cart
                </button>
              </NavLink>
            </div>
          </>
        )}

        {activeSheet && (
          <div className="fixed inset-0 z-[1000000]" onClick={closeSheet}>
            <div className="absolute inset-0 bg-black/40" />

            <div
              className="absolute right-0 bottom-0 w-[360px] md:w-[410px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* INSTRUCTIONS SHEET */}
              {activeSheet === "instructions" && (
                <div className="w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto">
                  <SheetHeader
                    title="Order Special Instructions"
                    Icon={Clipboard}
                    onCloseSheet={closeSheet}
                  />

                  <div className="p-5">
                    <textarea
                      placeholder="Order special instructions"
                      className="w-full border border-[#E5E5E5] rounded-xl p-4 h-28 resize-none text-sm"
                    />

                    <div className="mt-5 space-y-3">
                      <button className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Save
                      </button>
                      <button className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSheet === "shipping" && (
                <div className="w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto">
                  <SheetHeader
                    title="Estimate Shipping Rates"
                    Icon={Truck}
                    onCloseSheet={closeSheet}
                  />

                  <div className="p-5 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">
                        Country/Region
                      </label>
                      <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">
                        State
                      </label>
                      <select className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4">
                        <option>Alabama</option>
                        <option>Alaska</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">
                        ZIP Code
                      </label>
                      <input
                        className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4"
                        placeholder="Postal code"
                      />
                    </div>

                    <div className="mt-3 space-y-3">
                      <button className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Calculate Shipping
                      </button>
                      <button className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSheet === "coupon" && (
                <div className="w-full bg-white rounded-t-xl shadow-xl max-h-[85vh] overflow-auto">
                  <SheetHeader
                    title="Add A Coupon"
                    Icon={Tag}
                    onCloseSheet={closeSheet}
                  />

                  <div className="p-5 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#0B0B0B]">
                        Coupon code
                      </label>
                      <input
                        className="w-full mt-2 border border-[#E5E5E5] rounded-xl py-3 px-4"
                        placeholder="Coupon code content"
                      />
                    </div>

                    <div className="mt-3 space-y-3">
                      <button className="w-full bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Save
                      </button>
                      <button className="w-full border border-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopover;
