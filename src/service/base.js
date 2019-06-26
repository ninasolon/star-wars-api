import axios from 'axios'

const config = {
  baseURL: 'https://swapi.co/api/',
  timeout: 1000,
}

const protocol = axios.create(config)

export function getBase(){
  return protocol.get('planets/')
}

export function getPlanet(id){
  return protocol.get(`planets/${id}/`)
}