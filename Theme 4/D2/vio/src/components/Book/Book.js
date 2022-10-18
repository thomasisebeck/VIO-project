import React from 'react';
import './Book.css';

export class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: 1, 
      numPapers: 3, 
      maxLocation: 4
    }

  }

  nextPage() {
    if (this.state.currentLocation < this.state.maxLocation) {
      switch(this.state.currentLocation) {
          case 1: 
              document.querySelector('#p1').classList.add('flipped');
              document.querySelector('.book').classList.add('shiftRight');
              setTimeout(() => {
                  document.querySelector('#f1').classList.add('hidden');
                  document.querySelector('#p1 .back').classList.add('rotated');
              }, 500); 
              break;
          case 2: 
              document.querySelector('#p2').classList.add('flipped');
              break;
          default: 
              
      }
    }
  }

  render() {

    return (
      <div className="Book">

        <img id="prev" src="images_website/next.png" alt=""/>

        <div id="book" className="book">

          <div id="p2" className="paper">

            <div className="front">
              <div id="f2" className="front-content">
                
                <img className="panel" src="images_website/cover.jpg" alt=""/>
              </div>
            </div>

            <div className="back">
              <div id="b2" className="back-content">
                
                <img className="panel" src="images_website/panel1.jpg" alt=""/>
              </div>
            </div>

          </div>

          <div id="p1" className="paper">

            <div className="front">
              <div id="f1" className="front-content">
                <h1>Front 1</h1>
                <img className="panel" src="images_website/panel1.jpg" alt=""/>
              </div>
            </div>

            <div className="back">
              <div id="b1" className="back-content">
                <h1>Back 1</h1>
              </div>
            </div>

          </div>

        </div>

        <img id="next" onClick={() => this.nextPage()} src="images_website/next.png" alt=""/>

      </div>
    )

  }

}

export default Book;
