import React from 'react';
import PropTypes from 'prop-types';
import './Desk.css';
import Book from '../Book/Book';
import AuthorCircle from '../AuthorCircle/AuthorCircle'

export class  Desk extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookOpen: false, 
      hat: 'images_website/desk/hat.png', 
      hatClass: 'hat', 
      showHat: true
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

    setTimeout(() => {
      this.setState({
        showHat: false
      })
    }, 1000)

  }

  showStage() {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    })
  }

  authorCircle() {
    this.setState({
      showComic: false,
      showAuthorCircle: true
    })
  }

  hideBook = () => {
    this.setState({
      showComic: false
    })
  }

  render() {
    return (
      <div className="Desk">
          <div className='innerDesk'>
            <img className='desk' src="images_website/desk/desk.png" />
            <img className="comic" onClick={() => { this.showComic(); }} src="images_website/desk/comic.png" />
            <img className='key' onClick={() => { this.showStage(); }} src='images_website/desk/key.png' />
            {this.state.showHat &&
              <img className={this.state.hatClass} onClick={() => { this.hatFalling(); }} src={this.state.hat} />
            }
            <img className='letter'onClick={() => { this.authorCircle(); }} src='images_website/desk/letter.png' />
          </div>

          {this.state.showComic && 
              <Book hideBook={this.hideBook}/>
          }
          {this.state.showAuthorCircle && 
            <React.Fragment>
              <div className='AuthorCircleAndLetter'>
                <img className='letterOpened' src='images_website/desk/letter_opened.png' />
                <div id="authorCircleDiv">
                  <AuthorCircle />
                </div>
              </div>
              
              <div className='DarkBackground' onClick={() => { this.setState({ showAuthorCircle: false })}}></div>
            </React.Fragment>
          }
      </div>
    )
  }

}

export default Desk;
