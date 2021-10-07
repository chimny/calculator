import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstNumber: null,
    operator: null,
    secondNumber: null
};


export const calculationSlice = createSlice({
    name: 'calculationSlice',
    initialState,
    reducers: {
        //@todo refactor reducer - filter number, symbol, number
        addElement: (state, action) => {
            const {firstNumber, operator} = state;
            if (firstNumber === null) {
                state.firstNumber = action.payload
            } else if (operator === null) {
                state.operator = action.payload
            } else {
                state.secondNumber = action.payload
            }
        }
    }
})


export const {addElement} = calculationSlice.actions;

export default calculationSlice.reducer;

