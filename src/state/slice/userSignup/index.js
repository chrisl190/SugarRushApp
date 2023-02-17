import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    first_name: 'original',
    last_name: 'Last name test',
};

export const userSignup = createSlice({
    name: 'userSignup',
    initialState: initialState,
    reducers: {
        reset() {
            return initialState;
        },
        setNameFirst(state, action) {
            return {
                ...state,
                first_name: action.payload,
            };
        },
    },
});

export const selectorUserSignup = (state) => state.userSignup;