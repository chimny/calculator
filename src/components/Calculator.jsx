import {Keyboard} from "./Keyboard";
import {useSelector, useDispatch} from "react-redux";
import {StyledCalculator} from "../styles/StyledCalculator";
import {StyledCalcWindow} from "../styles/StyledCalcWindow";

export const Calculator = () => {


    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber, operator, secondNumber, result} = useSelector((state => state.operationSequence));


    return (
        <StyledCalculator>
            <div>
                <p>calc</p>
                <p>theme</p>
            </div>
            <StyledCalcWindow>
                <p>  {firstNumber} {operator} {secondNumber}</p>
                {/*@todo if input has value result should be hidden*/}
                <p>  {inputValue} {result}</p>

            </StyledCalcWindow>

            <Keyboard/>

        </StyledCalculator>

    )
}