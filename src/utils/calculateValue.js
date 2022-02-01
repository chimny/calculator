import Big from 'big.js';




export function calculateValue(firstValue, symbol, secondValue) {

    const bigFirstValue =  Big(firstValue);
    const bigSecondValue = Big(secondValue);

    switch (symbol) {
        case "+":
            return Number(bigFirstValue.plus(bigSecondValue));
        case "-":
            return Number(bigFirstValue.minus(bigSecondValue));
        case "*":
            return Number(bigFirstValue.times(bigSecondValue));
        case "/":
            if (secondValue === 0) return 'don\'t divide by 0!'
            return Number(bigFirstValue.div(bigSecondValue));
        default:
            return;
    }
}