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
        numberCalcValue(state, action) {
            if (state.firstNumber === null) {
                state.firstNumber = action.payload
            } else {
                state.secondNumber = action.payload
            }
        },
        addOperator(state, action) {
            state.operator = action.payload
        },
        operationSymbols(state) {
            const {firstNumber, operator, secondNumber} = state;
            const firstNumberEnc = Number(firstNumber);
            const secondNumberEnc = Number(secondNumber);
            switch (operator) {
                case '+':
                    state.firstNumber = state.result;
                    state.result = firstNumberEnc + secondNumberEnc;
                    break;
                case '-':
                    state.firstNumber = state.result;
                    state.result = firstNumberEnc - secondNumberEnc;
                    break;
                case '*':
                    state.firstNumber = state.result;
                    state.result = firstNumberEnc * secondNumberEnc;
                    break;
                case '/':
                    state.firstNumber = state.result;
                    state.result = firstNumberEnc / secondNumberEnc;
                    break;
                case '=':
                    state.result = `=${state.result}`;
                    break;
                default:
                    return;
            }
        }

    }
})


export const {numberCalcValue, addOperator,operationSymbols} = calculationSlice.actions;
export default calculationSlice.reducer;



