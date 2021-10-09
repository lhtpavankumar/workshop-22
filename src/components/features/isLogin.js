import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const isLoginSlice = createSlice({
  name: "isLogin",
  initialState: { value: initialStateValue },
  reducers: {
    settingLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { settingLogin } = isLoginSlice.actions;

export default isLoginSlice.reducer;
