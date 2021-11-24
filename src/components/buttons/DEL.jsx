import {useDispatch} from "react-redux";
import {removeNumber} from '../../redux/slices/inputSlice'
import {StyledClearButton} from "../../styles/StyledClearButton";

export const DEL = () => {
    const dispatch = useDispatch();


    return (
        <StyledClearButton area={'DEL'}onClick={() => dispatch(removeNumber())}>DEL</StyledClearButton>
    )
}