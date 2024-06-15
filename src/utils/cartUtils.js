const addDecimal = (number) => {
  return (Math.random(number * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
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
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
