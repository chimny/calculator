import {Keyboard} from "./Keyboard";
import {StyledCalculator} from "../styles/StyledCalculator";
import {CalcWindow} from "./CalcWindow";

export const Calculator = () => {


    return (
        <StyledCalculator>
            <div>
                <p>calc</p>
                <p>theme</p>
            </div>

            <CalcWindow/>


            <Keyboard/>

        </StyledCalculator>

    )
}