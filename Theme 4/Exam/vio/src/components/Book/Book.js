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
      maxLocation: 4, 
      end: false
    }
  }

  handleMouseMove = event => {
    console.log(event.clientX);
    console.log(event.clientY);

    let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    //calc(120vh/1.41)

    const OFFSET_X = 200;
    const OFFSET_Y = 800;

    this.setState({
      x: ((width/2) - (width*1.2/1.41/2) - (event.clientX*0.3) + OFFSET_X) + "px",
      y: ((height/2) - (event.clientY*0.6) - OFFSET_Y) + "px",
    })
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
                currentLocation: 2, 
                end: false
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
                currentLocation: 3,
                end: false
              })

              document.querySelector('#next').setAttribute('src', 'images_website/comic/arrow.png');

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

              this.setState({
                end: true
              })

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
      <div className="Book"
        onMouseMove={this.handleMouseMove}
        style={{
            outline: "1000px solid rgba(0, 0, 0, 0.5)",
            border: "500px solid rgba(0,0,0,0)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            margin: "0 auto",
            position: "absolute",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
      >

        <div className='arrowContainer'>
          <img id="prev" onClick={() => this.prevPage()} src="images_website/comic/arrow.png" alt=""/>
        </div>

        <div id="book" 
          style={{
            position: "relative",
            width: "calc(120vh/1.41)",
            height: "150vh",
            margin: "10px",
            top: this.state.y,
            left: this.state.x
          }}
        className="book">

        <div id="p4" className="paper">

          <div className="front hidden" id="f4p">
            <div id="f4" className="front-content">
              <img className="panel" src="images_website/comic/7.jpg" alt=""/>

              <Frame staticImage="panel6/p6f4.png" movingImage="panel6/p6f4.gif" sound="p6f4" left="51.5%" top="19.4%" width="47.3%"/>
              <Frame staticImage="panel6/p6f9.png" movingImage="panel6/p6f9.gif" sound="p6f9" left="1.8%" top="57.5%" width="35.7%" />
              <Frame staticImage="panel6/p6f11.png" movingImage="panel6/p6f11.gif" sound="p6f11" left="72.8%" top="57.6%" width="25.6%"/>
            </div>
          </div>

        </div>

        <div id="p3" className="paper">

          <div className="front hidden" id="f3p">
            <div id="f3" className="front-content">
              <img className="panel" src="images_website/comic/5.jpg" alt=""/>

              <Frame staticImage="panel4/p4f4.png" movingImage="panel4/p4f4.gif" sound="p4f4" left="67.3%" top="11.6%" width="31.2%"/>
              <Frame staticImage="panel4/p4f9.png" movingImage="panel4/p4f9.gif" sound="p4f9" left="53%" top="48.6%" width="45%"/>
            </div>
          </div>

          <div className="back" id="b3p">
            <div id="b3" className="back-content">
              <img className="panel" src="images_website/comic/6.jpg" alt=""/>

              <Frame staticImage="panel5/p5f4.png" movingImage="panel5/p5f4.gif" sound="p5f4" left="28.7%" top="18%" width="34%"/>
              <Frame staticImage="panel5/p5f8.png" movingImage="panel5/p5f8.gif" sound="p5f8" left="62.5%" top="55.8%" width="36%"/>
            </div>
          </div>

        </div>

          <div id="p2" className="paper">

            <div className="front"  id="f2p">
              <div id="f2" className="front-content">
                <img className="panel" src="images_website/comic/3.jpg" alt=""/>

                <Frame staticImage="panel2/p2f3.png" movingImage="panel2/p2f3.gif" sound="p2f3" left="1.5%" top="26.9%" width="49%"/>
                <Frame staticImage="panel2/p2f6.png" movingImage="panel2/p2f6.gif" sound="p2f6" left="52.5%" top="57.3%" width="46.1%"/>
              </div>
            </div>

            <div className="back"  id="b2p">
              <div id="b2" className="back-content">
                <img className="panel" src="images_website/comic/4.jpg" alt=""/>

                <Frame staticImage="panel3/p3f1.png" movingImage="panel3/p3f1.gif" sound="p3f1" left="60.6%" top="0.8%" width="37.1%"/>
                <Frame staticImage="panel3/p3f9.png" movingImage="panel3/p3f9.gif" sound="p3f9" left="1.2%" top="66.8%" width="51%"/>
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

                <Frame staticImage="panel1/p1f1.png" movingImage="panel1/p1f1.gif" sound="p1f1" left="57%" top="1%" width="41%"/>
                <Frame staticImage="panel1/p1f2.png" movingImage="panel1/p1f2.gif" sound="p1f2" left="1.7%" top="1%" width="54%"/>
                <Frame staticImage="panel1/p1f3.png" movingImage="panel1/p1f3.gif" sound="p1f3" left="1.7%" top="15.7%" width="54%"/>
              </div>                                                                      
            </div>

          </div>

        </div>

        <img id="next" onClick={() => {
          if (!this.state.end)
            this.nextPage()
          else 
            this.props.hideBook()
        }} src={this.state.end ? "images_website/comic/exit.png" : "images_website/comic/arrow.png" } alt=""/>

      </div>
    )

  }

}

export default Book;
