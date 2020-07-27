import React from 'react'

import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { TableItem } from './table-item'

export const TodosTable = ({ todos }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Статус</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Имя исполнителя</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map(({ id, userId, completed, title }) => (
            <TableItem
              id={id}
              userId={userId}
              completed={completed}
              title={title}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

TodosTable.propTypes = {
  todos: PropTypes.array.isRequired
}
