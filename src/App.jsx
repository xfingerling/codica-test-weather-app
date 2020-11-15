import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";

import store from "./redux/store";
import { allowLocation, denyLocation } from "./utils/geolocation";

import HomePage from "./containers/containerHomePage";
import DetailInfoPage from "./pages/DetailInfoPage";

import "./App.css";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(allowLocation, denyLocation);
  }, []);

  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/details" exact component={DetailInfoPage} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
