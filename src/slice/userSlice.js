import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    userRegister(state, action) {
      state.push(action.payload);
      // localStorage.setItem("userdata", state);
    },
  },
});

const combineActions = {
  ...actions,
};

export { combineActions as userActions, reducer };
