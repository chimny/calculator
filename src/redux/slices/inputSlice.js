import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const inputSlice = createSlice({
    name: 'calcInput',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        updateValue: (state, action) => {
            state.value = action.payload
        }
    }
})


export const {increment, decrement, updateValue} = inputSlice.actions;

export default inputSlice.reducer;

