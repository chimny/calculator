import styled from "styled-components";

export const StyledKeyboard = styled.div`
  padding: 20px;
  margin-top: 32px;
  display: grid;
  grid-template-rows: repeat(5, 40px);
  grid-template-columns: repeat(4, 72px);
  gap: 16px;
  background: ${({theme}) => theme.veryDarkDesaturatedBlueKeypadScreenBGC};
  grid-template-area: "7 8 9 Del" "4 5 6 +" "1 2 3 -" ". 0 / *" "Reset Rest = =";
`