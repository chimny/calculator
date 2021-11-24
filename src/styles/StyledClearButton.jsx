import styled from "styled-components";


export const StyledClearButton = styled.button`
 color: ${({theme}) => theme.whiteColor};
  background: ${({theme} )=> theme.darkBlueKeyBackground};
  box-shadow: 0 3px ${({theme}) => theme.darkBlueKeyShadow};
  grid-area: ${({area}) => area };
`