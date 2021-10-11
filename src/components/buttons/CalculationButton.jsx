import {useSelector, useDispatch} from "react-redux";
import {numberCalcValue, addOperator, operationSymbols} from '../../redux/slices/calculationSlice';
import {clearValue} from '../../redux/slices/inputSlice';

export const CalculationButton = (props) => {
    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber, operator, secondNumber} = useSelector((state => state.operationSequence));
    const dispatch = useDispatch();


    function updateInput() {
        dispatch(numberCalcValue(inputValue));
        dispatch(addOperator(props.symbol));
        dispatch(clearValue());
        if (props.symbol === '=') {
            dispatch(operationSymbols(inputValue))
        }


    }

    return (
        <button onClick={updateInput}>{props.symbol}</button>
    )
}