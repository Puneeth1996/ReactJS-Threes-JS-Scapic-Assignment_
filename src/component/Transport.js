import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

import transportList from './Transport.json';

class Transport extends Component {    
    

  constructor(){
    super()
    this.state = {
      list : transportList
    } 
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className food
  scroll(direction){
    let far = $( '.Transport').width()/2*direction;
    // console.log(far);       
    // console.log($( '.food'));                   
    let pos = $('.Transport').scrollLeft() + far;
    // console.log(pos);
    $('.Transport').animate( { scrollLeft: pos }, 2250)
  }

  render() {
    return (        
        // Making a demo component for Food component
          <div className="container">            
            <h2 className="heading">Transport</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="Transport">
                <div className="image">
                  { transportList.map( (itm, index ) => {
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

export default Transport;
