let disappointedChuck = document.createElement('img');
disappointedChuck.src = 'https://www.usatoday.com/gcdn/presto/2020/03/10/USAT/14860a5d-3ae8-4049-b4b5-5a02e14c4721-Chuck_Norris_01.JPG?crop=1933,1087,x1,y153&width=1933&height=1087&format=pjpg&auto=webp';
disappointedChuck.className = 'disappointedChuck';

let chuckNorrisQuestion = document.getElementById('chuckNorrisQuestion');

let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');

let angryChuckNorris = document.createElement('img');
angryChuckNorris.className = 'angryChuckNorris';
angryChuckNorris.src = 'https://media.tenor.com/NyZD_Iu9g4kAAAAC/chuck-norris-punch.gif';

let happyChuckNorris = document.createElement('img');
happyChuckNorris.className = 'happyChuckNorris';
happyChuckNorris.src = 'https://pbs.twimg.com/media/FVJCrfgUUAACJ2-?format=jpg&name=4096x4096';

let imageContainer = document.getElementById('imageContainer');

let doYouLikeJokesMessage = document.createElement('h3');
doYouLikeJokesMessage.innerText = 'Do you like jokes?';

let yesButton2 = document.createElement('button');
yesButton2.innerText = 'YES';

let noButton2 = document.createElement('button');
noButton2.innerText = 'NO';

let leaveMessage = document.createElement('h4');
leaveMessage.innerText = 'Leave this webpage.';

let leaveMessage2 = document.createElement('h4');
leaveMessage2.innerText = 'You should probably leave this webpage.';

let eventOneHandled = false;

function firstTwoButtons () {
    yesButton.addEventListener('click', function () {
      if (!eventOneHandled) {
        imageContainer.appendChild(happyChuckNorris);
        imageContainer.appendChild(doYouLikeJokesMessage);
        imageContainer.appendChild(yesButton2);
        imageContainer.appendChild(noButton2);
        eventOneHandled = true;
      }
    }); 
  noButton.addEventListener('click', function () {
    if (!eventOneHandled) {
    imageContainer.appendChild(angryChuckNorris);
    imageContainer.appendChild(leaveMessage);
    eventOneHandled = true;
    }
  }); 

}

firstTwoButtons();

let eventTwoHandled = false;
function secondTwoButtons() {
  yesButton2.addEventListener('click', function () {
    if (!eventTwoHandled) {
      imageContainer.appendChild(jokeButton);
      eventTwoHandled = true;
    }
  });
  noButton2.addEventListener('click', function () {
    if (!eventTwoHandled) {
      imageContainer.appendChild(disappointedChuck)
      imageContainer.appendChild(leaveMessage2);
      let totalDogsShown = 1;
let totalDogsShownIcon = document.createElement('div');
let dogButton = document.createElement('button');
dogButton.id = 'dogButton';
dogButton.innerText = 'Click me to see a dog instead of hear a joke!';
dogStuff.appendChild(dogButton);
let firstDogSeen = true;
let newDogImage = document.createElement('img');
newDogImage.id = 'dogImage';
function dogImageIncrease() {
  dogButton.addEventListener('click', function () {
    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
      if (firstDogSeen) {
      totalDogsShownIcon.innerText = totalDogsShown + ' dog seen so far';
      dogStuff.appendChild(totalDogsShownIcon);
      newDogImage.src = data.message;
      dogStuff.appendChild(newDogImage);
      totalDogsShown += 1;
      dogDisplayed = true;
      firstDogSeen = false;
      } else {
        totalDogsShownIcon.innerText = totalDogsShown + ' dogs seen so far';
        dogStuff.appendChild(totalDogsShownIcon);
        newDogImage.src = data.message;
        dogStuff.appendChild(newDogImage);
        totalDogsShown += 1;
        dogDisplayed = true;
      }
    });
  });
}

dogImageIncrease();
      eventTwoHandled = true;
    }
  });
}

secondTwoButtons()
let totalJokesTold = 1;
let jokeDisplayed = document.getElementById('jokeDisplayed');
let numberOfJokesIcon = document.createElement('div');
numberOfJokesIcon.id = 'numberJokes';
let jokeButton = document.createElement('button');
jokeButton.id = 'jokeButton';
jokeButton.innerText = 'Click me to hear a Joke!';

let firstJokeSeen = true;
function jokesIconIncrease() {
jokeButton.addEventListener('click', function () {
  // Make an asynchronous request to get a Chuck Norris joke
  $.get('https://api.chucknorris.io/jokes/random', function (data) {
    if (firstJokeSeen) {
    // Update the text content of the 'jokeDisplayed' element with the received joke
    numberOfJokesIcon.innerText = totalJokesTold + ' joke revealed so far';
    chuckNorrisQuestion.appendChild(numberOfJokesIcon);
    jokeDisplayed.innerText = data.value;
    totalJokesTold += 1;
    firstJokeSeen = false;
    } else {
      numberOfJokesIcon.innerText = totalJokesTold + ' jokes revealed so far';
      chuckNorrisQuestion.appendChild(numberOfJokesIcon);
      jokeDisplayed.innerText = data.value;
      totalJokesTold += 1;
    }
  });
});
}
jokesIconIncrease();

