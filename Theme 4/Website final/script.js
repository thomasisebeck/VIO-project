'use strict';


//////// eyes /////////

  let audio = new Audio();

let eyes = document.querySelectorAll('#eyes img')[0];
let normal = true;

eyes.addEventListener('click', function() {
  if (audio != undefined)
    audio.pause();

  if (normal) {
      eyes.setAttribute('src', 'images/eye_strange.svg');
      normal = false;
      audio = new Audio('audio/snake.mp3')
      audio.play();
  }
  else {
    normal = true;
    eyes.setAttribute('src', 'images/eye_normal.svg');
    audio = new Audio('audio/water.mp3')
    audio.play();

  }
});

let eyes2 = document.querySelectorAll('#eyes img')[1];
let dog = false;

eyes2.addEventListener('click', function() {
  if (audio != undefined)
    audio.pause();

  if (dog) {
      eyes2.setAttribute('src', 'images/dog.svg');
      dog = false;
      audio = new Audio('audio/dog.mp3')
      audio.play();
  }
  else {
    dog = true;
    eyes2.setAttribute('src', 'images/wolf.svg');
    audio = new Audio('audio/wolf.mp3')
    audio.play();
  }
});

///////////////////////

function changeCharaterLooking(number) {

  let image = document.querySelector('#mainCharacter #image img');

  switch (number) {
    case 0:
      image.src = 'images/MCProfile.png';
      break;
    case 1:
      if (audio != undefined)
        audio.pause();
      image.src = 'images/MCProvileTopLeft.png';
      audio = new Audio('audio/thunder.mp3')
      audio.play();
      break;
    case 2:
      if (audio != undefined)
        audio.pause();
      image.src = 'images/MCProvileTopRight.png'
      audio = new Audio('audio/idea.mp3')
      audio.play();
      break;
    case 3:
      if (audio != undefined)
        audio.pause();
      audio = new Audio('audio/twinkle.mp3')
      audio.play();
      image.src = 'images/MCProvileBottomLeft.png'
      break;
    case 4:
      if (audio != undefined)
        audio.pause();
      image.src = 'images/MCProvileBottomRight.png'
      audio = new Audio('audio/gong.mp3')
      audio.play();
      break;

  }



  //0 = normal
  //1 = butterflies
  //2 = light
  //3 = swirl
  //4 = ying
}

///// icons //////

let characterImg = document.querySelector("#characterImage img");
let characterTitle = document.querySelector("#characters h2");
let characterDescr = document.querySelector("#characDescr");

function changeIconImage(number) {
  console.log('changing for ' + number);
  console.log(characterImg);
  console.log(characterTitle);

  if (audio != undefined)
    audio.pause();

  switch (number) {
    case 1:
      characterImg.setAttribute('src', 'images/MCProfile.png');
      characterTitle.innerHTML = "The heroine";
      characterDescr.innerHTML = "<li>A menacing succlent with nefarious motives</li><li>Plant stalker!</li><li>Follows Stacey around and prowls in the shadows</li>";
      //characterDescr.innerHTML = "Stacey is probably the most awkward character you will come across. She wants to be loved, and in perusing this desire, she manages to drive people away with her social awkwardness, though she persists in hope of getting someone to see past initial quirks.";
      break;
    case 2:
      characterImg.setAttribute('src', 'images/cactusProfile.png');
      characterTitle.innerHTML = "The antagonist";
      characterDescr.innerHTML = "<li>A menacing succlent with nefarious motives</li><li>Plant stalker!</li><li>Follows Stacey around and prowls in the shadows</li>";

      audio = new Audio('audio/cactus.mp3');
      audio.play();

      break;
    case 3:
      characterImg.setAttribute('src', 'images/boyProfile.png');
      characterTitle.innerHTML = "The young boy";
      characterDescr.innerHTML = "<li>A young lad with much to learn about the realities of life</li><li>Tends to meddle in other poeple's business</li><li>Appears to be light fingered at first</li><li>Makes up for his shorcomings wiht good manners and an upbea attitude</li>";

      audio = new Audio('audio/boy.mp3');
      audio.play();

      //characterDescr.innerHTML = "This young lad has much to learn about the realities of life. He has the tendency to meddle in other people’s business and appears to be light-fingered at first. Nonetheless he makes up for his shortcomings with good manners and an upbeat attitude.";
      break;
    case 4:
      characterImg.setAttribute('src', 'images/girlProfile.png');
      characterTitle.innerHTML = "The damsel";
      characterDescr.innerHTML = "<li>This lass manages to pique the interest of the protagonist</li><li>Tends to make subtle hints at wanting to make a connection.</li>";

      audio = new Audio('audio/girl.mp3');
      audio.play();
      break;
  }

}

let infoImage = document.querySelector("#information img");

let backstoryPara = document.querySelector("#backstory-para");

function changeInfoImage(number) {
  console.log('changing for ' + number);
  console.log(infoImage);

  switch (number) {
    case 1:
      infoImage.setAttribute('src', 'images/name.svg');
      break;
    case 2:
      infoImage.setAttribute('src', 'images/MCDesk.png');
      break;
    case 3:
      infoImage.setAttribute('src', 'images/love.svg');
      break;
    case 4:
      infoImage.setAttribute('src', 'images/books.svg');
      break;
    case 5:
      infoImage.setAttribute('src', 'images/lonliness.svg');
      break;
    case 6:
      infoImage.setAttribute('src', 'images/spellingB.svg');
      break;
  }

}

function changeImage(image, src) {
  image.src = src;
}


function changeImageAndBackPara(image, src, para) {
  backstoryPara.innerHTML = para;
  image.src = src;

  if (audio != undefined)
    audio.pause();

  if (src == 'images/clock.gif') {
    audio = new Audio('audio/alarm.mp3')
    audio.play();
  }
  if (src == 'images/bang.gif') {
    audio = new Audio('audio/fizzle.mp3')
    audio.play();
  }
  if (src == 'images/eye.gif') {
    audio = new Audio('audio/eye.mp3')
    audio.play();
  }
  if (src == 'images/cigarette.gif') {
    audio = new Audio('audio/fire.mp3')
    audio.play();
  }
  if (src == 'images/dress.gif') {
    audio = new Audio('audio/harp.mp3')
    audio.play();
  }

}

function changeImageAndRemoveBackPara(image, src) {
  backstoryPara.innerHTML = '';
  image.src = src;
}

function glowAndToolTip(image, src, index) {
  image.src= src;

  let para = document.querySelectorAll('#setting p')[index];

  switch(index) {
    case 1:
      console.log('find 1');
      para.style.top = '260px';
      para.style.left = '500px';
      console.log(para.style);
      para.classList.add("visible");
      break;
    case 2:
      console.log('find 2');
      para.style.top = '550px';
      para.style.left = '50px';
      console.log(para.style);
      para.classList.add("visible");
      break;
    case 3:
      console.log('find 3');
      para.style.top = '250px';
      para.style.left = '150px';
      console.log(para.style);
      para.classList.add("visible");
      break;
    case 4:
      console.log('find 4');
      para.style.top = '330px';
      para.style.left = '200px';
      console.log(para.style);
      para.classList.add("visible");
      break;
  }

}

function changeAuthorPara(para) {
  let p = document.querySelector('#authorArticle p');
  let authorImage = document.querySelectorAll('#author div img');
  p.innerHTML = para;
  console.log(authorImage);

  if (audio != undefined)
    audio.pause();

  if (para == "Photography") {
    audio = new Audio('audio/camera.mp3')
    audio.play();
  }

  if (para == "Writing") {
    audio = new Audio('audio/pen.mp3');
    audio.play();
  }

  if (para == "Nature") {
    audio = new Audio('audio/nature.mp3');
    audio.play();
  }

  if (para == "Climbing") {
    audio = new Audio('audio/carabena.mp3');
    audio.play();
  }
}


function removeGlowAndToolTip(image, src, index) {
  image.src= src;



  console.log(document.querySelectorAll('#setting p')[0]);

  let para = document.querySelectorAll('#setting p')[index];

  para.classList.remove("visible");

}

window.addEventListener('scroll', function(e) {

  const target = document.querySelectorAll('.dropIn');

//  console.log(target.style);

  let scrolled = window.pageYOffset - 790;
  let rate1 = scrolled * 0.5 * 1.5;
  let rate2 = scrolled * 0.75 * 1.5;
  let rate3 = scrolled *  1.5;

  target[0].style.opacity = 1 - (scrolled * -0.01 * 100/132) + 0.05;
  if (scrolled < 1)
    target[0].style.transform = 'translate3d(0px,' + rate1 + 'px, 0px)';

  target[1].style.opacity = 1 - (scrolled * -0.01 * 100/132) + 0.05;
  if (scrolled < 1)
    target[1].style.transform = 'translate3d(0px,' + rate2 + 'px, 0px)';

    target[2].style.opacity = 1 - (scrolled * -0.01 * 100/132) + 0.05;
    if (scrolled < 1)
      target[2].style.transform = 'translate3d(0px,' + rate3 + 'px, 0px)';

  const blocks = document.querySelectorAll('#stats img');

  scrolled -= 390;

  let block1Rate = 1800 - scrolled;
  let block2Rate = 1900 - scrolled;
  let block3Rate = scrolled - 1700;
  let block4Rate = 2000 - scrolled;
  let block5Rate = scrolled - 1900;
  console.log(block1Rate);


  if (block1Rate > 0)
    blocks[0].style.transform = 'translate3d(' + block1Rate + 'px, 0px, 0px)';

  if ((block2Rate * 1.5) > 0)
    blocks[1].style.transform = 'translate3d(' + (block2Rate * 1.5) + 'px, 0px, 0px)';

  if ((block3Rate * 1.5) < 0)
    blocks[2].style.transform = 'translate3d(' + (block3Rate * 0.5) + 'px, 0px, 0px)';

  if ((block4Rate * 1.5) > 0)
    blocks[3].style.transform = 'translate3d(' + (block4Rate * 1.2) + 'px, 0px, 0px)';

  if ((block5Rate * 1.5) < 0)
    blocks[4].style.transform = 'translate3d(' + (block5Rate * 0.7) + 'px, 0px, 0px)';


  console.log(blocks[0]);

//  console.log(scrolled);

});
