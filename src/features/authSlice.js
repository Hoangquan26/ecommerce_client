import { createSelector, createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null
    },
    reducers: {
        setCredential: (state, action) => {
            const {accessToken, user} = action.payload

            state.accessToken = accessToken
            state.user = user
        },
        logOut: (state) => {
            state.accessToken = null,
            state.user = null
        }
    }
})

const getUserSelector = (state) => state?.auth?.user
const getTokenSelector = (state) => state?.auth?.accessToken

export const userSelector = createSelector(
    [getUserSelector],
    (state) => state
)
export const tokenSelector = createSelector(
    [getTokenSelector],
    (state) => state
)

export const {
    setCredential,
    logOut
} = authSlide.actions

export default authSlide.reducer