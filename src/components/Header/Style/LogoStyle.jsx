import styled from "styled-components";
export const LogoStyle = styled.div`
  display: flex;

  img {
    max-width: 100%;
    width: 120px;
  }

  @media (max-width: 767px) {
    img {
      max-width: 100%;
      width: 60px;
    }
  }
`;
