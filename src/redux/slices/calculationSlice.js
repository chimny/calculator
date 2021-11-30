import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    firstNumber: null,
    operator: null,
    secondNumber: null,
    result: null,
};

export const calculationSlice = createSlice({
    name: "calculationSlice",
    initialState,
    reducers: {
        numberCalcValue(state, action) {
            if (action.payload) {
                if (state.firstNumber === null) {
                    state.firstNumber = action.payload;
                } else {
                    state.secondNumber = action.payload;
                }
            } else {
                state.firstNumber = state.result;
                //@todo test functionalibity added
                state.result = '';
            }
        },
        addOperator(state, action) {
            if (action.payload === "=") return;
            state.operator = action.payload;
        },
        operationSymbols(state, action) {
            const inputValue = Number(action.payload);
            const {firstNumber, operator, result, secondNumber} = state;
            const firstNumberEnc = Number(firstNumber);
            let secondNumberEnc = inputValue;
            if (result || result === 0) {
                state.firstNumber = state.result;
                secondNumberEnc = Number(secondNumber);
            }
            switch (operator) {
                case "+":
                    state.result = firstNumberEnc + secondNumberEnc;
                    break;
                case "-":
                    state.result = firstNumberEnc - secondNumberEnc;
                    break;
                case "*":
                    state.result = firstNumberEnc * secondNumberEnc;
                    break;
                case "/":
                    state.result = firstNumberEnc / secondNumberEnc;
                    break;
                default:
                    return state;
            }
        },
        resetOperation(state) {
            return state = {
                firstNumber: null,
                operator: null,
                secondNumber: null,
                result: null,
            }
        }
    },
});

export const {numberCalcValue, addOperator, operationSymbols, resetOperation} =
    calculationSlice.actions;
export default calculationSlice.reducer;
