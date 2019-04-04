import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

import furnitureList from './Furniture.json';

class Furniture extends Component {    
    

  constructor(){
    super()
    this.state = {
      list : furnitureList
    } 
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className food
  scroll(direction){
    let far = $( '.Furniture').width()/6*direction;
    // console.log(far);       
    // console.log($( '.food'));                   
    let pos = $('.Furniture').scrollLeft() + far;
    // console.log(pos);
    $('.Furniture').animate( { scrollLeft: pos }, 1500)
  }

  render() {
    return (        
        // Making a demo component for Food component
          <div className="container">            
            <h2 className="heading">Furniture</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="Furniture">
                <div className="image">
                  { furnitureList.map( (itm, index ) => {
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

export default Furniture;