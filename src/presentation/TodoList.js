import React  from 'react';
import PropTypes from 'prop-types'
import { compose, setDisplayName, setPropTypes } from 'recompose'

const enhance = compose(
  // set the name of this component
  setDisplayName('TodoList'),
  // define component prop-types
  setPropTypes({
    todos: PropTypes.arrayOf(PropTypes.shape({
      task: PropTypes.string.isRequired
    })).isRequired
  })
)

export default enhance(({ todos }) => (
  <ul className="todos">
    {todos.map((todo, index) =>
      <li key={index}>{todo.task}</li>
    )}
  </ul>
))