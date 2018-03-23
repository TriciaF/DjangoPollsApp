import React, { Component } from 'react';
import './App.css';
import Poll from './Poll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the National Politcal Poll App</h1>
        </header>
        <div>
          <Poll />
        </div>
      </div>
    );
  }
}

export default App;
