import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

import {
  TodosTable,
  FiltersPanel,
  SearchBar,
  todosActions,
  todosSelectors
} from '@features/todos'
import { MainTemplate } from '@ui'
import { useTitle } from '@lib/title'

export const HomePage = () => {
  const dispatch = useDispatch()
  const filteredTodos = useSelector(todosSelectors.filteredTodosList)
  const isFetching = useSelector(todosSelectors.todosListIsFetching)
  const error = useSelector(todosSelectors.todosListError)

  useTitle(`Всего ${filteredTodos.length}`)

  useEffect(() => {
    const request = async () => {
      await dispatch(todosActions.fetchUsers())
      dispatch(todosActions.fetchTodos())
    }

    request()
  }, [dispatch])

  return (
    <MainTemplate sidebar={<FiltersPanel />} searchbar={<SearchBar />}>
      {isFetching && <CircularProgress />}
      {error && (
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          {error}
        </Alert>
      )}
      {filteredTodos.length >= 1 && <TodosTable todos={filteredTodos} />}
    </MainTemplate>
  )
}
