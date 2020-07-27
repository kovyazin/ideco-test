import { paths } from './paths'

import { HomePage } from './home'
import { NotFoundPage } from './not-found'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]
