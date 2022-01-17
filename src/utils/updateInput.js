// import {addDot, removeNumber} from "../redux/slices/inputSlice";
import {inputValueAssignment, addOperator, calculateResult,addDot,removeNumber} from "../redux/slices/calculationSlice";



export function updateInput(currentInput, symbol, operator, dispatch, result) {


    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    } else if (symbol === 'Backspace') {
        return dispatch(removeNumber())
    }


    if (localSymbol === '.') {
        dispatch(addDot());
    }
        // else if (localSymbol === '-' && currentInput.length === 0 && result === '') {
        //     dispatch(addNumber(localSymbol))
    // }
    else {
        //
        // if (operator !== localSymbol) {
        //
        //     dispatch(inputValueAssignment(currentInput));
        //     dispatch(calculateResult(currentInput));
        //     dispatch(addOperator(localSymbol));
        // }
        // else {
            dispatch(inputValueAssignment(currentInput));
            dispatch(addOperator(localSymbol));

            if (localSymbol === '=') {
                if (operator) {
                    dispatch(calculateResult(currentInput))
                }
            }
        }
    // }


}

