export function calculateValue(firstValue, symbol, secondValue) {
    switch (symbol) {
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
        case "*":
            return firstValue * secondValue;
        case "/":
            if (secondValue === 0) return 'don\'t divide by 0!'
            return firstValue / secondValue;
        default:
            return;
    }
}