import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import HEADER from '../configs/header.config'
import { logOut, setCredential } from './authSlice';
import { ENDPOINT } from '../configs/api.config';
const baseUrl = import.meta.env.VITE_SERVER_URL
const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (header, {getState}) => {
        const token = getState()?.auth?.accessToken;
        if (token) {
            header.set(HEADER.AUTHORIZATION, token);
        }
        return header;
    }
})

let isRefreshing = false;
const reauthQuery = async(args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401 &&  !isRefreshing) {
        isRefreshing = true
        const refreshResult = await baseQuery({
            url: ENDPOINT.ACCESS.refresh,
            method: 'POST',
        }, api, extraOptions);
        isRefreshing = false
        if (refreshResult?.data) {
            console.log(refreshResult)
            // Lấy user từ state và lưu token mới
            const user = api.getState().auth.user;
            api.dispatch(setCredential({ user, accessToken: refreshResult?.data?.metadata?.tokens?.accessToken }));
            
            // Thử lại request ban đầu
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Nếu refresh thất bại, đăng xuất người dùng
            api.dispatch(logOut());
        }
    }

    return result
}

const apiSlice = createApi({
    baseQuery: reauthQuery,
    endpoints: (builder) => ({})
})

export default apiSlice

