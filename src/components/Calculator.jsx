import {Keyboard} from "./Keyboard";
import {useSelector, useDispatch} from "react-redux";
import {updateValue} from "../redux/slices/inputSlice";


export const Calculator = () => {
    const dispatch = useDispatch();
    //input value below
    const inputValue = useSelector((state => state.inputValue.value));
    //data from the operations
    const {firstNumber,operator,secondNumber} = useSelector((state => state.operationSequence));

    const updateFunction = (e) => {
            dispatch(updateValue(e.target.value));
        }

    return (

        <div>
            <input type="text" value={inputValue} onChange={updateFunction}/>
            <br/>
            <Keyboard/>
            {/*below calculation state for preview purposes*/}
            <br/>
            {firstNumber} {operator} {secondNumber}
        </div>

    )
}