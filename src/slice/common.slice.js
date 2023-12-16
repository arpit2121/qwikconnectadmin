import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   selectedJobPostingPage:"1",
  //  videoLink:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
   videoLink:"https://qwik-connect.s3.ap-south-1.amazonaws.com/admins/656cc394e271a453a63709bc/jobpost/656f8cf0cb1654b6eba392bb/interviewees/6574a0aa5470a0d3973d0166/videos/65746ad0cf74b903352ec6de?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2MBJCQ6UG67QLSF5%2F20231211%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T164336Z&X-Amz-Expires=900&X-Amz-Signature=2f8a2f78bdfa09d5350de9d20e1413e4767cfd5d93c5181bd792640a0b7ebdbd&X-Amz-SignedHeaders=host&x-id=GetObject",
   navbarTitle:'Dashboard',
   apiLoader: false,
   files: {},
   admin_id: {},
   initialState: {
    message:  '',
    showMessage: false,
    messageSeverity: ''
    },
    stats: {}
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
      },
      setStats: (state, action) =>{
        state.stats = action.payload;
      }
    },
  });
  
  export const {
    setSelectedJobPostingPage,
    // setVideoLink,
    setNavbarTitle,
    setApiLoadere,
    setFilesData,
    setShowMessage,
    setClearMessage,
    setStats
  } = commonSlice.actions;

  export default commonSlice.reducer