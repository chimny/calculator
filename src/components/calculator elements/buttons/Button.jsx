//@todo create universal button


import {StyledButton} from "../../../styles/StyledButton";

export const Button = (props) => {
const {handler,text,background,boxShadow,area,fontColor} = props;

    return(
        //@todo debug box shadow in general component
        <StyledButton background={background} area={area}  boxshadow={boxShadow} fontColor={fontColor} onClick={handler}>
        {text}
        </StyledButton>
    )
}