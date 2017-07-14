import React, { Component } from 'react';
import './App.css';
import Image from './components/Image';



class App extends Component {

  render() {
    return (
      <div id="app" className="App">
        <div className="App-header">
          <h1>Swanson Quotes</h1>
        </div>
        <Image />
      </div>
    );
  }
}

export default App;
