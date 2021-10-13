import {useSelector, useDispatch} from "react-redux";
import {numberCalcValue, addOperator, operationSymbols} from '../../redux/slices/calculationSlice';
import {clearValue, updateValue} from '../../redux/slices/inputSlice';

export const CalculationButton = (props) => {
    const inputValue = useSelector((state => state.inputValue.value));
    const dispatch = useDispatch();


    function updateInput() {
        if (props.symbol === '.') {
            dispatch(updateValue(props.symbol));
        } else {
            dispatch(numberCalcValue(inputValue));
            dispatch(addOperator(props.symbol));
            dispatch(clearValue());
            if (props.symbol === '=') {
                dispatch(operationSymbols(inputValue))
            }
        }

    }

    return (
        <button onClick={updateInput}>{props.symbol}</button>
    )
}