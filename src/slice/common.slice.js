import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   selectedJobPostingPage:"1",
  //  videoLink:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
   videoLink:"videos/651137f89cbfd5858dc871a5/651154effdc5ba161f0b15b0/6518733927d3da47e2b5887c/6517ba75173d9d1d74d60b38/ans",
   navbarTitle:'Dashboard',
   apiLoader: false,
   files: {},
   admin_id: {},
   initialState: {
    message:  '',
    showMessage: false,
    messageSeverity: ''
    }
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
      },
      setApiLoadere: (state, action) =>{
        state.apiLoader = action.payload;
      },
      setFilesData: (state, action) =>{
        state.files = action.payload;
      },
      setShowMessage: (state, action) =>{
        state.initialState = action.payload;
      },
      setClearMessage: (state, action) => {
        state.initialState = {
          message:  '',
          showMessage: false,
          messageSeverity: ''
        };
      }
    },
  });
  
  export const {
    setSelectedJobPostingPage,
    setVideoLink,
    setNavbarTitle,
    setApiLoadere,
    setFilesData,
    setShowMessage,
    setClearMessage
  } = commonSlice.actions;

  export default commonSlice.reducer