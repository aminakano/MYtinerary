import React, { Component } from 'react';
import './App.css';
import MyCarrousel from './MyCarrousel';
import Header1 from './Header1';
import Header2 from './Header2';
import Hamburger from './Nav';

// import {Provider} from 'react-redux';
// import store from './store';
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">        
          {/* <Header1 /> */}
          <Hamburger />
          <Header2 />        
          <MyCarrousel/>
         
        </div>
      // </Provider>
    );
  }
}

export default App;
