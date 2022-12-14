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
      showHat: true, 
      comicBubble: false, 
      keyBubble: false, 
      authorBubble: false
    }
  }

  componentDidMount() {
    this.setState({
      showComic: true
    })

    setTimeout(() => {
      this.setState({
      showComic: false
    })
    }, 1000);

    
  }

  showComic() {
    console.log('showing');

    console.log(document.getElementById('Desk'));
    window.scrollTo({
      top: document.getElementById('Desk').offsetTop,
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
      top: document.getElementById('stageWrapper').offsetTop + 450,
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
      <div className="Desk" id="Desk">
          <div className='deskWrapper'>
            <div className='innerDesk'>
              <img className='desk' src="images_website/desk/room.svg"></img>

              { this.state.comicBubble &&
                <img id='comicBubble' src="images_website/desk/diveIntoTheStory.png" /> 
              }
              <img 
                className="comic" 
                onMouseOver={() => { this.setState({comicBubble: true}) }}
                onMouseLeave={() => { this.setState({comicBubble: false}) }}
                onClick={() => { this.showComic(); }} src="images_website/desk/comic.png" />


              { this.state.keyBubble && 
                <img id='keyBubble' src="images_website/desk/hidingUnderThere.png" />
              }
              <img className='key' onClick={() => { this.showStage(); }} src='images_website/desk/key.png' />

  
              {this.state.showHat &&
                <img 
                  className={this.state.hatClass} 
                  onMouseOver={() => { this.setState({keyBubble: true}) }}
                  onMouseLeave={() => { this.setState({keyBubble: false}) }}
                  onClick={() => { 
                    this.hatFalling(); 
                    this.setState({keyBubble: false});
                  }} src={this.state.hat} />
              }

              { this.state.authorBubble && 
                <img id='authorBubble' src="images_website/desk/somethingFromMe.png" />
              }
              <img 
                className='letter'
                onMouseOver={() => { this.setState({authorBubble: true}) }}
                onMouseLeave={() => { this.setState({authorBubble: false}) }}
                onClick={() => { this.authorCircle(); }} src='images_website/desk/letter.png' />
              
            </div>
          </div>

          {this.state.showComic && 
            
              <Book hideBook={this.hideBook}/>
          }

          {this.state.showAuthorCircle && 
            <React.Fragment>
              <div className='AuthorCircleAndLetter'>
                <img className='letterOpened' src='images_website/desk/letter_opened.png' />
                <div id="logos">
                  <a href="https://www.instagram.com/" target="_blank"><img src="images_website/infographic/instagram.png"/></a>
                  <a href="mailto:thomasisebeck@gmail.com" target="_blank"><img src="images_website/infographic/gmail.png" /></a>
                </div>
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
