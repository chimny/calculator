import {NumberButton} from "./buttons/NumberButton";
import {DEL} from "./buttons/DEL";
import {CalculationButton} from "./buttons/CalculationButton";
import {Reset} from "./buttons/Reset";
import {StyledKeyboard} from "../styles/StyledKeyboard";
import {NUMBERS, OPERATION_SYMBOLS} from "../data/symbols";


export const Keyboard = () => {

    return (
        <StyledKeyboard>
            {
                NUMBERS.map(number => <NumberButton number={number} key={number}/>)
            }
            <DEL/>
            {OPERATION_SYMBOLS.map(symbol => <CalculationButton symbol={symbol} key={symbol}/>)}
            <Reset/>
        </StyledKeyboard>
    )

}