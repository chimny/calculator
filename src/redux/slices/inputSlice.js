import {createSlice} from "@reduxjs/toolkit";
import {inputValueAssignment} from './calculationSlice';
import {addNumber} from "../actions/addNumber";

const initialState = {
    value: '',
}

export const inputSlice = createSlice({
    name: 'calcInput',
    initialState,
    reducers: {
        addDot: (state) => {
            const prevState = state.value

            if (prevState === '') {
                state.value = '0.'
            } else if (prevState.includes('.')) {
                return prevState
            } else {
                state.value = prevState + '.'
            }
        },

        removeNumber: (state) => {
            const prevState = state.value;
            state.value = prevState.slice(0, prevState.length - 1)

        },
        clearValue: (state) => {
            state.value = '';
        }
    },

    extraReducers: builder => {
        builder.addCase(inputValueAssignment, (state) => {
            state.value = ''
        })
            .addCase(addNumber, (state, action) => {

                const addedNumber = String(action.payload);
                if (state.value === '0' && Number(addedNumber)) {
                    state.value = addedNumber
                } else if (Number(addedNumber)) {
                    state.value += addedNumber
                } else if (addedNumber === '0' && state.value !== '0') {
                    state.value += addedNumber

                }
                return state

            })
    }
});


export const {addDot,  removeNumber, clearValue} = inputSlice.actions;

export default inputSlice.reducer;

