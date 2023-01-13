import { api } from "../api/api";
import { setEmailForRegisterVerification } from "./userSlice";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/user/signup",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted({ email }, { dispatch }) {
        dispatch(setEmailForRegisterVerification(email));
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/user/signin",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
