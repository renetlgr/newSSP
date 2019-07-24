import React, { Component } from 'react';
import './App.css';
import CardHeader from '@material-ui/core/CardHeader';
import Router from './Components/Routes/Router';
import Container from '@material-ui/core/Container';

class App extends Component {

  render() {
    const title = "WELCOME TO SSP-SERVICE"
    return (
      <Container>
        <CardHeader title={title} style={{ textAlign: "center"}}/>
        <Router />
      </Container>
    );
  }
}

export default App;
