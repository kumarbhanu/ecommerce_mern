import { createSlice } from "@reduxjs/toolkit";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const { type, payload } = action;
      const existingItem = state.cartItems.find((x) => x?._id === payload._id);
      if (existingItem) {
        //update existing item
        state.cartItems = state.cartItems.map((x) =>
          x._id === existingItem?._id ? payload : x
        );
      } else {
        //insert new item
        state.cartItems = [...state.cartItems, payload];
      }

      //calculate items price
      state.itemPrice = state.cartItems.reduce(
        (acc, item) => acc + item?.price * item?.qty,
        0
      );
      //shipping price
      state.shippingPrice = state.itemPrice > 100 ? 0 : 10;
      //calculate tax price (15%)
      state.taxPrice = Number(state.itemPrice * 0.15).toFixed(2);
      //calculate total price
      state.totalPrice = (
        Number(state.itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);
      localStorage.setItem("cart",JSON.stringify(state))
    },
  },
});
export const { addTocart}=cartSlice.actions
export default cartSlice.reducer;
