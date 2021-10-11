import {useSelector, useDispatch} from "react-redux";
import {numberCalcValue, addOperator, operationSymbols} from '../../redux/slices/calculationSlice';
import {clearValue} from '../../redux/slices/inputSlice';

export const CalculationButton = (props) => {
    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber, operator, secondNumber} = useSelector((state => state.operationSequence));
    const dispatch = useDispatch();


    function updateInput() {
        if (props.symbol === '=') {
            dispatch(operationSymbols(inputValue))
        }
        dispatch(addOperator(props.symbol));
        dispatch(numberCalcValue(inputValue));
        dispatch(clearValue());

    }

    return (
        <button onClick={updateInput}>{props.symbol}</button>
    )
}