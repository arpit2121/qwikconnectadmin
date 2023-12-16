import { createSlice } from "@reduxjs/toolkit";
import { intervieweeApi } from "../services/interviewee";

export const initialState = {
  intervieweeData: {},
  videoLink: "",
  currQuestion: {},
  currIndex: 1,
  intervieweeParaAndStatus: {
    parameters: {},
    status: "",
  },
  parameters1: {
    Concentration: -1,
    Flexible: -1,
    Competency: -1,
    Skills: -1,
    Aptitude: -1,
  }
};

export const intervieweeSlice = createSlice({
  name: "interviewee",
  initialState,
  reducers: {
    setIntervieweeData: (state, action) => {
    },
    setVideoLink: (state, action) => {
        state.videoLink = action.payload;
      },
      setCurrQuestion: (state,action) => {
        console.log("payload --",action.payload)
        state.currQuestion = action.payload;
      },
      setCurrIndex : (state, action) =>{
        state.currIndex = action.payload;
      },
      setInterviewewStatus: (state, action) => {
        console.log("acc",action.payload)
        state.intervieweeParaAndStatus.status = action.payload;
      },
      setIntervieweeParamenter: (state, action) => {
        const {parameterKey, innerIndex} = action.payload;
        console.log("innerIndex", innerIndex, parameterKey)
        state.intervieweeParaAndStatus.parameters[parameterKey] = innerIndex;
      }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
        intervieweeApi.endpoints.getCandidateData.matchFulfilled,
      (state, { payload }) => {
        console.log("payload --", payload)
        state.intervieweeData = payload;
        state.currQuestion = payload?.alloted_questions[0];
        // state.parameters = payload?.parameters
        state.intervieweeParaAndStatus.parameters = payload?.parameters,
        state.intervieweeParaAndStatus.status = payload?.status
      }
    )
  }
});

export const { setIntervieweeData, setVideoLink, setCurrQuestion, setCurrIndex, setInterviewewStatus, setIntervieweeParamenter } = intervieweeSlice.actions;

export default intervieweeSlice.reducer;
