import {calculateValue} from "../../utils/calculateValue";




test('adding', () => {


    expect(calculateValue(2,'+',2)).toEqual(
         4
    )


    expect(calculateValue(-2,'+',2)).toEqual(
        0
    )


    expect(calculateValue(0.5,'+',1)).toEqual(
        1.5
    )
});

test('subtraction', () => {


    expect(calculateValue(2,'-',2)).toEqual(
        0
    )


    expect(calculateValue(-2,'-',2)).toEqual(
        -4
    )


    expect(calculateValue(0.5,'-',1)).toEqual(
        -0.5
    )
});

test('multiply', () => {


    expect(calculateValue(2,'*',2)).toEqual(
        4
    )


    expect(calculateValue(-2,'*',2)).toEqual(
        -4
    )


    expect(calculateValue(0.5,'*',1)).toEqual(
        0.5
    )


    expect(calculateValue(0.5,'*',0)).toEqual(
        0
    )
});


test('divide', () => {


    expect(calculateValue(2,'/',2)).toEqual(
        1
    )


    expect(calculateValue(-2,'/',2)).toEqual(
        -1
    )


    expect(calculateValue(0.5,'/',1)).toEqual(
        0.5
    )


    expect(calculateValue(0.5,'/',0)).toEqual(
     'don\'t divide by 0!'
    )
});