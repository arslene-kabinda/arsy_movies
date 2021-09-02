import styled from "styled-components";
export const ContainerSearch = styled.div`
  flex-wrap: wrap;
  justify-content: space-evenly;

  margin-top: 100px;
  padding: 10px;

  color: white;
  .searchContainer {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    padding-top: 10px;
  }
  .ctn {
    height: auto;
    min-height: 63vh;
  }
  

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
    margin-top: 76px;

    height: 100%;
  }
`;
