import { combineReducers } from 'redux'

import { todosReducer } from '@features/todos'

export const rootReducer = combineReducers({
  todos: todosReducer
})
