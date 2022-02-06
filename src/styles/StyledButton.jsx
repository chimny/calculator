import styled from "styled-components";


export const StyledButton = styled.button`
  color: ${props => props.fontColor};
  background: ${props => props.background};
  grid-area: ${props => props.area};
`