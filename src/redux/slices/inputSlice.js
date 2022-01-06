import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

export const inputSlice = createSlice({
    name: 'calcInput',
    initialState,
    reducers: {
        //@todo refactor update value - what's the purpose??
        addDot: (state, action) => {
            const prevState = state.value
            const newInput = Number(action.payload);
            if (prevState === '') {
                state.value = action.payload
            } else if (!Number.isNaN(newInput)) {
                state.value = action.payload;
            } else if (action.payload === '.') {
                state.value = prevState + action.payload
            }
        },
        addNumber: (state, action) => {
            const addedNumber = String(action.payload);
            if (state.value === '0' && Number(addedNumber)) {
                state.value = addedNumber
            } else if (Number(addedNumber) ) {
                state.value += addedNumber
            }
            else if (addedNumber === '0' && state.value !== '0') {
                state.value += addedNumber

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


export const {addDot, addNumber, removeNumber, clearValue} = inputSlice.actions;

export default inputSlice.reducer;

