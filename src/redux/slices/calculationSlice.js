import {createSlice} from "@reduxjs/toolkit";
import {addNumber} from "../actions/addNumber";


//@todo jeżeli jest operator inny od wpisanego i jest input uzupełniony powinna się odbyć kalkulacja przed dodaniem nowego znaku

const {OPERATION_SYMBOLS} = require('../../data/symbols');

const eligibleSymbols = OPERATION_SYMBOLS.map(el => el.mathAction)

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
            if (eligibleSymbols.includes(action.payload)) {
                if (action.payload === "=") return;
                if (!state.firstNumber) return {...state, firstNumber: 0, operator: action.payload};
                return {...state, secondNumber: null, result: null, operator: action.payload};
            }
        },
        calculateResult(state, action) {
            const {firstNumber, operator, result, secondNumber} = state;
            let secondValue = Number(action.payload);
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

    },
    extraReducers: (builder) => {
        builder.addCase(addNumber, (state) => {
            const {result} = state;

            if (result) return initialState


        });


    },


})

export const {inputValueAssignment,addOperator, calculateResult, resetOperation} =
    calculationSlice.actions;
export default calculationSlice.reducer;
