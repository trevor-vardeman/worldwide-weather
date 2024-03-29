const key = config.API_KEY
const importCities = cities

// dark mode
const darkSwitch = document.getElementById("flexSwitchCheckDefault")
darkSwitch.addEventListener("change", () => {
  // set variables
  let counter = document.getElementById("counter")
  // let var = 0
  const body = document.getElementById("background")
  const closeBtns = document.getElementsByClassName("btn-close")
  const submitBtn = document.getElementById("submit")
  const githubLogo = document.getElementById("github-logo")

  // console.log(counter.innerHTML)
  counter.innerHTML++
  // counter.innerHTML=var

  if (darkSwitch.checked) {
    // set attributes for dark mode
    body.setAttribute("class", "p-3 mb-2 bg-dark text-white")
    submitBtn.removeAttribute("class")
    submitBtn.setAttribute("class", "btn btn-light")
    randomBtn.removeAttribute("class")
    randomBtn.setAttribute("class", "btn btn-light")
    githubLogo.removeAttribute("src")
    githubLogo.setAttribute("src", "images/GitHub-Mark-Light-32px.png")
    for (element of closeBtns) {
      element.setAttribute("class", "btn-close btn-close-white")
    }
  } else {
    // set attributes back to light mode
    body.setAttribute("class", "p-3 mb-2 bg-light text-dark")
    submitBtn.setAttribute("class", "btn btn-dark")
    randomBtn.setAttribute("class", "btn btn-dark")
    githubLogo.removeAttribute("src")
    githubLogo.setAttribute("src", "images/GitHub-Mark-32px.png")
    for (element of closeBtns) {
      element.removeAttribute("class")
      element.setAttribute("class", "btn-close")
      element.setAttribute("aria-label", "Close")
    }
  }
})

// random button
const randomBtn = document.getElementById("random-btn")
randomBtn.addEventListener("click", () => {
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

// fetches weather at location of user's search and checks if the city is valid or not
function searchCity(searchTerm) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchTerm}&days=3&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data => {
      if (data.location != null) {
        createCards(data)
      } else alert(`${data.error.message} Please search again.`)
    })
    .catch(err => alert(err))
}

function createCards(weather) {
  // close button
  const closeBtn = document.createElement("button")
  closeBtn.addEventListener("click", e => e.target.parentNode.remove())
  closeBtn.setAttribute("aria-label", "Close")
  if (darkSwitch.checked) {
    closeBtn.setAttribute("class", "btn-close btn-close-white")
  } else {
    closeBtn.setAttribute("class", "btn-close")
  }

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
  cityGroup.setAttribute("style", "text-align: center")
  cardGroup.setAttribute("class", "card-group")
  currentCard.setAttribute("class", "card")
  currentCard.setAttribute("class", "border border-dark")
  currentCard.setAttribute("style", "min-width: 289px;")
  img.setAttribute("class", "card-img-top")
  img.setAttribute("class", "fixed-size")
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
  img.setAttribute("class", "fixed-size")
  cardTitle.innerText = `${currentCondition}`
  tempFList.innerText = `Temperature (F): ${currentTempF}`
  tempCList.innerText = `Temperature (C): ${currentTempC}`
  windChillFList.innerText = `Wind chill (F): ${windChillF}`
  windChillCList.innerText = `Wind chill (C): ${windChillC}`
  windMPHList.innerText = `Wind (MPH): ${windMPH}`
  windKPHList.innerText = `Wind (KPH): ${windKPH}`
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

  // create future forecast cards

  const futureForecast = weather.forecast.forecastday
  for (i = 0; i < futureForecast.length; i++) {
    // set variables
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
    card.setAttribute("class", "border border-dark")
    card.setAttribute("style", "min-width: 289px;")
    img.setAttribute("class", "card-img-top")
    img.setAttribute("class", "fixed-size")
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

    // set date values
    let testDate = futureForecast[i].date
    let splitDate = testDate.split("-")
    let newDateObj = new Date(splitDate[0], splitDate[1], splitDate[2])
    let stringDate = newDateObj.toString()
    let splitDateObj = stringDate.split(" ")
    let desiredDate = `${splitDateObj[0]} ${splitDateObj[1]} ${splitDateObj[2]}, ${splitDateObj[3]}`
    cardHeader.innerText = desiredDate

    img.setAttribute("src", `https:${conditionImg}`)
    img.setAttribute("alt", `Image Depicting ${condition}`)
    img.setAttribute("class", "fixed-size")

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

  // create elements & set city name variable
  const cityH5 = document.createElement("h5")
  const cityDescription = document.createElement("p")
  const cityName = weather.location.name
  const br = document.createElement("br")
  cityDescription.setAttribute("id", "city-paragraph")
  cityDescription.setAttribute("style", "max-width: fit-content;")

  function cityText(weather) {
    let cityName = weather.location.name
    let regionName = weather.location.region
    let countryName = weather.location.country
    if (regionName === "") {
      return cityH5.innerText = `${cityName}, ${countryName}`
    } else return cityH5.innerText = `${cityName}, ${regionName}, ${countryName}`
  }
  cityText(weather)

  // fetch & prepend city name and close button
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}`)
  .then(res => res.json())
  .then(data => {
    if (data.title === "Not found." || data.type === "disambiguation"){
      cityDescription.innerText = `Sorry, no Wikipedia summary found for ${cityName}.`
    } else {
      cityDescription.innerText = data.extract
    }
    cityGroup.prepend(cityDescription)
    cityGroup.prepend(cityH5)
    cityGroup.prepend(closeBtn)
    cityGroup.append(br)
  })
  .catch(err => alert(err))
}