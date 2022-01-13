import reducer, {calculateResult} from "../../redux/slices/calculationSlice";

test('operator change should clear secondNumber and result', () => {

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


