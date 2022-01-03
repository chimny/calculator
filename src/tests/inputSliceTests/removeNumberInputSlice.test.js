import reducer, {removeNumber} from '../../redux/slices/inputSlice';

test('last number should be deleted', () => {
    const previousState = {
        value: '48999',
    };
    expect(reducer(previousState, removeNumber())).toEqual(
        {
            value: '4899',
        }
    );
})

test('input should stay as it is', () => {
    const previousState = {
        value: '',
    };
    expect(reducer(previousState, removeNumber())).toEqual(
        previousState
    );
})
