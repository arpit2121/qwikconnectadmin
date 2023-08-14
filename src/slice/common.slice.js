import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   selectedJobPostingPage:1,
   videoLink:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
   navbarTitle:'Dashboard'
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
      },
      setNavbarTitle: (state, action) => {
        state.navbarTitle = action.payload;
      }
    },
  });
  
  export const {
    setSelectedJobPostingPage,
    setVideoLink,
    setNavbarTitle
  } = commonSlice.actions;
  export default commonSlice.reducer