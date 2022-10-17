import React from 'react';
import './ParkScene.css';
import ChangingImage from '../ChangingImage/ChangingImage';

export class ParkScene extends React.Component {

  render() {
    return (
      <div className="ParkScene">

         <img src="images_website/background.svg" />


        <div id="cloudsWrapper"> 
          <img id="clouds" src="images_website/clouds.gif" />
        </div> 
        

        <div className='MCSitting'>
          <ChangingImage movingimage='images_website/MC_hover.gif' staticimage='images_website/MC_idle.gif' />
        </div>

        <div className='WomanSitting'>
          <ChangingImage movingimage='images_website/woman_hover.gif' staticimage='images_website/woman_idle.gif' />
        </div>

        

        {/* <img id="WomanSitting" src="images/woman_idle.gif" onMouseOver="changeImage(this, 'images/woman_idler.gif', 'images/woman_hover.gif')" onMouseOut="changeImage(this, 'images/woman_hover.gif', 'images/woman_idle.gif')"/> */}
        {/* <img id="seeTrailer" src="images/seeTrailer.png" class="hidden" /> */}
        {/* <img id="goToComic" src="images/goToComic.png" class="hidden" /> */}
        {/* <img id="dialogueImage" /> */}

      </div>
    );
  }

}
