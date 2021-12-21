import styled from "styled-components";


export const StyledSwitchToggle = styled.div`/* The container */

  display: flex;
  padding-right: 0.5rem;
  margin-right: 0;
  align-items: center;
  justify-content: center;


  div {
    background: ${({theme}) => theme.windowBackground};
    display: flex;
    position: relative;
    padding-left: 2rem;
    width: 4rem;
    border-radius: 12px;

    .container {
      display: flex;
      height: 1rem;
      flex-direction: row;
      flex-wrap: wrap;
      position: relative;
      padding-left: 35px;
      //margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
    }

    /* Hide the browser's default radio button */

    .container input {

      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom radio button */

    .themeNumber {
      position: absolute;
      top: -1rem;
      left: 0;
      transform: translate(50%, 0);
    }

    .checkmark {
      position: absolute;
      bottom: 0;
      left: 0;
      //transform: translate(0%, 50%);
      height: 12px;
      width: 12px;
      background-color: #eee;
      border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */

    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */

    .container input:checked ~ .checkmark {
      background-color: ${({theme}) => theme.equalButtonBackground};
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the indicator (dot/circle) when checked */

    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the indicator (dot/circle) */


  }
`