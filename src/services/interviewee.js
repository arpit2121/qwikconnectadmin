import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401 ) {
      localStorage.clear();
      window.location.reload("/login");
    }
    // else if (result.error && result.error.status === 500) {
    //     api.dispatch(showAlert({
    //         message: "Something went wrong!",
    //         showMessage: true,
    //         messageSeverity: 'error'
    //     }))
    // } else if (result.error && result.error.status == 'FETCH_ERROR') {
    //     api.dispatch(showAlert({
    //         message: "Service not available!",
    //         showMessage: true,
    //         messageSeverity: 'error'
    //     }))
    // }
  //   console.log("resukt", result)
    return result;
  };
  
  const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_KEY}/v1/interviewee`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth.token?.access_token;
      console.log("token -> ",token)
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Access-Control-Allow-Origin", "*");
      }
      return headers;
    },
  });



export const intervieweeApi = createApi({
    reducerPath: "intervieweeApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: [""],
    endpoints: (builder) => ({
        getAllInterviewee: builder.query({
            query: ({adminId, jobPostId}) => `?adminId=${adminId}&jobPostId=${jobPostId}&page=${1}&pageSize=${10}`
          }),
        getCandidateData: builder.query({
            query: (intervieweeId) => `${intervieweeId}`
        }),
        getPresignedUrl: builder.query({
          query: ({ key }) => {
            return ({
              url:`${import.meta.env.VITE_API_KEY}/v1/s3-manager/presigned-url?key=${key}`
            })
          }
        }),
        setIntervieweeStatusAndParameter: builder.mutation({
          query: ({ body, intervieweeId, jobPostId }) => ({
            url: `parameters?jobPostId=${jobPostId}&intervieweeId=${intervieweeId}`,
            method: "PATCH",
            body: body,
          }),
        }),
    }),
});

export const {useLazyGetAllIntervieweeQuery,  useLazyGetCandidateDataQuery, useLazyGetPresignedUrlQuery, useSetIntervieweeStatusAndParameterMutation} = intervieweeApi;