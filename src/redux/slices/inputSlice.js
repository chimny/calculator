import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

export const inputSlice = createSlice({
    name: 'calcInput',
    initialState,
    reducers: {
        //@todo refactor update value - what's the purpose??
        updateValue: (state, action) => {
            const prevState = state.value
            const newInput = Number(action.payload);
            if (prevState === '' ){
                state.value = action.payload
            }
            else if (!Number.isNaN(newInput)) {
                state.value = action.payload;
            }   else if (action.payload === '.') {
                state.value = prevState + action.payload
            }
        },
        addNumber: (state, action) => {
            if(Number(action.payload) || action.payload==='0' && state.value !== '0'){
                state.value += String(action.payload)
            }
        },
        removeNumber: (state) => {
            const prevState = state.value;
            state.value = prevState.slice(0, prevState.length - 1)

        },
        clearValue: (state) => {
            state.value = '';
        }
    }
})


export const {updateValue, addNumber, removeNumber, clearValue} = inputSlice.actions;

export default inputSlice.reducer;

