import styled from "styled-components";


export const StyledToggleSwitch = styled.div`
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }

  .toggle-switch input[type="checkbox"] {
    display: none;
  }

  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }

  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #aaa;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(25px);
    background-color: #6699cc;
  }

  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #336699;
  }
}`