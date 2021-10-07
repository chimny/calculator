import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstNumber: null,
    operator: null,
    secondNumber: null,
    result: null
};

export const calculationSlice = createSlice({
    name: 'calculationSlice',
    initialState,
    reducers: {
        numberCalcValue: (state, action) => {
            if (state.firstNumber === null) {
                state.firstNumber = action.payload
            } else {
                state.secondNumber = action.payload
            }
        },
        addOperator: (state, action) => {
            state.operator = action.payload
        },
        giveResult: (state) => {
            const {firstNumber, operator, secondNumber} = state;
            const firstNumberEnc = Number(firstNumber);
            const secondNumberEnc = Number(secondNumber);
            switch (operator) {
                case '+':
                    state.result = firstNumberEnc + secondNumberEnc;
                    state.firstNumber = state.result;
                    break;
                case '-':
                    state.result = firstNumberEnc - secondNumberEnc
                    break;
                case '*':
                    state.result = firstNumberEnc * secondNumberEnc
                    break;
                case '/':
                    state.result = firstNumberEnc / secondNumberEnc
                    break;
            }
        }

    }
})


export const {numberCalcValue, addOperator,giveResult} = calculationSlice.actions;
export default calculationSlice.reducer;


/*

export const calculationSlice = createSlice({
    name: 'calculationSlice',
    initialState,
    reducers: {
        //@todo refactor reducer - filter number, symbol, number
        addElement: (state, action) => {
            const {firstNumber, operator} = state;
            if (firstNumber === null) {
                state.firstNumber = action.payload
                console.log(action)
            //    @todo przekazywanie symbolu jaki został użyty jako separator
            } else if (operator === null) {
                state.operator = action.payload
            } else {
                state.secondNumber = action.payload
            }
        }
    }
})

*/

