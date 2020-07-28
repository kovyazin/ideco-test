import React, { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

import { todosSelectors, todosActions } from '@features/todos'

export const TableItem = ({ id, userId, completed, title }) => {
  const dispatch = useDispatch()
  const user = useSelector(todosSelectors.user(userId))

  const [isEditTitle, setIsEditTitle] = useState(false)
  const [currentTitleValue, setCurrentTitleValue] = useState('')

  const titleTextField = useRef(null)

  useEffect(() => {
    if (isEditTitle) setCurrentTitleValue(title)
  }, [isEditTitle, title])

  useEffect(() => {
    if (isEditTitle) titleTextField.current.focus()
  }, [isEditTitle])

  const handleDeteteItem = () => {
    dispatch(todosActions.deleteTodoItem(id))
  }

  const handleToggleStatus = () => {
    dispatch(todosActions.toggleTodoItemStatus(id))
  }

  const handleChangeTitle = (e) => {
    setCurrentTitleValue(e.target.value)
  }

  const handleChangeTitleSubmit = (e) => {
    e.preventDefault()

    if (title !== currentTitleValue) {
      dispatch(todosActions.changeTodoItemTitle(id, currentTitleValue))
    }

    setIsEditTitle(false)
  }

  return (
    <TableRow key={id}>
      <TableCell>
        <Switch
          checked={completed}
          onChange={handleToggleStatus}
          color="primary"
        />
      </TableCell>
      <TableCell>
        {!isEditTitle && (
          <span onClick={() => setIsEditTitle(true)}>{title}</span>
        )}
        {isEditTitle && (
          <form onSubmit={handleChangeTitleSubmit}>
            <Box display="flex" alignItems="center">
              <TextField
                inputRef={titleTextField}
                value={currentTitleValue}
                onChange={handleChangeTitle}
                fullWidth
              />
              <IconButton color="primary" type="submit">
                <CheckIcon />
              </IconButton>
            </Box>
          </form>
        )}
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={handleDeteteItem}
          color="secondary"
          aria-label="удалить"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

TableItem.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}
