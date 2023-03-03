import React from 'react';
import { Footer, Possibility, Features, Header, Couriermanage } from './containers';
import { Navbar } from './components';
import './App.css';
// import Map from './src/containers/tracking/Map';
// import {BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

const App = () => {
  return (
  <div className="App">
    {/* <Map/> */}
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <Couriermanage />
    <Features />
    <Possibility />
    <Footer />
   
  </div>
  
  
  
)
}
export default App
