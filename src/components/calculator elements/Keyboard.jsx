import {NumberButton} from "./buttons/NumberButton";
import {DEL} from "./buttons/DEL";
import {CalculationButton} from "./buttons/CalculationButton";
import {Reset} from "./buttons/Reset";
import {StyledKeyboard} from "../../styles/StyledKeyboard";
import {NUMBERS, OPERATION_SYMBOLS} from "../../data/symbols";


export const Keyboard = () => {

    return (
        <StyledKeyboard>
            {
                NUMBERS.map(({num, gridArea}) => <NumberButton number={num} area={gridArea} key={gridArea}/>)
            }
            <DEL/>
            {OPERATION_SYMBOLS.map(({mathAction, gridArea}) => <CalculationButton symbol={mathAction} area={gridArea}
                                                                                  key={gridArea}/>)}
            <Reset/>
        </StyledKeyboard>
    )

}