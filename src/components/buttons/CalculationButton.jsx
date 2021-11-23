import {useSelector, useDispatch} from "react-redux";
import {updateInput} from "../../utils/updateInput";


export const CalculationButton = (props) => {
    const inputValue = useSelector((state => state.inputValue.value));
    const activeOperator = useSelector((state => state.operationSequence.operator));
    const dispatch = useDispatch();

    return (
        <button onClick={()=> updateInput(inputValue,props.symbol,activeOperator,dispatch)}>{props.symbol}</button>
    )
}