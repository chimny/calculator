import {createSlice} from "@reduxjs/toolkit";
import {firstTheme, secondTheme, thirdTheme} from '../../data/theme';


const initialState = [
        {firstThemeActive: true, firstTheme},
        {secondThemeActive: false, secondTheme},
        {thirdThemeActive: false, thirdTheme},
    ]
;

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        setTheme(state, action) {

            //@todo clear state restore to set proper object in array
            const clearedState = {
                ...Object.keys(state).reduce((reduced, key) => ({...reduced, [0]: false}), {})
            }


            switch (action.payload) {
                case 'firstTheme':
                    return {...state, firstThemeActive: true}
                case 'secondTheme':
                    return {...clearedState, secondThemeActive: true}
                case 'thirdTheme':
                    return {...clearedState, thirdThemeActive: true}
                default:
                    return {...clearedState, firstThemeActive: true}
            }
        }

    },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
