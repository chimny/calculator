import {Keyboard} from "./Keyboard";
import {useSelector, useDispatch} from "react-redux";
import {updateValue} from "../redux/slices/inputSlice";


export const Calculator = () => {
    const inputValue = useSelector((state => state.inputValue.value));
    const dispatch = useDispatch();

    const updateFunction = (e) => {
            dispatch(updateValue(e.target.value));
        }





    return (

        <div>
            <input type="text" value={inputValue} onChange={updateFunction}/>
            <br/>
            <Keyboard/>
        </div>

    )
}