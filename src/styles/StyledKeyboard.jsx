import styled from "styled-components";

export const StyledKeyboard = styled.div`
  padding: 20px;
  margin-top: 32px;
  display: grid;
  grid-template-rows: repeat(5, 40px);
  grid-template-columns: repeat(4, 72px);
  gap: 16px;
  background: ${({theme}) => theme.veryDarkDesaturatedBlueKeypadScreenBGC};
  grid-template-areas: "seven eight nine DEL" "four five six plus" "one two three minus" "dot zero divide multiply" "Reset Reset equal equal";
`

