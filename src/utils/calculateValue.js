export function calculateValue(firstValue, symbol, secondValue) {
    switch (symbol) {
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
        case "*":
            return firstValue * secondValue;
        case "/":
            return firstValue / secondValue;
        default:
            return;
    }
}