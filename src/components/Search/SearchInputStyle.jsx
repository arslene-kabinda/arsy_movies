import styled from "styled-components";

export const SearchInputStyle = styled.form`
  border: 1px solid grey;
  padding-right: 10px;
  color: white;
  font-size: 15px;
  border-radius: 10px;
  padding-top: 100px;
  input {
    padding: 10px;
    border: none !important;
    background-color: transparent;
  }

  input:focus {
    padding: 10px;
    outline: none;
    background-color: transparent;
  }
`;
