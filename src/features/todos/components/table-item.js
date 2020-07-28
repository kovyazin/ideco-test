import React from 'react'

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { todosSelectors } from '@features/todos'

export const TableItem = ({ id, userId, completed, title }) => {
  const user = useSelector(todosSelectors.user(userId))

  return (
    <TableRow key={id}>
      <TableCell>
        <Switch checked={completed} color="primary" />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell align="right">
        <IconButton color="secondary" aria-label="удалить">
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
