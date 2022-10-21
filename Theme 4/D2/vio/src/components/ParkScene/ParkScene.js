import React from 'react';
import './ParkScene.css';
import ChangingImage from '../ChangingImage/ChangingImage';

export class  ParkScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      source: 'images_website/splash/dialogue/1.png', 
      currentImage: 1, 
      dialogueShown: true, 
      MAX_IMAGES: 7, 
      seeTrailer: false, 
      goToComic: false
    }

    setInterval(() => {
        this.loopDialogue();
    }, 500);



  }

  loopDialogue() {    

    if (this.state.currentImage === this.state.MAX_IMAGES) {

      if (this.state.dialogueShown)
        this.setState({ dialogueShown: false })
      else if (!(this.state.goToComic || this.state.seeTrailer))
        this.setState({ dialogueShown: true })

        this.setState({ currentImage: 1 })
    }
    else 
      this.setState({currentImage: this.state.currentImage + 1 })

      this.setState({ source: 'images_website/splash/dialogue/' + this.state.currentImage + '.png' })
    
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

          <img src="images_website/splash/background.svg" alt=""/>

          <div id="cloudsWrapper"> 
            <img id="clouds" src="images_website/splash/clouds.gif" alt=""/>
          </div> 
          
          <div className='MCSitting' onMouseOver={() => this.displayTrailerDialogue()} onMouseLeave={() => this.undisplayTrailerDialogue()}>
            <ChangingImage movingimage='images_website/splash/MC_hover.gif' staticimage='images_website/splash/MC_idle.gif' />
          </div>

          <div className='WomanSitting' onMouseOver={() => this.displayComicDialogue()} onMouseLeave={() => this.undisplayComicDialogue()}>
            <ChangingImage movingimage='images_website/splash/woman_hover.gif' staticimage='images_website/splash/woman_idle.gif' />
          </div>

          {this.state.dialogueShown && this.state.source !== 'images_website/splash/dialogue/' + this.state.MAX_IMAGES + '.png' &&
            <img id="dialogueImage" src={this.state.source} alt=""/>
          }

          {this.state.seeTrailer &&
            <img id="seeTrailer" src="images_website/splash/seeTrailer.png" alt=""/>
          }

          {this.state.goToComic &&
            <img id="goToComic" src="images_website/splash/goToComic.png" alt=""/>
          }
        </div>

        <div className="Title">
          <img src='images_website/splash/bottomTitleCard.png'/>
          <img src='images_website/splash/topTitleCard.png'/>
        </div>

      </div>

    );
  }

}

export default ParkScene;
