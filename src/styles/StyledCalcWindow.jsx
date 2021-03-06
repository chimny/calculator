import styled from "styled-components";
//@todo Zosia znalazła problem - cyfry wychodzą poza okno

export const StyledCalcWindow = styled.div`
  text-align: right;
  background: ${({theme}) => theme.windowBackground};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 124px;
  padding-right: 16px;
  width: 100%;
  color: ${({theme}) => theme.resultFontColor};

  & p {
    display: block;
    width: 100%;
    height: 16px;
  }
}`