export const API = {
  baseUrl: "https://fakestoreapi.com/products",
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
