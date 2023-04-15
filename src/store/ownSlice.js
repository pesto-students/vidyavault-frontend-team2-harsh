import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
}

const ownSlice = createSlice({
    name: 'own',
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