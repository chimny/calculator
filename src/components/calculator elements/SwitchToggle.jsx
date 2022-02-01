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
            <span className="firstOption">1</span>
            <span className="secondOption">2</span>
            <span className="thirdOption">3</span>
            <div className='switchBox'>

                <label className='container first' htmlFor='firstTheme'>
                    <input id='firstTheme' type="checkbox" checked={activeStatus === "firstTheme" ?? false}
                           onChange={() => setThemeFunction('firstTheme')}/>
                    <span className="checkmark"></span>
                </label>


                <label className='container second' htmlFor='secondTheme'>
                    <input id='secondTheme' type="checkbox" checked={activeStatus === "secondTheme" ?? false}
                           onChange={() => setThemeFunction('secondTheme')}/>
                    <span className="checkmark"></span>
                </label>

                <label className='container third' htmlFor='thirdTheme'>
                    <input id='thirdTheme' type="checkbox" checked={activeStatus === "thirdTheme" ?? false}
                           onChange={() => setThemeFunction('thirdTheme')}/>
                    <span className="checkmark"></span>
                </label>

            </div>
        </StyledSwitchToggle>
    )
};