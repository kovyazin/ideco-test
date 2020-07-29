import { createSelector } from 'reselect'

export const todosList = (state) => state.todos.todosList
export const todosListIsFetching = (state) => state.todos.todosListIsFetching
export const todosListError = (state) => state.todos.todosListError

export const usersList = (state) => state.todos.usersList
export const usersListIsFetching = (state) => state.todos.usersListIsFetching
export const usersListError = (state) => state.todos.usersListError
export const user = (id) =>
  createSelector(usersList, (users) => users.find((user) => user.id === id))

export const filters = (state) => state.todos.filters

export const searchValue = (state) => state.todos.searchValue

export const filteredTodosList = createSelector(
  [filters, searchValue, todosList],
  (filters, searchValue, todosList) =>
    todosList.filter((todoItem) => {
      const searchIsMatches = todoItem.title.includes(searchValue)
      const userIdIsMatches =
        todoItem.userId === filters.userId || filters.userId === 'all'
      const statusIsMatches =
        (filters.status === 'completed' && todoItem.completed) ||
        (filters.status === 'uncompleted' && !todoItem.completed) ||
        filters.status === 'all'

      return searchIsMatches && userIdIsMatches && statusIsMatches
    })
)
