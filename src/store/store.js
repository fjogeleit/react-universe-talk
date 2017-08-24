import todoReducer from './reducer/todoReducer'
import { createStore } from 'redux'

export default createStore(todoReducer, {
  todos: [
    { task: 'do stuff' },
    { task: 'do other stuff' }
  ]
})