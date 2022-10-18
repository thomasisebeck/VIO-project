import React from 'react';
import './ParkScene.css';
import ChangingImage from '../ChangingImage/ChangingImage';

export class ParkScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      source: 'images_website/dialogue/1.png', 
      currentImage: 1, 
      dialogueShown: false, 
      MAX_IMAGES: 7, 
      seeTrailer: false, 
      goToComic: false
    }

    setInterval(() => {
        this.loopDialogue();
    }, 2000);



  }

  loopDialogue() {    
    if (this.state.currentImage === this.state.MAX_IMAGES) {

      if (this.state.dialogueShown)
        this.setState({ dialogueShown: false })
      else 
        this.setState({ dialogueShown: true })

        this.setState({ currentImage: 1 })
    }
    else 
      this.setState({currentImage: this.state.currentImage + 1 })

      this.setState({ source: 'images_website/dialogue/' + this.state.currentImage + '.png' })
    
  }

  displayTrailerDialogue() {
    this.setState({
      seeTrailer: true,
      dialogueShown: false
    })
  }

  undisplayTrailerDialogue() {
    this.setState({
      seeTrailer: false,
      dialogueShown: true
    })
  }

  displayComicDialogue() {
    this.setState({
      goToComic: true, 
      dialogueShown: false
    })
  }

  undisplayComicDialogue() {
    this.setState({
      goToComic: false,
      dialogueShown: true
    })
  }


  render() {

    return (
      <div className="ParkScene">

        <div className="Content">

          <img src="images_website/background.svg" alt=""/>

          <div id="cloudsWrapper"> 
            <img id="clouds" src="images_website/clouds.gif" alt=""/>
          </div> 
          
          <div className='MCSitting' onMouseOver={() => this.displayTrailerDialogue()} onMouseLeave={() => this.undisplayTrailerDialogue()}>
            <ChangingImage movingimage='images_website/MC_hover.gif' staticimage='images_website/MC_idle.gif' />
          </div>

          <div className='WomanSitting' onMouseOver={() => this.displayComicDialogue()} onMouseLeave={() => this.undisplayComicDialogue()}>
            <ChangingImage movingimage='images_website/woman_hover.gif' staticimage='images_website/woman_idle.gif' />
          </div>

          {this.state.dialogueShown && this.state.source !== 'images_website/dialogue/' + this.state.MAX_IMAGES + '.png' &&
            <img id="dialogueImage" src={this.state.source} alt=""/>
          }

          {this.state.seeTrailer &&
            <img id="seeTrailer" src="images_website/seeTrailer.png" alt=""/>
          }

          {this.state.goToComic &&
            <img id="goToComic" src="images_website/goToComic.png" alt=""/>
          }
        </div>

        <div className="Title">
          You <br/>
          read <br/>
          my <br/>
          mind!
        </div>

      </div>

    );
  }

}

export default ParkScene;
