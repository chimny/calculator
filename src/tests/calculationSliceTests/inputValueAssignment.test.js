import reducer, {inputValueAssignment} from "../../redux/slices/calculationSlice";

//@todo values firstNumber, secondNumber and results should be hold as numbers


test('it should update firstNumber as a number', () => {

    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
    };

    expect(reducer(previousState, inputValueAssignment('432'))).toEqual(
        {...previousState, firstNumber:432}
    );

})

test('it should update firstNumber as a number', () => {

    const previousState = {
        firstNumber: '442',
        operator: '+',
        secondNumber: null,
        result: null,
    };

    expect(reducer(previousState, inputValueAssignment('221'))).toEqual(

    {...previousState, secondNumber:221}

    );

})