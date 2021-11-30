import {addNumber, clearValue, updateValue} from "../redux/slices/inputSlice";
import {addOperator, numberCalcValue, operationSymbols} from "../redux/slices/calculationSlice";


export function updateInput(currentInput, symbol, operator, dispatch, result) {

    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    }

    if (localSymbol === '.') {
        if (currentInput.includes('.') || currentInput.length === 0) {
            return
        }
        dispatch(updateValue(localSymbol));
    }
    else if(localSymbol === '-' && currentInput.length === 0 && result.length === 0){
        dispatch(addNumber(symbol))
    }

    else {
        dispatch(numberCalcValue(currentInput));
        dispatch(addOperator(localSymbol));
        dispatch(clearValue());
        if (localSymbol === '=') {
            if (operator) {
                dispatch(operationSymbols(currentInput))
            }
        }
    }
}