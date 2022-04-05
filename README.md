# Worldwide Weather

Hello, and welcome to Worldwide Weather!

## Preview
https://i.imgur.com/bXsVUlG.mp4

## Introduction

For this project, our requirements were to use HTML, CSS, and JavaScript to create a front end, single page app that also utilizes an external API. Additionally, we needed to incorporate at least three different types of event listeners and allow for some level of interactivity.

I decided to build a weather app, because I find myself regularly having to search for the forecast since I go outside daily, if only to take my dog for a walk. I live in San Francisco, and while people say the weather here is the same year-round, I find that it's highly dependent on how fast the wind is blowing and from which direction it's blowing from. This makes knowing the forecast a requirement before leaving the apartment to venture into the world.

I also really like to travel and learn about new places. So in order to combine the two, I wanted to utilize a second API to pull a Wikipedia summary of the location the user searched and add it to the page in addition to the forecast. To further take advantage of this, I added a "random" button that pulls from a list of over 23,000 cities so that the user can learn about a new city, or potentially use the app to suggest a random destination for their next vacation if they're feeling adventurous.

## Blog Post

I also did a deep dive on the use of dark mode in this project in my first [blog post](https://dev.to/trevortx/first-project-worldwide-weather-4dno). Please check it out!

## Installation Instructions
1. Navigate to the project's [GitHub page](https://github.com/trevortx/worldwide-weather) and choose your favorite method of downloading the project. I'm most familiar with SSH, so I would click "Code", ensure "SSH" is chosen, and copy the link.
2. Then open your terminal and navigate to a directory in which you'd like to install the app. 
3. Type `git clone` followed by the link you copied from GitHub, and the app should be installed.
4. cd into the "js" folder and type the following command in your terminal to create a new file: `touch config.js`
4. Navigate to [weatherapi.com](https://www.weatherapi.com/) which is the weather API being utilized in this project.
5. Go through the sign up process to create an account.
6. Your API key will exist on your dashboard, which you can find [here](https://www.weatherapi.com/my/).
7. Copy your API key.
8. Navigate back to your terminal and open the config.js file.
9. The file should look just like below, make sure to leave the quotes around your API key:
`const config = {API_KEY: "YOUR API KEY HERE"}`
10. Once that's saved, in your terminal navigate back to the main directory by typing in `cd ..`
11. Type `open index.html` and the app will open in your browser.
12. Utilize and enjoy the app. :)

## Credits
City data in "cities.js" courtesy of the following:
- Data downloaded from [DataHub.io](https://datahub.io/core/world-cities). Per DataHub, all data is licensed under the Creative Common Attribution License as is the original data from [geonames](http://www.geonames.org/). Further credit goes to [Lexman](https://okfnlabs.org/members/lexman/) and the [Open Knowledge Foundation](https://okfn.org/). All source code is licensed under the MIT licence.

APIs used:
- [weatherapi.com](https://www.weatherapi.com/)
- [wikimedia.org] (https://www.mediawiki.org/wiki/Wikimedia_REST_API)
