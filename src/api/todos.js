import { request } from './request'

export const getTodos = () =>
  request.get('/todos').then((response) => response.data)

export const getUsers = () =>
  request.get('/users').then((response) => response.data)
