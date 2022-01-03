import reducer, {addNumber} from '../../redux/slices/inputSlice';

test('input should not be updated', () => {
    const previousState = {
        value: '',
    };
    expect(reducer(previousState, addNumber('aa'))).toEqual(
        {
            value: '',
        }
    );

    expect(reducer(previousState, addNumber('./='))).toEqual(
        {
            value: '',
        }
    );

})


test('new numbers should be added', () => {
    const previousState = {
        value: '4897',
    };
    expect(reducer(previousState, addNumber('889'))).toEqual(
        {
            value: '4897889',
        }
    );
    expect(reducer(previousState, addNumber('774'))).toEqual(
        {
            value: '4897774',
        }
    );
})


test('zero should be hit once if it\'s the only value ', () => {
    const previousState = {
        value: '0',
    };
    expect(reducer(previousState, addNumber('0'))).toEqual(
        {
            value: '0',
        }
    );

})


