import React from 'react';
import { connect } from 'react-redux'
import TodoList from './presentation/TodoList'
import TodoInput from './presentation/TodoInput'
import { saveTodo, fetchTodos } from './store/actions/todoActions'
import {
  branch, compose, lifecycle, renderComponent,
  setDisplayName,
} from 'recompose'

const enhance = compose(
  // set the name of this component
  setDisplayName('App'),
  // connect to redux store
  connect(
    (state) => ({ todos: state.todos, fetch: state.fetch }),
    { saveTodo, fetchTodos }
  ),
  // add react lifecycle functions
  // see: http://busypeoples.github.io/post/react-component-lifecycle/
  lifecycle({
    componentWillMount() {
      this.props.fetchTodos()
    }
  }),
  // render alternative component
  branch(
    ({ fetch }) => fetch,                                   // if true...
    renderComponent(() => <span>Fetching Todos ...</span>)  // ...render this component
  )
)

// if false render the result of this function
export default enhance(({ saveTodo, fetch, todos }) => (<div>
    <TodoInput onEnter={saveTodo}/>
    <TodoList todos={todos}/>
  </div>
))