import styled from "styled-components";
export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  object-fit: contain;
  padding: 10px;

  .carouselItem__img {
    border-radius: 10px;
    margin-bottom: 5px;
    box-shadow: 0 0 5px black;
  }
`;
