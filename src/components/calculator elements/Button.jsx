import {StyledDelButton} from "../../styles/StyledDelButton";
import {StyledMathBtn} from '../../styles/StyledMathBtn';
import {StyledNumBtn} from '../../styles/StyledNumBtn';
import {StyledClearButton} from '../../styles/StyledClearButton';

export const Button = (props) => {
    const {handler, text, area, type} = props;

    switch (type) {
        case 'delBtn':
            return (<StyledDelButton  area={area} onClick={handler}>{text}</StyledDelButton>);

        case 'numberBtn':
        return (   <StyledNumBtn  area={area} onClick={handler}>{text}</StyledNumBtn>);

        case 'calcBtn':
            return  (   <StyledMathBtn  symbol={text} area={area} onClick={handler}>{text}</StyledMathBtn>);

        case 'resetBtn':
            return  (   <StyledClearButton  symbol={text} area={area} onClick={handler}>{text}</StyledClearButton>);
        default:
            return (   <StyledNumBtn  area={area} onClick={handler}>{text}</StyledNumBtn>);
    }


}