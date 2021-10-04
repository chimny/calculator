import {useDispatch} from "react-redux";
import {addNumber} from '../redux/slices/inputSlice'

export const Button = (props)=>{
    const dispatch = useDispatch();

    const updateFunction = (argument) => {
        dispatch(addNumber(argument));
    }


    return(
        <button onClick={()=>updateFunction(props.number)}>{props.number}</button>
    )
}