import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    mirror: ''
  };

  mirrorText(text) {
    this.setState(prevState => ({
      mirror: text
    }));
  }

  render() {
    const { mirror } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={mirror}
            onChange={event => this.mirrorText(event.target.value)}
          />
          <p className="echo">Echo: {mirror !== '' && mirror}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
