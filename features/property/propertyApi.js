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

export const { useAddToCartMutation, usePlaceOrderMutation } = propertyApi;
