import { createSelector } from "@reduxjs/toolkit";

export const userSelector = (state) => state.user;
export const cartSelector = (state) => state.cart;
export const getProducts = (state) => state.product;
export const selectProducts = createSelector(getProducts, (data) => {
  // console.log(data);
  return data.data;
});
export const errorProducts = createSelector(
  getProducts,
  (data) => data.isError
);
export const loadingProducts = createSelector(
  getProducts,
  (data) => data.isLoading
);
