import React  from 'react';
import PropTypes from 'prop-types'

const TodoList = ({ todos }) => (
  <ul className="todos">
    {todos.map((todo, index) =>
      <li key={index}>{todo.task}</li>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string.isRequired
  })).isRequired
}

export default TodoList