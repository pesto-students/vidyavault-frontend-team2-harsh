import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import coursesReducer from "./courseSlice";
import systemReducer from "./systemSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        courses: coursesReducer,
        system: systemReducer,
        // own: ,
    }
});

export default store;