import {createSlice} from "@reduxjs/toolkit";
import {addNumber} from "./inputSlice";


//@todo if there is result and addNumber occurs, initialState should be cleared


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
        inputValueAssignment: {
            reducer: (state, action) => {
                const {firstNumber, result} = state;

                if (action.payload) {
                    return firstNumber === null ? {...state, firstNumber: action.payload} : {
                        ...state,
                        secondNumber: action.payload
                    }
                } else {
                    if (result) {
                        state.firstNumber = state.result;
                    }
                }
            },
            prepare: (inputValue) => {
                return {payload: inputValue[inputValue.length - 1] === '.' ? Number(inputValue.slice(0, -1)) : Number(inputValue)};
            },
        },
        addOperator(state, action) {
            if (action.payload === "=") return;
            return {...state, secondNumber: null, result: null, operator: action.payload};
        },
        calculateResult(state, action) {
            const inputValue = Number(action.payload);
            const {firstNumber, operator, result, secondNumber} = state;
            let secondValue = inputValue;
            if (result || result === 0) {
                state.firstNumber = state.result;
                secondValue = Number(secondNumber);
            }
            switch (operator) {
                case "+":
                    state.result = firstNumber + secondValue;
                    break;
                case "-":
                    state.result = firstNumber - secondValue;
                    break;
                case "*":
                    state.result = firstNumber * secondValue;
                    break;
                case "/":
                    state.result = firstNumber / secondValue;
                    break;
                default:
                    return state;
            }
        },
        resetOperation(state) {
            return state = initialState
        }
    }


});

export const {inputValueAssignment, addOperator, calculateResult, resetOperation} =
    calculationSlice.actions;
export default calculationSlice.reducer;
