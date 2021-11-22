import {configureStore} from "@reduxjs/toolkit";
import inputReducer from "./slices/inputSlice";
import calculationReducer from "./slices/calculationSlice";


export const store = configureStore({
    reducer: {
        inputValue: inputReducer,
        operationSequence: calculationReducer,
    },
})