import React from "react";
import { Minus, Plus, X, ShieldCheck, CircleX } from "lucide-react";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import relatedproduct1 from "../../assets/images/relatedproduct1.png";
import relatedproduct2 from "../../assets/images/relatedproduct2.png";
import verietyImg from "../../assets/images/variety.png";
import ProductsChild from "../products/productsChild";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity } from "../../redux/cart/cartSlice";

const CartDetails = () => {

    const relatedProductsList = useSelector(
    (state) => state.cart.relatedProducts
  );

    const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch()
  
  // const cartItems = [
  //   {
  //     image: product1,
  //     productName: "Bergdolt, Reif & Nett Reverse Riesling (Vegan)",
  //     price: 24.97,
  //     qty: 1,
  //   },
  //   {
  //     image: product2,
  //     productName: "Bergdolt, Reif & Nett Reverse Gewurztraminer",
  //     price: 25.38,
  //     qty: 1,
  //   },
  // ];

  // const relatedProductsList = [
  //   {
  //     productImg: relatedproduct1,
  //     productName: "Reverse Gewurztraminer Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$29.38",
  //     flavour: "Gewurztraminer",
  //   },
  //   {
  //     productImg: relatedproduct2,
  //     productName: "Reverse Rose (vegan) Dealcoholized",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$25.76",
  //     flavour: "Rose",
  //   },
  //   {
  //     productImg: secondtabproduct,
  //     productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
  //     variety: "Grape variety",
  //     varietylogo: verietyImg,
  //     price: "$26.97",
  //     flavour: "Riesling",
  //   },
  // ];

  const subTotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  const total = subTotal;
  console.log(subTotal)
  console.log(total)

  return (
    <>
      <div className="h-[320px] lg:h-[340px] xl:h-[240px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-[#0B0B0B] ">
            Home<span className="font-Poppins ms-1 me-1"> &gt;</span>Your Cart
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
            Product detail
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[95%] mx-auto pb-[55px] xl:pb-[100px] ">
          {/* ===================== HEADING ===================== */}
          <h1 className="text-center font-cormorant font-bold text-[48px] text-[#0B0B0B] my-10">
            YOUR CART
          </h1>

          {/* ===================== FREE SHIPPING BAR ===================== */}
          <div className="w-full border-t border-[#D69E2E]  py-4">
            <div className="flex items-center gap-3 px-3">
              <p className="text-[#0B0B0B] fonr-urbanist font-semibold text-md text-[#565656]">
                Only <span className="text-[#D69E2E]">$29.76</span> away from
                Free Shipping
              </p>
            </div>
          </div>

          {/* ===================== WARNING BOX ===================== */}
          <div className="w-full bg-[#E8C57F] mt-4 py-2 px-5 rounded-sm">
            <p className="font-urbanist text-md font-medium text-[#0B0B0B] text-center">
              Please, hurry! Someone has placed an order on one of the items you
              have in the cart. We'll keep it for you for{" "}
              <strong>37:43 minutes</strong>.
            </p>
          </div>

          {/* ===================== GRID LAYOUT ===================== */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-30 mt-10">
            {/* ================================= LEFT CART TABLE ================================= */}
            <div className="xl:col-span-2">
              {/* TABLE HEADER */}
              <table className="w-full border-collapse">
                <thead className="bg-[#F8F8F8]">
                  <tr className="text-left  border-[#E5E5E5]">
                    <th className="py-3 px-12 font-urbanist font-bold text-[#0B0B0B] text-sm">
                      Product
                    </th>
                    <th className="py-3 font-urbanist font-bold text-[#0B0B0B] text-sm">
                      Price
                    </th>
                    <th className="py-3 ps-4 font-urbanist font-bold text-[#0B0B0B] text-sm">
                      Quantity
                    </th>
                    <th className="py-3 pe-8 font-urbanist font-bold text-[#0B0B0B] text-sm">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((product, index) => (
                    <>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-6">
                          <div className="flex  items-center gap-4">
                            <CircleX />

                            <div className="border border-[#CCCCCC] py-2 px-5">
                              <img
                                src={product.productImg}
                                className="w-20 h-28 object-contain"
                                alt="product"
                              />
                            </div>

                            <div>
                              <p className="font-urbanist text-[#641026] font-semibold text-[18px] ">
                                {product.productName}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* PRICE */}
                        <td className="font-urbanist font-semibold text-[#0B0B0B] text-[15px]">
                          ${product.price}
                        </td>

                        {/* QUANTITY */}
                        <td>
                          <div className="flex items-center gap-3 border border-[#EED291] rounded-full px-5 py-2 w-fit">
                            <Minus size={16} className="cursor-pointer"  onClick={() => dispatch(increaseQuantity(product))}/>
                            <span className="font-semibold text-md">{product.quantity}</span>
                            <Plus size={16} className="cursor-pointer"  onClick={() => dispatch(increaseQuantity(product))} />
                          </div>
                        </td>

                        {/* TOTAL */}
                        <td className="font-urbanist font-semibold text-[#0B0B0B] text-[15px]">
                          ${total.toFixed(2)}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>

              {/* REMOVE / GIFT WRAP SECTION */}
              {/* <div className="flex items-center justify-between mt-4 py-4 border-b border-[#E5E5E5]">
                <button className="flex items-center gap-2 text-[#0B0B0B] text-[15px] font-urbanist">
                  <X size={18} /> REMOVE
                </button>

                <button className="flex items-center gap-2 text-[#0B0B0B] text-[15px] font-urbanist">
                  <span>DO YOU WANT A GIFT WRAP? ONLY FOR $10.00</span>
                  <span className="underline font-bold">ADD</span>
                </button>
              </div> */}

              {/* SPECIAL INSTRUCTIONS */}
              <div className="mt-6">
                <p className="font-urbanist font-semibold text-[15px] mb-2">
                  Additional Comments
                </p>

                <textarea
                  placeholder="Special Instruction For Seller..."
                  className="w-full h-[140px] border border-[#E5E5E5] rounded-xl p-4 text-sm resize-none"
                ></textarea>
              </div>

              {/* SECURE SHOPPING */}
              <div className="flex items-center gap-2 mt-5">
                <ShieldCheck className="text-[#0B0B0B]" size={18} />
                <span className="text-[#0B0B0B] text-[14px] font-urbanist">
                  Secure Shopping Guarantee
                </span>
              </div>
            </div>

            {/* ================================= RIGHT SUMMARY CARD ================================= */}
            <div className="border border-[#E5E5E5] rounded-md p-6">
              <div className="flex justify-between mb-3">
                <span className="font-urbanist font-bold text-[15px]">
                  Subtotal
                </span>
                <span className="font-urbanist font-bold text-[15px]">
                  $ 29.76
                </span>
              </div>

              {/* SHIPPING ESTIMATE */}
              <p className="font-urbanist font-semibold text-[14px] mt-5 mb-2">
                Get Shipping Estimate:
              </p>

              <select className="w-full border border-[#E5E5E5] py-2 rounded-md text-sm">
                <option>------</option>
                <option>USA</option>
                <option>Canada</option>
              </select>

              <input
                placeholder="Postal Code"
                className="w-full border border-[#E5E5E5] py-2 px-3 rounded-md mt-3 text-sm"
              />

              <button className="w-full mt-3 bg-[#EED291] text-[#0B0B0B] font-semibold py-3 rounded-full">
                CALCULATE SHIPPING
              </button>

              {/* COUPON */}
              <p className="font-urbanist font-semibold text-[14px] mt-6 mb-2">
                Coupon Code
              </p>

              <input
                placeholder="Enter Coupon Code"
                className="w-full border border-[#E5E5E5] py-2 px-3 rounded-md text-sm"
              />

              <p className="text-[12px] text-[#565656] mt-1">
                Coupon code will be applied on the checkout page
              </p>

              {/* TOTAL */}
              <div className="flex justify-between mt-5 pb-2">
                <span className="font-urbanist font-bold text-[16px]">
                  Total
                </span>
                <span className="font-urbanist font-bold text-[16px]">
                  $ 29.76
                </span>
              </div>

              <p className="text-[12px] text-[#565656] mb-6">
                Tax included and shipping calculated at checkout
              </p>

              <button className="w-full bg-[#EED291] border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full">
                PROCEED TO CHECKOUT
              </button>

              <button className="w-full border border-[#EED291] text-[#0B0B0B] text-base font-semibold py-3 rounded-full mt-3">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F8F8F8]">
        <div className="w-[95%] xl:w-[80%] mx-auto py-[55px] xl:py-[100px]">
          <div className="flex flex-col items-center gap-8 text-center w-full">
            <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase">
              Related Products
            </p>

            <div className="grid w-full gap-8 md:gap-8 xl:gap-10 grid-cols-2 md:grid-cols-3">
              {relatedProductsList.map((product, index) => (
                <ProductsChild key={index} product={product} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#EED291] rounded-full px-8 py-2.5 mt-6 font-urbanist font-semibold text-base text-[#0B0B0B] text-center ">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
