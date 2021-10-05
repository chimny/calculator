import {createSlice} from "@reduxjs/toolkit";
const initialState = {firstNumber:null,operator:null,secondNumber:null};




export const calculationSlice = createSlice({
    name: 'calculationSlice',
    initialState,
    reducers: {
  addElement: (state,action)=>{
      const prevState = state.firstNumber
      state.firstNumber = action
  }
    }
})


export const {addElement} = calculationSlice.actions;

export default calculationSlice.reducer;

