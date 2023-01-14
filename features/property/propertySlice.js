import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: {},
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setPropertyTarget: (state, action) => {
      state.target = action.payload;
    },
  },
});

export const { setPropertyTarget } = propertySlice.actions;

export default propertySlice.reducer;
