import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   adminData: {},
  };
  export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      setAdminData: (state, action) => {
        state.selectedJobPostingPage = action.payload;
      },
    },
  });
  
  export const {
    setAdminData,
  } = adminSlice.actions;
  
  export default adminSlice.reducer