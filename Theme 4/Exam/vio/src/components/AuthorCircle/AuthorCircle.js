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
    this.climbingSound = new Audio("infographicSounds/carabena.mp3"); 
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

      <div id="skills">
        <a href="https://isocpp.org/" target="_blank"><img src="images_website/desk/cpp.png" /></a>
        <a href="https://www.java.com/en/" target="_blank"><img src="images_website/desk/java.png" /></a>
        <a href="https://html.spec.whatwg.org/multipage/" target="_blank"><img src="images_website/desk/html.png" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="images_website/desk/css.png" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="images_website/desk/js.png" /></a>
        <a href="https://www.php.net/docs.php" target="_blank"><img src="images_website/desk/php.png" /></a>
        <a href="https://reactjs.org/" target="_blank"><img src="images_website/desk/react.png" /></a>

        <a href="https://www.adobe.com/africa/products/photoshop.html" target="_blank"><img src="images_website/desk/ps.png" /></a>
        <a href="https://www.adobe.com/africa/products/illustrator.html"><img src="images_website/desk/illustrator.png" /></a>
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
