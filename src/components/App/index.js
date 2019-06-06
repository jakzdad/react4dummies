import React, { Component } from 'react';
import './App.css';
import Series from '../../containers/series'
import 'whatwg-fetch';


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
       <header className="App-header">
         <h1 className="App-title">TV Series List</h1>
       </header>
      <Series />
      </div>
    );
  }
}

export default App;
