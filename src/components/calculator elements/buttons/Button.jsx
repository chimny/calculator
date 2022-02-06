//@todo create universal button


import {StyledDelButton} from "../../../styles/StyledDelButton";
import {StyledMathBtn} from'../../../styles/StyledMathBtn';
import {StyledNumBtn} from '../../../styles/StyledNumBtn';

export const Button = (props) => {
    const {handler, text, area, type} = props;


    //@todo handle other type than DelBtb (number, cal, reset)
    switch (type) {
        case 'delBtn':
            return (
                <StyledDelButton  area={area} onClick={handler}>{text}</StyledDelButton>
            );
        case 'numberBtn':
        return (   <StyledNumBtn  area={area} onClick={handler}>{text}</StyledNumBtn>)
        case 'calcBtn':
            return  (   <StyledMathBtn  area={area} onClick={handler}>{text}</StyledMathBtn>)
    }


}