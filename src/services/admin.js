import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// http://localhost:4546/admin-apis/v1/admin/on-board
export const adminsApi = createApi({
    reducerPath: 'adminsApi',//unique key wee will access the data by this name it will store all data as cache
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4546/v1/admin',
    }),
    tagTypes: ["Student","Teacher","Admin"],
    //endpoint are hit point
    endpoints: (builder)=> ({
        getStudents: builder.query({
            query: ()=> 'students',
            providesTags: ["Student"],
        }),
        getAdminInfo: builder.query({
            query: (id)=> `profile?adminId=${id}`,
            // providesTags: ["Admin"],
        }),
        getProfessions: builder.query({
            query: () => 'professions',
        }),
        getStudentsById: builder.query({
            query: (id)=> `students/${id}`,
            //template litteral
        }),
        addAdmin: builder.mutation({
            query: (admin) => ({
                url: 'on-board',
                method: "POST",
                body: admin,
            }),
            // invalidatesTags: ["Student"],
        }),
        updateStudent: builder.mutation({
            query: ({id, ...student}) => ({
                url: `students/${id}`,
                method: "PUT",
                body: student,
            }),
            // invalidatesTags: ["Student"],
        }),
        getAvatar: builder.query({
            query: (key)=> `avatar?key=${key}`,
            //template litteral
        }),
    }),
})


export const {useGetStudentsQuery, useGetStudentsByIdQuery, useAddAdminMutation, useUpdateStudentMutation,useGetAdminInfoQuery, useGetProfessionsQuery, useLazyGetProfessionsQuery} = adminsApi;

//fetchBaseQuery - similar to axios
//once i fetch the data the it stored as cache after that i you want same data then you can use it bcoz it's in inside a reducer

/*

const {data} = useGetStudentsQuery(undefined, {
    selecteFromResult: ({data}) => ({
        data: data?.find(el => el.id == match.params.id)
    })
});

{
    data ==undefined ? (
        spinner
    ):<component/>
}
----it's a pro type of query that we don't want to make a request for same data ----
 -- will use in table --
*/


//mutations -- are somethin update opertaion performing on server
/**
 import the mutation

 cl(useAddStudentMutation()) will return array 1st one for mutation second on shws info
 will destructure
 const [addStudent, {isLoading}] = useAddStudentMutation()
isError, isSuccess

 tags -->
 invalidatesTags
 provideTags
 */