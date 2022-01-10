import {addNumber, clearValue, addDot} from "../redux/slices/inputSlice";
import {addOperator, numberCalcValue, operationSymbols} from "../redux/slices/calculationSlice";


export function updateInput(currentInput, symbol, operator, dispatch, result) {

    // @todo when the results are full inputing should clear calculations
    //function launches sometimes twice
    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    }

    if (localSymbol === '.') {
        if (currentInput.includes('.') ) {
            return
        }
        dispatch(addDot());
    } else if (localSymbol === '-' && currentInput.length === 0 && result === '') {
        dispatch(addNumber(symbol))
    } else {
let validatedInput = currentInput[currentInput.length-1] === '.' ? currentInput.slice(0, -1) : currentInput;
dispatch(numberCalcValue(validatedInput));

        dispatch(addOperator(localSymbol));
        dispatch(clearValue());
        if (localSymbol === '=') {
            if (operator) {
                dispatch(operationSymbols(currentInput))
            }
        }
    }


}


/*export function updateInput(currentInput, symbol, operator, dispatch) {

    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    }

    switch (localSymbol) {
        case '.':
            if (currentInput.includes('.') || currentInput.length === 0) {
                return
            }
            dispatch(updateValue(localSymbol));
            break;
        case '-':
            if (currentInput.length === 0 || currentInput.includes(localSymbol)) dispatch(addNumber(localSymbol))

        default:
            dispatch(numberCalcValue(currentInput));
            dispatch(addOperator(localSymbol));
            dispatch(clearValue());
            if (localSymbol === '=') {
                if (operator) {
                    dispatch(operationSymbols(currentInput))
                }
            }
            break;
    }
}*/
