import {useDispatch} from "react-redux";
import {removeNumber} from '../../redux/slices/inputSlice'
import {StyledClearButton} from "../../styles/StyledClearButton";

export const DEL = () => {
    const dispatch = useDispatch();


    return (
        <StyledClearButton onClick={() => dispatch(removeNumber())}>DEL</StyledClearButton>
    )
}