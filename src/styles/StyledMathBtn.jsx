import styled from "styled-components";
import {StyledButton} from "./StyledButton";

export const StyledMathBtn = styled(StyledButton)`
  background: ${({symbol, theme}) => symbol === '=' ? theme.equalButtonBackground : theme.keyBackground};
  color: ${({symbol, theme}) => symbol === '=' ? theme.equalButtonFontColor : theme.fontColor};
  font-size: 32px;
  font-weight: 700;
  box-shadow: 0 3px ${({symbol, theme}) => symbol === '=' ? theme.equalButtonShadow : theme.numButtonShadow};
  grid-area: ${({area}) => area};
`;