import React, { Component } from 'react';

import Home from './Components/Home';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: null
    }
  }

  setName = (name) => {
    console.log(name);
    this.setState({ name: name });
  }

  render() {
    return(
      <div>
        {
          this.state.name === null ? 
            <Home setName = { this.setName } />
          :
            <p> { this.state.name } </p>
        }
      </div>
      
    );
  }
}

export default App;
