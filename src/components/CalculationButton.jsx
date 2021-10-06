import {useDispatch} from "react-redux";
import {addElement} from '../redux/slices/calculationSlice'


export const CalculationButton = (props) => {

    const dispatch = useDispatch();


    return (
        <button onClick={() =>  dispatch(addElement('symbol'))}>{props.symbol}</button>
    )
}