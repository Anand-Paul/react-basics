import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Card from './Components/Card';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Card title="hi anand"/>
        <Card title="hello"/>
      </div>
    );
  }
}

export default App;
