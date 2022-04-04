import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "../../services/productApi";

const GET_PRODUCTS = "getProducts";

export const getProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (_, thunkAPI) => {
    try {
      const { data } = await productApi.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductsBuilder = (builder) => {
  const { pending, fulfilled, rejected } = getProducts;
  builder
    .addCase(pending, (state) => {
      Object.assign(state, { isLoading: true });
    })
    .addCase(fulfilled, (state, action) => {
      const data = action.payload;
      Object.assign(state, { data: data, isLoading: false });
    })
    .addCase(rejected, (state, action) => {
      Object.assign(state, { isError: true, isLoading: false });
    });
};
