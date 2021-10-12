import {useDispatch} from "react-redux";
import {removeNumber} from '../../redux/slices/inputSlice'

export const DEL = () => {
    const dispatch = useDispatch();


    return (
        <button onClick={() => dispatch(removeNumber())}>DEL</button>
    )
}