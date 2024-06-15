import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
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

      return updateCart(state);
    },
    removeCart:(state,action)=>{
      state.cartItems=state.cartItems.filter(v=>v?._id!==action.payload)
      return updateCart(state)
    }
  },
});
export const { addTocart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
