import styled from "styled-components";
export const AppContainer = styled.div`
  background-color: #111;
  height: auto;

  width: 100%;

  margin-top: 100px;

  border: 2px solid green;

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 80px;
    height: 80px;
    margin: -76px 0 0 -76px;
    border: 7px dotted #f3f3f3;
    border-radius: 50%;
    border-top: 7px dotted #ffef60;
    border-bottom: 7px dotted #ffef60;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 767px) {
    margin-top: 75px;
  }
`;
