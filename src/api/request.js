import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/'
})
