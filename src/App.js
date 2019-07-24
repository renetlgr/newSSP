import React, { Component } from 'react';
import './App.css';
import Router from './Components/Routes/Router';
import Container from '@material-ui/core/Container';
import Header from './Components/common/Header/header';

class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Router />
      </Container>
    );
  }
}

export default App;
