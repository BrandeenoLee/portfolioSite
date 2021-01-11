import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
import PortfolioNav from './components/nabvar';
import Container from './components/container';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <>
        <PortfolioNav/>
        <Container>
          <Main />
        </Container>
      </>
    );
  }
}

export default App;
