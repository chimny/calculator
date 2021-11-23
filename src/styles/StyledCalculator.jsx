import styled from "styled-components";

export const StyledCalculator = styled.div`
  width: ${({theme} )=> theme.mobileWidth};;
  height: 100vh;
  background: ${({theme} )=> theme.veryDarkDesaturatedBlue};

  & .calOperations {
    text-align: right;
    background: black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 124px;
    padding-right: 16px;
    width: 100%;
    color: white;
& p{
      display: block;
      width: 100%;
      height: 16px;
    }
  }
`