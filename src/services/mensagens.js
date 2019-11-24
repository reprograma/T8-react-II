import axios from 'axios'

const config = {
  baseURL: 'https://my-json-server.typicode.com',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getMensagens () {
  const url = '/reprograma/T8-React-II/mensagens'
  return protocolo.get(url)
}
