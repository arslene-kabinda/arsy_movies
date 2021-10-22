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
  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .carousel {
    width: 100px;
  }
  .card {
    margin: 10px;
    width: 20%;
    height: 300px;
    .card_content {
      width: 100% !important;
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
    }
  }
`;
