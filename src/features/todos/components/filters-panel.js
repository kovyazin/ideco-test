import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { todosSelectors, todosActions } from '../model'

const useStyles = makeStyles({
  root: {
    padding: '30px 15px'
  },
  title: {
    marginBottom: '20px'
  },
  formControl: {
    width: '100%',
    marginBottom: '20px'
  },
  formLabel: {
    marginBottom: '10px'
  }
})

export const FiltersPanel = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const users = useSelector(todosSelectors.usersList)
  const filters = useSelector(todosSelectors.filters)

  const [values, setValues] = useState({
    status: 'all',
    userId: 'all'
  })

  const isNotInitial = values.status !== 'all' || values.userId !== 'all'

  useEffect(() => {
    setValues({
      status: filters.status,
      userId: filters.userId
    })
  }, [filters])

  const handleApplyFilters = (e) => {
    e.preventDefault()

    dispatch(todosActions.setFilters(values))
  }

  const handleClearFilters = () => {
    dispatch(todosActions.setFilters({ status: 'all', userId: 'all' }))
  }

  const handleChangeValue = (e) => {
    const { value, name } = e.target

    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} align="center">
        Фильтры
      </Typography>
      <form onSubmit={handleApplyFilters}>
        <FormControl
          component="fieldset"
          variant="outlined"
          className={classes.formControl}
        >
          <FormLabel className={classes.formLabel} component="legend">
            Статус
          </FormLabel>
          <Select
            value={values.status}
            onChange={handleChangeValue}
            name="status"
          >
            <MenuItem value="all">Все</MenuItem>
            <MenuItem value="completed">Выполненные</MenuItem>
            <MenuItem value="uncompleted">Невыполненные</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          component="fieldset"
          variant="outlined"
          className={classes.formControl}
        >
          <FormLabel className={classes.formLabel} component="legend">
            Исполнитель
          </FormLabel>
          <Select
            value={values.userId}
            onChange={handleChangeValue}
            name="userId"
          >
            <MenuItem value="all">Все</MenuItem>
            {users.map(({ name, id }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined" color="primary" fullWidth>
          Применить
        </Button>
        {isNotInitial && (
          <Box mt={2}>
            <Button onClick={handleClearFilters} variant="outlined" fullWidth>
              Сбросить
            </Button>
          </Box>
        )}
      </form>
    </Paper>
  )
}
