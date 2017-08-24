import React  from 'react';
import { connect } from 'react-redux'
import TodoList from './presentation/TodoList'
import TodoInput from './presentation/TodoInput'
import { addTodo } from './store/actions/todoActions'

const App = ({ addTodo, todos }) => (
  <div>
    <TodoInput onEnter={addTodo} />
    <TodoList todos={todos} />
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, { addTodo })(App);