import {useSelector} from "react-redux";
import {updateInput} from "../../../utils/updateInput";
import {StyledCalculationButton} from "../../../styles/StyledCalculationButton";

export const CalculationButton = (props) => {
    const {symbol,area} = props;
    const {operator, input} = useSelector((state => state.calculator));

    return (
        <StyledCalculationButton area={area} symbol={symbol} onClick={() => updateInput(input, symbol, operator)}>{symbol}</StyledCalculationButton>
    )
}