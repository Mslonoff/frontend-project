var jokeButton = document.getElementById('jokeButton');
var jokeDisplayed = document.getElementById('jokeDisplayed');

jokeButton.addEventListener('click', function () {
  // Make an asynchronous request to get a Chuck Norris joke
  $.get('https://api.chucknorris.io/jokes/random', function (data) {
    // Update the text content of the 'jokeDisplayed' element with the received joke
    jokeDisplayed.innerText = data.value;
  });
});