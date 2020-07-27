import { createSelector } from 'reselect'

export const todosList = (state) => state.todos.todosList
export const todosListIsFetching = (state) => state.todos.todosListIsFetching
export const todosListError = (state) => state.todos.todosListError

export const usersList = (state) => state.todos.usersList
export const usersListIsFetching = (state) => state.todos.usersListIsFetching
export const usersListError = (state) => state.todos.usersListError

export const user = (id) =>
  createSelector(usersList, (users) => users.find((user) => user.id === id))
