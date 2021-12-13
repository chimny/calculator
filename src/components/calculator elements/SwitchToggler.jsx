import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../redux/slices/themeSlice";
import {useState} from "react";

export const SwitchToggler = () => {

    const dispatch = useDispatch();

    const setThemeFunction = (theme) => dispatch(setTheme(theme));
    const activeStatus = useSelector((state => state.theme.themeName));





    return (
        <>
            <label>Theme</label>
            <input type="checkbox" checked={activeStatus==="firstTheme"??false} onChange={() => setThemeFunction('firstTheme')}/>
            <input type="checkbox" checked={activeStatus==="secondTheme"??false} onChange={() => setThemeFunction('secondTheme')}/>
            <input type="checkbox" checked={activeStatus==="thirdTheme"??false} onChange={() => setThemeFunction('thirdTheme')}/>
        </>
    )
};