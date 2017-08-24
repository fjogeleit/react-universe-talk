export const saveTodo = (todo) => ({ type: 'SAVE_TODO', payload: { task: todo }})
export const fetchTodos = (todo) => ({ type: 'FETCH_TODOS' })