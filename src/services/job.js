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
        url: `basic?jobpostId=${jobPostId}`,
        method: "PUT",
        body: basic_details,
      }),
    }),
    updateParameters: builder.mutation({
      query: ({ json_data, adminId, jobPostId }) => {
        console.log("reducer -> ", json_data);
        return {
          url: `parameters?jobPostId=${jobPostId}`,
          method: "PUT",
          body: json_data,
        };
      },
    }),
    updateBranding: builder.mutation({
      query: ({ adminId, jobPostId, formData }) => {
        console.log("hiiii from reducer", formData);
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
