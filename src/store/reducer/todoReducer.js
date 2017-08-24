export default (state = { todos: [], fetch: false }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case 'FETCH_TODOS':
      return {
        ...state,
        fetch: true
      }
    case 'FETCH_TODOS_FINISH':
      return {
        ...state,
        fetch: false
      }
    default:
      return state
  }
}