import {Keyboard} from "./Keyboard";
import {StyledCalculator} from "../styles/StyledCalculator";
import {CalcWindow} from "./CalcWindow";
import {CalcHeader} from "./CalcHeader";

export const Calculator = () => {


    return (
        <StyledCalculator>

            <CalcHeader/>
            <CalcWindow/>
            <Keyboard/>

        </StyledCalculator>

    )
}