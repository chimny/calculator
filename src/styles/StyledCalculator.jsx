import styled from "styled-components";




export const StyledCalculator = styled.div`

  margin: 0 auto;
  height: 100vh;
  
  @media(max-width: 768px) {
    padding: 1rem;
  
  }
  
  padding: 2rem 0 0 0 ;
  width: 90%;
  max-width: 450px;

 
  background: ${({theme} )=> theme.mainBackground};
  }
`