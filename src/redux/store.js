import {configureStore} from "@reduxjs/toolkit";
import inputReducer from "./slices/inputSlice";
import calculationReducer from "./slices/calculationSlice";
import themeReducer from './slices/themeSlice';
import testReducer from './slices/testSlice'

export const store = configureStore({
    reducer: {
        inputValue: inputReducer,
        operationSequence: calculationReducer,
        theme: themeReducer,
        test: testReducer
    },
})