import styled from "styled-components";

export const StyledKeyboard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 4px;
`