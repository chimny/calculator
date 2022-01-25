import {addOperator, calculateResult, addDot, removeNumber} from "../redux/slices/calculationSlice";
import {store} from "../redux/store";


export function updateInput(currentInput, symbol, operator) {


    const dispatch = (action)=>{
        store.dispatch(action)
    }

    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    } else if (symbol === 'Backspace') {
        return dispatch(removeNumber())
    }


    if (localSymbol === '.') {
      return  dispatch(addDot());
    } else {

        dispatch(addOperator(localSymbol));

        if (localSymbol === '=') {
            if (operator && currentInput) {
                dispatch(calculateResult(currentInput))
            }
        }
    }


}

