import {useDispatch} from "react-redux";
import {addNumber} from '../../../redux/actions/addNumber'
import {StyledNumButton} from "../../../styles/StyledNumButton";

export const NumberButton = (props) => {
    const dispatch = useDispatch();


    return (
        <StyledNumButton area={props.area} onClick={() => dispatch(addNumber(props.number))}>{props.number}</StyledNumButton>
    )
}