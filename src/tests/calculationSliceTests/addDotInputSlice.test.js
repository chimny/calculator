import reducer, {addDot} from '../../redux/slices/calculationSlice';

test('if the dot is hit and the input is empty, the zero should append as default', () => {

    const previousState = {
        value: '',
    };
    expect(reducer(previousState, addDot())).toEqual(
        {
            value: '0.',
        }
    );

})

test('there should be only one dot in the input', () => {

    const previousState = {
        value: '0.12345',
    };
    expect(reducer(previousState, addDot())).toEqual(
        previousState.value
    );

})

test('it should stay with one dot', () => {
    const previousState = {
        value: '224.',
    };
    expect(reducer(previousState, addDot())).toEqual(
        previousState.value
    );

})


test('dot should be added successfully ', () => {
    const previousState = {
        value: '224',
    };
    expect(reducer(previousState, addDot())).toEqual(
        {value: '224.'}
    );

})