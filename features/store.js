import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    userData: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
