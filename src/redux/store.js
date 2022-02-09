import {configureStore} from "@reduxjs/toolkit";
import calculationReducer from "./slices/calculationSlice";
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        calculator: calculationReducer, theme: themeReducer,
    },
})