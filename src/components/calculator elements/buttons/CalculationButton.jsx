import {useSelector} from "react-redux";
import {updateInput} from "../../../utils/updateInput";
import {StyledCalculationButton} from "../../../styles/StyledCalculationButton";

export const CalculationButton = (props) => {
    const {symbol, area} = props;
    const {operator, input} = useSelector((state => state.calculator));

    function updateHandler() {
        updateInput(input, symbol, operator)
    }

    return (
        <StyledCalculationButton area={area} symbol={symbol}
                                 onClick={updateHandler}>{symbol}</StyledCalculationButton>
    )
}