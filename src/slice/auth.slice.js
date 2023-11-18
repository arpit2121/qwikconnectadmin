import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { jwtDecode } from "jwt-decode";

console.log("helllo")
let savedToken = localStorage.getItem("token");
if (savedToken) {
  savedToken = JSON.parse(savedToken);
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedToken ? jwtDecode(savedToken.access_token) : null,
    token: savedToken ? savedToken : null,
    // adminId: savedToken
    //   ? jwt_decode(savedToken.access_token).details[0][0]["sponsorId"]
    //   : null,
    adminId: savedToken ? savedToken.adminId : null,
    accessToken: savedToken ? savedToken.access_token : null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        // const jwtToken = jwt_decode(payload.access_token);
        console.log("hiii",payload.access_token);
        state.token = payload;
        state.adminId= payload.adminId
        state.accessToken = payload.access_token
        state.user = jwtDecode(payload.access_token);
        // state.adminId = jwtToken.details[0][0]["sponsorId"];
        localStorage.setItem("token", JSON.stringify(payload));
      }
    );
  },
});


export default authSlice.reducer;


export const selectCurrentUser = (state) => (state.auth.user);