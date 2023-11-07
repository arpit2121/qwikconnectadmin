import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:4546/admin-apis/v1/admin/on-board
export const jobsApi = createApi({
  reducerPath: "jobsApi", //unique key wee will access the data by this name it will store all data as cache
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4546/v1/job-post",
  }),
  tagTypes: ["Job"],
  //endpoint are hit point
  endpoints: (builder) => ({
    // getStudentsById: builder.query({
    //     query: (id)=> `students/${id}`,
    //     //template litteral
    // }),
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
        url: `basic?jobpostId=${"652b6f25c577f5fc09241c32"}`,
        method: "PUT",
        body: basic_details,
      }),
    }),
    updateParameters: builder.mutation({
      query: ({ json_data, jobPostId }) => ({
        url: `parameters?jobPostId=${"652b6f25c577f5fc09241c32"}`,
        method: "PUT",
        body: json_data,
      }),
    }),
    updateBranding: builder.mutation({
      query: () => ({
        url: `branding`,
        method: "PUT",
      }),
    }),
    publishLink: builder.mutation({
      query: ({ formData, adminId, jobPostId }) => ({
        url: `publish-link?jobPostId=${"652b6f25c577f5fc09241c32"}&adminId=${adminId}`,
        method: "PUT",
        body: formData, // Convert JSON to string
        FormData: true,
      }),
    }),
    addNewQuestion: builder.mutation({
      query: ({ formData, adminId, jobPostId }) => ({
        url: `question?jobPostId=${"652b6f25c577f5fc09241c32"}&adminId=${adminId}`,
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
      query: (jobPostId) => `get-job-detail?jobPostId=${jobPostId}`,
      // providesTags: ["Admin"],x
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
  useLazyGetJobInfoQuery
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
