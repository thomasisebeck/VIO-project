import React from 'react';
import PropTypes from 'prop-types';
import './Desk.css';
import Book from '../Book/Book';

export class  Desk extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookOpen: false, 
      hat: 'images_website/desk/hat.png', 
      hatClass: 'hat'
    }
  }

  showComic() {
    console.log('showing');
    window.scrollTo({
        top: 810,
        behavior: 'smooth',
    });
    this.setState({
      showComic: true
    })
  }

  hatFalling() {
    this.setState({
      hat: 'images_website/desk/hat.gif',
      hatClass: 'hat fade'
    })

  }

  render() {
    return (
      <div className="Desk">
          <div className='innerDesk'>
            <img className='desk' src="images_website/desk/desk.png" />
            <img className="comic" onClick={() => { this.showComic(); }} src="images_website/desk/comic.png" />
            <img className='key' src='images_website/desk/key.png' />
            <img className={this.state.hatClass} onClick={() => { this.hatFalling(); }} src={this.state.hat} />
            <img className='letter' src='images_website/desk/letter.png' />
          </div>

          {this.state.showComic && 
            <Book/>
          }
      </div>
    )
  }

}

export default Desk;
