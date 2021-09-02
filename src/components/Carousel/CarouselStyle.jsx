import styled from "styled-components";
export const CarouselContainer = styled.div`
  color: #4e0097;
  align-items: center !important;
  font-family: "Montserrat", sans-serif;
  padding-top: 20px;
  justify-content: center !important;

  width: 100%;

  img {
    width: 100%;

    background-color: gray;
    object-fit: cover;
  }
  .title{
    font-size: 1.8rem;
  }

  @media (max-width: 767px) {
    img {
      width: 100%;
      background-color: gray;
      object-fit: cover;
    }
  .title{
    font-size: 1rem;
  }
  }
`;
