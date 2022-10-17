import React from 'react';
import './ParkScene.css';
import ChangingImage from '../ChangingImage/ChangingImage';

export class ParkScene extends React.Component {

  render() {
    return (
      <div className="ParkScene">

        {/* <img src="images/background.svg" /> */}

        {/* <div id="cloudsWrapper"> */}
          {/* <img id="clouds" src="images/clouds.gif" /> */}
        {/* </div> */}

        <ChangingImage id="MCStting"  movingimage='images_website/MC_hover.gif' staticimage='images_website/MC_idle.gif' />

        {/* <img id="MCStting" movingimage='./images/MC_idle.gif' staticimage='./images/MC_hover.gif'/> */}
        {/* <img id="WomanSitting" src="images/woman_idle.gif" onMouseOver="changeImage(this, 'images/woman_idler.gif', 'images/woman_hover.gif')" onMouseOut="changeImage(this, 'images/woman_hover.gif', 'images/woman_idle.gif')"/> */}
        {/* <img id="seeTrailer" src="images/seeTrailer.png" class="hidden" /> */}
        {/* <img id="goToComic" src="images/goToComic.png" class="hidden" /> */}
        {/* <img id="dialogueImage" /> */}

      </div>
    );
  }

}
