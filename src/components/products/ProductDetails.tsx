import { Heart, Minus, Plus } from "lucide-react";
import product from "../../assets/images/product.png";
import productDetails1 from "../../assets/images/productDetails1.png";
import productDetails2 from "../../assets/images/productDetails2.png";
import productDetails3 from "../../assets/images/productDetails3.png";
import productDetails4 from "../../assets/images/productDetails4.png";
import productDetails5 from "../../assets/images/productDetails5.png";
import share from "../../assets/images/share.png";
import paymentcard from "../../assets/images/paymentcard.png";
import shipping1 from "../../assets/images/shipping1.png";
import shipping2 from "../../assets/images/shipping2.png";
import { useEffect, useState } from "react";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import relatedproduct1 from "../../assets/images/relatedproduct1.png";
import relatedproduct2 from "../../assets/images/relatedproduct2.png";
import verietyImg from "../../assets/images/variety.png";
import ProductsChild from "./productsChild";

const ProductDetails = () => {

  const [activeTab, setActiveTab] = useState("description");
  const [modalContent, setModalContent] = useState(null); // for mobile modal

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "shipping", label: "Shipping & Return" },
  ];

  const openModal = (id) => {
    setModalContent(id);
    document.body.style.overflow = "hidden"; // prevent scroll behind modal
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = "auto";
  };


    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && modalContent) {
        closeModal();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [modalContent]);


  const relatedProductsList = [

         {

         productImg: relatedproduct1,
         productName: "Reverse Gewurztraminer Dealcoholized",
         variety: "Grape variety",
         varietylogo: verietyImg,
         price: "$29.38",
         flavour: "Gewurztraminer",
       },

           {
   
         productImg: relatedproduct2,
         productName: "Reverse Rose (vegan) Dealcoholized",
         variety: "Grape variety",
         varietylogo: verietyImg,
         price: "$25.76",
         flavour: "Rose",
       },

       {
         productImg: secondtabproduct,
         productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
         variety: "Grape variety",
         varietylogo: verietyImg,
         price: "$26.97",
         flavour: "Riesling",
       },


  ]

  return (
    <>
      <div className="bg-[url('images/productDetailsImg.png')]  h-[320px] lg:h-[340px] xl:h-[400px] relative top-0 bg-cover bg-center ">
        <div className="absolute z-50 ps-3 md:ps-6 lg:ps-7 xl:ps-12 flex flex-col gap-1 mt-50 xl:mt-62 w-[95%] xl:w-[80%] mx-auto">
          <p className="font-urbanist font-semibold text-base text-[#FFFFFF] ">
            Home <span className="font-Poppins">&gt; </span>Shop{" "}
            <span className="font-Poppins"> &gt;</span> Product Detail
          </p>
          <p className="font-cormorant font-bold text-[28px] md:text-[34px] lg:text-[48px] uppercase text-[#FFFFFF]">
            Product detail
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[95%]  mx-auto ">

          <div className="flex flex-col py-[55px] xl:py-[100px] md:flex-row gap-6 xl:gap-18 justify-between md:items-start">
            <div className="w-full md:flex-1 border border-[#CCCCCC] h-[849px] py-5">
              <img
                  src={product}
                  alt=""
                className="object-contain object-center w-full h-[788px]"
              />
            </div>

            <div className="flex flex-col gap-1 xl:gap-3 w-full md:flex-1">
              <div className="flex flex-col gap-1 xl:gap-2">
                <p className="font-cormorant font-semibold text-[24px] lg:text-[36px] text-[#641026]">
                  Bergdolt, Reif & Nett Breakaway Merlot Dealcoholized
                </p>
                <p className="font-urbanist font-medium text-md text-[#0B0B0B] pb-3">
                  <span className="capitalize ">De</span>-
                  <span>Alcoholized</span>
                </p>
                <p className="font-urbanist font-bold text-2xl text-[#0B0B0B]">
                  $ 29.76
                </p>
              </div>

              <div className="w-full  xl:max-w-[611px] flex flex-col gap-6 mt-3">
                <div className="flex flex-col md:flex-row flex-wrap lg:gap-x-2 lg:gap-x-14 xl:gap-x-40 gap-y-2 md:gap-y-4">
                  <div className="gap-2 lg:gap-4 flex items-center">
                    <img
                      src={productDetails1}
                      className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]"
                      alt=""
                    />
                    <p className="flex ">
                      <span className="text-[#641026] font-urbanist font-semibold text-sm md:text-base lg:text-md capitalize">
                        Alcohol
                      </span>
                      <p className="text-[#0B0B0B] text-sm md:text-base">&lt; 0.5% abv</p>
                    </p>
                  </div>

                  <div className="gap-2 lg:gap-4 flex items-center ms-0 lg:ms-3 xl:ms-3">
                    <img
                      src={productDetails2}
                      className=" w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]"
                      alt=""
                    />
                    <p className="flex gap-1 ">
                      <span className="text-[#641026] font-urbanist font-semibold text-sm md:text-base lg:text-md capitalize">
                        Residual Sugar
                      </span>
                      <p className="text-[#0B0B0B] text-sm md:text-base">20.9g/l</p>
                    </p>
                  </div>

                  <div className=" gap-2 lg:gap-4 flex items-center">
                    <img
                      src={productDetails3}
                      className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]"
                      alt=""
                    />
                    <p className="flex gap-1">
                      <span className="text-[#641026] font-urbanist font-semibold text-sm md:text-base lg:text-md capitalize">
                        Grap Variety
                      </span>
                      <p className="text-[#0B0B0B] text-sm md:text-base">Mertol</p>
                    </p>
                  </div>

                  <div className=" gap-2 lg:gap-4 flex items-center">
                    <img
                      src={productDetails4}
                      className=" w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]"
                      alt=""
                    />
                    <p className="flex gap-1 items-start pt-0.5">
                      <span className="text-[#641026] font-urbanist font-semibold text-sm md:text-base lg:text-md capitalize">
                        Total Acidity
                      </span>
                      <p className="text-[#0B0B0B] text-sm md:text-base">5.5g/l</p>
                    </p>
                  </div>

                  <div className="gap-2 lg:gap-4 flex items-center">
                    <img
                      src={productDetails5}
                      className=" w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px]"
                      alt=""
                    />
                    <p className="flex gap-1 ">
                      <span className="text-[#641026] font-urbanist font-semibold text-sm md:text-base lg:text-md capitalize">
                        Maturation
                      </span>
                      <p className="text-[#0B0B0B] text-sm md:text-base"> in Wooden Barrels</p>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3">
                <p className="font-urbanist text-sm  md:text-base lg:text-md ">
                  <span className="text-[#641026] font-semibold pe-1">
                    Sensory Characteristics
                  </span>
                  This merlot presents a deep, appealing color that is nearly
                  indistinguishable From a conventional red wine. The nose
                  reveals a spicy-fruity bouquet with notes of dried berries and
                  a Hint of red pepper.
                </p>

                <p className="font-urbanist  text-sm  md:text-base lg:text-md  ">
                  <span className="text-[#641026] font-semibold pe-1">
                    Tasting Notes
                  </span>
                  A smooth, fruit-driven merlot with deep notes of dark berries,
                  plum, and a hint of spice.On the palate, it's soft and
                  rounded, with gentle tannins and a pleasantly dry finish.A
                  refined and full-bodied red - without the alcohol.
                </p>

                <p className="text-[#641026] font-urbanist font-semibold  text-sm  md:text-base lg:text-md  ">
                  Serving Suggestions
                </p>

                <ul className="flex flex-col gap-1 font-urbanist font-regular text-sm  md:text-base lg:text-md  text-[#0B0B0B] ps-4 mb-2 list-disc list-inside">
                  <li>Best enjoyed slightly chilled at 14-16°C / 57.2-59°F.</li>
                  <li>
                    Pair with roasted vegetables, grilled dishes, or hearty
                    pasta
                  </li>
                  <li>
                    Perfect for mindful sipping, dinners without compromise, or
                    casual evenings
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <p className="font-urbanist text-[#0B0B0B] text-sm  md:text-base lg:text-md ">
                    <span className="text-[#641026] font-semibold">
                      Serving temperature
                    </span>{" "}
                    10°-12° c
                  </p>
                  <p className="font-urbanist text-[#0B0B0B]  text-sm  md:text-base lg:text-md ">
                    <span className="text-[#641026] font-semibold">
                      Bottle Size
                    </span>{" "}
                    0.75l / 25.4 oz
                  </p>
                  <p className="font-urbanist text-[#0B0B0B] text-sm  md:text-base lg:text-md ">
                    <span className="text-[#641026] font-semibold">
                      Made in Germany
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 font-urbanist">
                <p className="font-semibold text-md text-[#0B0B0B]">Quantity</p>
                <button className="flex items-center gap-7 px-6 py-1.5 font-semibold rounded-full border border-[#EED291] w-fit">
                  <Minus className="w-4 h-4 text-[#0B0B0B]" />
                  <p className="text-[#0B0B0B] font-semibold text-xl leding-[140%]">
                    1
                  </p>

                  <Plus className="w-4 h-4 text-[#0B0B0B]" />
                </button>

                <div className="flex gap-4 items-center ">
                  <button className="font-urbanist font-semibold text-base text-[#0B0B0B] bg-[#EED291] w-full rounded-full py-3 ">
                    BUY NOW
                  </button>
                  <div className="w-12 h-11 flex items-center justify-center rounded-full bg-[#EED291]">
                    <Heart className="w-5 h-5 text-[#0B0B0B]" />
                  </div>

                  <div>
                    <img src={share} className="w-6 h-6" alt="" />
                  </div>
                </div>

                <button className="font-urbanist font-semibold text-base border border-[#EED291] text-[#0B0B0B] bg-transparent w-full rounded-full py-2.5 mb-2">
                  BUY IT NOW
                </button>

                <div>
                  <img src={paymentcard} alt="" className="h-[31px] " />
                </div>

                <div className="flex flex-col font-[urbanist] font-medium gap-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={shipping1}
                      className="w-[40px] h-[40px]  "
                      alt=""
                    />
                    <p className="text-[#565656] text-md">
                      Flat Fee $15 nationwide for 3-bottle bundles
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img
                      src={shipping2}
                      className="w-[40px] h-[40px]  "
                      alt=""
                    />
                    <p className="text-[#565656] text-md">
                      Free shipping at $99+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* shipping Tab view */}
           
 <div>
      {/* ===================== Desktop Tabs ===================== */}
      <div className="hidden md:block">
        <div className="w-full border-b flex justify-center border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 pb-5 text-md text-urbanist font-semibold cursor-pointer  ${
                activeTab === tab.id
                  ? "border-b-2 border-black text-black"
                  : "text-[#0B0B0B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 text-md text-gray-700 leading-relaxed font-urbanist font-semibold">
          {activeTab === "description" && (
            <p>
              <strong>Sensorik:</strong> This merlot presents a deep, appealing
              color that is nearly indistinguishable from a conventional red
              wine. The nose reveals a spicy-fruity bouquet with notes of dried
              berries and a hint of red pepper. On the palate, it is juicy with
              cherry-like flavors supported by vibrant acidity. The body remains
              lean and completely free of tannins. The finish is smooth and
              well-rounded — also enjoyable lightly chilled in summer. <br />– A
              fitting companion to salads, picnics, or mild cheeses.
            </p>
          )}

          {activeTab === "additional" && (
            <div>
              <h3 className="font-semibold mb-2">Product Specifications</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Volume: 750ml</li>
                <li>Alcohol Content: 13.5%</li>
                <li>Serving Temperature: 16–18°C</li>
                <li>Closure Type: Natural Cork</li>
              </ul>
              <h3 className="font-semibold mb-2">Storage Instructions</h3>
              <p>
                Store in a cool, dark place away from direct sunlight. Best
                consumed within 2 years of purchase for optimal freshness.
              </p>
            </div>
          )}

          {activeTab === "shipping" && (
            <div>
              <h3 className="font-semibold mb-2">Returns Policy</h3>
              <p className="mb-4">
                You may return most new, unopened items within 30 days of
                delivery for a full refund. We'll also pay the return shipping
                costs if the return is a result of our error (you received an
                incorrect or defective item, etc.).
              </p>
              <p className="mb-4">
                You should expect to receive your refund within four weeks of
                giving your package to the return shipper; however, in many
                cases you will receive a refund more quickly.
              </p>
              <p>
                If you need to return an item, simply login to your account,
                view your order, and click the "Return Item(s)" button. We'll
                notify you via e-mail once we've processed the returned item.
              </p>

              <h3 className="font-semibold mb-2 mt-5">Shipping</h3>

              <p className="mb-4">
                We can ship to virtually any address in the world. Note that
                there are restrictions on some products, and some products
                cannot be shipped to international destinations.
              </p>
              <p className="mb-4">
                When you place an order, we will estimate shipping and delivery
                dates for you based on the availability of your items and the
                shipping options you choose. Depending on the shipping provider
                you choose, shipping date estimates may appear on the shipping
                quotes page.
              </p>
              <p>
                Please also note that the shipping rates for many items we sell
                are weight-based. The weight of any such item can be found on
                its detail page. To reflect the policies of the shipping
                companies we use, all weights will be rounded up to the next
                full pound.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ===================== Mobile View ===================== */}
      <div className="block md:hidden space-y-2">
        {tabs.map((tab) => (
          <div key={tab.id} className="border-b border-gray-200">
            <button
              onClick={() => openModal(tab.id)}
              className="flex justify-between items-center w-full py-3 text-base text-urbanist font-semibold text-left"
            >
              <span>{tab.label}</span>
              <span className="text-2xl">›</span>
            </button>
          </div>
        ))}
      </div>

      {/* ===================== Mobile Modal ===================== */}
      {modalContent && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto font-urbanist">
          <div className="flex justify-between items-center px-4 py-1.5 border-b border-gray-300 sticky top-0 bg-[#eed291]">
            <h2 className="text-lg font-medium uppercase font-urbanist">
              {modalContent === "description" && "Description"}
              {modalContent === "additional" && "Additional Information"}
              {modalContent === "shipping" && "Shipping & Return"}
            </h2>
            <button onClick={closeModal} className="text-4xl pb-2 font-light">
              ×
            </button>
          </div>

          <div className="p-5 text-sm text-gray-700 leading-relaxed">
            {modalContent === "description" && (
              <>
                <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">Origin & Winery</h3>
                <p className="mb-4">
                  Produced by Weingut Lamm-Jung KG, located in Eltville am Rhein
                  at the heart of the Rheingau — a historic region renowned for
                  Riesling. The estate follows sustainable viticulture and
                  specializes in varietal clarity.
                </p>
                <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">Character</h3>
                <p>
                  Classic Riesling notes of citrus and stone fruits. The wine
                  shows fruit-driven freshness with a charming residual
                  sweetness, delivering balance and easy drinkability. The
                  vibrant acidity keeps the palate lively, while the gentle
                  sweetness adds charm and approachability.
                </p>
              </>
            )}

            {modalContent === "additional" && (
              <>
                <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]  ">Product Specifications</h3>
                <ul className="list-disc list-inside mb-4">
                  <li>Volume: 750ml</li>
                  <li>Alcohol Content: 13.5%</li>
                  <li>Serving Temperature: 16–18°C</li>
                  <li>Closure Type: Natural Cork</li>
                </ul>
                <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">Storage Instructions</h3>
                <p className="mb-4">
                  Store in a cool, dark place away from direct sunlight. Best
                  consumed within 2 years of purchase for optimal freshness.
                </p>
                <h3 className="font-semibold mb-4 text-xl text-[#0b0b0b]">Tasting Notes</h3>
                <p>
                  A medium-bodied red wine with a pleasant mix of cherry, plum,
                  and a touch of vanilla oak, creating a balanced and smooth
                  profile perfect for casual dinners.
                </p>
              </>
            )}

            {modalContent === "shipping" && (
              <>
                <h3 className="font-semibold text-xl text-[#0b0b0b] mb-4">Returns Policy</h3>
                <p className="mb-4">
                  You may return most new, unopened items within 30 days of
                  delivery for a full refund. We'll also pay the return shipping
                  costs if the return is a result of our error (you received an
                  incorrect or defective item, etc.).
                </p>
                <p className="mb-4">
                  You should expect to receive your refund within four weeks of
                  giving your package to the return shipper; however, in many
                  cases you will receive a refund more quickly.
                </p>
                <p>
                  If you need to return an item, simply login to your account,
                  view your order, and click the "Return Item(s)" button. We'll
                  notify you via e-mail once we've processed the returned item.
                </p>

                <h3 className="font-semibold mb-4 mt-5 text-xl text-[#0b0b0b]">Shipping</h3>

                <p className="mb-4">
                  We can ship to virtually any address in the world. Note that
                  there are restrictions on some products, and some products
                  cannot be shipped to international destinations.
                </p>
                <p className="mb-4">
                  When you place an order, we will estimate shipping and
                  delivery dates for you based on the availability of your items
                  and the shipping options you choose. Depending on the shipping
                  provider you choose, shipping date estimates may appear on the
                  shipping quotes page.
                </p>
                <p>
                  Please also note that the shipping rates for many items we
                  sell are weight-based. The weight of any such item can be
                  found on its detail page. To reflect the policies of the
                  shipping companies we use, all weights will be rounded up to
                  the next full pound.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>


    <div className="py-[55px] xl:py-[100px]">
         <div className="flex flex-col items-center justify-between gap-8 text-center w-full">
              <p className="font-cormorant font-bold text-[28px] lg:text-[36px] uppercase leading-tight">
                Related Products
              </p>


               <div className="grid w-full gap-8 md:gap-8 xl:gap-10  grid-cols-2 md:grid-cols-3 transition-all duration-500">
                {relatedProductsList.map((product, index) => (
                  <ProductsChild key={index} product={product} />
                ))}
              </div>
         </div>
    </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
