import React, { Component } from 'react';
import './App.css';
import Image from './components/Image';
import Quote from './components/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Swanson Quotes</h1>
        </div>
        <Image />
      </div>
    );
  }
}

export default App;
