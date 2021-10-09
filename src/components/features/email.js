import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const emailSlice = createSlice({
  name: "email",
  initialState: { value: initialStateValue },
  reducers: {
    settingEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { settingEmail } = emailSlice.actions;

export default emailSlice.reducer;
