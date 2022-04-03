import { createAsyncThunk, current } from "@reduxjs/toolkit";
import { productsServices } from "../../services/productsServices";

const GET_PRODUCTS = "getProducts";

// products/getProducts
export const getProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (_, thunkAPI) => {
    try {
      const res = await productsServices.get();

      return { data: res };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductsBuilder = (builder) => {
  const { pending, fulfilled, rejected } = getProducts;
  builder
    .addCase(pending, (state) => {
      // loading
      Object.assign(state, { isLoading: true });

    })
    .addCase(fulfilled, (state, action) => {
      const { data } = action.payload;
      Object.assign(state, { data: data, isLoading: false });
    })
    .addCase(rejected, (state, action) => {
      // error mess

      Object.assign(state, { isError: true, isLoading: false });
     
    });
};