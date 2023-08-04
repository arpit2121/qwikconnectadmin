import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/admin"}),
    tagTypes: [],
    //invalidateTags, proivdeTags
    endpoints: (builder) => ({
        signinUser: builder.mutation({
            query: (email) => {
                // console.log("reducer",email)
                return{
                    url: "/login",
                    method: "POST",
                    body: {email:email},
                }
            }
        }),
        verifyOtp: builder.mutation({
            query: (body) => {
                return{
                    url: "/verify-otp",
                    method: "post",
                    body,
                }
            }
        }),
        setPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/set-password",
                    method: "post",
                    body,
                }
            }
        }),
        verifyPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/verify-password",
                    method: "post",
                    body,
                }
            }
        })
    }),
})

export const {useSigninUserMutation, useVerifyPasswordMutation, useSetPasswordMutation, useVerifyOtpMutation} = authApi;