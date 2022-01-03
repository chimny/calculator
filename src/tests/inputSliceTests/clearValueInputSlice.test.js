import reducer, {clearValue} from '../../redux/slices/inputSlice';

test('value should stay empty', () => {
    const previousState = {
        value: '987548999',
    };
    expect(reducer(previousState, clearValue())).toEqual(
        {
            value: '',
        }
    );
})

