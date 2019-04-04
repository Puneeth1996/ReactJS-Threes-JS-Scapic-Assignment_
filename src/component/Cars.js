import React, { Component } from 'react';
import "../App1.css"

import $ from 'jquery';

class Cars extends Component {    
  
  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }

  // works with values placed in the app1.css with className cars

  scroll(direction){
    let far = $( '.cars' ).width()/6*direction;
    let pos = $('.cars').scrollLeft() + far;
    $('.cars').animate( { scrollLeft: pos }, 250)
  }

  render() {
    return (   
        //Making a demo component for Cars component */}
          <div className="container">            
            <h2 className="heading">Cars</h2>
            <div className="wrapper">
              <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
              <div className="cars">
                <div className="image">1</div>
                <div className="image">2</div>
                <div className="image">3</div>
                <div className="image">4</div>
                <div className="image">5</div>
                <div className="image">6</div>
                <div className="image">7</div>
                <div className="image">8</div>
                <div className="image">9</div>
                <div className="image">10</div>
              </div>
              <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
            </div>
          </div>
    );
  }
}

export default Cars;
          