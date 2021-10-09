import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const ageSlice = createSlice({
  name: "age",
  initialState: { value: initialStateValue },
  reducers: {
    settingAge: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { settingAge } = ageSlice.actions;

export default ageSlice.reducer;
