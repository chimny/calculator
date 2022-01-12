
import {addDot, removeNumber} from "../redux/slices/inputSlice";
import {addOperator, inputValueAssignment, calculateResult} from "../redux/slices/calculationSlice";
import {addNumber} from '../redux/actions/addNumber';


export function updateInput(currentInput, symbol, operator, dispatch, result) {

    
    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    }

else if(symbol === 'Backspace'){
    return dispatch(removeNumber())
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

