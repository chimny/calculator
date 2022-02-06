//@todo create universal button


import {StyledButton} from "../../../styles/StyledButton";
import {StyledDelButton} from "../../../styles/StyledDelButton";

export const Button = (props) => {
const {handler,text,background,boxShadow,area,fontColor,type} = props;





        //@todo handle other type than DelBtb (number, cal, reset)
        switch(type) {
            case 'DelBtn':
                return(
                    <StyledDelButton background={background} area={area}  boxshadow={boxShadow} fontColor={fontColor} onClick={handler}>  {text}</StyledDelButton>
                )

        }




}