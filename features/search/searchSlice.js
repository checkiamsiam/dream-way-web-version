import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: "",
};

export const userSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { setSearchKey } = userSlice.actions;

export default userSlice.reducer;
