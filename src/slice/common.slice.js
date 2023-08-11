import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   selectedJobPostingPage:1,
   videoLink:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  };
  export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
      setSelectedJobPostingPage: (state, action) => {
        state.selectedJobPostingPage = action.payload;
      },
      setVideoLink: (state, action) => {
        state.videoLink = action.payload;
      }
    },
  });
  
  export const {
    setSelectedJobPostingPage,
    setVideoLink
  } = commonSlice.actions;
  export default commonSlice.reducer