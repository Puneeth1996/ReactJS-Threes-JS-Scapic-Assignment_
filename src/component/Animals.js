import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

import animalList from './Animals.json';

class Animals extends Component {    
  
  constructor(){
    super()
    this.state = {
      list : animalList
    } 
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className cars
  scroll(direction){
    let far = $( '.animals' ).width()/3*direction;
    let pos = $('.animals').scrollLeft() + far;
    $('.animals').animate( { scrollLeft: pos }, 250)
  }


  render() {
    console.log(animalList);  
    return (   
        //Making a demo component for Animals component */}
          <div className="container">            
            <h2 className="heading">Animals</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="animals">
                <div className="image">
                  { animalList.map( (itm, index ) => {
                    return (<a href={"./"+itm.name+"/index.html"} key={index}><img src={itm.thumb} alt={itm.name} /></a>) 
                    }
                    )}                
                </div>
              </div>

              <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
            </div>
          </div>
    );
  }
}

export default Animals;
          