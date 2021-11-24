import {useDispatch} from "react-redux";
import {addNumber} from '../../redux/slices/inputSlice'
import {StyledNumButton} from "../../styles/StyledNumButton";

export const NumberButton = (props) => {
    const dispatch = useDispatch();


    return (
        <StyledNumButton area={props.number} onClick={() => dispatch(addNumber(props.number))}>{props.number}</StyledNumButton>
    )
}