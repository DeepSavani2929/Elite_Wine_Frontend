import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
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
            type: "Bergdolt, Reif & Nett",
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
            type: "Bergdolt, Reif & Nett",
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
            type: "Bergdolt, Reif & Nett",
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
            type: "Bergdolt, Reif & Nett",
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
            type: "Matthias Anton",
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
            type: "Matthias Anton",
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
            type: "Matthias Anton",
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
            type: "Matthias Anton",
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
            type: "Matthias Anton",
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


}


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
       const item = action.payload;
      const existingItem = state.cartItems.find((ele) => ele.id === item.id);
      if (existingItem) {
        return
      }
      else{
          state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((ele) => ele.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((ele) => ele.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((ele) => ele.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.cartItems = state.cartItems.filter((ele) => ele.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;