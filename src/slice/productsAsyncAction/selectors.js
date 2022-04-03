import { createSelector } from "@reduxjs/toolkit";

const getProduct = (state) => {
  return state.products;
};

export const selectedProducts = createSelector(getProduct, (data) => data.data);

export const selectedProductsError = createSelector(
  getProduct,
  (data) => data.isError
);

export const selectedProductsLoading = createSelector(
  getProduct,
  (data) => data.isLoading
);
