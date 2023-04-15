import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSnackOpen: false,
    snackmsg: "",
    snackType: "",
    popLogout: false,
    modelPayload: "",
    isModelOpen: false,
    isFileModelOpen: false,
    isModuleModelOpen: false,
    isLoading: false
}

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        openSnack(state, action) {
            state.snackmsg = action.payload.msg;
            state.snackType = action.payload.type
            state.isSnackOpen = true;
        },
        closeSnack(state, action) {
            state.isSnackOpen = false;
        },
        openLogout(state, action) {
            state.popLogout = true;
        },
        closeLogout(state, action) {
            state.popLogout = false;
        },
        openModel(state, action) {
            state.isModelOpen = true;
        },
        openFileModel(state, action) {
            state.isFileModelOpen = true;
            state.modelPayload = action.payload.id
        },
        openModuleModel(state, action) {
            state.isModuleModelOpen = true;
            state.modelPayload = action.payload.id
        },
        closeModel(state, action) {
            state.isModelOpen = false;
            state.isFileModelOpen = false;
            state.isModuleModelOpen = false;
        },
        startLoading(state, action) {
            state.isLoading = true;
        },
        stopLoading(state, action) {
            state.isLoading = false;
        }
    }
});

export const { openSnack, closeSnack, openLogout, closeLogout, openModel, openFileModel, openModuleModel ,closeModel, startLoading, stopLoading } = systemSlice.actions;

export default systemSlice.reducer;