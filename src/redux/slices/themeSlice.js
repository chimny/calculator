import {createSlice} from "@reduxjs/toolkit";
import {firstTheme, secondTheme, thirdTheme} from '../../data/theme';


const initialState = [
        {active: true, firstTheme},
        {active: false, secondTheme},
        {active: false, thirdTheme},
    ]
;

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        setTheme(state, action) {


            const clearedState = {
                ...Object.keys(state).reduce((reduced, key) => ({...reduced, [0]: false}))
            }
            //@todo download current state, modify first value as true if particular button is clicked(function) rest should be negative. If unexpected button is pressed, don't change current state
            const newState = {
                ...Object.keys(state).reduce((element,index)=>{
                    return({...element,[0]:false})
                })
            }

            switch (action.payload) {
                case 'firstTheme':
                   return {...newState}
                case 'secondTheme':
                    return {...state, secondThemeActive: true}
                case 'thirdTheme':
                    return {...state, thirdThemeActive: true}
                default:
                    return {...state, firstThemeActive: true}
            }
        }

    },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
