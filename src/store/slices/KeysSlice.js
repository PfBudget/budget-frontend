import {createSlice} from "@reduxjs/toolkit";

const KeysSlice = createSlice({
    name: 'keys',
    initialState: {
        jwtToken: '',
    },
    reducers: {
        setJwtToken(state, action) {

            state.jwtToken = action.payload;
        },
    },
});

export const {
    setJwtToken,
    setLinkToken,
} = KeysSlice.actions;

export const keysReducer = KeysSlice.reducer;