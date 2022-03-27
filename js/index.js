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
  const currentConditionImg = weather.current.condition.icon
  const currentTempF = weather.current.temp_f
  const currentTempC = weather.current.temp_c
  const windChillF = weather.current.feelslike_f
  const windChillC = weather.current.feelslike_c
  const windMPH = weather.current.wind_mph
  const windKPH = weather.current.wind_kph
  const windDir = weather.current.wind_dir

  // set future forecast variables

  // create card HTML elements
  const newDiv = document.createElement("div")
  const newCard = document.createElement("div")
  const cardHeader = document.createElement("div")
  const cardBody = document.createElement("div")
  const img = document.createElement("img")
  const cardTitle = document.createElement("h5")
  const listGroup = document.createElement("ul")
  const tempFList = document.createElement("li")
  const tempCList = document.createElement("li")
  const windChillFList = document.createElement("li")
  const windChillCList = document.createElement("li")
  const windMPHList = document.createElement("li")
  const windKPHList = document.createElement("li")
  const windDirList = document.createElement("li")

  // set card bootstrap attributes
  newCard.setAttribute("class", "card")
  img.setAttribute("class", "card-img-top")
  cardHeader.setAttribute("class", "card-header")
  cardBody.setAttribute("class", "card-body")
  cardTitle.setAttribute("class", "card-title")
  listGroup.setAttribute("class", "list-group")
  tempFList.setAttribute("class", "list-group-item")
  tempCList.setAttribute("class", "list-group-item")
  windChillFList.setAttribute("class", "list-group-item")
  windChillCList.setAttribute("class", "list-group-item")
  windMPHList.setAttribute("class", "list-group-item")
  windKPHList.setAttribute("class", "list-group-item")
  windDirList.setAttribute("class", "list-group-item")

  // use card variables
  cardHeader.innerText = "Right Now"
  img.setAttribute("src", `https:${currentConditionImg}`)
  img.setAttribute("alt", `Image Depicting ${currentCondition}`)
  cardTitle.innerText = `${currentCondition}`
  tempFList.innerText = `Temperature (f): ${currentTempF}`
  tempCList.innerText = `Temperature (c): ${currentTempC}`
  windChillFList.innerText = `Wind chill (f): ${windChillF}`
  windChillCList.innerText = `Wind chill (c): ${windChillC}`
  windMPHList.innerText = `Wind (mph): ${windMPH}`
  windKPHList.innerText = `Wind (kph): ${windKPH}`
  windDirList.innerText = `Wind direction: ${windDir}`

  // append elements to card
  const cardGroup = document.querySelector(".card-group")
  cardGroup.append(newCard)
  newCard.append(cardHeader)
  newCard.append(img)
  newCard.append(cardBody)
  cardBody.append(cardTitle)
  cardBody.append(listGroup)
  listGroup.append(tempFList)
  listGroup.append(windChillFList)
  listGroup.append(windMPHList)
  listGroup.append(windDirList)

  console.log(weather)
}

// function futureForecast(weather) {
//   const highTempF = weather.forecast.
// }