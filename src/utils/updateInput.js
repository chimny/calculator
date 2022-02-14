import {addOperator, calculateResult, addDot, removeNumber} from "../redux/slices/calculationSlice";
import {store} from "../redux/store";


//@todo add test for this function
export function updateInput(currentInput, symbol, operator) {

    const dispatch = (action) => {
        store.dispatch(action)
    }

    let localSymbol = symbol === 'Enter' ? "=" : symbol;

    switch (localSymbol) {
        case 'Backspace':
            return dispatch(removeNumber())
        case '.':
            return dispatch(addDot())
        case '=':
            if (operator && currentInput) {
                return dispatch(calculateResult(currentInput))
            }
            break
        default:
            dispatch(addOperator(localSymbol));
    }

}



