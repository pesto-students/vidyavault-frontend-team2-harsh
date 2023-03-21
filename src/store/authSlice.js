import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    isAdmin: false,
    id: "",
    token: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addLogin(state, action) {
            state.isLogin = action.payload;
        },
        addType(state, action) {
            state.isAdmin = action.payload;
        },
        addId(state, action) {
            state.id = action.payload;
        },
        addToken(state, action) {
            state.token = action.payload;
        }
    }
});

export const {addLogin, addType, addId, addToken} = authSlice.actions;

export default authSlice.reducer;