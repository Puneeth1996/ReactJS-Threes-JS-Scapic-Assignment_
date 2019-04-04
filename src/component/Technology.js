import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

import technologyList from './Technology.json';

class Technology extends Component {    
    

  constructor(){
    super()
    this.state = {
      list : technologyList
    } 
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className food
  scroll(direction){
    let far = $( '.Technology').width()/4*direction;
    // console.log(far);       
    // console.log($( '.food'));                   
    let pos = $('.Technology').scrollLeft() + far;
    // console.log(pos);
    $('.Technology').animate( { scrollLeft: pos }, 750)
  }

  render() {
    return (        
        // Making a demo component for Food component
          <div className="container">            
            <h2 className="heading">Technology</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="Technology">
                <div className="image">
                  { technologyList.map( (itm, index ) => 
                    { return(
                      <img src={itm.thumb} alt={itm.name} />                     
                      )
                      
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

export default Technology;