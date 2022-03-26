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
  fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchTerm}&aqi=no`)
    .then(response => response.json())
    .then(response => checkForValidCity(response))
    .catch(err => alert(err))
}

// checks for valid city or invalid search term
function checkForValidCity(city) {
  if (city.current != null) {
    cardCreator(city)
  } else alert(`${city.error.message} Please search again.`)
}

function currentWeather(weather) {
  // set variables
  const currentCondition = weather.current.condition.text
  const currentTempF = weather.current.temp_f
  const currentTempC = weather.current.temp_c
  const feelsLikeF = weather.current.feelslike_f
  const feelsLikeC = weather.current.feelslike_c
  const windMPH = weather.current.wind_mph
  const windKPH = weather.current.wind_kph
  const windDirection = weather.current.wind_dir
  console.log(weather)
}

function futureForecast(weather) {
  
}