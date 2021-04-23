# Project Overview

## Project Name

LVL Up! - Video Game Finder


## Project Description

This database will help users look up video games by input with data extracted from RAWG's video games database API. The results will show an image of the game and data including title, date of release, esgb rating, and genre(s). A gallery of screenshots will also render on the webpage.

[Deployed site](https://cindymit.github.io/LVL-Up-Video-Game-Finder-P1/)

## API and Data Sample

I will be using RAWG's Video Games Database API (https://rawg.io/apidocs)

```
{
    "count": 1915,
    "next": "https://api.rawg.io/api/games?key=6759a297484a4e7dbebc9d3a8bb77ed4&page=2&search=persona+5",
    "previous": null,
    "results": [
        {
            "slug": "persona-5",
            "name": "Persona 5",
            "playtime": 105,
            "platforms": [
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
```

## Wireframes

[Wireframe](https://whimsical.com/video-game-finder-database-ET84Qu2CCEPTbyLiYPB7xX)

### MVP/PostMVP

#### MVP 

- Add axios api call to find and use data from RAWG's Video Games Database. 
- Allow user to search for a video game by input. (e.g. title name: Destiny). 
- Render image, title, date of release, esrb_rating, and genre(s).
- Add font in CSS.
- Use flexbox styling to align dividers below opening paragraph and adjacent to each other.
- Remove previous search results for new search.


#### PostMVP  

- Allow user to scroll back to the top of webpage.
- Allow users to search by platforms. (e.g. platform name: Playstation 5)
- Style the search bar with controller image.
- Add music track and audio control to website.
- Render screenshot data into gallery.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 20| Core Application Structure (HTML, CSS, etc.) | Complete
|April 20| Pseudocode / actual code | Complete
|April 21| Initial Clickable Model  | Complete
|April 22| MVP | Complete
|April 23| Presentations | Incomplete

## Priority Matrix

['Time and Importance' Matrix](https://lucid.app/lucidchart/invitations/accept/inv_4cbd9ebf-8469-4e77-aa09-edb1ce701e57)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API Research/Project Approval | H | 3hrs| 3hrs | 3hrs |
| Pseudocode | H | 1hr | 1hr | 1hr |
| Basic HTML/CSS/JS Form and Linking | H | 2hrs| 1.5hrs | 1.5hrs |
| API request based on user input | H | 3hrs| 2hrs | 2hrs |
| Style search results | H | 3hrs| 2hrs | 2hrs |
| Style image container | H | 2hrs| 3hrs | 3hrs |
| Add banner | H | 1hr | 0.5 hr | 0.5hr |
| Add title and opening paragraph | H | 1hr | 1hr | 1hr |
| Add font in CSS | H | 1hr | 0.5hr | 0.5hr |
| Align text and divider elements using Flexbox | H | 3hrs| 3hrs | 3hrs |
| Style divider boxes in CSS | H | 2hrs| 3hrs | 3hrs |
| Write function to clear previous search query | H | 2hrs| 2hrs | 2hrs |
| Responsive Design for mobile | H | 3hrs| 3hrs | 3hrs |
| PMVP: Add/style screenshot data to gallery container | H | 3hrs| 4hrs | 4hrs |
| PMVP: Add audio controls | H | 2hrs| 2hrs | 2hrs |
| PMVP: Add window scroll to top | H | 1hr | 1hr | 1hr |
| Total | H | 32hrs | 32.5hrs | 32.5hrs |

## Code Snippet

This code refers to my gallery which is an added PMVP. I was having trouble extracting the screenshots out of the data because there was quite a few. It took me a while to figure out on my own but I was able to solve the problem by using a for loop and looping through the array of screenshots. From there, I created an 'img" element and set that equal to the data and then appended it to the divider that needed to house the image. I love how the gallery looks and it was definitely the thing I needed to bring my project up a notch!

```
for (i = 0; i < game.short_screenshots.length; i++) {
      const gameScreenshots = document.createElement('img')
      gameScreenshots.src = `${game.short_screenshots[i].image}`
      document.querySelector(".gallery-container").append(gameScreenshots)}
  });
```

## Change Log
 I could not extract game data by platform so I opted to render the screenshot data into a gallery. I also added a scroll function to force start the window at the top when refreshing the page.
