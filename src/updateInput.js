import {clearValue, updateValue} from "./redux/slices/inputSlice";
import {addOperator, numberCalcValue, operationSymbols} from "./redux/slices/calculationSlice";
import {useDispatch} from "react-redux";


export  function updateInput(currentInput, symbol, operator, dispatch) {

    let localSymbol = symbol;
    if (symbol === 'Enter') {
        localSymbol = "="
    }

    if (localSymbol === '.') {
        if (currentInput.includes('.') || currentInput.length === 0) {
            return
        }
        dispatch(updateValue(localSymbol));
    } else {
        dispatch(numberCalcValue(currentInput));
        dispatch(addOperator(localSymbol));
        dispatch(clearValue());
        if (localSymbol === '=') {
            if (operator) {
                dispatch(operationSymbols(currentInput))
            } else {
                return
            }
        }
    }
}