import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const nameSlice = createSlice({
  name: "name",
  initialState: { value: initialStateValue },
  reducers: {
    settingName: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { settingName } = nameSlice.actions;

export default nameSlice.reducer;
