import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

export const inputSlice = createSlice({
    name: 'calcInput',
    initialState,
    reducers: {
        updateValue: (state, action) => {
            const newInput = Number(action.payload);
            if (!Number.isNaN(newInput)) {
                state.value = action.payload;
            }
        }, addNumber: (state, action) => {
            state.value += String(action.payload)
        },
        removeNumber: (state) => {
            const prevState = state.value;
            state.value = prevState.slice(0, prevState.length - 1)
        },
        clearValue: (state) => {
            state.value = null;
        }
    }
})


export const {updateValue, addNumber, removeNumber} = inputSlice.actions;

export default inputSlice.reducer;

