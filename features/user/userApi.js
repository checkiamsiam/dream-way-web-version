import { toast } from 'react-toastify';
import { api } from '../api/api';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: '/api/user/signup',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    toast.success(result.msg, {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/api/user/signin',
                method: 'POST',
                body: credentials,
            }),
        }),
        registerVerification: builder.mutation({
            query: (credentials) => ({
                url: '/api/user/verify_user',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useRegisterVerificationMutation,
} = userApi;
