import reducer from "../../redux/slices/calculationSlice";
import {updateInput} from "../../utils/updateInput";


//@todo finish writing test for updateInput

test('it should update input', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '',
    };
    expect(reducer(previousState, updateInput('222','+',))).toEqual(
        previousState
    );


})