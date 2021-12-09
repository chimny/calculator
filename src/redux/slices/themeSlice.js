import {createSlice} from "@reduxjs/toolkit";
import {firstTheme, secondTheme, thirdTheme} from '../../data/theme';


const initialState = {...firstTheme};

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        setTheme(state, action) {




            switch (action.payload) {
                case 'firstTheme':
                   return {...firstTheme};
                case 'secondTheme':
                    return {...secondTheme}
                case 'thirdTheme':
                    return {...thirdTheme}
                default:
                    return {...state}
            }
        }

    },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
