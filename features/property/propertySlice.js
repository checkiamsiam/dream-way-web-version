import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: {},
  installmentDataForModal: {},
  locationPageData: {},
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
    setLocationPageData: (state, action) => {
      state.installmentDataForModal = action.payload;
    },
  },
});

export const { setPropertyTarget, setInstallmentProperty, setLocationPageData } = propertySlice.actions;

export default propertySlice.reducer;
