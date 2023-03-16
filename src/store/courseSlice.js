import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    courseFile: [],
}

const CourseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        add(state, action) {
            state.courses.push(action.payload);
        },
        remove(state, action) {
            return state.courses.filter((item) => item.courseId != action.payload);
        },
        addFiles(state, action) {
            state.courseFile.push(action.payload);
        },
        removeFiles(state, action) {
            return state.courseFile.filter((item) => item.courseId != action.payload);
        },
        clearArr(state, action) {
            state.courseFile = [];
            state.courses = [];
        },
    }
});

export const { add, remove, addFiles, removeFiles, clearArr } = CourseSlice.actions;

export default CourseSlice.reducer;