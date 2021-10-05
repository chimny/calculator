import {Button} from "./Button";
import {BackButton} from "./BackButton";
import {CalculationButton} from "./CalculationButton";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['*','/','+','-']
export const Keyboard = () => {

    return (
        <>
            {
                numbers.map(number => <Button number={number} key={number}/>)
            }
            <BackButton/>
            {symbols.map(symbol => <CalculationButton symbol={symbol} key={symbol}/>)}
        </>
    )

}