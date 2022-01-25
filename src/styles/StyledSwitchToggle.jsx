import styled from "styled-components";


export const StyledSwitchToggle = styled.div`/* The container */

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 20px);
  margin: 0;
  padding: 0;
  justify-items: center;
  align-items: center;

  grid-template-areas: 
    " . . . firstOption secondOption thirdOption"
    "themeSign themeSign themeSign switchbox switchbox switchbox";

  h2 {
    grid-area: themeSign;
    padding-right: 3px;
  }

  span {
    justify-self: center;
  }

  span.firstOption {
    grid-area: firstOption;

  }

  span.secondOption {
    grid-area: secondOption;
  }

  span.thirdOption {
    grid-area: thirdOption;
  }


  .switchBox {
    background: ${({theme}) => theme.windowBackground};
    grid-area: switchbox;
    height: 22px;
    border-radius: 18px;
    display: flex;
  }

  
  label.container{
    position: relative;
    cursor: pointer;
    input{
      cursor: pointer;
      opacity: 0;
    }
    
    .checkmark {
      position: absolute;
      top:50%;
      left:50%;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      transform: translate(-50%,-50%);
    }

    input:checked ~ .checkmark {
      background-color: ${({theme}) => theme.equalButtonBackground};
    }
    
  }

`