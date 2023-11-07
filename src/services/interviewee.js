import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const intervieweeApi = createApi({
    reducerPath: "intervieweeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4546/v1/interviewee",
    }),
    tagTypes: [""],
    
    endpoints: (builder) => ({
        getAllInterviewee: builder.query({
            query: ({adminId, jobPostId}) => `?adminId=${adminId}&jobPostId=${jobPostId}&page=${1}&pageSize=${10}`
          }),
        getCandidateData: builder.query({
            query: (intervieweeId) => `${intervieweeId}`
        }),
    })
});

export const {useLazyGetAllIntervieweeQuery,  useLazyGetCandidateDataQuery} = intervieweeApi;