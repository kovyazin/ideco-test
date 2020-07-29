import React, { useEffect, Fragment } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'

import { Pages } from '@pages'
import { todosActions } from '@features/todos'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const request = async () => {
      await dispatch(todosActions.fetchUsers())
      dispatch(todosActions.fetchTodos())
    }

    request()
  }, [dispatch])

  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <Pages />
      </Router>
    </Fragment>
  )
}
