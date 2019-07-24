import React, { Component } from 'react';
import './App.css';
import Router from './Components/Routes/Router';
import Container from '@material-ui/core/Container';
import Header from './Components/common/Header/header';
import BreadCrumbs from './Components/common/Breadcrumbs/breadcrumbs';
import Footer from './Components/common/Footer/footer';

class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <BreadCrumbs />
        <Container fixed>
          <Router />
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default App;
