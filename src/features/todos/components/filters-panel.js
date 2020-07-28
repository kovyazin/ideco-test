import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

import { todosActions, todosSelectors } from '../model'

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
  const classes = useStyles()
  const users = useSelector(todosSelectors.usersList)

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} align="center">
        Фильтры
      </Typography>
      <form>
        <FormControl
          component="fieldset"
          variant="outlined"
          className={classes.formControl}
        >
          <FormLabel className={classes.formLabel} component="legend">
            Статус
          </FormLabel>
          <Select>
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
          <Select>
            <MenuItem value="all">Все</MenuItem>
            {users.map(({ name, id }) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="outlined" color="primary" fullWidth>
          Применить
        </Button>
      </form>
    </Paper>
  )
}
