import styled from "styled-components";
export const AppStyle = styled.div`
  background-color: black;
  h1 {
    text-align: center;
    margin-top: 30px;
    color: #ffef60;
    font-weight: 700;
  }
  h2 {
    text-align: start;
    color: white;
    margin-left: 70px;
    margin-top: 30px;
    font-weight:700;
  }
  
    .loader {
        position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: -76px 0 0 -76px;
  border: 7px  dotted #f3f3f3;
  border-radius: 50%;
  border-top: 7px  dotted #ffef60;
  border-bottom: 7px  dotted  #ffef60;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  }
`
