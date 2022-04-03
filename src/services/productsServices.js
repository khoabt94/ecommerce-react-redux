import { API } from "../config";

export const productsServices = {
  get: () => {
    return fetch(API.baseUrl).then((res) => res.json());
  },
};
