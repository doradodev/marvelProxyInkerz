import React, { Component } from 'react';
import './App.css';
import HomeLayout from './pages/components/home-layout'
import Home from './pages/containers/home'
import Header from './header/component/header'

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <HomeLayout>
        <Home/>
      </HomeLayout>
      </div>
    );
  }
}

export default App;
