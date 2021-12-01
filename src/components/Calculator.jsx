import {Keyboard} from "./calculator elements/Keyboard";
import {StyledCalculator} from "../styles/StyledCalculator";
import {CalcWindow} from "./calculator elements/CalcWindow";
import {CalcHeader} from "./calculator elements/CalcHeader";

export const Calculator = () => {


    return (
        <StyledCalculator>

            <CalcHeader/>
            <CalcWindow/>
            <Keyboard/>

        </StyledCalculator>

    )
}