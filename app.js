const DOMAIN = 'https://api.rawg.io/api/';
const API_KEY = '6759a297484a4e7dbebc9d3a8bb77ed4';
const BASE_URL = `${DOMAIN}games?key={API_KEY}&`;


// search url = `${DOMAIN}games?key={API_KEY}&search=${textInput}`;
// example = "https://api.rawg.io/api/games?key=6759a297484a4e7dbebc9d3a8bb77ed4&search=destiny"



// Add HTML and connect all files.
// Completed.



// API request for search results.
// Create event handler to log search bar text input.
async function searchVideoGames() {
  try {
    removeGameData()
    removeGallery()
    let textInput = document.querySelector("#input-text").value
    const url = `https://api.rawg.io/api/games?key=6759a297484a4e7dbebc9d3a8bb77ed4&search=${textInput}`
    
    if (textInput === "") {
      return null
    } else {
    const response = await axios.get(url)
      // console.log(response.data.results)
      const smallAmt = response.data.results.slice(0, 1)
      console.log(smallAmt)
      renderList(smallAmt)
      return response
    }
  }
  catch (error) {
    console.error(error)
  }
}

searchVideoGames()


// Render search data. Create dynamic HTML.
// Append search data.
// Render image data.
// Append image data.
const renderList = (games) => {
  games.forEach((game) => {
    const gameTitle = document.createElement('h3')
    gameTitle.innerText = `Title: ${game.name}`
    document.querySelector("#search-data").append(gameTitle)
    const gameYear = document.createElement('h3')
    gameYear.innerText = `Released: ${game.released}`
    document.querySelector("#search-data").append(gameYear)
    const gameRating = document.createElement('h3')
    gameRating.innerText = `ESRB Rating: ${game.esrb_rating.name}`
    document.querySelector("#search-data").append(gameRating)
    for (i = 0; i < game.genres.length; i++) {
      const gameGenre = document.createElement('h3')
      gameGenre.innerText = `Genres: ${game.genres[i].name}`
      document.querySelector("#search-data").append(gameGenre)
    }
    const gameImage = document.createElement('img')
    gameImage.src = game.background_image
    document.querySelector("#image-data").style.backgroundImage = `url(${game.background_image})`
    for (i = 0; i < game.short_screenshots.length; i++) {
      const gameScreenshots = document.createElement('img')
      gameScreenshots.src = `${game.short_screenshots[i].image}`
      document.querySelector(".gallery-container").append(gameScreenshots)}
  });
}

let audioVolume = document.getElementById("audioPlayer");
audioVolume.volume = 0.1;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Button event handler.

const getSearchInput = document.querySelector('#search-button')
getSearchInput.addEventListener('click', searchVideoGames)


// Remove current search.

function removeGameData() {
  const removeGameData = document.querySelector('#search-data')
  while (removeGameData.lastChild) {
    removeGameData.removeChild(removeGameData.lastChild)
  }
}

function removeGallery() {
  const removeGallery = document.querySelector('.gallery-container')
  while (removeGallery.lastChild) {
    removeGallery.removeChild(removeGallery.lastChild)
  }
}

