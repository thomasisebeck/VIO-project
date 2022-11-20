import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

export class  Description extends React.Component {

  comicPara1 = 'A story is told of a deeply troubled heroine searching for love.';
  comicPara2 = 'The book was made interactive adding sound and animation throughout the story.';
  trailerPara1 = 'The trailer showcases the game in an interactive and playful way.';
  trailerPara2 = 'It is a subtle introduction to the protagonist and antagonist of the story, but also a test of dexterity.';

  constructor(props) {
    super(props);
    this.state = {
      img: 'images_website/descriptions/cactusRight.gif',
      heading: 'The Trailer', 
      para1: this.trailerPara1, 
      para2: this.trailerPara2,
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
        para1: this.trailerPara1, 
        para2: this.trailerPara2
      })
    else 
      this.setState({
        heading: 'The Comic', 
        para1: this.comicPara1,
        para2: this.comicPara2
      })

    console.log('comic para');
  }

  render() {
    return (
      <div className="Description">
        <h1>So what's it all about?</h1>
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
                <div className='paragraphs'>
                  <p>{this.state.para1}</p>
                  <p>{this.state.para2}</p>
                </div>
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
