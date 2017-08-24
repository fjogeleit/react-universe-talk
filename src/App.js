import React  from 'react';
import PropTypes from 'prop-types'

const App = (props) => (
  <ul className="todos">
    {props.todos.map((todo, index) =>
      <li key={index}>{todo.task}</li>
    )}
  </ul>
)

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string.isRequired
  })).isRequired
}

export default App;