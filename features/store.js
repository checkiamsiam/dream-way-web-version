import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "./user/userSlice";
import propertyReducer from "./property/propertySlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    userData: authReducer,
    property: propertyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
