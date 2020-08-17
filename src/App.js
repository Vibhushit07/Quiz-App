import React, { Component } from 'react';

import Home from './Components/Home';
import Question from './Components/Question';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      data: null,
      isLoaded: false,
      index: 0,
      submitted: [ false, false, false, false, false, false, false, false, false, false ],
      answers: [ "", "", "", "", "", "", "", "", "", "" ]
    }
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({ isLoaded: true, data: res });
    }, 
    error => {
      this.setState({ isLoaded: true, error })
    });
  }

  setName = (name) => {
    console.log(name);
    this.setState({ name: name });
  }

  setIndex = (index) => {
    console.log(index);

    if((this.state.index === 0 && index === -1) || ( this.state.index === 9 && index === 1 ) )
      index = 0;

    this.setState({ index: this.state.index + index });
  }

  updateState = (answer, score) => {

    console.log(answer);
    let answers = this.state.answers;
    answers[this.state.index] = answer;

    let submitted = this.state.submitted;
    submitted[this.state.submitted] = true;

    console.log(score);

    this.setState({ submitted: submitted, answers: answers, score: this.state.score + score });

    this.setIndex(1);
  }

  render() {

    if(this.state.name === null) {
      return (
        <Home setName = { this.setName } />
      );

    } else if (!this.state.isLoaded) {
      return (
        <div>
          Loading
        </div>
      );

    } else if (this.state.error) {
      return (
        <div>
          Error: {this.state.error.message }
        </div>
      );

    } else {
      return(
        <div>
          Welcome { this.state.name }
          <Question state = { this.state } updateState = { this.updateState } />
          <Footer setIndex = { this.setIndex } />
        </div>
      );
    }
  }
}

export default App;
