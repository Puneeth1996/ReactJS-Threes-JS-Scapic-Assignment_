import React, { Component } from 'react';
import './App1.css';



// import Travel from './component/Travel';
// import Homes from './component/Homes';
// import Cars from './component/Cars';


import Animals from './component/Animals';
import Food from './component/Food';

import Transport from './component/Transport';
import Technology from './component/Technology';
import Nature from './component/Nature';
import Furniture from './component/Furniture';



class App extends Component {

   constructor(){
    super()
    this.state = {
      list : ["Animals","Food","Transport","Technology","Furniture","Nature"]
    } 
  }

  
  render() {
    return (
        <div className="main">
          <h1 className="title">Scapic.</h1>
          
          {/*

          Please ignore as this are used during testing / initial phases only
          <Travel />
          <Homes /> 
          <Cars />  

          */}
          <Animals />
          <Food  />
          <Transport />
          <Technology />
          <Nature />
          <Furniture />
        </div>
      
    );
  }
}

export default App;
