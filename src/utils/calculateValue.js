export function calculateValue(firstValue, symbol, secondValue) {
    switch (symbol) {
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
        case "*":
            return firstValue * secondValue;
        case "/":
            if (secondValue === 0) return 'dont divide by 0!'
            return firstValue / secondValue;
        default:
            return;
    }
}