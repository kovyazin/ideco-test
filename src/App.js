import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { Pages } from '@pages'

export const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  )
}
