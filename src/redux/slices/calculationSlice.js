import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstNumber: null,
    operator: null,
    secondNumber: null
};


export const calculationSlice = createSlice({
    name: 'calculationSlice',
    initialState,
    reducers: {
        //@todo update operator regarding if it's empty or not
        addElement: (state, action) => {
            // const prevState = {...state}

        }
    }
})


export const {addElement} = calculationSlice.actions;

export default calculationSlice.reducer;

