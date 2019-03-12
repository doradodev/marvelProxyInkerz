const fetch = require("node-fetch");
var md5 = require('md5');
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/'
const API_KEY = ''
const API_KEY_P = ''

async function getCharacters (limit, offset) {
  const ts = new Date().getTime()
  const hash = md5(ts+API_KEY_P+API_KEY)
  const query = await fetch(`${BASE_URL}characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${API_KEY}&hash=${hash}`)
  const data = await query.json()
  return data
}

async function getCharactersByNameQuery (search,limit, offset) {
  const ts = new Date().getTime()
  const hash = md5(ts+API_KEY_P+API_KEY)
  const query = await fetch(`${BASE_URL}characters?nameStartsWith=${search}&limit=${limit}&offset=${offset}&ts=${ts}&apikey=${API_KEY}&hash=${hash}`)
  const data = await query.json()
  return data
}

module.exports = {
  getCharacters: getCharacters,
  getCharactersByNameQuery: getCharactersByNameQuery
}