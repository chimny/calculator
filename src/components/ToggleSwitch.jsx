import {useState} from "react";
import {StyledToggleSwitch} from "../styles/StyledToggleSwitch";

export const ToggleSwitch = () => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);


    return (
        <StyledToggleSwitch>
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle}/>
                <span className="switch"/>
            </label>
        </StyledToggleSwitch>


    )
}