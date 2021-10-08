import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstNumber: '12',
    operator: '+',
    secondNumber: '4',
    result: null
};

export const calculationSlice = createSlice({
        name: 'calculationSlice',
        initialState,
        reducers: {
            numberCalcValue(state, action) {
                if (state.firstNumber === null) {
                    state.firstNumber = action.payload
                } else if(state.secondNumber === null) {
                    state.secondNumber = action.payload
                }
            },
            addOperator(state, action) {
                if (action.payload === '=') return
                state.operator = action.payload
            },
            operationSymbols(state) {
                const {firstNumber, operator, secondNumber} = state;
                const firstNumberEnc = Number(firstNumber);
                const secondNumberEnc = Number(secondNumber);
                switch (operator) {
                    case '+':
                        state.result = firstNumberEnc + secondNumberEnc;
                        break;
                    case '-':
                        state.result = firstNumberEnc - secondNumberEnc;
                        break;
                    case '*':
                        state.result = firstNumberEnc * secondNumberEnc;
                        break;
                    case '/':
                        state.result = firstNumberEnc / secondNumberEnc;
                        break;
                    default:
                        return;
                }
            },
            giveResult(state) {
                const {firstNumber, secondNumber, operator} = state;
                const firstNumberEnc = Number(firstNumber);
                const secondNumberEnc = Number(secondNumber);
                state.firstNumber = firstNumberEnc;
                state.secondNumber = secondNumber;
                state.operator = operator
                state.result = firstNumberEnc + secondNumberEnc;


            }
        },
    }
)


export const {numberCalcValue, addOperator, operationSymbols, giveResult} = calculationSlice.actions;
export default calculationSlice.reducer;



