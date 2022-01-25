import styled from "styled-components";


export const StyledClearButton = styled.button`
  cursor:pointer;
 color: ${({theme}) => theme.clearButtonFontColor};
  background: ${({theme} )=> theme.clearButtonBackground};
  box-shadow: 0 3px ${({theme}) => theme.clearButtonShadow};
  grid-area: ${({area}) => area };

  //@media(max-width: 768px) {
  //  font-size: 24px;
  //}
  
  
`