import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import todoReducer from './reducer/todoReducer'
import todoEpics from './epics/todoEpics'

const epicMiddleware = createEpicMiddleware(todoEpics);

export default createStore(
  todoReducer,
  undefined,
  applyMiddleware(epicMiddleware)
)