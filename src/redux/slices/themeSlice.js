import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    firstTheme: true,
    secondTheme: false,
    thirdTheme: false,
};

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        setTheme(state, action) {

            const clearedState = {
                ...Object.keys(state).reduce((reduced, key) => ({ ...reduced, [key]: false }), {})
            }


          switch (action.payload){
              case 'firstTheme':
                  return {...clearedState, firstTheme:true}
              case 'secondTheme':
                  return {...clearedState, secondTheme:true}
              case 'thirdTheme':
                  return {...clearedState, thirdTheme:true}
              default:
                  return {...clearedState, firstTheme:true}
          }
        }

    },
});

export const {setTheme} =  themeSlice.actions;
export default themeSlice.reducer;
