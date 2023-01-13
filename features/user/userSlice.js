import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  emailForVerification: "",
  user: Cookies.get("dreamWayAuth") ? JSON.parse(Cookies.get("dreamWayAuth")) : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmailForRegisterVerification: (state, action) => {
      state.emailForVerification === action.payload;
    },
  },
});

export const { setEmailForRegisterVerification } = userSlice.actions;

export default userSlice.reducer;
