import { createSlice } from "@reduxjs/toolkit";
import { jobsApi } from "../services/job";

export const initialState = {
  job_data: {},
  basic_details: {
    jobTitle: "Enter Job Title here",
    jobDescription: "",
    hiringLocation: "",
    profession: "",
    requiredExperience: "",
  },
  branding: {
    image: "",
    primary_brand_colour: "",
    secondary_branch_colour: "",
  },
  publish_link: {
    publicLink: "",
    csv: "set the file",
  },
  question_setup: {
    minimum_passing_parameter: "",
    ratingParameters: [],
    display_questions: "",
    questionsArray: [
      {
        questionNo: "",
        questionTitle: "Question Title here",
        isMandatory: false,
        retakes: "",
        thinkingTime: "",
        timeToAnswer: "",
        questionVideoKey: "blob file",    
      }
    ],
  },
  
};
export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobData: (state, action) => {
      state.selectedJobPostingPage = action.payload;
    },
    setBasicDetails: (state, action) => {
      state.basic_details[action.payload.name] = action.payload.value;
    },
    setParameter: (state, action) => {
      state.question_setup.ratingParameters = action.payload;
    },
    setQuestions: (state,action) => {
      state.question_setup.questionsArray = action.payload;
    },
    setMinimumPassingParameter: (state, action) => {
      state.question_setup.passingPoint = action.payload;
    },
    setDisplayQuestions: (state, action) => {
      state.question_setup.display_questions = action.payload;
    },
    updateQuestion: (state, action) => {
      console.log("action.payload", action.payload)
      const {name, value, index} = action.payload;
      state.question_setup.questionsArray[index][name] = value;
    },
    deleteQuestion: (state, action) => {
      const {index, updatedObject} = action.payload;
      state.question_setup.questionsArray[index] = updatedObject;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      jobsApi.endpoints.addNewJob.matchFulfilled,
      (state, { payload }) => {
        state.basic_details = {
          jobDescription: payload?.jobDescription,
          jobTitle: payload?.jobTitle,
          hiringLocation: payload?.hiringLocation,
          profession: payload?.profession,
        },
        state.question_setup = {
          passingPoint: payload?.passingPoint ? payload?.passingPoint : "",
          display_questions: payload?.displayQuestions ? payload?.displayQuestions : "",
          ratingParameters: payload?.ratingParameters,
          questionsArray: payload?.questionBank
        },
        state.publish_link = {
          publicLink: payload?.publicLink
        }
      }
    );
  },
});

export const { setJobData, setBasicDetails, setParameter, setQuestions, updateQuestion, deleteQuestion, setMinimumPassingParameter, setDisplayQuestions} = jobSlice.actions;

export default jobSlice.reducer;
