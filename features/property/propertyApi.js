import { api } from "../api/api";

export const propertyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (credentials) => ({
        url: "/api/order/cart",
        method: "POST",
        body: credentials.body,
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      }),
    }),
    getCameraRoll: builder.query({
      query: (credentials) => ({
        url: `/api/clients/cameras/${credentials.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      }),
    }),
    removeFromCart: builder.mutation({
      query: (credentials) => ({
        url: `/api/order/cart/${credentials.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      }),
    }),
    placeOrder: builder.mutation({
      query: (credentials) => ({
        url: "/api/order/cart/requestOrder",
        method: "POST",
        body: credentials.body,
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      }),
    }),
  }),
});

export const { useAddToCartMutation, usePlaceOrderMutation, useRemoveFromCartMutation, useGetCameraRollQuery } = propertyApi;
