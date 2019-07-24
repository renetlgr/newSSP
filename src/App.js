import React, { Component } from 'react';
import './App.css';
import CardHeader from '@material-ui/core/CardHeader';
import Router from './Components/router/Router';

class App extends Component {

  render() {
    const title = "WELLCOME TO SSP-SERVICE"
    return (
      <div>
        <CardHeader title={title} style={{ textAlign: "center"}}/>
        <Router />
      </div>
    );
  }
}

export default App;
