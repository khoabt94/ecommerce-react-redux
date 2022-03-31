import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
// import userSlice from "../slice/userSlice";

const rootReducer = {
  cart: cartSlice.reducer,
  // user: userSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
