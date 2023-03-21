import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSnackOpen: false,
    snackmsg: "",
    snackType: "",
    popLogout: false,
    isModelOpen: false,
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
        closeModel(state, action) {
            state.isModelOpen = false;
        },
        startLoading(state, action) {
            state.isLoading = true;
        },
        stopLoading(state, action) {
            state.isLoading = false;
        }
    }
});

export const { openSnack, closeSnack, openLogout, closeLogout, openModel, closeModel, startLoading, stopLoading } = systemSlice.actions;

export default systemSlice.reducer;