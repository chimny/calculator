import {useSelector, useDispatch} from "react-redux";
import {numberCalcValue, addOperator,operationSymbols} from '../../redux/slices/calculationSlice'
import {clearValue} from '../../redux/slices/inputSlice'

export const CalculationButton = (props) => {
    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber,secondNumber} = useSelector((state => state.operationSequence));
    const dispatch = useDispatch();


    function updateInput() {
if(secondNumber){
    dispatch(operationSymbols())
}
        dispatch(numberCalcValue(inputValue));
        dispatch(addOperator(props.symbol))
        dispatch(clearValue());

    }

    return (
        <button onClick={updateInput}>{props.symbol}</button>
    )
}