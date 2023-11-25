import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_KEY}/v1/auth`}),
    tagTypes: [],
    //invalidateTags, proivdeTags
    endpoints: (builder) => ({
        verifyEmail: builder.query({
            query: (email) => `/verify-email?email=${email}`,
        }),
        loginUser: builder.mutation({
            query   : ({email, password}) => {
                console.log("reducer -> ",email, password)
                return{
                    url: `/login?email=${email}&password=${password}`,
                    method: "POST",
                }
            }
        }),
        signupUser: builder.mutation({
            query   : ({email, password}) => {
                console.log("reducer -> ",email, password)
                return{
                    url: `/signup?email=${email}&password=${password}`,
                    method: "POST",
                }
            }
        }),
        verifyOtp: builder.mutation({
            query: (body) => {
                console.log("boo", body)
                return{
                    url: "/verify-otp",
                    method: "POST",
                    body,
                }
            }
        }),
        setPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/set-password",
                    method: "POST",
                    body,
                }
            }
        }),
        verifyPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/verify-password",
                    method: "POST",
                    body,
                }
            }
        }),
        googleLogin: builder.mutation({
            query: () => {
                return {
                    url: '/login-google',
                    method: "GET"
                }
            }
        }),
    }),
})

export const {useSigninUserMutation, useVerifyPasswordMutation, useSetPasswordMutation, useVerifyOtpMutation, useVerifyEmailMutation, useLazyVerifyEmailQuery, useLoginUserMutation, useSignupUserMutation, useGoogleLoginMutation} = authApi;