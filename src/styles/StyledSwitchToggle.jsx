import styled from "styled-components";


export const StyledSwitchToggle = styled.div`/* The container */

  display: flex;
  align-items: center;
  justify-content: center;


  div.switchBox {
    //margin-left: 2rem;
    background: ${({theme}) => theme.windowBackground};
    position: relative;
    width: 12rem;
    border-radius: 12px;
    height: 2rem;


    .container {
      position: relative;
      cursor: pointer;
    }


    .first {
      position: absolute;
      left: 0;
      top: 0;
    }

    .second {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
    }

    .third {
      //position: absolute;
      right: -50%;
      top: 0%;
      //transform: translateX(50%);
    }


    .checkmark {
      position: absolute;
      height: 12px;
      width: 12px;
      background-color: #eee;
      border-radius: 50%;
    }

    /* Hide the browser's default radio button */

    .container input {
      margin: 0;
      padding: 0;
      position: absolute;
      opacity: 1;
      cursor: pointer;
    }

    /* Create a custom radio button */

    .themeNumber {
      position: absolute;
      top: -1rem;
      left: 0;
      transform: translate(50%, 0);
    }


    /* On mouse-over, add a grey background color */

    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */

    .container input:checked ~ .checkmark {
      background-color: ${({theme}) => theme.equalButtonBackground};
    }

 

    /* Show the indicator (dot/circle) when checked */

    .container input:checked ~ .checkmark:after {
      display: block;
    }


  }
`