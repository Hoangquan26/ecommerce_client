import apiSlice from './apiSlice'
import { ENDPOINT } from '../configs/api.config'
const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: ({email, password}) => ({
                url: ENDPOINT.ACCESS.login,
                body: {email, password},
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: ({email, password}) => ({
                url: ENDPOINT.ACCESS.register,
                body: {email, password},
                method: 'POST',
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: ENDPOINT.ACCESS.logout,
                method: 'POST'
            })
        }),
        refresh: builder.mutation({
            query: () => ({
                url: ENDPOINT.ACCESS.refresh,
                method: 'POST'
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useRefreshMutation
} = authApiSlice