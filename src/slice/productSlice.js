import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductsBuilder,
} from "./productsAsyncAction/getProducts";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const { actions, reducer } = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getProductsBuilder(builder);
  },
});

const combineActions = {
  ...actions,
  getProducts,
};

export { combineActions as productsAction, reducer };
