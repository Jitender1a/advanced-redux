import React, { Component } from 'react';
import './App.css';

import SuperSecret from './components/SuperSecret'
import OnOffButton from './components/OnOffButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuperSecret/>
        <OnOffButton/>
      </div>
    );
  }
}

export default App;
