import styled from "styled-components";

export const StyledKeyboard = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`