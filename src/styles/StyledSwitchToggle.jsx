import styled from "styled-components";


export const StyledSwitchToggle = styled.div`
  width: 80%;
  padding: 0 2rem;
  display: flex;
  justify-content: end;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    input{
      //@todo update styling dot only for active theme
      &:after{
        opacity: 1;
        content:'';
        display: block;
        height: 12px;
        width: 12px;
        border-radius: 12px;
        background: red;
      }
    }
  }
`