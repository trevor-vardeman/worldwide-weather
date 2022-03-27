const key = config.API_KEY

// document.addEventListener("DOMContentLoaded", getIP)

// // get user's IP
// function getIP() {
//   fetch("https://api.ipify.org/?format=json")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// get submit form & add event listener
const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", e => executeSearch(e))

// saves search value as variable and passes it as argument to getCurrentWeather
function executeSearch(e) {
  e.preventDefault()
  const searchTerm = document.getElementById("search").value
  searchForm.reset()
  getCurrentWeather(searchTerm)
}

// fetches current weather at location of user's search
function getCurrentWeather(searchTerm) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchTerm}&days=3&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(response => checkForValidCity(response))
    .catch(err => alert(err))
}

// checks for valid city or invalid search term
function checkForValidCity(city) {
  if (city.location != null) {
    createCards(city)
  } else alert(`${city.error.message} Please search again.`)
}

function createCards(weather) {
  // set current weather variables
  const currentCondition = weather.current.condition.text
  const currentTempF = weather.current.temp_f
  const currentTempC = weather.current.temp_c
  const feelsLikeF = weather.current.feelslike_f
  const feelsLikeC = weather.current.feelslike_c
  const windMPH = weather.current.wind_mph
  const windKPH = weather.current.wind_kph
  const windDirection = weather.current.wind_dir

  // set future forecast variables

  // create HTML elements & add attributes
  const cardColumn = document.createElement("div")
  cardColumn.setAttribute("class", "card mb-3")
  cardColumn.setAttribute("style", "max-width: 540px;")

  const cardRow = document.createElement("div")
  cardRow.setAttribute("class", "row g-0")

  const imgColumn = document.createElement("div")
  imgColumn.setAttribute("class", "col-md-4")

  const newImg = document.createElement("img")
  newImg.setAttribute("src", "https://via.placeholder.com/150")
  newImg.setAttribute("class", "img-fluid rounded-start")
  newImg.setAttribute("alt", "text here")

  const textColumn = document.createElement("div")
  textColumn.setAttribute("class", "col-md-8")

  const cardHeader = document.createElement("div")
  cardHeader.setAttribute("class", "card-header")
  cardHeader.innerText = "Today"

  const cardBody = document.createElement("div")
  cardBody.setAttribute("class", "card-body")

  const cardTitle = document.createElement("h5")
  cardTitle.setAttribute("class", "card-title")
  cardTitle.innerText = `${currentCondition}`

  const cardText = document.createElement("p")
  cardText.setAttribute("class", "card-text")

  const listGroup = document.createElement("ul")
  listGroup.setAttribute("class", "list-group")

  const listItem = document.createElement("li")
  listItem.setAttribute("class", "list-group-item")

  cardColumn.setAttribute("class", "card mb-3")
  cardColumn.setAttribute("style", "max-width: 540px;")
  cardRow.setAttribute("class", "row g-0")

  const cardGroup = document.querySelector(".card-group")
  cardGroup.append(cardColumn)
  cardColumn.append(cardRow)
  cardRow.append(imgColumn)
  imgColumn.append(newImg)
  cardRow.append(textColumn)
  textColumn.append(cardHeader)
  textColumn.append(cardBody)
  cardBody.append(cardTitle)
  cardBody.append(cardText)
  cardText.append(listGroup)
  listGroup.append(listItem)
  
  console.log(weather)
}

// function futureForecast(weather) {
//   const highTempF = weather.forecast.
// }