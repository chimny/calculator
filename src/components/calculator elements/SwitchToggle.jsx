import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../redux/slices/themeSlice";
import {StyledSwitchToggle} from "../../styles/StyledSwitchToggle";

export const SwitchToggle = () => {

    const dispatch = useDispatch();

    const setThemeFunction = (theme) => dispatch(setTheme(theme));
    const activeStatus = useSelector((state => state.theme.themeName));


    return (
        <StyledSwitchToggle>
            <h2>theme</h2>

            <label className='container' htmlFor='firstTheme'>1
                <input id='firstTheme' type="checkbox" checked={activeStatus === "firstTheme" ?? false}
                       onChange={() => setThemeFunction('firstTheme')}/>
                <span className="checkmark"></span>
            </label>


            <label className='container' htmlFor='secondTheme'>2
                <input id='secondTheme' type="checkbox" checked={activeStatus === "secondTheme" ?? false}
                       onChange={() => setThemeFunction('secondTheme')}/>
                <span className="checkmark"></span>
            </label>

            <label className='container' htmlFor='thirdTheme'>3
                <input id='thirdTheme' type="checkbox" checked={activeStatus === "thirdTheme" ?? false}
                       onChange={() => setThemeFunction('thirdTheme')}/>
                <span className="checkmark"></span>
            </label>
        </StyledSwitchToggle>
    )
};