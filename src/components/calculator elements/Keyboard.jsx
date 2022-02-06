import {CalculationButton} from "./buttons/CalculationButton";
import {Reset} from "./buttons/Reset";
import {StyledKeyboard} from "../../styles/StyledKeyboard";
import {NUMBERS, OPERATION_SYMBOLS} from "../../data/symbols";
import {Button} from "./buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {addNumber, removeNumber} from "../../redux/slices/calculationSlice";


export const Keyboard = () => {

    const dispatch = useDispatch();


    const delHandler = () => dispatch(removeNumber());
    const addNumHandler = (number) => dispatch(addNumber(number))

    const theme = useSelector((state => state.theme));

    console.log(theme);
    return (
        <StyledKeyboard>
            {/*num buttons below*/}
            {
                NUMBERS.map(({num, gridArea}) => <Button handler={() => addNumHandler(num)} text={num}
                                                         type={'numberBtn'} area={gridArea}/>)
            }
            {/*del button below*/}
            <Button handler={delHandler} text={'DEL'}
                    type={'delBtn'} area={'DEL'}/>

            {OPERATION_SYMBOLS.map(({mathAction, gridArea}) => <CalculationButton symbol={mathAction} area={gridArea}
                                                                                  key={gridArea}/>)}

            {
                OPERATION_SYMBOLS.map(({mathAction, gridArea}) => <Button handler={() => addNumHandler(num)} text={num}
                                                         type={'numberBtn'} area={gridArea}/>)
            }


            <Reset/>
        </StyledKeyboard>
    )

}