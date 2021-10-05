import {useDispatch} from "react-redux";
import {addElement} from '../redux/slices/calculationSlice'


export const CalculationButton = (props) => {

    const dispatch = useDispatch();
    const updateFunction = (symbol) => {
        dispatch(addElement(symbol));
    }

    return (
        <button onClick={() => updateFunction(props.symbol)}>{props.symbol}</button>
    )
}