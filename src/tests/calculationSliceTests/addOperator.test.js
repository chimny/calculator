import reducer, {addOperator} from "../../redux/slices/calculationSlice";

test('operator change should clear secondNumber and result', () => {

    const previousState = {
        firstNumber: 13,
        operator: '*',
        secondNumber: 2,
        result: 26,
    };

    const expectedStateBeforeOperatorPayload = {
        firstNumber: 13,
        operator: null,
        secondNumber: null,
        result: null,
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
    };


    expect(reducer(previousState, addOperator('y'))).toEqual(
        {
            ...previousState
        }
    );
})



