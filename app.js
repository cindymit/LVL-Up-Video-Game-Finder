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
      console.log(response.data.results[0])
      // return response
    }
  }
  catch (error) {
    console.error(error)
  }
}

searchVideoGames()


// Render search data. Create dynamic HTML.

// function renderData() {

// }



// Append search data.



// Render image data.



// Append image data.



// Button event handler.

const getSearchInput = document.querySelector('#search-button')
getSearchInput.addEventListener('click', searchVideoGames)


// Remove current search.



// Responsive Design.



/* -----------POST-MVP----------- */

// Search by platform.

