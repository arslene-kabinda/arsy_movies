import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #111;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
