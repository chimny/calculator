import styled from "styled-components";


export const StyledNumButton = styled.button`
  background: ${({theme}) => theme.numButtonBackground};
  border: none;
  cursor: pointer;
  //font-size: 32px;
  color: ${({theme}) => theme.fontColor};
  box-shadow: 0 3px ${({theme}) => theme.numButtonShadow};
  font-weight: 700;
  grid-area: ${({area}) => area};


  //@media(max-width: 768px) {
  //  font-size: 24px;
  //}
  
  
  
}`