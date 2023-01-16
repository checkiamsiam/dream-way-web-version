import { api } from "../api/api";

export const flatApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFlatDetail: builder.query({
      query: (credentials) => ({
        url: `/api/flat/${credentials}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFlatDetailQuery } = flatApi;
