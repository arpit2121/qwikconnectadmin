import { Api } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401 ) {
    console.log("resukt=====", result)
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
baseUrl: "http://localhost:4546/v1/admin",
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

// http://localhost:4546/admin-apis/v1/admin/on-board
export const adminsApi = createApi({
  reducerPath: "adminsApi", //unique key wee will access the data by this name it will store all data as cache
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Student", "Teacher", "Admin"],
  //endpoint are hit point
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "students",
      providesTags: ["Student"],
    }),
    getAdminInfo: builder.query({
      query: (id) => `profile?adminId=${id}`,
      // providesTags: ["Admin"],
    }),
    getProfessions: builder.query({
      query: () => "professions",
    }),
    getStudentsById: builder.query({
      query: (id) => `students/${id}`,
      //template litteral
    }),
    addAdmin: builder.mutation({
      query: (admin) => ({
        url: "on-board",
        method: "POST",
        body: admin,
      }),
      // invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...student }) => ({
        url: `students/${id}`,
        method: "PUT",
        body: student,
      }),
      // invalidatesTags: ["Student"],
    }),
    getAvatar: builder.query({
      query: (key) => `avatar?key=${key}`,
      //template litteral
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentsByIdQuery,
  useAddAdminMutation,
  useUpdateStudentMutation,
  useGetAdminInfoQuery,
  useGetProfessionsQuery,
  useLazyGetProfessionsQuery,
} = adminsApi;

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
