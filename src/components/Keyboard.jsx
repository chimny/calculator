import {Button} from "./buttons/Button";
import {DEL} from "./buttons/DEL";
import {CalculationButton} from "./buttons/CalculationButton";
import {Reset} from "./buttons/Reset";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operationSymbols = ['*', '/', '+', '-','='];
export const Keyboard = () => {

    return (
        <>
            {
                numbers.map(number => <Button number={number} key={number}/>)
            }
            <DEL/>
            {operationSymbols.map(symbol => <CalculationButton symbol={symbol} key={symbol}/>)}
            <Reset/>
        </>
    )

}