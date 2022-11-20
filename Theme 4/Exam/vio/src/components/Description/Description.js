import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

export class  Description extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: 'images_website/descriptions/cactusRight.gif',
      heading: 'The Comic', 
      para: 'Things about the comic...', 
      play: false,
      comic: false
    }
  }

  changePara = (trailer) => {
    if (this.state.img == 'images_website/descriptions/cactusRight.gif')
      this.setState({ img: 'images_website/descriptions/cactusLeft.gif'})
    else 
    this.setState({ img: 'images_website/descriptions/cactusRight.gif' })


    console.log('comic para');
  }

  render() {
    return (
      <div className="Description">
        <div id='descriptions'>
          <div className='imageContainer'>
            <img 
              onMouseOver={() => this.setState({ play: true})}
              onMouseOut={() => this.setState({ play: false})}
              onClick={() => this.changePara(true) }
              className={this.state.play ? 'pulse' : ''}
              src='images_website/descriptions/playButton.png' />
            <img 
              onMouseOver={() => this.setState({ comic: true})}
              onMouseOut={() => this.setState({ comic: false})}
              onClick={() => this.changePara(false) }
              className={this.state.comic ? 'pulse' : ''}
              src='images_website/descriptions/comic.png' />
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
