import { configureStore } from "@reduxjs/toolkit";
import { adminsApi } from "./services/admin";
import { authApi } from "./services/auth";
import { jobsApi } from "./services/job";
import {intervieweeApi} from "./services/interviewee";
import commonReducer from './slice/common.slice';
import adminRducer from './slice/admin.slice';
import jobReducer from './slice/job.slice';
import authReducer from './slice/auth.slice';




const store = configureStore({
    reducer: {
        [adminsApi.reducerPath]: adminsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [jobsApi.reducerPath]: jobsApi.reducer,
        [intervieweeApi.reducerPath]: intervieweeApi.reducer,
        common: commonReducer,
        admin: adminRducer,
        job: jobReducer,
        auth: authReducer
    },
    middleware: (gDM) => gDM({
        serializableCheck:false
    }).concat(authApi.middleware,adminsApi.middleware,jobsApi.middleware, intervieweeApi.middleware)
});

export default store;
