import styled from "styled-components";

export const StyledKeyboard = styled.div`
  padding: 24px;
  border-radius: 12px;
  margin-top: 32px;
  display: grid;
  grid-template-rows: repeat(5, minmax(36px,auto));
  grid-template-columns: repeat(4, minmax(84px,auto));
  gap: 16px;
  background: ${({theme}) => theme.veryDarkDesaturatedBlueKeypadScreenBGC};
  grid-template-areas: "seven eight nine DEL" "four five six plus" "one two three minus" "dot zero divide multiply" "Reset Reset equal equal";
`

