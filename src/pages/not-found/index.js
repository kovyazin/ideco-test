import React from 'react'

import { useHistory } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { ContentCenter } from '@ui'

export const NotFoundPage = () => {
  const history = useHistory()

  return (
    <ContentCenter fullHeight>
      <Box mb={2}>
        <Typography align="center" variant="h1">
          404
        </Typography>
        <Typography align="center" variant="subtitle1">
          Страницы, которую вы ищите, не существует
        </Typography>
      </Box>
      <Button
        onClick={() => history.push('/')}
        variant="outlined"
        color="primary"
      >
        Вернуться на главную
      </Button>
    </ContentCenter>
  )
}
