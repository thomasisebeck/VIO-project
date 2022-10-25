import React from 'react';
import PropTypes from 'prop-types';
import './Frame.css';

export class Frame extends React.Component {

  render() {

    const myStyle = {
      left: this.props.left, 
      top: this.props.top, 
      position: 'absolute'
    }

    return (
      <img className="frame" style={myStyle} src={this.props.source} alt=""></img>
    )

  }

}

export default Frame;
