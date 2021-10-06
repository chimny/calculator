import {useDispatch} from "react-redux";
import {removeNumber} from '../../redux/slices/inputSlice'

export const BackButton = () => {
    const dispatch = useDispatch();


    return (
        <button onClick={() => dispatch(removeNumber())}>Delete</button>
    )
}