import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import Top from './components/Top';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Header />
        <Top />
        <Card />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
