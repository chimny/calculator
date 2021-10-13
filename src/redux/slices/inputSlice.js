import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

export const inputSlice = createSlice({
    name: 'calcInput',
    initialState,
    reducers: {
        updateValue: (state, action) => {
            const prevState = state.value
            const newInput = Number(action.payload);
            if (!Number.isNaN(newInput) || action.payload === '-') {
                state.value = action.payload;
            } else if (action.payload === '.') {
                state.value = prevState + action.payload
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

