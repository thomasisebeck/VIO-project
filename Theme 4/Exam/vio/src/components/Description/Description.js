import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

export class  Description extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: 'images_website/descriptions/cactusRight.gif',
      heading: 'The Comic', 
      para: 'Things about the comic...'
    }
  }

  render() {
    return (
      <div className="Description">
        <div id='descriptions'>
          <div className='imageContainer'>
            <img src='images_website/descriptions/playButton.png' />
            <img src='images_website/descriptions/comic.png' />
          </div>
          <div className='descrContainer'>
            <div>
              <h2>{this.state.heading}</h2>
              <p>{this.state.para}</p>
            </div>
          </div>
        </div>
        <img className='bottomBar' src={this.state.img} />
      </div>
    );
  }

}

export default Description;
