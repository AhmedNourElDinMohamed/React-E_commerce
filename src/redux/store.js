import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { cartSlice } from "./cartSlice";
import { counterSlice } from "./counterSlice";
console.log(counterSlice);
export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,

    addToCartStore: cartSlice.reducer,

    loginStore: authSlice.reducer,
  },
});
