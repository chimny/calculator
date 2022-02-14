import {StyledKeyboard} from "../../styles/StyledKeyboard";
import {NUMBERS, OPERATION_SYMBOLS} from "../../data/symbols";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {addNumber, removeNumber, resetOperation} from "../../redux/slices/calculationSlice";
import {updateInput} from "../../utils/updateInput";

export const Keyboard = () => {

    const dispatch = useDispatch();
    const {operator, input} = useSelector((state => state.calculator));

    const calcHandler = (symbol) => {
        updateInput(input, symbol, operator)
    }

    const delHandler = () => dispatch(removeNumber());
    const addNumHandler = (number) => dispatch(addNumber(number))
    const resetHandler = () => dispatch(resetOperation());


    return (<StyledKeyboard>
        {/*num buttons below*/}
        {NUMBERS.map(({num, gridArea}) => <Button key={gridArea} handler={() => addNumHandler(num)} text={num}
                                                  type={'numberBtn'} area={gridArea}/>)}
        {/*del button below*/}
        <Button key={'DEL'} handler={delHandler} text={'DEL'}
                type={'delBtn'} area={'DEL'}/>

        {OPERATION_SYMBOLS.map(({mathAction, gridArea}) => <Button key={gridArea} handler={() => calcHandler(mathAction)}
                                                                   text={mathAction}
                                                                   type={'calcBtn'} area={gridArea}/>)}
        {/*reset button below*/}
        <Button key={'Reset'} handler={resetHandler} text={'Reset'}
                type={'resetBtn'} area={'Reset'}/>
    </StyledKeyboard>)

}