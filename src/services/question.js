import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


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
  //   baseUrl: process.env.QWIKCONNECT_BACKEDN_API_URL,
  baseUrl: "http://localhost:4546/admin-apis/v1/question-bank/",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth.token?.access_token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Access-Control-Allow-Origin", "*");
      }
      return headers;
    },
  });
  

export const questionsApi = createApi({
    reducerPath: 'questionsApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Job"],
    endpoints: (builder)=> ({
        getQuestionData: builder.query({
            query: (adminId, jobId)=> `students/${adminId}/${jobId}`,
        }),
        addNeQuestion: builder.mutation({
            query: (newQuestion,adminId, jobId) => ({
                url: `add-question/${adminId}/${jobId}`,
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data;'
                },
                body: newQuestion,
                formData:true
            }),
        }),
    }),
})


export const {useAddNeQuestionMutation,useGetQuestionDataQuery} = questionsApi;
