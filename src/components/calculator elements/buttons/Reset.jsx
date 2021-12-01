import {useDispatch} from "react-redux";
import {resetOperation} from '../../../redux/slices/calculationSlice'
import {StyledClearButton} from "../../../styles/StyledClearButton";

export const Reset = () => {
    const dispatch = useDispatch();


    return (
        <StyledClearButton area={'Reset'}onClick={() => dispatch(resetOperation())}>Reset</StyledClearButton>
    )
}