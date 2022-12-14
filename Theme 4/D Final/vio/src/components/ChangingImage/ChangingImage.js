import React from 'react';
import './ChangingImage.css';


class ChangingImage extends React.Component {

  changeImage (newSource) {
    this.setState ({
      source: newSource
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      staticimage: props.staticimage,
      movingimage: props.movingimage,
      source: props.staticimage
    }
   }

  render() { 
    return ( 
      <div 
        onMouseOver={() => {this.changeImage(this.state.movingimage)}} 
        onMouseLeave={() => {this.changeImage(this.state.staticimage)}}
      >
        <img src={this.state.source} alt=""/>
      </div>
    );
  }
}

export default ChangingImage;
