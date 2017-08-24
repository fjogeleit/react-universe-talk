import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

const fetchEpic = (action$) => action$
  .ofType('FETCH_TODOS')
  // little delay to see the fetching notification
  .delay(2000)
  .flatMap(() =>
    Observable
      // ajax get call to the local json-server api
      .ajax({ url: 'http://localhost:4000/todos', method: 'GET' })
      // transform the result to the expected payload
      .map(result => result.response)
      // dispatch success actions with the todos result
      .flatMap(payload => Observable.of(
        { type: 'SET_TODOS', payload },
        { type: 'FETCH_TODOS_FINISH' },
      ))
      // dispatch an error action if the request call fails
      .catch(error => Observable.of({ type: 'FETCH_TODOS_ERROR', error }))
  )

const saveEpic = (action$) => action$
  .ofType('SAVE_TODO')
  .flatMap(action =>
    Observable
    // execute an ajax request to persist the new todo
    .ajax({ url: 'http://localhost:4000/todos', method: 'POST', body: action.payload })
    // transform the result to the expected payload
    .map(result => result.response)
    // dispatch success actions with the todos result
    .flatMap(payload => Observable.of(
      { type: 'ADD_TODO', payload },
      { type: 'SAVE_TODO_FINISH' },
    ))
    // dispatch an error action if the request call fails
    .catch(error => Observable.of({ type: 'SAVE_TODO_ERROR', error }))
  )

export default combineEpics(fetchEpic, saveEpic)