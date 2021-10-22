import styled from "styled-components";
export const CardContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid red;
  transition: all 0.3s ease !important;
  background-color: #111;
  margin-top: 10px;
  p {
    font-size: 1rem;
    color: white;
  }
  h3 {
    font-size: 20px;
    text-align: start;
    color: #ffffff;
    font-weight: 400;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px 0 rgba(97, 93, 93, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
  .d-flex {
    justify-content: space-between;
  }
  .vote {
    p {
      color: #ffef60;
    }
  }
  a {
    text-align: center;
    text-decoration: none;
    border: 1px solid #fff;
    color: #111111;
    font-size: 1rem;
    border-radius: 5px;
    background-color: #fff;
  }
`;
