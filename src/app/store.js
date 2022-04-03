import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
import { reducer as user } from "../slice/userSlice";
import { reducer as products } from "../slice/productsSlice";

const rootReducer = {
  cart: cartSlice.reducer,
  user,
  products
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
