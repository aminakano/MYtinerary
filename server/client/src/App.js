import React, { Component } from 'react';
import '../src/Styles/App.css';
import MyCarrousel from '../src/Components/MyCarrousel';
import Header from './Header';
import Hamburger from './Nav';


class App extends Component {
  render() {
    return (
      
        <div className="App">      
          <Hamburger />
          <Header />        
          <MyCarrousel/>         
        </div>
      
    );
  }
}

export default App;
