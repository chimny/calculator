import styled from "styled-components";
import {StyledButton} from "./StyledButton";

export const StyledDelButton = styled(StyledButton)`
  box-shadow: 0 3px ${({theme}) => theme.clearButtonShadow};
  color: ${({theme}) => theme.clearButtonFontColor};
  background: ${({theme}) => theme.clearButtonBackground};
`;