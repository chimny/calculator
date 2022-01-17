import {useSelector} from "react-redux";
import {StyledCalcWindow} from "../../styles/StyledCalcWindow";

export const CalcWindow = () => {

    const {firstNumber, operator, secondNumber, result,input} = useSelector((state => state.calculator));

    let activeInputView;
    let equalSignVisible;


    if (result) {
        equalSignVisible = <span>=</span>;
        activeInputView = <span>{result}</span>;
    } else {
        equalSignVisible = null;
        activeInputView = <span>{input}</span>;
    }




    return (

        <StyledCalcWindow>
            <p>{firstNumber} {operator} {secondNumber} {equalSignVisible}</p>
            <p> {activeInputView}</p>

        </StyledCalcWindow>


    )
}