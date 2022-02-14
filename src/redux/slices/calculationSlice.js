import {createSlice} from "@reduxjs/toolkit";
import {calculateValue} from "../../utils/calculateValue";

//filtering symbols eligible for math operation
const {OPERATION_SYMBOLS} = require('../../data/symbols');
const eligibleSymbols = OPERATION_SYMBOLS.map(el => el.mathAction)

const initialState = {
    firstNumber: null, operator: null, secondNumber: null, result: null, input: '',
};


export const calculationSlice = createSlice({
    name: "calculationSlice", initialState, reducers: {

        addOperator(state, action) {
            if (eligibleSymbols.includes(action.payload) && action.payload !== '=') {
                const {firstNumber, secondNumber, result, operator, input} = state;
                const calculation = calculateValue(Number(firstNumber), operator, Number(input));
                if (result) {
                    return {...initialState, firstNumber: state.result, operator: action.payload}
                }
                if (secondNumber === null && state.firstNumber !== null) {
                    return input ? {...initialState, firstNumber: calculation, operator: action.payload} : {...initialState, firstNumber, operator: action.payload}
                }
                return firstNumber === null ? {...initialState, firstNumber: Number(state.input), operator: action.payload} : {...initialState, secondNumber: Number(state.input), operator: action.payload}
            }
        },

        calculateResult(state, action) {
            const {operator, result} = state;
            if (action.payload) {
                state.secondNumber = Number(action.payload);
            } else if (state.input) {
                return {...state, secondNumber: Number(state.input), input: ''}
            }
            if (result || result === 0) {
                state.firstNumber = result;
            }
            state.result = calculateValue(state.firstNumber, operator, state.secondNumber)
        },

        resetOperation() {
            return {...initialState}
        },

        addDot: (state) => {
            const prevState = state.input;
            if (prevState.includes('.')) return;
            return prevState === '' ? {...state, input: '0.'} : {...state, input: prevState + '.'}
        },

        removeNumber: (state) => {
            const prevState = state.input;
            state.input = prevState.slice(0, prevState.length - 1)
        },

        addNumber: (state, action) => {
            if (!Number(action.payload) && action.payload !== '0') return state;
            if (state.result || state.input === '0') {
                return {...initialState, input: String(action.payload)}
            }
            if (state.input.length > 45) return
            state.input += String(action.payload)
        },
    },
},)

export const {
    inputValueAssignment, addOperator, calculateResult, resetOperation, addDot, removeNumber, addNumber
} = calculationSlice.actions;
export default calculationSlice.reducer;
