import reducer, {addNumber} from '../../redux/slices/calculationSlice';


test('input should not be updated', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '',
    };
    expect(reducer(previousState, addNumber('aa'))).toEqual(
        previousState
    );


})


test('new numbers should be added', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '25671',
    };
    expect(reducer(previousState, addNumber('00.21'))).toEqual(
        {...previousState, input: '2567100.21'}
    )
    expect(reducer(previousState, addNumber('774'))).toEqual(
        {...previousState, input: '25671774'}
    );
})

test('zero should be replaced by new number', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '0',
    };
    expect(reducer(previousState, addNumber('1'))).toEqual(
        {...previousState, input: '1'}
    );
    expect(reducer(previousState, addNumber('774'))).toEqual(
        {...previousState, input: '774'}
    );
})



test('zero should be hit once if it\'s the only value ', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '0',
    };
    expect(reducer(previousState, addNumber('000'))).toEqual(
        previousState
    );

})


