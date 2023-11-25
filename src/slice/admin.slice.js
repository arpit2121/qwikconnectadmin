import { createSlice } from "@reduxjs/toolkit";
import { adminsApi } from "../services/admin";



export const initialState = {
   adminInfo: {},
  };


  export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      setAdminData: (state, action) => {
        state.selectedJobPostingPage = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addMatcher(adminsApi.endpoints.getAdminInfo.matchFulfilled,
        (state, {payload}) => {
          state.adminInfo = payload;
        })
    }
  });
  
  export const {
    setAdminData,
  } = adminSlice.actions;
  
  export default adminSlice.reducer