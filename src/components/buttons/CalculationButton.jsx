import {useSelector, useDispatch} from "react-redux";
import {updateInput} from "../../utils/updateInput";
import {StyledCalculationButton} from "../../styles/StyledCalculationButton";

export const CalculationButton = (props) => {
    const {symbol,area} = props;
    const inputValue = useSelector((state => state.inputValue.value));
    const result = useSelector((state => state.operationSequence.result));
    const activeOperator = useSelector((state => state.operationSequence.operator));
    const dispatch = useDispatch();

    return (
        <StyledCalculationButton area={area} symbol={symbol} onClick={() => updateInput(inputValue, symbol, activeOperator, dispatch)}>{symbol}</StyledCalculationButton>
    )
}