import React, { Component } from 'react'
import './App.css';
import { Container } from 'semantic-ui-react';
import MenuComponent from "./components/MenuComponent";
import AddContent from "./components/AddContent"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
        <Container className="container">
          <MenuComponent />
          <AddContent />
        </Container>
    )
  }
}
