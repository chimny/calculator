import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../redux/slices/themeSlice";
import {StyledSwitchToggle} from "../../styles/StyledSwitchToggle";
import {firstTheme, secondTheme, thirdTheme} from '../../data/theme';

export const SwitchToggle = () => {

    const dispatch = useDispatch();

    const setThemeFunction = (theme) => dispatch(setTheme(theme));
    const activeStatus = useSelector((state => state.theme.themeName));

    const themeOption = [{spanClass: 'firstOption', number: 1}, {
        spanClass: 'secondOption',
        number: 2
    }, {spanClass: 'thirdOption', number: 3}]
    const themeNames = [firstTheme.themeName, secondTheme.themeName, thirdTheme.themeName];

    return (

        <StyledSwitchToggle>
            <h2>theme</h2>
            {themeOption.map(({spanClass, number}) => <span className={spanClass}>{number}</span>)}


            <div className='switchBox'>

                {themeNames.map((theme) => {
                    return (
                        <label className='container' htmlFor={theme}>
                            <input id={theme} type="checkbox" checked={activeStatus === theme ?? false}
                                   onChange={() => setThemeFunction(theme)}/>
                            <span className="checkmark"></span>
                        </label>
                    )
                })}

            </div>
        </StyledSwitchToggle>
    )
};