const key = config.API_KEY
const importCities = cities

// random button
const randomBtn = document.getElementById("random-btn")
// const randomCity = importCities[Math.floor(Math.random() * importCities.length)]
randomBtn.addEventListener("click", (e) => {
  let randomCity = importCities[Math.floor(Math.random() * importCities.length)]
  searchCity(randomCity)
})

// get submit form & add event listener
const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", e => executeSearch(e))

// saves search value as variable and passes it as argument to searchCity
function executeSearch(e) {
  e.preventDefault()
  const searchTerm = document.getElementById("search").value
  searchForm.reset()
  searchCity(searchTerm)
}

// fetches current weather at location of user's search
function searchCity(searchTerm) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchTerm}&days=3&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data => checkForValidCity(data))
    .catch(err => alert(err))
}

// checks for valid city or invalid search term
function checkForValidCity(city) {
  if (city.location != null) {
    createCards(city)
  } else alert(`${city.error.message} Please search again.`)
}

function createCards(weather) {
  // close button
  let closeBtn = document.createElement("button")
  closeBtn.setAttribute("class", "btn-close")
  closeBtn.setAttribute("aria-label", "Close")
  closeBtn.addEventListener("click", e => e.target.parentNode.remove())
  
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

  // create card HTML elements
  const cityGroup = document.createElement("div")
  const cardGroup = document.createElement("div")
  const currentCard = document.createElement("div")
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
  cityGroup.setAttribute("class", "city-group")
  cardGroup.setAttribute("class", "card-group")
  currentCard.setAttribute("class", "card")
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

  // set values
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

  // append current condition elements to card
  const container = document.getElementById("city-and-weather")
  
  container.prepend(cityGroup)
  cityGroup.append(cardGroup)
  cardGroup.append(currentCard)
  currentCard.append(cardHeader)
  currentCard.append(img)
  currentCard.append(cardBody)
  cardBody.append(cardTitle)
  cardBody.append(listGroup)
  listGroup.append(tempFList)
  listGroup.append(windChillFList)
  listGroup.append(windMPHList)
  listGroup.append(windDirList)

  const futureForecast = weather.forecast.forecastday
  for (i = 0; i < futureForecast.length; i++) {
    // set variables
    let date = futureForecast[i].date
    let condition = futureForecast[i].day.condition.text
    let conditionImg = futureForecast[i].day.condition.icon
    let highTempF = futureForecast[i].day.maxtemp_f
    let highTempC = futureForecast[i].day.maxtemp_c
    let lowTempF = futureForecast[i].day.mintemp_f
    let lowTempC = futureForecast[i].day.mintemp_c
    let maxWindMPH = futureForecast[i].day.maxwind_mph
    let maxWindKPH = futureForecast[i].day.maxwind_kph
    let chanceRain = futureForecast[i].day.daily_chance_of_rain
    let chanceSnow = futureForecast[i].day.daily_chance_of_snow
    let sunrise = futureForecast[i].astro.sunrise
    let sunset = futureForecast[i].astro.sunset
    let moonrise = futureForecast[i].astro.moonrise
    let moonset = futureForecast[i].astro.moonset
    let moonPhase = futureForecast[i].astro.moon_phase

    // create card HTML elements
    let card = document.createElement("div")
    let cardHeader = document.createElement("div")
    let cardBody = document.createElement("div")
    let img = document.createElement("img")
    let cardTitle = document.createElement("h5")
    let listGroup = document.createElement("ul")
    let conditionList = document.createElement("li")
    let highTempFList = document.createElement("li")
    let highTempCList = document.createElement("li")
    let lowTempFList = document.createElement("li")
    let lowTempCList = document.createElement("li")
    let maxWindMPHList = document.createElement("li")
    let maxWindKPHList = document.createElement("li")
    let chanceRainList = document.createElement("li")
    let chanceSnowList = document.createElement("li")
    let sunriseList = document.createElement("li")
    let sunsetList = document.createElement("li")
    let moonriseList = document.createElement("li")
    let moonsetList = document.createElement("li")
    let moonPhaseList = document.createElement("li")

    // set card bootstrap attributes
    card.setAttribute("class", "card")
    img.setAttribute("class", "card-img-top")
    cardHeader.setAttribute("class", "card-header")
    cardBody.setAttribute("class", "card-body")
    cardTitle.setAttribute("class", "card-title")
    listGroup.setAttribute("class", "list-group")
    conditionList.setAttribute("class", "list-group-item")
    highTempFList.setAttribute("class", "list-group-item")
    highTempCList.setAttribute("class", "list-group-item")
    lowTempFList.setAttribute("class", "list-group-item")
    lowTempCList.setAttribute("class", "list-group-item")
    maxWindMPHList.setAttribute("class", "list-group-item")
    maxWindKPHList.setAttribute("class", "list-group-item")
    chanceRainList.setAttribute("class", "list-group-item")
    chanceSnowList.setAttribute("class", "list-group-item")
    sunriseList.setAttribute("class", "list-group-item")
    sunsetList.setAttribute("class", "list-group-item")
    moonriseList.setAttribute("class", "list-group-item")
    moonsetList.setAttribute("class", "list-group-item")
    moonPhaseList.setAttribute("class", "list-group-item")

    // set values
    cardHeader.innerText = `${date}`
    img.setAttribute("src", `https:${conditionImg}`)
    img.setAttribute("alt", `Image Depicting ${condition}`)
    cardTitle.innerText = `${condition}`
    highTempFList.innerText = `High Temperature (F): ${highTempF}`
    highTempCList.innerText = `High Temperature (C): ${highTempC}`
    lowTempFList.innerText = `Low Temperature (F): ${lowTempF}`
    lowTempCList.innerText = `Low Temperature (C): ${lowTempC}`
    maxWindMPHList.innerText = `Max Wind (MPH): ${maxWindMPH}`
    maxWindKPHList.innerText = `Max Wind (KPH): ${maxWindKPH}`
    chanceRainList.innerText = `Chance of Rain: ${chanceRain}%`
    chanceSnowList.innerText = `Chance of Snow: ${chanceSnow}%`
    sunriseList.innerText = `Sunrise: ${sunrise}`
    sunsetList.innerText = `Sunset: ${sunset}`
    moonriseList.innerText = `Moonrise: ${moonrise}`
    moonsetList.innerText = `Moonset: ${moonset}`
    moonPhaseList.innerText = `Moon Phase: ${moonPhase}`

    // append future forecast elements to card
    cardGroup.append(card)
    card.append(cardHeader)
    card.append(img)
    card.append(cardBody)
    cardBody.append(cardTitle)
    cardBody.append(listGroup)
    listGroup.append(highTempFList)
    listGroup.append(lowTempFList)
    listGroup.append(chanceRainList)
    listGroup.append(chanceSnowList)
    listGroup.append(sunriseList)
    listGroup.append(sunsetList)
    listGroup.append(moonriseList)
    listGroup.append(moonsetList)
    listGroup.append(moonPhaseList)
  }

  // city info
  // set variables


  const cityName = weather.location.name
  // const cityText = weather => {
  //   let cityName = weather.location.name
  //   let regionName = weather.location.region
  //   let countryName = weather.location.country
  //   if (regionName === "") {
  //     return `${cityName}, ${countryName}`
  //   } else return `${cityName}, ${regionName}, ${countryName}`
  // }
  // console.log(cityText(weather))
  const regionName = weather.location.region
  const countryName = weather.location.country

  // create elements
  const cityH3 = document.createElement("h3")
  cityH3.innerText = `${cityName}, ${regionName}, ${countryName}`
  const cityDescription = document.createElement("p")
  // cityH3.innerText = cityText()

  // fetch & prepend city name and close button
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (data.title === "Not found." || data.type === "disambiguation"){
      cityDescription.innerText = `Sorry, no Wikipedia summary found for ${cityName}.`
    } else {
      cityDescription.innerText = data.extract
    }
    cityGroup.prepend(cityDescription)
    cityGroup.prepend(cityH3)
    cityGroup.prepend(closeBtn)
  })
  .catch(err => alert(err))

  console.log(weather)
}