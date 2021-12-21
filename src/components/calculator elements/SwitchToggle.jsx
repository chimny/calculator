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
                <label className='container' htmlFor='firstTheme'>
                    <span className='themeNumber'>1</span>
                    <input id='firstTheme' type="checkbox" checked={activeStatus === "firstTheme" ?? false}
                           onChange={() => setThemeFunction('firstTheme')}/>
                    <span className="checkmark"></span>
                </label>


                <label className='container' htmlFor='secondTheme'><span className='themeNumber'>2</span>
                    <input id='secondTheme' type="checkbox" checked={activeStatus === "secondTheme" ?? false}
                           onChange={() => setThemeFunction('secondTheme')}/>
                    <span className="checkmark"></span>
                </label>

                <label className='container' htmlFor='thirdTheme'><span className='themeNumber'>3</span>
                    <input id='thirdTheme' type="checkbox" checked={activeStatus === "thirdTheme" ?? false}
                           onChange={() => setThemeFunction('thirdTheme')}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </StyledSwitchToggle>
    )
};