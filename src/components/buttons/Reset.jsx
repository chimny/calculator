import {useDispatch} from "react-redux";
import {resetOperation} from '../../redux/slices/calculationSlice'

export const Reset = () => {
const dispatch = useDispatch();


    return (
        <button onClick={()=> dispatch(resetOperation())}>Reset</button>
    )
}