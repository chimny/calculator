import {useSelector} from "react-redux";
import {StyledCalcWindow} from "../styles/StyledCalcWindow";

export const CalcWindow = () => {

    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber, operator, secondNumber, result} = useSelector((state => state.operationSequence));



    return(

        <StyledCalcWindow>
            <p>  {firstNumber} {operator} {secondNumber}</p>
            {/*@todo if input has value result should be hidden*/}
            <p>  {inputValue} {result}</p>

        </StyledCalcWindow>


    )
}