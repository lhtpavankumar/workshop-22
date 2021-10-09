import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const totalSlice = createSlice({
  name: "total",
  initialState: { value: initialStateValue },
  reducers: {
    settingTotal: (state, action) => {
      state.value = [...state.value, action.payload];
      //   state.value = action.payload;
    },
  },
});
export const { settingTotal } = totalSlice.actions;

export default totalSlice.reducer;
