import styled from "styled-components";


export const StyledCalcWindow = styled.div`
  text-align: right;
  background: ${({theme} )=> theme.windowBackground};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 124px;
  padding-right: 16px;
  width: 100%;
  color: white;

  & p {
    display: block;
    width: 100%;
    height: 16px;
  }
}`