import { createSlice } from "@reduxjs/toolkit";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const initialState = {


  blogDetails : [
    {
      blogImg: blog1,
      blogTitle:
        "“How non-alcoholic wine is made without losing the taste” Gentle Dealcoholization: How LTVD and Aroma Recovery Work",
      blogDesc:
        "For a long time, non-alcoholic wines carried a reputation for being overly sweet, flat, or marked by cooked flavors......",
    },
    {
      blogImg: blog2,
      blogTitle:
        "The Perfect Non-Alcoholic Wines for Weddings, Brunches, Picnics, Family Celebrations, and Nights Out",
      blogDesc:
        "Wine has always been part of life’s most memorable moments — toasting newlyweds, sharing a Sunday brunch, or opening a bottle.....",
    },
    {
      blogImg: blog3,
      blogTitle: "Hosting a Dinner Party with Wine Pairings for Everyone",
      blogDesc:
        "There’s something magical about gathering friends and family around the table. The laughter, the conversation, the aroma of home-cooked dishes — and of course, the wine......",
    },
  ];


}


export const blogSlice = createSlice({
  name: "blog",
  initialState,
  
});


export default blogSlice.reducer;