import {Keyboard} from "./Keyboard";
import {useSelector, useDispatch} from "react-redux";
import {updateValue} from "../redux/slices/inputSlice";
import {StyledCalculator} from "../styles/StyledCalculator";

export const Calculator = () => {


    const dispatch = useDispatch();
    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber, operator, secondNumber, result} = useSelector((state => state.operationSequence));

    // const updateFunction = (e) => {
    //     dispatch(updateValue(e.target.value));
    // }


    return (
        <StyledCalculator>

            <div className={'calOperations'}>
                <p>  {firstNumber} {operator} {secondNumber}</p>
                <p>{inputValue} {result}</p>
                {/*<input value={inputValue} onChange={updateFunction}/>*/}
            </div>

            <Keyboard/>

        </StyledCalculator>

    )
}