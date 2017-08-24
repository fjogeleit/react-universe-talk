import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      { task: 'do stuff' },
      { task: 'do other stuff' }
    ]
  }

  render() {
    return (
      <ul className="todos">
        {this.state.todos.map((todo, index) =>
          <li key={index}>{todo.task}</li>
        )}
      </ul>
    );
  }
}

export default App;
