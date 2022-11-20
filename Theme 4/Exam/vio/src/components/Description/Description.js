import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

export class  Description extends React.Component {

  comicPara = 'The Comic'; 
  trailerPara = 'The trailer showcases the game ';

  constructor(props) {
    super(props);
    this.state = {
      img: 'images_website/descriptions/cactusRight.gif',
      heading: 'The Trailer', 
      para: this.trailerPara, 
      play: false,
      comic: false
    }
  }

  changePara = (trailer) => {
    if (this.state.img == 'images_website/descriptions/cactusRight.gif') 
      this.setState({ img: 'images_website/descriptions/cactusLeft.gif'})
    else 
    this.setState({ img: 'images_website/descriptions/cactusRight.gif' })


    if (trailer) 
      this.setState({
        heading: 'The Trailer', 
        para: this.trailerPara
      })
    else 
      this.setState({
        heading: 'The Comic', 
        para: this.comicPara
      })

    console.log('comic para');
  }

  render() {
    return (
      <div className="Description">
        <h1>So what's in the box?</h1>
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
              <div className='descrItems'>
                <p>{this.state.para}</p>
              </div>
            </div>
          </div>
        </div>
        <img className='bottomBar' src={this.state.img} />
      </div>
    );
  }

}

export default Description;
