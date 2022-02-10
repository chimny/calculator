import reducer, {removeNumber} from '../../calculationSlice';


test('last number should be deleted', () => {

    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '48999',
    };


    expect(reducer(previousState, removeNumber(undefined))).toEqual(
        {...previousState, input: '4899'}
    );
})

test('input should stay as it is', () => {

    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '',
    };


    expect(reducer(previousState, removeNumber(undefined))).toEqual(
        previousState
    );
})
