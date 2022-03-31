import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    userRegister(state, action) {
      state.push(action.payload);
      // localStorage.setItem("userdata", state);
    },
  },
});

const { actions, reducer } = userSlice;
export const { userRegister } = actions;
export default userSlice;
