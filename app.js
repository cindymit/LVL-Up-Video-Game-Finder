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
    gameTitle.innerText = game.name
    document.querySelector("#search-data").append(gameTitle)
    const gameImage = document.createElement('img')
    gameImage.src = game.background_image
    document.querySelector("#image-data").style.backgroundImage = `url(${game.background_image})`
  });
}

// Button event handler.

const getSearchInput = document.querySelector('#search-button')
getSearchInput.addEventListener('click', searchVideoGames)


// Remove current search.



// Responsive Design.



/* -----------POST-MVP----------- */

// Search by platform.


// games.filter(callback function(game) {
//   game.dev === 'nintendo'
// })