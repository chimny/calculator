import reducer, {calculateResult} from "../../redux/slices/calculationSlice";

test('it should give result 13', () => {

    const previousState = {
        firstNumber: 13,
        operator: '+',
        secondNumber: 0,
        result: null,
    };




    expect(reducer(previousState, calculateResult('2'))).toEqual(
        {  firstNumber: 13,
            operator: '+',
            secondNumber: 2,
            result: 15,}
    );



});


test('it should update values - previous result as first number, secondnumber as payload and result based on two of them', () => {

    const previousState = {
        firstNumber: 13,
        operator: '+',
        secondNumber: 5,
        result: 15,
    };




    expect(reducer(previousState, calculateResult('2'))).toEqual(
        {  firstNumber: 15,
            operator: '+',
            secondNumber: 2,
            result: 20,}
    );



});


