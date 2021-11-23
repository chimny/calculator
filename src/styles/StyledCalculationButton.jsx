import styled from "styled-components";


export const StyledCalculationButton = styled.button`
  background: ${({symbol, theme}) => symbol === '=' ? theme.redColor : theme.lightGrayKeyBackground};
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${({theme}) => theme.darkBlueKeyShadow};
  font-weight: 700;
  box-shadow: 0 3px  ${({symbol, theme}) => symbol === '=' ? theme.darkRed : theme.grayOrangeKeyShadow };
}`