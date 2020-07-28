import * as types from './types'

const initialState = {
  todosList: [],
  todosListIsFetching: false,
  todosListError: null,
  usersList: [],
  usersListIsFetching: false,
  usersListError: null,
  filters: {
    status: 'all',
    userId: 'all'
  },
  searchValue: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return {
        ...state,
        todosListIsFetching: true
      }
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todosListIsFetching: false,
        todosList: action.payload
      }
    case types.FETCH_TODOS_FAILURE:
      return {
        ...state,
        todosListIsFetching: false,
        todosListError: action.payload
      }
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        usersListIsFetching: true
      }
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersListIsFetching: false,
        usersList: action.payload.map(({ id, name }) => ({
          id,
          name
        }))
      }
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        usersListIsFetching: false,
        error: action.payload
      }
    case types.SET_FILTERS:
      return {
        ...state,
        filters: action.payload
      }
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state
  }
}
