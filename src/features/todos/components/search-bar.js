import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { todosActions, todosSelectors } from '@features/todos'

const useStyles = makeStyles({
  root: {
    padding: '30px'
  }
})

export const SearchBar = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const searchValue = useSelector(todosSelectors.searchValue)

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(searchValue)
  }, [searchValue])

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    dispatch(todosActions.setSearchValue(value))
  }

  const handleSearchValueChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSearchSubmit}>
        <Box display="flex">
          <Box flexGrow={1} mr={2}>
            <TextField
              value={value}
              variant="outlined"
              placeholder="Поиск по названию задания"
              onChange={handleSearchValueChange}
              fullWidth
            />
          </Box>
          <Button type="submit" color="primary" variant="contained">
            Найти
          </Button>
        </Box>
      </form>
    </Paper>
  )
}
