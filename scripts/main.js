const baseURL = 'https://tribe.api.fdnd.nl/v1'
const endpoint = '/member'
const url = `${baseURL}${endpoint}`
const memberId = 3

const role = document.querySelector('#type')
const nickname = document.querySelector('#nickname')
const avatar = document.querySelector('#avatarIMG')
const naam = document.querySelector('#naam')

get()

async function get (){
    const response = await fetch(url)
    const data = await response.json()

    role.innerHTML = data.data[memberId].type
    nickname.innerHTML = data.data[memberId].nickname
    avatar.innerHTML = data.data[memberId].url
    naam.innerHTML = `${data.data[memberId].name} ${data.data[memberId].surname}`
}

console.log(role)
