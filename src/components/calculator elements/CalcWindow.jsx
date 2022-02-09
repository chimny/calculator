import {useSelector} from "react-redux";
import {StyledCalcWindow} from "../../styles/StyledCalcWindow";

export const CalcWindow = () => {

    const {firstNumber, operator, secondNumber, result, input} = useSelector((state => state.calculator));

    return (

        <StyledCalcWindow>
            <p>{firstNumber} {operator} {secondNumber} {result ? '=' : null}</p>
            <p> {result ?? input}</p>
        </StyledCalcWindow>

    )
}