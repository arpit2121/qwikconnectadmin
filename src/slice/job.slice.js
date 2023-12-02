import { createSlice } from "@reduxjs/toolkit";
import { jobsApi } from "../services/job";

export const initialState = {
  job_data: {},
  basic_details: {
    jobTitle: "",
    jobDescription: "",
    hiringLocation: "",
    experience: "",
    profession: "",
    requiredExperience: "",
  },
  branding: {
    blobFile: "",
    colors: {
      primary_brand_colour: "#202020",
      secondary_brand_colour: "#505DEC",
    }
  },
  publish_link: {
    publicLink: "",
    csvFile: null,
  },
  question_setup: {
    minimum_passing_parameter: "",
    ratingParameters: [],
    display_questions: "",
    questionsArray: [
      // {
      //   questionNo: '',
      //   questionTitle: "Question Title here",
      //   isMandatory: false,
      //   retakes: "",
      //   thinkingTime: "",
      //   timeToAnswer: "",
      //   questionVideoKey: "",    
      // }
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
      const {name, value, index} = action.payload;
      state.question_setup.questionsArray[index][name] = value;
    },
    deleteQuestion: (state, action) => {
      const {index, updatedObject} = action.payload;
      state.question_setup.questionsArray[index] = updatedObject;
    },
    setBrandingLogo: (state, action) => {
      console.log("setting branding logo",action.payload)
      state.branding.blobFile = action.payload; 
    },
    setBrandingColor: (state, action) => {
      state.branding.colors[action.payload.name] = action.payload.value;
    },
    setCsvFile: (state, action) => {
      console.log("ac",action.payload)
      state.publish_link.csvFile = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      jobsApi.endpoints.addNewJob.matchFulfilled,
      (state, { payload }) => {
        state.basic_details = {
          jobDescription: payload?.jobDescription==="" || null || undefined ? payload?.jobDescription: "Enter Job Title here",
          jobTitle: payload?.jobTitle,
          hiringLocation: payload?.hiringLocation,
          profession: payload?.profession,
          requiredExperience: payload?.requiredExperience
        },
        state.question_setup = {
          passingPoint: payload?.passingPoint ? payload?.passingPoint : "",
          display_questions: payload?.displayQuestions ? payload?.displayQuestions : "",
          ratingParameters: payload?.ratingParameters,
          questionsArray:  payload?.questionBank.concat({
            questionNo: "",
            questionTitle: "Question Title here",
            isMandatory: false,
            retakes: "",
            thinkingTime: "",
            timeToAnswer: "",
            questionVideoKey: "",
          }),
        },
        state.publish_link = {
          publicLink: payload?.publicLink
        }
      }
    );
  },
});

export const { setJobData, setBasicDetails, setParameter, setQuestions, updateQuestion, deleteQuestion, setMinimumPassingParameter, setDisplayQuestions, setBrandingLogo, setBrandingColor, setCsvFile} = jobSlice.actions;

export default jobSlice.reducer;
