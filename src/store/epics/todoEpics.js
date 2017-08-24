import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

const fetchEpic = (action$) => action$
  .ofType('FETCH_TODOS')
  .delay(2000)
  .flatMap(() =>
    Observable
      .ajax({ url: 'http://localhost:4000/todos', method: 'GET' })
      .map(result => result.response)
      .flatMap(payload => Observable.of(
        { type: 'SET_TODOS', payload },
        { type: 'FETCH_TODOS_FINISH' },
      ))
      .catch(error => Observable.of({ type: 'FETCH_TODOS_ERROR', error }))
  )

const saveEpic = (action$) => action$
  .ofType('SAVE_TODO')
  .flatMap(action =>
    Observable
    .ajax({ url: 'http://localhost:4000/todos', method: 'POST', body: action.payload })
    .map(result => result.response)
    .flatMap(payload => Observable.of(
      { type: 'ADD_TODO', payload },
      { type: 'SAVE_TODO_FINISH' },
    ))
    .catch(error => Observable.of({ type: 'SAVE_TODO_ERROR', error }))
  )

export default combineEpics(fetchEpic, saveEpic)