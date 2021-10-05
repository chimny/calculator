import {useDispatch,useSelector} from "react-redux";
import {addElement} from '../redux/slices/calculationSlice'


export const CalculationButton = (props)=>{

    const firstNumber = useSelector((state)=> state.inputValue.value);
const dispatch = useDispatch();
    const updateFunction = (symbol) => {
        dispatch(addElement(symbol));
    }

    return(
        <button onClick={()=> updateFunction(props.symbol)}>{props.symbol} {firstNumber}</button>
    )
}