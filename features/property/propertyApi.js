import { api } from '../api/api';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: (credentials) => ({
                url: '/api/order/cart',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useAddToCartMutation } = userApi;
