
import {addNumber,addDot} from "../redux/slices/inputSlice";
import {addOperator, inputValueAssignment, calculateResult} from "../redux/slices/calculationSlice";



export function updateInput(currentInput, symbol, operator, dispatch, result) {

    
    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    }

    if (localSymbol === '.') {
        dispatch(addDot());
    } else if (localSymbol === '-' && currentInput.length === 0 && result === '') {
        dispatch(addNumber(symbol))
    } else {
        dispatch(inputValueAssignment(currentInput));
        dispatch(addOperator(localSymbol));

        if (localSymbol === '=') {
            if (operator) {
                dispatch(calculateResult(currentInput))
            }
        }
    }


}

