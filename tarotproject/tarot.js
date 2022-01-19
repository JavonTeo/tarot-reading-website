var indiCardContainer = document.getElementsByClassName("indi-card-container");
let allCardsOpened = [false, false, false];

for (let i = 0; i < 3; i++) {
    let cardContainer = indiCardContainer[i];
    cardContainer.addEventListener("click", function () {
        if (cardContainer.className == "open") {
            //flip to back
            cardContainer.className = "";
            allCardsOpened[i] = false;
        }
        else{
            //reveal card
            cardContainer.className = "open";
            allCardsOpened[i] = true;
        }
    })
}

var receiveReading = document.getElementById("receive-reading");
while (allCardsOpened.every((currentValue)=> {currentValue==true})) {
    receiveReading.className == "shown";
}

// const tarotCardsJson = require('./tarot/tarot-images.json');
let x = Object.keys(tarotCardsJson).length;
let index = Math.round(x*Math.random());
let imgfile = tarotCardsJson[index].img;
var past = document.getElementById('past');
past.style.setProperty('background-image', `url(${imgfile})`);