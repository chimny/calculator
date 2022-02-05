import styled from "styled-components";




export const StyledButton = styled.button`
  color: ${props => props.fontColor};
  background: ${props => props.background};
  box-shadow: 0 3px ${props => props.boxShadow};
  grid-area: ${props => props.area};

`