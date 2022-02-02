import {useDispatch} from "react-redux";
import {addNumber} from '../../../redux/slices/calculationSlice'
import {StyledNumButton} from "../../../styles/StyledNumButton";

export const NumberButton = (props) => {
    const dispatch = useDispatch();
    const {number, area} = props;


    return (
        <StyledNumButton area={area}
                         onClick={() => dispatch(addNumber(number))}>{number}</StyledNumButton>
    )
}