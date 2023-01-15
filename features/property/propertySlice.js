import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: {},
  installmentDataForModal: {},
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setPropertyTarget: (state, action) => {
      state.target = action.payload;
    },
    setInstallmentProperty: (state, action) => {
      state.installmentDataForModal = action.payload;
    },
  },
});

export const { setPropertyTarget , setInstallmentProperty } = propertySlice.actions;

export default propertySlice.reducer;
