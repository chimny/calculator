import {addOperator, calculateResult, addDot, removeNumber} from "../redux/slices/calculationSlice";


export function updateInput(currentInput, symbol, operator, dispatch, result) {


    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    } else if (symbol === 'Backspace') {
        return dispatch(removeNumber())
    }


    if (localSymbol === '.') {
        dispatch(addDot());
    } else {

        dispatch(addOperator(localSymbol));

        if (localSymbol === '=') {
            if (operator) {
                dispatch(calculateResult(currentInput))
            }
        }
    }


}

