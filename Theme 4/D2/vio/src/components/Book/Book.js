import React from 'react';
import './Book.css';
import Panel, { Frame } from '../Frame/Frame';

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
                document.querySelector('#f1p').classList.add('hidden');
                document.querySelector('#f3p').classList.remove('hidden');
              }, 500); 
              
              this.setState({
                currentLocation: this.state.currentLocation + 1
              })
              
              break;
          case 2: 
            
              document.querySelector('#p2').classList.add('flipped');
              document.querySelector('#b2').classList.add('top');

              let b1 = document.querySelector('#p1');
              b1.style.position = 'relative'; 
              b1.style.zIndex = '-1';

              setTimeout(() => {
                document.querySelector('#f4p').classList.remove('hidden');
              }, 500);
              
              setTimeout(() => {
                
                document.querySelector('#b1p').classList.add('hidden');
              }, 1000); 

              this.setState({
                currentLocation: this.state.currentLocation + 1
              })

              break;
          case 3:

              document.querySelector('#p3').classList.add('flipped');
              document.querySelector('#b3').classList.add('top');
              document.querySelector('#b1p').classList.add('hidden');

              let b2 = document.querySelector('#p2');
              b2.style.position = 'relative'; 
              b2.style.zIndex = '-1';
              
              setTimeout(() => {
                document.querySelector('#b2p').classList.add('hidden');
              }, 1000); 

          default: 
              
      }
    }
  }

  /*

  render() {

    const myStyle = {
      left: this.props.left, 
      top: this.props.top, 
      position: absolute
    }

    return (
      <img className="Panel" style={myStyle} src={this.props.source}></img>
    )

  

  */

  render() {

    return (
      <div className="Book">

        <img id="prev" src="images_website/next.png" alt=""/>

        <div id="book" className="book">

        <div id="p4" className="paper">

          <div className="front hidden" id="f4p">
            <div id="f4" className="front-content">
              <img className="panel" src="images_website/comic/7.jpg" alt=""/>
            </div>
          </div>

        </div>

        <div id="p3" className="paper">

          <div className="front hidden" id="f3p">
            <div id="f3" className="front-content">
              <img className="panel" src="images_website/comic/5.jpg" alt=""/>
            </div>
          </div>

          <div className="back" id="b3p">
            <div id="b3" className="back-content">
              <img className="panel" src="images_website/comic/6.jpg" alt=""/>
            </div>
          </div>

        </div>

          <div id="p2" className="paper">

            <div className="front"  id="f2p">
              <div id="f2" className="front-content">
                
                <img className="panel" src="images_website/comic/3.jpg" alt=""/>
              </div>
            </div>

            <div className="back"  id="b2p">
              <div id="b2" className="back-content">
                <img className="panel" src="images_website/comic/4.jpg" alt=""/>
              </div>
            </div>

          </div>

          <div id="p1" className="paper">

            <div className="front"  id="f1p">
              <div id="f1" className="front-content">
                <img className="panel" src="images_website/comic/1.jpg" alt=""/>

                <div id="f1-panels">
                  <Panel static="images_website/comic/panel1/p1f1.png" moving="images_website/comic/panel1/p1f1.gif" left="100px" top="100px"/>
                </div>
              </div>
            </div>

            <div className="back" id="b1p">
              <div id="b1" className="back-content">
                <img className="panel" src="images_website/comic/2.jpg" alt=""/>
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
