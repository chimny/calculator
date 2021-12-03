import {useSelector, useDispatch} from "react-redux";
import {updateInput} from "../../../utils/updateInput";
import {StyledCalculationButton} from "../../../styles/StyledCalculationButton";

export const CalculationButton = (props) => {
    const {symbol,area} = props;
    const {value : inputValue} = useSelector((state => state.inputValue));
    const {result, operator} = useSelector((state => state.operationSequence));
    const dispatch = useDispatch();

    return (
        <StyledCalculationButton area={area} symbol={symbol} onClick={() => updateInput(inputValue, symbol, operator, dispatch, result)}>{symbol}</StyledCalculationButton>
    )
}