import styled from "styled-components";

export const StyledCalculator = styled.div`
  width: ${({theme} )=> theme.mobileWidth};;
  height: 100vh;
  background: ${({theme} )=> theme.veryDarkDesaturatedBlue};

  & .calOperations {
    font-size: 24px;
    text-align: right;
    background: black;
    border-radius: 4px;
    display: block;
    height: 62px;
    padding-right: 16px;
    width: 100%;
    color: white

  }
`