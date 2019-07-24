import React, { Component } from 'react';
import './App.css';
import CardHeader from '@material-ui/core/CardHeader';

class App extends Component {

  render() {
    const title = "WELLCOME TO SSP-SERVICE"
    return (
      <div>
        <CardHeader title={title} style={{ textAlign: "center"}}/>
      </div>
    );
  }
}

export default App;
