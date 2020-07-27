import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

import { TodosTable, todosActions, todosSelectors } from '@features/todos'
import { MainTemplate } from '@ui'

export const HomePage = () => {
  const dispatch = useDispatch()
  const todos = useSelector(todosSelectors.todosList)
  const isFetching = useSelector(todosSelectors.todosListIsFetching)
  const error = useSelector(todosSelectors.todosListError)

  useEffect(() => {
    const request = async () => {
      await dispatch(todosActions.fetchUsers())
      dispatch(todosActions.fetchTodos())
    }

    request()
  }, [dispatch])

  return (
    <MainTemplate sidebar={<h1>Sidebar</h1>}>
      {isFetching && <CircularProgress />}
      {error && (
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          {error}
        </Alert>
      )}
      {todos.length >= 1 && <TodosTable todos={todos} />}
    </MainTemplate>
  )
}
