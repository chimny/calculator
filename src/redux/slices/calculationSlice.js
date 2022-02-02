import {createSlice} from "@reduxjs/toolkit";
import {calculateValue} from "../../utils/calculateValue";

//filtering symbols eligible for math operation
const {OPERATION_SYMBOLS} = require('../../data/symbols');
const eligibleSymbols = OPERATION_SYMBOLS.map(el => el.mathAction)

const initialState = {
    firstNumber: null,
    operator: null,
    secondNumber: null,
    result: null,
    input: '',
};


export const calculationSlice = createSlice({
    name: "calculationSlice",
    initialState,
    reducers: {
        addOperator(state, action) {
            if (eligibleSymbols.includes(action.payload) && action.payload !== '=') {
                const {firstNumber, secondNumber, result, operator, input} = state;
                if (result) {
                    return {...initialState, firstNumber: state.result, operator: action.payload}
                }
                if (!firstNumber) {
                    return {...initialState, firstNumber: Number(state.input), operator: action.payload}
                } else if (secondNumber === null) {
                    if (input) {
                        const calculation = calculateValue(firstNumber, operator, Number(input));
                        return {...initialState, firstNumber: calculation, operator: action.payload}
                    } else return {...initialState, firstNumber, operator: action.payload}
                } else if (firstNumber || firstNumber === 0) {
                    return {...initialState, secondNumber: Number(state.input), operator: action.payload}
                }
            }


        },
        calculateResult(state, action) {
            const {operator, result} = state;
            if (action.payload) {
                state.secondNumber = Number(action.payload);
            } else if (state.input) {
                state.secondNumber = Number(state.input);
                state.input = ''
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
            const prevState = state.input

            if (prevState === '') {
                state.input = '0.'
            } else if (prevState.includes('.')) {

            } else {
                state.input = prevState + '.'
            }
        },

        removeNumber: (state) => {
            const prevState = state.input;
            state.input = prevState.slice(0, prevState.length - 1)

        },


        addNumber: (state, action) => {

            const addedNumber = String(action.payload);

            if (state.result) {
                return {...initialState, input: addedNumber}
            }

            if (state.input === '0' && Number(addedNumber)) {
                state.input = addedNumber
            } else if (Number(addedNumber)) {
                state.input += addedNumber
            } else if (addedNumber === '0' && state.input !== '0') {
                state.input += addedNumber

            }
            return state
        }

    },

})

export const {
    inputValueAssignment,
    addOperator,
    calculateResult,
    resetOperation,
    addDot,
    removeNumber,
    addNumber,
} =
    calculationSlice.actions;
export default calculationSlice.reducer;
