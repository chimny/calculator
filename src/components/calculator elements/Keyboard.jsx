import {NumberButton} from "./buttons/NumberButton";
import {DEL} from "./buttons/DEL";
import {CalculationButton} from "./buttons/CalculationButton";
import {Reset} from "./buttons/Reset";
import {StyledKeyboard} from "../../styles/StyledKeyboard";
import {NUMBERS, OPERATION_SYMBOLS} from "../../data/symbols";
import {Button} from "./buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {removeNumber} from "../../redux/slices/calculationSlice";


export const Keyboard = () => {

    const dispatch = useDispatch();


    const delHandler = () => dispatch(removeNumber());

    const theme = useSelector((state => state.theme));

console.log(theme);
    return (
        <StyledKeyboard>
            {/*number buttons*/}
            {
                NUMBERS.map(({num, gridArea}) => <NumberButton number={num} area={gridArea} key={gridArea}/>)
            }

            {/*@todo work general component - passing styling props*/}
            <Button handler={delHandler} text={'DEL'} fontColor={theme.clearButtonFontColor}
                    background={theme.clearButtonBackground}
                    boxShadow={theme.clearButtonShadow} area={'DEL'}/>
            {/*<DEL/>*/}
            {OPERATION_SYMBOLS.map(({mathAction, gridArea}) => <CalculationButton symbol={mathAction} area={gridArea}
                                                                                  key={gridArea}/>)}
            <Reset/>
        </StyledKeyboard>
    )

}