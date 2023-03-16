import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSnackOpen: false,
    snackmsg: "",
    popLogout: false,
}

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        openSnack(state, action) {
            state.snackmsg = action.payload;
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
        }
    }
});

export const { openSnack, closeSnack, openLogout, closeLogout } = systemSlice.actions;

export default systemSlice.reducer;