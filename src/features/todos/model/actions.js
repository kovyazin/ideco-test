import * as types from './types'

import { getTodos, getUsers } from '@api/todos'

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(fetchTodosRequest())

    const todos = await getTodos()

    dispatch(fetchTodosSuccess(todos))
  } catch (e) {
    dispatch(fetchTodosFailure(e.message))
  }
}
const fetchTodosRequest = () => ({
  type: types.FETCH_TODOS_REQUEST
})
const fetchTodosSuccess = (todos) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: todos
})
const fetchTodosFailure = (error) => ({
  type: types.FETCH_TODOS_FAILURE,
  payload: error
})

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest())

    const users = await getUsers()

    dispatch(fetchUsersSuccess(users))
  } catch (e) {
    dispatch(fetchUsersFailure(e.message))
  }
}
export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST
})
export const fetchUsersSuccess = (users) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users
})
export const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error
})

export const setFilters = (filters) => ({
  type: types.SET_FILTERS,
  payload: filters
})

export const setSearchValue = (value) => ({
  type: types.SET_SEARCH_VALUE,
  payload: value
})

export const deleteTodoItem = (id) => ({
  type: types.DELETE_TODO_ITEM,
  payload: id
})

export const toggleTodoItemStatus = (id) => ({
  type: types.TOGGLE_TODO_ITEM_STATUS,
  payload: id
})

export const changeTodoItemTitle = (id, title) => ({
  type: types.CHANGE_TODO_ITEM_TITLE,
  payload: {
    id,
    title
  }
})

export const createTodoItem = ({ title, user }) => (dispatch) => {
  dispatch(addUser(user))
  dispatch(addTodoItem(title, user))
}

const addUser = (user) => ({
  type: types.ADD_USER,
  payload: user
})

const addTodoItem = (title, user) => ({
  type: types.ADD_TODO_ITEM,
  payload: {
    title,
    user
  }
})
