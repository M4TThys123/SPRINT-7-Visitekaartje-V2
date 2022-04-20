//Variabele voor toggel
const toggleSection = document.querySelector("#modal")
const moodel = document.querySelector("#modal")


// Variabele aanmaken voor de URL en memberID
const baseURL = 'https://tribe.api.fdnd.nl/v1'
const endpoint = '/member'
const url = `${baseURL}${endpoint}`
const memberId = 3

// HTML elementen selecteren die vevangend moeten weorden door de API data
const role = document.querySelector('#type')
const nickname = document.querySelector('#nickname')
const avatar = document.querySelector('#avatarIMG')
const naam = document.querySelector('#naam')

get()

// Get fuctie die de een fetch uitvoer naar de API
// data omzetten van JSON naar JavaScript
// Alle HTML elementen vervangen door de juiste data en deze renderen.
async function get (){
    const response = await fetch(url)
    const data = await response.json()

    role.innerHTML = data.data[memberId].type
    nickname.innerHTML = data.data[memberId].nickname
    avatar.src = data.data[memberId].avatar
    naam.innerHTML = `${data.data[memberId].name} ${data.data[memberId].surname}`
}

console.log(role)
