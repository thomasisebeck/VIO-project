import React from 'react';
import './Book.css';
import Frame from '../Frame/Frame';
import ChangingImage from '../ChangingImage/ChangingImage';

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
                currentLocation: 2
              })
              
              break;
          case 2: 
            
              document.querySelector('#p2').classList.add('flipped');
              document.querySelector('#b2').classList.add('top');

              let b1 = document.querySelector('#p1');
              b1.style.zIndex = '-1';

              

              setTimeout(() => {
                document.querySelector('#f4p').classList.remove('hidden');
              }, 500);
              
              setTimeout(() => {
                
                document.querySelector('#b1p').classList.add('hidden');
              }, 1000); 

              this.setState({
                currentLocation: 3
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

  prevPage() {
    if (this.state.currentLocation >= 0) {
      switch(this.state.currentLocation) {
        case 3:
          document.querySelector('#b2p').classList.remove('hidden');
          document.querySelector('#p3').classList.add('flipBack');
          document.querySelector('#p3').classList.remove('flipped');

          this.setState({
            currentLocation: 2
          })
          break;
        case 2: 
          document.querySelector('#p2').classList.add('flipBack');
          document.querySelector('#p2').classList.remove('flipped');

            document.querySelector('#f4p').classList.add('hidden');

          let b2 = document.querySelector('#p2');
          b2.style.zIndex = '5';

          document.querySelector('#b1p').classList.remove('hidden');
  

          this.setState({
            currentLocation: 1
          })
          break;
          
      }
    }
  }

  render() {

    return (
      <div className="Book">

        <div className='arrowContainer'>
          <img id="prev" onClick={() => this.prevPage()} src="images_website/comic/arrow.png" alt=""/>
        </div>

        <div id="book" className="book">

        <div id="p4" className="paper">

          <div className="front hidden" id="f4p">
            <div id="f4" className="front-content">
              <img className="panel" src="images_website/comic/7.jpg" alt=""/>

              <Frame staticImage="panel6/p6f4.png" movingImage="panel6/p6f4.gif" sound="p6f4" left="217px" top="144px" width="200px"/>
              <Frame staticImage="panel6/p6f11.png" movingImage="panel6/p6f11.gif" sound="p6f11" left="308px" top="428px" width="110px"/>
            </div>
          </div>

        </div>

        <div id="p3" className="paper">

          <div className="front hidden" id="f3p">
            <div id="f3" className="front-content">
              <img className="panel" src="images_website/comic/5.jpg" alt=""/>

              <Frame staticImage="panel4/p4f4.png" movingImage="panel4/p4f4.gif" sound="p4f4" left="283px" top="87px" width="133px"/>
              <Frame staticImage="panel4/p4f9.png" movingImage="panel4/p4f9.gif" sound="p4f9" left="223px" top="362px" width="194px"/>
            </div>
          </div>

          <div className="back" id="b3p">
            <div id="b3" className="back-content">
              <img className="panel" src="images_website/comic/6.jpg" alt=""/>

              <Frame staticImage="panel5/p5f4.png" movingImage="panel5/p5f4.gif" sound="p5f4" left="122px" top="135px" width="143px"/>
              <Frame staticImage="panel5/p5f8.png" movingImage="panel5/p5f8.gif" sound="p5f8" left="263px" top="416px" width="153px"/>
            </div>
          </div>

        </div>

          <div id="p2" className="paper">

            <div className="front"  id="f2p">
              <div id="f2" className="front-content">
                <img className="panel" src="images_website/comic/3.jpg" alt=""/>

                <Frame staticImage="panel2/p2f3.png" movingImage="panel2/p2f3.gif" sound="p2f3" left="9px" top="200px" width="202px"/>
                <Frame staticImage="panel2/p2f6.png" movingImage="panel2/p2f6.gif" sound="p2f6" left="223px" top="428px" width="193px"/>
              </div>
            </div>

            <div className="back"  id="b2p">
              <div id="b2" className="back-content">
                <img className="panel" src="images_website/comic/4.jpg" alt=""/>

                <Frame staticImage="panel3/p3f1.png" movingImage="panel3/p3f1.gif" sound="p3f1" left="256px" top="6px" width="155px"/>
                <Frame staticImage="panel3/p3f9.png" movingImage="panel3/p3f9.gif" sound="p3f9" left="5px" top="498px" width="212px"/>
              </div>
            </div>

          </div>

          <div id="p1" className="paper">

            <div className="front"  id="f1p">
              <div id="f1" className="front-content">
                <img className="panel" src="images_website/comic/1.jpg" alt=""/>
              </div>
            </div>

            <div className="back" id="b1p">
              <div id="b1" className="back-content">
                <img className="panel" src="images_website/comic/2.jpg" alt=""/>

                <Frame staticImage="panel1/p1f1.png" movingImage="panel1/p1f1.gif" sound="p1f1" left="240px" top="7px" width="175px"/>
                <Frame staticImage="panel1/p1f2.png" movingImage="panel1/p1f2.gif" sound="p1f2" left="7px" top="9px" width="226px"/>
                <Frame staticImage="panel1/p1f3.png" movingImage="panel1/p1f3.gif" sound="p1f3" left="7px" top="118px" width="226px"/>
              </div>                                                                      
            </div>

          </div>

        </div>

        <img id="next" onClick={() => this.nextPage()} src="images_website/comic/arrow.png" alt=""/>

      </div>
    )

  }

}

export default Book;
