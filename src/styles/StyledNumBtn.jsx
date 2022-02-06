import styled from "styled-components";
import {StyledButton} from "./StyledButton";

export const StyledNumBtn = styled(StyledButton)`
  background: ${({theme}) => theme.numButtonBackground};
  color: ${({theme}) => theme.fontColor};
  box-shadow: 0 3px ${({theme}) => theme.numButtonShadow};
  font-weight: 700;
  grid-area: ${({area}) => area};
`;