import styled from "styled-components";


export const StyledNumButton = styled.button`
  background: ${({theme}) => theme.lightGrayKeyBackground};
  border: none;
  cursor: pointer;
font-size: 32px;
  color: ${({theme}) => theme.darkGrayBlue};
  font-weight: 700;
}`