import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
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
        }, addNumber : (state,action)=>{
            state.value += String(action.payload)
        }
    }
})


export const {updateValue,addNumber} = inputSlice.actions;

export default inputSlice.reducer;

