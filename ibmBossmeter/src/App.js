import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentEmotions: {
        anger: '',
        joy: '',
        disgust: ''
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h2>BOSSMETER</h2>
        </div>

        <div className="main">
          <p className="subheading">
            Hello there.
          </p>
          <p className="desc">
            Here's how your employees are feeling about you today:
          </p>
        </div>

        <footer>
          IBM Hackathon 2017
        </footer>
      </div>
    );
  }
}

export default App;
