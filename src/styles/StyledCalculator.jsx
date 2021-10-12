import styled from "styled-components";

export const StyledCalculator = styled.div`
  width: 50%;
  height: 60vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: yellow;
  
  & input{
    //box-sizing: border-box;
    display: block;
    height: 32px;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`