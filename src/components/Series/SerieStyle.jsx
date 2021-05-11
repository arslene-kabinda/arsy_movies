import styled from "styled-components";
export const SerieStyle = styled.div`
  width: 100%;
  padding: 30px;

 
  .card {
    margin: 20px;
    border: 1px solid black;
    border-radius: 10px;
    transition: all 0.3s ease !important;
    width: 100%;
    max-width: 210px;
    background-color: black;
    p {
      font-size: 1.5rem;
      color: #ffef60;
    }
    h3 {
      font-size: 20px;
      text-align: start;
      color: #ffffff;
      font-weight: 400;
    }
    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px 0 rgba(97, 93, 93, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;