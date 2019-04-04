import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

import natureList from './Nature.json';

class Nature extends Component {    
    

  constructor(){
    super()
    this.state = {
      list : natureList
    } 
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className food
  scroll(direction){
    let far = $( '.Nature').width()/3*direction;
    // console.log(far);       
    // console.log($( '.food'));                   
    let pos = $('.Nature').scrollLeft() + far;
    // console.log(pos);
    $('.Nature').animate( { scrollLeft: pos }, 1000)
  }

  render() {
    return (        
        // Making a demo component for Food component
          <div className="container">            
            <h2 className="heading">Nature</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="Nature">
                <div className="image">
                  { natureList.map( (itm, index ) => {
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

export default Nature;