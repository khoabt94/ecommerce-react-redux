import { API } from "../config";
import { axiosClient } from "./axiosClient";

export const productApi = {
  get() {
    return axiosClient.get(API.baseUrl);
  },
};
