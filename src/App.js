import React, { Component } from 'react';

import Home from './Components/Home';

import './App.css';
import Question from './Components/Question';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      data: null,
      isLoaded: false
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
          <Question />
        </div>
      );
    }
  }
}

export default App;
