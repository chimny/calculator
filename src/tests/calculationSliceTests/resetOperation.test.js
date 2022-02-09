import reducer, {resetOperation} from '../../redux/slices/calculationSlice';

test('value should stay empty', () => {

    const clearedState = {
        firstNumber: null, operator: null, secondNumber: null, result: null, input: '',
    }


    const previousState = {
        firstNumber: 55, operator: '*', secondNumber: 2, result: 110, input: '444',
    };
    expect(reducer(previousState, resetOperation())).toEqual(clearedState);


    const anotherState = {
        firstNumber: 55, operator: '*', secondNumber: null, result: null, input: '',
    }


    expect(reducer(anotherState, resetOperation())).toEqual(clearedState);
})

