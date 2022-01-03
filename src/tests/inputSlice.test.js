import reducer, {updateValue} from '../redux/slices/inputSlice';

test('this test should fail', ()=>{
    const previousState = {
        value: '',
    };
    expect(reducer(previousState, updateValue('ss'))).toEqual(
        {
            value: 'ss',
        }
)


})



