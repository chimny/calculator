import {useSelector, useDispatch} from "react-redux";
import {updateInput} from "../../../utils/updateInput";
import {StyledCalculationButton} from "../../../styles/StyledCalculationButton";

export const CalculationButton = (props) => {
    const {symbol,area} = props;
    const {result, operator, input} = useSelector((state => state.calculator));
    const dispatch = useDispatch();

    return (
        <StyledCalculationButton area={area} symbol={symbol} onClick={() => updateInput(input, symbol, operator, dispatch, result)}>{symbol}</StyledCalculationButton>
    )
}