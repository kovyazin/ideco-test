import React from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    minHeight: (props) => (props.fullHeight ? '100vh' : 'auto')
  }
})

export const ContentCenter = ({ children, className, fullHeight }) => {
  const classes = useStyles({ fullHeight })

  return (
    <Box
      className={`${classes.root} ${className}`}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}

ContentCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
