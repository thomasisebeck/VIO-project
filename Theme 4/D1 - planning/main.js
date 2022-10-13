const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');


let currentLocation = 1;
let numPapers = 3; //total pages
let maxLocation  = numPapers + 1; //max current location

//Event listeners
prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);

function openBook() {

}

function closeBook() {

}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add('flipped');
                book.classList.add('shiftRight');
                setTimeout(() => {
                    document.querySelector('#f1').classList.add('hidden');
                    document.querySelector('#p1 .back').classList.add('rotated');
                }, 500);
                break;
            case 2: 
                paper2.classList.add('flipped');
                break;
        }
    }
}

function goPrevPage() {

}

///////Dialogue

let audio;
let imageNumber = 0; 

(function () {
    let speechImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

    setInterval(() => {

        if (imageNumber == 6) {
            imageNumber = 0;
            display = false;
            document.getElementById('dialogueImage').setAttribute('src', '');
            setTimeout(() => {
                display = true;
            }, 150000)
        }
        else {
            document.getElementById('dialogueImage').setAttribute('src', 'dialogue/' + speechImages[imageNumber])
            imageNumber++;
        }

    }, 5500);

})();

function changeImage(image, png, gif, sound, play, delay) {



    console.log(image);
    image.src = gif;

    if (png == 'images_website/MC_idle.gif'){
        //display popup
        document.getElementById('seeTrailer').classList.remove('hidden');
        document.getElementById('dialogueImage').classList.add('hidden');
    }

    if (png == 'images_website/MC_hover.gif') {
        document.getElementById('seeTrailer').classList.add('hidden');
        document.getElementById('dialogueImage').classList.remove('hidden');
    }

    if (png == 'images_website/woman_idler.gif'){
        document.getElementById('goToComic').classList.remove('hidden');
        document.getElementById('dialogueImage').classList.add('hidden');
    }

    if (png == 'images_website/woman_hover.gif'){
        document.getElementById('goToComic').classList.add('hidden');
        document.getElementById('dialogueImage').classList.remove('hidden');
    }

    if (audio)
    audio.pause();
    else
    console.log(audio);

    if (play) {
    audio = new Audio('sounds/' + sound);
    audio.play();
    }

    if (sound == 'p1.mp3') {
    let audio2 = new Audio('sounds/ElectricityHum.mp3');
    audio2.play();
    }

    if (sound == 'p4.mp3') {
    let audio2 = new Audio('sounds/wineGlass.mp3');
    audio2.play();
    }

}