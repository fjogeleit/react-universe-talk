import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import todoReducer from './reducer/todoReducer'
import todoEpics from './epics/todoEpics'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware(todoEpics);

export default createStore(
  todoReducer,
  undefined,
  composeEnhancers(applyMiddleware(epicMiddleware))
)