import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    padding: '30px'
  }
})

export const SearchBar = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <form>
        <Box display="flex">
          <Box flexGrow={1} mr={2}>
            <TextField
              variant="outlined"
              placeholder="Поиск по названию задания"
              fullWidth
            />
          </Box>
          <Button color="primary" variant="contained">
            Найти
          </Button>
        </Box>
      </form>
    </Paper>
  )
}
