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
            <div>
                <label htmlFor='firstTheme'>1</label>
                <input id='firstTheme' type="checkbox" checked={activeStatus === "firstTheme" ?? false}
                       onChange={() => setThemeFunction('firstTheme')}/>
            </div>
            <div>
                <label htmlFor='secondTheme'>2</label>
                <input id='secondTheme' type="checkbox" checked={activeStatus === "secondTheme" ?? false}
                       onChange={() => setThemeFunction('secondTheme')}/>
            </div>
            <div>
                <label htmlFor='thirdTheme'>3</label>
                <input id='thirdTheme' type="checkbox" checked={activeStatus === "thirdTheme" ?? false}
                       onChange={() => setThemeFunction('thirdTheme')}/>
            </div>
        </StyledSwitchToggle>
    )
};