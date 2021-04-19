# Project Overview

## Project Name

Video Game Finder Database

## Project Description

This database will help users look up video games by title by using and extracting data from RAWG's video games database API.

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

- Basic HTML/CSS/JS form and linking.
- Add axios api call to find and use data from RAWG's Video Games Database.
- Render and log search data onto webpage. 
- Create and code a search bar that logs search text input.
- Allow user to search for a video game by keyword (e.g. title name: Destiny). 
- Create 'search results' divider.
- Create 'image' divider.
- Direct search results to the 'search results' divider.
- Direct stored image data to show up in the 'image' divider.
- Add banner to the top of webpage.
- Add title below banner.
- Add opening introductory/directions paragraph.
- Add font in CSS.
- Use flexbox styling to align dividers below opening paragraph and adjacent to each other.
- Style divider boxes in CSS.
- Write function to clear previous search results upon initialization of new query.
- Add media query for responsive design in mobile phones.

#### PostMVP  

- Create and code second search bar to allow users to search by platforms. (e.g. platform name: Playstation 5)
- Style the search bar with controller image.
- Add music track and audio control to website.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|April 19| Project Approval | Incomplete
|April 20| Core Application Structure (HTML, CSS, etc.) | Incomplete
|April 20| Pseudocode / actual code | Incomplete
|April 21| Initial Clickable Model  | Incomplete
|April 22| MVP | Incomplete
|April 23| Presentations | Incomplete

## Priority Matrix

['Time and Importance' Matrix](https://lucid.app/lucidchart/invitations/accept/inv_4cbd9ebf-8469-4e77-aa09-edb1ce701e57)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API Research/Project Approval | H | 1hrs| - | - |
| Pseudocode | H | 1hrs| - | - |
| Basic HTML/CSS/JS Form and Linking | H | 1hrs| - | - |
| Coding Search API Call | H | 2hrs| - | - |
| Create style 'search results' divider | H | 1.5hrs| - | - |
| Create and style 'image' divider | H | 1.5hrs| - | - |
| Add banner | H | 1hrs| - | - |
| Add title and opening paragraph | H | 1hrs| - | - |
| Add font in CSS | H | 1hrs| - | - |
| Align text and divider elements using Flexbox | H | 3hrs| - | - |
| Style divider boxes in CSS | H | 2hrs| - | - |
| Write function to clear previous search query | H | 1.5hrs| - | - |
| Responsive Design for mobile | H | 2hrs| - | - |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
