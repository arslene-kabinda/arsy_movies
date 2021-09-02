import styled from "styled-components";
export const HomeContainer = styled.div`
  padding: 20px;
  font-family: "Montserrat", sans-serif;
  background-color: #111;

  h1 {
    font-size: 25px;
    font-family: "Montserrat", sans-serif;
    color: #4e0097;
    font-weight: bold;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .carousel {
    width: 100px;
  }
  .card_content {
    width: 100% important!;
    border: 10px solid purple;
    margin:10px;
  }
  
  @media (max-width: 767px) {
    h1 {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
    }
  }
`;
