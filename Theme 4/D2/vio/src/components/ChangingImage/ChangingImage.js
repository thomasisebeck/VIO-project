import React from 'react';
import PropTypes from 'prop-types';
import './ChangingImage.css';


class ChangingImage extends React.Component {

  changeImage (newSource) {
    this.setState ({
      source: newSource
    })
    console.log(this.state.source);
  }

  constructor(props) {
    super(props);
    this.state = {
      staticimage: props.staticimage,
      movingimage: props.movingimage,
      source: props.movingimage
    }
   }

  render() { 
    return ( 
      <div 
        onMouseOver={() => {this.changeImage(this.state.movingimage)}} 
        onMouseLeave={() => {this.changeImage(this.state.staticimage)}}
      >
        <img src={this.state.source} />
      </div>
    );
  }
}

export default ChangingImage;
