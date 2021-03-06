import React from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  wrapper: {
    minHeight: '100vh',
    padding: '50px 0'
  }
})

export const MainTemplate = ({ children, sidebar, searchbar }) => {
  const classes = useStyles()

  return (
    <Container>
      <Box className={classes.wrapper}>
        <Grid spacing={3} container>
          <Grid xs={12} item>
            {searchbar}
          </Grid>
          <Grid xs={12} sm={4} md={3} item>
            {sidebar}
          </Grid>
          <Grid xs={12} sm={8} md={9} item>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  searchbar: PropTypes.node.isRequired
}
