import styled from "styled-components";


export const StyledNumButton = styled.button`
  background: ${({theme}) => theme.numButtonBackground};
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.fontColor};
  box-shadow: 0 3px ${({theme}) => theme.numButtonShadow};
  font-weight: 700;
  grid-area: ${({area}) => area};


}`