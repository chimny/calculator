import {useDispatch} from "react-redux";
import {removeNumber} from '../redux/slices/inputSlice'

export const BackButton = ()=>{
    const dispatch = useDispatch();

    function exec(){
        dispatch(removeNumber())
    }

    return(
        <button onClick={()=> exec()} > Delete</button>
    )
}