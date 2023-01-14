import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { setSearchKey } = searchSlice.actions;

export default searchSlice.reducer;
