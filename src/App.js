import React, { Component }  from 'react';
import { connect } from 'react-redux'
import TodoList from './presentation/TodoList'
import TodoInput from './presentation/TodoInput'
import { saveTodo, fetchTodos } from './store/actions/todoActions'

class App extends Component {
  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        <TodoInput onEnter={this.props.saveTodo}/>
        { this.props.fetch && <span>Fetching Todos ...</span> }
        <TodoList todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  fetch: state.fetch
})

export default connect(mapStateToProps, { saveTodo, fetchTodos })(App);