import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


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
baseUrl: `${import.meta.env.VITE_API_KEY}/v1/job-post`,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().auth.token?.access_token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Access-Control-Allow-Origin", "*");
    }
    return headers;
  },
});


export const jobsApi = createApi({
  reducerPath: "jobsApi", 
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    addNewJob: builder.mutation({
      query: (id) => ({
        url: `?adminId=${id}`,
        method: "POST",
        // body: jobData,
      }),
      // invalidatesTags: ["Student"],
    }),
    updateBasicDetails: builder.mutation({
      query: ({ basic_details, jobPostId }) => ({
        url: `basic?jobPostId=${jobPostId}`,
        method: "PUT",
        body: basic_details,
      }),
    }),
    updateParameters: builder.mutation({
      query: ({ json_data, adminId, jobPostId }) => {
        console.log("reducer -> ", json_data);
        return {
          url: `parameters?adminId=${adminId}&jobPostId=${jobPostId}`,
          method: "PUT",
          body: json_data,
        };
      },
    }),
    updateBranding: builder.mutation({
      query: ({ adminId, jobPostId, formData }) => {
        return {
          url: `branding?adminId=${adminId}&jobPostId=${jobPostId}`,
          method: "PUT",
          body: formData,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
    }),
    publishLink: builder.mutation({
      query: ({ formData, adminId, jobPostId }) => ({
        url: `publish-link?jobPostId=${jobPostId}&adminId=${adminId}`,
        method: "PUT",
        body: formData, // Convert JSON to string
        FormData: true,
      }),
    }),
    addNewQuestion: builder.mutation({
      query: ({ formData, adminId, jobPostId }) => ({
        url: `question?jobPostId=${jobPostId}&adminId=${adminId}`,
        method: "POST",
        body: formData, // Convert JSON to string
        FormData: true,
      }),
    }),
    getActiveJobPost: builder.query({
      query: (adminId) => `active?adminId=${adminId}`,
      // providesTags: ["Admin"],
    }),
    getJobInfo: builder.query({
      query: ({adminId,jobPostId}) => `get-job-detail?adminId=${adminId}&jobPostId=${jobPostId}`,
      // providesTags: ["Admin"],x
    }),
    getAllJobPost: builder.query({
      query: (adminId) => `?adminId=${adminId}`,
    }),
  }),
});

export const {
  useAddNewJobMutation,
  useUpdateBasicDetailsMutation,
  useUpdateParametersMutation,
  usePublishLinkMutation,
  useUpdateBrandingMutation,
  useAddNewQuestionMutation,
  useGetActiveJobPostQuery,
  useGetJobInfoQuery,
  useLazyGetJobInfoQuery,
  useGetAllJobPostQuery,
} = jobsApi;

// updateParameters: builder.mutation({
//     query: ({json_data, adminId, jobPostId}) => ({
//         url: `parameters?adminId=${adminId}jobPostId=${jobPostId}`,
//         method: "PUT",
//         // headers: {
//         //     'Content-Type': 'multipart/form-data'
//         // },
//         body: json_data,
//         // formData: true
//     })
// }),
