import {useSelector, useDispatch} from "react-redux";
import {addElement} from '../redux/slices/calculationSlice'
import {clearValue} from '../redux/slices/inputSlice'

export const CalculationButton = (props) => {
    const inputValue = useSelector((state => state.inputValue.value));
    const dispatch = useDispatch();


    function updateInput() {
        dispatch(addElement(inputValue));
        dispatch(clearValue());
    }

    return (
        <button onClick={updateInput}>{props.symbol}</button>
    )
}