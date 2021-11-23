import styled from "styled-components";

export const StyledKeyboard = styled.div`
  padding: 20px;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(5, 24px);
  grid-template-columns: repeat(4, 64px);
  gap: 8px;
  margin: 0 auto;
`