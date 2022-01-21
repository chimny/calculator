import reducer, {addDot} from '../../redux/slices/calculationSlice';

test('if the dot is triggered and the input is empty, the zero should append as default', () => {

    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '',
    };
    expect(reducer(previousState, addDot())).toEqual(
        {
            firstNumber: null,
            operator: null,
            secondNumber: null,
            result: null,
            input: '0.',
        }
    );

})



test('it should stay with one dot', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '1121.',
    };
    expect(reducer(previousState, addDot())).toEqual(
        previousState
    );

})


test('dot should be added successfully ', () => {
    const previousState = {
        firstNumber: null,
        operator: null,
        secondNumber: null,
        result: null,
        input: '224',
    };
    expect(reducer(previousState, addDot())).toEqual(
        {
            firstNumber: null,
            operator: null,
            secondNumber: null,
            result: null,
            input: '224.',
        }
    );

})