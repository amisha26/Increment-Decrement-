import React, { Component } from "react";
import IncrDecr from "./components/IncrDecr";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <IncrDecr />
        </Container>
      </div>
    );
  }
}

export default App;
