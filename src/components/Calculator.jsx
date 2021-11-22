import {Keyboard} from "./Keyboard";
import {useSelector, useDispatch} from "react-redux";
import {updateValue} from "../redux/slices/inputSlice";
import {StyledCalculator} from "../styles/StyledCalculator";

export const Calculator = () => {


    const dispatch = useDispatch();
    //input value below
    const inputValue = useSelector((state => state.inputValue.value));
    //data from the operations
    const {firstNumber, operator, secondNumber, result} = useSelector((state => state.operationSequence));

    const updateFunction = (e) => {
        dispatch(updateValue(e.target.value));
    }



    return (

        <StyledCalculator>
            <input value={inputValue} onChange={updateFunction}/>
            <br/>
            <Keyboard/>
            {/*below calculation state for preview purposes*/}
            <br/>
            {firstNumber} {operator} {secondNumber}
            <br/>
            <h1>{result}</h1>
        </StyledCalculator>

    )
}