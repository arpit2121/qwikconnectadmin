import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { jwtDecode } from "jwt-decode";
import { adminsApi } from "../services/admin";


let savedToken = localStorage.getItem("token");
if (savedToken) {
  savedToken = JSON.parse(savedToken);
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedToken ? jwtDecode(savedToken.access_token) : null,
    token: savedToken ? savedToken : null,
    adminId: savedToken ? jwtDecode(savedToken.access_token).sub.split('|')[1] : null,
    // adminId: savedToken ? savedToken.adminId : null,
    accessToken: savedToken ? savedToken.access_token : null,
    emailId: savedToken ? jwtDecode(savedToken.access_token).user_email : null,
    refresToken: savedToken ? savedToken.refresToken : null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        const jwtToken = jwtDecode(payload.access_token);
        state.token = payload
        state.accessToken = payload.access_token
        state.user = jwtDecode(payload.access_token);
        state.adminId = jwtToken.sub.split('|')[1];
        // state.adminId = payload.adminId
        state.emailId = jwtDecode(payload.accessToken).user_email;
        state.refresToken = payload.refresh_token;
        localStorage.setItem("token", JSON.stringify(payload));
      }
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchFulfilled,
      (state, {payload}) => {
        console.log("signup",payload)
        state.token = payload
        state.accessToken = payload.access_token
        state.user = jwtDecode(payload.access_token);
        state.adminId = jwtToken.sub.split('|')[1];
        // state.adminId = payload.adminId
        state.emailId = jwtDecode(payload.accessToken).user_email;
        state.refresToken = payload.refresh_token;
        localStorage.setItem("token", JSON.stringify(payload));
      }
    )
  },
});


export default authSlice.reducer;


export const selectCurrentUser = (state) => (state.auth.user);