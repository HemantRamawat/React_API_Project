import React , { Component } from 'react';
import './App.css';
import FetchData from "./components/FetchData";
import Navbar from "./components/layout/Navbar";
// import Modal from "./components/Modal";


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Modal /> */}
        
        <FetchData />
        
        
      </div>
    );
  }
}

export default App;
