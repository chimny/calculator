import {useSelector} from "react-redux";
import {StyledCalcWindow} from "../styles/StyledCalcWindow";

export const CalcWindow = () => {

    const inputValue = useSelector((state => state.inputValue.value));
    const {firstNumber, operator, secondNumber, result} = useSelector((state => state.operationSequence));

    let activeInputView;

    let equalSignVisible;
    if (result) {
        equalSignVisible = <span>=</span>;
        activeInputView = <span>{result}</span>;
    } else {
        equalSignVisible = null;
        activeInputView = <span>{inputValue}</span>;
    }


    return (

        <StyledCalcWindow>
            <p>{firstNumber} {operator} {secondNumber} {equalSignVisible}</p>
            {/*@todo if input has value result should be hidden*/}
            <p> {activeInputView}</p>

        </StyledCalcWindow>


    )
}