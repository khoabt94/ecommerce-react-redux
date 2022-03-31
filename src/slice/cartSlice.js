import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const addIndex = state.findIndex((el) => el.id === action.payload.id);
      if (addIndex === -1) state.push(action.payload);
      else state[addIndex].quantity += 1;
    },
    increaseItem(state, action) {
      const increaseIndex = state.findIndex((el) => el.id === action.payload);
      state[increaseIndex].quantity += 1;
    },
    decreaseItem(state, action) {
      const decreaseIndex = state.findIndex((el) => el.id === action.payload);
      if (state[decreaseIndex].quantity === 1) state.splice(decreaseIndex, 1);
      else state[decreaseIndex].quantity -= 1;
    },
    clearCart(state, action) {
      state.splice(0);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, increaseItem, decreaseItem, clearCart } = actions;
export default cartSlice;
