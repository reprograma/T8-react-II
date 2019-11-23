import axios from 'axios'

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPosts () {
  const endpoint = '/posts'
  return protocolo.get(endpoint)
}

export function getAlbums () {
  const endpoint = '/albums'
  return protocolo.get(endpoint)
}
