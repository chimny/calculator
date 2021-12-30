import {createSlice} from "@reduxjs/toolkit";
const {firstTheme, secondTheme, thirdTheme} = require('../../data/theme') ;


const localData = {...JSON.parse(localStorage.getItem('theme'))};


const initialState = localData ?? {...firstTheme};

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
