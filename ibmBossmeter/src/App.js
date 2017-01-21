import React, { Component } from 'react';
import './App.css';
import data from './data/bosses.json';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentEmotions: {
        anger: '',
        joy: '',
        disgust: ''
      },
      currentRatings: {
        name: data.name,
        rating: data.rating,
        weeklyaverage: data.weeklyaverage
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
              <article className="data">
                {this.state.currentRatings.name}<br></br>
                {this.state.currentRatings.rating}<br></br>
                {this.state.currentRatings.weeklyaverage}<br></br>
              </article>
        </div>

        <footer>
          IBM Hackathon 2017
        </footer>
      </div>
    );
  }
}

export default App;
