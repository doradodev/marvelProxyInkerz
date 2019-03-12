import React, { Component } from 'react';
import './App.css';
import HomeLayout from './pages/components/home-layout'
import Home from './pages/containers/home'

class App extends Component {
  render() {
    return (
      <HomeLayout>
        <Home/>
      </HomeLayout>
    );
  }
}

export default App;
