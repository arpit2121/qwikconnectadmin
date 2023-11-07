import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// http://localhost:4546/admin-apis/v1/admin/on-board
export const questionsApi = createApi({
    reducerPath: 'questionsApi',//unique key wee will access the data by this name it will store all data as cache
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4546/admin-apis/v1/question-bank/',
    }),
    tagTypes: ["Job"],
    //endpoint are hit point
    endpoints: (builder)=> ({
        getQuestionData: builder.query({
            query: (adminId, jobId)=> `students/${adminId}/${jobId}`,
            //template litteral
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
