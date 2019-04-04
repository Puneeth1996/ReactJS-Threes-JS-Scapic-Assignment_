import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

import foodList from './Food.json';

class Food extends Component {    
    

  constructor(){
    super()
    this.state = {
      list : foodList
    } 
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className food
  scroll(direction){
    let far = $( '.food').width()/4*direction;
    // console.log(far);       
    // console.log($( '.food'));                   
    let pos = $('.food').scrollLeft() + far;
    // console.log(pos);
    $('.food').animate( { scrollLeft: pos }, 2000)
  }

  render() {
    return (        
        // Making a demo component for Food component
          <div className="container">            
            <h2 className="heading">Food</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="food">
                <div className="image">
                  { foodList.map( (itm, index ) => {
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

export default Food;
