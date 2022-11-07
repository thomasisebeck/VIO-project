import React from 'react';
import PropTypes from 'prop-types';
import './AuthorCircle.css';

export class AuthorCircle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hovering: false, 
      text: ""
    }
    this.cameraSound = new Audio("infographicSounds/camera.mp3");
    this.writingSound = new Audio("infographicSounds/pen.mp3");
    this.natureSound = new Audio("infographicSounds/plant.mp3");
    this.climbingSound = new Audio("infographicSounds/carebena.mp3"); 
  }

  render() {
    return (
      <React.Fragment>
      <div id="author">

        <img 
           onMouseOver={() => {
            this.cameraSound.play();
            this.setState({
              text: "Photography", 
              hovering: true
            })
           }} 

           onMouseOut={() => {
            this.setState({
              hovering: false
            })
           }}

            src="images_website/infographic/camera.png"
          />

          <img 
            onMouseOver={() => {
              this.natureSound.play();
              this.setState({
                text: "Nature", 
                hovering: true
              })
            }} 

            onMouseOut={() => {
              this.setState({
                hovering: false
              })
             }}

            src="images_website/infographic/plant.png"
          />

          <img 
            onMouseOver={() => {
              this.climbingSound.play();
              this.setState({
                text: "Climbing", 
                hovering: true
              })
            }}

            onMouseOut={() => {
              this.setState({
                hovering: false
              })
             }}

            src="images_website/infographic/caribena.png"
          />

          <img 
            onMouseOver={() => {
              this.writingSound.play();
              this.setState({
                text: "Writing", 
                hovering: true
              })
            }}

            onMouseOut={() => {
              this.setState({
                hovering: false
              })
             }}

            src="images_website/infographic/pen.png"
          />
      </div>

      {this.state.hovering &&
        <div id="bottomText">
          <p>{this.state.text}</p>
        </div>
      }
      <div id="background" onClick={() => { this.props.hideAuthorCircle(); }}></div>
      </React.Fragment>
    )
  }

}

export default AuthorCircle;
