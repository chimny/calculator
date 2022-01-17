import {createSlice} from "@reduxjs/toolkit";


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
        inputValueAssignment: {
            reducer: (state, action) => {
                const {firstNumber, operator, result} = state;

                if (action.payload) {
                    if (operator) {
                        return {...state, secondNumber: action.payload}
                    } else {
                        return {...state, firstNumber: action.payload}
                    }

                } else if (result) {

                    state.firstNumber = state.result;

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
                // if (state.input && state.firstNumber) return {...state,operator: action.payload,secondNumber:state.input,input:''}
                // return {...state, secondNumber: null, result: null, operator: action.payload};
                if(state.input) return {...state,secondNumber:state.input, input:''}
                return {...state, secondNumber:null, operator: action.payload, input:''};
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
            switch (operator) {
                case "+":
                    state.result = state.firstNumber + state.secondNumber;
                    break;
                case "-":
                    state.result = state.firstNumber - state.secondNumber;
                    break;
                case "*":
                    state.result = state.firstNumber * state.secondNumber;
                    break;
                case "/":
                    state.result = state.firstNumber / state.secondNumber;
                    break;
                default:
                    return state;
            }
        },
        resetOperation(state) {
            return state = initialState
        },

        addDot: (state) => {
            const prevState = state.input

            if (prevState === '') {
                state.input = '0.'
            } else if (prevState.includes('.')) {
                return prevState
            } else {
                state.input = prevState + '.'
            }
        },

        removeNumber: (state) => {
            const prevState = state.input;
            state.input = prevState.slice(0, prevState.length - 1)

        },
        clearValue: (state) => {
            state.input = '';
        },

        addNumber: (state, action) => {

            const addedNumber = String(action.payload);
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
    // extraReducers: (builder) => {
    //     builder.addCase(addNumber, (state) => {
    //         const {result} = state;
    //
    //         if (result) return initialState
    //
    //
    //     });
    //
    //
    // },


})

export const {
    inputValueAssignment,
    addOperator,
    calculateResult,
    resetOperation,
    addDot,
    removeNumber,
    clearValue,
    addNumber,
} =
    calculationSlice.actions;
export default calculationSlice.reducer;
