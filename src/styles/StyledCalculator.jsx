import styled from "styled-components";

export const StyledCalculator = styled.div`
  width: 320px;
  height: 60vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: yellow;
  
  
  & input{
    font-size: 24px;
    text-align: right;
    background: black;
    border: none;
    border-radius: 4px;
    display: block;
    height: 62px;
    padding-right: 16px;
    width: 100%;
    color:white
 
  }
`