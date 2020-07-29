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
    case types.DELETE_TODO_ITEM:
      return {
        ...state,
        todosList: state.todosList.filter(
          (todoItem) => todoItem.id !== action.payload
        )
      }
    case types.TOGGLE_TODO_ITEM_STATUS:
      return {
        ...state,
        todosList: state.todosList.map((todoItem) => {
          if (todoItem.id !== action.payload) return todoItem

          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        })
      }
    case types.CHANGE_TODO_ITEM_TITLE:
      return {
        ...state,
        todosList: state.todosList.map((todoItem) => {
          if (todoItem.id !== action.payload.id) return todoItem

          return {
            ...todoItem,
            title: action.payload.title
          }
        })
      }
    case types.ADD_USER:
      if (state.usersList.some((user) => user.name === action.payload))
        return state

      return {
        ...state,
        usersList: [
          ...state.usersList,
          {
            id: state.usersList.length + 1,
            name: action.payload
          }
        ]
      }
    case types.ADD_TODO_ITEM:
      return {
        ...state,
        todosList: [
          ...state.todosList,
          {
            id: state.todosList.length + 1,
            title: action.payload.title,
            completed: false,
            userId: state.usersList.find(
              (user) => user.name === action.payload.user
            ).id
          }
        ]
      }
    default:
      return state
  }
}
