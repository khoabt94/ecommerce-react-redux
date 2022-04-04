import { configureStore } from "@reduxjs/toolkit";
import { reducer as cart } from "../slice/cartSlice";
import { reducer as user } from "../slice/userSlice";
import { reducer as product } from "../slice/productSlice";

const rootReducer = {
  cart,
  user,
  product,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
