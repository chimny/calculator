import {StyledCalcHeader} from "../../styles/StyledCalcHeader";


//testing purposes
import {useDispatch} from "react-redux";
import {setTheme} from "../../redux/slices/themeSlice";



export const CalcHeader = () => {
    const dispatch = useDispatch();

    const setThemeFunction = (theme) => dispatch(setTheme(theme))

    return (
        <StyledCalcHeader>
            <p>calc</p>
            <div>
                <button onClick={()=> setThemeFunction('firstTheme')}>First</button>
                <button onClick={()=> setThemeFunction('secondTheme')}>Second</button>
                <button onClick={()=> setThemeFunction('thirdTheme')}>Third</button>
            </div>
        </StyledCalcHeader>
    )
}
