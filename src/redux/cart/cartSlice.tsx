import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import product7 from "../../assets/images/product7.png";
import product8 from "../../assets/images/product8.png";
import product9 from "../../assets/images/product9.png";
import product10 from "../../assets/images/product10.png";
import product11 from "../../assets/images/product11.png";
import product12 from "../../assets/images/product12.png";
import product13 from "../../assets/images/product13.png";
import product14 from "../../assets/images/product14.png";
import product15 from "../../assets/images/product15.png";
import secondtabproduct from "../../assets/images/secondtabproduct.png";
import thirdtabproduct from "../../assets/images/thirdtabproduct.png";
import fourthtabproduct1 from "../../assets/images/fourthtabproduct1.png";
import fourthtabproduct2 from "../../assets/images/fourthtabproduct2.png";
import fifthtabproduct1 from "../../assets/images/fifthtabproduct1.png";
import fifthtabproduct2 from "../../assets/images/fifthtabproduct2.png";
import fifthtabproduct3 from "../../assets/images/fifthtabproduct3.png";
import fifthtabproduct4 from "../../assets/images/fifthtabproduct4.png";
import fifthtabproduct5 from "../../assets/images/fifthtabproduct5.png";
import relatedproduct1 from "../../assets/images/relatedproduct1.png";
import relatedproduct2 from "../../assets/images/relatedproduct2.png";
import verietyImg from "../../assets/images/variety.png";
import productmedal from "../../assets/images/productmedal.png";
import PopularProducts from "../../components/popularPropducts/PopularProducts";
import { toast } from "react-toastify";

const randomSize = () => {
  const arr = ["Small", "Medium", "Large", "Extra Large"];
  return arr[Math.floor(Math.random() * arr.length)];
};

const initialState = {


    productsDetails : [
          {
            id: 1,
            type: "Bergdolt, Reif & Nett",
            productImg: product1,
            productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 29.76,
            medal: productmedal,
            flavour: "Merlot",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },
          {
            id: 2,
            type: "Bergdolt, Reif & Nett",
            productImg: product2,
            productName:
              "Bergdolt, Reif & Nett Breakaway Pinot Noir Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 29.38,
            flavour: "Pinot Noir",
            size: randomSize(),
            inStock: false,
            categoryType: "Popular",
          },
          {
            id: 3,
            type: "Château Clos de Boüard",
            productImg: product3,
            productName: "Reverse Sauvignon Blanc Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.76,
            flavour: "Sauvignon Blanc",
            size: randomSize(),
            inStock: true,
            categoryType: "New Arrivals",
          },
          {
            id: 4,
            type: "Château Clos de Boüard",
            productImg: product4,
            productName: "Reverse Gewurztraminer Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 29.38,
            flavour: "Gewurztraminer",
            size: randomSize(),
            inStock: true,
            categoryType: "Popular",
          },
          {
            id: 5,
            type: "Château Clos de Boüard",
            productImg: product5,
            productName: "Reverse Rosé Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.76,
            flavour: "Rosé",
            size: randomSize(),
            inStock: false,
            categoryType: "Featured",
          },
          {
            id: 6,
            type: "Château Clos de Boüard",
            productImg: product6,
            productName: "Reverse Riesling Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 27.16,
            flavour: "Riesling",
            size: randomSize(),
            inStock: true,
            categoryType: "New Arrivals",
          },
    
          {
            id: 7,
            type: "Lamm Jung",
            productImg: secondtabproduct,
            productName: "Lamm-Jung Riesling Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 26.97,
            medal: productmedal,
            flavour: "Riesling",
            size: randomSize(),
            inStock: true,
            categoryType: "Popular",
          },
    
          {
            id: 8,
            type: "KvD Strauch Sektmanufaktur",
            productImg: thirdtabproduct,
            productName: "Rouge Pur Alkoholfrei",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 28.91,
            medal: productmedal,
            flavour: "Rouge Pur",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },
    
          {
            id: 9,
            type: "Château Clos de Boüard",
            productImg: fourthtabproduct1,
            productName: "Sauvignon Blanc Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.61,
            flavour: "Sauvignon Blanc",
            size: randomSize(),
            inStock: false,
            categoryType: "New Arrivals",
          },
          {
            id: 10,
            type: "Château Clos de Boüard",
            productImg: fourthtabproduct2,
            productName: "Rosé Sparkling Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 28.19,
            flavour: "Pinot Noir",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },
    
          {
            id: 11,
            type: "KvD Strauch Sektmanufaktur",
            productImg: fifthtabproduct1,
            productName: "Sauvignon Blanc (vegan)",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 33.61,
            medal: productmedal,
            flavour: "Sauvignon Blanc",
            size: randomSize(),
            inStock: true,
            categoryType: "Popular",
          },
          {
            id: 12,
            type: "KvD Strauch Sektmanufaktur",
            productImg: fifthtabproduct2,
            productName: "Rosé Sparkling",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 28.19,
            medal: productmedal,
            flavour: "Pinot Noir",
            size: randomSize(),
            inStock: true,
            categoryType: "New Arrivals",
          },
          {
            id: 13,
            type: "KvD Strauch Sektmanufaktur",
            productImg: fifthtabproduct3,
            productName: "Rosé Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.61,
            flavour: "Rosé",
            size: randomSize(),
            inStock: false,
            categoryType: "Featured",
          },
          {
            id: 14,
            type: "KvD Strauch Sektmanufaktur",
            productImg: fifthtabproduct4,
            productName: "Pinot Grigio Dealalcoolized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.61,
            flavour: "Pinot Grigio",
            size: randomSize(),
            inStock: true,
            categoryType: "Popular",
          },
          {
            id: 15,
            type: "KvD Strauch Sektmanufaktur",
            productImg: fifthtabproduct5,
            productName: "Blanc de Blancs Sparkling",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 28.19,
            flavour: "Pinot Noir",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },
    
          {
            id: 16,
            productImg: relatedproduct1,
            productName: "Reverse Gewurztraminer Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 29.38,
            flavour: "Gewurztraminer",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },
          {
            id: 17,
            productImg: relatedproduct2,
            productName: "Reverse Rose (vegan) Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.76,
            flavour: "Rose",
            size: randomSize(),
            inStock: true,
            categoryType: "Popular",
          },

          {
            id: 18,
            type: "Bergdolt, Reif & Nett",
            productImg: product2,
            productName:
              "Bergdolt, Reif & Nett Reverse Sauvignon Blanc  (vegan) Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.76,
            flavour: "Sauvignon Blanc",
            size: randomSize(),
            inStock: false,
            categoryType: "Popular",
          },


                 {
            id: 18,
            type: "Bergdolt, Reif & Nett",
            productImg: product7,
            productName:
              "Bergdolt, Reif & Nett Reverse Sauvignon Blanc  (vegan) Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 25.76,
            flavour: "Sauvignon Blanc",
            size: randomSize(),
            inStock: false,
            categoryType: "Popular",
          },


                 {
            id: 19,
            type: "Bergdolt, Reif & Nett",
            productImg: product8,
            productName:
              "Bergdolt, Reif & Nett Reverse Gewurztraminer Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price:  29.38,
            flavour: "Gewurztraminer",
            size: randomSize(),
            inStock: false,
            categoryType: "Popular",
          },


                      {
            id: 20,
            type: "Bergdolt, Reif & Nett",
            productImg: product9,
            productName:
              "Bergdolt, Reif & Nett Reverse Rose (vegan) Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price:  25.76,
            flavour: "Rose",
            size: randomSize(),
            inStock: false,
            categoryType: "Popular",
          },

                           {
            id: 21,
            type: "Bergdolt, Reif & Nett",
            productImg: product10,
            productName:
              "Bergdolt, Reif & Nett Reverse Riesling (vegan) Dealcoholized",
            variety: "Grape variety",
            varietylogo: verietyImg,
            price: 27.16,
            flavour: "Riesling",
            size: randomSize(),
            inStock: false,
            categoryType: "Popular",
          },



          {
            id: 22,
            type: "Matthias Anton",
            productImg: product11,
            productName: "Matthias Anton Blanc de Blancs sparkling (vegan) Dealcoholized",
            variety: "Grape variety",
            price:  27.19,
            flavour: "Riesling",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },

          
          {
            id: 23,
            type: "Matthias Anton",
            productImg: product12,
            productName: "Matthias Anton Pinot Grigio (vegan) - Dealcoholized",
            variety: "Grape variety",
            price: 25.61,
            flavour: "Pinot Grigio",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },

          
          {
            id: 24,
            type: "Matthias Anton",
            productImg: product13,
            productName: "Matthias Anton Rosé (vegan) Dealcoholized",
            variety: "Grape variety",
            price:  25.61,
            flavour: "Pinot Noir",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },

          
          {
            id: 25,
            type: "Matthias Anton",
            productImg: product14,
            productName: "Matthias Anton Rosé Sparkling (vegan) Dealcoholized",
            variety: "Grape variety",
            price: 28.19,
            flavour: "Pinot Noir",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },

          
          {
            id: 26,
            type: "Matthias Anton",
            productImg: product15,
            productName: "Matthias Anton Sauvignon Blanc (vegan) Dealcoholized",
            variety: "Grape variety",
            price:  25.61,
            flavour: "Sauvignon Blanc",
            size: randomSize(),
            inStock: true,
            categoryType: "Featured",
          },

        ],

        relatedProducts:    [{
              id:16,
              productImg: relatedproduct1,
              productName: "Reverse Gewurztraminer Dealcoholized",
              variety: "Grape variety",
              varietylogo: verietyImg,
              price: 29.38,
              flavour: "Gewurztraminer",
            },
            {
              id:17,
              productImg: relatedproduct2,
              productName: "Reverse Rose (vegan) Dealcoholized",
              variety: "Grape variety",
              varietylogo: verietyImg,
              price: 25.76,
              flavour: "Rose",
            },
            {
              id:7,
              productImg: secondtabproduct,
              productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
              variety: "Grape variety",
              varietylogo: verietyImg,
              price: 26.97,
              flavour: "Riesling",
            },
          ],



          popularProducts: [
              {
                   id: 7,
                type: "Lamm Jung",
                productImg: secondtabproduct,
                productName: "Lamm-Jung Riesling Dealcoholized (Vegan)",
                variety: "Grape variety",
                varietylogo: verietyImg,
                price: 26.97,
                flavour: "Riesling",
              },
              {
                  id: 1,
                type: "Bergdolt, Reif & Nett",
                productImg: product1,
                productName: "Bergdolt, Reif & Nett Breakaway Merlot Dealalcoolized",
                variety: "Grape variety",
                varietylogo: verietyImg,
                price: 29.76,
                medal: productmedal,
                flavour: "Merlot",
              },
              {
                id: 8,
                type: "KvD Strauch Sektmanufaktur",
                productImg: thirdtabproduct,
                productName:
                  "KvD Strauch Sektmanufaktur Rouge Pur Alkoholfrei Dealalcoolized",
                variety: "Grape variety",
                varietylogo: verietyImg,
                price: 28.91,
                flavour: "Rouge Pur",
              },
            ],


         cartItems: [],
         isDrawerOpen: false,


}


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
  addToCart: (state, action) => {
  const item = action.payload;
  const existingItem = state.cartItems.find(i => i.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
    toast.info("Item quantity updated in cart!", {
      style: { background: "#EED291", color: "#0B0B0B", fontWeight: 600 }
    });
  } else {
    state.cartItems.push({ ...item, quantity: 1 });
    toast.success("Added to cart", {
      style: { background: "#EED291", color: "#0B0B0B", fontWeight: 600 }
    });
  }
},  
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((ele) => ele.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((ele) => ele.id === action.payload.id);
      if (item) {
        item.quantity += 1;
          toast.info("Item quantity updated in cart!", {
      style: { background: "#FFF4D0", color: "#0B0B0B" }
    });
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((ele) => ele.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
            toast.info("Item quantity decreased in cart!", {
      style: { background: "#FFF4D0", color: "#0B0B0B" }
    });
      } else if (item && item.quantity === 1) {
        state.cartItems = state.cartItems.filter((ele) => ele.id !== action.payload);
      }
    },

    setDrawerOpen:(state, action) =>  {
    state.isDrawerOpen = action.payload;
}
  },


});

export const { addToCart, removeFromCart, setDrawerOpen, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;