import { paths } from './paths'

import { HomePage } from './home'
import { NotFoundPage } from './not-found'
import { CreatePage } from './create'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage
  },
  {
    path: paths.create(),
    exact: true,
    component: CreatePage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]
