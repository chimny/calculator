import {StyledCalcHeader} from "../../styles/StyledCalcHeader";
import {ToggleSwitch} from "./ToggleSwitch";


export const CalcHeader = () => {
    return (
        <StyledCalcHeader>
            <p>calc</p>
            <div>
                <p>theme</p>
                <ToggleSwitch/>
            </div>
        </StyledCalcHeader>
    )
}
