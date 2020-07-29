import React from 'react'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import {
  TodosTable,
  FiltersPanel,
  SearchBar,
  todosSelectors
} from '@features/todos'
import { MainTemplate } from '@ui'
import { useTitle } from '@lib/title'

export const HomePage = () => {
  const history = useHistory()
  const filteredTodos = useSelector(todosSelectors.filteredTodosList)
  const isFetching = useSelector(todosSelectors.todosListIsFetching)
  const error = useSelector(todosSelectors.todosListError)

  useTitle(`Всего ${filteredTodos.length}`)

  return (
    <MainTemplate sidebar={<FiltersPanel />} searchbar={<SearchBar />}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography>Всего: {filteredTodos.length}</Typography>
        <Button
          onClick={() => history.push('/create')}
          variant="outlined"
          color="primary"
        >
          Добавить
        </Button>
      </Box>
      {filteredTodos.length >= 1 && <TodosTable todos={filteredTodos} />}
      {isFetching && <CircularProgress />}
      {error && (
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          {error}
        </Alert>
      )}
    </MainTemplate>
  )
}
