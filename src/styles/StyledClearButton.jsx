import styled from "styled-components";
import {StyledButton} from "./StyledButton";

export const StyledClearButton = styled(StyledButton)`
  color: ${({theme}) => theme.clearButtonFontColor};
  background: ${({theme}) => theme.clearButtonBackground};
  box-shadow: 0 3px ${({theme}) => theme.clearButtonShadow};
  grid-area: ${({area}) => area};

`