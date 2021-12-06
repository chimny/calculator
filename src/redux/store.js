import {configureStore} from "@reduxjs/toolkit";
import inputReducer from "./slices/inputSlice";
import calculationReducer from "./slices/calculationSlice";
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        inputValue: inputReducer,
        operationSequence: calculationReducer,
        theme: themeReducer
    },
})