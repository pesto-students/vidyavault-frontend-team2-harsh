import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogedin: false,
    type: "",
    id: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.isLogedin = action.payload;
        },
        addType(state, action) {
            state.type = action.payload;
        },
        addId(state, action) {
            state.id = action.payload;
        }
    }
});

export const {setLogin, addType, addId} = authSlice.actions;

export default authSlice.reducer;