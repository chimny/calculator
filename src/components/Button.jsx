import {useDispatch} from "react-redux";
import {addNumber} from '../redux/slices/inputSlice'

export const Button = (props) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addNumber(props.number))}>{props.number}</button>
    )
}