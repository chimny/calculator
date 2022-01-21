import reducer, {addOperator} from "../../redux/slices/calculationSlice";

test('operator change should clear secondNumber and result (user didnt typed any input)', () => {

    const previousState = {
        firstNumber: 13,
        operator: '*',
        secondNumber: 2,
        result: 26,
        input: '',
    };

    const expectedStateBeforeOperatorPayload = {
        firstNumber: 13,
        operator: null,
        secondNumber: null,
        result: null,
        input: '',
    }


    expect(reducer(previousState, addOperator('+'))).toEqual(
        {...expectedStateBeforeOperatorPayload, operator: '+'}
    );

    expect(reducer(previousState, addOperator('-'))).toEqual(
        {...expectedStateBeforeOperatorPayload, operator: '-'}
    );

    expect(reducer(previousState, addOperator('*'))).toEqual(
        {...expectedStateBeforeOperatorPayload, operator: '*'}
    );


});


test('equal sign shouldn\'t trigger operator change', () => {

    const previousState = {
        firstNumber: 13,
        operator: '*',
        secondNumber: 2,
        result: 26,
        input: '',
    };


    expect(reducer(previousState, addOperator('='))).toEqual(
        {
            ...previousState
        }
    );
})

test('non operator symbol shouldn\'t trigger operator change', () => {

    const previousState = {
        firstNumber: 13,
        operator: '*',
        secondNumber: 2,
        result: 26,
        input: '',
    };


    expect(reducer(previousState, addOperator('y'))).toEqual(
        {
            ...previousState
        }
    );
})

test('if user typed input and triggered new operator, firstNumber should be calculated based on previous values',()=>{
    const previousState = {
        firstNumber: 18,
        operator: '*',
        secondNumber: null,
        result: null,
        input: '2',
    };


    expect(reducer(previousState, addOperator('/'))).toEqual(
        {
            firstNumber: 36,
            operator: '/',
            secondNumber: null,
            result: null,
            input: '',
        }
    );





})


