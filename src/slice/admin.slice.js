import { createSlice } from "@reduxjs/toolkit";
import { adminsApi } from "../services/admin";

export const initialState = {
  adminInfo: {},
  adminProfile: {
    firstName: "",
    lastName:  "",
    phone_number:  "",
    company_name: "",
    profession: "",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.selectedJobPostingPage = action.payload;
    },
    setAdminProfile: (state,action) => {
      state.adminProfile[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      adminsApi.endpoints.getAdminInfo.matchFulfilled,
      (state, { payload }) => {
        state.adminInfo = payload;
      }
    ),
      builder.addMatcher(
        adminsApi.endpoints.getAdminInfo.matchFulfilled,
        (state, { payload }) => {
          state.adminProfile = {
            firstName: payload?.admin.fullName
              ? payload?.admin?.fullName.split(" ")[0]
              : "",
            lastName: payload?.admin.fullName
              ? payload?.admin?.fullName.split(" ")[1]
              : "",
            phone_number: payload?.admin?.phone_number ? payload?.admin?.phone_number : "",
            company_name: payload?.admin?.company_name ? payload?.admin?.company_name : "",
            profession: payload?.admin?.profession ? payload?.admin?.profession : "",
          };
        }
      );
  },
});

export const { setAdminData, setAdminProfile } = adminSlice.actions;

export default adminSlice.reducer;
