document.addEventListener("DOMContentLoaded", () => console.log("test"))

// get user's IP
// function getIP() {
//   fetch("https://www.cloudflare.com/cdn-cgi/trace")
//     .then(resp => resp.text())
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
  console.log(searchTerm)
}