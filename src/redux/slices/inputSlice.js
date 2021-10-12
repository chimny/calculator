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
        },
        addNumber: (state, action) => {
            state.value += String(action.payload)
        },
        removeNumber: (state) => {
            state.value = '';
        },
        clearValue: (state) => {
            state.value = '';
        }
    }
})


export const {updateValue, addNumber, removeNumber, clearValue} = inputSlice.actions;

export default inputSlice.reducer;

