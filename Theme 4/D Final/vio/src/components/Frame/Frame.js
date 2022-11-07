import React from 'react';
import './Frame.scss';

class Frame extends React.Component {

  constructor(props) {
    super(props);

    let path = "comicSounds/" + this.props.sound + ".mp3";
    this.audio = new Audio(path); 

    this.state = {
      staticImage: this.props.staticImage, 
      movingImage: this.props.movingImage,
      currImage: "images_website/comic/" + this.props.staticImage, 
      timerDone: false
    }
  }

  move = () => {
    this.audio.play()
    .then (
      this.setState({
        currImage: "images_website/comic/" + this.props.movingImage
      })
    )
  }


  static = () => {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.setState({
      currImage: "images_website/comic/" + this.props.staticImage
    })
  }

  render() {

    const myStyle = {
      left: this.props.left, 
      top: this.props.top, 
      width: this.props.width,
      position: 'absolute'
    }

    let random = Math.random() * 4000;

    setTimeout(() => {
      this.setState({
        timerDone: true
      })
    }, random);

    return (
      <div  >
        <img 
          onMouseOver={() => {this.move()}}
          onMouseOut={() => {this.static()}}
          className={ !this.state.timerDone ? "frame" : "frame glowing"  }
          style={myStyle} 
          src={this.state.currImage} 
          alt="">
        </img>
      </div>
    )

  }

}

export default Frame;
