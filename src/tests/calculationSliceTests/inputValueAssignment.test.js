import reducer, {inputValueAssignment} from "../../redux/slices/calculationSlice";




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

test('it should update secondNumber as a number', () => {

    const previousState = {

        firstNumber: 442,
        operator: '+',
        secondNumber: 777,
        result: null,
    };

    expect(reducer(previousState, inputValueAssignment('221'))).toEqual(
    {...previousState, secondNumber:221}
    );

})



test('it should update secondNumber without a dot', () => {

    const previousState = {
        firstNumber: 442,
        operator: '+',
        secondNumber: null,
        result: null,
    };

    expect(reducer(previousState, inputValueAssignment('221.'))).toEqual(

        {...previousState, secondNumber:221}

    );

})


test('it should update firstNumber from result data', () => {

    const previousState = {
        firstNumber: 13,
        operator: '*',
        secondNumber: 2,
        result: 26,
    };

    expect(reducer(previousState, inputValueAssignment)).toEqual(
        {...previousState, firstNumber:26}
    );

})

