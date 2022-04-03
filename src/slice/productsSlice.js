import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts, // async action
  getProductsBuilder, // 
} from "./productsAsyncAction/getProducts";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const { actions, reducer } = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // async here
    getProductsBuilder(builder);
  },
});

const combineActions = {
  ...actions,
  getProducts,
  
};

export { combineActions as productsActions, reducer };
