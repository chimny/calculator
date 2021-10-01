import {Keyboard} from "./Keyboard";
import {useSelector, useDispatch} from "react-redux";
import {increment, updateValue} from "../redux/slices/inputSlice";

import {changehandler} from '../functions/changeHandler'

export const Calculator = () => {
    const inputValue = useSelector((state => state.inputValue.value))
    const dispatch = useDispatch()

    const updateFunction = (e) => {
        e.preventDefault();
        if (!Number.isNaN(inputValue)) {
            dispatch(updateValue(e.target.value));
        }


    }


    return (

        <div>
            <input type="text" value={inputValue} onChange={updateFunction}/>
            <br/>
            <Keyboard/>
        </div>

    )
}